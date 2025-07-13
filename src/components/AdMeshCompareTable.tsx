import React, { useMemo } from 'react';
import classNames from 'classnames';
import type { AdMeshCompareTableProps } from '../types/index';
import { AdMeshLinkTracker } from './AdMeshLinkTracker';
import { useAdMeshStyles } from '../hooks/useAdMeshStyles';

export const AdMeshCompareTable: React.FC<AdMeshCompareTableProps> = ({
  recommendations,
  theme,
  maxProducts = 3,
  showMatchScores = true,
  showFeatures = true,
  className,
  style
}) => {
  // Inject styles automatically
  useAdMeshStyles();

  // Limit the number of products to compare
  const productsToCompare = useMemo(() => {
    return recommendations.slice(0, maxProducts);
  }, [recommendations, maxProducts]);



  const containerClasses = classNames(
    'admesh-component',
    'admesh-compare-layout',
    className
  );

  const containerStyle = theme?.accentColor ? {
    '--admesh-primary': theme.accentColor,
  } as React.CSSProperties : undefined;

  if (productsToCompare.length === 0) {
    return (
      <div
        className={containerClasses}
        style={{
          ...containerStyle,
          fontFamily: theme?.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          ...theme?.components?.compareTable,
          ...style
        }}
        data-admesh-theme={theme?.mode}
      >
        <div className="p-8 text-center text-gray-500 dark:text-gray-400">
          <p>No products to compare</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={containerClasses}
      style={{
        ...containerStyle,
        fontFamily: theme?.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        ...theme?.components?.compareTable,
        ...style
      }}
      data-admesh-theme={theme?.mode}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Smart Comparison
            </h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {productsToCompare.length} intelligent matches found
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productsToCompare.map((product, index) => (
            <div
              key={product.product_id || index}
              className="relative p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow transition-shadow"
            >
              {/* Product Header */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  {index === 0 && (
                    <span className="text-xs font-semibold text-white bg-black px-2 py-0.5 rounded-full">
                      Top Match
                    </span>
                  )}
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    #{index + 1}
                  </span>
                </div>
                {showMatchScores && (
                  <div className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {Math.round(product.intent_match_score * 100)}% match
                  </div>
                )}
              </div>

              {/* Product Title */}
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {product.title}
              </h4>

              {/* Match Score */}
              {showMatchScores && (
                <div className="mb-3">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                    <span>Match Score</span>
                    <span className="whitespace-nowrap">{Math.round(product.intent_match_score * 100)}% match</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-600 rounded h-1.5 overflow-hidden">
                    <div
                      className="bg-black h-1.5"
                      style={{ width: `${Math.round(product.intent_match_score * 100)}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Pricing and Trial Info */}
              <div className="flex flex-wrap gap-2 text-xs mb-3">
                {product.pricing && (
                  <span className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    {product.pricing}
                  </span>
                )}



                {product.trial_days && product.trial_days > 0 && (
                  <span className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m6-10v10m-6 0h6" />
                    </svg>
                    {product.trial_days}-day trial
                  </span>
                )}
              </div>

              {/* Features */}
              {showFeatures && product.features && product.features.length > 0 && (
                <div className="mb-3">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Key Features:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.features.slice(0, 4).map((feature, j) => (
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
                    {(product.features.length || 0) > 4 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 italic">
                        +{product.features.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Visit Button */}
              <AdMeshLinkTracker
                adId={product.ad_id}
                admeshLink={product.admesh_link}
                productId={product.product_id}
                trackingData={{
                  title: product.title,
                  matchScore: product.intent_match_score,
                  component: 'compare_table_cta'
                }}
              >
                <button className="w-full text-xs px-3 py-2 rounded-lg bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-1 mt-auto transition-colors">
                  Visit Offer
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </AdMeshLinkTracker>
            </div>
          ))}
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
