// Custom Styling Example - AdMesh UI SDK
import React, { useState } from 'react';
import { AdMeshLayout, AdMeshProductCard, AdMeshCompareTable } from '@admesh/ui-sdk';
import '@admesh/ui-sdk/dist/ui-sdk.css';

// Sample data
const sampleRecommendations = [
  {
    title: "Figma",
    reason: "Collaborative design platform that brings teams together. Create, prototype, and handoff designs with real-time collaboration.",
    intent_match_score: 0.94,
    admesh_link: "https://useadmesh.com/track?ad_id=figma&redirect=https://figma.com",
    ad_id: "figma-premium",
    product_id: "figma-design",
    features: ["Real-time Collaboration", "Prototyping", "Design Systems", "Developer Handoff"],
    has_free_tier: true,
    pricing: "Free - $15/user/month",
    trial_days: 30,
    keywords: ["Design", "Prototyping", "Collaboration", "UI/UX"]
  },
  {
    title: "Notion",
    reason: "All-in-one workspace for teams. Combine notes, docs, wikis, and project management in one beautiful platform.",
    intent_match_score: 0.91,
    admesh_link: "https://useadmesh.com/track?ad_id=notion&redirect=https://notion.so",
    ad_id: "notion-premium",
    product_id: "notion-workspace",
    features: ["AI Writing Assistant", "Team Collaboration", "Database Management", "Template Library"],
    has_free_tier: true,
    pricing: "Free - $10/user/month",
    trial_days: 0,
    keywords: ["Productivity", "Collaboration", "Database", "AI"]
  }
];

// Custom theme configurations
const themes = {
  default: {
    mode: 'light',
    accentColor: '#6366f1'
  },
  dark: {
    mode: 'dark',
    accentColor: '#8b5cf6'
  },
  green: {
    mode: 'light',
    accentColor: '#10b981'
  },
  orange: {
    mode: 'light',
    accentColor: '#f59e0b'
  },
  pink: {
    mode: 'light',
    accentColor: '#ec4899'
  }
};

function CustomStylingExample() {
  const [currentTheme, setCurrentTheme] = useState('default');
  const [layoutType, setLayoutType] = useState('auto');
  const [showMatchScores, setShowMatchScores] = useState(true);
  const [showFeatures, setShowFeatures] = useState(true);
  const [maxDisplayed, setMaxDisplayed] = useState(6);

  const handleProductClick = (adId, admeshLink) => {
    console.log('Product clicked:', { adId, admeshLink });
    window.open(admeshLink, '_blank');
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      themes[currentTheme].mode === 'dark' 
        ? 'bg-gray-900' 
        : 'bg-gradient-to-br from-gray-50 to-gray-100'
    }`}>
      {/* Control Panel */}
      <div className={`border-b transition-colors duration-300 ${
        themes[currentTheme].mode === 'dark'
          ? 'bg-gray-800 border-gray-700'
          : 'bg-white border-gray-200 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className={`text-2xl font-bold mb-6 ${
            themes[currentTheme].mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            AdMesh UI SDK - Custom Styling Demo
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Theme Selector */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                themes[currentTheme].mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Theme
              </label>
              <select
                value={currentTheme}
                onChange={(e) => setCurrentTheme(e.target.value)}
                className={`w-full px-3 py-2 rounded-lg border transition-colors ${
                  themes[currentTheme].mode === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
              >
                <option value="default">Default (Indigo)</option>
                <option value="dark">Dark Mode</option>
                <option value="green">Green Theme</option>
                <option value="orange">Orange Theme</option>
                <option value="pink">Pink Theme</option>
              </select>
            </div>

            {/* Layout Type */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                themes[currentTheme].mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Layout
              </label>
              <select
                value={layoutType}
                onChange={(e) => setLayoutType(e.target.value)}
                className={`w-full px-3 py-2 rounded-lg border transition-colors ${
                  themes[currentTheme].mode === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
              >
                <option value="auto">Auto Layout</option>
                <option value="cards">Cards Only</option>
                <option value="table">Comparison Table</option>
              </select>
            </div>

            {/* Max Displayed */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                themes[currentTheme].mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Max Items ({maxDisplayed})
              </label>
              <input
                type="range"
                min="2"
                max="12"
                value={maxDisplayed}
                onChange={(e) => setMaxDisplayed(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Toggle Options */}
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showMatchScores}
                  onChange={(e) => setShowMatchScores(e.target.checked)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className={`ml-2 text-sm ${
                  themes[currentTheme].mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Show Match Scores
                </span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showFeatures}
                  onChange={(e) => setShowFeatures(e.target.checked)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className={`ml-2 text-sm ${
                  themes[currentTheme].mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Show Features
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Theme Preview */}
        <div className={`rounded-xl p-6 mb-8 ${
          themes[currentTheme].mode === 'dark'
            ? 'bg-gray-800 border border-gray-700'
            : 'bg-white border border-gray-200 shadow-lg'
        }`}>
          <h2 className={`text-lg font-semibold mb-4 ${
            themes[currentTheme].mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Current Theme: {currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)}
          </h2>
          
          <div className="flex items-center gap-4">
            <div 
              className="w-8 h-8 rounded-full border-2 border-white shadow-lg"
              style={{ backgroundColor: themes[currentTheme].accentColor }}
            />
            <span className={`text-sm ${
              themes[currentTheme].mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Accent Color: {themes[currentTheme].accentColor}
            </span>
            <span className={`text-sm ${
              themes[currentTheme].mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Mode: {themes[currentTheme].mode}
            </span>
          </div>
        </div>

        {/* Render based on layout type */}
        {layoutType === 'auto' && (
          <AdMeshLayout
            recommendations={sampleRecommendations}
            theme={themes[currentTheme]}
            maxDisplayed={maxDisplayed}
            showMatchScores={showMatchScores}
            showFeatures={showFeatures}
            autoLayout={true}
            onProductClick={handleProductClick}
          />
        )}

        {layoutType === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleRecommendations.slice(0, maxDisplayed).map(rec => (
              <AdMeshProductCard
                key={rec.ad_id}
                recommendation={rec}
                theme={themes[currentTheme]}
                showMatchScore={showMatchScores}
                showBadges={true}
                maxKeywords={3}
                onClick={handleProductClick}
              />
            ))}
          </div>
        )}

        {layoutType === 'table' && (
          <AdMeshCompareTable
            recommendations={sampleRecommendations.slice(0, Math.min(4, maxDisplayed))}
            theme={themes[currentTheme]}
            showMatchScores={showMatchScores}
            showFeatures={showFeatures}
            onProductClick={handleProductClick}
          />
        )}

        {/* Custom CSS Example */}
        <div className={`mt-12 rounded-xl p-6 ${
          themes[currentTheme].mode === 'dark'
            ? 'bg-gray-800 border border-gray-700'
            : 'bg-white border border-gray-200 shadow-lg'
        }`}>
          <h3 className={`text-lg font-semibold mb-4 ${
            themes[currentTheme].mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Custom CSS Override Example
          </h3>
          
          <pre className={`text-sm p-4 rounded-lg overflow-x-auto ${
            themes[currentTheme].mode === 'dark'
              ? 'bg-gray-900 text-gray-300'
              : 'bg-gray-100 text-gray-800'
          }`}>
{`/* Custom CSS to override AdMesh styles */
.admesh-card {
  border-radius: 16px !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important;
}

.admesh-button--primary {
  background: linear-gradient(135deg, ${themes[currentTheme].accentColor}, #8b5cf6) !important;
}

.admesh-badge--primary {
  background-color: ${themes[currentTheme].accentColor} !important;
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default CustomStylingExample;
