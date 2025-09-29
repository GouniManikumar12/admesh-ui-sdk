import React from 'react';
import { AdMeshProductCard } from 'admesh-ui-sdk';
import type { AdMeshRecommendation } from 'admesh-ui-sdk';

// Sample recommendation data
const sampleRecommendation: AdMeshRecommendation = {
  ad_id: 'sample-ad-1',
  product_id: 'analytics-platform-pro',
  external_id: 'ext-analytics-001',
  title: 'Advanced Analytics Platform',
  description: 'Transform your data into actionable insights with our AI-powered analytics platform. Perfect for businesses looking to make data-driven decisions.',
  pricing: 'Starting at $99/month',
  url: 'https://example.com/analytics-platform',
  redirect_url: 'https://example.com/analytics-platform?ref=admesh',
  admesh_link: 'https://admesh.ai/redirect/analytics-platform-pro',
  source: 'partner_network',
  
  // Features that will be hidden when showFeatures=false
  features: [
    'Real-time Analytics',
    'Custom Dashboards', 
    'AI-Powered Insights',
    'Data Export & API',
    'Team Collaboration',
    'Advanced Security'
  ],
  
  // Other optional fields
  keywords: ['analytics', 'data', 'business intelligence', 'ai'],
  categories: ['Business Tools', 'Analytics'],
  intent_match_score: 0.85,
  trial_days: 14
};

// Example component showing both variations
export const ProductCardComparison: React.FC = () => {
  const handleClick = (adId: string, admeshLink: string) => {
    console.log('Product clicked:', { adId, admeshLink });
    window.open(admeshLink, '_blank');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>AdMesh Product Card - Features Comparison</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2rem',
        marginTop: '2rem'
      }}>
        
        {/* Default card with features */}
        <div>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
            With Features (Default)
          </h2>
          <AdMeshProductCard
            recommendation={sampleRecommendation}
            showFeatures={true}
            showBadges={true}
            theme={{
              mode: 'light',
              primaryColor: '#000000',
              accentColor: '#000000'
            }}
            onClick={handleClick}
          />
          <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666' }}>
            <code>showFeatures={'{true}'}</code> - Displays key features section
          </div>
        </div>

        {/* Clean card without features */}
        <div>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
            Without Features (Clean)
          </h2>
          <AdMeshProductCard
            recommendation={sampleRecommendation}
            showFeatures={false}
            showBadges={true}
            theme={{
              mode: 'light',
              primaryColor: '#000000',
              accentColor: '#000000'
            }}
            onClick={handleClick}
          />
          <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666' }}>
            <code>showFeatures={'{false}'}</code> - Clean, minimal design
          </div>
        </div>
      </div>

      {/* Usage examples */}
      <div style={{ marginTop: '3rem' }}>
        <h2>Usage Examples</h2>
        
        <div style={{ marginTop: '1.5rem' }}>
          <h3>Default Product Card (with features):</h3>
          <pre style={{ 
            background: '#f5f5f5', 
            padding: '1rem', 
            borderRadius: '4px',
            overflow: 'auto',
            fontSize: '0.875rem'
          }}>
{`<AdMeshProductCard
  recommendation={recommendation}
  showFeatures={true}  // Default value
  showBadges={true}
  theme={{ mode: 'light' }}
  onClick={handleClick}
/>`}
          </pre>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <h3>Clean Product Card (without features):</h3>
          <pre style={{ 
            background: '#f5f5f5', 
            padding: '1rem', 
            borderRadius: '4px',
            overflow: 'auto',
            fontSize: '0.875rem'
          }}>
{`<AdMeshProductCard
  recommendation={recommendation}
  showFeatures={false}  // Hide features section
  showBadges={true}
  theme={{ mode: 'light' }}
  onClick={handleClick}
/>`}
          </pre>
        </div>
      </div>

      {/* Benefits section */}
      <div style={{ marginTop: '3rem' }}>
        <h2>When to Use Each Variation</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginTop: '1rem'
        }}>
          <div style={{ 
            padding: '1.5rem', 
            border: '1px solid #e5e7eb', 
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ marginTop: 0 }}>With Features</h3>
            <ul style={{ paddingLeft: '1.25rem' }}>
              <li>Detailed product showcases</li>
              <li>Feature-rich software tools</li>
              <li>When users need feature comparison</li>
              <li>B2B software recommendations</li>
              <li>Complex products with multiple capabilities</li>
            </ul>
          </div>
          
          <div style={{ 
            padding: '1.5rem', 
            border: '1px solid #e5e7eb', 
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ marginTop: 0 }}>Without Features</h3>
            <ul style={{ paddingLeft: '1.25rem' }}>
              <li>Clean, minimal design preference</li>
              <li>Simple product recommendations</li>
              <li>When space is limited</li>
              <li>Focus on core value proposition</li>
              <li>Reduced cognitive load for users</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardComparison;
