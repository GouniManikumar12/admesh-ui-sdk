import type { Meta, StoryObj } from '@storybook/react-vite-vite';
import { AdMeshCitationUnit } from '../components/AdMeshCitationUnit';
import type { AdMeshRecommendation } from '../types';

const sampleRecommendations: AdMeshRecommendation[] = [
  {
    title: "HubSpot CRM",
    reason: "Perfect for remote teams with excellent collaboration features and robust automation capabilities",
    intent_match_score: 0.92,
    admesh_link: "https://useadmesh.com/track?ad_id=hubspot-123",
    ad_id: "hubspot-123",
    product_id: "hubspot-crm",
    trial_days: 14,
    keywords: ["CRM", "Sales", "Marketing", "Automation"],
    categories: ["Sales Tools", "CRM"],
    features: ["Contact Management", "Deal Pipeline", "Email Integration"],
    pricing: "Free tier available, paid plans from $45/month"
  },
  {
    title: "Salesforce",
    reason: "Enterprise-grade CRM with extensive customization and integration capabilities",
    intent_match_score: 0.88,
    admesh_link: "https://useadmesh.com/track?ad_id=salesforce-456",
    ad_id: "salesforce-456",
    product_id: "salesforce-crm",
    has_free_tier: false,
    trial_days: 30,
    keywords: ["CRM", "Enterprise", "Sales", "Cloud"],
    categories: ["Sales Tools", "CRM", "Enterprise"],
    features: ["Advanced Analytics", "Custom Objects", "Workflow Automation"],
    pricing: "Starting from $25/user/month"
  },
  {
    title: "Pipedrive",
    reason: "Simple and intuitive CRM focused on sales pipeline management",
    intent_match_score: 0.85,
    admesh_link: "https://useadmesh.com/track?ad_id=pipedrive-789",
    ad_id: "pipedrive-789",
    product_id: "pipedrive-crm",
    has_free_tier: false,
    trial_days: 14,
    keywords: ["CRM", "Pipeline", "Sales", "Simple"],
    categories: ["Sales Tools", "CRM"],
    features: ["Visual Pipeline", "Activity Reminders", "Email Sync"],
    pricing: "Starting from $14.90/user/month"
  }
];

const conversationText = `
Based on your requirements for a CRM system for your remote team, I'd recommend considering several excellent options. 

HubSpot CRM offers a comprehensive free tier that's perfect for getting started, with excellent collaboration features that work well for remote teams. The platform includes robust automation capabilities and integrates seamlessly with other business tools.

For larger enterprises, Salesforce provides the most comprehensive feature set with extensive customization options. While it has a steeper learning curve, it's the industry standard for enterprise CRM solutions.

If you prefer simplicity, Pipedrive focuses specifically on sales pipeline management with an intuitive interface that's easy for teams to adopt quickly.

All of these CRM solutions offer strong integration capabilities and can scale with your business needs.
`;

const meta: Meta<typeof AdMeshCitationUnit> = {
  title: 'Citation/AdMeshCitationUnit',
  component: AdMeshCitationUnit,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Citation-based conversation ad component that displays recommendations as numbered references within conversational text, similar to academic papers or AI assistant responses. Perfect for AI applications, chatbots, and content that needs to reference products naturally within flowing text.',
      },
    },
  },
  argTypes: {
    conversationText: {
      control: 'text',
      description: 'The conversational text where citations will be inserted',
    },
    citationStyle: {
      control: { type: 'select' },
      options: ['numbered', 'bracketed', 'superscript'],
      description: 'Style of citation references',
    },
    showCitationList: {
      control: 'boolean',
      description: 'Whether to show the reference list at the bottom',
    },
    theme: {
      control: 'object',
      description: 'Theme configuration for styling',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberedCitations: Story = {
  args: {
    recommendations: sampleRecommendations,
    conversationText: conversationText,
    citationStyle: 'numbered',
    showCitationList: true,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Numbered citation style with clean numbered circles. Product names like "HubSpot CRM" are clickable links, and citation numbers provide additional reference points. Click on either the product names or citation numbers to open product pages.',
      },
    },
  },
};

export const BracketedCitations: Story = {
  args: {
    recommendations: sampleRecommendations,
    conversationText: conversationText,
    citationStyle: 'bracketed',
    showCitationList: true,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Bracketed citation style [1] similar to academic papers and research documents.',
      },
    },
  },
};

export const SuperscriptCitations: Story = {
  args: {
    recommendations: sampleRecommendations,
    conversationText: conversationText,
    citationStyle: 'superscript',
    showCitationList: true,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Superscript citation style¹ with minimal visual footprint, perfect for dense text.',
      },
    },
  },
};

