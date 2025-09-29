import type { AdMeshTheme } from '../types';

/**
 * Utility functions for theme customization in AdMesh UI SDK
 */

/**
 * Creates a theme with sensible defaults and custom overrides
 * Ensures consistent styling across all AdMesh UI SDK components
 */
export const createAdMeshTheme = (customTheme: Partial<AdMeshTheme> = {}): AdMeshTheme => {
  const baseTheme: AdMeshTheme = {
    mode: 'light',
    primaryColor: '#000000',
    secondaryColor: '#666666',
    accentColor: '#000000',
    backgroundColor: '#ffffff',
    surfaceColor: '#ffffff',
    borderColor: '#e5e7eb',
    textColor: '#000000',
    textSecondaryColor: '#666666',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: {
      small: '12px',
      base: '14px',
      large: '16px',
      title: '18px'
    },
    borderRadius: '8px',
    spacing: {
      small: '4px',
      medium: '8px',
      large: '16px'
    },
    shadows: {
      small: '0 1px 3px rgba(0, 0, 0, 0.1)',
      medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
      large: '0 10px 15px rgba(0, 0, 0, 0.1)'
    },
    icons: {
      expandIcon: '▼',
      collapseIcon: '▲',
      starIcon: '★',
      checkIcon: '✓',
      arrowIcon: '→'
    },
    gradients: {
      primary: '#000000',
      secondary: '#666666',
      accent: '#000000'
    },
    // Component-specific defaults with consistent width settings
    components: {
      productCard: { width: '100%' },
      citationUnit: { width: '100%' },
      inlineRecommendation: { width: '100%' },
      expandableUnit: { width: '100%' },
      compareTable: { width: '100%' },
      // Ecommerce cards maintain their specific width behavior
      card: { width: 'auto' },
      button: { width: 'auto' }
    }
  };

  const mergedTheme = {
    ...baseTheme,
    ...customTheme,
    fontSize: {
      ...baseTheme.fontSize,
      ...customTheme.fontSize
    },
    spacing: {
      ...baseTheme.spacing,
      ...customTheme.spacing
    },
    shadows: {
      ...baseTheme.shadows,
      ...customTheme.shadows
    },
    icons: {
      ...baseTheme.icons,
      ...customTheme.icons
    },
    components: {
      ...baseTheme.components,
      ...customTheme.components
    }
  };

  // Ensure consistent widths are applied
  const finalTheme = ensureConsistentWidths(mergedTheme);
  return finalTheme as AdMeshTheme;
};

/**
 * Creates a dark theme variant
 */
export const createDarkTheme = (customTheme: Partial<AdMeshTheme> = {}): AdMeshTheme => {
  const darkDefaults: Partial<AdMeshTheme> = {
    mode: 'dark',
    primaryColor: '#ffffff',
    secondaryColor: '#9ca3af',
    accentColor: '#ffffff',
    backgroundColor: '#000000',
    surfaceColor: '#111111',
    borderColor: '#333333',
    textColor: '#ffffff',
    textSecondaryColor: '#9ca3af',
    shadows: {
      small: '0 1px 3px rgba(255, 255, 255, 0.1)',
      medium: '0 4px 6px rgba(255, 255, 255, 0.1)',
      large: '0 10px 15px rgba(255, 255, 255, 0.1)'
    },
    gradients: {
      primary: '#ffffff',
      secondary: '#9ca3af',
      accent: '#ffffff'
    }
  };

  return createAdMeshTheme({
    ...darkDefaults,
    ...customTheme
  });
};

/**
 * Predefined theme presets for common AI platforms
 * All presets ensure consistent width settings and styling
 */
