import React, { useState } from 'react';
import { AdMeshFloatingChat, AdMeshChatInterface } from 'admesh-ui-sdk';

// Rich sample recommendations for different categories
const crmRecommendations = [
  {
    title: "HubSpot CRM",
    reason: "Perfect for growing businesses with excellent free tier, powerful automation, and seamless integrations",
    intent_match_score: 0.94,
    admesh_link: "https://useadmesh.com/track?ad_id=hubspot-crm-123",
    ad_id: "hubspot-crm-123",
    product_id: "hubspot-crm",
    has_free_tier: true,
    trial_days: 14,
    keywords: ["CRM", "Sales", "Marketing", "Free", "Automation"],
    categories: ["Sales Tools", "CRM"],
    features: ["Contact Management", "Deal Pipeline", "Email Integration", "Reporting"],
    pricing: "Free tier available, paid plans from $45/month"
  },
  {
    title: "Salesforce Sales Cloud",
    reason: "Enterprise-grade CRM with advanced analytics, customization, and AI-powered insights",
    intent_match_score: 0.89,
    admesh_link: "https://useadmesh.com/track?ad_id=salesforce-456",
    ad_id: "salesforce-456",
    product_id: "salesforce-sales",
    has_free_tier: false,
    trial_days: 30,
    keywords: ["CRM", "Enterprise", "Analytics", "AI", "Customization"],
    categories: ["Sales Tools", "Enterprise Software"],
    features: ["Advanced Analytics", "Custom Objects", "AI Einstein", "Mobile App"],
    pricing: "Starting from $25/user/month"
  }
];

const projectManagementRecommendations = [
  {
    title: "Asana",
    reason: "Intuitive project management with excellent team collaboration features and flexible project views",
    intent_match_score: 0.91,
    admesh_link: "https://useadmesh.com/track?ad_id=asana-789",
    ad_id: "asana-789",
    product_id: "asana",
    has_free_tier: true,
    trial_days: 0,
    keywords: ["Project Management", "Team", "Tasks", "Collaboration", "Timeline"],
    categories: ["Project Management", "Productivity"],
    features: ["Task Management", "Timeline View", "Team Collaboration", "Custom Fields"],
    pricing: "Free for teams up to 15 members, paid plans from $10.99/user/month"
  },
  {
    title: "Monday.com",
    reason: "Visual project management platform with customizable workflows and powerful automation",
    intent_match_score: 0.87,
    admesh_link: "https://useadmesh.com/track?ad_id=monday-101",
    ad_id: "monday-101",
    product_id: "monday",
    has_free_tier: true,
    trial_days: 14,
    keywords: ["Project Management", "Visual", "Automation", "Workflows", "Customizable"],
    categories: ["Project Management", "Team Collaboration"],
    features: ["Visual Boards", "Automation", "Time Tracking", "Integrations"],
    pricing: "Free for up to 2 users, paid plans from $8/user/month"
  }
];

const marketingRecommendations = [
  {
    title: "Mailchimp",
    reason: "User-friendly email marketing platform with great automation, templates, and analytics",
    intent_match_score: 0.92,
    admesh_link: "https://useadmesh.com/track?ad_id=mailchimp-202",
    ad_id: "mailchimp-202",
    product_id: "mailchimp",
    has_free_tier: true,
    trial_days: 0,
    keywords: ["Email Marketing", "Automation", "Templates", "Analytics", "Easy"],
    categories: ["Marketing", "Email"],
    features: ["Email Templates", "Automation", "A/B Testing", "Analytics"],
    pricing: "Free up to 2,000 contacts, paid plans from $10/month"
  },
  {
    title: "ConvertKit",
    reason: "Creator-focused email marketing with powerful automation, landing pages, and subscriber management",
    intent_match_score: 0.88,
    admesh_link: "https://useadmesh.com/track?ad_id=convertkit-303",
    ad_id: "convertkit-303",
    product_id: "convertkit",
    has_free_tier: true,
    trial_days: 14,
    keywords: ["Email Marketing", "Creators", "Automation", "Landing Pages", "Subscribers"],
    categories: ["Marketing", "Creator Tools"],
    features: ["Visual Automations", "Landing Pages", "Forms", "Tagging"],
    pricing: "Free up to 1,000 subscribers, paid plans from $29/month"
  }
];

// AI response generator with rich recommendations
const generateAIResponse = async (userMessage) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1500));

  const message = userMessage.toLowerCase();
  let response = "";
  let recommendations = [];

  if (message.includes('crm') || message.includes('sales') || message.includes('customer')) {
    response = "Excellent! CRM systems are game-changers for sales teams. I've found some outstanding options that will help you manage customers and boost sales:";
    recommendations = crmRecommendations;
  } else if (message.includes('project') || message.includes('management') || message.includes('task')) {
    response = "Great choice! Project management tools can dramatically improve your team's productivity and organization. Here are the top-rated platforms:";
    recommendations = projectManagementRecommendations;
  } else if (message.includes('marketing') || message.includes('email') || message.includes('newsletter')) {
    response = "Smart thinking! Email marketing has the highest ROI of any marketing channel. These platforms will help you connect with your audience effectively:";
    recommendations = marketingRecommendations;
  } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    response = "Hello! 👋 I'm your AI assistant powered by AdMesh. I specialize in finding the perfect software and tools for your business needs. What can I help you discover today?";
  } else if (message.includes('help') || message.includes('recommend') || message.includes('suggest')) {
    response = "I'd love to help! I can recommend software and tools for various business needs. Here are some popular categories I can assist with:";
    // Show a sample from each category
    recommendations = [crmRecommendations[0], projectManagementRecommendations[0], marketingRecommendations[0]];
  } else {
    response = "That's an interesting question! Let me search for some relevant tools and solutions that might help you:";
    recommendations = crmRecommendations.slice(0, 1);
  }

  return {
    id: `assistant-${Date.now()}`,
    role: 'assistant',
    content: response,
    timestamp: new Date(),
    recommendations: recommendations.length > 0 ? recommendations : undefined,
  };
};

