import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import type { AdMeshProductCardProps, BadgeType } from '../types/index';
import { AdMeshLinkTracker } from './AdMeshLinkTracker';
import { useAdMeshStyles } from '../hooks/useAdMeshStyles';
import {
  getRecommendationLabel,
  getLabelTooltip,
  getInlineDisclosure,
  getInlineTooltip,
  getBadgeText
} from '../utils/disclosureUtils';

export const AdMeshProductCard: React.FC<AdMeshProductCardProps> = ({
  recommendation,
  theme,
  showMatchScore = false,
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
    if (primaryLabel === 'Smart Pick') {
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

  // Get compliant disclosure text
  const inlineDisclosure = getInlineDisclosure(recommendation, false);
  const inlineTooltip = getInlineTooltip();

  // Format match score as percentage
  const matchScorePercentage = Math.round(recommendation.intent_match_score * 100);

  // Get content based on variation
  const getVariationContent = () => {
    const variations = recommendation.content_variations;

    if (variation === 'simple') {
      return {
        title: recommendation.recommendation_title || recommendation.title,
        description: recommendation.recommendation_description || recommendation.description || recommendation.reason,
        ctaText: recommendation.recommendation_title || recommendation.title,
        isSimple: true
      };
    } else if (variation === 'question' && variations?.question) {
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
    fontFamily: theme.fontFamily
  } as React.CSSProperties : undefined;

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
          title={inlineTooltip}
        >
          ({inlineDisclosure})
        </span>
      </div>
    );
  }

  if (variation === 'question' || variation === 'statement') {
    // Expandable layout - starts simple, can expand to full card (only if expandable=true)
    return (
      <div
        className={classNames(
          "admesh-component admesh-expandable-variation transition-all duration-300",
          expandable && isExpanded
            ? "p-4 sm:p-5 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 border border-gray-200/50 dark:border-slate-700/50 shadow-lg"
            : "p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md",
          className
        )}
        style={{
          fontFamily: theme?.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          ...theme?.components?.productCard,
          ...style
        }}
        data-admesh-theme={theme?.mode}
      >
        {!expandable || !isExpanded ? (
          // Simple inline layout with top label (or non-expandable layout)
          <>
            {/* Recommendation label at top */}
            <div className="mb-2">
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

            <div className="flex items-center justify-between gap-3">
              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {content.description}{' '}
                  <AdMeshLinkTracker
                    adId={recommendation.ad_id}
                    admeshLink={recommendation.admesh_link}
                    productId={recommendation.product_id}
                    trackingData={{
                      title: recommendation.title,
                      matchScore: recommendation.intent_match_score,
                      component: 'simple_variation_cta'
                    }}
                  >
                    <span
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline cursor-pointer font-medium transition-colors"
                    >
                      {content.ctaText}
                    </span>
                  </AdMeshLinkTracker>
                </p>
              </div>

              {/* Expand Button - only show if expandable is true */}
              {expandable && (
                <div className="flex items-center gap-3 flex-shrink-0">
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200 border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600"
                    title="View more details"
                  >
                    <span>More Details</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              )}
            </div>


          </>
        ) : (
          // Expanded full card layout (same as default variation)
          <div
            className="h-full flex flex-col"
            style={cardStyle}
            data-admesh-theme={theme?.mode}
          >
            {/* Header with badges, title, and collapse button */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1 min-w-0">
                {showBadges && badges.includes('Top Match') && (
                  <span
                    className="text-xs font-semibold text-white px-3 py-1 rounded-full w-fit shadow-md"
                    style={{
                      backgroundColor: theme?.primaryColor || theme?.accentColor || '#f59e0b',
                      borderRadius: theme?.borderRadius || '9999px'
                    }}
                    title={getLabelTooltip(recommendation, 'Smart Pick')}
                  >
                    {getBadgeText('Top Match')}
                  </span>
                )}
                <div className="flex items-center gap-2 min-w-0">
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
              </div>

              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  title="Show less details"
                >
                  <span>Less Details</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
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
                  <button className="text-xs sm:text-sm px-3 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 flex items-center transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                    {variation === 'question' ? 'Try' : 'Visit'} {content.ctaText}
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

            {/* Disclosure */}
            <div className="mb-6">
              <p
                className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed"
                title={inlineTooltip}
              >
                {inlineDisclosure}
              </p>
            </div>

            {/* Match Score */}
            {showMatchScore && typeof recommendation.intent_match_score === "number" && (
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <span className="font-medium">Match Score</span>
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 whitespace-nowrap">{matchScorePercentage}% match</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${matchScorePercentage}%` }}
                  />
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2 text-xs mb-3">
              {recommendation.pricing && (
                <span className="flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700">
                  <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  {recommendation.pricing}
                </span>
              )}

              {recommendation.trial_days && recommendation.trial_days > 0 && (
                <span className="flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
                  <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m6-10v10m-6 0h6" />
                  </svg>
                  {recommendation.trial_days}-day trial
                </span>
              )}
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

            {/* Integrations */}
            {recommendation.integrations && recommendation.integrations.length > 0 && (
              <div className="mb-3">
                <div className="text-xs text-gray-600 dark:text-gray-300 mb-2 font-medium">
                  🔗 Integrations
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {recommendation.integrations.slice(0, 3).map((integration, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700"
                    >
                      <svg className="h-3 w-3 mr-0.5 inline text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      {integration}
                    </span>
                  ))}
                  {recommendation.integrations.length > 3 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                      +{recommendation.integrations.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Powered by AdMesh branding */}
            <div className="flex justify-end mt-auto pt-2">
              <span className="text-xs text-gray-400 dark:text-gray-500">
                Powered by AdMesh
              </span>
            </div>
          </div>
        )}
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

        {/* Header with title */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
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

          <div className="flex gap-2 flex-shrink-0">
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
              <button className="text-xs sm:text-sm px-3 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 flex items-center transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                Visit {content.ctaText}
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

        {/* Match Score */}
        {showMatchScore && typeof recommendation.intent_match_score === "number" && (
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2">
              <span className="font-medium">Match Score</span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 whitespace-nowrap">{matchScorePercentage}% match</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${matchScorePercentage}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 text-xs mb-3">
          {recommendation.pricing && (
            <span className="flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700">
              <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              {recommendation.pricing}
            </span>
          )}

          {recommendation.trial_days && recommendation.trial_days > 0 && (
            <span className="flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
              <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m6-10v10m-6 0h6" />
              </svg>
              {recommendation.trial_days}-day trial
            </span>
          )}
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

        {/* Integrations */}
        {recommendation.integrations && recommendation.integrations.length > 0 && (
          <div className="mb-3">
            <div className="text-xs text-gray-600 dark:text-gray-300 mb-2 font-medium">
              🔗 Integrations
            </div>
            <div className="flex flex-wrap gap-1.5">
              {recommendation.integrations.slice(0, 3).map((integration, j) => (
                <span
                  key={j}
                  className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700"
                >
                  <svg className="h-3 w-3 mr-0.5 inline text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  {integration}
                </span>
              ))}
              {recommendation.integrations.length > 3 && (
                <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                  +{recommendation.integrations.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}









        {/* Footer section */}
        <div className="mt-auto pt-3 border-t border-gray-100 dark:border-slate-700">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span title={inlineTooltip}>
              {inlineDisclosure}
            </span>
            <span className="text-gray-400 dark:text-gray-500">
              Powered by AdMesh
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

AdMeshProductCard.displayName = 'AdMeshProductCard';
