import React, { useMemo } from 'react';
import classNames from 'classnames';
import type { AdMeshLayoutProps, IntentType } from '../types/index';
import { AdMeshProductCard } from './AdMeshProductCard';
import { AdMeshCompareTable } from './AdMeshCompareTable';
import styles from './AdMeshLayout.module.css';

// Layout selection logic based on intent type and data characteristics
const selectOptimalLayout = (
  recommendations: any[],
  intentType?: IntentType,
  autoLayout?: boolean
): 'cards' | 'compare' | 'list' => {
  if (!autoLayout && intentType) {
    // Use explicit intent type mapping
    switch (intentType) {
      case 'compare_products':
        return 'compare';
      case 'best_for_use_case':
      case 'trial_demo':
      case 'budget_conscious':
        return 'cards';
      default:
        return 'cards';
    }
  }

  // Auto-layout logic based on data characteristics
  const productCount = recommendations.length;
  
  // If we have 2-4 products with features, use comparison table
  if (productCount >= 2 && productCount <= 4) {
    const hasFeatures = recommendations.some(rec => rec.features && rec.features.length > 0);
    const hasPricing = recommendations.some(rec => rec.pricing);
    
    if (hasFeatures || hasPricing) {
      return 'compare';
    }
  }
  
  // Default to cards layout
  return 'cards';
};

export const AdMeshLayout: React.FC<AdMeshLayoutProps> = ({
  recommendations,
  intentType,
  theme,
  maxDisplayed = 6,
  showMatchScores = true,
  showFeatures = true,
  autoLayout = true,
  onProductClick,
  onTrackView,
  className
}) => {
  // Limit recommendations to display
  const displayRecommendations = useMemo(() => {
    return recommendations.slice(0, maxDisplayed);
  }, [recommendations, maxDisplayed]);

  // Determine the optimal layout
  const layout = useMemo(() => {
    return selectOptimalLayout(displayRecommendations, intentType, autoLayout);
  }, [displayRecommendations, intentType, autoLayout]);

  const containerClasses = classNames(
    'admesh-component',
    'admesh-layout',
    `admesh-layout--${layout}`,
    {
      [`admesh-layout--${theme?.mode}`]: theme?.mode,
    },
    className
  );

  const containerStyle = theme?.accentColor ? {
    '--admesh-primary': theme.accentColor,
  } as React.CSSProperties : undefined;

  if (displayRecommendations.length === 0) {
    return (
      <div className={containerClasses}>
        <div className="admesh-layout__empty">
          <div className="admesh-layout__empty-content">
            <h3 className="admesh-text-lg admesh-font-semibold admesh-text-muted">
              No recommendations available
            </h3>
            <p className="admesh-text-sm admesh-text-muted">
              Try adjusting your search criteria or check back later.
            </p>

            {/* Powered by AdMesh branding */}
            <div className="flex items-center justify-center mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
              <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                <svg className="w-3 h-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Powered by</span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">AdMesh</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={containerClasses}
      style={containerStyle}
      data-admesh-theme={theme?.mode}
    >
      {layout === 'compare' ? (
        <AdMeshCompareTable
          recommendations={displayRecommendations}
          theme={theme}
          maxProducts={Math.min(displayRecommendations.length, 4)}
          showMatchScores={showMatchScores}
          showFeatures={showFeatures}
          onProductClick={onProductClick}
        />
      ) : (
        <div className="admesh-layout__cards-container">
          {/* Header for cards layout */}
          <div className="admesh-layout__header">
            <h3 className="admesh-layout__title admesh-text-xl admesh-font-semibold">
              Recommended Products
            </h3>
            <p className="admesh-layout__subtitle admesh-text-sm admesh-text-muted">
              {displayRecommendations.length} product{displayRecommendations.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Cards grid */}
          <div className="admesh-layout__cards-grid">
            {displayRecommendations.map((recommendation, index) => (
              <AdMeshProductCard
                key={recommendation.product_id || recommendation.ad_id || index}
                recommendation={recommendation}
                theme={theme}
                showMatchScore={showMatchScores}
                showBadges={true}
                maxKeywords={3}
                onClick={onProductClick}
                onTrackView={onTrackView}
              />
            ))}
          </div>

          {/* Show more indicator if there are more recommendations */}
          {recommendations.length > maxDisplayed && (
            <div className="admesh-layout__more-indicator">
              <p className="admesh-text-sm admesh-text-muted">
                Showing {maxDisplayed} of {recommendations.length} recommendations
              </p>
            </div>
          )}

          {/* Powered by AdMesh branding */}
          <div className="flex items-center justify-center mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
            <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
              <svg className="w-3 h-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Powered by</span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">AdMesh</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

AdMeshLayout.displayName = 'AdMeshLayout';
