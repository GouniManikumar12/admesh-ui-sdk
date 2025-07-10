import type { AdMeshTheme } from '../types';

/**
 * Utility functions for theme customization in AdMesh UI SDK
 */

/**
 * Creates a theme with sensible defaults and custom overrides
 */
export const createAdMeshTheme = (customTheme: Partial<AdMeshTheme> = {}): AdMeshTheme => {
  const baseTheme: AdMeshTheme = {
    mode: 'light',
    primaryColor: '#3b82f6',
    secondaryColor: '#10b981',
    accentColor: '#3b82f6',
    backgroundColor: '#ffffff',
    surfaceColor: '#f9fafb',
    borderColor: '#e5e7eb',
    textColor: '#111827',
    textSecondaryColor: '#6b7280',
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
    }
  };

  return {
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
};

/**
 * Creates a dark theme variant
 */
export const createDarkTheme = (customTheme: Partial<AdMeshTheme> = {}): AdMeshTheme => {
  const darkDefaults: Partial<AdMeshTheme> = {
    mode: 'dark',
    backgroundColor: '#1f2937',
    surfaceColor: '#374151',
    borderColor: '#4b5563',
    textColor: '#f9fafb',
    textSecondaryColor: '#9ca3af',
    shadows: {
      small: '0 1px 3px rgba(0, 0, 0, 0.3)',
      medium: '0 4px 6px rgba(0, 0, 0, 0.3)',
      large: '0 10px 15px rgba(0, 0, 0, 0.3)'
    }
  };

  return createAdMeshTheme({
    ...darkDefaults,
    ...customTheme
  });
};

/**
 * Predefined theme presets for common AI platforms
 */
export const themePresets = {
  // Clean, minimal theme
  minimal: createAdMeshTheme({
    primaryColor: '#000000',
    secondaryColor: '#666666',
    borderRadius: '4px',
    shadows: {
      small: 'none',
      medium: '0 1px 3px rgba(0, 0, 0, 0.1)',
      large: '0 2px 6px rgba(0, 0, 0, 0.1)'
    }
  }),

  // Modern, colorful theme
  vibrant: createAdMeshTheme({
    primaryColor: '#8b5cf6',
    secondaryColor: '#06b6d4',
    accentColor: '#f59e0b',
    borderRadius: '12px',
    gradients: {
      primary: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
      secondary: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
      accent: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)'
    }
  }),

  // Professional, corporate theme
  corporate: createAdMeshTheme({
    primaryColor: '#1e40af',
    secondaryColor: '#059669',
    backgroundColor: '#f8fafc',
    surfaceColor: '#ffffff',
    borderColor: '#cbd5e1',
    borderRadius: '6px',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
  }),

  // High contrast theme for accessibility
  highContrast: createAdMeshTheme({
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
    }
  })
};

/**
 * Utility to merge multiple theme objects
 */
export const mergeThemes = (...themes: Partial<AdMeshTheme>[]): AdMeshTheme => {
  const baseTheme = createAdMeshTheme();
  return themes.reduce((merged, theme) => {
    return createAdMeshTheme({
      ...merged,
      ...theme
    });
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
