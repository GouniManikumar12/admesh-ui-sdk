import React, { useState } from 'react';
import {
  AdMeshConversationalUnit,
  AdMeshConversationSummary,
  AdMeshInlineRecommendation
} from 'admesh-ui-sdk';

// Sample conversation data
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
  },
  {
    title: "Pipedrive",
    reason: "Simple and intuitive CRM designed for small to medium businesses",
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

const conversationSummary = "We discussed your need for a CRM solution that works well for remote teams. You mentioned wanting good collaboration features, automation capabilities, and preferably something with a free tier to start. Based on your requirements, I've identified several options that match your criteria, with HubSpot CRM being the top recommendation due to its excellent free tier and collaboration features.";

export default function ConversationalUsageExample() {
  const [activeDemo, setActiveDemo] = useState('inline');
  const [showSummary, setShowSummary] = useState(false);

  const handleRecommendationClick = (adId, admeshLink) => {
    console.log('Recommendation clicked:', { adId, admeshLink });
    // In a real app, this would open the tracked link
    alert(`Opening recommendation: ${adId}`);
  };

  const handleStartNewConversation = () => {
    console.log('Starting new conversation');
    setShowSummary(false);
    alert('Starting new conversation...');
  };

  const theme = {
    mode: 'light',
    accentColor: '#3b82f6'
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          AdMesh Conversational Ad Units
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Seamlessly integrate product recommendations into conversations and chat interfaces
        </p>
      </div>

      {/* Demo Controls */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Interactive Demo</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveDemo('inline')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeDemo === 'inline'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Inline Mode
          </button>
          <button
            onClick={() => setActiveDemo('minimal')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeDemo === 'minimal'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Minimal Mode
          </button>
          <button
            onClick={() => setActiveDemo('floating')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeDemo === 'floating'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Floating Mode
          </button>
          <button
            onClick={() => setShowSummary(!showSummary)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              showSummary
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {showSummary ? 'Hide' : 'Show'} Summary
          </button>
        </div>

        {/* Demo Content */}
        <div className="space-y-6">
          {/* Simulated Chat Messages */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-xs">
                I need a CRM for my remote team. Any recommendations?
              </div>
            </div>
            
            <div className="flex justify-start">
              <div className="bg-white rounded-lg px-4 py-2 max-w-md border border-gray-200">
                I'd be happy to help you find the right CRM for your remote team! 
                Let me show you some great options that work well for distributed teams.
              </div>
            </div>

            {/* Conversational Ad Unit */}
            <AdMeshConversationalUnit
              recommendations={sampleRecommendations}
              config={{
                displayMode: activeDemo,
                context: 'chat',
                maxRecommendations: 3,
                showPoweredBy: true,
                autoShow: true,
                position: 'inline'
              }}
              theme={theme}
              userQuery="I need a CRM for my remote team"
              sessionId="demo-session-123"
              onRecommendationClick={handleRecommendationClick}
              onDismiss={() => console.log('Dismissed')}
            />
          </div>

          {/* Conversation Summary */}
          {showSummary && (
            <AdMeshConversationSummary
              recommendations={sampleRecommendations}
              conversationSummary={conversationSummary}
              theme={theme}
              showTopRecommendations={3}
              onRecommendationClick={handleRecommendationClick}
              onStartNewConversation={handleStartNewConversation}
            />
          )}
        </div>
      </div>

      {/* Individual Component Examples */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Individual Components</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Inline Recommendation (Compact)</h3>
            <AdMeshInlineRecommendation
              recommendation={sampleRecommendations[0]}
              theme={theme}
              compact={true}
              showReason={false}
              onClick={handleRecommendationClick}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Inline Recommendation (Full)</h3>
            <AdMeshInlineRecommendation
              recommendation={sampleRecommendations[0]}
              theme={theme}
              compact={false}
              showReason={true}
              onClick={handleRecommendationClick}
            />
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Usage Examples</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Basic Inline Usage</h3>
            <pre className="bg-gray-100 rounded p-3 text-sm overflow-x-auto">
{`<AdMeshConversationalUnit
  recommendations={recommendations}
  config={{
    displayMode: 'inline',
    context: 'chat',
    maxRecommendations: 3
  }}
  onRecommendationClick={(adId, link) => window.open(link)}
/>`}
            </pre>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-2">Conversation Summary</h3>
            <pre className="bg-gray-100 rounded p-3 text-sm overflow-x-auto">
{`<AdMeshConversationSummary
  recommendations={recommendations}
  conversationSummary="Your conversation summary here..."
  onRecommendationClick={(adId, link) => window.open(link)}
  onStartNewConversation={() => startNewChat()}
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
