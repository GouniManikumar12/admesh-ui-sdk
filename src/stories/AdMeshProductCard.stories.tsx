import type { Meta, StoryObj } from '@storybook/react-vite';
import { AdMeshProductCard } from '../components/AdMeshProductCard';
import type { AdMeshRecommendation } from '../types/index';

// Sample recommendation data based on agent_recommendation.py response
const sampleRecommendation: AdMeshRecommendation = {
  title: "HubSpot CRM",
  reason: "Perfect for remote teams with excellent collaboration features and free tier availability",
  intent_match_score: 0.92,
  admesh_link: "https://useadmesh.com/track?ad_id=hubspot-123&redirect=https://hubspot.com",
  ad_id: "hubspot-123",
  product_id: "hubspot-crm",
  features: ["Contact Management", "Email Marketing", "Sales Pipeline", "Reporting", "Mobile App"],
  has_free_tier: true,
  integrations: ["Gmail", "Outlook", "Slack", "Zoom"],
  pricing: "Free - $1,200/month",
  trial_days: 14,
  url: "https://hubspot.com",
  reviews_summary: "Highly rated for ease of use and customer support",
  keywords: ["CRM", "Sales", "Marketing", "Customer Management"],
  badges: ["Top Match", "Free Tier"]
};

const sampleRecommendationAI: AdMeshRecommendation = {
  title: "OpenAI GPT-4 API",
  reason: "Leading AI language model with excellent performance for content generation and analysis",
  intent_match_score: 0.88,
  admesh_link: "https://useadmesh.com/track?ad_id=openai-456&redirect=https://openai.com",
  ad_id: "openai-456",
  product_id: "openai-gpt4",
  features: ["Natural Language Processing", "Code Generation", "Content Creation", "API Access"],
  has_free_tier: false,
  integrations: ["REST API", "Python SDK", "Node.js SDK"],
  pricing: "$0.03/1K tokens",
  trial_days: 0,
  url: "https://openai.com",
  reviews_summary: "Industry-leading AI model with exceptional capabilities",
  keywords: ["AI", "Machine Learning", "Natural Language", "API"],
  badges: ["AI Powered", "Popular"]
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
    maxKeywords: {
      control: 'number',
      description: 'Maximum number of keywords to display'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    recommendation: sampleRecommendation,
    showMatchScore: true,
    showBadges: true,
    maxKeywords: 3
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
    maxKeywords: 3
  }
};

// AI Product
export const AIProduct: Story = {
  args: {
    recommendation: sampleRecommendationAI,
    showMatchScore: true,
    showBadges: true,
    maxKeywords: 4
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
    maxKeywords: 3
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
    maxKeywords: 3
  }
};

// Without badges
export const WithoutBadges: Story = {
  args: {
    recommendation: sampleRecommendation,
    showMatchScore: true,
    showBadges: false,
    maxKeywords: 3
  }
};

// Without match score
export const WithoutMatchScore: Story = {
  args: {
    recommendation: sampleRecommendation,
    showMatchScore: false,
    showBadges: true,
    maxKeywords: 3
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
    maxKeywords: 3
  }
};
