import React from 'react';
import type { AdMeshRecommendation, AdMeshTheme } from '../types/index';
import { AdMeshSummaryUnit } from './AdMeshSummaryUnit';
import { AdMeshProductCard } from './AdMeshProductCard';
import { AdMeshEcommerceCards } from './AdMeshEcommerceCards';

export interface AdMeshSummaryLayoutProps {
  // Backend response data
  response: {
    layout_type?: string; // "citation", "product_cards", "ecommerce"
    citation_summary?: string; // LLM-generated summary with embedded links
    recommendations?: AdMeshRecommendation[];
    requires_summary?: boolean;
  };
  
  // Styling
  theme?: AdMeshTheme;
  className?: string;
  style?: React.CSSProperties;
  
  // Behavior
  onRecommendationClick?: (recommendation: AdMeshRecommendation) => void;
  onLinkClick?: (recommendation: AdMeshRecommendation) => void;
}

// Validate response object
const validateResponse = (response: any) => {
  const warnings: string[] = [];

  if (!response) {
    return { isValid: false, isEmpty: true, warnings: ['No response object provided'] };
  }

  if (!response.recommendations || !Array.isArray(response.recommendations)) {
    warnings.push('No recommendations array found in response');
  }

  if (response.layout_type === 'citation' && !response.citation_summary) {
    warnings.push('Citation layout specified but no citation_summary provided');
  }

  const validRecommendations = response.recommendations?.filter((rec: any) =>
    rec && rec.admesh_link && (rec.title || rec.recommendation_title)
  ) || [];

  // Check if this is an intentionally empty response (e.g., geo-restricted)
  const isEmpty = response.recommendations?.length === 0;

  if (validRecommendations.length === 0 && !isEmpty) {
    warnings.push('No valid recommendations found (missing admesh_link or title)');
  }

  return {
    isValid: validRecommendations.length > 0,
    isEmpty: isEmpty,
    validCount: validRecommendations.length,
    totalCount: response.recommendations?.length || 0,
    warnings
  };
};

export const AdMeshSummaryLayout: React.FC<AdMeshSummaryLayoutProps> = ({
  response,
  theme,
  className = '',
  style = {},
  onRecommendationClick,
  onLinkClick
}) => {
  // Validate response
  const validation = validateResponse(response);

  if (validation.warnings.length > 0) {
    console.warn('[AdMesh Summary Layout] Validation warnings:', validation.warnings);
  }

  // If recommendations array is empty (e.g., geo-restricted), silently return null
  if (validation.isEmpty) {
    console.log('[AdMesh Summary Layout] Empty recommendations array - not rendering anything');
    return null;
  }

  if (!validation.isValid) {
    console.error('[AdMesh Summary Layout] Invalid response object');
    // Silently return null instead of showing error message
    return null;
  }
  
  // Extract data from response
  const {
    layout_type = 'citation',
    citation_summary,
    recommendations = [],
    requires_summary = true
  } = response;
  
  console.log(`[AdMesh Summary Layout] Rendering ${layout_type} layout with ${validation.validCount}/${validation.totalCount} valid recommendations`);
  
  // Render based on layout type
  const renderContent = () => {
    switch (layout_type) {
      case 'citation':
        // Show summary if available and required
        if (citation_summary && requires_summary) {
          return (
            <AdMeshSummaryUnit
              summaryText={citation_summary}
              recommendations={recommendations}
              theme={theme}
              onLinkClick={onLinkClick}
            />
          );
        }
        // Fallback to first recommendation if no summary
        return (
          <div className="fallback-citation">
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Based on your query, I'd recommend checking out these options:
            </p>
            <AdMeshProductCard
              recommendation={recommendations[0]}
              theme={theme}
            />
          </div>
        );
        
      case 'product_cards':
      case 'product':
        return (
          <div className="product-cards-layout">
            {recommendations.slice(0, 3).map((rec, index) => (
              <AdMeshProductCard
                key={rec.ad_id || `rec-${index}`}
                recommendation={rec}
                theme={theme}
                className="mb-4"
              />
            ))}
          </div>
        );

      case 'ecommerce':
        return (
          <AdMeshEcommerceCards
            recommendations={recommendations.slice(0, 3)}
            theme={theme?.mode || 'light'}
          />
        );
        
      default:
        console.warn(`[AdMesh Summary Layout] Unknown layout type: ${layout_type}`);
        // Default to summary if available, otherwise product cards
        if (citation_summary) {
          return (
            <AdMeshSummaryUnit
              summaryText={citation_summary}
              recommendations={recommendations}
              theme={theme}
              onLinkClick={onLinkClick}
            />
          );
        }
        return (
          <AdMeshProductCard
            recommendation={recommendations[0]}
            theme={theme}
          />
        );
    }
  };
  
  return (
    <div 
      className={`admesh-summary-layout admesh-layout-${layout_type} ${className}`}
      style={{
        fontFamily: theme?.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        ...style
      }}
    >
      {renderContent()}
    </div>
  );
};

export default AdMeshSummaryLayout;
