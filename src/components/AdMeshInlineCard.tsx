import React, { useState } from 'react';
import classNames from 'classnames';
import type { AdMeshRecommendation, AdMeshTheme } from '../types/index';
import { AdMeshLinkTracker } from './AdMeshLinkTracker';

export interface AdMeshInlineCardProps {
  recommendation: AdMeshRecommendation;
  theme?: AdMeshTheme;
  variation?: 'default' | 'statement' | 'question';
  expandable?: boolean; // For question and statement variations, default: false
  className?: string;
  style?: React.CSSProperties;
}

/**
 * AdMeshInlineCard
 * Compact inline card that uses the same card style as AdMeshProductCard,
 * but with a smaller content footprint suitable for inline placements.
 */
export const AdMeshInlineCard: React.FC<AdMeshInlineCardProps> = ({
  recommendation,
  theme,
  variation = 'default',
  expandable = false,
  className,
  style,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Get content based on variation
  const getVariationContent = () => {
    const variations = recommendation.content_variations;

    if (variation === 'question' && variations?.question) {
      return {
        title: variations.question.cta || recommendation.recommendation_title || recommendation.title,
        description: variations.question.text,
        ctaText: variations.question.cta || recommendation.recommendation_title || recommendation.title
      };
    } else if (variation === 'statement' && variations?.statement) {
      return {
        title: recommendation.recommendation_title || recommendation.title,
        description: variations.statement.text,
        ctaText: variations.statement.cta || recommendation.recommendation_title || recommendation.title
      };
    } else {
      // Default variation
      return {
        title: recommendation.recommendation_title || recommendation.title,
        description: recommendation.recommendation_description || recommendation.reason || '',
        ctaText: recommendation.recommendation_title || recommendation.title
      };
    }
  };

  const content = getVariationContent();

  const cardClasses = classNames(
    'rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-slate-900',
    'hover:shadow-md transition-shadow duration-200',
    {
      'cursor-pointer': expandable && (variation === 'question' || variation === 'statement')
    },
    className
  );

  return (
    <div
      className={cardClasses}
      style={{
        fontFamily: theme?.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        // Ensure consistent width: 100% for inline cards
        width: theme?.components?.inlineRecommendation?.width || '100%',
        ...theme?.components?.productCard,
        ...style,
      }}
      data-admesh-theme={theme?.mode}
    >
      <div className="h-full flex flex-col">
        {/* Header with title and CTA button in same row */}
        <div className="flex justify-between items-center gap-3 mb-2">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {recommendation.product_logo && (
              <img
                src={recommendation.product_logo.url}
                alt={`${recommendation.title} logo`}
                className="w-5 h-5 rounded flex-shrink-0"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            )}
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm truncate">
              {content.title}
            </h4>
          </div>

          <div className="flex-shrink-0">
            <AdMeshLinkTracker
              adId={recommendation.meta?.ad_id || recommendation.ad_id || ''}
              admeshLink={recommendation.admesh_link}
              productId={recommendation.product_id}
              trackingData={{
                title: recommendation.title,
                matchScore: recommendation.meta?.intent_match_score || recommendation.intent_match_score,
                component: 'inline_card_cta',
              }}
            >
              <button className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 flex items-center transition-all duration-200 transform hover:scale-105 shadow-sm whitespace-nowrap">
                {variation === 'question' ? 'Try' : 'Visit'}
                <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </AdMeshLinkTracker>
          </div>
        </div>

        {/* Brief description (single line clamp) */}
        {content.description && (
          <p className="text-xs text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
            {content.description}
          </p>
        )}

        {/* Footer with disclosures */}
        <div className="mt-auto pt-2 border-t border-gray-100 dark:border-slate-700">
          <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400">
            <span>Sponsored</span>
            <span className="text-gray-400 dark:text-gray-500"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

AdMeshInlineCard.displayName = 'AdMeshInlineCard';