export const themePresets = {
  // Clean, minimal theme with consistent width - now the default
  get minimal() {
    return createAdMeshTheme({
      primaryColor: '#000000',
      secondaryColor: '#666666',
      borderRadius: '4px',
      shadows: {
        small: 'none',
        medium: '0 1px 3px rgba(0, 0, 0, 0.1)',
        large: '0 2px 6px rgba(0, 0, 0, 0.1)'
      },
      gradients: {
        primary: '#000000',
        secondary: '#666666',
        accent: '#000000'
      },
      components: {
        productCard: { width: '100%' },
        citationUnit: { width: '100%' },
        inlineRecommendation: { width: '100%' },
        expandableUnit: { width: '100%' },
        compareTable: { width: '100%' }
      }
    });
  },

  // Modern, colorful theme with consistent width (no gradients)
  get vibrant() {
    return createAdMeshTheme({
      primaryColor: '#8b5cf6',
      secondaryColor: '#06b6d4',
      accentColor: '#f59e0b',
      borderRadius: '12px',
      gradients: {
        primary: '#8b5cf6',
        secondary: '#06b6d4',
        accent: '#f59e0b'
      },
      components: {
        productCard: { width: '100%' },
        citationUnit: { width: '100%' },
        inlineRecommendation: { width: '100%' },
        expandableUnit: { width: '100%' },
        compareTable: { width: '100%' }
      }
    });
  },

  // Professional, corporate theme with consistent width
  get corporate() {
    return createAdMeshTheme({
      primaryColor: '#1e40af',
      secondaryColor: '#059669',
      backgroundColor: '#f8fafc',
      surfaceColor: '#ffffff',
      borderColor: '#cbd5e1',
      borderRadius: '6px',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      components: {
        productCard: { width: '100%' },
        citationUnit: { width: '100%' },
        inlineRecommendation: { width: '100%' },
        expandableUnit: { width: '100%' },
        compareTable: { width: '100%' }
      }
    });
  },

  // High contrast theme for accessibility with consistent width
  get highContrast() {
    return createAdMeshTheme({
      primaryColor: '#000000',
      secondaryColor: '#ffffff',
      backgroundColor: '#ffffff',
      surfaceColor: '#f5f5f5',
      borderColor: '#000000',
      textColor: '#000000',
      textSecondaryColor: '#333333',
      borderRadius: '0px',
      shadows: {
        small: 'none',
        medium: '0 0 0 2px #000000',
        large: '0 0 0 3px #000000'
      },
      components: {
        productCard: { width: '100%' },
        citationUnit: { width: '100%' },
        inlineRecommendation: { width: '100%' },
        expandableUnit: { width: '100%' },
        compareTable: { width: '100%' }
      }
    });
  }
};

/**
 * Ensures consistent width settings across all components
 * This function enforces the rule: 100% width for all components except ecommerce
 */
export const ensureConsistentWidths = (inputTheme: Partial<AdMeshTheme> = {}): Partial<AdMeshTheme> => {
  const existingComponents = inputTheme.components || {};

  const consistentComponents = {
    productCard: { width: '100%', ...existingComponents.productCard },
    citationUnit: { width: '100%', ...existingComponents.citationUnit },
    inlineRecommendation: { width: '100%', ...existingComponents.inlineRecommendation },
    expandableUnit: { width: '100%', ...existingComponents.expandableUnit },
    compareTable: { width: '100%', ...existingComponents.compareTable },
    // Ecommerce cards maintain their specific width behavior
    card: { width: 'auto', ...existingComponents.card },
    button: { width: 'auto', ...existingComponents.button }
  };

  return {
    ...inputTheme,
    components: {
      ...existingComponents,
      ...consistentComponents
    }
  };
};

/**
 * Utility to merge multiple theme objects
 */
export const mergeThemes = (...themes: Partial<AdMeshTheme>[]): AdMeshTheme => {
  const baseTheme = createAdMeshTheme();
  return themes.reduce((merged, theme) => {
    if (!theme) return merged;
    return {
      ...merged,
      ...theme,
      mode: theme.mode || merged.mode
    };
  }, baseTheme);
};

/**
 * Utility to create a theme from CSS custom properties
 */
export const themeFromCSSProperties = (element: HTMLElement): Partial<AdMeshTheme> => {
  const computedStyle = getComputedStyle(element);
  
  return {
    primaryColor: computedStyle.getPropertyValue('--admesh-primary-color')?.trim() || undefined,
    secondaryColor: computedStyle.getPropertyValue('--admesh-secondary-color')?.trim() || undefined,
    backgroundColor: computedStyle.getPropertyValue('--admesh-background-color')?.trim() || undefined,
    textColor: computedStyle.getPropertyValue('--admesh-text-color')?.trim() || undefined,
    borderRadius: computedStyle.getPropertyValue('--admesh-border-radius')?.trim() || undefined,
    fontFamily: computedStyle.getPropertyValue('--admesh-font-family')?.trim() || undefined
  };
};
