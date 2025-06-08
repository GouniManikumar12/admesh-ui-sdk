import React, { useState, useEffect } from 'react';
import { AdMeshSidebar } from 'admesh-ui-sdk';

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

export default function SidebarUsageExample() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [recommendations, setRecommendations] = useState(sampleRecommendations);
  const [sidebarConfig, setSidebarConfig] = useState({
    position: 'left',
    size: 'md',
    displayMode: 'recommendations',
    collapsible: true,
    defaultCollapsed: false,
    showHeader: true,
    showSearch: true,
    showFilters: true,
    maxRecommendations: 10
  });

  // Simulate fetching recommendations based on user context
  const fetchRecommendations = async (context) => {
    // In a real app, this would call your AdMesh API
    console.log('Fetching recommendations for context:', context);
    // For demo, we'll just shuffle the existing recommendations
    const shuffled = [...sampleRecommendations].sort(() => Math.random() - 0.5);
    setRecommendations(shuffled);
  };

  const handleRecommendationClick = (adId, admeshLink) => {
    console.log('Recommendation clicked:', { adId, admeshLink });
    // Track the click and open the link
    window.open(admeshLink, '_blank');
  };

  const handleSearch = (query) => {
    console.log('Search query:', query);
    // In a real app, you might filter recommendations or fetch new ones
  };

  const handleFilter = (filters) => {
    console.log('Filters applied:', filters);
    // In a real app, you would apply these filters to your recommendations
  };

  const theme = {
    mode: 'light',
    accentColor: '#3b82f6'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* AdMesh Sidebar */}
      <AdMeshSidebar
        recommendations={recommendations}
        config={sidebarConfig}
        theme={theme}
        title="AI Recommendations"
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        onRecommendationClick={handleRecommendationClick}
        onSearch={handleSearch}
        onFilter={handleFilter}
      />

      {/* Main Content */}
      <div className={`transition-all duration-300 ${
        sidebarOpen && sidebarConfig.position === 'left' ? 'ml-80' : 
        sidebarOpen && sidebarConfig.position === 'right' ? 'mr-80' : ''
      }`}>
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                AdMesh Sidebar Integration
              </h1>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {sidebarOpen ? 'Hide' : 'Show'} Sidebar
              </button>
            </div>

            {/* Demo Controls */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Sidebar Configuration</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Position */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position
                  </label>
                  <select
                    value={sidebarConfig.position}
                    onChange={(e) => setSidebarConfig({
                      ...sidebarConfig,
                      position: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                  </select>
                </div>

                {/* Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Size
                  </label>
                  <select
                    value={sidebarConfig.size}
                    onChange={(e) => setSidebarConfig({
                      ...sidebarConfig,
                      size: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                  </select>
                </div>

                {/* Display Mode */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Display Mode
                  </label>
                  <select
                    value={sidebarConfig.displayMode}
                    onChange={(e) => setSidebarConfig({
                      ...sidebarConfig,
                      displayMode: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="recommendations">Recommendations</option>
                    <option value="mixed">Mixed</option>
                    <option value="history">History</option>
                    <option value="favorites">Favorites</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={sidebarConfig.showSearch}
                    onChange={(e) => setSidebarConfig({
                      ...sidebarConfig,
                      showSearch: e.target.checked
                    })}
                    className="mr-2"
                  />
                  Show Search
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={sidebarConfig.showFilters}
                    onChange={(e) => setSidebarConfig({
                      ...sidebarConfig,
                      showFilters: e.target.checked
                    })}
                    className="mr-2"
                  />
                  Show Filters
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={sidebarConfig.collapsible}
                    onChange={(e) => setSidebarConfig({
                      ...sidebarConfig,
                      collapsible: e.target.checked
                    })}
                    className="mr-2"
                  />
                  Collapsible
                </label>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4">Your Application Content</h2>
                <p className="text-gray-600 mb-4">
                  This is your main application content. The AdMesh sidebar appears alongside
                  this content, providing contextual AI-powered recommendations without
                  interrupting the user's workflow.
                </p>
                <button
                  onClick={() => fetchRecommendations('crm-search')}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Simulate Context Change
                </button>
              </section>

              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4">Integration Benefits</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Persistent recommendations that don't interrupt workflow</li>
                  <li>• Search and filter capabilities for better discovery</li>
                  <li>• Multiple display modes for different use cases</li>
                  <li>• Responsive design that works on all screen sizes</li>
                  <li>• Collapsible interface to maximize content space</li>
                  <li>• Built-in tracking and analytics</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
