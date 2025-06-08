import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AdMeshChatInterface } from '../components/AdMeshChatInterface';
import type { ChatMessage, AdMeshRecommendation } from '../types';

const sampleRecommendations: AdMeshRecommendation[] = [
  {
    title: "Slack",
    reason: "Perfect for team communication with excellent integration capabilities",
    intent_match_score: 0.94,
    admesh_link: "https://useadmesh.com/track?ad_id=slack-123",
    ad_id: "slack-123",
    product_id: "slack-team",
    has_free_tier: true,
    trial_days: 0,
    keywords: ["Communication", "Team", "Chat", "Integration"],
    categories: ["Communication", "Productivity"],
    features: ["Channels", "Direct Messages", "File Sharing", "App Integrations"],
    pricing: "Free tier available, paid plans from $7.25/user/month"
  },
  {
    title: "Microsoft Teams",
    reason: "Comprehensive collaboration platform with video conferencing and file sharing",
    intent_match_score: 0.89,
    admesh_link: "https://useadmesh.com/track?ad_id=teams-456",
    ad_id: "teams-456",
    product_id: "microsoft-teams",
    has_free_tier: true,
    trial_days: 30,
    keywords: ["Communication", "Video", "Collaboration", "Microsoft"],
    categories: ["Communication", "Video Conferencing"],
    features: ["Video Calls", "Screen Sharing", "File Collaboration", "Office Integration"],
    pricing: "Free tier available, paid plans from $4/user/month"
  }
];

const sampleMessages: ChatMessage[] = [
  {
    id: 'welcome',
    role: 'assistant',
    content: "Hello! I'm your AI assistant powered by AdMesh. I can help you discover amazing products and services tailored to your needs. What are you looking for today?",
    timestamp: new Date(Date.now() - 300000), // 5 minutes ago
  },
  {
    id: 'user-1',
    role: 'user',
    content: "I need a good team communication tool for my remote team",
    timestamp: new Date(Date.now() - 240000), // 4 minutes ago
  },
  {
    id: 'assistant-1',
    role: 'assistant',
    content: "Great question! For remote teams, communication is crucial. Based on your needs, I've found some excellent team communication tools that are perfect for remote work:",
    timestamp: new Date(Date.now() - 180000), // 3 minutes ago
    recommendations: sampleRecommendations,
  },
  {
    id: 'user-2',
    role: 'user',
    content: "These look good! What about pricing for small teams?",
    timestamp: new Date(Date.now() - 120000), // 2 minutes ago
  },
  {
    id: 'assistant-2',
    role: 'assistant',
    content: "Both options have great pricing for small teams! Slack offers a generous free tier that works well for teams up to 10,000 messages. Microsoft Teams also has a free version and integrates seamlessly if you're already using Office 365. Would you like me to find more budget-friendly alternatives?",
    timestamp: new Date(Date.now() - 60000), // 1 minute ago
  }
];

const ChatInterfaceDemo = ({ args }: { args: any }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(args.messages || []);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (messageContent: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: messageContent,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    // Generate response
    let response = "Thanks for your question! ";
    let recommendations: AdMeshRecommendation[] = [];

    if (messageContent.toLowerCase().includes('communication') || messageContent.toLowerCase().includes('team')) {
      response = "Excellent question! Team communication is crucial for remote work success. Here are the top-rated tools I recommend:";
      recommendations = sampleRecommendations;
    } else if (messageContent.toLowerCase().includes('price') || messageContent.toLowerCase().includes('cost')) {
      response = "Budget-conscious? Smart choice! Here are some cost-effective options that still deliver great value:";
      recommendations = sampleRecommendations.filter(r => r.has_free_tier);
    } else if (messageContent.toLowerCase().includes('crm') || messageContent.toLowerCase().includes('sales')) {
      response = "CRM systems are game-changers for sales teams! Based on your needs, here are my top picks:";
      recommendations = [
        {
          title: "HubSpot CRM",
          reason: "Perfect for growing businesses with excellent free tier and automation",
          intent_match_score: 0.94,
          admesh_link: "https://useadmesh.com/track?ad_id=hubspot-crm",
          ad_id: "hubspot-crm",
          product_id: "hubspot",
          has_free_tier: true,
          trial_days: 14,
          keywords: ["CRM", "Sales", "Marketing", "Free"],
          categories: ["Sales Tools"],
          features: ["Contact Management", "Deal Pipeline", "Email Integration"],
          pricing: "Free tier available"
        }
      ];
    } else {
      response = "Great question! Let me find some relevant recommendations for you:";
      recommendations = sampleRecommendations.slice(0, 1);
    }

    const assistantMessage: ChatMessage = {
      id: `assistant-${Date.now()}`,
      role: 'assistant',
      content: response,
      timestamp: new Date(),
      recommendations: recommendations.length > 0 ? recommendations : undefined,
    };

    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  return (
    <div className="h-screen bg-gray-100 dark:bg-slate-900 p-4">
      <div className="max-w-4xl mx-auto h-full">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg h-full overflow-hidden">
          <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <h1 className="text-xl font-semibold">AdMesh Chat Interface Demo</h1>
            <p className="text-blue-100 text-sm">Embedded chat interface for web applications</p>
          </div>
          
          <AdMeshChatInterface
            {...args}
            messages={messages}
            isLoading={isLoading}
            onSendMessage={handleSendMessage}
            onRecommendationClick={(adId: string, admeshLink: string) => {
              alert(`Clicked: ${adId}\nLink: ${admeshLink}`);
            }}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof AdMeshChatInterface> = {
  title: 'Chat/AdMeshChatInterface',
  component: AdMeshChatInterface,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Embeddable chat interface component for integrating conversational AI recommendations into web applications. Features message history, typing indicators, suggestions, and recommendation display.',
      },
    },
  },
  argTypes: {
    messages: {
      control: 'object',
      description: 'Array of chat messages to display',
    },
    config: {
      control: 'object',
      description: 'Configuration object for chat behavior',
    },
    theme: {
      control: 'object',
      description: 'Theme configuration for styling',
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether to show typing indicator',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ChatInterfaceDemo args={args} />,
  args: {
    messages: sampleMessages,
    config: {
      placeholder: "Ask me about products, tools, or services...",
      enableTypingIndicator: true,
      enableSuggestions: true,
      suggestions: [
        "I need team communication tools",
        "What's the best project management software?",
        "Show me marketing automation platforms"
      ]
    },
    theme: { mode: 'light' },
    isLoading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default chat interface with message history, recommendations, and input field.',
      },
    },
  },
};

