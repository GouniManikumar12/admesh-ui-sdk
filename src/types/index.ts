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
  trial_days?: number;
  audience_segment?: string;
  offer_trust_score?: number;
  brand_trust_score?: number;

  // New marketing content fields
  recommendation_title?: string; // Marketing-optimized title for recommendations
  recommendation_description?: string; // Marketing-optimized description for recommendations
  offer_images?: Array<{
    url: string;
    storage_path: string;
    filename: string;
    content_type: string;
    dimensions: {
      width: number;
      height: number;
    };
  }>;
  product_logo?: {
    url: string;
    storage_path: string;
    filename: string;
    content_type: string;
    dimensions: {
      width: number;
      height: number;
    };
  };
  feature_sections?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;

  // Content variations for different ad formats
  content_variations?: {
    statement?: {
      text: string;
      cta?: string;
    };
    question?: {
      text: string;
      cta?: string;
    };
  };

  // Extended fields for compatibility
  reviews_summary?: string;
  security?: string[];
  slug?: string;
  support?: string[];
  badges?: string[];
}

// Enhanced theme configuration with full customization freedom
export interface AdMeshTheme {
  mode: 'light' | 'dark';

  // Color customization
  accentColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  surfaceColor?: string;
  borderColor?: string;
  textColor?: string;
  textSecondaryColor?: string;

  // Typography
  fontFamily?: string;
  fontSize?: {
    small?: string;
    base?: string;
    large?: string;
    title?: string;
  };

  // Layout & Spacing
  borderRadius?: string;
  spacing?: {
    small?: string;
    medium?: string;
    large?: string;
  };

  // Shadows & Effects
  shadows?: {
    small?: string;
    medium?: string;
    large?: string;
  };

  // Icon customization
  icons?: {
    expandIcon?: string | React.ReactNode;
    collapseIcon?: string | React.ReactNode;
    starIcon?: string | React.ReactNode;
    checkIcon?: string | React.ReactNode;
    arrowIcon?: string | React.ReactNode;
  };

  // Advanced styling options
  gradients?: {
    primary?: string;
    secondary?: string;
    accent?: string;
  };

  // Component-specific overrides
  components?: {
    card?: React.CSSProperties;
    button?: React.CSSProperties;
    expandableUnit?: React.CSSProperties;
    productCard?: React.CSSProperties;
    compareTable?: React.CSSProperties;
    citationUnit?: React.CSSProperties;
    inlineRecommendation?: React.CSSProperties;
  };

  // Disable default styling to allow full custom control
  disableDefaultStyles?: boolean;
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
  metadata?: Record<string, unknown>;
}

// Component prop interfaces
export interface AdMeshProductCardProps {
  recommendation: AdMeshRecommendation;
  theme?: AdMeshTheme;
  showMatchScore?: boolean;
  showBadges?: boolean;
  variation?: 'statement' | 'question' | 'default' | 'simple';
  expandable?: boolean; // For question and statement variations, default: false
  onTrackView?: (data: TrackingData) => void;
  className?: string;
  style?: React.CSSProperties;
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



export interface AdMeshConversationSummaryProps {
  recommendations: AdMeshRecommendation[];
  conversationSummary: string;
  theme?: AdMeshTheme;
  showTopRecommendations?: number;
  onStartNewConversation?: () => void;
  className?: string;
  style?: React.CSSProperties;
}



// Citation-based conversation ad types
export interface AdMeshCitationUnitProps {
  recommendations: AdMeshRecommendation[];
  conversationText: string;
  theme?: AdMeshTheme;
  showCitationList?: boolean;
  citationStyle?: 'numbered' | 'bracketed' | 'superscript';
  onCitationHover?: (recommendation: AdMeshRecommendation) => void;
  className?: string;
  style?: React.CSSProperties;
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
  onSearch?: (query: string) => void;
  onFilter?: (filters: SidebarFilters) => void;
  className?: string;
  containerMode?: boolean; // When true, uses relative positioning for container integration
  style?: React.CSSProperties;
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
  style?: React.CSSProperties;
}

export interface AdMeshSidebarContentProps {
  recommendations: AdMeshRecommendation[];
  displayMode: SidebarDisplayMode;
  theme?: AdMeshTheme;
  maxRecommendations?: number;
  className?: string;
  style?: React.CSSProperties;
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
  showInputField?: boolean;
}





export interface AdMeshCompareTableProps {
  recommendations: AdMeshRecommendation[];
  theme?: AdMeshTheme;
  maxProducts?: number;
  showMatchScores?: boolean;
  showFeatures?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface AdMeshBadgeProps {
  type: BadgeType;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  style?: React.CSSProperties;
}



export interface AdMeshLinkTrackerProps {
  adId: string;
  admeshLink: string;
  productId?: string;
  children: React.ReactNode;
  trackingData?: Record<string, unknown>;
  className?: string;
  style?: React.CSSProperties;
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

// Missing interface definitions
export interface AdMeshInlineRecommendationProps {
  recommendation: AdMeshRecommendation;
  theme?: AdMeshTheme;
  compact?: boolean;
  showReason?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface AdMeshChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
  suggestions?: string[];
  className?: string;
  theme?: AdMeshTheme;
  onSendMessage?: (message: string) => void;
}

export interface AdMeshChatMessageProps {
  message: ChatMessage;
  theme?: AdMeshTheme;
  className?: string;
  style?: React.CSSProperties;
}

export interface AdMeshChatInterfaceProps {
  messages: ChatMessage[];
  config: AdMeshChatConfig;
  theme?: AdMeshTheme;
  onSendMessage: (message: string) => void;
  className?: string;
  isLoading?: boolean;
  style?: React.CSSProperties;
}

export interface AdMeshFloatingChatProps {
  messages: ChatMessage[];
  config: AdMeshChatConfig;
  theme?: AdMeshTheme;
  isOpen?: boolean;
  onToggle?: () => void;
  onSendMessage: (message: string) => void;
  className?: string;
  title?: string;
  subtitle?: string;
  autoRecommendations?: AdMeshRecommendation[];
  autoRecommendationTrigger?: string;
  showInputField?: boolean;
  style?: React.CSSProperties;
  autoShowRecommendations?: boolean;
  onAutoRecommendationDismiss?: () => void;
}

export interface AdMeshCitationReferenceProps {
  recommendations?: AdMeshRecommendation[];
  theme?: AdMeshTheme;
  citationStyle?: 'numbered' | 'bracketed' | 'superscript';
  className?: string;
  recommendation: AdMeshRecommendation;
  citationNumber: number;
  showTooltip?: boolean;
  onHover?: (rec: AdMeshRecommendation) => void;
  style?: React.CSSProperties;
}

export interface AdMeshConversationalUnitProps {
  recommendations: AdMeshRecommendation[];
  config: ConversationalAdConfig;
  theme?: AdMeshTheme;
  trigger?: string;
  className?: string;
  conversationSummary?: string;
  sessionId?: string;
  onDismiss?: () => void;
  style?: React.CSSProperties;
}
