import React, { useMemo } from 'react';
import classNames from 'classnames';
import type { AdMeshProductCardProps, BadgeType } from '../types/index';
import { AdMeshLinkTracker } from './AdMeshLinkTracker';

export const AdMeshProductCard: React.FC<AdMeshProductCardProps> = ({
  recommendation,
  theme,
  showMatchScore = true,
  showBadges = true,
  onClick,
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

  const cardClasses = classNames(
    'admesh-component',
    'admesh-card',
    'relative p-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow transition-shadow cursor-pointer',
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
      <div
        className="h-full flex flex-col"
        style={cardStyle}
        data-admesh-theme={theme?.mode}
      >
        {/* Header with badges and title */}
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            {showBadges && badges.includes('Top Match') && (
              <span className="text-xs font-semibold text-white bg-black px-2 py-0.5 rounded-full">
                Top Match
              </span>
            )}
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">
              {recommendation.title}
            </h4>

            <div className="flex gap-2">
              <button className="text-xs px-2 py-1 rounded-full bg-black text-white hover:bg-gray-800 flex items-center">
                Visit
                <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          {recommendation.reason}
        </p>

        {/* Confidence Score */}
        {showMatchScore && typeof recommendation.intent_match_score === "number" && (
          <div className="mb-3">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
              <span>Confidence</span>
              <span>{matchScorePercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-slate-600 rounded h-1.5 overflow-hidden">
              <div
                className="bg-black h-1.5"
                style={{ width: `${matchScorePercentage}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 text-xs mb-2">
          {recommendation.pricing && (
            <span className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              {recommendation.pricing}
            </span>
          )}

          {recommendation.has_free_tier && (
            <span className="flex items-center px-1.5 py-0.5 bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400 rounded-full">
              <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              Free Tier
            </span>
          )}

          {recommendation.trial_days && recommendation.trial_days > 0 && (
            <span className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m6-10v10m-6 0h6" />
              </svg>
              {recommendation.trial_days}-day trial
            </span>
          )}
        </div>

        {/* Features */}
        {recommendation.features && recommendation.features.length > 0 && (
          <div className="mb-2">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              Features:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {recommendation.features.map((feature, j) => (
                <span
                  key={j}
                  className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300"
                >
                  <svg className="h-3 w-3 mr-0.5 inline text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Integrations */}
        {recommendation.integrations && recommendation.integrations.length > 0 && (
          <div className="mb-2">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              Integrates with:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {recommendation.integrations.map((integration, j) => (
                <span
                  key={j}
                  className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300"
                >
                  <svg className="h-3 w-3 mr-0.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  {integration}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Reviews summary */}
        {recommendation.reviews_summary && (
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
            {recommendation.reviews_summary}
          </div>
        )}

        {/* Powered by AdMesh branding */}
        <div className="flex justify-end mt-auto pt-2">
          <span className="text-xs text-gray-400 dark:text-gray-500">
            Powered by AdMesh
          </span>
        </div>
      </div>
    </AdMeshLinkTracker>
  );
};

AdMeshProductCard.displayName = 'AdMeshProductCard';
