import React, { useState } from 'react';
import {
  AdMeshConversationalUnit,
  AdMeshCitationUnit,
  AdMeshCitationReference
} from 'admesh-ui-sdk';

// Sample conversation data with recommendations
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
    title: "Salesforce",
    reason: "Enterprise-grade CRM with extensive customization and integration capabilities",
    intent_match_score: 0.88,
    admesh_link: "https://useadmesh.com/track?ad_id=salesforce-456",
    ad_id: "salesforce-456",
    product_id: "salesforce-crm",
    has_free_tier: false,
    trial_days: 30,
    keywords: ["CRM", "Enterprise", "Sales", "Cloud"],
    categories: ["Sales Tools", "CRM", "Enterprise"],
    features: ["Advanced Analytics", "Custom Objects", "Workflow Automation"],
    pricing: "Starting from $25/user/month"
  },
  {
    title: "Pipedrive",
    reason: "Simple and intuitive CRM focused on sales pipeline management",
    intent_match_score: 0.85,
    admesh_link: "https://useadmesh.com/track?ad_id=pipedrive-789",
    ad_id: "pipedrive-789",
    product_id: "pipedrive-crm",
    has_free_tier: false,
    trial_days: 14,
    keywords: ["CRM", "Pipeline", "Sales", "Simple"],
    categories: ["Sales Tools", "CRM"],
    features: ["Visual Pipeline", "Activity Reminders", "Email Sync"],
    pricing: "Starting from $14.90/user/month"
  }
];

// Sample conversation text that mentions the products
const conversationText = `
Based on your requirements for a CRM system for your remote team, I'd recommend considering several excellent options. 

HubSpot CRM offers a comprehensive free tier that's perfect for getting started, with excellent collaboration features that work well for remote teams. The platform includes robust automation capabilities and integrates seamlessly with other business tools.

For larger enterprises, Salesforce provides the most comprehensive feature set with extensive customization options. While it has a steeper learning curve, it's the industry standard for enterprise CRM solutions.

If you prefer simplicity, Pipedrive focuses specifically on sales pipeline management with an intuitive interface that's easy for teams to adopt quickly.

All of these CRM solutions offer strong integration capabilities and can scale with your business needs.
`;

export default function CitationUsageExample() {
  const [theme, setTheme] = useState({ mode: 'light' });
  const [citationStyle, setCitationStyle] = useState('numbered');

  const handleRecommendationClick = (adId, admeshLink) => {
    console.log('Citation clicked:', { adId, admeshLink });
    // In a real app, you would track this click and open the link
    window.open(admeshLink, '_blank');
  };

  const handleCitationHover = (recommendation) => {
    console.log('Citation hovered:', recommendation.title);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          AdMesh Citation-Based Conversation Ads
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Display recommendations as inline citations within conversational text, 
          similar to academic papers or AI assistant responses.
        </p>
      </div>

      {/* Controls */}
      <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 space-y-4">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Theme
            </label>
            <select
              value={theme.mode}
              onChange={(e) => setTheme({ ...theme, mode: e.target.value })}
              className="px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Citation Style
            </label>
            <select
              value={citationStyle}
              onChange={(e) => setCitationStyle(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100"
            >
              <option value="numbered">Numbered (1)</option>
              <option value="bracketed">Bracketed [1]</option>
              <option value="superscript">Superscript¹</option>
            </select>
          </div>
        </div>
      </div>

      {/* Citation Unit Example */}
      <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Citation Unit Component
        </h2>
        
        <AdMeshCitationUnit
          recommendations={sampleRecommendations}
          conversationText={conversationText}
          theme={theme}
          showCitationList={true}
          citationStyle={citationStyle}
          onRecommendationClick={handleRecommendationClick}
          onCitationHover={handleCitationHover}
        />
      </div>

      {/* Conversational Unit with Citation Mode */}
      <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Conversational Unit - Citation Mode
        </h2>
        
        <AdMeshConversationalUnit
          recommendations={sampleRecommendations}
          config={{
            displayMode: 'citation',
            context: 'assistant',
            maxRecommendations: 3,
            showPoweredBy: true
          }}
          theme={theme}
          conversationSummary={conversationText}
          onRecommendationClick={handleRecommendationClick}
        />
      </div>

      {/* Individual Citation References */}
      <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Individual Citation References
        </h2>
        
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            You can also use individual citation references inline: 
            Check out this great CRM solution{' '}
            <AdMeshCitationReference
              recommendation={sampleRecommendations[0]}
              citationNumber={1}
              citationStyle={citationStyle}
              theme={theme}
              onClick={handleRecommendationClick}
              onHover={handleCitationHover}
            />
            {' '}for your business needs.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            Different citation styles: 
            <AdMeshCitationReference
              recommendation={sampleRecommendations[1]}
              citationNumber={2}
              citationStyle="numbered"
              theme={theme}
              onClick={handleRecommendationClick}
            />
            {' '}
            <AdMeshCitationReference
              recommendation={sampleRecommendations[1]}
              citationNumber={2}
              citationStyle="bracketed"
              theme={theme}
              onClick={handleRecommendationClick}
            />
            {' '}
            <AdMeshCitationReference
              recommendation={sampleRecommendations[1]}
              citationNumber={2}
              citationStyle="superscript"
              theme={theme}
              onClick={handleRecommendationClick}
            />
          </p>
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
          How to Use Citation-Based Ads
        </h3>
        <ul className="space-y-2 text-blue-800 dark:text-blue-200">
          <li>• <strong>Hover over citations</strong> to see product details in tooltips</li>
          <li>• <strong>Click citations</strong> to visit product pages with tracking</li>
          <li>• <strong>Automatic insertion</strong> finds product mentions in text</li>
          <li>• <strong>Reference list</strong> shows all cited products at the bottom</li>
          <li>• <strong>Multiple styles</strong> support numbered, bracketed, or superscript citations</li>
        </ul>
      </div>
    </div>
  );
}
