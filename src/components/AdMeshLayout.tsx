import React from 'react';
import type { AdMeshLayoutProps, AdMeshRecommendation } from '../types/index';
import { AdMeshSummaryLayout } from './AdMeshSummaryLayout';

export const AdMeshLayout: React.FC<AdMeshLayoutProps> = ({
  // Backend response object (required)
  response,

  // Styling
  theme,
  className,
  style,

  // Behavior
  onRecommendationClick,
  onLinkClick
}) => {
  // Validate that response is provided
  if (!response) {
    console.error('[AdMeshLayout] response prop is required');
    return (
      <div className={`admesh-layout-error ${className}`} style={style}>
        <div className="text-center py-6 px-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            No response data provided
          </p>
        </div>
      </div>
    );
  }

  return (
    <AdMeshSummaryLayout
      response={response}
      theme={theme}
      className={className}
      style={style}
      onRecommendationClick={onRecommendationClick}
      onLinkClick={onLinkClick}
    />
  );
};

export default AdMeshLayout;
