// AdMesh UI SDK - Main Entry Point

// Export core components only
export {
  AdMeshLayout,
  AdMeshProductCard,
  AdMeshInlineCard,
  AdMeshEcommerceCards,
  AdMeshSummaryUnit,
  AdMeshSummaryLayout,
  AdMeshLinkTracker,
  AdMeshBadge
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

// Export theme utilities
export {
  createAdMeshTheme,
  createDarkTheme,
  themePresets,
  mergeThemes,
  themeFromCSSProperties
} from './utils/themeUtils';

// Export disclosure utilities
export {
  getRecommendationLabel,
  getLabelTooltip,
  getSectionDisclosure,
  getInlineDisclosure,
  getInlineTooltip,
  getBadgeText,
  getCtaText,
  hasHighQualityMatches,
  getPoweredByText
} from './utils/disclosureUtils';

export type {
  DisclosureConfig
} from './utils/disclosureUtils';

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
  AdMeshEcommerceCardsProps,
  EcommerceProduct,
  AdMeshBadgeProps,
  AdMeshLayoutProps,
  AdMeshLayoutType,
  AdMeshLinkTrackerProps,
  AdMeshSummaryUnitProps,
  AdMeshSummaryLayoutProps,
  UseAdMeshTrackerReturn,
  AgentRecommendationResponse,
  AdMeshConfig
} from './types/index';

// Version info
export const VERSION = '0.2.1';

// Default configuration
export const DEFAULT_CONFIG = {
  trackingEnabled: true,
  debug: false,
  theme: {
    mode: 'light' as const,
    accentColor: '#2563eb'
  }
};