export const WithoutReferenceList: Story = {
  args: {
    recommendations: sampleRecommendations,
    conversationText: conversationText,
    citationStyle: 'numbered',
    showCitationList: false,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Citations without the reference list at the bottom. Users can still hover over citations to see details in tooltips.',
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    recommendations: sampleRecommendations,
    conversationText: conversationText,
    citationStyle: 'numbered',
    showCitationList: true,
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
};

export const ShortText: Story = {
  args: {
    recommendations: sampleRecommendations.slice(0, 2),
    conversationText: "For your CRM needs, I recommend HubSpot CRM for its excellent features and Salesforce for enterprise requirements.",
    citationStyle: 'numbered',
    showCitationList: true,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Citation unit with shorter text content. The component automatically finds product mentions and inserts appropriate citations.',
      },
    },
  },
};

export const ClickableProductNames: Story = {
  args: {
    recommendations: sampleRecommendations,
    conversationText: conversationText,
    citationStyle: 'numbered',
    showCitationList: true,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates clickable product names within the conversational text. Product names like "HubSpot CRM", "Salesforce", and "Pipedrive" are styled as blue hyperlinks and are fully clickable, while citation numbers provide additional reference points.',
      },
    },
  },
};

export const InteractiveDemo: Story = {
  args: {
    recommendations: sampleRecommendations,
    conversationText: conversationText,
    citationStyle: 'numbered',
    showCitationList: true,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo with click and hover handlers. Both product names and citation numbers are clickable. Hover over citations to see tooltips, click to open product links.',
      },
    },
  },
  play: async ({ args }) => {
    args.onRecommendationClick = (adId: string, admeshLink: string) => {
      console.log(`Product clicked - Ad ID: ${adId}, Opening: ${admeshLink}`);
      // Let the AdMeshLinkTracker handle opening the link
    };
    args.onCitationHover = (recommendation: AdMeshRecommendation) => {
      console.log('Product hovered:', recommendation.title);
    };
  },
};

// Storybook Ad Format Examples
const startupStoryText = `Sarah was a brilliant engineer who decided to start her own SaaS company. As her customer base grew from 10 to 1,000 users, she realized she needed better tools to manage customer relationships¹ and track her sales pipeline².

She also struggled with project management³ as her team expanded from 2 to 15 people. The spreadsheets and email chains that worked in the early days were no longer sufficient for coordinating complex projects and maintaining clear communication across the growing team.

After researching various solutions and talking to other founders, Sarah found the perfect combination of tools that helped her scale efficiently while maintaining the personal touch that made her customers love the product.`;

export const StorybookBusinessNarrative: Story = {
  args: {
    recommendations: [
      {
        title: "HubSpot CRM",
        reason: "Perfect for growing businesses with excellent free tier and automation features",
        intent_match_score: 0.94,
        admesh_link: "https://useadmesh.com/track?ad_id=hubspot-crm&story=startup-journey",
        ad_id: "hubspot-crm",
        product_id: "hubspot",
        trial_days: 14,
        keywords: ["CRM", "Sales", "Free"],
        categories: ["Sales Tools"],
        features: ["Contact Management", "Deal Pipeline", "Email Integration"],
        pricing: "Free tier available"
      },
      {
        title: "Pipedrive",
        reason: "Visual sales pipeline management that's perfect for tracking deals and opportunities",
        intent_match_score: 0.89,
        admesh_link: "https://useadmesh.com/track?ad_id=pipedrive&story=startup-journey",
        ad_id: "pipedrive",
        product_id: "pipedrive",
        has_free_tier: false,
        trial_days: 14,
        keywords: ["CRM", "Sales Pipeline", "Visual"],
        categories: ["Sales Tools"],
        features: ["Visual Pipeline", "Deal Tracking", "Sales Reporting"],
        pricing: "Starting at $14.90/user/month"
      },
      {
        title: "Notion",
        reason: "All-in-one workspace perfect for project management and team collaboration",
        intent_match_score: 0.91,
        admesh_link: "https://useadmesh.com/track?ad_id=notion&story=startup-journey",
        ad_id: "notion",
        product_id: "notion",
        has_free_tier: true,
        trial_days: 0,
        keywords: ["Productivity", "Project Management", "Collaboration"],
        categories: ["Productivity Tools"],
        features: ["Database", "Wiki", "Project Management", "AI Assistant"],
        pricing: "Free for personal use"
      }
    ],
    conversationText: startupStoryText,
    citationStyle: 'numbered',
    showCitationList: true,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: '📚 **Storybook Ad Format**: A business growth story showing how AdMesh recommendations appear as academic-style citations within narratives. This demonstrates the revolutionary "storybook advertising" approach that enhances content rather than interrupting it.',
      },
    },
  },
};
