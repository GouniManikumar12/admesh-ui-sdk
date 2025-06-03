import React, { useState } from 'react';
import {
  AdMeshLayout,
  AdMeshProductCard,
  AdMeshCompareTable,
  AdMeshBadge,
  setAdMeshTrackerConfig,
  type AdMeshRecommendation,
  type AdMeshTheme
} from '../src';
import '../src/styles/index.css';

// Configure tracking for demo
setAdMeshTrackerConfig({
  apiBaseUrl: 'https://api.useadmesh.com',
  enabled: true,
  debug: true
});

// Sample recommendations data
const sampleRecommendations: AdMeshRecommendation[] = [
  {
    title: "HubSpot CRM",
    reason: "Perfect for remote teams with excellent collaboration features and free tier availability",
    intent_match_score: 0.92,
    admesh_link: "https://useadmesh.com/track?ad_id=hubspot-123&redirect=https://hubspot.com",
    ad_id: "hubspot-123",
    product_id: "hubspot-crm",
    features: ["Contact Management", "Email Marketing", "Sales Pipeline", "Reporting", "Mobile App"],
    has_free_tier: true,
    integrations: ["Gmail", "Outlook", "Slack", "Zoom"],
    pricing: "Free - $1,200/month",
    trial_days: 14,
    keywords: ["CRM", "Sales", "Marketing", "Customer Management"]
  },
  {
    title: "Salesforce CRM",
    reason: "Enterprise-grade CRM with advanced customization and automation capabilities",
    intent_match_score: 0.88,
    admesh_link: "https://useadmesh.com/track?ad_id=salesforce-456&redirect=https://salesforce.com",
    ad_id: "salesforce-456",
    product_id: "salesforce-crm",
    features: ["Advanced Analytics", "Custom Objects", "Workflow Automation", "AppExchange"],
    has_free_tier: false,
    integrations: ["Microsoft 365", "Google Workspace", "Slack"],
    pricing: "$25 - $300/user/month",
    trial_days: 30,
    keywords: ["CRM", "Enterprise", "Automation"]
  },
  {
    title: "OpenAI GPT-4 API",
    reason: "Leading AI language model with excellent performance for content generation and analysis",
    intent_match_score: 0.85,
    admesh_link: "https://useadmesh.com/track?ad_id=openai-789&redirect=https://openai.com",
    ad_id: "openai-789",
    product_id: "openai-gpt4",
    features: ["Natural Language Processing", "Code Generation", "Content Creation", "API Access"],
    has_free_tier: false,
    integrations: ["REST API", "Python SDK", "Node.js SDK"],
    pricing: "$0.03/1K tokens",
    trial_days: 0,
    keywords: ["AI", "Machine Learning", "Natural Language", "API"]
  }
];

