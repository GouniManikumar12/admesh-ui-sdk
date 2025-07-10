import React from 'react';
import {
  AdMeshProductCard,
  AdMeshExpandableUnit,
  AdMeshInlineRecommendation,
  getInlineDisclosure,
  createAdMeshTheme
} from '../src';
import type { AdMeshRecommendation } from '../src/types/index';

// Example recommendation data with different match scores
const highMatchRecommendation: AdMeshRecommendation = {
  ad_id: 'high-match-1',
  product_id: 'product-1',
  title: 'AI Writing Assistant Pro',
  reason: 'Perfect match for your content creation needs',
  intent_match_score: 0.92, // High match
  url: 'https://example.com',
  admesh_link: 'https://example.com',
  pricing: '$29/month',
  trial_days: 14
};

const mediumMatchRecommendation: AdMeshRecommendation = {
  ad_id: 'medium-match-1',
  product_id: 'product-2',
  title: 'Content Management System',
  reason: 'Good fit for content organization',
  intent_match_score: 0.72, // Medium match
  url: 'https://example2.com',
  admesh_link: 'https://example2.com',
  pricing: '$19/month'
};

const lowMatchRecommendation: AdMeshRecommendation = {
  ad_id: 'low-match-1',
  product_id: 'product-3',
  title: 'Project Management Tool',
  reason: 'Related productivity solution',
  intent_match_score: 0.45, // Low match
  url: 'https://example3.com',
  admesh_link: 'https://example3.com',
  pricing: '$15/month'
};

/**
 * Demo showing the improved disclosure text across different components
 */
export const ImprovedDisclosureDemo: React.FC = () => {
  const theme = createAdMeshTheme({
    primaryColor: '#3b82f6',
    accentColor: '#10b981'
  });

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>Improved Disclosure System Demo</h1>
      
      <div style={{ 
        padding: '16px', 
        backgroundColor: '#f0f9ff', 
        borderRadius: '8px', 
        marginBottom: '30px',
        border: '1px solid #0ea5e9'
      }}>
        <h2 style={{ margin: '0 0 10px 0', color: '#0c4a6e' }}>✅ Improvements Made</h2>
        <ul style={{ margin: 0, color: '#0c4a6e' }}>
          <li><strong>Removed:</strong> Short, unclear "Partner • Compensated" text</li>
          <li><strong>Added:</strong> Clear, compliant disclosure language</li>
          <li><strong>Enhanced:</strong> Match-score based disclosure adaptation</li>
          <li><strong>Improved:</strong> Professional, transparent communication</li>
        </ul>
      </div>

      {/* High Match Score Examples */}
      <section style={{ marginBottom: '40px' }}>
        <h2>High Match Score (92%) - Clear Value Communication</h2>
        <p style={{ color: '#6b7280', marginBottom: '20px' }}>
          <strong>Disclosure:</strong> "{getInlineDisclosure(highMatchRecommendation, false)}"
        </p>
        
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div>
            <h3>Product Card</h3>
            <AdMeshProductCard 
              recommendation={highMatchRecommendation}
              theme={theme}
              showBadges={true}
            />
          </div>
          
          <div>
            <h3>Simple Ad</h3>
            <AdMeshProductCard
              recommendation={highMatchRecommendation}
              theme={theme}
              variation="simple"
            />
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h3>Inline Recommendation</h3>
          <AdMeshInlineRecommendation 
            recommendation={highMatchRecommendation}
            theme={theme}
            compact={false}
            showReason={true}
          />
        </div>
      </section>

      {/* Medium Match Score Examples */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Medium Match Score (72%) - Transparent Partnership</h2>
        <p style={{ color: '#6b7280', marginBottom: '20px' }}>
          <strong>Disclosure:</strong> "{getInlineDisclosure(mediumMatchRecommendation, false)}"
        </p>
        
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div>
            <h3>Product Card</h3>
            <AdMeshProductCard 
              recommendation={mediumMatchRecommendation}
              theme={theme}
              showBadges={true}
            />
          </div>
          
          <div>
            <h3>Expandable Unit</h3>
            <AdMeshExpandableUnit 
              recommendation={mediumMatchRecommendation}
              theme={theme}
              initialExpanded={false}
            />
          </div>
        </div>
      </section>

      {/* Low Match Score Examples */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Low Match Score (45%) - Honest Communication</h2>
        <p style={{ color: '#6b7280', marginBottom: '20px' }}>
          <strong>Disclosure:</strong> "{getInlineDisclosure(lowMatchRecommendation, false)}"
        </p>
        
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div>
            <h3>Product Card</h3>
            <AdMeshProductCard 
              recommendation={lowMatchRecommendation}
              theme={theme}
              showBadges={true}
            />
          </div>
          
          <div>
            <h3>Simple Ad</h3>
            <AdMeshProductCard
              recommendation={lowMatchRecommendation}
              theme={theme}
              variation="simple"
            />
          </div>
        </div>
      </section>

      {/* Compact Mode Examples */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Compact Mode - Chat/Mobile Friendly</h2>
        <p style={{ color: '#6b7280', marginBottom: '20px' }}>
          <strong>Compact Disclosure:</strong> "{getInlineDisclosure(highMatchRecommendation, true)}"
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
          <AdMeshInlineRecommendation 
            recommendation={highMatchRecommendation}
            theme={theme}
            compact={true}
            showReason={false}
          />
          <AdMeshInlineRecommendation 
            recommendation={mediumMatchRecommendation}
            theme={theme}
            compact={true}
            showReason={false}
          />
          <AdMeshInlineRecommendation 
            recommendation={lowMatchRecommendation}
            theme={theme}
            compact={true}
            showReason={false}
          />
        </div>
      </section>

      {/* Legal Compliance Summary */}
      <section style={{ 
        padding: '20px', 
        backgroundColor: '#f9fafb', 
        borderRadius: '8px',
        border: '1px solid #e5e7eb'
      }}>
        <h2 style={{ margin: '0 0 15px 0' }}>Legal Compliance Features</h2>
        <div style={{ display: 'grid', gap: '15px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <div>
            <h3 style={{ margin: '0 0 8px 0', color: '#059669' }}>✅ FTC Compliant</h3>
            <ul style={{ margin: 0, fontSize: '14px', color: '#4b5563' }}>
              <li>Clear and conspicuous disclosures</li>
              <li>Unavoidable notice placement</li>
              <li>Honest relationship representation</li>
            </ul>
          </div>
          <div>
            <h3 style={{ margin: '0 0 8px 0', color: '#059669' }}>✅ User-Friendly</h3>
            <ul style={{ margin: 0, fontSize: '14px', color: '#4b5563' }}>
              <li>Professional, clear language</li>
              <li>No engagement-reducing terms</li>
              <li>Contextual transparency tooltips</li>
            </ul>
          </div>
          <div>
            <h3 style={{ margin: '0 0 8px 0', color: '#059669' }}>✅ Adaptive</h3>
            <ul style={{ margin: 0, fontSize: '14px', color: '#4b5563' }}>
              <li>Match-score based messaging</li>
              <li>Compact mode for mobile/chat</li>
              <li>Theme-aware styling</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImprovedDisclosureDemo;
