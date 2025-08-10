import type { Meta, StoryObj } from '@storybook/react-vite';
import { AdMeshProductCard } from '../components/AdMeshProductCard';
import type { AdMeshRecommendation } from '../types/index';

// Sample recommendation data using unified JSON schema
const sampleRecommendation: AdMeshRecommendation = {
  // Required core fields from unified schema
  ad_id: "hubspot-123",
  admesh_link: "https://useadmesh.com/track?ad_id=hubspot-123&redirect=https://hubspot.com",
  audience_segment: "Startups and SMBs",
  availability: "in_stock",
  brand: "HubSpot",
  brand_trust_score: 0.93,
  categories: ["CRM", "Sales Tools", "Marketing"],
  description: "All-in-one CRM platform with contact management, email marketing, sales pipeline, and reporting features. Perfect for remote teams with excellent collaboration capabilities.",
  discount_percentage: 20,
  external_id: "hubspot-crm-001",
  feature_sections: [],
  features: ["Contact Management", "Email Marketing", "Sales Pipeline", "Reporting", "Mobile App"],
  image_url: "https://logo.clearbit.com/hubspot.com",
  integrations: [],
  intent_match_score: 0.92,
  is_fallback: false,
  keywords: ["CRM", "Sales", "Marketing", "Customer Management"],
  offer_trust_score: 0.95,
  original_price: 1200,
  price: 960,
  pricing: "Free - $960/month",
  product_id: "hubspot-crm",
  rating: 4.5,
  reason: "Perfect for remote teams with excellent collaboration features",
  recommendation_description: "All-in-one CRM platform with contact management, email marketing, sales pipeline, and reporting features. Perfect for remote teams with excellent collaboration capabilities.",
  recommendation_title: "HubSpot CRM - Complete Sales & Marketing Platform",
  redirect_url: "https://hubspot.com",
  review_count: 2847,
  reward_note: "Get 20% off your first year with code ADMESH20",
  source: "admesh",
  title: "HubSpot CRM",
  trial_days: 14,
  url: "https://hubspot.com",

  // Optional fields
  content_variations: {
    statement: {
      text: "HubSpot CRM is perfect for remote teams with excellent collaboration features, visit",
      cta: "HubSpot CRM"
    },
    question: {
      text: "Looking for CRM solutions for your team? Try",
      cta: "HubSpot CRM"
    }
  },
  shipping_info: {
    free_shipping_over_35: false,
    standard_rate: 0,
    two_day_rate: 0,
    ship_to_store: false,
    free_ship_to_store: false
  },
  offer_images: [],
  product_logo: {
    url: "https://logo.clearbit.com/hubspot.com",
    storage_path: "logos/hubspot.png",
    filename: "hubspot.png",
    content_type: "image/png",
    dimensions: { width: 32, height: 32 }
  }
};

const sampleRecommendationAI: AdMeshRecommendation = {
  // Required core fields from unified schema
  ad_id: "openai-456",
  admesh_link: "https://useadmesh.com/track?ad_id=openai-456&redirect=https://openai.com",
  audience_segment: "Developers and AI Engineers",
  availability: "in_stock",
  brand: "OpenAI",
  brand_trust_score: 0.93,
  categories: ["AI", "Developer Tools", "APIs"],
  description: "Leading AI language model with excellent performance for content generation, code generation, and analysis. Powerful API access for developers.",
  discount_percentage: 0,
  external_id: "openai-gpt4-api",
  feature_sections: [],
  features: ["Natural Language Processing", "Code Generation", "Content Creation", "API Access"],
  image_url: "https://logo.clearbit.com/openai.com",
  integrations: [],
  intent_match_score: 0.88,
  is_fallback: false,
  keywords: ["AI", "Machine Learning", "Natural Language", "API"],
  offer_trust_score: 0.95,
  original_price: 0.031,
  price: 0.031,
  pricing: "$0.031/1K tokens",
  product_id: "openai-gpt4",
  rating: 4.8,
  reason: "Leading AI language model with excellent performance for content generation and analysis",
  recommendation_description: "Leading AI language model with excellent performance for content generation, code generation, and analysis. Powerful API access for developers.",
  recommendation_title: "OpenAI GPT-4 API - Advanced Language Model",
  redirect_url: "https://openai.com",
  review_count: 15420,
  reward_note: "",
  source: "admesh",
  title: "OpenAI GPT-4 API",
  trial_days: 0,
  url: "https://openai.com",

  // Optional fields
  content_variations: {
    statement: {
      text: "OpenAI GPT-4 API is the leading AI language model with excellent performance, visit",
      cta: "OpenAI GPT-4 API"
    },
    question: {
      text: "Looking for AI solutions for your application? Try",
      cta: "OpenAI GPT-4 API"
    }
  },
  shipping_info: {
    free_shipping_over_35: false,
    standard_rate: 0,
    two_day_rate: 0,
    ship_to_store: false,
    free_ship_to_store: false
  },
  offer_images: [],
  product_logo: {
    url: "https://logo.clearbit.com/openai.com",
    storage_path: "logos/openai.png",
    filename: "openai.png",
    content_type: "image/png",
    dimensions: { width: 32, height: 32 }
  }
};