function App() {
  const [theme, setTheme] = useState<AdMeshTheme>({ mode: 'light' });
  const [layoutType, setLayoutType] = useState<'auto' | 'cards' | 'compare'>('auto');

  const handleProductClick = (adId: string, admeshLink: string) => {
    console.log('Product clicked:', { adId, admeshLink });
    // In a real app, this would navigate to the product
    alert(`Clicked product with ad_id: ${adId}`);
  };

  const toggleTheme = () => {
    setTheme(prev => ({ 
      ...prev, 
      mode: prev.mode === 'light' ? 'dark' : 'light' 
    }));
  };

  const setAccentColor = (color: string) => {
    setTheme(prev => ({ ...prev, accentColor: color }));
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '2rem',
        background: theme.mode === 'dark'
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
        color: theme.mode === 'dark' ? '#f8fafc' : '#0f172a',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      }}
      data-admesh-theme={theme.mode}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{
          marginBottom: '4rem',
          textAlign: 'center',
          background: theme.mode === 'dark'
            ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'
            : 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
          padding: '3rem',
          borderRadius: '1.5rem',
          border: `1px solid ${theme.mode === 'dark' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)'}`,
          backdropFilter: 'blur(10px)'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '800',
            margin: '0 0 1rem 0',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            AdMesh UI SDK
          </h1>
          <p style={{
            fontSize: '1.25rem',
            margin: '0 0 2rem 0',
            color: theme.mode === 'dark' ? '#cbd5e1' : '#64748b',
            fontWeight: '500'
          }}>
            Modern, beautiful components for product recommendations
          </p>

          {/* Theme Controls */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '2rem',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <button
              onClick={toggleTheme}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem',
                border: 'none',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
              }}
            >
              {theme.mode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>

            {['#6366f1', '#10b981', '#8b5cf6', '#f59e0b'].map((color, index) => (
              <button
                key={color}
                onClick={() => setAccentColor(color)}
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  border: theme.accentColor === color ? '3px solid white' : '2px solid transparent',
                  background: color,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: `0 4px 15px ${color}40`
                }}
                title={['Blue', 'Green', 'Purple', 'Orange'][index]}
              />
            ))}

            <select
              value={layoutType}
              onChange={(e) => setLayoutType(e.target.value as any)}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                border: `1px solid ${theme.mode === 'dark' ? '#475569' : '#e2e8f0'}`,
                background: theme.mode === 'dark' ? '#334155' : '#ffffff',
                color: theme.mode === 'dark' ? '#f1f5f9' : '#1e293b',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              <option value="auto">🤖 Auto Layout</option>
              <option value="cards">📱 Cards Layout</option>
              <option value="compare">📊 Compare Layout</option>
            </select>
          </div>
        </header>

        {/* Badge Examples */}
        <section style={{
          marginBottom: '4rem',
          padding: '2rem',
          background: theme.mode === 'dark'
            ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(51, 65, 85, 0.5) 100%)'
            : 'linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(241, 245, 249, 0.8) 100%)',
          borderRadius: '1rem',
          border: `1px solid ${theme.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: theme.mode === 'dark' ? '#f1f5f9' : '#1e293b'
          }}>
            ✨ Modern Badges
          </h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <AdMeshBadge type="Top Match" variant="primary" />
            <AdMeshBadge type="Free Tier" variant="success" />
            <AdMeshBadge type="AI Powered" variant="secondary" />
            <AdMeshBadge type="Popular" variant="warning" />
            <AdMeshBadge type="Trial Available" size="lg" />
            <AdMeshBadge type="New" size="sm" />
          </div>
        </section>

        {/* Main Layout Demo */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>Layout Component</h2>
          {layoutType === 'auto' && (
            <AdMeshLayout
              recommendations={sampleRecommendations}
              theme={theme}
              autoLayout={true}
              showMatchScores={true}
              showFeatures={true}
              onProductClick={handleProductClick}
            />
          )}
          
          {layoutType === 'cards' && (
            <AdMeshLayout
              recommendations={sampleRecommendations}
              theme={theme}
              intentType="best_for_use_case"
              autoLayout={false}
              showMatchScores={true}
              showFeatures={true}
              onProductClick={handleProductClick}
            />
          )}
          
          {layoutType === 'compare' && (
            <AdMeshCompareTable
              recommendations={sampleRecommendations}
              theme={theme}
              showMatchScores={true}
              showFeatures={true}
              onProductClick={handleProductClick}
            />
          )}
        </section>

        {/* Individual Card Demo */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>Individual Product Card</h2>
          <div style={{ maxWidth: '400px' }}>
            <AdMeshProductCard
              recommendation={sampleRecommendations[0]}
              theme={theme}
              showMatchScore={true}
              showBadges={true}
              maxKeywords={4}
              onClick={handleProductClick}
            />
          </div>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem', borderTop: '1px solid #e2e8f0' }}>
          <p>
            Built with <strong>AdMesh UI SDK</strong> - 
            <a href="https://github.com/GouniManikumar12/admesh-ui-sdk" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
