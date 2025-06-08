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
    'bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800',
    'rounded-lg border border-gray-200 dark:border-slate-700 p-6',
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
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Conversation Summary
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Here's what we discussed and found for you
          </p>
        </div>
      </div>

      {/* Summary Text */}
      <div className="mb-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-gray-100 dark:border-slate-700">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {conversationSummary}
          </p>
        </div>
      </div>

      {/* Top Recommendations */}
      {topRecommendations.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h4 className="font-medium text-gray-900 dark:text-gray-100">
              Top Recommendations
            </h4>
          </div>
          
          <div className="space-y-2">
            {topRecommendations.map((recommendation, index) => (
              <div key={recommendation.ad_id || index} className="relative">
                {/* Ranking badge */}
                <div className="absolute -left-2 top-2 z-10">
                  <div className={classNames(
                    'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white',
                    index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-400'
                  )}>
                    {index + 1}
                  </div>
                </div>
                
                <div className="ml-4">
                  <AdMeshInlineRecommendation
                    recommendation={recommendation}
                    theme={theme}
                    compact={false}
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
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
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
            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
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
          className="flex-1 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 font-medium py-2.5 px-4 rounded-lg border border-gray-300 dark:border-slate-600 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          View Top Pick
        </button>
      </div>

      {/* Powered by AdMesh */}
      <div className="flex justify-center mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Powered by AdMesh
        </span>
      </div>
    </div>
  );
};
