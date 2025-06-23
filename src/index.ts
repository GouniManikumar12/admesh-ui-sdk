// AdMesh UI SDK - Main Entry Point

// Export all components
export {
  AdMeshProductCard,
  AdMeshCompareTable,
  AdMeshBadge,
  AdMeshLayout,
  AdMeshLinkTracker,
  AdMeshSimpleAd,
  AdMeshConversationSummary,
  AdMeshCitationUnit,
  AdMeshSidebar,
  AdMeshSidebarHeader,
  AdMeshSidebarContent,
  AdMeshAutoRecommendationWidget
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
  AdMeshSimpleAdProps,
  UseAdMeshTrackerReturn,
  AgentRecommendationResponse,
  AdMeshConfig,
  ConversationalDisplayMode,
  ConversationContext,
  ConversationalAdConfig,
  AdMeshConversationSummaryProps,
  AdMeshCitationUnitProps,
  SidebarPosition,
  SidebarSize,
  SidebarDisplayMode,
  AdMeshSidebarConfig,
  AdMeshSidebarProps,
  SidebarFilters,
  AdMeshSidebarHeaderProps,
  AdMeshSidebarContentProps,

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
