/**
 * AdMesh UI SDK Analytics Types
 * MRC (Media Rating Council) Viewability Tracking
 */

/**
 * MRC Viewability Standards:
 * - Display Ads: 50% of pixels visible for at least 1 continuous second
 * - Large Display Ads (>242,500 pixels): 30% of pixels visible for at least 1 continuous second
 */
export interface MRCViewabilityStandards {
  /** Minimum percentage of ad pixels that must be visible */
  visibilityThreshold: number;
  /** Minimum continuous time (ms) ad must be visible */
  minimumDuration: number;
  /** Whether this is a large ad (>242,500 pixels) */
  isLargeAd: boolean;
}

/**
 * Viewability event types
 */
export type ViewabilityEventType =
  | 'ad_loaded'           // Ad component mounted
  | 'ad_visible'          // Ad became visible (any amount)
  | 'ad_viewable'         // Ad met MRC viewability threshold
  | 'ad_hidden'           // Ad left viewport
  | 'ad_hover_start'      // User started hovering
  | 'ad_hover_end'        // User stopped hovering
  | 'ad_focus'            // Ad received focus
  | 'ad_blur'             // Ad lost focus
  | 'ad_click'            // Ad was clicked
  | 'ad_unloaded';        // Ad component unmounted

/**
 * Device type detection
 */
export type DeviceType = 'mobile' | 'tablet' | 'desktop' | 'unknown';

/**
 * Time metrics for viewability tracking
 */
export interface ViewabilityTimeMetrics {
  /** Timestamp when ad was loaded (ISO 8601) */
  loadedAt: string;
  /** Time (ms) from load to first visibility */
  timeToFirstVisible?: number;
  /** Time (ms) from load to MRC viewability threshold */
  timeToViewable?: number;
  /** Total cumulative time (ms) ad was visible */
  totalVisibleDuration: number;
  /** Total cumulative time (ms) ad was viewable (>= MRC threshold) */
  totalViewableDuration: number;
  /** Total time (ms) user spent hovering over ad */
  totalHoverDuration: number;
  /** Total time (ms) ad had focus */
  totalFocusDuration: number;
  /** Session duration (ms) from load to unload */
  sessionDuration?: number;
}

/**
 * Engagement metrics
 */
export interface ViewabilityEngagementMetrics {
  /** Scroll depth (%) when ad first became visible */
  scrollDepthAtFirstVisible?: number;
  /** Current scroll depth (%) */
  currentScrollDepth: number;
  /** Number of times ad entered viewport */
  viewportEnterCount: number;
  /** Number of times ad exited viewport */
  viewportExitCount: number;
  /** Number of hover events */
  hoverCount: number;
  /** Whether ad was clicked */
  wasClicked: boolean;
  /** Maximum visibility percentage achieved */
  maxVisibilityPercentage: number;
  /** Average visibility percentage when visible */
  averageVisibilityPercentage: number;
}

/**
 * Context metrics
 */
export interface ViewabilityContextMetrics {
  /** Page URL where ad was displayed */
  pageUrl: string;
  /** Page title */
  pageTitle: string;
  /** Referrer URL */
  referrer: string;
  /** Device type */
  deviceType: DeviceType;
  /** Viewport width (px) */
  viewportWidth: number;
  /** Viewport height (px) */
  viewportHeight: number;
  /** Ad width (px) */
  adWidth: number;
  /** Ad height (px) */
  adHeight: number;
  /** Ad position from top of page (px) */
  adPositionTop: number;
  /** Ad position from left of page (px) */
  adPositionLeft: number;
  /** Whether user is using dark mode */
  isDarkMode: boolean;
  /** Browser language */
  language: string;
  /** Timezone */
  timezone: string;
}

/**
 * Complete viewability analytics event
 */