export const EmptyState: Story = {
  render: (args) => <ChatInterfaceDemo args={args} />,
  args: {
    messages: [],
    config: {
      placeholder: "Start a conversation...",
      enableTypingIndicator: true,
      enableSuggestions: true,
      suggestions: [
        "Hello, I need help finding software",
        "What tools do you recommend for startups?",
        "I'm looking for productivity apps"
      ]
    },
    theme: { mode: 'light' },
    isLoading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty chat interface showing welcome state with suggestions.',
      },
    },
  },
};

export const WithTypingIndicator: Story = {
  render: (args) => <ChatInterfaceDemo args={args} />,
  args: {
    messages: [
      {
        id: 'user-1',
        role: 'user',
        content: "Can you recommend some good CRM software?",
        timestamp: new Date(),
      }
    ],
    config: {
      placeholder: "Type your message...",
      enableTypingIndicator: true,
    },
    theme: { mode: 'light' },
    isLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat interface showing typing indicator while AI is generating response.',
      },
    },
  },
};

export const DarkTheme: Story = {
  render: (args) => <ChatInterfaceDemo args={args} />,
  args: {
    messages: sampleMessages,
    config: {
      placeholder: "Ask me anything...",
      enableTypingIndicator: true,
      enableSuggestions: true,
      suggestions: [
        "I need business software",
        "What's trending in tech tools?",
        "Help me find the right solution"
      ]
    },
    theme: { 
      mode: 'dark',
      accentColor: '#3b82f6'
    },
    isLoading: false,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Dark theme variant with custom accent color.',
      },
    },
  },
};

export const LimitedMessages: Story = {
  render: (args) => <ChatInterfaceDemo args={args} />,
  args: {
    messages: sampleMessages,
    config: {
      placeholder: "Ask me about products...",
      maxMessages: 3,
      enableTypingIndicator: true,
    },
    theme: { mode: 'light' },
    isLoading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat interface with message limit, showing only the most recent 3 messages.',
      },
    },
  },
};

export const NoSuggestions: Story = {
  render: (args) => <ChatInterfaceDemo args={args} />,
  args: {
    messages: [],
    config: {
      placeholder: "How can I help you today?",
      enableTypingIndicator: true,
      enableSuggestions: false,
    },
    theme: { mode: 'light' },
    isLoading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal chat interface without suggestions, focusing on direct conversation.',
      },
    },
  },
};

export const CustomPlaceholder: Story = {
  render: (args) => <ChatInterfaceDemo args={args} />,
  args: {
    messages: [],
    config: {
      placeholder: "Describe what you're looking for and I'll find the perfect match...",
      enableTypingIndicator: true,
      enableSuggestions: true,
      suggestions: [
        "I need e-commerce platform recommendations",
        "What's the best email marketing tool?",
        "Help me find accounting software"
      ]
    },
    theme: { mode: 'light' },
    isLoading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat interface with custom placeholder text and specialized suggestions.',
      },
    },
  },
};
