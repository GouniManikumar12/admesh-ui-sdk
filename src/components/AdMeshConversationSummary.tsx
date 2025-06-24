import React from 'react';
import classNames from 'classnames';
import type { AdMeshConversationSummaryProps } from '../types/index';
import { AdMeshInlineRecommendation } from './AdMeshInlineRecommendation';

export const AdMeshConversationSummary: React.FC<AdMeshConversationSummaryProps> = ({
  recommendations,
  conversationSummary,
  theme,
  showTopRecommendations = 3,
  onRecommendationClick,
  onStartNewConversation,
  className
}) => {
  const topRecommendations = recommendations
    .sort((a, b) => b.intent_match_score - a.intent_match_score)
    .slice(0, showTopRecommendations);

  const containerClasses = classNames(
    'admesh-conversation-summary',
    'bg-white dark:bg-black',
    'rounded-lg border border-gray-200 dark:border-gray-800 p-4 sm:p-6',
    'font-sans', // Standardize font family
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
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black dark:bg-white rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white">
            Conversation Summary
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            Here's what we discussed and found for you
          </p>
        </div>
      </div>

      {/* Summary Text */}
      <div className="mb-6">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            {conversationSummary}
          </p>
        </div>
      </div>

      {/* Top Recommendations */}
      {topRecommendations.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h4 className="font-medium text-black dark:text-white">
              Top Recommendations
            </h4>
          </div>
          
          <div className="space-y-2">
            {topRecommendations.map((recommendation, index) => (
              <div key={recommendation.ad_id || index} className="relative">
                {/* Ranking badge */}
                <div className="absolute -left-2 top-2 z-10">
                  <div className={classNames(
                    'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold',
                    index === 0 ? 'bg-black dark:bg-white text-white dark:text-black' :
                    index === 1 ? 'bg-gray-600 dark:bg-gray-400 text-white dark:text-black' :
                    'bg-gray-800 dark:bg-gray-200 text-white dark:text-black'
                  )}>
                    {index + 1}
                  </div>
                </div>
                
                <div className="ml-4">
                  <AdMeshInlineRecommendation
                    recommendation={recommendation}
                    theme={theme}
                    compact={true}
                    showReason={true}
                    onClick={onRecommendationClick}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Additional Insights */}
      {recommendations.length > showTopRecommendations && (
        <div className="mb-6">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {recommendations.length - showTopRecommendations} additional recommendation{recommendations.length - showTopRecommendations > 1 ? 's' : ''} available
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        {onStartNewConversation && (
          <button
            onClick={onStartNewConversation}
            className="flex-1 bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-black font-medium py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Start New Conversation
          </button>
        )}
        
        <button
          onClick={() => {
            if (topRecommendations.length > 0) {
              onRecommendationClick?.(topRecommendations[0].ad_id, topRecommendations[0].admesh_link);
            }
          }}
          className="flex-1 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-black dark:text-white font-medium py-2.5 px-4 rounded-lg border border-gray-300 dark:border-gray-600 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          View Top Pick
        </button>
      </div>

      {/* Powered by AdMesh */}
      <div className="flex justify-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Powered by AdMesh
        </span>
      </div>
    </div>
  );
};
