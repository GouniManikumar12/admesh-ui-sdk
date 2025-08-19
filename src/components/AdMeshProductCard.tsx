import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import type { AdMeshProductCardProps, BadgeType } from '../types/index';
import { AdMeshLinkTracker } from './AdMeshLinkTracker';
import { useAdMeshStyles } from '../hooks/useAdMeshStyles';
import {
  getRecommendationLabel,
  getLabelTooltip,
  getBadgeText
} from '../utils/disclosureUtils';

export const AdMeshProductCard: React.FC<AdMeshProductCardProps> = ({
  recommendation,
  theme,
  showMatchScore = false, // Deprecated - Match Score removed from UI
  showBadges = true,
  variation = 'default',
  expandable = false,
  className,
  style
}) => {
  // Inject styles automatically
  useAdMeshStyles();

  // State for expandable variations
  const [isExpanded, setIsExpanded] = useState(false);
  // Generate badges based on recommendation data using compliant labels
  const badges = useMemo((): BadgeType[] => {
    const generatedBadges: BadgeType[] = [];

    // Add primary recommendation label based on match score
    const primaryLabel = getRecommendationLabel(recommendation);
    if (primaryLabel === 'Sponsored') {
      generatedBadges.push('Top Match'); // Map to existing badge type
    }

    // Add Trial Available badge
    if (recommendation.trial_days && recommendation.trial_days > 0) {
      generatedBadges.push('Trial Available');
    }

    // Add AI Powered badge (check if AI-related keywords exist)
    const aiKeywords = ['ai', 'artificial intelligence', 'machine learning', 'ml', 'automation'];
    const hasAIKeywords = recommendation.keywords?.some(keyword =>
      aiKeywords.some(ai => keyword.toLowerCase().includes(ai))
    ) || recommendation.title.toLowerCase().includes('ai');

    if (hasAIKeywords) {
      generatedBadges.push('AI Powered');
    }

    // Add badges from the response if available
    if (recommendation.badges && recommendation.badges.length > 0) {
      recommendation.badges.forEach(badge => {
        // Only add if it's a valid BadgeType and not already included
        if (['Top Match', 'Free Tier', 'AI Powered', 'Popular', 'New', 'Trial Available'].includes(badge) &&
            !generatedBadges.includes(badge as BadgeType)) {
          generatedBadges.push(badge as BadgeType);
        }
      });
    }

    // Note: is_open_source field has been removed

    return generatedBadges;
  }, [recommendation]);

  // Disclosure removed - only layout component shows disclosures

  // Format match score as percentage
  const matchScorePercentage = Math.round(recommendation.intent_match_score * 100);

  // Get content based on variation
  const getVariationContent = () => {
    if (variation === 'simple') {
      return {
        title: recommendation.recommendation_title || recommendation.title,
        description: recommendation.recommendation_description || recommendation.description || recommendation.reason,
        ctaText: recommendation.recommendation_title || recommendation.title,
        isSimple: true
      };

    } else {
      // Default variation
      return {
        title: recommendation.recommendation_title || recommendation.title,
        description: recommendation.recommendation_description || recommendation.description || recommendation.reason,
        ctaText: recommendation.recommendation_title || recommendation.title
      };
    }
  };

  const content = getVariationContent();

  const cardClasses = classNames(
    'admesh-component',
    'admesh-card',
    'relative p-4 sm:p-5 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 border border-gray-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1',
    className
  );

  const cardStyle = theme ? {
    '--admesh-primary': theme.primaryColor || theme.accentColor || '#3b82f6',
    '--admesh-secondary': theme.secondaryColor || '#10b981',
    '--admesh-accent': theme.accentColor || '#3b82f6',
    '--admesh-background': theme.backgroundColor,
    '--admesh-surface': theme.surfaceColor,
    '--admesh-border': theme.borderColor,
    '--admesh-text': theme.textColor,
    '--admesh-text-secondary': theme.textSecondaryColor,
    '--admesh-radius': theme.borderRadius || '12px',
    '--admesh-shadow-sm': theme.shadows?.small,
    '--admesh-shadow-md': theme.shadows?.medium,
    '--admesh-shadow-lg': theme.shadows?.large,
    '--admesh-spacing-sm': theme.spacing?.small,
    '--admesh-spacing-md': theme.spacing?.medium,
    '--admesh-spacing-lg': theme.spacing?.large,
    '--admesh-font-size-sm': theme.fontSize?.small,
    '--admesh-font-size-base': theme.fontSize?.base,
    '--admesh-font-size-lg': theme.fontSize?.large,
    '--admesh-font-size-title': theme.fontSize?.title,
    fontFamily: theme.fontFamily,
    // Ensure consistent width: 100% for all components except ecommerce
    width: theme.components?.productCard?.width || '100%'
  } as React.CSSProperties : { width: '100%' } as React.CSSProperties;

  // Render different layouts based on variation
  if (variation === 'simple') {
    // Simple inline ad format (replaces AdMeshSimpleAd)
    return (
      <div
        className={classNames(
          "admesh-component admesh-simple-ad",
          "inline-block text-sm leading-relaxed",
          className
        )}
        style={{
          fontFamily: theme?.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          ...theme?.components?.productCard,
          ...style
        }}
        data-admesh-theme={theme?.mode}
      >
        {/* Recommendation label */}
        <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: theme?.accentColor || '#2563eb',
            backgroundColor: theme?.mode === 'dark' ? '#374151' : '#f3f4f6',
            padding: '2px 6px',
            borderRadius: '4px',
            marginRight: '8px'
          }}
          title={getLabelTooltip(recommendation, getRecommendationLabel(recommendation))}
        >
          {getRecommendationLabel(recommendation)}
        </span>

        {/* Main content */}
        <span
          style={{
            color: theme?.mode === 'dark' ? '#f3f4f6' : '#374151',
            marginRight: '4px'
          }}
        >
          {content.description}{' '}
        </span>

        {/* CTA Link */}
        <AdMeshLinkTracker
          adId={recommendation.ad_id}
          admeshLink={recommendation.admesh_link}
          productId={recommendation.product_id}
          trackingData={{
            title: recommendation.title,
            matchScore: recommendation.intent_match_score,
            component: 'simple_ad_cta'
          }}
        >
          <span
            style={{
              color: theme?.accentColor || '#2563eb',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: 'inherit',
              fontFamily: 'inherit'
            }}
          >
            {content.ctaText}
          </span>
        </AdMeshLinkTracker>

        {/* Disclosure */}
        <span
          style={{
            fontSize: '10px',
            color: theme?.mode === 'dark' ? '#9ca3af' : '#6b7280',
            marginLeft: '8px'
          }}
        >
          (Sponsored )
        </span>
      </div>
    );
  }




  // Default full product card layout
  return (
    <div
      className={cardClasses}
      style={{
        fontFamily: theme?.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        ...theme?.components?.productCard,
        ...style
      }}
      data-admesh-theme={theme?.mode}
    >
      <div
        className="h-full flex flex-col"
        style={cardStyle}
      >
        {/* Recommendation label at top */}
        <div className="mb-3">
          <span
            style={{
              fontSize: '11px',
              fontWeight: '600',
              color: theme?.accentColor || '#2563eb',
              backgroundColor: theme?.mode === 'dark' ? '#374151' : '#f3f4f6',
              padding: '2px 6px',
              borderRadius: '4px'
            }}
            title={getLabelTooltip(recommendation, getRecommendationLabel(recommendation))}
          >
            {getRecommendationLabel(recommendation)}
          </span>
        </div>

        {/* Header with title and CTA button in same row */}
        <div className="flex justify-between items-center gap-3 mb-4">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {recommendation.product_logo && (
              <img
                src={recommendation.product_logo.url}
                alt={`${recommendation.title} logo`}
                className="w-6 h-6 rounded flex-shrink-0"
                onError={(e) => {
                  // Hide image if it fails to load
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base truncate">
              {content.title}
            </h4>
          </div>

          <div className="flex-shrink-0">
            <AdMeshLinkTracker
              adId={recommendation.ad_id}
              admeshLink={recommendation.admesh_link}
              productId={recommendation.product_id}
              trackingData={{
                title: recommendation.title,
                matchScore: recommendation.intent_match_score,
                component: 'product_card_cta'
              }}
            >
              <button className="text-xs px-2 py-1 sm:px-3 sm:py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 flex items-center transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap">
                Visit
                <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </AdMeshLinkTracker>
          </div>
        </div>

        {/* Product Description/Reason */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {content.description}
          </p>
        </div>


       

        {/* Features */}
        {recommendation.features && recommendation.features.length > 0 && (
          <div className="mb-3">
            <div className="text-xs text-gray-600 dark:text-gray-300 mb-2 font-medium">
              ✨ Key Features
            </div>
            <div className="flex flex-wrap gap-1.5">
              {recommendation.features.slice(0, 4).map((feature, j) => (
                <span
                  key={j}
                  className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700"
                >
                  <svg className="h-3 w-3 mr-0.5 inline text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {feature}
                </span>
              ))}
              {recommendation.features.length > 4 && (
                <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                  +{recommendation.features.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}










        {/* Footer section with disclosure */}
        <div className="mt-auto pt-3 border-t border-gray-100 dark:border-slate-700">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>
              Sponsored
            </span>
            <span className="text-gray-400 dark:text-gray-500">
              
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

AdMeshProductCard.displayName = 'AdMeshProductCard';
