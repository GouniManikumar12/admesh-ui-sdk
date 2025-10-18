/**
 * AdMesh UI SDK - MRC Viewability Tracker Utilities
 * Implements Media Rating Council (MRC) viewability standards
 */

import type {
  MRCViewabilityStandards,
  DeviceType,
  ViewabilityContextMetrics,
  ViewabilityAnalyticsEvent,
  ViewabilityEventType
} from '../types/analytics';

/**
 * Calculate MRC viewability standards based on ad size
 */
export function calculateMRCStandards(
  adWidth: number,
  adHeight: number,
  customStandards?: Partial<MRCViewabilityStandards>
): MRCViewabilityStandards {
  const adPixels = adWidth * adHeight;
  const isLargeAd = adPixels > 242500; // MRC threshold for large ads

  const defaults: MRCViewabilityStandards = {
    visibilityThreshold: isLargeAd ? 0.3 : 0.5, // 30% for large, 50% for standard
    minimumDuration: 1000, // 1 second in milliseconds
    isLargeAd
  };

  return { ...defaults, ...customStandards };
}

/**
 * Detect device type based on viewport width
 */
export function detectDeviceType(viewportWidth: number): DeviceType {
  if (viewportWidth < 768) return 'mobile';
  if (viewportWidth < 1024) return 'tablet';
  return 'desktop';
}

/**
 * Calculate visibility percentage of element in viewport
 */
export function calculateVisibilityPercentage(element: HTMLElement): number {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  // Element dimensions
  const elementHeight = rect.height;
  const elementWidth = rect.width;

  if (elementHeight === 0 || elementWidth === 0) return 0;

  // Calculate visible portion
  const visibleTop = Math.max(0, rect.top);
  const visibleBottom = Math.min(viewportHeight, rect.bottom);
  const visibleLeft = Math.max(0, rect.left);
  const visibleRight = Math.min(viewportWidth, rect.right);

  const visibleHeight = Math.max(0, visibleBottom - visibleTop);
  const visibleWidth = Math.max(0, visibleRight - visibleLeft);

  const visibleArea = visibleHeight * visibleWidth;
  const totalArea = elementHeight * elementWidth;

  return totalArea > 0 ? (visibleArea / totalArea) : 0;
}

/**
 * Calculate current scroll depth as percentage
 */
export function calculateScrollDepth(): number {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const scrollableHeight = documentHeight - windowHeight;
  if (scrollableHeight <= 0) return 100;

  return Math.min(100, (scrollTop / scrollableHeight) * 100);
}

/**
 * Get element position on page
 */
export function getElementPosition(element: HTMLElement): { top: number; left: number } {
  const rect = element.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
}

/**
 * Collect context metrics
 */
export function collectContextMetrics(element: HTMLElement): ViewabilityContextMetrics {
  const rect = element.getBoundingClientRect();
  const position = getElementPosition(element);
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  // Detect dark mode
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return {
    pageUrl: window.location.href,
    pageTitle: document.title,
    referrer: document.referrer,
    deviceType: detectDeviceType(viewportWidth),
    viewportWidth,
    viewportHeight,
    adWidth: rect.width,
    adHeight: rect.height,
    adPositionTop: position.top,
    adPositionLeft: position.left,
    isDarkMode,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  };
}

/**
 * Generate unique session ID
 */
export function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
}

/**
 * Generate unique batch ID
 */
export function generateBatchId(): string {
  return `batch_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
}

/**
 * Check if ad meets MRC viewability threshold
 */
export function meetsViewabilityThreshold(
  visibilityPercentage: number,
  visibleDuration: number,
  standards: MRCViewabilityStandards
): boolean {
  return (
    visibilityPercentage >= standards.visibilityThreshold &&
    visibleDuration >= standards.minimumDuration
  );
}

/**
 * Format timestamp to ISO 8601
 */
export function formatTimestamp(date: Date = new Date()): string {
  return date.toISOString();
}

/**
 * Calculate average from array of numbers
 */
export function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Send analytics event to API
 */
export async function sendAnalyticsEvent(
  event: ViewabilityAnalyticsEvent,
  apiEndpoint: string,
  retryAttempts: number = 3,
  retryDelay: number = 1000
): Promise<boolean> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < retryAttempts; attempt++) {
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      });

      if (response.ok) {
        return true;
      }

      lastError = new Error(`HTTP ${response.status}: ${response.statusText}`);
    } catch (error) {
      lastError = error as Error;
    }

    // Wait before retry (exponential backoff)
    if (attempt < retryAttempts - 1) {
      await new Promise(resolve => setTimeout(resolve, retryDelay * Math.pow(2, attempt)));
    }
  }

  console.error('[AdMesh Viewability] Failed to send analytics event:', lastError);
  return false;
}

/**
 * Send batched analytics events to API
 */
export async function sendAnalyticsBatch(
  events: ViewabilityAnalyticsEvent[],
  sessionId: string,
  apiEndpoint: string,
  retryAttempts: number = 3,
  retryDelay: number = 1000
): Promise<boolean> {
  if (events.length === 0) return true;

  const batch = {
    batchId: generateBatchId(),
    sessionId,
    createdAt: formatTimestamp(),
    events,
    eventCount: events.length
  };

  let lastError: Error | null = null;

  for (let attempt = 0; attempt < retryAttempts; attempt++) {
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(batch)
      });

      if (response.ok) {
        return true;
      }

      lastError = new Error(`HTTP ${response.status}: ${response.statusText}`);
    } catch (error) {
      lastError = error as Error;
    }

    // Wait before retry (exponential backoff)
    if (attempt < retryAttempts - 1) {
      await new Promise(resolve => setTimeout(resolve, retryDelay * Math.pow(2, attempt)));
    }
  }

  console.error('[AdMesh Viewability] Failed to send analytics batch:', lastError);
  return false;
}

/**
 * Sanitize URL to remove PII (query parameters, fragments)
 */
export function sanitizeUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    // Remove query parameters and hash
    return `${urlObj.protocol}//${urlObj.host}${urlObj.pathname}`;
  } catch {
    return url;
  }
}

/**
 * Check if element is in viewport
 */
export function isElementInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom > 0 &&
    rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
    rect.right > 0
  );
}