export default function ChatWithRecommendationsDemo() {
  const [activeDemo, setActiveDemo] = useState('floating');
  const [floatingChatOpen, setFloatingChatOpen] = useState(false);
  const [embeddedMessages, setEmbeddedMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Welcome! I'm here to help you discover amazing software and tools. Try asking me about CRM systems, project management tools, or email marketing platforms!",
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFloatingChatMessage = async (message) => {
    return await generateAIResponse(message);
  };

  const handleEmbeddedChatMessage = async (messageContent) => {
    // Add user message
    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: messageContent,
      timestamp: new Date(),
    };

    setEmbeddedMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Get AI response with recommendations
      const assistantMessage = await generateAIResponse(messageContent);
      setEmbeddedMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecommendationClick = (adId, admeshLink) => {
    console.log('Recommendation clicked:', { adId, admeshLink });
    alert(`🎉 Opening recommendation: ${adId}\n\nThis would normally open the tracked link:\n${admeshLink}`);
  };

  const theme = {
    mode: 'light',
    accentColor: '#3b82f6'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AdMesh Chat with Recommendations Demo
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            See how AI-powered product recommendations work in chat interfaces
          </p>
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-6">
            <p className="text-yellow-800 font-medium">
              💡 Try asking about: "CRM systems", "project management tools", or "email marketing platforms"
            </p>
          </div>
        </div>

        {/* Demo Controls */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Interactive Demo</h2>
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveDemo('floating')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeDemo === 'floating'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Floating Chat Widget
            </button>
            <button
              onClick={() => setActiveDemo('embedded')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeDemo === 'embedded'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Embedded Chat Interface
            </button>
          </div>

          {/* Demo Content */}
          {activeDemo === 'floating' && (
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-900">Floating Chat Widget</h3>
              <p className="text-gray-600">
                The floating chat widget appears in the corner of your website. Click the button below to open it,
                then try asking about different types of software to see recommendations in action!
              </p>
              <button
                onClick={() => setFloatingChatOpen(!floatingChatOpen)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                {floatingChatOpen ? 'Close' : 'Open'} Floating Chat
              </button>
            </div>
          )}

          {activeDemo === 'embedded' && (
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-900">Embedded Chat Interface</h3>
              <p className="text-gray-600">
                This embedded chat interface shows how recommendations appear within the conversation.
                Try the suggested prompts or ask your own questions!
              </p>
              <div className="bg-gray-50 rounded-lg p-4 h-96 border">
                <AdMeshChatInterface
                  messages={embeddedMessages}
                  config={{
                    placeholder: "Ask me about CRM, project management, or marketing tools...",
                    enableTypingIndicator: true,
                    enableSuggestions: true,
                    suggestions: [
                      "I need a CRM for my sales team",
                      "What's the best project management tool?",
                      "Show me email marketing platforms",
                      "Help me find business software"
                    ]
                  }}
                  theme={theme}
                  isLoading={isLoading}
                  onSendMessage={handleEmbeddedChatMessage}
                  onRecommendationClick={handleRecommendationClick}
                  className="h-full"
                />
              </div>
            </div>
          )}
        </div>

        {/* Features Highlight */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">What You'll See</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Recommendations</h3>
              <p className="text-sm text-gray-600">Smart product suggestions based on your conversation context</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0v10a2 2 0 002 2h10a2 2 0 002-2V8" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Rich Product Cards</h3>
              <p className="text-sm text-gray-600">Detailed information with features, pricing, and trial options</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Click Tracking</h3>
              <p className="text-sm text-gray-600">Built-in analytics to track user engagement and conversions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Widget */}
      {activeDemo === 'floating' && (
        <AdMeshFloatingChat
          config={{
            position: 'bottom-right',
            size: 'md',
            displayMode: 'widget',
            autoOpen: false,
            showWelcomeMessage: true,
            welcomeMessage: "Hi! I'm your AI assistant. I can help you find amazing software and tools. Try asking me about CRM systems, project management tools, or email marketing platforms!",
            placeholder: "Ask me about business software...",
            enableTypingIndicator: true,
            enableSuggestions: true,
            suggestions: [
              "I need a CRM for my sales team",
              "What's the best project management tool?",
              "Show me email marketing platforms",
              "Help me find business software"
            ]
          }}
          theme={theme}
          title="AI Assistant"
          subtitle="Get personalized software recommendations"
          isOpen={floatingChatOpen}
          onToggle={() => setFloatingChatOpen(!floatingChatOpen)}
          onSendMessage={handleFloatingChatMessage}
          onRecommendationClick={handleRecommendationClick}
        />
      )}
    </div>
  );
}
