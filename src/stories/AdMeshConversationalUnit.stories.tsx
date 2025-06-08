import type { Meta, StoryObj } from '@storybook/react-vite';
import { AdMeshConversationalUnit } from '../components/AdMeshConversationalUnit';
import type { AdMeshRecommendation } from '../types';

const sampleRecommendations: AdMeshRecommendation[] = [
  {
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
  },
  {
    title: "Salesforce Sales Cloud",
    reason: "Enterprise-grade CRM with advanced analytics and customization options for growing businesses",
    intent_match_score: 0.87,
    admesh_link: "https://useadmesh.com/track?ad_id=salesforce-456",
    ad_id: "salesforce-456",
    product_id: "salesforce-sales",
    has_free_tier: false,
    trial_days: 30,
    keywords: ["CRM", "Enterprise", "Analytics", "Customization"],
    categories: ["Sales Tools", "Enterprise Software"],
    features: ["Advanced Analytics", "Custom Objects", "Workflow Automation"],
    pricing: "Starting from $25/user/month"
  },
  {
    title: "Pipedrive",
    reason: "Simple and intuitive CRM designed specifically for small to medium businesses",
    intent_match_score: 0.81,
    admesh_link: "https://useadmesh.com/track?ad_id=pipedrive-789",
    ad_id: "pipedrive-789",
    product_id: "pipedrive-crm",
    has_free_tier: false,
    trial_days: 14,
    keywords: ["CRM", "Simple", "SMB", "Pipeline"],
    categories: ["Sales Tools", "Small Business"],
    features: ["Visual Pipeline", "Activity Reminders", "Email Sync"],
    pricing: "Starting from $14.90/user/month"
  }
];

const meta: Meta<typeof AdMeshConversationalUnit> = {
  title: 'Conversational/AdMeshConversationalUnit',
  component: AdMeshConversationalUnit,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Smart conversational ad component that adapts to different chat contexts and display modes. Perfect for integrating product recommendations into chat interfaces, AI assistants, and conversational experiences.',
      },
    },
  },
  argTypes: {
    config: {
      control: 'object',
      description: 'Configuration object for display mode, context, and behavior',
    },
    theme: {
      control: 'object',
      description: 'Theme configuration for styling',
    },
    conversationSummary: {
      control: 'text',
      description: 'Summary text for conversation context (used in summary mode)',
    },
    sessionId: {
      control: 'text',
      description: 'Session identifier for tracking',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InlineMode: Story = {
  args: {
    recommendations: sampleRecommendations,
    config: {
      displayMode: 'inline',
      context: 'chat',
      maxRecommendations: 3,
      showPoweredBy: true,
      autoShow: true,
    },
    theme: { mode: 'light' },
    sessionId: 'demo-session-123',
  },
  parameters: {
    docs: {
      description: {
        story: 'Inline mode displays full recommendation cards within the conversation flow. Best for chat applications where you want detailed product information.',
      },
    },
  },
};

export const MinimalMode: Story = {
  args: {
    recommendations: sampleRecommendations,
    config: {
      displayMode: 'minimal',
      context: 'assistant',
      maxRecommendations: 2,
      showPoweredBy: true,
      autoShow: true,
    },
    theme: { mode: 'light' },
    sessionId: 'demo-session-456',
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal mode shows a compact display with match count and top recommendation. Perfect for space-constrained interfaces and mobile.',
      },
    },
  },
};

export const FloatingMode: Story = {
  args: {
    recommendations: sampleRecommendations.slice(0, 2),
    config: {
      displayMode: 'floating',
      context: 'support',
      maxRecommendations: 2,
      showPoweredBy: true,
      autoShow: true,
    },
    theme: { mode: 'light' },
    sessionId: 'demo-session-789',
  },
  parameters: {
    docs: {
      description: {
        story: 'Floating mode appears as a dismissible overlay that doesn\'t interrupt the conversation layout. Great for non-intrusive suggestions.',
      },
    },
  },
};

