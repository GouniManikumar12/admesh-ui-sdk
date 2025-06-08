import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import type { AdMeshConversationalUnitProps } from '../types/index';
import { AdMeshInlineRecommendation } from './AdMeshInlineRecommendation';
import { AdMeshConversationSummary } from './AdMeshConversationSummary';
import { AdMeshProductCard } from './AdMeshProductCard';
import { AdMeshCitationUnit } from './AdMeshCitationUnit';

export const AdMeshConversationalUnit: React.FC<AdMeshConversationalUnitProps> = ({
  recommendations,
  config,
  theme,
  conversationSummary,
  userQuery: _userQuery,
  sessionId,
  onRecommendationClick,
  onDismiss,
  className
}) => {
  const [isVisible, setIsVisible] = useState(config.autoShow !== false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (config.delayMs && config.delayMs > 0) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasAnimated(true);
      }, config.delayMs);
      return () => clearTimeout(timer);
    } else {
      setHasAnimated(true);
    }
  }, [config.delayMs]);

  if (!isVisible || recommendations.length === 0) {
    return null;
  }

  const maxRecommendations = config.maxRecommendations || 3;
  const displayRecommendations = recommendations.slice(0, maxRecommendations);

  const handleRecommendationClick = (adId: string, admeshLink: string) => {
    onRecommendationClick?.(adId, admeshLink);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  // Render based on display mode
  const renderContent = () => {
    switch (config.displayMode) {
      case 'summary':
        return conversationSummary ? (
          <AdMeshConversationSummary
            recommendations={displayRecommendations}
            conversationSummary={conversationSummary}
            theme={theme}
            showTopRecommendations={maxRecommendations}
            onRecommendationClick={handleRecommendationClick}
            onStartNewConversation={onDismiss}
          />
        ) : null;

      case 'inline':
        return (
          <div className="space-y-2">
            {displayRecommendations.map((recommendation, index) => (
              <AdMeshInlineRecommendation
                key={recommendation.ad_id || index}
                recommendation={recommendation}
                theme={theme}
                compact={true}
                showReason={true}
                onClick={handleRecommendationClick}
              />
            ))}
          </div>
        );

      case 'minimal':
        return displayRecommendations.length > 0 ? (
          <div className="admesh-minimal-unit">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {displayRecommendations.length} intelligent match{displayRecommendations.length > 1 ? 'es' : ''} found
              </span>
            </div>
            <AdMeshInlineRecommendation
              recommendation={displayRecommendations[0]}
              theme={theme}
              compact={true}
              showReason={false}
              onClick={handleRecommendationClick}
            />
            {displayRecommendations.length > 1 && (
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                +{displayRecommendations.length - 1} more recommendation{displayRecommendations.length > 2 ? 's' : ''}
              </div>
            )}
          </div>
        ) : null;

      case 'citation':
        return conversationSummary ? (
          <AdMeshCitationUnit
            recommendations={displayRecommendations}
            conversationText={conversationSummary}
            theme={theme}
            showCitationList={true}
            citationStyle="numbered"
            onRecommendationClick={handleRecommendationClick}
          />
        ) : null;

      case 'floating':
        return (
          <div className="admesh-floating-unit bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Recommended for you
                </span>
              </div>
              {onDismiss && (
                <button
                  onClick={handleDismiss}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label="Dismiss recommendations"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            <div className="space-y-2">
              {displayRecommendations.map((recommendation, index) => (
                <AdMeshInlineRecommendation
                  key={recommendation.ad_id || index}
                  recommendation={recommendation}
                  theme={theme}
                  compact={true}
                  showReason={false}
                  onClick={handleRecommendationClick}
                />
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-3">
            {displayRecommendations.map((recommendation, index) => (
              <AdMeshProductCard
                key={recommendation.ad_id || index}
                recommendation={recommendation}
                theme={theme}
                showMatchScore={false}
                showBadges={true}
                onClick={handleRecommendationClick}
              />
            ))}
          </div>
        );
    }
  };

  const containerClasses = classNames(
    'admesh-conversational-unit',
    'transition-all duration-300 ease-in-out',
    {
      'opacity-0 translate-y-2': !hasAnimated,
      'opacity-100 translate-y-0': hasAnimated,
      'fixed bottom-4 right-4 max-w-sm z-50': config.displayMode === 'floating',
      'my-3': config.displayMode === 'inline',
      'mt-4 pt-4 border-t border-gray-200 dark:border-slate-700': config.displayMode === 'summary',
    },
    className
  );

  const containerStyle = theme?.accentColor ? {
    '--admesh-primary': theme.accentColor,
  } as React.CSSProperties : undefined;

  return (
    <div
      className={containerClasses}
      style={containerStyle}
      data-admesh-theme={theme?.mode}
      data-admesh-context={config.context}
      data-session-id={sessionId}
    >
      {renderContent()}
      
      {/* Powered by AdMesh branding */}
      {config.showPoweredBy !== false && (
        <div className="flex justify-end mt-2">
          <span className="text-xs text-gray-400 dark:text-gray-500">
            Powered by AdMesh
          </span>
        </div>
      )}
    </div>
  );
};
