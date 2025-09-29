import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { AdMeshSummaryUnit } from '../AdMeshSummaryUnit';
import type { AdMeshRecommendation } from '../../types/index';

const mockRecommendations: AdMeshRecommendation[] = [
  {
    product_id: 'prod_stripe_123',
    title: 'Stripe',
    recommendation_description: 'Complete payment infrastructure for the internet',
    admesh_link: 'https://api.useadmesh.com/click/r/stripe_payment_001?utm_product=prod_stripe_123&utm_redirect=https%3A%2F%2Fstripe.com&test=true',
    categories: ['payments', 'fintech'],
    integrations: ['Developer Tools', 'Global Payments', 'Fraud Prevention'],
    trust_score: 95,
    reward_note: '$10.00 per signup (Free Promo Credit - 5 max conversions)',
    meta: {
      ad_id: 'stripe_payment_001',
      offer_trust_score: 95,
      brand_trust_score: 95,
      intent_match_score: 95,
      reason: 'Best-in-class payment processing with excellent developer experience',
      description: 'Complete payment infrastructure for the internet',
      keywords: ['payment', 'processing', 'api'],
      url: 'https://stripe.com',
      redirect_url: 'https://stripe.com'
    },
    // Legacy fields for backward compatibility
    ad_id: 'stripe_payment_001',
    brand: 'Stripe',
    source: 'admesh'
  }
];

describe('AdMeshSummaryUnit', () => {
  beforeEach(() => {
    // Clear console warnings before each test
    vi.clearAllMocks();
    console.warn = vi.fn();
    console.log = vi.fn();
  });

  it('renders summary text without links', () => {
    const summaryText = 'This is a simple summary without any links.';
    
    render(
      <AdMeshSummaryUnit
        summaryText={summaryText}
        recommendations={mockRecommendations}
      />
    );

    expect(screen.getByText(summaryText)).toBeInTheDocument();
  });

  it('renders clickable links for matched recommendations', () => {
    const summaryText = 'For payment processing, I recommend [Stripe](https://api.useadmesh.com/click/r/stripe_payment_001?utm_product=prod_stripe_123&utm_redirect=https%3A%2F%2Fstripe.com&test=true) for its excellent features.';
    
    render(
      <AdMeshSummaryUnit
        summaryText={summaryText}
        recommendations={mockRecommendations}
      />
    );

    const stripeLink = screen.getByRole('link', { name: 'Stripe' });
    expect(stripeLink).toBeInTheDocument();
    expect(stripeLink).toHaveAttribute('href', 'https://api.useadmesh.com/click/r/stripe_payment_001?utm_product=prod_stripe_123&utm_redirect=https%3A%2F%2Fstripe.com&test=true');
    expect(stripeLink).toHaveAttribute('target', '_blank');
  });

  it('renders regular links for unmatched markdown links', () => {
    const summaryText = 'Check out [AdMesh](https://useadmesh.com/) for more information.';
    
    render(
      <AdMeshSummaryUnit
        summaryText={summaryText}
        recommendations={mockRecommendations}
      />
    );

    const admeshLink = screen.getByRole('link', { name: 'AdMesh' });
    expect(admeshLink).toBeInTheDocument();
    expect(admeshLink).toHaveAttribute('href', 'https://useadmesh.com/');
    expect(admeshLink).toHaveAttribute('target', '_blank');
  });

  it('handles invalid URLs gracefully', () => {
    const summaryText = 'This has an [invalid link](not-a-valid-url) in it.';
    
    render(
      <AdMeshSummaryUnit
        summaryText={summaryText}
        recommendations={mockRecommendations}
      />
    );

    // Should show just the link text without the markdown
    expect(screen.getAllByText((content, element) => {
      return element?.textContent === 'This has an invalid link in it.';
    })[0]).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'invalid link' })).not.toBeInTheDocument();
    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining('Invalid URL in markdown link')
    );
  });

  it('handles multiple links in the same text', () => {
    const summaryText = 'For payments, try [Stripe](https://api.useadmesh.com/click/r/stripe_payment_001?utm_product=prod_stripe_123&utm_redirect=https%3A%2F%2Fstripe.com&test=true) or visit [AdMesh](https://useadmesh.com/) for more options.';
    
    render(
      <AdMeshSummaryUnit
        summaryText={summaryText}
        recommendations={mockRecommendations}
      />
    );

    expect(screen.getByRole('link', { name: 'Stripe' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'AdMesh' })).toBeInTheDocument();
  });

  it('logs click events for matched recommendations', () => {
    const summaryText = 'Try [Stripe](https://api.useadmesh.com/click/r/stripe_payment_001?utm_product=prod_stripe_123&utm_redirect=https%3A%2F%2Fstripe.com&test=true) for payments.';
    
    render(
      <AdMeshSummaryUnit
        summaryText={summaryText}
        recommendations={mockRecommendations}
      />
    );

    const stripeLink = screen.getByRole('link', { name: 'Stripe' });
    fireEvent.click(stripeLink);

    expect(console.log).toHaveBeenCalledWith(
      'AdMesh summary link clicked:',
      expect.objectContaining({
        adId: 'stripe_payment_001',
        productId: 'prod_stripe_123',
        source: 'summary'
      })
    );
  });

  it('logs click events for unmatched links', () => {
    const summaryText = 'Visit [AdMesh](https://useadmesh.com/) for more info.';
    
    render(
      <AdMeshSummaryUnit
        summaryText={summaryText}
        recommendations={mockRecommendations}
      />
    );

    const admeshLink = screen.getByRole('link', { name: 'AdMesh' });
    fireEvent.click(admeshLink);

    expect(console.log).toHaveBeenCalledWith(
      'AdMesh summary unmatched link clicked:',
      expect.objectContaining({
        linkText: 'AdMesh',
        url: 'https://useadmesh.com/',
        source: 'summary'
      })
    );
  });

  it('shows warning for unmatched recommendations', () => {
    const summaryText = 'Try [Unknown Service](https://unknown.com/) for something.';
    
    render(
      <AdMeshSummaryUnit
        summaryText={summaryText}
        recommendations={mockRecommendations}
      />
    );

    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining('No recommendation found for link')
    );
  });

  it('renders disclosure text', () => {
    const summaryText = 'Simple summary text.';
    
    render(
      <AdMeshSummaryUnit
        summaryText={summaryText}
        recommendations={mockRecommendations}
      />
    );

    expect(screen.getByText('Sponsored ')).toBeInTheDocument();
  });

  it('returns null for empty summary text', () => {
    const { container } = render(
      <AdMeshSummaryUnit
        summaryText=""
        recommendations={mockRecommendations}
      />
    );

    expect(container.firstChild).toBeNull();
    expect(console.warn).toHaveBeenCalledWith(
      '[AdMesh Summary] No summary text provided'
    );
  });

  it('handles empty recommendations array', () => {
    const summaryText = 'This has a [link](https://example.com/) but no recommendations.';
    
    render(
      <AdMeshSummaryUnit
        summaryText={summaryText}
        recommendations={[]}
      />
    );

    expect(screen.getByRole('link', { name: 'link' })).toBeInTheDocument();
    expect(console.warn).toHaveBeenCalledWith(
      '[AdMesh Summary] No recommendations provided'
    );
  });
});
