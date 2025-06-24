import React, { useState } from 'react';
import classNames from 'classnames';
import type { AdMeshSidebarContentProps } from '../types/index';
import { AdMeshInlineRecommendation } from './AdMeshInlineRecommendation';
import { AdMeshProductCard } from './AdMeshProductCard';

export const AdMeshSidebarContent: React.FC<AdMeshSidebarContentProps> = ({
  recommendations,
  displayMode,
  theme,
  maxRecommendations,
  onRecommendationClick,
  className
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'top' | 'recent'>('all');

  const displayRecommendations = maxRecommendations 
    ? recommendations.slice(0, maxRecommendations)
    : recommendations;

  const getTabRecommendations = () => {
    switch (activeTab) {
      case 'top':
        return displayRecommendations
          .filter(rec => rec.intent_match_score >= 0.8)
          .slice(0, 5);
      case 'recent':
        return displayRecommendations.slice(0, 3);
      default:
        return displayRecommendations;
    }
  };

  const tabRecommendations = getTabRecommendations();

  const contentClasses = classNames(
    'admesh-sidebar-content',
    'flex flex-col h-full',
    className
  );

  const containerStyle = theme?.accentColor ? {
    '--admesh-primary': theme.accentColor,
  } as React.CSSProperties : undefined;

  const renderRecommendations = () => {
    if (tabRecommendations.length === 0) {
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            No recommendations found
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Try adjusting your search or filters
          </p>
        </div>
      );
    }

    switch (displayMode) {
      case 'recommendations':
        return (
          <div className="space-y-3">
            {tabRecommendations.map((recommendation, index) => (
              <AdMeshInlineRecommendation
                key={recommendation.ad_id || index}
                recommendation={recommendation}
                theme={theme}
                compact={true}
                showReason={true}
                onClick={onRecommendationClick}
              />
            ))}
          </div>
        );

      case 'history':
        return (
          <div className="space-y-2">
            {tabRecommendations.map((recommendation, index) => (
              <div key={recommendation.ad_id || index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    {recommendation.title}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {Math.round(recommendation.intent_match_score * 100)}% match
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'favorites':
        return (
          <div className="space-y-3">
            {tabRecommendations.slice(0, 3).map((recommendation, index) => (
              <div key={recommendation.ad_id || index} className="relative">
                <AdMeshInlineRecommendation
                  recommendation={recommendation}
                  theme={theme}
                  compact={true}
                  showReason={false}
                  onClick={onRecommendationClick}
                />
                <button className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                  <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        );

      case 'mixed':
        return (
          <div className="space-y-4">
            {/* Top recommendation as card */}
            {tabRecommendations[0] && (
              <div>
                <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                  Top Pick
                </h4>
                <AdMeshProductCard
                  recommendation={tabRecommendations[0]}
                  theme={theme}
                  showMatchScore={true}
                  showBadges={true}
                  onClick={onRecommendationClick}
                  className="text-xs"
                />
              </div>
            )}

            {/* Other recommendations as inline */}
            {tabRecommendations.slice(1).length > 0 && (
              <div>
                <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                  More Options
                </h4>
                <div className="space-y-2">
                  {tabRecommendations.slice(1, 4).map((recommendation, index) => (
                    <AdMeshInlineRecommendation
                      key={recommendation.ad_id || index}
                      recommendation={recommendation}
                      theme={theme}
                      compact={true}
                      showReason={false}
                      onClick={onRecommendationClick}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="space-y-3">
            {tabRecommendations.map((recommendation, index) => (
              <AdMeshInlineRecommendation
                key={recommendation.ad_id || index}
                recommendation={recommendation}
                theme={theme}
                compact={true}
                showReason={true}
                onClick={onRecommendationClick}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <div
      className={contentClasses}
      style={containerStyle}
      data-admesh-theme={theme?.mode}
    >
      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <button
          onClick={() => setActiveTab('all')}
          className={classNames(
            'flex-1 px-3 py-2 text-xs font-medium transition-colors',
            activeTab === 'all'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          )}
        >
          All ({recommendations.length})
        </button>
        <button
          onClick={() => setActiveTab('top')}
          className={classNames(
            'flex-1 px-3 py-2 text-xs font-medium transition-colors',
            activeTab === 'top'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          )}
        >
          Top
        </button>
        <button
          onClick={() => setActiveTab('recent')}
          className={classNames(
            'flex-1 px-3 py-2 text-xs font-medium transition-colors',
            activeTab === 'recent'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          )}
        >
          Recent
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 min-h-0" style={{
        WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
        overscrollBehavior: 'contain' // Prevent scroll chaining on mobile
      }}>
        {renderRecommendations()}
      </div>

      {/* Quick Actions */}
      <div className="p-3 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500 dark:text-gray-400">
            {tabRecommendations.length} recommendation{tabRecommendations.length !== 1 ? 's' : ''}
          </span>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Filters
          </button>
        </div>
      </div>
    </div>
  );
};
