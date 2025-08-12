import React from 'react';
import {
  AdMeshProductCard,
  AdMeshExpandableUnit,
  AdMeshInlineRecommendation,
  getSectionDisclosure,
  hasHighQualityMatches,
  createAdMeshTheme
} from '../src';
import type { AdMeshRecommendation } from '../src/types/index';

// Example recommendation data
const sampleRecommendation: AdMeshRecommendation = {
  ad_id: 'example-ad-1',
  product_id: 'example-product-1',
  title: 'AI Writing Assistant',
  reason: 'Perfect for content creation and editing',
  intent_match_score: 0.85,
  url: 'https://example.com',
  admesh_link: 'https://example.com',
  pricing: '$29/month',
  trial_days: 14,
  feature_sections: [
    {
      title: 'Smart Writing',
      description: 'AI-powered content generation and editing',
      icon: '◆'
    },
    {
      title: 'Grammar Check',
      description: 'Advanced grammar and style suggestions',
      icon: '◉'
    }
  ]
};

const lowMatchRecommendation: AdMeshRecommendation = {
  ad_id: 'example-ad-2',
  product_id: 'example-product-2',
  title: 'Project Management Tool',
  reason: 'Related to productivity tools',
  intent_match_score: 0.45,
  url: 'https://example2.com',
  admesh_link: 'https://example2.com',
  pricing: '$19/month'
};

/**
 * Example 1: High-Quality Match Recommendations
 * Shows how components display for high-scoring recommendations
 */
