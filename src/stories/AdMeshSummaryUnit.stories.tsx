import type { Meta, StoryObj } from '@storybook/react';
import { AdMeshSummaryUnit, type AdMeshRecommendation } from '../index';

const meta: Meta<typeof AdMeshSummaryUnit> = {
  title: 'AdMesh/Summary/SummaryUnit',
  component: AdMeshSummaryUnit,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'AdMeshSummaryUnit displays conversational summaries with embedded AdMesh links. It processes markdown-style links and creates clickable elements that track user interactions.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    summaryText: {
      control: 'text',
      description: 'The citation summary text with embedded markdown links'
    },
    theme: {
      control: 'object',
      description: 'Theme configuration for styling'
    },
    onLinkClick: {
      action: 'linkClicked',
      description: 'Callback when a recommendation link is clicked'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock recommendations with realistic AdMesh links
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
    ad_id: 'paypal_business_002',
    product_id: 'prod_paypal_456',
    admesh_link: 'http://127.0.0.1:8000/click/r/paypal_business_002?utm_product=prod_paypal_456&utm_redirect=https%3A%2F%2Fpaypal.com&test=true',
    title: 'PayPal Business',
    recommendation_title: 'PayPal Business Account',
    description: 'Accept payments online and in-person with PayPal',
    pricing: '2.9% + fixed fee per transaction',
    brand: 'PayPal',
    url: 'https://paypal.com/business',
    redirect_url: 'https://paypal.com/business',
    features: ['Online Payments', 'In-Person Payments', 'Invoicing'],
    categories: ['payments', 'business'],
    keywords: ['paypal', 'payment', 'business'],
    intent_match_score: 0.85,
    reason: 'Trusted payment solution with global reach',
    source: 'admesh',
    audience_segment: 'small_business',
    availability: 'global',
    brand_trust_score: 0.85,
    discount_percentage: 0,
    external_id: 'paypal_001',
    feature_sections: [],
    image_url: '',
    integrations: [],
    is_fallback: false,
    offer_trust_score: 0.85,
    original_price: 0,
    price: 0,
    rating: 4.5,
    review_count: 890,
    reward_note: '',
    trial_days: 0
  }
];

export const Default: Story = {
  args: {
    summaryText: 'For payment processing, I recommend [Stripe](http://127.0.0.1:8000/click/r/stripe_payment_001?utm_product=prod_stripe_123&utm_redirect=https%3A%2F%2Fstripe.com&test=true) for its excellent developer tools and competitive pricing.',
    recommendations: mockRecommendations,
    theme: {
      mode: 'light',
      primaryColor: '#3b82f6',
      fontFamily: 'Inter, sans-serif'
    }
  }
};

export const MultipleLinks: Story = {
  args: {
    summaryText: 'For payment processing, you have great options like [Stripe](http://127.0.0.1:8000/click/r/stripe_payment_001?utm_product=prod_stripe_123&utm_redirect=https%3A%2F%2Fstripe.com&test=true) for developers or [PayPal Business](http://127.0.0.1:8000/click/r/paypal_business_002?utm_product=prod_paypal_456&utm_redirect=https%3A%2F%2Fpaypal.com&test=true) for established businesses.',
    recommendations: mockRecommendations,
    theme: {
      mode: 'light',
      primaryColor: '#059669',
      fontFamily: 'Inter, sans-serif'
    }
  }
};

export const DarkMode: Story = {
  args: {
    summaryText: 'For payment processing, I recommend [Stripe](http://127.0.0.1:8000/click/r/stripe_payment_001?utm_product=prod_stripe_123&utm_redirect=https%3A%2F%2Fstripe.com&test=true) for its excellent developer tools and competitive pricing.',
    recommendations: mockRecommendations,
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

export const LongSummary: Story = {
  args: {
    summaryText: 'When choosing a payment platform for your startup, there are several excellent options to consider. [Stripe](http://127.0.0.1:8000/click/r/stripe_payment_001?utm_product=prod_stripe_123&utm_redirect=https%3A%2F%2Fstripe.com&test=true) stands out for its developer-friendly API and comprehensive documentation, making it ideal for tech-savvy teams. Alternatively, [PayPal Business](http://127.0.0.1:8000/click/r/paypal_business_002?utm_product=prod_paypal_456&utm_redirect=https%3A%2F%2Fpaypal.com&test=true) offers instant brand recognition and customer trust, which can be valuable for consumer-facing businesses.',
    recommendations: mockRecommendations,
    theme: {
      mode: 'light',
      primaryColor: '#7c3aed',
      fontFamily: 'Inter, sans-serif'
    }
  }
};

export const NoRecommendations: Story = {
  args: {
    summaryText: 'This is a summary without any embedded links or recommendations.',
    recommendations: [],
    theme: {
      mode: 'light',
      primaryColor: '#3b82f6',
      fontFamily: 'Inter, sans-serif'
    }
  }
};

export const UnmatchedLinks: Story = {
  args: {
    summaryText: 'Check out [AdMesh](https://useadmesh.com/) for more information about ad networks, or visit [Google](https://google.com) for general search.',
    recommendations: mockRecommendations, // These links won't match the recommendations
    theme: {
      mode: 'light',
      primaryColor: '#3b82f6',
      fontFamily: 'Inter, sans-serif'
    }
  }
};

export const MixedLinks: Story = {
  args: {
    summaryText: 'For payments, try [Stripe](http://127.0.0.1:8000/click/r/stripe_payment_001?utm_product=prod_stripe_123&utm_redirect=https%3A%2F%2Fstripe.com&test=true) which matches our recommendations, or check out [AdMesh](https://useadmesh.com/) for ad solutions.',
    recommendations: mockRecommendations,
    theme: {
      mode: 'light',
      primaryColor: '#3b82f6',
      fontFamily: 'Inter, sans-serif'
    }
  }
};

export const CustomStyling: Story = {
  args: {
    summaryText: 'For payment processing, I recommend [Stripe](http://127.0.0.1:8000/click/r/stripe_payment_001?utm_product=prod_stripe_123&utm_redirect=https%3A%2F%2Fstripe.com&test=true) for its excellent developer tools.',
    recommendations: mockRecommendations,
    theme: {
      mode: 'light',
      primaryColor: '#f59e0b',
      fontFamily: 'Georgia, serif'
    },
    className: 'border-2 border-orange-200 rounded-lg',
    style: {
      backgroundColor: '#fef3c7',
      padding: '24px'
    }
  }
};
