import React, { useMemo } from 'react';
import classNames from 'classnames';
import type { AdMeshLayoutProps } from '../types/index';
import { AdMeshProductCard } from './AdMeshProductCard';
import { AdMeshInlineCard } from './AdMeshInlineCard';
import { AdMeshCitationUnit } from './AdMeshCitationUnit';
import { AdMeshEcommerceCards } from './AdMeshEcommerceCards';

// Helper function to get default title based on layout
const getTitleForLayout = (layoutType: string) => {
  switch (layoutType) {
    case 'citation': return 'Recommendations';
    case 'inline': return 'Recommendations';
    case 'ecommerce': return 'Featured Products';
    case 'product': return 'Suggested Solutions';
    default: return 'Recommendations';
  }
};

export const AdMeshLayout: React.FC<AdMeshLayoutProps> = ({
  recommendations = [],
  conversationTextLinks,
  layout, // Required: Backend specifies the layout
  layoutConfig, // Backend-controlled styling
  theme,
  className,
  style,

  // Layout configuration
  maxItems, // Will be set based on layout type
  columns = 'auto',
  spacing = 'md',
  showTitle = true,
  title,

  // Component-specific props
  productCardProps = {},
  citationUnitProps = {},
  ecommerceCardsProps = {},

  // Behavior
  onRecommendationClick,
  onProductClick,
  onCitationHover
}) => {
  // Separate recommendations by source
  const { admeshRecommendations, walmartRecommendations } = useMemo(() => {
    const admesh = recommendations.filter(rec => !rec.recommendation_source || rec.recommendation_source === 'admesh');
    const walmart = recommendations.filter(rec => rec.recommendation_source === 'walmart');

    return {
      admeshRecommendations: admesh,
      walmartRecommendations: walmart
    };
  }, [recommendations]);

  // Auto-detect layout based on recommendation source if not explicitly provided
  const effectiveLayout = useMemo(() => {
    if (layout) return layout; // Use explicit layout if provided

    // Auto-detect based on source
    const hasWalmartProducts = recommendations.some(rec =>
      rec.source === 'walmart' || rec.recommendation_source === 'walmart'
    );

    return hasWalmartProducts ? 'ecommerce' : 'product';
  }, [layout, recommendations]);

  // Set default maxItems based on layout type
  const effectiveMaxItems = useMemo(() => {
    if (maxItems !== undefined) return maxItems;

    // Default numberOfItems: 1 for layout, 3 for ecommerce
    switch (effectiveLayout) {
      case 'ecommerce':
        return 3;
      case 'product':
      case 'inline':
      case 'citation':
      default:
        return 1;
    }
  }, [maxItems, effectiveLayout]);

  // Generate dynamic styles from layoutConfig
  const dynamicStyles = useMemo(() => {
    if (!layoutConfig) return {};

    const styles: React.CSSProperties = {};

    if (layoutConfig.backgroundColor) styles.backgroundColor = layoutConfig.backgroundColor;
    if (layoutConfig.textColor) styles.color = layoutConfig.textColor;
    if (layoutConfig.borderColor) styles.borderColor = layoutConfig.borderColor;
    if (layoutConfig.borderRadius) styles.borderRadius = layoutConfig.borderRadius;
    if (layoutConfig.fontSize) styles.fontSize = layoutConfig.fontSize;
    if (layoutConfig.fontFamily) styles.fontFamily = layoutConfig.fontFamily;
    if (layoutConfig.fontWeight) styles.fontWeight = layoutConfig.fontWeight;
    if (layoutConfig.lineHeight) styles.lineHeight = layoutConfig.lineHeight;
    if (layoutConfig.padding) styles.padding = layoutConfig.padding;
    if (layoutConfig.margin) styles.margin = layoutConfig.margin;
    if (layoutConfig.shadow) styles.boxShadow = layoutConfig.shadow;

    return styles;
  }, [layoutConfig]);

  // Generate CSS custom properties for child components
  const cssVariables = useMemo(() => {
    if (!layoutConfig) return {};

    const variables: Record<string, string> = {};

    if (layoutConfig.primaryColor) variables['--admesh-primary-color'] = layoutConfig.primaryColor;
    if (layoutConfig.secondaryColor) variables['--admesh-secondary-color'] = layoutConfig.secondaryColor;
    if (layoutConfig.accentColor) variables['--admesh-accent-color'] = layoutConfig.accentColor;
    if (layoutConfig.linkColor) variables['--admesh-link-color'] = layoutConfig.linkColor;
    if (layoutConfig.hoverColor) variables['--admesh-hover-color'] = layoutConfig.hoverColor;
    if (layoutConfig.borderColor) variables['--admesh-border-color'] = layoutConfig.borderColor;
    if (layoutConfig.textColor) variables['--admesh-text-color'] = layoutConfig.textColor;

    return variables;
  }, [layoutConfig]);

  // Filter and limit items based on effectiveMaxItems
  const limitedAdmeshRecommendations = useMemo(() => {
    return admeshRecommendations.slice(0, effectiveMaxItems);
  }, [admeshRecommendations, effectiveMaxItems]);

  const limitedWalmartRecommendations = useMemo(() => {
    return walmartRecommendations.slice(0, effectiveMaxItems);
  }, [walmartRecommendations, effectiveMaxItems]);

  // Generate grid classes based on columns, spacing, and numberOfItems
  const gridClasses = useMemo(() => {
    const baseClasses = 'grid gap-4';

    // For product layout, use grid; for inline/citation, spacing blocks
    let columnClasses = '';
    if (layout === 'product') {
      if (effectiveMaxItems === 1) {
        columnClasses = 'grid-cols-1';
      } else if (columns === 'auto') {
        columnClasses = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      } else if (typeof columns === 'number') {
        columnClasses = `grid-cols-1 sm:grid-cols-${Math.min(columns, 2)} lg:grid-cols-${columns}`;
      } else {
        columnClasses = columns as string;
      }
    } else {
      columnClasses = 'grid-cols-1';
    }

    let spacingClasses = '';
    switch (spacing) {
      case 'sm': spacingClasses = 'gap-2'; break;
      case 'md': spacingClasses = 'gap-4'; break;
      case 'lg': spacingClasses = 'gap-6'; break;
      case 'xl': spacingClasses = 'gap-8'; break;
      default: spacingClasses = spacing as string;
    }

    return `${baseClasses} ${columnClasses} ${spacingClasses}`;
  }, [columns, spacing, effectiveMaxItems, layout]);

  // Render title if enabled
  const renderTitle = () => {
    if (!showTitle) return null;

    const titleText = title || getTitleForLayout(layout);

    return (
      <h2
        className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4"
        style={{
          color: layoutConfig?.textColor,
          fontSize: layoutConfig?.fontSize,
          fontFamily: layoutConfig?.fontFamily,
          fontWeight: layoutConfig?.fontWeight
        }}
      >
        {titleText}
      </h2>
    );
  };

  // Render content based on effective layout (auto-detected or explicit)
  const renderContent = () => {
    switch (effectiveLayout) {
      case 'citation':
        return (
          <AdMeshCitationUnit
            recommendations={recommendations}
            conversationTextLinks={conversationTextLinks}
            theme={theme}
            onCitationHover={onCitationHover}
            {...citationUnitProps}
          />
        );
        
      case 'ecommerce':
        return (
          <AdMeshEcommerceCards
            recommendations={recommendations.slice(0, effectiveMaxItems)}
            theme={theme?.mode || 'auto'}
            onProductClick={onProductClick}
            {...ecommerceCardsProps}
          />
        );
        
      case 'product':
        return (
          <div className={gridClasses}>
            {limitedAdmeshRecommendations.map((recommendation, index) => (
              <AdMeshProductCard
                key={recommendation.ad_id || index}
                recommendation={recommendation}
                theme={theme}
                {...productCardProps}
              />
            ))}
          </div>
        );

      case 'inline':
        // Inline layout using compact inline card style
        return (
          <div className="space-y-3">
            {limitedAdmeshRecommendations.map((recommendation, index) => (
              <AdMeshInlineCard
                key={recommendation.ad_id || index}
                recommendation={recommendation}
                theme={theme}
              />
            ))}
          </div>
        );

      default:
        return (
          <div className="text-gray-500 dark:text-gray-400 text-center py-8">
            No content to display
          </div>
        );
    }
  };



  // Combine all styles
  const combinedStyles = {
    fontFamily: theme?.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    // Ensure consistent width: 100% for all layouts except ecommerce
    width: layout === 'ecommerce' ? 'auto' : '100%',
    ...dynamicStyles,
    ...cssVariables,
    ...style
  };

  return (
    <div
      className={classNames(
        'admesh-layout',
        `admesh-layout--${layout}`,
        {
          'admesh-layout--dark': theme?.mode === 'dark' || layoutConfig?.darkMode,
          'admesh-layout--light': theme?.mode === 'light' || (!layoutConfig?.darkMode && layoutConfig?.darkMode !== undefined),
        },
        className
      )}
      style={combinedStyles}
    >
      {/* Inject custom CSS if provided */}
      {layoutConfig?.customCSS && (
        <style dangerouslySetInnerHTML={{ __html: layoutConfig.customCSS }} />
      )}

      {renderTitle()}
      {renderContent()}
    </div>
  );
};

export default AdMeshLayout;
