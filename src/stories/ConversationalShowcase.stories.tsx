import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { 
  AdMeshConversationalUnit, 
  AdMeshConversationSummary, 
  AdMeshInlineRecommendation 
} from '../index';
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
  }
];

const ConversationalShowcase = () => {
  const [activeDemo, setActiveDemo] = useState<'chat' | 'summary' | 'comparison'>('chat');
  const [showSummary, setShowSummary] = useState(false);

  const handleRecommendationClick = (adId: string, admeshLink: string) => {
    alert(`Clicked: ${adId}\nLink: ${admeshLink}`);
  };

  const handleStartNewConversation = () => {
    setShowSummary(false);
    setActiveDemo('chat');
    alert('Starting new conversation...');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Demo Controls */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">AdMesh Conversational Ad Units</h2>
        <p className="text-gray-600 mb-6">
          Explore different ways to integrate product recommendations into conversational experiences.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveDemo('chat')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeDemo === 'chat'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Chat Interface
          </button>
          <button
            onClick={() => setActiveDemo('comparison')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeDemo === 'comparison'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Display Modes
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

        {/* Chat Interface Demo */}
        {activeDemo === 'chat' && (
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <h3 className="font-medium text-gray-900 mb-4">Simulated Chat Interface</h3>
            
            {/* Chat Messages */}
            <div className="space-y-3">
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
              <div className="flex justify-start">
                <div className="max-w-md">
                  <AdMeshConversationalUnit
                    recommendations={sampleRecommendations}
                    config={{
                      displayMode: 'inline',
                      context: 'chat',
                      maxRecommendations: 2,
                      showPoweredBy: true,
                      autoShow: true,
                      delayMs: 500
                    }}
                    theme={{ mode: 'light' }}
                    sessionId="demo-session-123"
                    onRecommendationClick={handleRecommendationClick}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Display Modes Comparison */}
        {activeDemo === 'comparison' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Inline Mode</h3>
              <AdMeshConversationalUnit
                recommendations={sampleRecommendations}
                config={{
                  displayMode: 'inline',
                  context: 'chat',
                  maxRecommendations: 2,
                  showPoweredBy: true
                }}
                theme={{ mode: 'light' }}
                onRecommendationClick={handleRecommendationClick}
              />
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Minimal Mode</h3>
              <AdMeshConversationalUnit
                recommendations={sampleRecommendations}
                config={{
                  displayMode: 'minimal',
                  context: 'assistant',
                  maxRecommendations: 2,
                  showPoweredBy: true
                }}
                theme={{ mode: 'light' }}
                onRecommendationClick={handleRecommendationClick}
              />
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Individual Inline Recommendations</h3>
              <div className="space-y-2">
                {sampleRecommendations.slice(0, 2).map((rec, index) => (
                  <AdMeshInlineRecommendation
                    key={index}
                    recommendation={rec}
                    theme={{ mode: 'light' }}
                    compact={true}
                    showReason={true}
                    onClick={handleRecommendationClick}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Conversation Summary */}
        {showSummary && (
          <div className="mt-6">
            <AdMeshConversationSummary
              recommendations={sampleRecommendations}
              conversationSummary="We discussed your need for a CRM solution that works well for remote teams. You mentioned wanting good collaboration features, automation capabilities, and preferably something with a free tier to start. Based on your requirements, I've identified several options that match your criteria, with HubSpot CRM being the top recommendation due to its excellent free tier and collaboration features."
              theme={{ mode: 'light' }}
              showTopRecommendations={3}
              onRecommendationClick={handleRecommendationClick}
              onStartNewConversation={handleStartNewConversation}
            />
          </div>
        )}
      </div>

      {/* Integration Examples */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Integration Examples</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Basic Usage</h4>
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
            <h4 className="font-medium text-gray-900 mb-2">Conversation Summary</h4>
            <pre className="bg-gray-100 rounded p-3 text-sm overflow-x-auto">
{`<AdMeshConversationSummary
  recommendations={recommendations}
  conversationSummary="Your conversation summary..."
  onRecommendationClick={(adId, link) => window.open(link)}
  onStartNewConversation={() => startNewChat()}
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof ConversationalShowcase> = {
  title: 'Conversational/Showcase',
  component: ConversationalShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Interactive showcase demonstrating all AdMesh conversational ad unit components in realistic usage scenarios. Explore different display modes, chat integration patterns, and conversation summary features.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveDemo: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Complete interactive demonstration of AdMesh conversational ad units. Switch between different modes to see how recommendations can be integrated into various conversational contexts.',
      },
    },
  },
};
