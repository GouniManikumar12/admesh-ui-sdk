import React from 'react';
import type { AdMeshLayoutProps, AdMeshRecommendation } from '../types/index';
import { AdMeshSummaryLayout } from './AdMeshSummaryLayout';

export const AdMeshLayout: React.FC<AdMeshLayoutProps> = ({
  // Legacy props (for backward compatibility)
  recommendations = [],
  citationSummary,
  layout,

  // New response object (preferred)
  response,

  // Styling
  theme,
  className,
  style,

  // Behavior
  onRecommendationClick,
  onLinkClick
}) => {
  // Convert legacy callback to new format
  const handleRecommendationClick = onRecommendationClick ?
    (rec: AdMeshRecommendation) => onRecommendationClick(
      rec.meta?.ad_id || rec.ad_id || '',
      rec.admesh_link || ''
    ) :
    undefined;

  // If response object is provided, use the new AdMeshSummaryLayout
  if (response) {
    return (
      <AdMeshSummaryLayout
        response={response}
        theme={theme}
        className={className}
        style={style}
        onRecommendationClick={handleRecommendationClick}
        onLinkClick={onLinkClick}
      />
    );
  }

  // Legacy support: convert old props to response format
  const legacyResponse = {
    layout_type: layout || 'citation',
    citation_summary: citationSummary,
    recommendations: recommendations,
    requires_summary: !!citationSummary
  };

  return (
    <AdMeshSummaryLayout
      response={legacyResponse}
      theme={theme}
      className={className}
      style={style}
      onRecommendationClick={handleRecommendationClick}
      onLinkClick={onLinkClick}
    />
  );
};

export default AdMeshLayout;
