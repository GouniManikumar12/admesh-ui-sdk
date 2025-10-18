/**
 * AdMesh UI SDK - MRC Viewability Tracker Hook
 * React hook for tracking ad viewability according to MRC standards
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import type {
  ViewabilityTrackerConfig,
  ViewabilityTrackerState,
  ViewabilityAnalyticsEvent,
  ViewabilityTimeMetrics,
  ViewabilityEngagementMetrics,
  ViewabilityEventType,
  MRCViewabilityStandards
} from '../types/analytics';
import {
  calculateMRCStandards,
  calculateVisibilityPercentage,
  calculateScrollDepth,
  collectContextMetrics,
  generateSessionId,
  meetsViewabilityThreshold,
  formatTimestamp,
  calculateAverage,
  sendAnalyticsEvent,
  sendAnalyticsBatch,
  throttle
} from '../utils/viewabilityTracker';

// Default configuration
const DEFAULT_CONFIG: ViewabilityTrackerConfig = {
  enabled: true,
  apiEndpoint: 'https://api.useadmesh.com/analytics/ui-sdk/viewability',
  enableBatching: true,
  batchSize: 10,
  batchTimeout: 5000, // 5 seconds
  debug: false,
  enableRetry: true,
  maxRetries: 3,
  retryDelay: 1000
};

// Global config that can be set by consuming application
let globalConfig: ViewabilityTrackerConfig = DEFAULT_CONFIG;

export const setViewabilityTrackerConfig = (config: Partial<ViewabilityTrackerConfig>) => {
  globalConfig = { ...globalConfig, ...config };
};

interface UseViewabilityTrackerProps {
  /** Ad ID */
  adId: string;
  /** Product ID */
  productId?: string;
  /** Offer ID */
  offerId?: string;
  /** Agent ID */
  agentId?: string;
  /** HTML element to track */
  elementRef: React.RefObject<HTMLElement>;
  /** Custom configuration */
  config?: Partial<ViewabilityTrackerConfig>;
}

