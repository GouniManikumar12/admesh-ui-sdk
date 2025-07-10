import React from 'react';
import {
  AdMeshProductCard,
  AdMeshExpandableUnit
} from '../src/components';
import { createAdMeshTheme, themePresets, createDarkTheme } from '../src/utils/themeUtils';
import { AdMeshTheme, AdMeshRecommendation } from '../src/types';

// Example recommendation data
const sampleRecommendation: AdMeshRecommendation = {
  ad_id: 'example-ad-1',
  product_id: 'example-product-1',
  title: 'AI Writing Assistant',
  recommendation_title: 'AI Writing Assistant',
  recommendation_description: 'Boost your productivity with AI-powered writing tools',
  url: 'https://example.com',
  admesh_link: 'https://example.com',
  intent_match_score: 0.85,
  pricing: '$29/month',
  trial_days: 14,
  feature_sections: [
    {
      icon: '✍️',
      title: 'Smart Writing',
      description: 'AI-powered content generation and editing'
    },
    {
      icon: '🔍',
      title: 'Grammar Check',
      description: 'Advanced grammar and style suggestions'
    }
  ]
};

/**
 * Example 1: Custom Brand Colors
 * AI platforms can easily match their brand colors
 */
export const CustomBrandExample: React.FC = () => {
  const customTheme = createAdMeshTheme({
    primaryColor: '#ff6b6b',      // Brand red
    secondaryColor: '#4ecdc4',    // Brand teal
    accentColor: '#45b7d1',       // Brand blue
    borderRadius: '16px',         // Rounded corners
    fontFamily: '"Poppins", sans-serif'
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Custom Brand Colors Example</h2>
      <AdMeshProductCard 
        recommendation={sampleRecommendation}
        theme={customTheme}
      />
    </div>
  );
};

/**
 * Example 2: Minimal Design
 * For platforms that prefer clean, minimal aesthetics
 */
export const MinimalDesignExample: React.FC = () => {
  const minimalTheme = createAdMeshTheme({
    primaryColor: '#000000',
    secondaryColor: '#666666',
    backgroundColor: '#ffffff',
    surfaceColor: '#fafafa',
    borderColor: '#e0e0e0',
    borderRadius: '4px',
    shadows: {
      small: 'none',
      medium: '0 1px 3px rgba(0, 0, 0, 0.1)',
      large: '0 2px 6px rgba(0, 0, 0, 0.1)'
    },
    spacing: {
      small: '4px',
      medium: '8px',
      large: '12px'
    }
  });

  return (
    <div style={{ padding: '20px', backgroundColor: '#fafafa' }}>
      <h2>Minimal Design Example</h2>
      <AdMeshExpandableUnit 
        recommendation={sampleRecommendation}
        theme={minimalTheme}
      />
    </div>
  );
};

/**
 * Example 3: Custom Icons
 * Platforms can use their own icon set
 */
export const CustomIconsExample: React.FC = () => {
  const customIconTheme = createAdMeshTheme({
    primaryColor: '#8b5cf6',
    icons: {
      starIcon: '🌟',
      expandIcon: '▼',
      collapseIcon: '▲',
      checkIcon: '✅',
      arrowIcon: '➡️'
    }
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Custom Icons Example</h2>
      <AdMeshProductCard 
        recommendation={sampleRecommendation}
        theme={customIconTheme}
        showBadges={true}
      />
    </div>
  );
};

/**
 * Example 4: React Icon Components
 * Using React components as icons
 */
export const ReactIconsExample: React.FC = () => {
  // Example using popular react-icons library
  const StarIcon = () => <span style={{ color: '#fbbf24' }}>★</span>;
  const ChevronDown = () => <span>⌄</span>;
  const ChevronUp = () => <span>⌃</span>;

  const reactIconTheme = createAdMeshTheme({
    primaryColor: '#3b82f6',
    icons: {
      starIcon: <StarIcon />,
      expandIcon: <ChevronDown />,
      collapseIcon: <ChevronUp />
    }
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>React Icons Example</h2>
      <AdMeshExpandableUnit 
        recommendation={sampleRecommendation}
        theme={reactIconTheme}
      />
    </div>
  );
};

/**
 * Example 5: Complete Style Override
 * For platforms that want full control
 */
export const CompleteOverrideExample: React.FC = () => {
  const overrideTheme: AdMeshTheme = {
    mode: 'light',
    disableDefaultStyles: true,
    components: {
      card: {
        backgroundColor: '#f0f9ff',
        border: '2px solid #0ea5e9',
        borderRadius: '20px',
        padding: '24px',
        boxShadow: '0 8px 25px rgba(14, 165, 233, 0.15)'
      },
      button: {
        backgroundColor: '#0ea5e9',
        color: 'white',
        border: 'none',
        borderRadius: '12px',
        padding: '12px 24px',
        fontWeight: '600',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      },
      expandableUnit: {
        backgroundColor: '#f0f9ff',
        border: '2px solid #0ea5e9',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 8px 25px rgba(14, 165, 233, 0.15)'
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Complete Style Override Example</h2>
      <AdMeshProductCard 
        recommendation={sampleRecommendation}
        theme={overrideTheme}
      />
    </div>
  );
};

/**
 * Example 6: Dark Mode with Custom Colors
 */
export const DarkModeExample: React.FC = () => {
  const darkTheme = createDarkTheme({
    primaryColor: '#a78bfa',
    secondaryColor: '#34d399',
    accentColor: '#fbbf24'
  });

  return (
    <div style={{ padding: '20px', backgroundColor: '#111827', minHeight: '400px' }}>
      <h2 style={{ color: 'white' }}>Dark Mode Example</h2>
      <AdMeshExpandableUnit 
        recommendation={sampleRecommendation}
        theme={darkTheme}
      />
    </div>
  );
};

/**
 * Example 7: Using Preset Themes
 */
export const PresetThemesExample: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Preset Themes Example</h2>
      
      <div style={{ marginBottom: '30px' }}>
        <h3>Vibrant Theme</h3>
        <AdMeshProductCard 
          recommendation={sampleRecommendation}
          theme={themePresets.vibrant}
        />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Corporate Theme</h3>
        <AdMeshProductCard 
          recommendation={sampleRecommendation}
          theme={themePresets.corporate}
        />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>High Contrast Theme</h3>
        <AdMeshProductCard 
          recommendation={sampleRecommendation}
          theme={themePresets.highContrast}
        />
      </div>
    </div>
  );
};

/**
 * Main demo component showcasing all examples
 */
export const CustomizationDemo: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '40px 0' }}>
        AdMesh UI SDK Customization Examples
      </h1>
      
      <CustomBrandExample />
      <MinimalDesignExample />
      <CustomIconsExample />
      <ReactIconsExample />
      <CompleteOverrideExample />
      <DarkModeExample />
      <PresetThemesExample />
    </div>
  );
};
