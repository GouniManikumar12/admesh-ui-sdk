import React, { useState } from 'react';
import { AdMeshFloatingChat, AdMeshChatInterface } from 'admesh-ui-sdk';

// Sample recommendations data
const sampleRecommendations = [
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

// Simulate AI response generation
const generateAIResponse = async (userMessage) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

  let response = "Thanks for your question! ";
  let recommendations = [];

  // Simple keyword matching for demo
  const message = userMessage.toLowerCase();
  
  if (message.includes('crm') || message.includes('sales')) {
    response = "Perfect! CRM systems are essential for sales success. Based on your requirements, here are my top recommendations:";
    recommendations = sampleRecommendations;
  } else if (message.includes('hello') || message.includes('hi')) {
    response = "Hello! I'm your AI assistant powered by AdMesh. I can help you discover amazing products and services. What are you looking for today?";
  } else if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
    response = "Smart to consider budget! Here are some excellent cost-effective options:";
    recommendations = sampleRecommendations.filter(r => r.has_free_tier);
  } else if (message.includes('project') || message.includes('management')) {
    response = "Project management tools can transform your workflow! Here are the best options:";
    recommendations = [
      {
        title: "Notion",
        reason: "All-in-one workspace perfect for project management and team collaboration",
        intent_match_score: 0.88,
        admesh_link: "https://useadmesh.com/track?ad_id=notion-123",
        ad_id: "notion-123",
        product_id: "notion",
        has_free_tier: true,
        trial_days: 0,
        keywords: ["Project Management", "Notes", "Database", "Collaboration"],
        categories: ["Productivity", "Project Management"],
        features: ["Templates", "Databases", "Team Collaboration", "API"],
        pricing: "Free for personal use, team plans from $8/user/month"
      }
    ];
  } else if (message.includes('marketing') || message.includes('email')) {
    response = "Marketing automation is a game-changer! Check out these powerful platforms:";
    recommendations = [
      {
        title: "ConvertKit",
        reason: "Creator-focused email marketing with powerful automation and landing pages",
        intent_match_score: 0.90,
        admesh_link: "https://useadmesh.com/track?ad_id=convertkit-456",
        ad_id: "convertkit-456",
        product_id: "convertkit",
        has_free_tier: true,
        trial_days: 14,
        keywords: ["Email Marketing", "Automation", "Landing Pages", "Creators"],
        categories: ["Marketing", "Email"],
        features: ["Visual Automations", "Landing Pages", "Forms", "Analytics"],
        pricing: "Free up to 1,000 subscribers, paid plans from $29/month"
      }
    ];
  } else {
    response = "Great question! Let me find some personalized recommendations for you:";
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

export default function ChatUsageExample() {
  const [activeDemo, setActiveDemo] = useState('floating');
  const [floatingChatOpen, setFloatingChatOpen] = useState(false);
  const [embeddedMessages, setEmbeddedMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Welcome! I'm here to help you find the perfect products and services. What can I help you with today?",
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
      // Get AI response
      const assistantMessage = await generateAIResponse(messageContent);
      setEmbeddedMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setEmbeddedMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecommendationClick = (adId, admeshLink) => {
    console.log('Recommendation clicked:', { adId, admeshLink });
    // In a real app, this would track the click and open the link
    alert(`Opening recommendation: ${adId}\nTracked link: ${admeshLink}`);
  };

  const theme = {
    mode: 'light',
    accentColor: '#3b82f6'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            AdMesh Chat Components
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Integrate AI-powered product recommendations into your chat interfaces
          </p>
        </div>

        {/* Demo Controls */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Interactive Demo</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveDemo('floating')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeDemo === 'floating'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Floating Chat Widget
            </button>
            <button
              onClick={() => setActiveDemo('embedded')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
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
              <h3 className="text-lg font-medium text-gray-900">Floating Chat Widget</h3>
              <p className="text-gray-600">
                The floating chat widget appears as a button in the corner of your website.
                Users can click it to start a conversation and get personalized recommendations.
              </p>
              <button
                onClick={() => setFloatingChatOpen(!floatingChatOpen)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {floatingChatOpen ? 'Close' : 'Open'} Floating Chat
              </button>
            </div>
          )}

          {activeDemo === 'embedded' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Embedded Chat Interface</h3>
              <p className="text-gray-600">
                The embedded chat interface can be integrated directly into your application
                as a dedicated chat page or section.
              </p>
              <div className="bg-gray-100 rounded-lg p-4 h-96">
                <AdMeshChatInterface
                  messages={embeddedMessages}
                  config={{
                    placeholder: "Ask me about products, tools, or services...",
                    enableTypingIndicator: true,
                    enableSuggestions: true,
                    suggestions: [
                      "I need a CRM for my team",
                      "What's the best project management tool?",
                      "Show me marketing automation platforms"
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

        {/* Integration Examples */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Integration Examples</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Floating Chat Widget</h3>
              <pre className="bg-gray-100 rounded p-3 text-sm overflow-x-auto">
{`import { AdMeshFloatingChat } from 'admesh-ui-sdk';

<AdMeshFloatingChat
  config={{
    position: 'bottom-right',
    size: 'md',
    autoOpen: false,
    showWelcomeMessage: true,
    welcomeMessage: "Hi! How can I help you today?",
    enableSuggestions: true,
    suggestions: ["I need software recommendations"]
  }}
  theme={{ mode: 'light' }}
  title="AI Assistant"
  onSendMessage={async (message) => {
    // Call your AI API here
    const response = await getAIResponse(message);
    return response;
  }}
  onRecommendationClick={(adId, link) => {
    window.open(link, '_blank');
  }}
/>`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Embedded Chat Interface</h3>
              <pre className="bg-gray-100 rounded p-3 text-sm overflow-x-auto">
{`import { AdMeshChatInterface } from 'admesh-ui-sdk';

<AdMeshChatInterface
  messages={chatMessages}
  config={{
    placeholder: "Ask me anything...",
    enableTypingIndicator: true,
    maxMessages: 50
  }}
  theme={{ mode: 'light' }}
  isLoading={isAIResponding}
  onSendMessage={(message) => {
    handleUserMessage(message);
  }}
  onRecommendationClick={(adId, link) => {
    trackClick(adId);
    window.open(link, '_blank');
  }}
/>`}
              </pre>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Floating Chat Widget</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Customizable positioning (4 corners)</li>
                <li>• Multiple sizes (sm, md, lg, xl)</li>
                <li>• Auto-open functionality</li>
                <li>• Welcome messages</li>
                <li>• Notification indicators</li>
                <li>• Mobile responsive</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">Chat Interface</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Message history management</li>
                <li>• Typing indicators</li>
                <li>• Quick suggestions</li>
                <li>• Auto-scroll to new messages</li>
                <li>• Recommendation display</li>
                <li>• Theme customization</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">Recommendations</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Inline recommendation cards</li>
                <li>• Click tracking</li>
                <li>• Match score display</li>
                <li>• Feature highlights</li>
                <li>• Pricing information</li>
                <li>• Trial/free tier badges</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">Customization</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Light/dark themes</li>
                <li>• Custom accent colors</li>
                <li>• Configurable placeholders</li>
                <li>• Custom suggestions</li>
                <li>• Branding options</li>
                <li>• Responsive design</li>
              </ul>
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
            welcomeMessage: "Hi! I'm your AI assistant. I can help you find the perfect products and services. What are you looking for today?",
            placeholder: "Ask me about products, tools, or services...",
            enableTypingIndicator: true,
            enableSuggestions: true,
            suggestions: [
              "I need a CRM for my team",
              "What's the best project management tool?",
              "Show me marketing automation platforms"
            ]
          }}
          theme={theme}
          title="AI Assistant"
          subtitle="Get personalized recommendations"
          isOpen={floatingChatOpen}
          onToggle={() => setFloatingChatOpen(!floatingChatOpen)}
          onSendMessage={handleFloatingChatMessage}
          onRecommendationClick={handleRecommendationClick}
        />
      )}
    </div>
  );
}
