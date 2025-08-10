import React from 'react';
import { render, screen } from '@testing-library/react';
import { AdMeshLayout } from '../AdMeshLayout';
import type { AdMeshRecommendation, EcommerceProduct } from '../../types/index';

// Mock data
const mockRecommendations: AdMeshRecommendation[] = [
  {
    ad_id: 'test-1',
    title: 'Test Product',
    reason: 'Great for testing',
    intent_match_score: 0.9,
    admesh_link: 'https://test.com',
    url: 'https://test.com',
    product_id: 'test-product',
    keywords: ['test']
  }
];

const mockEcommerceProducts: EcommerceProduct[] = [
  {
    id: 'ecom-1',
    title: 'Test Ecommerce Product',
    price: 99.99,
    url: 'https://test-ecom.com',
    source: 'test',
    brand: 'Test Brand'
  }
];

describe('AdMeshLayout', () => {
  it('renders without crashing', () => {
    render(<AdMeshLayout />);
  });

  it('auto-detects citation layout when conversationText and recommendations are provided', () => {
    render(
      <AdMeshLayout
        recommendations={mockRecommendations}
        conversationText="This is a test conversation with Test Product mentioned."
        layout="auto"
      />
    );
    
    // Should render citation unit
    expect(screen.getByText(/This is a test conversation/)).toBeInTheDocument();
  });

  it('auto-detects ecommerce layout when ecommerceProducts are provided', () => {
    render(
      <AdMeshLayout
        ecommerceProducts={mockEcommerceProducts}
        layout="auto"
      />
    );
    
    // Should render ecommerce cards
    expect(screen.getByText('Test Ecommerce Product')).toBeInTheDocument();
  });

  it('auto-detects cards layout when only recommendations are provided', () => {
    render(
      <AdMeshLayout
        recommendations={mockRecommendations}
        layout="auto"
      />
    );
    
    // Should render product cards
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('renders title when showTitle is true', () => {
    render(
      <AdMeshLayout
        recommendations={mockRecommendations}
        layout="cards"
        showTitle={true}
        title="Custom Title"
      />
    );
    
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  it('uses default maxItems: 1 for layout, 3 for ecommerce', () => {
    const manyRecommendations = Array.from({ length: 5 }, (_, i) => ({
      ...mockRecommendations[0],
      ad_id: `test-${i}`,
      title: `Test Product ${i}`
    }));

    // Test default for cards layout (should be 1)
    const { rerender } = render(
      <AdMeshLayout
        recommendations={manyRecommendations}
        layout="cards"
      />
    );

    // Should only render 1 item by default for layout
    expect(screen.getByText('Test Product 0')).toBeInTheDocument();
    expect(screen.queryByText('Test Product 1')).not.toBeInTheDocument();

    // Test default for ecommerce layout (should be 3)
    rerender(
      <AdMeshLayout
        recommendations={manyRecommendations.map(rec => ({ ...rec, recommendation_source: 'walmart' }))}
        layout="ecommerce"
      />
    );

    // Should render 3 items by default for ecommerce
    expect(screen.getByText('Test Product 0')).toBeInTheDocument();
    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.getByText('Test Product 2')).toBeInTheDocument();
    expect(screen.queryByText('Test Product 3')).not.toBeInTheDocument();
  });

  it('limits items based on explicit maxItems prop', () => {
    const manyRecommendations = Array.from({ length: 10 }, (_, i) => ({
      ...mockRecommendations[0],
      ad_id: `test-${i}`,
      title: `Test Product ${i}`
    }));

    render(
      <AdMeshLayout
        recommendations={manyRecommendations}
        layout="cards"
        maxItems={3}
      />
    );

    // Should only render 3 items
    expect(screen.getByText('Test Product 0')).toBeInTheDocument();
    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.getByText('Test Product 2')).toBeInTheDocument();
    expect(screen.queryByText('Test Product 3')).not.toBeInTheDocument();
  });

  it('renders mixed layout with multiple content types', () => {
    render(
      <AdMeshLayout
        recommendations={mockRecommendations}
        ecommerceProducts={mockEcommerceProducts}
        conversationText="Test conversation"
        layout="mixed"
      />
    );
    
    // Should render citation unit and ecommerce cards
    expect(screen.getByText(/Test conversation/)).toBeInTheDocument();
    expect(screen.getByText('Test Ecommerce Product')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <AdMeshLayout
        recommendations={mockRecommendations}
        className="custom-class"
      />
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('shows no content message when no data is provided', () => {
    render(<AdMeshLayout layout="auto" />);

    expect(screen.getByText('No content to display')).toBeInTheDocument();
  });

  it('displays FTC-compliant disclosure elements', () => {
    render(
      <AdMeshLayout
        recommendations={mockRecommendations}
        layout="cards"
      />
    );

    // Should display Partner Recommendation header
    expect(screen.getByText('Partner Recommendation')).toBeInTheDocument();

    // Should display Sponsored and Powered by AdMesh in footer
    expect(screen.getByText('Sponsored')).toBeInTheDocument();
    expect(screen.getByText('Powered by AdMesh')).toBeInTheDocument();
  });
});
