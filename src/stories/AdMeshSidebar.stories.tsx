import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { AdMeshSidebar } from '../components/AdMeshSidebar';
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
  },
  {
    title: "Airtable",
    reason: "Flexible database platform that works great as a CRM for creative teams and small businesses",
    intent_match_score: 0.72,
    admesh_link: "https://useadmesh.com/track?ad_id=airtable-303",
    ad_id: "airtable-303",
    product_id: "airtable-crm",
    has_free_tier: true,
    trial_days: 0,
    keywords: ["Database", "CRM", "Flexible", "Creative"],
    categories: ["Database", "CRM"],
    features: ["Custom Views", "Automation", "Integrations"],
    pricing: "Free tier available, paid plans from $10/user/month"
  }
];

const SidebarDemo = ({ args }: { args: Record<string, unknown> }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative h-screen bg-gray-100 dark:bg-slate-900">
      {/* Main Content */}
      <div className={`transition-all duration-300 ${isOpen ? 'ml-80' : 'ml-0'}`}>
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              AdMesh Sidebar Demo
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              This demonstrates how the AdMesh sidebar integrates with your application content.
              The sidebar shows AI-powered product recommendations in a persistent side panel.
            </p>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Your Application Content
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The sidebar appears alongside your main content, providing contextual recommendations
                without interrupting the user's workflow.
              </p>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {isOpen ? 'Hide' : 'Show'} Sidebar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* AdMesh Sidebar */}
      <AdMeshSidebar
        {...args}
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
        onRecommendationClick={(adId: string, admeshLink: string) => {
          alert(`Clicked: ${adId}\nLink: ${admeshLink}`);
        }}
      />
    </div>
  );
};

const meta: Meta<typeof AdMeshSidebar> = {
  title: 'Sidebar/AdMeshSidebar',
  component: AdMeshSidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Persistent sidebar component for displaying AI-powered product recommendations alongside your main application content. Features search, filtering, multiple display modes, and responsive design.',
      },
    },
  },
  argTypes: {
    config: {
      control: 'object',
      description: 'Configuration object for sidebar behavior and appearance',
    },
    theme: {
      control: 'object',
      description: 'Theme configuration for styling',
    },
    title: {
      control: 'text',
      description: 'Sidebar title text',
    },
    isOpen: {
      control: 'boolean',
      description: 'Whether the sidebar is open',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SidebarDemo args={args} />,
  args: {
    recommendations: sampleRecommendations,
    config: {
      position: 'left',
      size: 'md',
      displayMode: 'recommendations',
      collapsible: true,
      defaultCollapsed: false,
      showHeader: true,
      showSearch: true,
      showFilters: true,
      maxRecommendations: 10,
    },
    theme: { mode: 'light' },
    title: 'Recommendations',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default sidebar configuration with search, collapsible header, and recommendation display mode.',
      },
    },
  },
};

export const RightSidebar: Story = {
  render: (args) => <SidebarDemo args={args} />,
  args: {
    recommendations: sampleRecommendations,
    config: {
      position: 'right',
      size: 'md',
      displayMode: 'recommendations',
      collapsible: true,
      defaultCollapsed: false,
      showHeader: true,
      showSearch: true,
      maxRecommendations: 8,
    },
    theme: { mode: 'light' },
    title: 'AI Recommendations',
  },
  parameters: {
    docs: {
      description: {
        story: 'Right-positioned sidebar for applications that prefer recommendations on the right side.',
      },
    },
  },
};

export const CompactSidebar: Story = {
  render: (args) => <SidebarDemo args={args} />,
  args: {
    recommendations: sampleRecommendations,
    config: {
      position: 'left',
      size: 'sm',
      displayMode: 'recommendations',
      collapsible: true,
      defaultCollapsed: false,
      showHeader: true,
      showSearch: false,
      maxRecommendations: 5,
    },
    theme: { mode: 'light' },
    title: 'Picks',
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact sidebar with smaller width, no search, and fewer recommendations for minimal interfaces.',
      },
    },
  },
};

export const MixedDisplayMode: Story = {
  render: (args) => <SidebarDemo args={args} />,
  args: {
    recommendations: sampleRecommendations,
    config: {
      position: 'left',
      size: 'lg',
      displayMode: 'mixed',
      collapsible: true,
      defaultCollapsed: false,
      showHeader: true,
      showSearch: true,
      maxRecommendations: 6,
    },
    theme: { mode: 'light' },
    title: 'Smart Recommendations',
  },
  parameters: {
    docs: {
      description: {
        story: 'Mixed display mode showing the top recommendation as a card and others as inline items.',
      },
    },
  },
};

export const DarkTheme: Story = {
  render: (args) => <SidebarDemo args={args} />,
  args: {
    recommendations: sampleRecommendations,
    config: {
      position: 'left',
      size: 'md',
      displayMode: 'recommendations',
      collapsible: true,
      defaultCollapsed: false,
      showHeader: true,
      showSearch: true,
      maxRecommendations: 8,
    },
    theme: { 
      mode: 'dark',
      accentColor: '#3b82f6'
    },
    title: 'Recommendations',
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Dark theme variant with custom accent color for dark mode applications.',
      },
    },
  },
};

export const CollapsedByDefault: Story = {
  render: (args) => <SidebarDemo args={args} />,
  args: {
    recommendations: sampleRecommendations,
    config: {
      position: 'left',
      size: 'md',
      displayMode: 'recommendations',
      collapsible: true,
      defaultCollapsed: true,
      showHeader: true,
      showSearch: true,
      maxRecommendations: 10,
    },
    theme: { mode: 'light' },
    title: 'Recommendations',
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar that starts in collapsed state, showing only a thin strip with expand button.',
      },
    },
  },
};

export const ExtraLarge: Story = {
  render: (args) => <SidebarDemo args={args} />,
  args: {
    recommendations: sampleRecommendations,
    config: {
      position: 'left',
      size: 'xl',
      displayMode: 'mixed',
      collapsible: true,
      defaultCollapsed: false,
      showHeader: true,
      showSearch: true,
      showFilters: true,
      maxRecommendations: 12,
    },
    theme: { mode: 'light' },
    title: 'AdMesh Recommendations',
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra large sidebar with maximum width, perfect for detailed recommendation displays.',
      },
    },
  },
};
