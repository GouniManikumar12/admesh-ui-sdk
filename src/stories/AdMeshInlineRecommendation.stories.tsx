import type { Meta, StoryObj } from '@storybook/react';
import { AdMeshInlineRecommendation } from '../components/AdMeshInlineRecommendation';
import type { AdMeshRecommendation } from '../types';

const sampleRecommendation: AdMeshRecommendation = {
  title: "HubSpot CRM",
  reason: "Perfect for remote teams with excellent collaboration features and robust automation capabilities that streamline your sales process",
  intent_match_score: 0.92,
  admesh_link: "https://useadmesh.com/track?ad_id=hubspot-123",
  ad_id: "hubspot-123",
  product_id: "hubspot-crm",
  has_free_tier: true,
  trial_days: 14,
  keywords: ["CRM", "Sales", "Marketing", "Automation", "Collaboration"],
  categories: ["Sales Tools", "CRM"],
  features: ["Contact Management", "Deal Pipeline", "Email Integration", "Team Collaboration"],
  pricing: "Free tier available, paid plans from $45/month"
};

const highMatchRecommendation: AdMeshRecommendation = {
  ...sampleRecommendation,
  title: "Salesforce Sales Cloud",
  reason: "Enterprise-grade CRM with advanced analytics and customization options",
  intent_match_score: 0.95,
  ad_id: "salesforce-456",
  product_id: "salesforce-sales",
  has_free_tier: false,
  trial_days: 30,
  keywords: ["CRM", "Enterprise", "Analytics"],
};

const lowMatchRecommendation: AdMeshRecommendation = {
  ...sampleRecommendation,
  title: "Basic CRM Tool",
  reason: "Simple contact management solution",
  intent_match_score: 0.65,
  ad_id: "basic-789",
  product_id: "basic-crm",
  has_free_tier: true,
  trial_days: 7,
  keywords: ["CRM", "Simple"],
};

const meta: Meta<typeof AdMeshInlineRecommendation> = {
  title: 'Conversational/AdMeshInlineRecommendation',
  component: AdMeshInlineRecommendation,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Compact inline recommendation component perfect for chat interfaces and conversational experiences. Displays product information in a space-efficient format with hover effects and match score indicators.',
      },
    },
  },
  argTypes: {
    compact: {
      control: 'boolean',
      description: 'Whether to use compact layout for space-constrained interfaces',
    },
    showReason: {
      control: 'boolean',
      description: 'Whether to display the recommendation reason/description',
    },
    theme: {
      control: 'object',
      description: 'Theme configuration for styling',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    recommendation: sampleRecommendation,
    compact: false,
    showReason: true,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Default inline recommendation with full information display including reason, keywords, and feature badges.',
      },
    },
  },
};

export const Compact: Story = {
  args: {
    recommendation: sampleRecommendation,
    compact: true,
    showReason: true,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact version suitable for space-constrained interfaces like mobile chat or sidebar recommendations.',
      },
    },
  },
};

export const CompactNoReason: Story = {
  args: {
    recommendation: sampleRecommendation,
    compact: true,
    showReason: false,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Ultra-compact version with just title and match score, perfect for minimal chat interfaces.',
      },
    },
  },
};

export const HighMatchScore: Story = {
  args: {
    recommendation: highMatchRecommendation,
    compact: false,
    showReason: true,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'High match score (95%) recommendation showing green indicator and match badge.',
      },
    },
  },
};

export const LowMatchScore: Story = {
  args: {
    recommendation: lowMatchRecommendation,
    compact: false,
    showReason: true,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Lower match score (65%) recommendation with blue indicator and no match badge (below 70% threshold).',
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    recommendation: sampleRecommendation,
    compact: false,
    showReason: true,
    theme: { 
      mode: 'dark',
      accentColor: '#3b82f6'
    },
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Dark theme variant with custom accent color and appropriate contrast adjustments.',
      },
    },
  },
};

export const CompactDark: Story = {
  args: {
    recommendation: sampleRecommendation,
    compact: true,
    showReason: false,
    theme: { 
      mode: 'dark',
      accentColor: '#10b981'
    },
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Compact dark theme version with green accent color, ideal for dark chat interfaces.',
      },
    },
  },
};

export const InteractiveDemo: Story = {
  args: {
    recommendation: sampleRecommendation,
    compact: false,
    showReason: true,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo with click handler. Click the recommendation to see the tracking in action.',
      },
    },
  },
  play: async ({ args }) => {
    // Add click handler for demo
    args.onClick = (adId: string, admeshLink: string) => {
      alert(`Clicked recommendation: ${adId}\nTracked link: ${admeshLink}`);
    };
  },
};

export const ChatBubbleExample: Story = {
  args: {
    recommendation: sampleRecommendation,
    compact: true,
    showReason: true,
    theme: { mode: 'light' },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto">
        {/* Simulated chat messages */}
        <div className="space-y-3">
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-xs">
              I need a CRM for my remote team
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-md">
              <p className="mb-2">I'd recommend checking out these CRM solutions that work great for remote teams:</p>
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Example showing how the inline recommendation looks within a chat bubble context.',
      },
    },
  },
};

export const MultipleRecommendations: Story = {
  render: (args) => (
    <div className="space-y-2">
      <AdMeshInlineRecommendation
        {...args}
        recommendation={highMatchRecommendation}
      />
      <AdMeshInlineRecommendation
        {...args}
        recommendation={sampleRecommendation}
      />
      <AdMeshInlineRecommendation
        {...args}
        recommendation={lowMatchRecommendation}
      />
    </div>
  ),
  args: {
    compact: true,
    showReason: false,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple inline recommendations stacked vertically, showing different match scores and indicators.',
      },
    },
  },
};

export const MobileOptimized: Story = {
  args: {
    recommendation: sampleRecommendation,
    compact: true,
    showReason: true,
    theme: { mode: 'light' },
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile-optimized view showing how the component adapts to smaller screens.',
      },
    },
  },
};
