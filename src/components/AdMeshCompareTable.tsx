import React, { useMemo } from 'react';
import classNames from 'classnames';
import type { AdMeshCompareTableProps } from '../types/index';
import { AdMeshBadge } from './AdMeshBadge';
import { AdMeshLinkTracker } from './AdMeshLinkTracker';

export const AdMeshCompareTable: React.FC<AdMeshCompareTableProps> = ({
  recommendations,
  theme,
  maxProducts = 3,
  showMatchScores = true,
  showFeatures = true,
  onProductClick,
  className
}) => {
  // Limit the number of products to compare
  const productsToCompare = useMemo(() => {
    return recommendations.slice(0, maxProducts);
  }, [recommendations, maxProducts]);

  // Extract all unique features across products
  const allFeatures = useMemo(() => {
    const featuresSet = new Set<string>();
    productsToCompare.forEach(product => {
      product.features?.forEach(feature => featuresSet.add(feature));
    });
    return Array.from(featuresSet).slice(0, 8); // Limit to 8 features for readability
  }, [productsToCompare]);

  const tableClasses = classNames(
    'admesh-component',
    'admesh-compare-table',
    {
      [`admesh-compare-table--${theme?.mode}`]: theme?.mode,
    },
    className
  );

  const tableStyle = theme?.accentColor ? {
    '--admesh-primary': theme.accentColor,
  } as React.CSSProperties : undefined;

  if (productsToCompare.length === 0) {
    return (
      <div className={tableClasses}>
        <div className="admesh-compare-table__empty">
          <p className="admesh-text-muted">No products to compare</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={tableClasses}
      style={tableStyle}
      data-admesh-theme={theme?.mode}
    >
      <div className="admesh-compare-table__container">
        <div className="admesh-compare-table__header">
          <h3 className="admesh-compare-table__title admesh-text-xl admesh-font-semibold">
            Product Comparison
          </h3>
          <p className="admesh-compare-table__subtitle admesh-text-sm admesh-text-muted">
            Compare {productsToCompare.length} products side by side
          </p>
        </div>

        <div className="admesh-compare-table__scroll-container">
          <table className="admesh-compare-table__table">
            <thead>
              <tr>
                <th className="admesh-compare-table__row-header">
                  <span className="admesh-sr-only">Feature</span>
                </th>
                {productsToCompare.map((product, index) => (
                  <th key={product.product_id || index} className="admesh-compare-table__product-header">
                    <AdMeshLinkTracker
                      adId={product.ad_id}
                      admeshLink={product.admesh_link}
                      productId={product.product_id}
                      onClick={() => onProductClick?.(product.ad_id, product.admesh_link)}
                      className="admesh-compare-table__product-header-content"
                    >
                      <div className="admesh-compare-table__product-title">
                        <h4 className="admesh-text-base admesh-font-semibold admesh-truncate">
                          {product.title}
                        </h4>
                        {showMatchScores && (
                          <div className="admesh-compare-table__match-score">
                            <span className="admesh-text-xs admesh-text-muted">
                              {Math.round(product.intent_match_score * 100)}% match
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Badges */}
                      <div className="admesh-compare-table__badges">
                        {product.has_free_tier && (
                          <AdMeshBadge type="Free Tier" size="sm" />
                        )}
                        {product.trial_days && product.trial_days > 0 && (
                          <AdMeshBadge type="Trial Available" size="sm" />
                        )}
                        {product.intent_match_score >= 0.8 && (
                          <AdMeshBadge type="Top Match" size="sm" />
                        )}
                      </div>

                      <button className="admesh-button admesh-button--primary admesh-button--sm admesh-compare-table__cta">
                        Visit Offer
                      </button>
                    </AdMeshLinkTracker>
                  </th>
                ))}
              </tr>
            </thead>
            
            <tbody>
              {/* Pricing row */}
              <tr>
                <td className="admesh-compare-table__row-header admesh-font-medium">
                  Pricing
                </td>
                {productsToCompare.map((product, index) => (
                  <td key={product.product_id || index} className="admesh-compare-table__cell">
                    <span className="admesh-text-sm">
                      {product.pricing || 'Contact for pricing'}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Trial period row */}
              <tr>
                <td className="admesh-compare-table__row-header admesh-font-medium">
                  Free Trial
                </td>
                {productsToCompare.map((product, index) => (
                  <td key={product.product_id || index} className="admesh-compare-table__cell">
                    <span className="admesh-text-sm">
                      {product.trial_days ? `${product.trial_days} days` : 'No trial'}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Features rows */}
              {showFeatures && allFeatures.map((feature, featureIndex) => (
                <tr key={featureIndex}>
                  <td className="admesh-compare-table__row-header admesh-font-medium">
                    {feature}
                  </td>
                  {productsToCompare.map((product, productIndex) => (
                    <td key={product.product_id || productIndex} className="admesh-compare-table__cell">
                      <span className="admesh-text-sm">
                        {product.features?.includes(feature) ? (
                          <span className="admesh-compare-table__check">✓</span>
                        ) : (
                          <span className="admesh-compare-table__cross">—</span>
                        )}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}

              {/* Keywords row */}
              <tr>
                <td className="admesh-compare-table__row-header admesh-font-medium">
                  Keywords
                </td>
                {productsToCompare.map((product, index) => (
                  <td key={product.product_id || index} className="admesh-compare-table__cell">
                    <div className="admesh-compare-table__keywords">
                      {product.keywords?.slice(0, 3).map((keyword, keywordIndex) => (
                        <span 
                          key={keywordIndex}
                          className="admesh-badge admesh-badge--secondary admesh-badge--sm"
                        >
                          {keyword}
                        </span>
                      ))}
                      {(product.keywords?.length || 0) > 3 && (
                        <span className="admesh-text-xs admesh-text-muted">
                          +{(product.keywords?.length || 0) - 3}
                        </span>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

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
  );
};

AdMeshCompareTable.displayName = 'AdMeshCompareTable';
