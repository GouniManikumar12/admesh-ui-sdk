import { useState, useCallback } from 'react';
import type { TrackingData, UseAdMeshTrackerReturn } from '../types/index';

// Default tracking endpoint - can be overridden via config
const DEFAULT_TRACKING_URL = 'https://api.useadmesh.com/track';

interface TrackingConfig {
  apiBaseUrl?: string;
  enabled?: boolean;
  debug?: boolean;
  retryAttempts?: number;
  retryDelay?: number;
}

// Global config that can be set by the consuming application
let globalConfig: TrackingConfig = {
  apiBaseUrl: DEFAULT_TRACKING_URL,
  enabled: true,
  debug: false,
  retryAttempts: 3,
  retryDelay: 1000
};

export const setAdMeshTrackerConfig = (config: Partial<TrackingConfig>) => {
  globalConfig = { ...globalConfig, ...config };
};

export const useAdMeshTracker = (config?: Partial<TrackingConfig>): UseAdMeshTrackerReturn => {
  const [isTracking, setIsTracking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mergedConfig = { ...globalConfig, ...config };

  const log = useCallback((message: string, data?: any) => {
    if (mergedConfig.debug) {
      console.log(`[AdMesh Tracker] ${message}`, data);
    }
  }, [mergedConfig.debug]);

  const sendTrackingEvent = useCallback(async (
    eventType: 'click' | 'view' | 'conversion',
    data: TrackingData
  ): Promise<void> => {
    if (!mergedConfig.enabled) {
      log('Tracking disabled, skipping event', { eventType, data });
      return;
    }

    if (!data.adId || !data.admeshLink) {
      const errorMsg = 'Missing required tracking data: adId and admeshLink are required';
      log(errorMsg, data);
      setError(errorMsg);
      return;
    }

    setIsTracking(true);
    setError(null);

    const payload = {
      event_type: eventType,
      ad_id: data.adId,
      admesh_link: data.admeshLink,
      product_id: data.productId,
      user_id: data.userId,
      session_id: data.sessionId,
      revenue: data.revenue,
      conversion_type: data.conversionType,
      metadata: data.metadata,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      referrer: document.referrer,
      page_url: window.location.href
    };

    log(`Sending ${eventType} event`, payload);

    let lastError: Error | null = null;
    
    for (let attempt = 1; attempt <= (mergedConfig.retryAttempts || 3); attempt++) {
      try {
        const response = await fetch(`${mergedConfig.apiBaseUrl}/events`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        log(`${eventType} event tracked successfully`, result);
        setIsTracking(false);
        return;

      } catch (err) {
        lastError = err as Error;
        log(`Attempt ${attempt} failed for ${eventType} event`, err);
        
        if (attempt < (mergedConfig.retryAttempts || 3)) {
          await new Promise(resolve => 
            setTimeout(resolve, (mergedConfig.retryDelay || 1000) * attempt)
          );
        }
      }
    }

    // All attempts failed
    const errorMsg = `Failed to track ${eventType} event after ${mergedConfig.retryAttempts} attempts: ${lastError?.message}`;
    log(errorMsg, lastError);
    setError(errorMsg);
    setIsTracking(false);
  }, [mergedConfig, log]);

  const trackClick = useCallback(async (data: TrackingData): Promise<void> => {
    return sendTrackingEvent('click', data);
  }, [sendTrackingEvent]);

  const trackView = useCallback(async (data: TrackingData): Promise<void> => {
    return sendTrackingEvent('view', data);
  }, [sendTrackingEvent]);

  const trackConversion = useCallback(async (data: TrackingData): Promise<void> => {
    if (!data.revenue && !data.conversionType) {
      log('Warning: Conversion tracking without revenue or conversion type', data);
    }
    return sendTrackingEvent('conversion', data);
  }, [sendTrackingEvent]);

  return {
    trackClick,
    trackView,
    trackConversion,
    isTracking,
    error
  };
};

// Utility function to build admesh_link with tracking parameters
export const buildAdMeshLink = (
  baseLink: string, 
  adId: string, 
  additionalParams?: Record<string, string>
): string => {
  try {
    const url = new URL(baseLink);
    url.searchParams.set('ad_id', adId);
    url.searchParams.set('utm_source', 'admesh');
    url.searchParams.set('utm_medium', 'recommendation');
    
    if (additionalParams) {
      Object.entries(additionalParams).forEach(([key, value]) => {
        url.searchParams.set(key, value);
      });
    }
    
    return url.toString();
  } catch (error) {
    console.warn('[AdMesh] Invalid URL provided to buildAdMeshLink:', baseLink);
    return baseLink;
  }
};

// Helper function to extract tracking data from recommendation
export const extractTrackingData = (
  recommendation: { ad_id: string; admesh_link: string; product_id: string },
  additionalData?: Partial<TrackingData>
): TrackingData => {
  return {
    adId: recommendation.ad_id,
    admeshLink: recommendation.admesh_link,
    productId: recommendation.product_id,
    ...additionalData
  };
};
