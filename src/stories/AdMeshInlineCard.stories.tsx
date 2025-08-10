import type { Meta, StoryObj } from '@storybook/react';
import { AdMeshInlineCard } from '../components/AdMeshInlineCard';

const meta: Meta<typeof AdMeshInlineCard> = {
  title: 'AdMesh/InlineCard',
  component: AdMeshInlineCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    recommendation: {
      description: 'The recommendation data to display',
    },
    theme: {
      description: 'Theme configuration for styling',
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample recommendation data
const sampleRecommendation = {
  ad_id: 'hubspot-inline-1',
  title: 'HubSpot CRM',
  reason: 'Perfect for startups with excellent free tier and comprehensive features',
  intent_match_score: 0.95,
  admesh_link: 'https://useadmesh.com/track?ad_id=hubspot-inline-1',
  url: 'https://hubspot.com',
  product_id: 'hubspot-crm',
  keywords: ['CRM', 'customer management', 'sales'],
  recommendation_title: 'HubSpot CRM - Free Forever',
  recommendation_description: 'Start with HubSpot\'s free CRM and scale as you grow',
  content_variations: {
    statement: {
      text: "HubSpot CRM is perfect for startups with excellent free tier and comprehensive features, visit",
      cta: "HubSpot CRM"
    },
    question: {
      text: "Looking for CRM solutions for your startup? Try",
      cta: "HubSpot CRM"
    }
  },
  product_logo: {
    url: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png',
    storage_path: 'logos/hubspot.png',
    filename: 'hubspot.png',
    content_type: 'image/png',
    dimensions: { width: 32, height: 32 }
  }
};

const longDescriptionRecommendation = {
  ...sampleRecommendation,
  ad_id: 'salesforce-inline-1',
  title: 'Salesforce',
  reason: 'Enterprise-grade CRM with extensive customization and integration capabilities that can handle complex business processes and large-scale operations',
  recommendation_title: 'Salesforce - #1 CRM Platform',
  recommendation_description: 'The world\'s most powerful CRM platform with AI-powered insights, advanced automation, and enterprise-grade security features'
};

// Default Inline Card
export const Default: Story = {
  args: {
    recommendation: sampleRecommendation,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: '🎯 **Default Inline Card**: Compact card format with title, CTA button, brief description, and disclosure footer.',
      },
    },
  },
};

// Dark Theme
export const DarkTheme: Story = {
  args: {
    recommendation: sampleRecommendation,
    theme: { mode: 'dark' },
  },
  parameters: {
    docs: {
      description: {
        story: '🌙 **Dark Theme**: Inline card with dark mode styling.',
      },
    },
  },
};

// Long Description (Text Clamping)
export const LongDescription: Story = {
  args: {
    recommendation: longDescriptionRecommendation,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: '📝 **Long Description**: Demonstrates text clamping for longer descriptions (line-clamp-2).',
      },
    },
  },
};

// Without Logo
export const WithoutLogo: Story = {
  args: {
    recommendation: {
      ...sampleRecommendation,
      product_logo: undefined,
    },
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: '🚫 **Without Logo**: Inline card without product logo, showing title-only header.',
      },
    },
  },
};

// Custom Styling
export const CustomStyling: Story = {
  args: {
    recommendation: sampleRecommendation,
    theme: { 
      mode: 'light',
      accentColor: '#10b981',
      fontFamily: 'Inter, sans-serif'
    },
    style: {
      maxWidth: '400px',
      margin: '0 auto'
    }
  },
  parameters: {
    docs: {
      description: {
        story: '🎨 **Custom Styling**: Inline card with custom theme colors and container styling.',
      },
    },
  },
};

// Statement Variation
export const StatementVariation: Story = {
  args: {
    recommendation: sampleRecommendation,
    variation: 'statement',
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: '💬 **Statement Variation**: Uses statement text from content_variations with "Visit" CTA.',
      },
    },
  },
};

// Question Variation
export const QuestionVariation: Story = {
  args: {
    recommendation: sampleRecommendation,
    variation: 'question',
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: '❓ **Question Variation**: Uses question text from content_variations with "Try" CTA.',
      },
    },
  },
};

// Multiple Cards Stack
export const MultipleCards: Story = {
  render: () => (
    <div className="space-y-3 max-w-md">
      <AdMeshInlineCard
        recommendation={sampleRecommendation}
        theme={{ mode: 'light' }}
      />
      <AdMeshInlineCard
        recommendation={longDescriptionRecommendation}
        theme={{ mode: 'light' }}
      />
      <AdMeshInlineCard
        recommendation={{
          ...sampleRecommendation,
          ad_id: 'pipedrive-inline-1',
          title: 'Pipedrive',
          reason: 'Simple and intuitive sales pipeline management',
          recommendation_title: 'Pipedrive - Visual Sales Pipeline',
          recommendation_description: 'Streamline your sales process with visual pipelines'
        }}
        theme={{ mode: 'light' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '📚 **Multiple Cards**: Stack of inline cards showing typical usage in a list layout.',
      },
    },
  },
};
