import React from 'react';
import { render } from '@testing-library/react';
import { createAdMeshTheme, ensureConsistentWidths, themePresets } from '../../utils/themeUtils';
import { AdMeshProductCard } from '../AdMeshProductCard';
import { AdMeshCitationUnit } from '../AdMeshCitationUnit';
import { AdMeshInlineCard } from '../AdMeshInlineCard';

// Mock recommendation data
const mockRecommendation = {
  ad_id: 'test-ad-1',
  title: 'Test Product',
  offer_description: 'Test description',
  url: 'https://example.com',
  admesh_link: 'https://admesh.com/track/test',
  intent_match_score: 0.95,
  product_id: 'test-product-1',
  offer_title: 'Test Offer'
};

describe('Consistent Styling', () => {
  describe('Theme Creation', () => {
    it('should create theme with consistent width settings', () => {
      const theme = createAdMeshTheme({
        primaryColor: '#ff0000',
        fontFamily: 'Arial, sans-serif'
      });

      expect(theme.components?.productCard?.width).toBe('100%');
      expect(theme.components?.citationUnit?.width).toBe('100%');
      expect(theme.components?.inlineRecommendation?.width).toBe('100%');
      expect(theme.components?.expandableUnit?.width).toBe('100%');
      expect(theme.components?.compareTable?.width).toBe('100%');
      
      // Ecommerce cards should maintain auto width
      expect(theme.components?.card?.width).toBe('auto');
      expect(theme.components?.button?.width).toBe('auto');
    });

    it('should preserve custom component settings while ensuring width consistency', () => {
      const customTheme = createAdMeshTheme({
        components: {
          productCard: {
            backgroundColor: '#custom-bg',
            padding: '20px'
          }
        }
      });

      expect(customTheme.components?.productCard?.width).toBe('100%');
      expect(customTheme.components?.productCard?.backgroundColor).toBe('#custom-bg');
      expect(customTheme.components?.productCard?.padding).toBe('20px');
    });
  });

  describe('ensureConsistentWidths utility', () => {
    it('should apply consistent widths to theme', () => {
      const inputTheme = {
        primaryColor: '#blue',
        components: {
          productCard: { backgroundColor: 'red' }
        }
      };

      const result = ensureConsistentWidths(inputTheme);

      expect(result.components?.productCard?.width).toBe('100%');
      expect(result.components?.productCard?.backgroundColor).toBe('red');
      expect(result.components?.citationUnit?.width).toBe('100%');
    });

    it('should not override existing width settings for ecommerce components', () => {
      const inputTheme = {
        components: {
          card: { width: 'custom-width' }
        }
      };

      const result = ensureConsistentWidths(inputTheme);

      expect(result.components?.card?.width).toBe('custom-width');
    });
  });

  describe('Theme Presets', () => {
    it('should have consistent width settings in all presets', () => {
      Object.entries(themePresets).forEach(([presetName, preset]) => {
        expect(preset.components?.productCard?.width).toBe('100%');
        expect(preset.components?.citationUnit?.width).toBe('100%');
        expect(preset.components?.inlineRecommendation?.width).toBe('100%');
        expect(preset.components?.expandableUnit?.width).toBe('100%');
        expect(preset.components?.compareTable?.width).toBe('100%');
      });
    });

    it('should maintain consistent font families across presets', () => {
      Object.entries(themePresets).forEach(([presetName, preset]) => {
        expect(preset.fontFamily).toBeDefined();
        expect(typeof preset.fontFamily).toBe('string');
      });
    });
  });

  describe('Component Styling', () => {
    it('should apply consistent width to AdMeshProductCard', () => {
      const theme = createAdMeshTheme();
      const { container } = render(
        <AdMeshProductCard 
          recommendation={mockRecommendation} 
          theme={theme}
        />
      );

      const productCard = container.querySelector('.admesh-product-card');
      expect(productCard).toBeInTheDocument();
    });

    it('should apply consistent width to AdMeshCitationUnit', () => {
      const theme = createAdMeshTheme();
      const { container } = render(
        <AdMeshCitationUnit 
          recommendations={[mockRecommendation]}
          theme={theme}
        />
      );

      const citationUnit = container.querySelector('.admesh-citation-unit');
      expect(citationUnit).toBeInTheDocument();
    });

    it('should apply consistent width to AdMeshInlineCard', () => {
      const theme = createAdMeshTheme();
      const { container } = render(
        <AdMeshInlineCard 
          recommendation={mockRecommendation}
          theme={theme}
        />
      );

      const inlineCard = container.querySelector('.admesh-inline-card');
      expect(inlineCard).toBeInTheDocument();
    });
  });

  describe('Font Consistency', () => {
    it('should apply the same font family across all components', () => {
      const customFont = '"Custom Font", Arial, sans-serif';
      const theme = createAdMeshTheme({
        fontFamily: customFont
      });

      expect(theme.fontFamily).toBe(customFont);
      
      // All components should inherit this font family
      const { container: productContainer } = render(
        <AdMeshProductCard recommendation={mockRecommendation} theme={theme} />
      );
      
      const { container: citationContainer } = render(
        <AdMeshCitationUnit recommendations={[mockRecommendation]} theme={theme} />
      );

      // Check that font family is applied via style attribute
      const productCard = productContainer.querySelector('.admesh-product-card');
      const citationUnit = citationContainer.querySelector('.admesh-citation-unit');
      
      expect(productCard).toHaveStyle(`font-family: ${customFont}`);
      expect(citationUnit).toHaveStyle(`font-family: ${customFont}`);
    });
  });
});
