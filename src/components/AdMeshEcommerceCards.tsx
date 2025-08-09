import React from 'react';
import classNames from 'classnames';

export interface EcommerceProduct {
  id: string;
  title: string;
  price?: number;
  original_price?: number;
  discount_percentage?: number;
  image_url?: string;
  brand?: string;
  rating?: number;
  review_count?: number;
  url: string;
  source?: 'walmart' | 'admesh' | string;
  availability?: string;
  shipping_info?: {
    free_shipping_over_35?: boolean;
    standard_rate?: number;
    two_day_rate?: number;
  };
  description?: string;
  admesh_link?: string;
}

export interface AdMeshEcommerceCardsProps {
  products: EcommerceProduct[];
  title?: string;
  showTitle?: boolean;
  className?: string;
  cardClassName?: string;
  onProductClick?: (product: EcommerceProduct) => void;
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
  products,
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
  const displayProducts = products.slice(0, maxCards);

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

  const handleProductClick = (product: EcommerceProduct) => {
    if (onProductClick) {
      onProductClick(product);
    } else {
      // Default behavior: open product link
      const link = product.admesh_link || product.url;
      if (link) {
        window.open(link, '_blank', 'noopener,noreferrer');
      }
    }
  };

  if (!products || products.length === 0) {
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
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {displayProducts.map((product) => (
            <div
              key={product.id}
              className={classNames(
                getCardWidthClass(),
                getBorderRadiusClass(),
                getShadowClass(),
                getThemeClasses(),
                'flex-shrink-0 border border-gray-200 dark:border-gray-700 transition-all duration-200 cursor-pointer hover:scale-[1.02]',
                cardClassName
              )}
              onClick={() => handleProductClick(product)}
            >
              {/* Product Image */}
              <div className="relative aspect-square w-full overflow-hidden">
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={product.title}
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
                {showPricing && product.discount_percentage && product.discount_percentage > 0 && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{Math.round(product.discount_percentage)}%
                  </div>
                )}

                {/* Source Badge */}
                {showSource && product.source && (
                  <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">
                    {product.source.toUpperCase()}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-3">
                {/* Brand */}
                {showBrand && product.brand && (
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
                    {product.brand}
                  </div>
                )}

                {/* Title */}
                <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-2 leading-tight">
                  {product.title}
                </h4>

                {/* Rating */}
                {showRatings && product.rating && (
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-sm">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({product.review_count || 0})
                    </span>
                  </div>
                )}

                {/* Pricing */}
                {showPricing && product.price && (
                  <div className="mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        {formatPrice(product.price)}
                      </span>
                      {product.original_price && product.original_price > product.price && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                          {formatPrice(product.original_price)}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Shipping Info */}
                {showShipping && product.shipping_info?.free_shipping_over_35 && (
                  <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                    Free shipping over $35
                  </div>
                )}

                {/* Availability */}
                {product.availability && product.availability !== 'unknown' && (
                  <div className={classNames(
                    'text-xs font-medium mt-1',
                    product.availability === 'in_stock' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  )}>
                    {product.availability === 'in_stock' ? 'In Stock' : 'Out of Stock'}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicators */}
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
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default AdMeshEcommerceCards;
