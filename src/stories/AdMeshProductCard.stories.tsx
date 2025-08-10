import type { Meta, StoryObj } from '@storybook/react-vite';
import { AdMeshProductCard } from '../components/AdMeshProductCard';
import type { AdMeshRecommendation } from '../types/index';

// Sample recommendation data based on agent_recommendation.py response
const sampleRecommendation: AdMeshRecommendation = {
  title: "HubSpot CRM",
  reason: "Perfect for remote teams with excellent collaboration features",
  intent_match_score: 0.92,
  admesh_link: "https://useadmesh.com/track?ad_id=hubspot-123&redirect=https://hubspot.com",
  ad_id: "hubspot-123",
  product_id: "hubspot-crm",
  features: ["Contact Management", "Email Marketing", "Sales Pipeline", "Reporting", "Mobile App"],
  pricing: "Free - $1,200/month",
  trial_days: 14,
  url: "https://hubspot.com",
  keywords: ["CRM", "Sales", "Marketing", "Customer Management"],
  badges: ["Top Match"],
  categories: ["CRM", "Sales Tools", "Marketing"],
  reward_note: "Get 20% off your first year with code ADMESH20",
  content_variations: {
    statement: {
      text: "HubSpot CRM is perfect for remote teams with excellent collaboration features, visit",
      cta: "HubSpot CRM"
    },
    question: {
      text: "Looking for CRM solutions for your team? Try",
      cta: "HubSpot CRM"
    }
  }
};

const sampleRecommendationAI: AdMeshRecommendation = {
  title: "OpenAI GPT-4 API",
  reason: "Leading AI language model with excellent performance for content generation and analysis",
  intent_match_score: 0.88,
  admesh_link: "https://useadmesh.com/track?ad_id=openai-456&redirect=https://openai.com",
  ad_id: "openai-456",
  product_id: "openai-gpt4",
  features: ["Natural Language Processing", "Code Generation", "Content Creation", "API Access"],
  pricing: "$0.031/1K tokens",
  trial_days: 0,
  url: "https://openai.com",
  keywords: ["AI", "Machine Learning", "Natural Language", "API"],
  badges: ["Popular"],
  categories: ["AI", "Developer Tools", "APIs"],
  audience_segment: "Developers and AI Engineers",
  offer_trust_score: 0.95,
  brand_trust_score: 0.93,
  content_variations: {
    statement: {
      text: "OpenAI GPT-4 API is the leading AI language model with excellent performance, visit",
      cta: "OpenAI GPT-4 API"
    },
    question: {
      text: "Looking for AI solutions for your application? Try",
      cta: "OpenAI GPT-4 API"
    }
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



// Minimal data
export const MinimalData: Story = {
  args: {
    recommendation: {
      title: "Basic Product",
      reason: "Simple recommendation without extra features",
      intent_match_score: 0.75,
      admesh_link: "https://useadmesh.com/track?ad_id=basic-123",
      ad_id: "basic-123",
      product_id: "basic-product"
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
