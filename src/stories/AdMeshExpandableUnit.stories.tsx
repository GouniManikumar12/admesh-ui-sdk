import type { Meta, StoryObj } from '@storybook/react';
import { AdMeshExpandableUnit } from '../components/AdMeshExpandableUnit';
import type { AdMeshRecommendation } from '../types';

// Sample recommendation data
const sampleRecommendation: AdMeshRecommendation = {
  title: "Temporal",
  reason: "Temporal provides durable execution for AI applications with reliable workflow orchestration.",
  intent_match_score: 0.92,
  admesh_link: "https://useadmesh.com/r/temporal-ai-workflows",
  ad_id: "temporal_001",
  product_id: "temporal_platform",
  url: "https://temporal.io/Agentic/AI",
  description: "Build invincible apps with durable execution for AI applications. Temporal is the orchestrator for AI applications.",
  pricing: "Free tier available, Enterprise plans from $200/month",
  trial_days: 30,
  categories: ["AI Infrastructure", "Workflow Orchestration", "Developer Tools"],
  features: ["Durable Execution", "Workflow Orchestration", "AI Application Support", "Fault Tolerance"],
  is_ai_powered: true,
  audience_segment: "AI Developers"
};

const meta: Meta<typeof AdMeshExpandableUnit> = {
  title: 'Expandable Unit/AdMesh Expandable Unit',
  component: AdMeshExpandableUnit,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive expandable ad unit similar to the Temporal ad format, featuring multiple sections, expandable content, and a prominent call-to-action button.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'object',
      description: 'Theme configuration for the ad unit'
    },
    initialExpanded: {
      control: 'boolean',
      description: 'Whether the ad unit starts in expanded state'
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether the ad unit can be collapsed/expanded'
    },
    showPoweredBy: {
      control: 'boolean',
      description: 'Show "powered by AdMesh" branding'
    },
    ctaText: {
      control: 'text',
      description: 'Custom call-to-action button text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story - collapsed to show button on right
export const Default: Story = {
  args: {
    recommendation: sampleRecommendation,
    theme: { mode: 'light' },
    initialExpanded: false,
    collapsible: true,
    showPoweredBy: true,
    ctaText: 'Register'
  }
};

// Dark theme
export const DarkTheme: Story = {
  args: {
    recommendation: sampleRecommendation,
    theme: { mode: 'dark', accentColor: '#3b82f6' },
    initialExpanded: true,
    collapsible: true,
    showPoweredBy: true,
    ctaText: 'Get Started'
  },
  parameters: {
    backgrounds: { default: 'dark' }
  }
};

// Expanded state
export const Expanded: Story = {
  args: {
    recommendation: sampleRecommendation,
    theme: { mode: 'light' },
    initialExpanded: true,
    collapsible: true,
    showPoweredBy: true,
    ctaText: 'Learn More'
  }
};

// Collapsed state with button on right
export const CollapsedWithButtonRight: Story = {
  args: {
    recommendation: sampleRecommendation,
    theme: { mode: 'light' },
    initialExpanded: false,
    collapsible: true,
    showPoweredBy: true,
    ctaText: 'Register'
  },
  parameters: {
    docs: {
      description: {
        story: 'When collapsed, the CTA button appears on the right side of the header, similar to the Temporal ad format.'
      }
    }
  }
};

// Custom sections
export const CustomSections: Story = {
  args: {
    recommendation: {
      ...sampleRecommendation,
      title: "Stripe",
      description: "Complete payments platform for businesses of all sizes"
    },
    theme: { mode: 'light', accentColor: '#635bff' },
    initialExpanded: true,
    collapsible: true,
    showPoweredBy: true,
    ctaText: 'Start Free',
    sections: [
      {
        title: 'API Documentation',
        description: 'Comprehensive API docs and guides to get you started with Stripe payments.',
        icon: '📖'
      },
      {
        title: 'Talk to Sales',
        description: 'Ready to scale your business? Connect with our sales team for custom solutions.',
        icon: '💼'
      },
      {
        title: 'Payment Solutions',
        description: 'Accept payments online, in person, and around the world with a single integration.',
        icon: '💳'
      },
      {
        title: 'Developer Tools',
        description: 'Build and test your integration with our developer-friendly tools and SDKs.',
        icon: '🛠️'
      }
    ]
  }
};

// Non-collapsible
export const NonCollapsible: Story = {
  args: {
    recommendation: sampleRecommendation,
    theme: { mode: 'light', accentColor: '#10b981' },
    initialExpanded: true,
    collapsible: false,
    showPoweredBy: false,
    ctaText: 'Try Free'
  }
};

// Custom accent color
export const CustomAccentColor: Story = {
  args: {
    recommendation: {
      ...sampleRecommendation,
      title: "Vercel",
      description: "The platform for frontend developers, providing the speed and reliability innovators need."
    },
    theme: { 
      mode: 'light', 
      accentColor: '#000000',
      borderRadius: '16px'
    },
    initialExpanded: true,
    collapsible: true,
    showPoweredBy: true,
    ctaText: 'Deploy Now'
  }
};

// Minimal sections
export const MinimalSections: Story = {
  args: {
    recommendation: {
      ...sampleRecommendation,
      title: "OpenAI",
      description: "AI models and tools for developers and businesses"
    },
    theme: { mode: 'light', accentColor: '#10a37f' },
    initialExpanded: true,
    collapsible: true,
    showPoweredBy: true,
    ctaText: 'Get API Key',
    sections: [
      {
        title: 'API Access',
        description: 'Get started with OpenAI API for your applications.',
        icon: '🔑'
      },
      {
        title: 'Documentation',
        description: 'Learn how to integrate OpenAI models into your projects.',
        icon: '📚'
      }
    ]
  }
};
