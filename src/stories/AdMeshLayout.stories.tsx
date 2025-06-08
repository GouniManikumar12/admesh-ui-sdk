import type { Meta, StoryObj } from '@storybook/react-vite';
import { AdMeshLayout } from '../components/AdMeshLayout';
import type { AdMeshRecommendation } from '../types/index';

// Sample recommendations data
const sampleRecommendations: AdMeshRecommendation[] = [
  {
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
    keywords: ["CRM", "Sales", "Marketing"]
  },
  {
    title: "Salesforce CRM",
    reason: "Enterprise-grade CRM with advanced customization and automation capabilities",
    intent_match_score: 0.88,
    admesh_link: "https://useadmesh.com/track?ad_id=salesforce-456&redirect=https://salesforce.com",
    ad_id: "salesforce-456",
    product_id: "salesforce-crm",
    features: ["Advanced Analytics", "Custom Objects", "Workflow Automation", "AppExchange"],
    has_free_tier: false,
    integrations: ["Microsoft 365", "Google Workspace", "Slack"],
    pricing: "$25 - $300/user/month",
    trial_days: 30,
    keywords: ["CRM", "Enterprise", "Automation"]
  },
  {
    title: "Pipedrive",
    reason: "Simple and intuitive CRM focused on sales pipeline management",
    intent_match_score: 0.85,
    admesh_link: "https://useadmesh.com/track?ad_id=pipedrive-789&redirect=https://pipedrive.com",
    ad_id: "pipedrive-789",
    product_id: "pipedrive-crm",
    features: ["Visual Pipeline", "Activity Reminders", "Email Integration", "Mobile App"],
    has_free_tier: false,
    integrations: ["Gmail", "Outlook", "Zapier"],
    pricing: "$14.90 - $99/user/month",
    trial_days: 14,
    keywords: ["CRM", "Pipeline", "Sales"]
  }
];

const meta: Meta<typeof AdMeshLayout> = {
  title: 'AdMesh/Layout',
  component: AdMeshLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'An intelligent layout component that automatically chooses the best display format for product recommendations.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    intentType: {
      control: 'select',
      options: ['compare_products', 'best_for_use_case', 'trial_demo', 'budget_conscious'],
      description: 'The type of intent to optimize layout for'
    },
    theme: {
      control: 'object',
      description: 'Theme configuration'
    },
    maxDisplayed: {
      control: 'number',
      description: 'Maximum number of products to display'
    },
    showMatchScores: {
      control: 'boolean',
      description: 'Whether to show match scores'
    },
    showFeatures: {
      control: 'boolean',
      description: 'Whether to show product features'
    },
    autoLayout: {
      control: 'boolean',
      description: 'Whether to automatically choose layout based on data'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default auto layout
export const AutoLayout: Story = {
  args: {
    recommendations: sampleRecommendations,
    autoLayout: true,
    maxDisplayed: 6,
    showMatchScores: true,
    showFeatures: true
  }
};

// Cards layout
export const CardsLayout: Story = {
  args: {
    recommendations: sampleRecommendations,
    intentType: 'best_for_use_case',
    autoLayout: false,
    maxDisplayed: 6,
    showMatchScores: true,
    showFeatures: true
  }
};

// Compare layout
export const CompareLayout: Story = {
  args: {
    recommendations: sampleRecommendations,
    intentType: 'compare_products',
    autoLayout: false,
    maxDisplayed: 3,
    showMatchScores: true,
    showFeatures: true
  }
};

// Single product
export const SingleProduct: Story = {
  args: {
    recommendations: [sampleRecommendations[0]],
    autoLayout: true,
    maxDisplayed: 6,
    showMatchScores: true,
    showFeatures: true
  }
};

// Two products
export const TwoProducts: Story = {
  args: {
    recommendations: sampleRecommendations.slice(0, 2),
    autoLayout: true,
    maxDisplayed: 6,
    showMatchScores: true,
    showFeatures: true
  }
};

// Dark theme
export const DarkTheme: Story = {
  args: {
    recommendations: sampleRecommendations,
    theme: {
      mode: 'dark'
    },
    autoLayout: true,
    maxDisplayed: 6,
    showMatchScores: true,
    showFeatures: true
  },
  parameters: {
    backgrounds: { default: 'dark' }
  }
};

// Custom accent color
export const CustomAccentColor: Story = {
  args: {
    recommendations: sampleRecommendations,
    theme: {
      mode: 'light',
      accentColor: '#8b5cf6'
    },
    autoLayout: true,
    maxDisplayed: 6,
    showMatchScores: true,
    showFeatures: true
  }
};

// Empty state
export const EmptyState: Story = {
  args: {
    recommendations: [],
    autoLayout: true,
    maxDisplayed: 6,
    showMatchScores: true,
    showFeatures: true
  }
};

// Without match scores
export const WithoutMatchScores: Story = {
  args: {
    recommendations: sampleRecommendations,
    autoLayout: true,
    maxDisplayed: 6,
    showMatchScores: false,
    showFeatures: true
  }
};

// Limited display
export const LimitedDisplay: Story = {
  args: {
    recommendations: sampleRecommendations,
    autoLayout: true,
    maxDisplayed: 2,
    showMatchScores: true,
    showFeatures: true
  }
};
