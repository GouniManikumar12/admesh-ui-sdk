// Core AdMesh recommendation types based on agent_recommendation.py response
export interface AdMeshRecommendation {
  title: string;
  reason: string;
  intent_match_score: number; // 0-1 normalized score
  admesh_link: string;
  ad_id: string;
  product_id: string;

  // Core product/offer fields
  url?: string;
  redirect_url?: string;
  description?: string;
  pricing?: string;
  reward_note?: string | null;
  keywords?: string[]; // Note: Use 'keywords' not 'tags' per AdMesh standards
  categories?: string[];
  features?: string[];
  integrations?: string[];
  has_free_tier?: boolean;
  trial_days?: number;
  audience_segment?: string;
  is_ai_powered?: boolean;
  is_open_source?: boolean;
  offer_trust_score?: number;
  brand_trust_score?: number;

  // Extended fields for compatibility
  reviews_summary?: string;
  security?: string[];
  slug?: string;
  support?: string[];
  badges?: string[];
}

// Theme configuration
export interface AdMeshTheme {
  mode: 'light' | 'dark';
  accentColor?: string;
  borderRadius?: string;
  fontFamily?: string;
}

// Intent types for layout selection
export type IntentType = 
  | 'compare_products' 
  | 'best_for_use_case' 
  | 'trial_demo' 
  | 'budget_conscious';

// Badge types
export type BadgeType = 
  | 'Top Match' 
  | 'Free Tier' 
  | 'AI Powered' 
  | 'Popular' 
  | 'New'
  | 'Trial Available';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning';
export type BadgeSize = 'sm' | 'md' | 'lg';

// Tracking event types
export interface TrackingData {
  adId: string;
  admeshLink: string;
  userId?: string;
  sessionId?: string;
  productId?: string;
  revenue?: number;
  conversionType?: string;
  metadata?: Record<string, any>;
}

// Component prop interfaces
export interface AdMeshProductCardProps {
  recommendation: AdMeshRecommendation;
  theme?: AdMeshTheme;
  showMatchScore?: boolean;
  showBadges?: boolean;
  maxKeywords?: number;
  onClick?: (adId: string, admeshLink: string) => void;
  onTrackView?: (data: TrackingData) => void;
  className?: string;
}

// Conversational ad unit types
export type ConversationalDisplayMode = 'inline' | 'summary' | 'floating' | 'minimal' | 'citation';
export type ConversationContext = 'chat' | 'assistant' | 'agent' | 'support';

export interface ConversationalAdConfig {
  displayMode: ConversationalDisplayMode;
  context: ConversationContext;
  maxRecommendations?: number;
  showPoweredBy?: boolean;
  autoShow?: boolean;
  delayMs?: number;
  position?: 'top' | 'bottom' | 'inline';
}

export interface AdMeshConversationalUnitProps {
  recommendations: AdMeshRecommendation[];
  config: ConversationalAdConfig;
  theme?: AdMeshTheme;
  conversationSummary?: string;
  userQuery?: string;
  sessionId?: string;
  onRecommendationClick?: (adId: string, admeshLink: string) => void;
  onDismiss?: () => void;
  className?: string;
}

export interface AdMeshConversationSummaryProps {
  recommendations: AdMeshRecommendation[];
  conversationSummary: string;
  theme?: AdMeshTheme;
  showTopRecommendations?: number;
  onRecommendationClick?: (adId: string, admeshLink: string) => void;
  onStartNewConversation?: () => void;
  className?: string;
}

export interface AdMeshInlineRecommendationProps {
  recommendation: AdMeshRecommendation;
  theme?: AdMeshTheme;
  compact?: boolean;
  showReason?: boolean;
  onClick?: (adId: string, admeshLink: string) => void;
  className?: string;
}

// Citation-based conversation ad types
export interface AdMeshCitationUnitProps {
  recommendations: AdMeshRecommendation[];
  conversationText: string;
  theme?: AdMeshTheme;
  showCitationList?: boolean;
  citationStyle?: 'numbered' | 'bracketed' | 'superscript';
  onRecommendationClick?: (adId: string, admeshLink: string) => void;
  onCitationHover?: (recommendation: AdMeshRecommendation) => void;
  className?: string;
}

export interface AdMeshCitationReferenceProps {
  recommendation: AdMeshRecommendation;
  citationNumber: number;
  citationStyle?: 'numbered' | 'bracketed' | 'superscript';
  theme?: AdMeshTheme;
  showTooltip?: boolean;
  onClick?: (adId: string, admeshLink: string) => void;
  onHover?: (recommendation: AdMeshRecommendation) => void;
  className?: string;
}

// Sidebar types
export type SidebarPosition = 'left' | 'right';
export type SidebarSize = 'sm' | 'md' | 'lg' | 'xl';
export type SidebarDisplayMode = 'recommendations' | 'history' | 'favorites' | 'mixed';

export interface AdMeshSidebarConfig {
  position: SidebarPosition;
  size: SidebarSize;
  displayMode: SidebarDisplayMode;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  showHeader?: boolean;
  showSearch?: boolean;
  showFilters?: boolean;
  maxRecommendations?: number;
  autoRefresh?: boolean;
  refreshInterval?: number; // in milliseconds
}

export interface AdMeshSidebarProps {
  recommendations: AdMeshRecommendation[];
  config: AdMeshSidebarConfig;
  theme?: AdMeshTheme;
  title?: string;
  isOpen?: boolean;
  onToggle?: () => void;
  onRecommendationClick?: (adId: string, admeshLink: string) => void;
  onSearch?: (query: string) => void;
  onFilter?: (filters: SidebarFilters) => void;
  className?: string;
}

