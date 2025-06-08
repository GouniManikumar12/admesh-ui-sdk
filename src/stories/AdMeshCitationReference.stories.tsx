import type { Meta, StoryObj } from '@storybook/react-vite';
import { AdMeshCitationReference } from '../components/AdMeshCitationReference';
import type { AdMeshRecommendation } from '../types';

const sampleRecommendation: AdMeshRecommendation = {
  title: "HubSpot CRM",
  reason: "Perfect for remote teams with excellent collaboration features and robust automation capabilities",
  intent_match_score: 0.92,
  admesh_link: "https://useadmesh.com/track?ad_id=hubspot-123",
  ad_id: "hubspot-123",
  product_id: "hubspot-crm",
  has_free_tier: true,
  trial_days: 14,
  keywords: ["CRM", "Sales", "Marketing", "Automation"],
  categories: ["Sales Tools", "CRM"],
  features: ["Contact Management", "Deal Pipeline", "Email Integration"],
  pricing: "Free tier available, paid plans from $45/month"
};

const meta: Meta<typeof AdMeshCitationReference> = {
  title: 'Citation/AdMeshCitationReference',
  component: AdMeshCitationReference,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Individual citation reference component for inline use within conversational text. Can be used independently to create custom citation layouts or embedded within other text content.',
      },
    },
  },
  argTypes: {
    citationNumber: {
      control: { type: 'number', min: 1, max: 99 },
      description: 'The citation number to display',
    },
    citationStyle: {
      control: { type: 'select' },
      options: ['numbered', 'bracketed', 'superscript'],
      description: 'Style of citation reference',
    },
    showTooltip: {
      control: 'boolean',
      description: 'Whether to show tooltip on hover',
    },
    theme: {
      control: 'object',
      description: 'Theme configuration for styling',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', lineHeight: '1.6' }}>
        <p style={{ margin: '0 0 20px 0', color: '#374151' }}>
          This is an example of inline citation usage. You can embed citations directly in your text like this{' '}
          <Story />
          {' '}to reference products naturally within conversational content.
        </p>
        <p style={{ margin: '0', fontSize: '14px', color: '#6b7280' }}>
          Hover over the citation to see the tooltip with product details.
        </p>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberedStyle: Story = {
  args: {
    recommendation: sampleRecommendation,
    citationNumber: 1,
    citationStyle: 'numbered',
    showTooltip: true,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Numbered citation style with clean numbered circles. This is the default and most modern-looking citation format. Click the citation to open the product page.',
      },
    },
  },
};

export const BracketedStyle: Story = {
  args: {
    recommendation: sampleRecommendation,
    citationNumber: 2,
    citationStyle: 'bracketed',
    showTooltip: true,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Bracketed citation style [2] similar to academic papers and research documents.',
      },
    },
  },
};

export const SuperscriptStyle: Story = {
  args: {
    recommendation: sampleRecommendation,
    citationNumber: 3,
    citationStyle: 'superscript',
    showTooltip: true,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Superscript citation style³ with minimal visual footprint, perfect for dense text.',
      },
    },
  },
};

export const WithoutTooltip: Story = {
  args: {
    recommendation: sampleRecommendation,
    citationNumber: 4,
    citationStyle: 'numbered',
    showTooltip: false,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Citation reference without tooltip. Useful when you want to handle hover interactions differently or show details elsewhere.',
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    recommendation: sampleRecommendation,
    citationNumber: 5,
    citationStyle: 'numbered',
    showTooltip: true,
    theme: { 
      mode: 'dark',
      accentColor: '#3b82f6'
    },
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Dark theme variant with custom accent color. Citations adapt to dark mode with appropriate contrast.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', lineHeight: '1.6' }}>
        <p style={{ margin: '0 0 20px 0', color: '#f3f4f6' }}>
          This is an example of inline citation usage in dark mode. You can embed citations directly in your text like this{' '}
          <Story />
          {' '}to reference products naturally within conversational content.
        </p>
        <p style={{ margin: '0', fontSize: '14px', color: '#9ca3af' }}>
          Hover over the citation to see the tooltip with product details.
        </p>
      </div>
    ),
  ],
};

export const HighMatchScore: Story = {
  args: {
    recommendation: {
      ...sampleRecommendation,
      intent_match_score: 0.95,
    },
    citationNumber: 6,
    citationStyle: 'numbered',
    showTooltip: true,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Citation with high match score (95%). The tooltip will show the match percentage when the score is above 70%.',
      },
    },
  },
};

export const InteractiveDemo: Story = {
  args: {
    recommendation: sampleRecommendation,
    citationNumber: 7,
    citationStyle: 'numbered',
    showTooltip: true,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo with click and hover handlers. Click the citation to open the product link.',
      },
    },
  },
  play: async ({ args }) => {
    args.onClick = (adId: string, admeshLink: string) => {
      console.log(`Citation clicked - Ad ID: ${adId}, Opening: ${admeshLink}`);
      // Let the AdMeshLinkTracker handle opening the link
    };
    args.onHover = (recommendation: AdMeshRecommendation) => {
      console.log('Citation hovered:', recommendation.title);
    };
  },
};

export const MultipleStyles: Story = {
  render: () => (
    <div style={{ padding: '20px', lineHeight: '1.8' }}>
      <p style={{ margin: '0 0 20px 0', color: '#374151' }}>
        Here's a comparison of all citation styles in one paragraph. You can use numbered{' '}
        <AdMeshCitationReference
          recommendation={sampleRecommendation}
          citationNumber={1}
          citationStyle="numbered"
          showTooltip={true}
          theme={{ mode: 'light' }}
        />
        {' '}citations, bracketed{' '}
        <AdMeshCitationReference
          recommendation={sampleRecommendation}
          citationNumber={2}
          citationStyle="bracketed"
          showTooltip={true}
          theme={{ mode: 'light' }}
        />
        {' '}citations, or superscript{' '}
        <AdMeshCitationReference
          recommendation={sampleRecommendation}
          citationNumber={3}
          citationStyle="superscript"
          showTooltip={true}
          theme={{ mode: 'light' }}
        />
        {' '}citations depending on your design preferences and use case.
      </p>
      <p style={{ margin: '0', fontSize: '14px', color: '#6b7280' }}>
        Hover over any citation to see the product details in a tooltip.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all three citation styles in a single paragraph. This shows how different styles can be mixed or how you can choose the one that best fits your design.',
      },
    },
  },
};
