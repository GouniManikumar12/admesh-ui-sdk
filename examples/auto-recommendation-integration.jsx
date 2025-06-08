import React, { useState, useEffect } from 'react';
import { AdMeshFloatingChat, AdMeshAutoRecommendationWidget } from 'admesh-ui-sdk';

// Sample recommendations for different contexts
const crmRecommendations = [
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

const projectManagementRecommendations = [
  {
    title: "Asana",
    reason: "Intuitive project management with excellent team collaboration",
    intent_match_score: 0.91,
    admesh_link: "https://useadmesh.com/track?ad_id=asana",
    ad_id: "asana",
    product_id: "asana",
    has_free_tier: true,
    trial_days: 0,
    keywords: ["Project Management", "Team", "Tasks"],
    categories: ["Project Management"],
    features: ["Task Management", "Timeline View", "Team Collaboration"],
    pricing: "Free for teams up to 15 members"
  }
];

export default function AutoRecommendationIntegration() {
  const [currentQuery, setCurrentQuery] = useState('');
  const [autoRecommendations, setAutoRecommendations] = useState([]);
  const [autoTrigger, setAutoTrigger] = useState('');
  const [showAutoWidget, setShowAutoWidget] = useState(false);
  const [integrationMode, setIntegrationMode] = useState('floating-auto');

  // Simulate external application queries (like from your main app)
  const simulateExternalQuery = (query) => {
    setCurrentQuery(query);
    
    // Simulate AI processing delay
    setTimeout(() => {
      let recommendations = [];
      let trigger = query;

      if (query.toLowerCase().includes('crm') || query.toLowerCase().includes('sales')) {
        recommendations = crmRecommendations;
      } else if (query.toLowerCase().includes('project') || query.toLowerCase().includes('management')) {
        recommendations = projectManagementRecommendations;
      } else if (query.toLowerCase().includes('help') || query.toLowerCase().includes('software')) {
        recommendations = [...crmRecommendations.slice(0, 1), ...projectManagementRecommendations.slice(0, 1)];
      }

      if (recommendations.length > 0) {
        setAutoRecommendations(recommendations);
        setAutoTrigger(trigger);
        setShowAutoWidget(true);
      }
    }, 1000);
  };

  const handleRecommendationClick = (adId, admeshLink) => {
    console.log('Recommendation clicked:', { adId, admeshLink });
    alert(`🎉 Recommendation clicked!\n\nProduct: ${adId}\nTracked link: ${admeshLink}\n\nThis would normally open the product page and track the conversion.`);
  };

  const handleDismissRecommendations = () => {
    setAutoRecommendations([]);
    setAutoTrigger('');
    setShowAutoWidget(false);
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
            AdMesh Auto-Recommendation Integration
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Automatically show recommendations when users ask questions in your application
          </p>
          <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 mb-6">
            <p className="text-blue-800 font-medium">
              💡 This simulates how AdMesh integrates with AI applications like ChatGPT, Claude, etc.
            </p>
          </div>
        </div>

        {/* Integration Mode Selector */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Integration Modes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setIntegrationMode('floating-auto')}
              className={`p-4 rounded-lg border-2 transition-colors text-left ${
                integrationMode === 'floating-auto'
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <h3 className="font-semibold text-gray-900 mb-2">Floating Chat (Auto-Recommendations)</h3>
              <p className="text-sm text-gray-600">
                Automatically shows recommendations in floating chat without requiring user input
              </p>
            </button>
            <button
              onClick={() => setIntegrationMode('auto-widget')}
              className={`p-4 rounded-lg border-2 transition-colors text-left ${
                integrationMode === 'auto-widget'
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <h3 className="font-semibold text-gray-900 mb-2">Auto-Recommendation Widget</h3>
              <p className="text-sm text-gray-600">
                Standalone widget that appears automatically with recommendations
              </p>
            </button>
          </div>
        </div>

        {/* Simulated Application Interface */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Application Interface</h2>
          <p className="text-gray-600 mb-6">
            This simulates your main application where users ask questions. 
            When they ask about software or tools, AdMesh automatically shows relevant recommendations.
          </p>

          {/* Simulated Query Input */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h3 className="font-medium text-gray-900 mb-3">Simulate User Query</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button
                onClick={() => simulateExternalQuery("I need a CRM system for my sales team")}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                "I need a CRM system"
              </button>
              <button
                onClick={() => simulateExternalQuery("What's the best project management tool?")}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                "Project management tool"
              </button>
              <button
                onClick={() => simulateExternalQuery("Help me find business software")}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
              >
                "Business software help"
              </button>
            </div>
          </div>

          {/* Current Query Display */}
          {currentQuery && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h4 className="font-medium text-blue-900 mb-2">Current User Query:</h4>
              <p className="text-blue-800">"{currentQuery}"</p>
              {autoRecommendations.length > 0 && (
                <p className="text-sm text-blue-600 mt-2">
                  ✅ {autoRecommendations.length} recommendations found and displayed automatically!
                </p>
              )}
            </div>
          )}

          {/* Integration Code Example */}
          <div className="bg-gray-100 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Integration Code:</h4>
            <pre className="text-sm text-gray-700 overflow-x-auto">
{integrationMode === 'floating-auto' ? `// Floating Chat with Auto-Recommendations
<AdMeshFloatingChat
  autoRecommendations={recommendations}
  autoRecommendationTrigger={userQuery}
  autoShowRecommendations={true}
  showInputField={false}
  config={{
    position: 'bottom-right',
    size: 'md',
    autoOpen: true
  }}
  onRecommendationClick={(adId, link) => {
    trackClick(adId);
    window.open(link, '_blank');
  }}
  onAutoRecommendationDismiss={() => {
    clearRecommendations();
  }}
/>` : `// Auto-Recommendation Widget
<AdMeshAutoRecommendationWidget
  recommendations={recommendations}
  trigger={userQuery}
  autoShow={true}
  showDelay={1000}
  position="bottom-right"
  size="md"
  onRecommendationClick={(adId, link) => {
    trackClick(adId);
    window.open(link, '_blank');
  }}
  onDismiss={() => {
    clearRecommendations();
  }}
/>`}
            </pre>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">User Asks Question</h3>
              <p className="text-sm text-gray-600">
                User asks about software, tools, or services in your application
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Processes Query</h3>
              <p className="text-sm text-gray-600">
                Your AI processes the query and identifies relevant product categories
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Auto-Show Recommendations</h3>
              <p className="text-sm text-gray-600">
                AdMesh automatically displays relevant recommendations without user input
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AdMesh Components */}
      {integrationMode === 'floating-auto' && autoRecommendations.length > 0 && (
        <AdMeshFloatingChat
          autoRecommendations={autoRecommendations}
          autoRecommendationTrigger={autoTrigger}
          autoShowRecommendations={true}
          showInputField={false}
          config={{
            position: 'bottom-right',
            size: 'md',
            displayMode: 'widget',
            autoOpen: true
          }}
          theme={theme}
          title="AI Recommendations"
          subtitle="Based on your query"
          onRecommendationClick={handleRecommendationClick}
          onAutoRecommendationDismiss={handleDismissRecommendations}
        />
      )}

      {integrationMode === 'auto-widget' && showAutoWidget && (
        <AdMeshAutoRecommendationWidget
          recommendations={autoRecommendations}
          trigger={autoTrigger}
          theme={theme}
          autoShow={true}
          showDelay={1000}
          position="bottom-right"
          size="md"
          onRecommendationClick={handleRecommendationClick}
          onDismiss={handleDismissRecommendations}
        />
      )}
    </div>
  );
}
