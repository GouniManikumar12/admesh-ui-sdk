// AdMesh UI SDK - Main Entry Point

// Export all components
export {
  AdMeshProductCard,
  AdMeshCompareTable,
  AdMeshBadge,
  AdMeshLayout,
  AdMeshLinkTracker,
  AdMeshConversationalUnit,
  AdMeshConversationSummary,
  AdMeshInlineRecommendation,
  AdMeshCitationUnit,
  AdMeshCitationReference,
  AdMeshSidebar,
  AdMeshSidebarHeader,
  AdMeshSidebarContent,
  AdMeshFloatingChat,
  AdMeshChatInterface,
  AdMeshChatMessage,
  AdMeshChatInput,
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
  UseAdMeshTrackerReturn,
  AgentRecommendationResponse,
  AdMeshConfig,
  ConversationalDisplayMode,
  ConversationContext,
  ConversationalAdConfig,
  AdMeshConversationalUnitProps,
  AdMeshConversationSummaryProps,
  AdMeshInlineRecommendationProps,
  AdMeshCitationUnitProps,
  AdMeshCitationReferenceProps,
  SidebarPosition,
  SidebarSize,
  SidebarDisplayMode,
  AdMeshSidebarConfig,
  AdMeshSidebarProps,
  SidebarFilters,
  AdMeshSidebarHeaderProps,
  AdMeshSidebarContentProps,
  ChatMessageRole,
  ChatPosition,
  ChatSize,
  ChatDisplayMode,
  ChatMessage,
  AdMeshChatConfig,
  AdMeshFloatingChatProps,
  AdMeshChatInterfaceProps,
  AdMeshChatMessageProps,
  AdMeshChatInputProps
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