export interface SidebarFilters {
  categories?: string[];
  hasFreeTier?: boolean;
  hasTrial?: boolean;
  minMatchScore?: number;
  maxPrice?: number;
}

export interface AdMeshSidebarHeaderProps {
  title: string;
  theme?: AdMeshTheme;
  collapsible?: boolean;
  isCollapsed?: boolean;
  onToggle?: () => void;
  onSearch?: (query: string) => void;
  showSearch?: boolean;
  className?: string;
}

export interface AdMeshSidebarContentProps {
  recommendations: AdMeshRecommendation[];
  displayMode: SidebarDisplayMode;
  theme?: AdMeshTheme;
  maxRecommendations?: number;
  onRecommendationClick?: (adId: string, admeshLink: string) => void;
  className?: string;
}

// Chat types
export type ChatMessageRole = 'user' | 'assistant' | 'system';
export type ChatPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
export type ChatSize = 'sm' | 'md' | 'lg' | 'xl';
export type ChatDisplayMode = 'widget' | 'fullscreen' | 'embedded';

export interface ChatMessage {
  id: string;
  role: ChatMessageRole;
  content: string;
  timestamp: Date;
  recommendations?: AdMeshRecommendation[];
  isTyping?: boolean;
}

export interface AdMeshChatConfig {
  position: ChatPosition;
  size: ChatSize;
  displayMode: ChatDisplayMode;
  autoOpen?: boolean;
  showWelcomeMessage?: boolean;
  welcomeMessage?: string;
  placeholder?: string;
  maxMessages?: number;
  enableTypingIndicator?: boolean;
  enableSuggestions?: boolean;
  suggestions?: string[];
}

export interface AdMeshFloatingChatProps {
  config: AdMeshChatConfig;
  theme?: AdMeshTheme;
  title?: string;
  subtitle?: string;
  isOpen?: boolean;
  onToggle?: () => void;
  onSendMessage?: (message: string) => Promise<ChatMessage>;
  onRecommendationClick?: (adId: string, admeshLink: string) => void;
  // Auto-recommendation props
  autoRecommendations?: AdMeshRecommendation[];
  autoRecommendationTrigger?: string; // The query/context that triggered recommendations
  showInputField?: boolean; // Whether to show input field (default: true)
  autoShowRecommendations?: boolean; // Auto-show recommendations without user input
  onAutoRecommendationDismiss?: () => void;
  className?: string;
}

export interface AdMeshChatInterfaceProps {
  messages: ChatMessage[];
  config: Partial<AdMeshChatConfig> & {
    showInputField?: boolean;
  };
  theme?: AdMeshTheme;
  isLoading?: boolean;
  onSendMessage?: (message: string) => void;
  onRecommendationClick?: (adId: string, admeshLink: string) => void;
  className?: string;
}

export interface AdMeshChatMessageProps {
  message: ChatMessage;
  theme?: AdMeshTheme;
  onRecommendationClick?: (adId: string, admeshLink: string) => void;
  className?: string;
}

export interface AdMeshChatInputProps {
  placeholder?: string;
  disabled?: boolean;
  suggestions?: string[];
  theme?: AdMeshTheme;
  onSendMessage?: (message: string) => void;
  className?: string;
}

export interface AdMeshCompareTableProps {
  recommendations: AdMeshRecommendation[];
  theme?: AdMeshTheme;
  maxProducts?: number;
  showMatchScores?: boolean;
  showFeatures?: boolean;
  onProductClick?: (adId: string, admeshLink: string) => void;
  className?: string;
}

export interface AdMeshBadgeProps {
  type: BadgeType;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

export interface AdMeshLayoutProps {
  recommendations: AdMeshRecommendation[];
  intentType?: IntentType;
  theme?: AdMeshTheme;
  maxDisplayed?: number;
  showMatchScores?: boolean;
  showFeatures?: boolean;
  autoLayout?: boolean; // Automatically choose layout based on data
  onProductClick?: (adId: string, admeshLink: string) => void;
  onTrackView?: (data: TrackingData) => void;
  className?: string;
}

export interface AdMeshLinkTrackerProps {
  adId: string;
  admeshLink: string;
  productId?: string;
  children: React.ReactNode;
  onClick?: () => void;
  trackingData?: Record<string, any>;
  className?: string;
}

// Hook return types
export interface UseAdMeshTrackerReturn {
  trackClick: (data: TrackingData) => Promise<void>;
  trackConversion: (data: TrackingData) => Promise<void>;
  trackView: (data: TrackingData) => Promise<void>;
  isTracking: boolean;
  error: string | null;
}

// API Response types (for reference)
export interface AgentRecommendationResponse {
  session_id: string;
  intent: {
    categories?: string[];
    goal?: string;
    llm_intent_confidence_score?: number;
    known_mentions?: string[];
    intent_type?: string;
    intent_group?: string;
    keywords?: string[];
  };
  response: {
    summary?: string;
    recommendations: AdMeshRecommendation[];
    followup_suggestions?: {
      label: string;
      query: string;
      product_mentions: string[];
      admesh_links: Record<string, string>;
      session_id: string;
    }[];
  };
  tokens_used: number;
  model_used: string;
  recommendation_id?: string;
  end_of_session?: boolean;
}

// Utility types
export interface AdMeshConfig {
  apiBaseUrl?: string;
  trackingEnabled?: boolean;
  defaultTheme?: AdMeshTheme;
  debug?: boolean;
}
