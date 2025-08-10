// Ecommerce product types for horizontal scroll cards - aligned with unified schema
export interface EcommerceProduct {
  // Core required fields
  ad_id: string;
  product_id: string;
  external_id: string;
  title: string;
  price: number;
  pricing: string; // Formatted price string
  url: string;
  redirect_url: string;
  admesh_link: string;
  source: string;

  // Optional display fields
  original_price?: number;
  discount_percentage?: number;
  image_url?: string;
  brand?: string;
  rating?: number;
  review_count?: number;
  availability?: string;
  description?: string;

  // Enhanced shipping information aligned with unified schema
  shipping_info?: {
    free_shipping_over_35: boolean;
    standard_rate: number;
    two_day_rate: number;
    ship_to_store: boolean;
    free_ship_to_store: boolean;
  };

  // Trust and scoring
  brand_trust_score?: number;
  offer_trust_score?: number;
  intent_match_score?: number;

  // Additional metadata
  categories?: string[];
  features?: string[];
  keywords?: string[];

  // Legacy compatibility (deprecated)
  id?: string; // Alias for product_id
}

export interface AdMeshEcommerceCardsProps {
  products: EcommerceProduct[];
  title?: string;
  showTitle?: boolean;
  className?: string;
  cardClassName?: string;
  onProductClick?: (product: EcommerceProduct) => void;
  showPricing?: boolean;
  showRatings?: boolean;
  showBrand?: boolean;
  showSource?: boolean;
  showShipping?: boolean;
  maxCards?: number;
  cardWidth?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark' | 'auto';
  borderRadius?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

// Core AdMesh recommendation types - Unified JSON Schema for all sources
export interface AdMeshRecommendation {
  // Required core fields
  ad_id: string;
  admesh_link: string;
  audience_segment: string;
  availability: string;
  brand: string;
  brand_trust_score: number;
  categories: string[];
  description: string;
  discount_percentage: number;
  external_id: string;
  feature_sections: any[]; // Array of feature sections
  features: string[];
  image_url: string;
  integrations: any[];
  intent_match_score: number; // 0-1 normalized score
  is_fallback: boolean;
  keywords: string[];
  offer_trust_score: number;
  original_price: number;
  price: number;
  pricing: string; // Formatted price string (e.g., "$99.48")
  product_id: string;
  rating: number;
  reason: string; // Match reason/explanation
  recommendation_description: string; // Marketing-optimized description
  recommendation_title: string; // Marketing-optimized title
  redirect_url: string;
  review_count: number;
  reward_note: string;
  source: string; // Source platform (walmart, admesh, etc.)
  title: string; // Product title
  trial_days: number;
  url: string;

  // Source information
  recommendation_source?: string; // 'admesh', 'walmart', etc.

  // Citation and conversation fields
  conversationText?: string; // For citation units
  badges?: string[]; // Product badges

  // Optional fields
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
  } | null;

  // Enhanced shipping information
  shipping_info?: {
    free_shipping_over_35: boolean;
    standard_rate: number;
    two_day_rate: number;
    ship_to_store: boolean;
    free_ship_to_store: boolean;
  };

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

  // Legacy/compatibility fields (deprecated but maintained for backward compatibility)
  company_name?: string; // For software/SaaS products
  logo_url?: string; // For software/SaaS products
  trust_score?: number; // Generic trust score

  // Extended fields for compatibility
  reviews_summary?: string;
  security?: string[];
  slug?: string;
  support?: string[];
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
  showMatchScore?: boolean; // Deprecated - Match Score removed from UI
  showBadges?: boolean;
  variation?: 'default' | 'simple';
  expandable?: boolean; // Deprecated - moved to AdMeshInlineCard
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



// Citation-based conversation ad types
export interface AdMeshCitationUnitProps {
  recommendations: AdMeshRecommendation[];
  conversationTextLinks?: Map<string, string> | Record<string, string>; // Company name -> link mapping
  theme?: AdMeshTheme;
  citationStyle?: 'numbered' | 'bracketed' | 'superscript';
  onCitationHover?: (recommendation: AdMeshRecommendation) => void;
  className?: string;
  style?: React.CSSProperties;

  // Dynamic content options
  dynamicTemplate?: string; // Template with placeholders like "I recommend {product1} and {product2}"
  linkInsertionStrategy?: 'auto' | 'template' | 'keywords' | 'append';
  customLinkPatterns?: Array<{
    pattern: string | RegExp;
    recommendationIndex: number;
    linkText?: string;
  }>;
  onTextUpdate?: (newText: string) => void;
  enableRealTimeUpdates?: boolean;
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





export interface AdMeshBadgeProps {
  type: BadgeType;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  style?: React.CSSProperties;
}

// Layout component types
export type AdMeshLayoutType =
  | 'product'        // Product cards
  | 'inline'         // Inline citation-style recommendation
  | 'citation'       // Citation unit with conversation text (card style)
  | 'ecommerce';     // Ecommerce cards layout

export interface AdMeshLayoutProps {
  // Content
  recommendations?: AdMeshRecommendation[];
  conversationTextLinks?: Map<string, string> | Record<string, string>; // Company name -> link mapping

  // Backend-controlled layout (required)
  layout: AdMeshLayoutType; // Backend specifies which layout to use

  // Backend-controlled styling configuration
  layoutConfig?: {
    backgroundColor?: string;
    textColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    accentColor?: string;
    borderColor?: string;
    borderRadius?: string;
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: string;
    lineHeight?: string;
    padding?: string;
    margin?: string;
    shadow?: string;
    hoverColor?: string;
    linkColor?: string;
    customCSS?: string;
    darkMode?: boolean;
  };

  // Layout configuration
  maxItems?: number;
  columns?: 'auto' | number | string;
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | string;
  showTitle?: boolean;
  title?: string;

  // Styling (legacy support)
  theme?: AdMeshTheme;
  className?: string;
  style?: React.CSSProperties;

  // Component-specific props
  productCardProps?: Partial<AdMeshProductCardProps>;
  citationUnitProps?: Partial<AdMeshCitationUnitProps>;
  ecommerceCardsProps?: Partial<AdMeshEcommerceCardsProps>;

  // Event handlers
  onRecommendationClick?: (adId: string, admeshLink: string) => void;
  onProductClick?: (product: EcommerceProduct) => void;
  onCitationHover?: (recommendation: AdMeshRecommendation) => void;

  // Advanced options
  enableAutoDetection?: boolean;
  preferredComponents?: ('product' | 'inline' | 'citation' | 'ecommerce')[];
  fallbackLayout?: AdMeshLayoutType;
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

// Core interface definitions

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

// Removed unused AdMeshCitationReferenceProps

// Removed unused AdMeshConversationalUnitProps
