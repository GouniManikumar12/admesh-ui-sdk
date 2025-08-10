// Ecommerce product types for horizontal scroll cards
export interface EcommerceProduct {
  id: string;
  title: string;
  price?: number;
  original_price?: number;
  discount_percentage?: number;
  image_url?: string;
  brand?: string;
  rating?: number;
  review_count?: number;
  url: string;
  source?: 'walmart' | 'admesh' | string;
  availability?: string;
  shipping_info?: {
    free_shipping_over_35?: boolean;
    standard_rate?: number;
    two_day_rate?: number;
  };
  description?: string;
  admesh_link?: string;
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
  conversationText?: string; // AI-generated conversation text for this recommendation

  // Source-specific fields
  recommendation_source?: 'admesh' | 'walmart' | 'amazon' | 'other'; // Source of the recommendation

  // Standardized ecommerce fields (mapped from source-specific data by backend)
  id?: string; // Standardized product ID (mapped from walmart_item_id, amazon_asin, etc.)
  price?: number; // Standardized price (mapped from walmart_sale_price, amazon_price, etc.)
  original_price?: number; // Standardized original price (mapped from walmart_price, amazon_list_price, etc.)
  image_url?: string; // Standardized product image (mapped from walmart_images.large, amazon_image, etc.)
  brand?: string; // Standardized brand name (mapped from walmart_brand, amazon_brand, etc.)
  rating?: number | null; // Standardized rating (mapped from walmart_rating.average_rating, amazon_rating, etc.)
  review_count?: number; // Standardized review count (mapped from walmart_rating.total_reviews, amazon_reviews, etc.)
  availability?: string; // Standardized availability (mapped from walmart_availability, amazon_availability, etc.)
  source?: string; // Standardized source (walmart, amazon, etc.)
  shipping_info?: {
    free_shipping?: boolean;
    free_shipping_over_35?: boolean;
    two_day_shipping?: boolean;
    pickup_available?: boolean;
  };
  discount_percentage?: number; // Calculated discount percentage
  company_name?: string; // For software/SaaS products
  logo_url?: string; // For software/SaaS products
  external_id?: string; // External ID from source (e.g., Walmart item ID)
  trust_score?: number; // Trust score for the product/offer

  // Walmart-specific fields (when recommendation_source=walmart)
  walmart_item_id?: string;
  walmart_product_id?: string;
  walmart_upc?: string;
  walmart_category_path?: string;
  walmart_brand?: string;
  walmart_manufacturer?: string;
  walmart_short_description?: string;
  walmart_long_description?: string;
  walmart_price?: number;
  walmart_sale_price?: number;
  walmart_currency?: string;
  walmart_availability?: string;
  walmart_stock?: string;
  walmart_shipping?: {
    two_day_shipping?: boolean;
    free_shipping_over_35?: boolean;
    pickup?: boolean;
  };
  walmart_rating?: {
    average_rating?: number;
    total_reviews?: number;
    rating_image?: string;
  };
  walmart_images?: {
    thumbnail?: string;
    medium?: string;
    large?: string;
    extra_large?: string;
  };
  walmart_variants?: Array<{
    variant_id?: string;
    variant_name?: string;
    variant_value?: string;
  }>;
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
