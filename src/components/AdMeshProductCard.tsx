import React, { useMemo } from 'react';
import classNames from 'classnames';
import type { AdMeshProductCardProps, BadgeType } from '../types/index';
import { AdMeshBadge } from './AdMeshBadge';
import { AdMeshLinkTracker } from './AdMeshLinkTracker';

export const AdMeshProductCard: React.FC<AdMeshProductCardProps> = ({
  recommendation,
  theme,
  showMatchScore = true,
  showBadges = true,
  maxKeywords = 3,
  onClick,
  onTrackView,
  className
}) => {
  // Generate badges based on recommendation data
  const badges = useMemo((): BadgeType[] => {
    const generatedBadges: BadgeType[] = [];
    
    // Add Top Match badge for high match scores
    if (recommendation.intent_match_score >= 0.8) {
      generatedBadges.push('Top Match');
    }
    
    // Add Free Tier badge
    if (recommendation.has_free_tier) {
      generatedBadges.push('Free Tier');
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
    
    return generatedBadges;
  }, [recommendation]);

  // Format match score as percentage
  const matchScorePercentage = Math.round(recommendation.intent_match_score * 100);

  // Limit keywords display
  const displayKeywords = recommendation.keywords?.slice(0, maxKeywords) || [];
  const hasMoreKeywords = (recommendation.keywords?.length || 0) > maxKeywords;

  const cardClasses = classNames(
    'admesh-component',
    'admesh-card',
    'group relative cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
    'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm',
    'overflow-hidden',
    className
  );

  const cardStyle = theme?.accentColor ? {
    '--admesh-primary': theme.accentColor,
    '--admesh-primary-hover': theme.accentColor + 'dd', // Add some transparency for hover
  } as React.CSSProperties : undefined;

  return (
    <AdMeshLinkTracker
      adId={recommendation.ad_id}
      admeshLink={recommendation.admesh_link}
      productId={recommendation.product_id}
      onClick={() => onClick?.(recommendation.ad_id, recommendation.admesh_link)}
      trackingData={{ 
        title: recommendation.title,
        matchScore: recommendation.intent_match_score 
      }}
      className={cardClasses}
    >
      {/* Glass overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div
        className="relative p-8 h-full flex flex-col gap-6 z-10"
        style={cardStyle}
        data-admesh-theme={theme?.mode}
      >
        {/* Header with badges and match score */}
        <div className="flex justify-between items-start gap-4 mb-2">
          {showBadges && badges.length > 0 && (
            <div className="flex flex-wrap gap-3 flex-1">
              {badges.map((badge, index) => (
                <AdMeshBadge key={`${badge}-${index}`} type={badge} size="sm" />
              ))}
            </div>
          )}

          {showMatchScore && (
            <div className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg text-sm font-semibold shadow-lg relative overflow-hidden">
              <div className="w-2 h-2 bg-white rounded-full shadow-sm animate-pulse" />
              <span>{matchScorePercentage}% match</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </div>
          )}
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col gap-5">
          <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white bg-gradient-to-r from-gray-900 to-indigo-600 dark:from-white dark:to-indigo-400 bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300">
            {recommendation.title}
          </h3>

          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 font-normal">
            {recommendation.reason}
          </p>

          {/* Keywords */}
          {displayKeywords.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {displayKeywords.map((keyword, index) => (
                <span
                  key={index}
                  className="admesh-badge admesh-badge--secondary admesh-badge--sm"
                >
                  {keyword}
                </span>
              ))}
              {hasMoreKeywords && (
                <span className="text-xs text-gray-500 dark:text-gray-400 italic">
                  +{(recommendation.keywords?.length || 0) - maxKeywords} more
                </span>
              )}
            </div>
          )}

          {/* Additional info */}
          <div className="space-y-2">
            {recommendation.pricing && (
              <div className="text-sm">
                <span className="text-gray-500 dark:text-gray-400">Pricing: </span>
                <span className="font-medium text-gray-900 dark:text-white">{recommendation.pricing}</span>
              </div>
            )}

            {recommendation.trial_days && recommendation.trial_days > 0 && (
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {recommendation.trial_days}-day free trial
              </div>
            )}
          </div>
        </div>

        {/* Footer with CTA */}
        <div className="mt-auto pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
          <button className="admesh-button admesh-button--primary w-full relative overflow-hidden bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="relative z-10">Visit Offer</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="sr-only">
              for {recommendation.title}
            </span>
          </button>

          {/* Powered by AdMesh branding */}
          <div className="flex items-center justify-center mt-4 text-xs text-gray-400 dark:text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Powered by</span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">AdMesh</span>
            </span>
          </div>
        </div>
      </div>
    </AdMeshLinkTracker>
  );
};

AdMeshProductCard.displayName = 'AdMeshProductCard';
