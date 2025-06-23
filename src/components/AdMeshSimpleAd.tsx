import React from 'react';
import type { AdMeshRecommendation, AdMeshTheme } from '../types';
import { AdMeshLinkTracker } from './AdMeshLinkTracker';

export interface AdMeshSimpleAdProps {
  /** Product recommendation data */
  recommendation: AdMeshRecommendation;
  /** Theme configuration */
  theme?: AdMeshTheme;
  /** Custom CSS class name */
  className?: string;
  /** Callback when the ad is clicked */
  onClick?: (adId: string, admeshLink: string) => void;
  /** Show "powered by AdMesh" branding */
  showPoweredBy?: boolean;
  /** Variation style for the ad */
  variation?: 'question' | 'statement';
}

/**
 * AdMeshSimpleAd - A one-line ad unit with product name, simple description, and link
 *
 * Perfect for clean, unobtrusive product recommendations that blend naturally into content.
 * Supports two variations:
 * - Question: "Looking for payment solutions for your business? Try Stripe"
 * - Statement: "Stripe is offering best payment solutions for small business, visit"
 */
export const AdMeshSimpleAd: React.FC<AdMeshSimpleAdProps> = ({
  recommendation,
  theme = { mode: 'light' },
  className = '',
  onClick,
  showPoweredBy = true,
  variation = 'question'
}) => {
  const handleClick = () => {
    onClick?.(recommendation.ad_id, recommendation.admesh_link);
  };

  // Extract product name from title
  const productName = recommendation.title;
  
  // Generate simple description based on variation
  const getAdText = () => {
    if (variation === 'question') {
      // Extract category from keywords or use generic term
      const category = recommendation.keywords?.[0]?.toLowerCase() || 'solutions';
      return `Looking for ${category} for your business? Try ${productName}`;
    } else {
      // Statement variation
      const benefit = recommendation.reason?.split('.')[0] || `offering best solutions for your business`;
      return `${productName} is ${benefit.toLowerCase()}, visit`;
    }
  };

  return (
    <AdMeshLinkTracker
      adId={recommendation.ad_id}
      admeshLink={recommendation.admesh_link}
      productId={recommendation.product_id}
      onClick={handleClick}
      trackingData={{
        title: recommendation.title,
        variation: variation,
        component: 'simple_ad'
      }}
      className={`admesh-simple-ad ${className}`}
    >
      <div
        data-admesh-theme={theme.mode}
        style={{
          padding: '12px 16px',
          borderRadius: '8px',
          border: `1px solid ${theme.mode === 'dark' ? '#374151' : '#e5e7eb'}`,
          backgroundColor: theme.mode === 'dark' ? '#1f2937' : '#ffffff',
          fontSize: '14px',
          lineHeight: '1.5',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}
      >
        {/* Main ad content */}
        <div style={{ marginBottom: showPoweredBy ? '8px' : '0' }}>
          <span
            style={{
              color: theme.mode === 'dark' ? '#f3f4f6' : '#374151',
              marginRight: '4px'
            }}
          >
            {getAdText()}
          </span>
          <span
            style={{
              color: theme.accentColor || '#2563eb',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: 'inherit',
              fontFamily: 'inherit'
            }}
          >
            {productName}
          </span>
        </div>

        {/* Powered by AdMesh */}
        {showPoweredBy && (
          <div
            style={{
              fontSize: '11px',
              color: theme.mode === 'dark' ? '#9ca3af' : '#6b7280',
              textAlign: 'right' as const
            }}
          >
            powered by <strong>AdMesh</strong>
          </div>
        )}
      </div>
    </AdMeshLinkTracker>
  );
};

export default AdMeshSimpleAd;