const meta: Meta<typeof AdMeshProductCard> = {
  title: 'AdMesh/ProductCard',
  component: AdMeshProductCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A product recommendation card component with built-in tracking and theming support.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'object',
      description: 'Theme configuration for the card'
    },
    showMatchScore: {
      control: 'boolean',
      description: 'Whether to show the intent match score'
    },
    showBadges: {
      control: 'boolean',
      description: 'Whether to show product badges'
    },

  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    recommendation: sampleRecommendation,
    showMatchScore: false,
    showBadges: true
  }
};

// High match score
export const HighMatchScore: Story = {
  args: {
    recommendation: {
      ...sampleRecommendation,
      intent_match_score: 0.95
    },
    showMatchScore: true,
    showBadges: true,

  }
};

// AI Product
export const AIProduct: Story = {
  args: {
    recommendation: sampleRecommendationAI,
    showMatchScore: true,
    showBadges: true,

  }
};

// Dark theme
export const DarkTheme: Story = {
  args: {
    recommendation: sampleRecommendation,
    theme: {
      mode: 'dark'
    },
    showMatchScore: true,
    showBadges: true,

  },
  parameters: {
    backgrounds: { default: 'dark' }
  }
};

// Custom accent color
export const CustomAccentColor: Story = {
  args: {
    recommendation: sampleRecommendation,
    theme: {
      mode: 'light',
      accentColor: '#10b981'
    },
    showMatchScore: true,
    showBadges: true,

  }
};









// All Features Showcase
export const AllFeaturesShowcase: Story = {
  args: {
    recommendation: {
      ...sampleRecommendation,
      product_logo: {
        url: "https://logo.clearbit.com/hubspot.com",
        storage_path: "logos/hubspot.png",
        filename: "hubspot.png",
        content_type: "image/png",
        dimensions: { width: 32, height: 32 }
      }
    },
    showMatchScore: true,
    showBadges: true,

  }
};



// Minimal data using unified schema
export const MinimalData: Story = {
  args: {
    recommendation: {
      // Required core fields from unified schema
      ad_id: "basic-123",
      admesh_link: "https://useadmesh.com/track?ad_id=basic-123",
      audience_segment: "",
      availability: "in_stock",
      brand: "Basic Brand",
      brand_trust_score: 0.5,
      categories: ["General"],
      description: "Simple recommendation without extra features",
      discount_percentage: 0,
      external_id: "basic-product-001",
      feature_sections: [],
      features: [],
      image_url: "https://via.placeholder.com/300x300?text=Basic+Product",
      integrations: [],
      intent_match_score: 0.75,
      is_fallback: false,
      keywords: [],
      offer_trust_score: 0.5,
      original_price: 100,
      price: 100,
      pricing: "$100",
      product_id: "basic-product",
      rating: 3.5,
      reason: "Simple recommendation without extra features",
      recommendation_description: "Simple recommendation without extra features",
      recommendation_title: "Basic Product",
      redirect_url: "https://example.com",
      review_count: 10,
      reward_note: "",
      source: "admesh",
      title: "Basic Product",
      trial_days: 0,
      url: "https://example.com",

      // Optional fields
      shipping_info: {
        free_shipping_over_35: false,
        standard_rate: 0,
        two_day_rate: 0,
        ship_to_store: false,
        free_ship_to_store: false
      },
      offer_images: [],
      product_logo: null
    },
    showMatchScore: true,
    showBadges: true,
  }
};

// Simple variation story (replaces AdMeshSimpleAd)
export const SimpleVariation: StoryObj<typeof AdMeshProductCard> = {
  args: {
    recommendation: sampleRecommendation,
    variation: 'simple',
    theme: {
      mode: 'light',
      accentColor: '#3b82f6'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple inline ad format that replaces the AdMeshSimpleAd component. Perfect for embedding within text content.'
      }
    }
  }
};

export const SimpleVariationDark: StoryObj<typeof AdMeshProductCard> = {
  args: {
    recommendation: sampleRecommendation,
    variation: 'simple',
    theme: {
      mode: 'dark',
      accentColor: '#60a5fa'
    }
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Simple inline ad format in dark mode.'
      }
    }
  }
};
