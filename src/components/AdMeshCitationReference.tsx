import React, { useState } from 'react';
import classNames from 'classnames';
import type { AdMeshCitationReferenceProps } from '../types/index';
import { AdMeshLinkTracker } from './AdMeshLinkTracker';

export const AdMeshCitationReference: React.FC<AdMeshCitationReferenceProps> = ({
  recommendation,
  citationNumber,
  citationStyle = 'numbered',
  theme,
  showTooltip = true,
  onHover,
  className,
  style
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover?.(recommendation);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };



  // Generate citation display based on style
  const getCitationDisplay = () => {
    switch (citationStyle) {
      case 'bracketed':
        return `[${citationNumber}]`;
      case 'superscript':
        return citationNumber.toString();
      case 'numbered':
      default:
        return citationNumber.toString();
    }
  };

  const citationClasses = classNames(
    'admesh-citation-reference',
    'inline-flex items-center justify-center',
    'cursor-pointer transition-all duration-200',
    'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300',
    'font-medium',
    {
      // Numbered style (default)
      'w-5 h-5 bg-blue-100 dark:bg-blue-900/30 rounded-full text-xs border border-blue-300 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-900/50': citationStyle === 'numbered',
      
      // Bracketed style
      'px-1 text-sm hover:underline': citationStyle === 'bracketed',
      
      // Superscript style
      'text-xs align-super hover:underline': citationStyle === 'superscript',
    },
    className
  );

  const containerStyle = theme?.accentColor ? {
    '--admesh-primary': theme.accentColor,
  } as React.CSSProperties : undefined;

  return (
    <span className="relative inline-block">
      <AdMeshLinkTracker
        adId={recommendation.ad_id}
        admeshLink={recommendation.admesh_link}
        productId={recommendation.product_id}
        trackingData={{
          title: recommendation.title,
          matchScore: recommendation.intent_match_score,
          citationNumber,
          citationStyle
        }}
        className={citationClasses}
        style={style}
      >
        <span
          style={containerStyle}
          data-admesh-theme={theme?.mode}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {getCitationDisplay()}
        </span>
      </AdMeshLinkTracker>

      {/* Tooltip */}
      {showTooltip && isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50">
          <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg px-3 py-2 shadow-lg max-w-xs">
            <div className="font-semibold mb-1">{recommendation.title}</div>
            {recommendation.reason && (
              <div className="text-gray-300 dark:text-gray-600 text-xs">
                {recommendation.reason.length > 100 
                  ? `${recommendation.reason.substring(0, 100)}...` 
                  : recommendation.reason
                }
              </div>
            )}
            {recommendation.intent_match_score >= 0.7 && (
              <div className="text-green-400 dark:text-green-600 text-xs mt-1">
                {Math.round(recommendation.intent_match_score * 100)}% match
              </div>
            )}
            <div className="text-gray-400 dark:text-gray-500 text-xs mt-1 italic">
              Click to visit product page
            </div>
            {/* Tooltip arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
          </div>
        </div>
      )}
    </span>
  );
};
