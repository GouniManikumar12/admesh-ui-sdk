import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { AdMeshAutoRecommendationWidget } from '../components/AdMeshAutoRecommendationWidget';
import type { AdMeshRecommendation } from '../types';

const sampleRecommendations: AdMeshRecommendation[] = [
  {
    title: "HubSpot CRM",
    reason: "Perfect for growing businesses with excellent free tier and automation",
    intent_match_score: 0.94,
    admesh_link: "https://useadmesh.com/track?ad_id=hubspot-crm",
    ad_id: "hubspot-crm",
    product_id: "hubspot",
    has_free_tier: true,
    trial_days: 14,
    keywords: ["CRM", "Sales", "Free"],
    categories: ["Sales Tools"],
    features: ["Contact Management", "Deal Pipeline", "Email Integration"],
    pricing: "Free tier available"
  },
  {
    title: "Salesforce Sales Cloud",
    reason: "Enterprise-grade CRM with advanced analytics and AI features",
    intent_match_score: 0.89,
    admesh_link: "https://useadmesh.com/track?ad_id=salesforce-sales",
    ad_id: "salesforce-sales",
    product_id: "salesforce",
    has_free_tier: false,
    trial_days: 30,
    keywords: ["CRM", "Enterprise", "AI"],
    categories: ["Sales Tools", "Enterprise"],
    features: ["Advanced Analytics", "AI Einstein", "Custom Objects"],
    pricing: "Starting from $25/user/month"
  }
];

const AutoWidgetDemo = ({ args }: { args: Record<string, unknown> }) => {
  const [showWidget, setShowWidget] = useState(false);
  const [currentTrigger, setCurrentTrigger] = useState('');

  const triggerRecommendations = (trigger: string) => {
    setCurrentTrigger(trigger);
    setShowWidget(true);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Auto-Recommendation Widget Demo
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          This widget automatically appears when your AI application detects relevant queries.
          Perfect for integrating with ChatGPT, Claude, or any AI assistant.
        </p>
        
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Simulate AI Application Integration
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Click any button to simulate a user query in your AI application. 
            The widget will automatically appear with relevant recommendations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => triggerRecommendations("I need a CRM for my sales team")}
              className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              "I need a CRM system"
            </button>
            <button
              onClick={() => triggerRecommendations("What's the best project management tool?")}
              className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              "Project management tool"
            </button>
            <button
              onClick={() => triggerRecommendations("Help me find business software")}
              className="px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              "Business software help"
            </button>
          </div>

          {showWidget && (
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-green-800 dark:text-green-200 font-medium">
                ✅ Widget triggered! Check the bottom-right corner.
              </p>
              <p className="text-green-600 dark:text-green-300 text-sm mt-1">
                Query: "{currentTrigger}"
              </p>
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Integration Benefits
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>• Automatically appears when relevant queries are detected</li>
            <li>• No user input required - purely AI-driven recommendations</li>
            <li>• Contextual recommendations based on conversation content</li>
            <li>• Non-intrusive design that doesn't interrupt user workflow</li>
            <li>• Built-in tracking and analytics for recommendation performance</li>
            <li>• Easy integration with any AI application or chatbot</li>
          </ul>
        </div>
      </div>

      {/* Auto-Recommendation Widget */}
      {showWidget && (
        <AdMeshAutoRecommendationWidget
          {...args}
          recommendations={sampleRecommendations}
          trigger={currentTrigger}
          onRecommendationClick={(adId: string, admeshLink: string) => {
            alert(`Clicked: ${adId}\nLink: ${admeshLink}`);
          }}
          onDismiss={() => setShowWidget(false)}
        />
      )}
    </div>
  );
};

const meta: Meta<typeof AdMeshAutoRecommendationWidget> = {
  title: 'Chat/AdMeshAutoRecommendationWidget',
  component: AdMeshAutoRecommendationWidget,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Auto-recommendation widget that appears automatically when AI applications detect relevant queries. Perfect for integrating with ChatGPT, Claude, or any AI assistant to show contextual product recommendations.',
      },
    },
  },
  argTypes: {
    recommendations: {
      control: 'object',
      description: 'Array of recommendations to display',
    },
    trigger: {
      control: 'text',
      description: 'The query or context that triggered the recommendations',
    },
    position: {
      control: 'select',
      options: ['bottom-right', 'bottom-left', 'top-right', 'top-left'],
      description: 'Widget position on screen',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Widget size',
    },
    theme: {
      control: 'object',
      description: 'Theme configuration',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <AutoWidgetDemo args={args} />,
  args: {
    title: 'AI Recommendations',
    position: 'bottom-right',
    size: 'md',
    autoShow: true,
    showDelay: 1000,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Default auto-recommendation widget that appears automatically when triggered by AI queries.',
      },
    },
  },
};

export const BottomLeft: Story = {
  render: (args) => <AutoWidgetDemo args={args} />,
  args: {
    title: 'Smart Suggestions',
    position: 'bottom-left',
    size: 'md',
    autoShow: true,
    showDelay: 500,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Widget positioned in bottom-left corner with faster appearance.',
      },
    },
  },
};

export const LargeSize: Story = {
  render: (args) => <AutoWidgetDemo args={args} />,
  args: {
    title: 'Product Recommendations',
    position: 'bottom-right',
    size: 'lg',
    autoShow: true,
    showDelay: 800,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Large-sized widget with more space for detailed recommendations.',
      },
    },
  },
};

export const DarkTheme: Story = {
  render: (args) => <AutoWidgetDemo args={args} />,
  args: {
    title: 'AI Recommendations',
    position: 'bottom-right',
    size: 'md',
    autoShow: true,
    showDelay: 1000,
    theme: { 
      mode: 'dark',
      accentColor: '#3b82f6'
    },
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Dark theme variant perfect for dark-mode applications.',
      },
    },
  },
};

export const FastAppearance: Story = {
  render: (args) => <AutoWidgetDemo args={args} />,
  args: {
    title: 'Quick Suggestions',
    position: 'top-right',
    size: 'sm',
    autoShow: true,
    showDelay: 200,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Fast-appearing widget with minimal delay, positioned in top-right corner.',
      },
    },
  },
};

export const CustomTrigger: Story = {
  render: (args) => <AutoWidgetDemo args={args} />,
  args: {
    title: 'Context-Aware Recommendations',
    position: 'bottom-right',
    size: 'md',
    autoShow: true,
    showDelay: 1000,
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Widget showing how trigger context is displayed to users, helping them understand why recommendations appeared.',
      },
    },
  },
};