export const SummaryMode: Story = {
  args: {
    recommendations: sampleRecommendations,
    config: {
      displayMode: 'summary',
      context: 'agent',
      maxRecommendations: 3,
      showPoweredBy: true,
      autoShow: true,
    },
    theme: { mode: 'light' },
    conversationSummary: "We discussed your need for a CRM solution that works well for remote teams. You mentioned wanting good collaboration features, automation capabilities, and preferably something with a free tier to start. Based on your requirements, I've identified several options that match your criteria.",
    sessionId: 'demo-session-summary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Summary mode provides a comprehensive end-of-conversation summary with top recommendations and action buttons. Perfect for session wrap-ups.',
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    recommendations: sampleRecommendations,
    config: {
      displayMode: 'inline',
      context: 'chat',
      maxRecommendations: 2,
      showPoweredBy: true,
      autoShow: true,
    },
    theme: { 
      mode: 'dark',
      accentColor: '#3b82f6'
    },
    sessionId: 'demo-session-dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Dark theme variant with custom accent color. All conversational components support both light and dark modes.',
      },
    },
  },
};

export const DelayedDisplay: Story = {
  args: {
    recommendations: sampleRecommendations,
    config: {
      displayMode: 'inline',
      context: 'chat',
      maxRecommendations: 2,
      showPoweredBy: true,
      autoShow: true,
      delayMs: 2000,
    },
    theme: { mode: 'light' },
    sessionId: 'demo-session-delayed',
  },
  parameters: {
    docs: {
      description: {
        story: 'Delayed display shows recommendations after a specified delay (2 seconds in this example). Useful for avoiding overwhelming users with immediate suggestions.',
      },
    },
  },
};

export const ChatContext: Story = {
  args: {
    recommendations: sampleRecommendations.slice(0, 1),
    config: {
      displayMode: 'minimal',
      context: 'chat',
      maxRecommendations: 1,
      showPoweredBy: false,
    },
    theme: { mode: 'light' },
    sessionId: 'demo-chat-context',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat context with minimal display and no branding. Different contexts apply appropriate styling for their use case.',
      },
    },
  },
};

export const CitationMode: Story = {
  args: {
    recommendations: sampleRecommendations,
    config: {
      displayMode: 'citation',
      context: 'assistant',
      maxRecommendations: 3,
      showPoweredBy: true,
      autoShow: true,
    },
    theme: { mode: 'light' },
    conversationSummary: "Based on your requirements for a CRM system for your remote team, I'd recommend considering several excellent options. HubSpot CRM offers a comprehensive free tier that's perfect for getting started, with excellent collaboration features that work well for remote teams. For larger enterprises, Salesforce provides the most comprehensive feature set with extensive customization options. If you prefer simplicity, Pipedrive focuses specifically on sales pipeline management with an intuitive interface that's easy for teams to adopt quickly.",
    sessionId: 'demo-citation',
  },
  parameters: {
    docs: {
      description: {
        story: 'Citation mode displays recommendations as numbered references within conversational text, similar to academic papers or AI assistant responses. Click on citations or products in the reference list to open their pages.',
      },
    },
  },
  play: async ({ args }) => {
    args.onRecommendationClick = (adId: string, admeshLink: string) => {
      console.log(`Product clicked - Ad ID: ${adId}, Opening: ${admeshLink}`);
      // Let the AdMeshLinkTracker handle opening the link
    };
  },
};

export const InteractiveDemo: Story = {
  args: {
    recommendations: sampleRecommendations,
    config: {
      displayMode: 'inline',
      context: 'chat',
      maxRecommendations: 3,
      showPoweredBy: true,
      autoShow: true,
    },
    theme: { mode: 'light' },
    sessionId: 'demo-interactive',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo with click handlers. Click on any recommendation to see the tracking in action.',
      },
    },
  },
  play: async ({ args }) => {
    // Add click handlers for demo
    args.onRecommendationClick = (adId: string, admeshLink: string) => {
      alert(`Clicked recommendation: ${adId}\nLink: ${admeshLink}`);
    };
  },
};
