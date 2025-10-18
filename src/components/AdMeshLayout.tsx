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
    // Silently return null instead of showing error
    return null;
  }

  // Check if recommendations array is empty (e.g., geo-restricted)
  if (response.recommendations && Array.isArray(response.recommendations) && response.recommendations.length === 0) {
    console.log('[AdMeshLayout] Empty recommendations array - not rendering anything');
    return null;
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
