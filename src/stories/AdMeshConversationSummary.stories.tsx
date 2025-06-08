import type { Meta, StoryObj } from '@storybook/react-vite';
import { AdMeshConversationSummary } from '../components/AdMeshConversationSummary';
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
  },
  {
    title: "Monday.com",
    reason: "Versatile work management platform that can be configured as a CRM with excellent team collaboration",
    intent_match_score: 0.75,
    admesh_link: "https://useadmesh.com/track?ad_id=monday-101",
    ad_id: "monday-101",
    product_id: "monday-crm",
    has_free_tier: true,
    trial_days: 14,
    keywords: ["CRM", "Project Management", "Collaboration", "Customizable"],
    categories: ["CRM", "Project Management"],
    features: ["Custom Workflows", "Team Collaboration", "Visual Boards"],
    pricing: "Free for up to 2 users, paid plans from $8/user/month"
  },
  {
    title: "Zoho CRM",
    reason: "Comprehensive CRM solution with AI-powered insights and extensive customization options",
    intent_match_score: 0.78,
    admesh_link: "https://useadmesh.com/track?ad_id=zoho-202",
    ad_id: "zoho-202",
    product_id: "zoho-crm",
    has_free_tier: true,
    trial_days: 15,
    keywords: ["CRM", "AI", "Customization", "Integration"],
    categories: ["CRM", "Business Software"],
    features: ["AI Assistant", "Custom Modules", "Email Marketing"],
    pricing: "Free for up to 3 users, paid plans from $14/user/month"
  }
];

const conversationSummary = `We had a great discussion about finding the right CRM solution for your remote team. You mentioned that collaboration features, automation capabilities, and having a free tier to start were your main priorities. 

Based on your specific requirements for remote team management and your preference for tools with good collaboration features, I've identified several excellent options. HubSpot CRM emerged as the top recommendation due to its excellent free tier and robust collaboration tools, followed by Salesforce for its enterprise-grade features and Pipedrive for its simplicity.

Each of these solutions offers unique strengths that align with different aspects of your needs, from budget considerations to advanced functionality.`;

const meta: Meta<typeof AdMeshConversationSummary> = {
  title: 'Conversational/AdMeshConversationSummary',
  component: AdMeshConversationSummary,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'End-of-conversation summary component that provides a comprehensive overview with top recommendations and action buttons. Perfect for session wrap-ups and conversation conclusions.',
      },
    },
  },
  argTypes: {
    conversationSummary: {
      control: 'text',
      description: 'The summary text describing the conversation and findings',
    },
    showTopRecommendations: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of top recommendations to display',
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
    recommendations: sampleRecommendations,
    conversationSummary,
    showTopRecommendations: 3,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Default conversation summary with top 3 recommendations, conversation overview, and action buttons.',
      },
    },
  },
};

export const ExtendedSummary: Story = {
  args: {
    recommendations: sampleRecommendations,
    conversationSummary,
    showTopRecommendations: 5,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Extended summary showing 5 recommendations with ranking badges and additional insights.',
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    recommendations: sampleRecommendations,
    conversationSummary,
    showTopRecommendations: 3,
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

export const ShortSummary: Story = {
  args: {
    recommendations: sampleRecommendations.slice(0, 2),
    conversationSummary: "We discussed CRM options for your team. Here are the top matches based on your requirements for collaboration and automation features.",
    showTopRecommendations: 2,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Shorter summary with fewer recommendations, suitable for brief conversations or quick consultations.',
      },
    },
  },
};

export const SingleRecommendation: Story = {
  args: {
    recommendations: [sampleRecommendations[0]],
    conversationSummary: "Based on our conversation about your need for a CRM with excellent collaboration features and a free tier, HubSpot CRM is the perfect match for your requirements.",
    showTopRecommendations: 1,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Summary with a single top recommendation, ideal for focused conversations with clear outcomes.',
      },
    },
  },
};

export const InteractiveDemo: Story = {
  args: {
    recommendations: sampleRecommendations,
    conversationSummary,
    showTopRecommendations: 3,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo with click handlers for recommendations and action buttons.',
      },
    },
  },
  play: async ({ args }) => {
    // Add click handlers for demo
    args.onRecommendationClick = (adId: string, admeshLink: string) => {
      alert(`Opening recommendation: ${adId}\nTracked link: ${admeshLink}`);
    };
    
    args.onStartNewConversation = () => {
      alert('Starting new conversation...');
    };
  },
};

export const CustomAccentColor: Story = {
  args: {
    recommendations: sampleRecommendations,
    conversationSummary,
    showTopRecommendations: 3,
    theme: { 
      mode: 'light',
      accentColor: '#10b981' // Green accent
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom accent color example showing how the component adapts to brand colors.',
      },
    },
  },
};

export const MobileOptimized: Story = {
  args: {
    recommendations: sampleRecommendations,
    conversationSummary,
    showTopRecommendations: 2,
    theme: { mode: 'light' },
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile-optimized view showing how the component adapts to smaller screens with responsive design.',
      },
    },
  },
};
