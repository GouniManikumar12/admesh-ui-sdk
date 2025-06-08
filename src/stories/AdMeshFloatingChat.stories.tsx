import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { AdMeshFloatingChat } from '../components/AdMeshFloatingChat';
import type { AdMeshRecommendation, ChatMessage } from '../types';

const sampleRecommendations: AdMeshRecommendation[] = [
  {
    title: "HubSpot CRM",
    reason: "Perfect for remote teams with excellent collaboration features and robust automation",
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
    reason: "Enterprise-grade CRM with advanced analytics and customization options",
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
  }
];

const FloatingChatDemo = ({ args }: { args: Record<string, unknown> }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = async (message: string): Promise<ChatMessage> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    // Generate response based on message content
    let response = "I'd be happy to help you find the right solution! ";
    let recommendations: AdMeshRecommendation[] = [];

    if (message.toLowerCase().includes('crm') || message.toLowerCase().includes('sales')) {
      response = "Great choice! CRM systems are essential for managing customer relationships. Based on your needs, I've found some excellent options:";
      recommendations = sampleRecommendations;
    } else if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
      response = "Hello! I'm your AI assistant powered by AdMesh. I can help you discover amazing products and services. What are you looking for today?";
    } else if (message.toLowerCase().includes('project') || message.toLowerCase().includes('management')) {
      response = "Project management tools can really boost your team's productivity! Here are some top-rated options:";
      recommendations = [
        {
          ...sampleRecommendations[0],
          title: "Asana",
          reason: "Excellent for team collaboration with intuitive task management",
          intent_match_score: 0.89,
          ad_id: "asana-123",
          keywords: ["Project Management", "Team", "Tasks", "Collaboration"]
        }
      ];
    } else if (message.toLowerCase().includes('marketing') || message.toLowerCase().includes('email')) {
      response = "Marketing automation can save you tons of time! Check out these powerful platforms:";
      recommendations = [
        {
          ...sampleRecommendations[0],
          title: "Mailchimp",
          reason: "User-friendly email marketing with great automation features",
          intent_match_score: 0.91,
          ad_id: "mailchimp-456",
          keywords: ["Email Marketing", "Automation", "Analytics", "Templates"]
        }
      ];
    } else {
      response = "Let me search for some great recommendations based on your query. Here's what I found:";
      recommendations = sampleRecommendations.slice(0, 1);
    }

    return {
      id: `assistant-${Date.now()}`,
      role: 'assistant',
      content: response,
      timestamp: new Date(),
      recommendations: recommendations.length > 0 ? recommendations : undefined,
    };
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          AdMesh Floating Chat Demo
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          This demonstrates the floating chat widget that can be embedded on any website.
          The chat appears in the bottom-right corner and provides AI-powered product recommendations.
        </p>
        
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Your Website Content
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The floating chat widget appears on top of your existing content without interfering
            with your site's layout. Users can click the chat button to start a conversation
            and get personalized recommendations.
          </p>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isOpen ? 'Close' : 'Open'} Chat Widget
          </button>
        </div>
      </div>

      {/* AdMesh Floating Chat */}
      <AdMeshFloatingChat
        {...args}
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
        onSendMessage={handleSendMessage}
        onRecommendationClick={(adId: string, admeshLink: string) => {
          alert(`Clicked: ${adId}\nLink: ${admeshLink}`);
        }}
      />
    </div>
  );
};

const meta: Meta<typeof AdMeshFloatingChat> = {
  title: 'Chat/AdMeshFloatingChat',
  component: AdMeshFloatingChat,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Floating chat widget that can be embedded on any website to provide AI-powered product recommendations through a conversational interface. Features auto-positioning, responsive design, and customizable appearance.',
      },
    },
  },
  argTypes: {
    config: {
      control: 'object',
      description: 'Configuration object for chat behavior and appearance',
    },
    theme: {
      control: 'object',
      description: 'Theme configuration for styling',
    },
    title: {
      control: 'text',
      description: 'Chat widget title',
    },
    subtitle: {
      control: 'text',
      description: 'Chat widget subtitle',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <FloatingChatDemo args={args} />,
  args: {
    config: {
      position: 'bottom-right',
      size: 'md',
      displayMode: 'widget',
      autoOpen: false,
      showWelcomeMessage: true,
      welcomeMessage: "Hi! I'm your AI assistant. I can help you find the perfect products and services. What are you looking for today?",
      placeholder: "Ask me about products, tools, or services...",
      enableTypingIndicator: true,
      enableSuggestions: true,
      suggestions: [
        "I need a CRM for my sales team",
        "What's the best project management tool?",
        "Show me email marketing platforms"
      ]
    },
    theme: { mode: 'light' },
    title: 'AI Assistant',
    subtitle: 'Get personalized recommendations',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default floating chat widget positioned in the bottom-right corner with welcome message and suggestions.',
      },
    },
  },
};

