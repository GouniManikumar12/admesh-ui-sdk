// Core AdMesh recommendation types based on agent_recommendation.py response
export interface AdMeshRecommendation {
  title: string;
  reason: string;
  intent_match_score: number; // 0-1 normalized score
  admesh_link: string;
  ad_id: string;
  product_id: string;
  
  // Extended fields from OpenRouter integration
  features?: string[];
  has_free_tier?: boolean;
  integrations?: string[];
  pricing?: string;
  trial_days?: number;
  url?: string;
  reviews_summary?: string;
  reward_note?: string | null;
  security?: string[];
  slug?: string;
  support?: string[];
  redirect_url?: string;
  
  // Additional computed fields
  keywords?: string[]; // Note: Use 'keywords' not 'tags' per AdMesh standards
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
