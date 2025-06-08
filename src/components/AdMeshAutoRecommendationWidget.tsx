import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import type { AdMeshRecommendation, AdMeshTheme } from '../types/index';
import { AdMeshConversationalUnit } from './AdMeshConversationalUnit';

export interface AdMeshAutoRecommendationWidgetProps {
  recommendations: AdMeshRecommendation[];
  trigger?: string; // The query/context that triggered recommendations
  theme?: AdMeshTheme;
  title?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  size?: 'sm' | 'md' | 'lg';
  autoShow?: boolean;
  showDelay?: number; // Delay before showing (ms)
  onRecommendationClick?: (adId: string, admeshLink: string) => void;
  onDismiss?: () => void;
  className?: string;
}

export const AdMeshAutoRecommendationWidget: React.FC<AdMeshAutoRecommendationWidgetProps> = ({
  recommendations,
  trigger,
  theme,
  title = 'AI Recommendations',
  position = 'bottom-right',
  size = 'md',
  autoShow = true,
  showDelay = 1000,
  onRecommendationClick,
  onDismiss,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Auto-show with delay
  useEffect(() => {
    if (autoShow && recommendations.length > 0) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasAnimated(true);
      }, showDelay);

      return () => clearTimeout(timer);
    }
  }, [autoShow, recommendations.length, showDelay]);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  // Get widget dimensions based on size
  const getWidgetDimensions = () => {
    switch (size) {
      case 'sm': return 'w-72 max-h-80';
      case 'md': return 'w-80 max-h-96';
      case 'lg': return 'w-96 max-h-[28rem]';
      default: return 'w-80 max-h-96';
    }
  };

  // Get position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-right': return 'bottom-4 right-4';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'top-right': return 'top-4 right-4';
      case 'top-left': return 'top-4 left-4';
      default: return 'bottom-4 right-4';
    }
  };

  if (!isVisible || recommendations.length === 0) {
    return null;
  }

  const containerClasses = classNames(
    'admesh-auto-recommendation-widget',
    'fixed z-50 transition-all duration-500 ease-out',
    getPositionClasses(),
    getWidgetDimensions(),
    {
      'opacity-0 scale-95 translate-y-2': !hasAnimated,
      'opacity-100 scale-100 translate-y-0': hasAnimated,
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
    >
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-sm">{title}</h3>
              {trigger && (
                <p className="text-xs text-blue-100 truncate max-w-48">
                  Based on: "{trigger}"
                </p>
              )}
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
            aria-label="Dismiss recommendations"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600">
          {/* Recommendations count */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {recommendations.length} intelligent match{recommendations.length > 1 ? 'es' : ''} found
            </span>
          </div>

          {/* Recommendations */}
          <AdMeshConversationalUnit
            recommendations={recommendations}
            config={{
              displayMode: 'inline',
              context: 'assistant',
              maxRecommendations: 3,
              showPoweredBy: false,
              autoShow: true,
              delayMs: 200
            }}
            theme={theme}
            onRecommendationClick={onRecommendationClick}
          />
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Powered by AdMesh
            </span>
            <button
              onClick={handleDismiss}
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
