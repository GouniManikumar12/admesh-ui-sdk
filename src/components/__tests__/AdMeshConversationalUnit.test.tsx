import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AdMeshConversationalUnit } from '../AdMeshConversationalUnit';
import type { AdMeshRecommendation } from '../../types';

const mockRecommendations: AdMeshRecommendation[] = [
  {
    title: "Test Product 1",
    reason: "Great for testing purposes",
    intent_match_score: 0.9,
    admesh_link: "https://example.com/track1",
    ad_id: "test-1",
    product_id: "product-1",
    has_free_tier: true,
    trial_days: 14,
    keywords: ["test", "product"]
  },
  {
    title: "Test Product 2", 
    reason: "Another test product",
    intent_match_score: 0.8,
    admesh_link: "https://example.com/track2",
    ad_id: "test-2",
    product_id: "product-2",
    has_free_tier: false,
    trial_days: 30,
    keywords: ["test", "demo"]
  }
];

describe('AdMeshConversationalUnit', () => {
  const defaultConfig = {
    displayMode: 'inline' as const,
    context: 'chat' as const,
    maxRecommendations: 3,
    showPoweredBy: true
  };

  it('renders inline mode correctly', () => {
    render(
      <AdMeshConversationalUnit
        recommendations={mockRecommendations}
        config={defaultConfig}
      />
    );

    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.getByText('Test Product 2')).toBeInTheDocument();
    expect(screen.getByText('Powered by AdMesh')).toBeInTheDocument();
  });

  it('renders minimal mode correctly', () => {
    render(
      <AdMeshConversationalUnit
        recommendations={mockRecommendations}
        config={{
          ...defaultConfig,
          displayMode: 'minimal'
        }}
      />
    );

    expect(screen.getByText('2 intelligent matches found')).toBeInTheDocument();
    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.getByText('+1 more recommendation')).toBeInTheDocument();
  });

  it('renders floating mode with dismiss button', () => {
    const onDismiss = jest.fn();
    
    render(
      <AdMeshConversationalUnit
        recommendations={mockRecommendations}
        config={{
          ...defaultConfig,
          displayMode: 'floating'
        }}
        onDismiss={onDismiss}
      />
    );

    expect(screen.getByText('Recommended for you')).toBeInTheDocument();
    
    const dismissButton = screen.getByLabelText('Dismiss recommendations');
    fireEvent.click(dismissButton);
    
    expect(onDismiss).toHaveBeenCalled();
  });

  it('renders summary mode when conversation summary is provided', () => {
    const conversationSummary = "We discussed your testing needs and found these solutions.";
    
    render(
      <AdMeshConversationalUnit
        recommendations={mockRecommendations}
        config={{
          ...defaultConfig,
          displayMode: 'summary'
        }}
        conversationSummary={conversationSummary}
      />
    );

    expect(screen.getByText('Conversation Summary')).toBeInTheDocument();
    expect(screen.getByText(conversationSummary)).toBeInTheDocument();
  });

  it('handles recommendation clicks', () => {
    const onRecommendationClick = jest.fn();
    
    render(
      <AdMeshConversationalUnit
        recommendations={mockRecommendations}
        config={defaultConfig}
        onRecommendationClick={onRecommendationClick}
      />
    );

    const firstRecommendation = screen.getByText('Test Product 1').closest('[data-admesh-tracker]');
    if (firstRecommendation) {
      fireEvent.click(firstRecommendation);
      expect(onRecommendationClick).toHaveBeenCalledWith('test-1', 'https://example.com/track1');
    }
  });

  it('respects maxRecommendations limit', () => {
    render(
      <AdMeshConversationalUnit
        recommendations={mockRecommendations}
        config={{
          ...defaultConfig,
          maxRecommendations: 1
        }}
      />
    );

    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Product 2')).not.toBeInTheDocument();
  });

  it('does not render when no recommendations provided', () => {
    const { container } = render(
      <AdMeshConversationalUnit
        recommendations={[]}
        config={defaultConfig}
      />
    );

    expect(container.firstChild).toBeNull();
  });

  it('applies theme correctly', () => {
    const theme = {
      mode: 'dark' as const,
      accentColor: '#3b82f6'
    };

    render(
      <AdMeshConversationalUnit
        recommendations={mockRecommendations}
        config={defaultConfig}
        theme={theme}
      />
    );

    const container = screen.getByTestId('admesh-conversational-unit') || 
                     document.querySelector('[data-admesh-theme="dark"]');
    
    expect(container).toHaveAttribute('data-admesh-theme', 'dark');
  });

  it('can hide powered by branding', () => {
    render(
      <AdMeshConversationalUnit
        recommendations={mockRecommendations}
        config={{
          ...defaultConfig,
          showPoweredBy: false
        }}
      />
    );

    expect(screen.queryByText('Powered by AdMesh')).not.toBeInTheDocument();
  });
});
