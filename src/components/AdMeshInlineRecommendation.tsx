import React from 'react';
import classNames from 'classnames';
import type { AdMeshInlineRecommendationProps } from '../types/index';
import { AdMeshLinkTracker } from './AdMeshLinkTracker';
import {
  getInlineDisclosure,
  getInlineTooltip
} from '../utils/disclosureUtils';

export const AdMeshInlineRecommendation: React.FC<AdMeshInlineRecommendationProps> = ({
  recommendation,
  theme,
  compact = false,
  showReason = true,
  className,
  style
}) => {
  const matchScorePercentage = Math.round(recommendation.intent_match_score * 100);

  // Get compliant labels and disclosures
  const inlineDisclosure = getInlineDisclosure(recommendation, compact);
  const inlineTooltip = getInlineTooltip();

  const containerClasses = classNames(
    'admesh-inline-recommendation',
    'group cursor-pointer transition-all duration-200',
    {
      'p-2 sm:p-3 rounded-md bg-gray-50 dark:bg-slate-800/50 hover:bg-gray-100 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-700': !compact,
      'p-1.5 sm:p-2 rounded hover:bg-gray-50 dark:hover:bg-slate-800/30': compact,
    },
    className
  );

  const containerStyle = theme?.accentColor ? {
    '--admesh-primary': theme.accentColor,
  } as React.CSSProperties : undefined;

  return (
    <AdMeshLinkTracker
      adId={recommendation.ad_id}
      admeshLink={recommendation.admesh_link}
      productId={recommendation.product_id}
      trackingData={{
        title: recommendation.title,
        matchScore: recommendation.intent_match_score
      }}
      className={containerClasses}
      style={{
        fontFamily: theme?.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        ...theme?.components?.inlineRecommendation,
        ...style
      }}
    >
      <div
        className="flex items-start gap-3"
        style={containerStyle}
        data-admesh-theme={theme?.mode}
      >
        {/* Icon/Badge */}
        <div className="flex-shrink-0 mt-0.5">
          {recommendation.offer_images && recommendation.offer_images.length > 0 ? (
            <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 dark:border-gray-600">
              <img
                src={recommendation.offer_images[0].url}
                alt={recommendation.recommendation_title || recommendation.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : recommendation.product_logo ? (
            <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 dark:border-gray-600">
              <img
                src={recommendation.product_logo.url}
                alt={recommendation.recommendation_title || recommendation.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : recommendation.intent_match_score >= 0.8 ? (
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          ) : (
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start sm:items-center gap-2 mb-1 flex-col sm:flex-row">
            <h4 className={classNames(
              'font-medium transition-colors duration-200 flex-shrink-0',
              'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300',
              'cursor-pointer hover:underline',
              compact ? 'text-sm sm:text-base' : 'text-base sm:text-lg'
            )}>
              {recommendation.recommendation_title || recommendation.title}
            </h4>
            
            {/* Match score badge */}
            {recommendation.intent_match_score >= 0.7 && (
              <span className={classNames(
                'inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium flex-shrink-0 whitespace-nowrap',
                recommendation.intent_match_score >= 0.8
                  ? 'bg-green-100 text-green-800 dark:bg-green-800/80 dark:text-green-100'
                  : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
              )}>
                {matchScorePercentage}% match
              </span>
            )}
          </div>

          {/* Reason/Description */}
          {showReason && (recommendation.recommendation_description || recommendation.reason) && (
            <p className={classNames(
              'text-gray-600 dark:text-gray-400 line-clamp-2',
              compact ? 'text-xs' : 'text-sm'
            )}>
              {recommendation.recommendation_description || recommendation.reason}
            </p>
          )}

          {/* Disclosure */}
          <p
            className={classNames(
              'text-gray-500 dark:text-gray-400 mt-1',
              compact ? 'text-xs' : 'text-xs'
            )}
            title={inlineTooltip}
          >
            {inlineDisclosure}
          </p>

          {/* Features/Keywords */}
          {!compact && recommendation.keywords && recommendation.keywords.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {recommendation.keywords.slice(0, 3).map((keyword, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-slate-700 dark:text-gray-300"
                >
                  {keyword}
                </span>
              ))}
              {recommendation.keywords.length > 3 && (
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  +{recommendation.keywords.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Pricing/Trial info */}
          {!compact && recommendation.trial_days && recommendation.trial_days > 0 && (
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                {recommendation.trial_days}-day trial
              </span>
            </div>
          )}
        </div>

        {/* Arrow indicator */}
        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg 
            className="w-4 h-4 text-gray-400 dark:text-gray-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </div>
      </div>
    </AdMeshLinkTracker>
  );
};
