import type { Meta, StoryObj } from '@storybook/react';
import { AdMeshSummaryLayout, type AdMeshRecommendation } from '../index';

const meta: Meta<typeof AdMeshSummaryLayout> = {
  title: 'AdMesh/Layout/SummaryLayout',
  component: AdMeshSummaryLayout,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'AdMeshSummaryLayout is the main layout component that handles different display formats based on backend response data. It automatically renders the appropriate layout (citation, product cards, or ecommerce) based on the response object.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    response: {
      control: 'object',
      description: 'Backend response object containing layout type, summary, and recommendations'
    },
    theme: {
      control: 'object',
      description: 'Theme configuration for styling'
    },
    onRecommendationClick: {
      action: 'recommendationClicked',
      description: 'Callback when a recommendation is clicked'
    },
    onLinkClick: {
      action: 'linkClicked',
      description: 'Callback when a summary link is clicked'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock recommendations
const mockRecommendations: AdMeshRecommendation[] = [
  {
    ad_id: 'stripe_payment_001',
    product_id: 'prod_stripe_123',
    admesh_link: 'http://127.0.0.1:8000/click/r/stripe_payment_001?utm_product=prod_stripe_123&utm_redirect=https%3A%2F%2Fstripe.com&test=true',
    title: 'Stripe',
    recommendation_title: 'Stripe Payment Platform',
    description: 'Complete payment infrastructure for the internet',
    pricing: '2.9% + 30¢ per transaction',
    brand: 'Stripe',
    url: 'https://stripe.com',
    redirect_url: 'https://stripe.com',
    features: ['Developer Tools', 'Global Payments', 'Fraud Prevention'],
    categories: ['payments', 'fintech'],
    keywords: ['payment', 'processing', 'api'],
    intent_match_score: 0.95,
    reason: 'Perfect for startups with excellent developer tools',
    source: 'admesh',
    audience_segment: 'startups',
    availability: 'global',
    brand_trust_score: 0.9,
    discount_percentage: 0,
    external_id: 'stripe_001',
    feature_sections: [],
    image_url: '',
    integrations: [],
    is_fallback: false,
    offer_trust_score: 0.9,
    original_price: 0,
    price: 0,
    rating: 4.8,
    review_count: 1250,
    reward_note: '',
    trial_days: 0
  },
  {
    ad_id: 'linear_pm_002',
    product_id: 'prod_linear_456',
    admesh_link: 'http://127.0.0.1:8000/click/r/linear_pm_002?utm_product=prod_linear_456&utm_redirect=https%3A%2F%2Flinear.app&test=true',
    title: 'Linear',
    recommendation_title: 'Linear Project Management',
    description: 'The issue tracking tool you\'ll enjoy using',
    pricing: '$8-16/user/month',
    brand: 'Linear',
    url: 'https://linear.app',
    redirect_url: 'https://linear.app',
    features: ['Issue Tracking', 'Sprint Planning', 'Git Integration'],
    categories: ['productivity', 'project_management'],
    keywords: ['project', 'management', 'issues'],
    intent_match_score: 0.88,
    reason: 'Modern interface with developer-focused workflow',
    source: 'admesh',
    audience_segment: 'developers',
    availability: 'global',
    brand_trust_score: 0.85,
    discount_percentage: 0,
    external_id: 'linear_001',
    feature_sections: [],
    image_url: '',
    integrations: [],
    is_fallback: false,
    offer_trust_score: 0.85,
    original_price: 0,
    price: 16,
    rating: 4.7,
    review_count: 890,
    reward_note: '',
    trial_days: 14
  }
];

export const CitationLayout: Story = {
  args: {
    response: {
      layout_type: 'citation',
      citation_summary: 'For payment processing, I recommend [Stripe](http://127.0.0.1:8000/click/r/stripe_payment_001?utm_product=prod_stripe_123&utm_redirect=https%3A%2F%2Fstripe.com&test=true) for its excellent developer tools and competitive pricing.',
      recommendations: mockRecommendations,
      requires_summary: true
    },
    theme: {
      mode: 'light',
      primaryColor: '#3b82f6',
      fontFamily: 'Inter, sans-serif'
    }
  }
};

export const ProductCardsLayout: Story = {
  args: {
    response: {
      layout_type: 'product_cards',
      recommendations: mockRecommendations,
      requires_summary: false
    },
    theme: {
      mode: 'light',
      primaryColor: '#059669',
      fontFamily: 'Inter, sans-serif'
    }
  }
};

export const EcommerceLayout: Story = {
  args: {
    response: {
      layout_type: 'ecommerce',
      recommendations: mockRecommendations.map(rec => ({
        ...rec,
        source: 'walmart',
        recommendation_source: 'walmart'
      })),
      requires_summary: false
    },
    theme: {
      mode: 'light',
      primaryColor: '#dc2626',
      fontFamily: 'Inter, sans-serif'
    }
  }
};

export const DarkMode: Story = {
  args: {
    response: {
      layout_type: 'citation',
      citation_summary: 'For payment processing, I recommend [Stripe](http://127.0.0.1:8000/click/r/stripe_payment_001?utm_product=prod_stripe_123&utm_redirect=https%3A%2F%2Fstripe.com&test=true) for its excellent developer tools.',
      recommendations: mockRecommendations,
      requires_summary: true
    },
    theme: {
      mode: 'dark',
      primaryColor: '#60a5fa',
      fontFamily: 'Inter, sans-serif'
    }
  },
  parameters: {
    backgrounds: { default: 'dark' }
  }
};

export const FallbackWithoutSummary: Story = {
  args: {
    response: {
      layout_type: 'citation',
      recommendations: mockRecommendations,
      requires_summary: true
      // No citation_summary provided - should fallback to product card
    },
    theme: {
      mode: 'light',
      primaryColor: '#7c3aed',
      fontFamily: 'Inter, sans-serif'
    }
  }
};

export const InvalidData: Story = {
  args: {
    response: {
      layout_type: 'citation',
      citation_summary: 'This summary has no valid recommendations.',
      recommendations: [],
      requires_summary: true
    },
    theme: {
      mode: 'light',
      primaryColor: '#ef4444',
      fontFamily: 'Inter, sans-serif'
    }
  }
};

export const UnknownLayoutType: Story = {
  args: {
    response: {
      layout_type: 'unknown_layout',
      citation_summary: 'For payment processing, I recommend [Stripe](http://127.0.0.1:8000/click/r/stripe_payment_001?utm_product=prod_stripe_123&utm_redirect=https%3A%2F%2Fstripe.com&test=true).',
      recommendations: mockRecommendations,
      requires_summary: true
    },
    theme: {
      mode: 'light',
      primaryColor: '#f59e0b',
      fontFamily: 'Inter, sans-serif'
    }
  }
};
