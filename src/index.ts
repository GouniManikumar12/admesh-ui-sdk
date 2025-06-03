// AdMesh UI SDK - Main Entry Point

// Export all components
export {
  AdMeshProductCard,
  AdMeshCompareTable,
  AdMeshBadge,
  AdMeshLayout,
  AdMeshLinkTracker
} from './components';

// Export hooks
export {
  useAdMeshTracker,
  setAdMeshTrackerConfig,
  buildAdMeshLink,
  extractTrackingData
} from './hooks/useAdMeshTracker';

export {
  useAdMeshStyles
} from './hooks/useAdMeshStyles';

// Export types
export type {
  AdMeshRecommendation,
  AdMeshTheme,
  IntentType,
  BadgeType,
  BadgeVariant,
  BadgeSize,
  TrackingData,
  AdMeshProductCardProps,
  AdMeshCompareTableProps,
  AdMeshBadgeProps,
  AdMeshLayoutProps,
  AdMeshLinkTrackerProps,
  UseAdMeshTrackerReturn,
  AgentRecommendationResponse,
  AdMeshConfig
} from './types/index';

// Version info
export const VERSION = '0.2.0';

// Default configuration
export const DEFAULT_CONFIG = {
  trackingEnabled: true,
  debug: false,
  theme: {
    mode: 'light' as const,
    accentColor: '#2563eb'
  }
};
