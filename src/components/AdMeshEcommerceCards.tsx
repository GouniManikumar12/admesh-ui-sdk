import React from 'react';
import classNames from 'classnames';
import type { AdMeshRecommendation, EcommerceProduct } from '../types/index';

export interface AdMeshEcommerceCardsProps {
  recommendations: AdMeshRecommendation[]; // Required: unified schema recommendations
  title?: string;
  showTitle?: boolean;
  className?: string;
  cardClassName?: string;
  onProductClick?: (product: AdMeshRecommendation) => void;
  showPricing?: boolean;
  showRatings?: boolean;
  showBrand?: boolean;
  showSource?: boolean;
  showShipping?: boolean;
  maxCards?: number;
  cardWidth?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark' | 'auto';
  borderRadius?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

export const AdMeshEcommerceCards: React.FC<AdMeshEcommerceCardsProps> = ({
  recommendations,
  title = "Product Recommendations",
  showTitle = true,
  className = "",
  cardClassName = "",
  onProductClick,
  showPricing = true,
  showRatings = true,
  showBrand = true,
  showSource = false,
  showShipping = true,
  maxCards = 10,
  cardWidth = 'md',
  theme = 'auto',
  borderRadius = 'md',
  shadow = 'sm'
}) => {
  // Validate recommendations - silently return null if empty
  if (!recommendations || recommendations.length === 0) {
    console.log('[AdMesh Ecommerce Cards] Empty recommendations - not rendering anything');
    return null;
  }

  const displayItems: AdMeshRecommendation[] = recommendations.slice(0, maxCards);



  const getCardWidthClass = () => {
    switch (cardWidth) {
      case 'sm': return 'w-48 min-w-48';
      case 'md': return 'w-64 min-w-64';
      case 'lg': return 'w-80 min-w-80';
      default: return 'w-64 min-w-64';
    }
  };

  const getBorderRadiusClass = () => {
    switch (borderRadius) {
      case 'none': return 'rounded-none';
      case 'sm': return 'rounded-sm';
      case 'md': return 'rounded-lg';
      case 'lg': return 'rounded-xl';
      default: return 'rounded-lg';
    }
  };

  const getShadowClass = () => {
    switch (shadow) {
      case 'none': return '';
      case 'sm': return 'shadow-sm hover:shadow-md';
      case 'md': return 'shadow-md hover:shadow-lg';
      case 'lg': return 'shadow-lg hover:shadow-xl';
      default: return 'shadow-sm hover:shadow-md';
    }
  };

  const getThemeClasses = () => {
    if (theme === 'dark') {
      return 'bg-gray-900 text-white';
    } else if (theme === 'light') {
      return 'bg-white text-gray-900';
    }
    return 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white';
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">★</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">☆</span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300 dark:text-gray-600">☆</span>
      );
    }

    return stars;
  };

  const handleProductClick = (item: EcommerceProduct | AdMeshRecommendation) => {
    if (onProductClick) {
      onProductClick(item);
    } else {
      // Default behavior: open product link
      const link = item.admesh_link || item.url;
      if (link) {
        window.open(link, '_blank', 'noopener,noreferrer');
      }
    }
  };

  // Check if we have any data to display
  if ((!products || products.length === 0) && (!recommendations || recommendations.length === 0)) {
    return null;
  }

  return (
    <div className={classNames('w-full', className)}>
      {showTitle && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <div className="mt-1 h-0.5 w-12 bg-blue-500"></div>
        </div>
      )}
      
      <div className="relative">
        {displayItems.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No products to display
          </div>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {displayItems.map((item) => {
              // Get the appropriate ID for the key
              const itemId = (item as any).product_id || (item as any).id || (item as any).ad_id;

              return (
                <div
                  key={itemId}
                  className={classNames(
                    getCardWidthClass(),
                    getBorderRadiusClass(),
                    getShadowClass(),
                    getThemeClasses(),
                    'flex-shrink-0 border border-gray-200 dark:border-gray-700 transition-all duration-200 cursor-pointer hover:scale-[1.02]',
                    cardClassName
                  )}
                  onClick={() => handleProductClick(item)}
                >
              {/* Product Image */}
              <div className="relative aspect-square w-full overflow-hidden">
                {item.image_url ? (
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}

                {/* Discount Badge */}
                {showPricing && item.discount_percentage && item.discount_percentage > 0 && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{Math.round(item.discount_percentage)}%
                  </div>
                )}

                {/* Source Badge */}
                {showSource && item.source && (
                  <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">
                    {item.source.toUpperCase()}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-3">
                {/* Brand */}
                {showBrand && item.brand && (
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
                    {item.brand}
                  </div>
                )}

                {/* Title */}
                <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-2 leading-tight">
                  {item.title}
                </h4>

                {/* Rating */}
                {showRatings && item.rating && (
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-sm">
                      {renderStars(item.rating)}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({item.review_count || 0})
                    </span>
                  </div>
                )}

                {/* Pricing */}
                {showPricing && item.price && (
                  <div className="mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        {formatPrice(item.price)}
                      </span>
                      {item.original_price && item.original_price > item.price && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                          {formatPrice(item.original_price)}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Shipping Info */}
                {showShipping && item.shipping_info?.free_shipping_over_35 && (
                  <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                    Free shipping over $35
                  </div>
                )}

                {/* Availability */}
                {item.availability && item.availability !== 'unknown' && (
                  <div className={classNames(
                    'text-xs font-medium mt-1',
                    item.availability === 'in_stock'
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-red-600 dark:text-red-400'
                  )}>
                    {item.availability === 'in_stock' ? 'In Stock' : 'Out of Stock'}
                  </div>
                )}
              </div>
            </div>
              );
            })}
          </div>
        )}

        {/* Scroll Indicators - only show when there are products */}
        {displayItems.length > 0 && (
          <>
            <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full shadow-lg p-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full shadow-lg p-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </>
        )}
      </div>

      {/* Disclosure */}
      <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Sponsored
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500">
          
        </span>
      </div>

      {/* Custom scrollbar styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `
      }} />
    </div>
  );
};

export default AdMeshEcommerceCards;