export const HighQualityMatchExample: React.FC = () => {
  const recommendations = [sampleRecommendation];
  const sectionDisclosure = getSectionDisclosure(hasHighQualityMatches(recommendations));

  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>High-Quality Match Example</h2>
      
      {/* Section-level disclosure */}
      <div style={{
        padding: '12px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px',
        borderLeft: '3px solid #3b82f6',
        marginBottom: '20px',
        fontSize: '13px',
        color: '#4b5563'
      }}>
        {sectionDisclosure}
      </div>

      {/* Product Card with Smart Pick label */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Product Card Format</h3>
        <AdMeshProductCard 
          recommendation={sampleRecommendation}
          showBadges={true}
          showMatchScore={true}
        />
      </div>

      {/* Simple Ad with Partner Match label */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Simple Ad Format</h3>
        <AdMeshProductCard
          recommendation={sampleRecommendation}
          variation="simple"
        />
      </div>

      {/* Inline Recommendation */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Inline Recommendation Format</h3>
        <AdMeshInlineRecommendation 
          recommendation={sampleRecommendation}
          compact={false}
          showReason={true}
        />
      </div>
    </div>
  );
};

/**
 * Example 2: Low-Quality Match Recommendations
 * Shows how components display for lower-scoring recommendations
 */
export const LowQualityMatchExample: React.FC = () => {
  const recommendations = [lowMatchRecommendation];
  const sectionDisclosure = getSectionDisclosure(hasHighQualityMatches(recommendations));

  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>Low-Quality Match Example</h2>
      
      {/* Section-level disclosure for expanded results */}
      <div style={{
        padding: '12px',
        backgroundColor: '#fef3c7',
        borderRadius: '8px',
        borderLeft: '3px solid #f59e0b',
        marginBottom: '20px',
        fontSize: '13px',
        color: '#92400e'
      }}>
        {sectionDisclosure}
      </div>

      {/* Product Card with Promoted Option label */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Product Card Format</h3>
        <AdMeshProductCard 
          recommendation={lowMatchRecommendation}
          showBadges={true}
          showMatchScore={true}
        />
      </div>

      {/* Simple Ad with Related Option label */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Simple Ad Format</h3>
        <AdMeshProductCard
          recommendation={lowMatchRecommendation}
          variation="simple"
        />
      </div>
    </div>
  );
};

/**
 * Example 3: Compact/Mobile Formats
 * Shows how disclosures work in compact layouts
 */
export const CompactFormatExample: React.FC = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Compact/Mobile Format Example</h2>
      
      {/* Compact inline recommendations */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Compact Inline Recommendations</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <AdMeshInlineRecommendation 
            recommendation={sampleRecommendation}
            compact={true}
            showReason={false}
          />
          <AdMeshInlineRecommendation 
            recommendation={lowMatchRecommendation}
            compact={true}
            showReason={false}
          />
        </div>
      </div>

      {/* Expandable unit in compact mode */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Expandable Unit</h3>
        <AdMeshExpandableUnit 
          recommendation={sampleRecommendation}
          initialExpanded={false}
        />
      </div>
    </div>
  );
};

/**
 * Example 4: Custom Disclosure Labels
 * Shows how to customize disclosure text for different platforms
 */
export const CustomDisclosureExample: React.FC = () => {
  const customTheme = createAdMeshTheme({
    primaryColor: '#8b5cf6',
    accentColor: '#06b6d4'
  });

  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>Custom Disclosure Example</h2>
      
      <p style={{ marginBottom: '20px', color: '#6b7280', fontSize: '14px' }}>
        This example shows how the disclosure system automatically adapts labels based on match scores
        while maintaining legal compliance.
      </p>

      {/* High match - Smart Pick */}
      <div style={{ marginBottom: '20px' }}>
        <h3>High Match Score (85%) - "Smart Pick"</h3>
        <AdMeshProductCard 
          recommendation={sampleRecommendation}
          theme={customTheme}
          showBadges={true}
        />
      </div>

      {/* Low match - Promoted Option */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Low Match Score (45%) - "Promoted Option"</h3>
        <AdMeshProductCard 
          recommendation={lowMatchRecommendation}
          theme={customTheme}
          showBadges={true}
        />
      </div>
    </div>
  );
};

/**
 * Example 5: Layout with Multiple Recommendations
 * Shows section-level disclosures with mixed match quality
 */
export const LayoutDisclosureExample: React.FC = () => {
  const mixedRecommendations = [sampleRecommendation, lowMatchRecommendation];
  const hasHighMatches = hasHighQualityMatches(mixedRecommendations);
  const sectionDisclosure = getSectionDisclosure(hasHighMatches);

  return (
    <div style={{ padding: '20px', maxWidth: '1000px' }}>
      <h2>Layout with Mixed Match Quality</h2>
      
      {/* Section-level disclosure */}
      <div style={{
        padding: '16px',
        backgroundColor: '#f0f9ff',
        borderRadius: '8px',
        border: '1px solid #0ea5e9',
        marginBottom: '24px',
        fontSize: '14px',
        color: '#0c4a6e'
      }}>
        <strong>Personalized Sponsoreds</strong>
        <br />
        {sectionDisclosure}
      </div>

      {/* Individual components with mixed recommendations */}
      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {mixedRecommendations.map((rec, index) => (
          <AdMeshProductCard
            key={rec.ad_id}
            recommendation={rec}
            theme={createAdMeshTheme({
              primaryColor: '#3b82f6',
              accentColor: '#10b981'
            })}
            showBadges={true}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * Main demo component showcasing all compliance examples
 */
export const ComplianceDemo: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '40px 0' }}>
        AdMesh UI SDK - FTC Compliant Disclosure Examples
      </h1>
      
      <div style={{ marginBottom: '40px', padding: '20px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
        <h2>Legal Compliance Features</h2>
        <ul style={{ color: '#4b5563', lineHeight: '1.6' }}>
          <li><strong>Clear Labels:</strong> "Smart Pick", "Partner Match", "Promoted Option" instead of "Ad" or "Sponsored"</li>
          <li><strong>Transparent Disclosures:</strong> Clear explanation of partner compensation</li>
          <li><strong>Contextual Tooltips:</strong> Detailed information on hover/click</li>
          <li><strong>Match-Based Labeling:</strong> Labels reflect actual recommendation quality</li>
          <li><strong>Section Disclosures:</strong> Clear notice that all results are monetized</li>
          <li><strong>No Emojis:</strong> Professional, accessible design</li>
        </ul>
      </div>
      
      <HighQualityMatchExample />
      <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />
      
      <LowQualityMatchExample />
      <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />
      
      <CompactFormatExample />
      <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />
      
      <CustomDisclosureExample />
      <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />
      
      <LayoutDisclosureExample />
    </div>
  );
};