export function useViewabilityTracker({
  adId,
  productId,
  offerId,
  agentId,
  elementRef,
  config: customConfig
}: UseViewabilityTrackerProps): ViewabilityTrackerState {
  const config = { ...globalConfig, ...customConfig };

  // Session ID (persists for component lifetime)
  const sessionId = useRef(generateSessionId());

  // State
  const [state, setState] = useState<ViewabilityTrackerState>({
    isVisible: false,
    isViewable: false,
    visibilityPercentage: 0,
    timeMetrics: {
      loadedAt: formatTimestamp(),
      totalVisibleDuration: 0,
      totalViewableDuration: 0,
      totalHoverDuration: 0,
      totalFocusDuration: 0
    },
    engagementMetrics: {
      currentScrollDepth: 0,
      viewportEnterCount: 0,
      viewportExitCount: 0,
      hoverCount: 0,
      wasClicked: false,
      maxVisibilityPercentage: 0,
      averageVisibilityPercentage: 0
    },
    isTracking: config.enabled
  });

  // Refs for tracking
  const mrcStandards = useRef<MRCViewabilityStandards | null>(null);
  const visibilityStartTime = useRef<number | null>(null);
  const viewableStartTime = useRef<number | null>(null);
  const hoverStartTime = useRef<number | null>(null);
  const focusStartTime = useRef<number | null>(null);
  const visibilityPercentages = useRef<number[]>([]);
  const eventBatch = useRef<ViewabilityAnalyticsEvent[]>([]);
  const batchTimeout = useRef<NodeJS.Timeout | null>(null);

  // Log helper
  const log = useCallback((message: string, data?: unknown) => {
    if (config.debug) {
      console.log(`[AdMesh Viewability] ${message}`, data);
    }
  }, [config.debug]);

  // Send event (batched or immediate)
  const sendEvent = useCallback(async (eventType: ViewabilityEventType, additionalData?: Record<string, unknown>) => {
    if (!config.enabled || !elementRef.current || !mrcStandards.current) return;

    const contextMetrics = collectContextMetrics(elementRef.current);

    const event: ViewabilityAnalyticsEvent = {
      eventType,
      timestamp: formatTimestamp(),
      sessionId: sessionId.current,
      adId,
      productId,
      offerId,
      agentId,
      timeMetrics: state.timeMetrics,
      engagementMetrics: state.engagementMetrics,
      contextMetrics,
      mrcStandards: mrcStandards.current,
      isViewable: state.isViewable,
      metadata: additionalData
    };

    log(`Event: ${eventType}`, event);

    // Call custom callback if provided
    if (config.onEvent) {
      config.onEvent(event);
    }

    if (config.enableBatching) {
      // Add to batch
      eventBatch.current.push(event);

      // Send batch if size limit reached
      if (eventBatch.current.length >= config.batchSize) {
        await flushBatch();
      } else {
        // Set timeout to send batch
        if (batchTimeout.current) clearTimeout(batchTimeout.current);
        batchTimeout.current = setTimeout(flushBatch, config.batchTimeout);
      }
    } else {
      // Send immediately
      await sendAnalyticsEvent(event, config.apiEndpoint, config.maxRetries, config.retryDelay);
    }
  }, [config, adId, productId, offerId, agentId, elementRef, state, log]);

  // Flush event batch
  const flushBatch = useCallback(async () => {
    if (eventBatch.current.length === 0) return;

    const events = [...eventBatch.current];
    eventBatch.current = [];

    if (batchTimeout.current) {
      clearTimeout(batchTimeout.current);
      batchTimeout.current = null;
    }

    const success = await sendAnalyticsBatch(
      events,
      sessionId.current,
      config.apiEndpoint,
      config.maxRetries,
      config.retryDelay
    );

    if (success && config.onBatchSent) {
      config.onBatchSent({
        batchId: `batch_${Date.now()}`,
        sessionId: sessionId.current,
        createdAt: formatTimestamp(),
        events,
        eventCount: events.length
      });
    }
  }, [config]);

  // Update visibility
  const updateVisibility = useCallback(throttle(() => {
    if (!elementRef.current) return;

    const visibilityPercentage = calculateVisibilityPercentage(elementRef.current);
    const now = Date.now();
    const loadTime = new Date(state.timeMetrics.loadedAt).getTime();

    setState(prev => {
      const newState = { ...prev };

      // Track visibility percentages for average calculation
      if (visibilityPercentage > 0) {
        visibilityPercentages.current.push(visibilityPercentage);
      }

      // Update visibility state
      const wasVisible = prev.isVisible;
      const isNowVisible = visibilityPercentage > 0;

      if (isNowVisible && !wasVisible) {
        // Became visible
        visibilityStartTime.current = now;
        newState.engagementMetrics.viewportEnterCount++;

        if (!newState.timeMetrics.timeToFirstVisible) {
          newState.timeMetrics.timeToFirstVisible = now - loadTime;
          newState.engagementMetrics.scrollDepthAtFirstVisible = calculateScrollDepth();
          sendEvent('ad_visible');
        }
      } else if (!isNowVisible && wasVisible) {
        // Became hidden
        if (visibilityStartTime.current) {
          const visibleDuration = now - visibilityStartTime.current;
          newState.timeMetrics.totalVisibleDuration += visibleDuration;
          visibilityStartTime.current = null;
        }
        newState.engagementMetrics.viewportExitCount++;
        sendEvent('ad_hidden');
      } else if (isNowVisible && wasVisible && visibilityStartTime.current) {
        // Still visible, update duration
        const visibleDuration = now - visibilityStartTime.current;
        newState.timeMetrics.totalVisibleDuration += visibleDuration;
        visibilityStartTime.current = now;
      }

      newState.isVisible = isNowVisible;
      newState.visibilityPercentage = visibilityPercentage;

      // Update max visibility
      if (visibilityPercentage > newState.engagementMetrics.maxVisibilityPercentage) {
        newState.engagementMetrics.maxVisibilityPercentage = visibilityPercentage;
      }

      // Update average visibility
      if (visibilityPercentages.current.length > 0) {
        newState.engagementMetrics.averageVisibilityPercentage = calculateAverage(visibilityPercentages.current);
      }

      // Check MRC viewability threshold
      if (mrcStandards.current) {
        const wasViewable = prev.isViewable;
        const isNowViewable = meetsViewabilityThreshold(
          visibilityPercentage,
          newState.timeMetrics.totalVisibleDuration,
          mrcStandards.current
        );

        if (isNowViewable && !wasViewable) {
          // Met viewability threshold
          newState.isViewable = true;
          newState.timeMetrics.timeToViewable = now - loadTime;
          viewableStartTime.current = now;
          sendEvent('ad_viewable');
        } else if (isNowViewable && wasViewable && viewableStartTime.current) {
          // Still viewable, update duration
          const viewableDuration = now - viewableStartTime.current;
          newState.timeMetrics.totalViewableDuration += viewableDuration;
          viewableStartTime.current = now;
        }
      }

      // Update scroll depth
      newState.engagementMetrics.currentScrollDepth = calculateScrollDepth();

      return newState;
    });
  }, 100), [elementRef, state.timeMetrics.loadedAt, sendEvent]);

  // Initialize MRC standards
  useEffect(() => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    mrcStandards.current = calculateMRCStandards(rect.width, rect.height, config.mrcStandards);

    log('Initialized MRC standards', mrcStandards.current);
    sendEvent('ad_loaded');
  }, [elementRef, config.mrcStandards, log, sendEvent]);

  // Set up Intersection Observer
  useEffect(() => {
    if (!config.enabled || !elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(() => {
          updateVisibility();
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '0px'
      }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [config.enabled, elementRef, updateVisibility]);

  // Track scroll events
  useEffect(() => {
    if (!config.enabled) return;

    const handleScroll = throttle(() => {
      updateVisibility();
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [config.enabled, updateVisibility]);

  // Track hover events
  useEffect(() => {
    if (!config.enabled || !elementRef.current) return;

    const element = elementRef.current;

    const handleMouseEnter = () => {
      hoverStartTime.current = Date.now();
      setState(prev => ({
        ...prev,
        engagementMetrics: {
          ...prev.engagementMetrics,
          hoverCount: prev.engagementMetrics.hoverCount + 1
        }
      }));
      sendEvent('ad_hover_start');
    };

    const handleMouseLeave = () => {
      if (hoverStartTime.current) {
        const hoverDuration = Date.now() - hoverStartTime.current;
        setState(prev => ({
          ...prev,
          timeMetrics: {
            ...prev.timeMetrics,
            totalHoverDuration: prev.timeMetrics.totalHoverDuration + hoverDuration
          }
        }));
        hoverStartTime.current = null;
        sendEvent('ad_hover_end', { hoverDuration });
      }
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [config.enabled, elementRef, sendEvent]);

  // Track focus events
  useEffect(() => {
    if (!config.enabled || !elementRef.current) return;

    const element = elementRef.current;

    const handleFocus = () => {
      focusStartTime.current = Date.now();
      sendEvent('ad_focus');
    };

    const handleBlur = () => {
      if (focusStartTime.current) {
        const focusDuration = Date.now() - focusStartTime.current;
        setState(prev => ({
          ...prev,
          timeMetrics: {
            ...prev.timeMetrics,
            totalFocusDuration: prev.timeMetrics.totalFocusDuration + focusDuration
          }
        }));
        focusStartTime.current = null;
        sendEvent('ad_blur', { focusDuration });
      }
    };

    element.addEventListener('focus', handleFocus);
    element.addEventListener('blur', handleBlur);

    return () => {
      element.removeEventListener('focus', handleFocus);
      element.removeEventListener('blur', handleBlur);
    };
  }, [config.enabled, elementRef, sendEvent]);

  // Track click events
  useEffect(() => {
    if (!config.enabled || !elementRef.current) return;

    const element = elementRef.current;

    const handleClick = () => {
      setState(prev => ({
        ...prev,
        engagementMetrics: {
          ...prev.engagementMetrics,
          wasClicked: true
        }
      }));
      sendEvent('ad_click');
    };

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, [config.enabled, elementRef, sendEvent]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Calculate session duration
      const now = Date.now();
      const loadTime = new Date(state.timeMetrics.loadedAt).getTime();
      const sessionDuration = now - loadTime;

      setState(prev => ({
        ...prev,
        timeMetrics: {
          ...prev.timeMetrics,
          sessionDuration
        }
      }));

      // Send final event
      sendEvent('ad_unloaded', { sessionDuration });

      // Flush any remaining batched events
      flushBatch();
    };
  }, []);

  return state;
}

