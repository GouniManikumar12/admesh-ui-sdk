import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
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
  integrations: ["Gmail", "Outlook", "Slack", "Zoom"],
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
  integrations: ["REST API", "Python SDK", "Node.js SDK"],
  pricing: "$0.03/1K tokens",
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
  title: 'Product Card/AdMeshProductCard',
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

// Without badges
export const WithoutBadges: Story = {
  args: {
    recommendation: sampleRecommendation,
    showMatchScore: true,
    showBadges: false,

  }
};

// Without match score
export const WithoutMatchScore: Story = {
  args: {
    recommendation: sampleRecommendation,
    showMatchScore: false,
    showBadges: true,

  }
};

// Question Variation - Expandable layout
export const QuestionVariation: Story = {
  args: {
    recommendation: sampleRecommendation,
    variation: 'question',
    showMatchScore: true,
    showBadges: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Question variation starts as a simple inline layout but can be expanded to show full product details. Click the expand button to see more information.'
      }
    }
  }
};

// Statement Variation - Expandable layout
export const StatementVariation: Story = {
  args: {
    recommendation: sampleRecommendation,
    variation: 'statement',
    showMatchScore: true,
    showBadges: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Statement variation starts as a simple inline layout but can be expanded to show full product details. Click the expand button to see more information.'
      }
    }
  }
};

// Question Variation with AI Product - Expandable
export const QuestionVariationAI: Story = {
  args: {
    recommendation: sampleRecommendationAI,
    variation: 'question',
    showMatchScore: true,
    showBadges: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Question variation with AI product showing the expandable inline layout. Starts simple but can expand to show full details.'
      }
    }
  }
};

// Comparison of all variations
export const AllVariations: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Default (Full Card)</h3>
        <AdMeshProductCard
          recommendation={sampleRecommendation}
          variation="default"
          showMatchScore={true}
          showBadges={true}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Question (Expandable)</h3>
        <AdMeshProductCard
          recommendation={sampleRecommendation}
          variation="question"
          showMatchScore={true}
          showBadges={true}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Statement (Expandable)</h3>
        <AdMeshProductCard
          recommendation={sampleRecommendation}
          variation="statement"
          showMatchScore={true}
          showBadges={true}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison showing all three variations: default full card, question expandable, and statement expandable. The expandable variations start simple but can be expanded to show full details.'
      }
    }
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

// Expandable Demo - Interactive showcase
export const ExpandableDemo: Story = {
  render: () => {
    const [currentVariation, setCurrentVariation] = React.useState<'question' | 'statement'>('question');

    return (
      <div className="space-y-4">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setCurrentVariation('question')}
            className={`px-3 py-1 rounded text-sm ${
              currentVariation === 'question'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Question Variation
          </button>
          <button
            onClick={() => setCurrentVariation('statement')}
            className={`px-3 py-1 rounded text-sm ${
              currentVariation === 'statement'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Statement Variation
          </button>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-3">
            This component starts as a simple inline ad but can be expanded to show full product details.
            Click the expand button (↓) to see more information, then click collapse (↑) to return to simple view.
          </p>
          <AdMeshProductCard
            key={currentVariation} // Force re-render to reset state
            recommendation={sampleRecommendation}
            variation={currentVariation}
            showMatchScore={true}
            showBadges={true}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing the expandable functionality. The component starts simple and can be expanded to show full details.'
      }
    }
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
