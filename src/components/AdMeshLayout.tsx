import React, { useMemo } from 'react';
import classNames from 'classnames';
import type { AdMeshLayoutProps, IntentType, AdMeshRecommendation } from '../types/index';
import { AdMeshProductCard } from './AdMeshProductCard';
import { AdMeshCompareTable } from './AdMeshCompareTable';
import { useAdMeshStyles } from '../hooks/useAdMeshStyles';

// Layout selection logic based on intent type and data characteristics
const selectOptimalLayout = (
  recommendations: AdMeshRecommendation[],
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
  // Auto-inject styles
  useAdMeshStyles();

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
            <div className="flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="admesh-text-lg admesh-font-semibold admesh-text-muted">
              No smart recommendations found
            </h3>
            <p className="admesh-text-sm admesh-text-muted">
              Try refining your search or check back later for new matches.
            </p>
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
        <div className="space-y-4">
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
      )}
    </div>
  );
};

AdMeshLayout.displayName = 'AdMeshLayout';
