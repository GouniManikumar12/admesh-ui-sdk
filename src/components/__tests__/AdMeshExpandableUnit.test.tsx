import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AdMeshExpandableUnit } from '../AdMeshExpandableUnit';
import type { AdMeshRecommendation } from '../../types';

// Mock recommendation data
const mockRecommendation: AdMeshRecommendation = {
  title: "Test Product",
  reason: "Great for testing purposes",
  intent_match_score: 0.85,
  admesh_link: "https://useadmesh.com/r/test-product",
  ad_id: "test_001",
  product_id: "test_product",
  url: "https://example.com",
  description: "A test product for unit testing",
  has_free_tier: true,
  trial_days: 14
};

describe('AdMeshExpandableUnit', () => {
  it('renders with default props', () => {
    render(<AdMeshExpandableUnit recommendation={mockRecommendation} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText(/Sponsored/)).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('renders in collapsed state when initialExpanded is false', () => {
    render(
      <AdMeshExpandableUnit 
        recommendation={mockRecommendation} 
        initialExpanded={false}
      />
    );
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.queryByText('Documentation')).not.toBeInTheDocument();
  });

  it('renders in expanded state when initialExpanded is true', () => {
    render(
      <AdMeshExpandableUnit 
        recommendation={mockRecommendation} 
        initialExpanded={true}
      />
    );
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Documentation')).toBeInTheDocument();
    expect(screen.getByText('Talk To An Expert')).toBeInTheDocument();
  });

  it('toggles expanded state when collapse button is clicked', () => {
    render(
      <AdMeshExpandableUnit 
        recommendation={mockRecommendation} 
        initialExpanded={false}
        collapsible={true}
      />
    );
    
    // Initially collapsed
    expect(screen.queryByText('Documentation')).not.toBeInTheDocument();
    
    // Click expand button
    const expandButton = screen.getByRole('button');
    fireEvent.click(expandButton);
    
    // Should now be expanded
    expect(screen.getByText('Documentation')).toBeInTheDocument();
  });

  it('does not show collapse button when collapsible is false', () => {
    render(
      <AdMeshExpandableUnit 
        recommendation={mockRecommendation} 
        collapsible={false}
      />
    );
    
    // Should not have a collapse/expand button
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(1); // Only the CTA button
    expect(buttons[0]).toHaveTextContent('Get Started');
  });

  it('renders custom sections when provided', () => {
    const customSections = [
      {
        title: 'Custom Section 1',
        description: 'Custom description 1',
        icon: '🎯'
      },
      {
        title: 'Custom Section 2',
        description: 'Custom description 2',
        icon: '🚀'
      }
    ];

    render(
      <AdMeshExpandableUnit 
        recommendation={mockRecommendation} 
        sections={customSections}
        initialExpanded={true}
      />
    );
    
    expect(screen.getByText('Custom Section 1')).toBeInTheDocument();
    expect(screen.getByText('Custom description 1')).toBeInTheDocument();
    expect(screen.getByText('Custom Section 2')).toBeInTheDocument();
    expect(screen.getByText('Custom description 2')).toBeInTheDocument();
  });

  it('renders custom CTA text when provided', () => {
    render(
      <AdMeshExpandableUnit 
        recommendation={mockRecommendation} 
        ctaText="Custom CTA"
        initialExpanded={true}
      />
    );
    
    expect(screen.getByText('Custom CTA')).toBeInTheDocument();
  });

  it('calls onClick when CTA button is clicked in expanded state', () => {
    const mockOnClick = jest.fn();

    render(
      <AdMeshExpandableUnit
        recommendation={mockRecommendation}
        onClick={mockOnClick}
        initialExpanded={true}
      />
    );

    const ctaButton = screen.getByText('Get Started');
    fireEvent.click(ctaButton);

    expect(mockOnClick).toHaveBeenCalledWith(
      mockRecommendation.ad_id,
      mockRecommendation.admesh_link
    );
  });

  it('shows CTA button on right when collapsed', () => {
    render(
      <AdMeshExpandableUnit
        recommendation={mockRecommendation}
        initialExpanded={false}
        collapsible={true}
      />
    );

    // Should have CTA button in header when collapsed
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    // Should not have sections visible
    expect(screen.queryByText('Documentation')).not.toBeInTheDocument();
  });

  it('calls onClick when header CTA button is clicked in collapsed state', () => {
    const mockOnClick = jest.fn();

    render(
      <AdMeshExpandableUnit
        recommendation={mockRecommendation}
        onClick={mockOnClick}
        initialExpanded={false}
        collapsible={true}
      />
    );

    const ctaButton = screen.getByText('Get Started');
    fireEvent.click(ctaButton);

    expect(mockOnClick).toHaveBeenCalledWith(
      mockRecommendation.ad_id,
      mockRecommendation.admesh_link
    );
  });

  it('shows powered by branding when showPoweredBy is true', () => {
    render(
      <AdMeshExpandableUnit 
        recommendation={mockRecommendation} 
        showPoweredBy={true}
        initialExpanded={true}
      />
    );
    
    expect(screen.getByText(/powered by/)).toBeInTheDocument();
    expect(screen.getByText('AdMesh')).toBeInTheDocument();
  });

  it('hides powered by branding when showPoweredBy is false', () => {
    render(
      <AdMeshExpandableUnit 
        recommendation={mockRecommendation} 
        showPoweredBy={false}
        initialExpanded={true}
      />
    );
    
    expect(screen.queryByText(/powered by/)).not.toBeInTheDocument();
  });

  it('applies dark theme styles correctly', () => {
    const { container } = render(
      <AdMeshExpandableUnit 
        recommendation={mockRecommendation} 
        theme={{ mode: 'dark' }}
        initialExpanded={true}
      />
    );
    
    const adUnit = container.querySelector('[data-admesh-theme="dark"]');
    expect(adUnit).toBeInTheDocument();
  });

  it('applies custom accent color from theme', () => {
    render(
      <AdMeshExpandableUnit 
        recommendation={mockRecommendation} 
        theme={{ mode: 'light', accentColor: '#ff0000' }}
        initialExpanded={true}
      />
    );
    
    // The accent color should be applied to the CTA button
    const ctaButton = screen.getByText('Get Started');
    expect(ctaButton).toHaveStyle('background-color: #ff0000');
  });
});