export interface ViewabilityAnalyticsEvent {
  /** Event type */
  eventType: ViewabilityEventType;
  /** Timestamp when event occurred (ISO 8601) */
  timestamp: string;
  /** Session ID for grouping events */
  sessionId: string;
  /** Ad ID */
  adId: string;
  /** Product ID */
  productId?: string;
  /** Offer ID */
  offerId?: string;
  /** Agent ID (AI platform) */
  agentId?: string;
  /** Time metrics */
  timeMetrics: ViewabilityTimeMetrics;
  /** Engagement metrics */
  engagementMetrics: ViewabilityEngagementMetrics;
  /** Context metrics */
  contextMetrics: ViewabilityContextMetrics;
  /** MRC viewability standards applied */
  mrcStandards: MRCViewabilityStandards;
  /** Whether ad met MRC viewability threshold */
  isViewable: boolean;
  /** Additional custom metadata */
  metadata?: Record<string, unknown>;
}

/**
 * Batched analytics events for efficient network requests
 */
export interface ViewabilityAnalyticsBatch {
  /** Batch ID */
  batchId: string;
  /** Session ID */
  sessionId: string;
  /** Timestamp when batch was created */
  createdAt: string;
  /** Array of events in this batch */
  events: ViewabilityAnalyticsEvent[];
  /** Total number of events */
  eventCount: number;
}

/**
 * Viewability tracker configuration
 */
export interface ViewabilityTrackerConfig {
  /** Enable viewability tracking */
  enabled: boolean;
  /** API endpoint for sending analytics */
  apiEndpoint: string;
  /** Batch events to minimize network requests */
  enableBatching: boolean;
  /** Maximum number of events per batch */
  batchSize: number;
  /** Maximum time (ms) to wait before sending batch */
  batchTimeout: number;
  /** Custom MRC standards (defaults to standard 50%/1s) */
  mrcStandards?: Partial<MRCViewabilityStandards>;
  /** Enable debug logging */
  debug: boolean;
  /** Custom callback for analytics events */
  onEvent?: (event: ViewabilityAnalyticsEvent) => void;
  /** Custom callback for batch sent */
  onBatchSent?: (batch: ViewabilityAnalyticsBatch) => void;
  /** Retry failed requests */
  enableRetry: boolean;
  /** Maximum retry attempts */
  maxRetries: number;
  /** Retry delay (ms) */
  retryDelay: number;
}

/**
 * Viewability tracker state
 */
export interface ViewabilityTrackerState {
  /** Whether ad is currently visible */
  isVisible: boolean;
  /** Whether ad meets MRC viewability threshold */
  isViewable: boolean;
  /** Current visibility percentage */
  visibilityPercentage: number;
  /** Time metrics */
  timeMetrics: ViewabilityTimeMetrics;
  /** Engagement metrics */
  engagementMetrics: ViewabilityEngagementMetrics;
  /** Whether tracking is active */
  isTracking: boolean;
  /** Error message if tracking failed */
  error?: string;
}

/**
 * Analytics API response
 */
export interface ViewabilityAnalyticsResponse {
  /** Success status */
  success: boolean;
  /** Message */
  message: string;
  /** Batch ID (if batched) */
  batchId?: string;
  /** Number of events processed */
  eventsProcessed?: number;
  /** Error details if failed */
  error?: string;
}

/**
 * Aggregated viewability metrics for dashboard
 */
export interface ViewabilityAggregatedMetrics {
  /** Total ad impressions */
  totalImpressions: number;
  /** Total viewable impressions (met MRC threshold) */
  totalViewableImpressions: number;
  /** Viewability rate (%) */
  viewabilityRate: number;
  /** Average time to viewable (ms) */
  averageTimeToViewable: number;
  /** Average viewable duration (ms) */
  averageViewableDuration: number;
  /** Average hover duration (ms) */
  averageHoverDuration: number;
  /** Click-through rate (%) */
  clickThroughRate: number;
  /** Average scroll depth at first visible (%) */
  averageScrollDepthAtFirstVisible: number;
  /** Device type distribution */
  deviceTypeDistribution: Record<DeviceType, number>;
  /** Viewport size distribution */
  viewportSizeDistribution: {
    mobile: number;    // < 768px
    tablet: number;    // 768-1024px
    desktop: number;   // > 1024px
  };
  /** Time period for these metrics */
  timePeriod: {
    startDate: string;
    endDate: string;
  };
}