export const BottomLeft: Story = {
  render: (args) => <FloatingChatDemo args={args} />,
  args: {
    config: {
      position: 'bottom-left',
      size: 'md',
      displayMode: 'widget',
      autoOpen: false,
      showWelcomeMessage: true,
      welcomeMessage: "Hello! I'm here to help you discover amazing products. What can I help you find?",
      enableTypingIndicator: true,
    },
    theme: { mode: 'light' },
    title: 'Product Finder',
    subtitle: 'AI-powered recommendations',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat widget positioned in the bottom-left corner, useful for left-to-right reading layouts.',
      },
    },
  },
};

export const LargeSize: Story = {
  render: (args) => <FloatingChatDemo args={args} />,
  args: {
    config: {
      position: 'bottom-right',
      size: 'lg',
      displayMode: 'widget',
      autoOpen: false,
      showWelcomeMessage: true,
      welcomeMessage: "Welcome to our AI-powered recommendation engine! I can help you find the perfect solutions for your business needs.",
      enableTypingIndicator: true,
      enableSuggestions: true,
      suggestions: [
        "I need business software recommendations",
        "What tools do you recommend for startups?",
        "Help me find productivity apps"
      ]
    },
    theme: { mode: 'light' },
    title: 'Business Assistant',
    subtitle: 'Find the right tools for your business',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large-sized chat widget with more space for detailed conversations and recommendations.',
      },
    },
  },
};

export const DarkTheme: Story = {
  render: (args) => <FloatingChatDemo args={args} />,
  args: {
    config: {
      position: 'bottom-right',
      size: 'md',
      displayMode: 'widget',
      autoOpen: false,
      showWelcomeMessage: true,
      welcomeMessage: "Hi there! I'm your AI shopping assistant. Let me help you find exactly what you're looking for.",
      enableTypingIndicator: true,
    },
    theme: { 
      mode: 'dark',
      accentColor: '#3b82f6'
    },
    title: 'Shopping Assistant',
    subtitle: 'Smart product recommendations',
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Dark theme variant with custom accent color, perfect for dark websites.',
      },
    },
  },
};

export const AutoOpen: Story = {
  render: (args) => <FloatingChatDemo args={args} />,
  args: {
    config: {
      position: 'bottom-right',
      size: 'md',
      displayMode: 'widget',
      autoOpen: true,
      showWelcomeMessage: true,
      welcomeMessage: "Welcome! I noticed you're browsing our site. Can I help you find something specific?",
      enableTypingIndicator: true,
      enableSuggestions: true,
      suggestions: [
        "Show me your best products",
        "I'm looking for recommendations",
        "Help me choose the right solution"
      ]
    },
    theme: { mode: 'light' },
    title: 'Help Center',
    subtitle: 'We\'re here to help!',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat widget that opens automatically when the page loads, useful for proactive customer engagement.',
      },
    },
  },
};

export const Compact: Story = {
  render: (args) => <FloatingChatDemo args={args} />,
  args: {
    config: {
      position: 'bottom-right',
      size: 'sm',
      displayMode: 'widget',
      autoOpen: false,
      showWelcomeMessage: true,
      welcomeMessage: "Hi! Quick question - what are you looking for?",
      enableTypingIndicator: true,
    },
    theme: { mode: 'light' },
    title: 'Quick Help',
    subtitle: 'Fast recommendations',
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact chat widget with smaller footprint, ideal for mobile or space-constrained layouts.',
      },
    },
  },
};
