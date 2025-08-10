import type { Meta, StoryObj } from '@storybook/react';
import { AdMeshEcommerceCards } from '../components/AdMeshEcommerceCards';
import type { AdMeshRecommendation } from '../types/index';

const meta: Meta<typeof AdMeshEcommerceCards> = {
  title: 'AdMesh/EcommerceCards',
  component: AdMeshEcommerceCards,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A horizontal scrolling product cards component for displaying ecommerce recommendations, similar to Google product search results.',
      },
    },
  },
  argTypes: {
    products: {
      description: 'Array of ecommerce products to display',
    },
    title: {
      description: 'Title for the product section',
      control: 'text',
    },
    showTitle: {
      description: 'Whether to show the section title',
      control: 'boolean',
    },
    showPricing: {
      description: 'Whether to show product pricing',
      control: 'boolean',
    },
    showRatings: {
      description: 'Whether to show product ratings',
      control: 'boolean',
    },
    showBrand: {
      description: 'Whether to show product brand',
      control: 'boolean',
    },
    showSource: {
      description: 'Whether to show product source badge',
      control: 'boolean',
    },
    showShipping: {
      description: 'Whether to show shipping information',
      control: 'boolean',
    },
    maxCards: {
      description: 'Maximum number of cards to display',
      control: { type: 'number', min: 1, max: 20 },
    },
    cardWidth: {
      description: 'Width size of each card',
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    theme: {
      description: 'Color theme',
      control: 'select',
      options: ['light', 'dark', 'auto'],
    },
    borderRadius: {
      description: 'Border radius of cards',
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    shadow: {
      description: 'Shadow intensity',
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample recommendations using unified JSON schema (based on your provided JSON)
const sampleRecommendations: AdMeshRecommendation[] = [
  {
    // Your exact JSON structure
    ad_id: "walmart_249887530",
    admesh_link: "https://goto.walmart.com/c/None/568844/9383?veh=aff&sourceid=imp_000011112222333344&u=https%3A%2F%2Fwww.walmart.com%2Fip%2F249887530",
    audience_segment: "",
    availability: "in_stock",
    brand: "ZENY",
    brand_trust_score: 0.5,
    categories: ['All Walmart Restored Large Appliances'],
    description: "The smallest and lightest twin tub portable washing machine available, our highly popular Super Compact washing machine simply hooks up to your kitchen faucet, and it's ready to go. With a 5.5 lb. wash capacity + 4.4 lb. Spin capacity, this 2in1 washing machine is perfect for washing small loads ...",
    discount_percentage: 34.9,
    external_id: "249887530",
    feature_sections: [],
    features: ['Free 2-3 day shipping'],
    image_url: "https://i5.walmartimages.com/asr/7505138e-bbfa-4a43-9de4-2ab8c71eed99.6810f971aaffdca38d18e9928b3e4450.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
    integrations: [],
    intent_match_score: 0.72,
    is_fallback: false,
    keywords: [],
    offer_trust_score: 1,
    original_price: 152.9,
    price: 99.48,
    pricing: "$99.48",
    product_id: "walmart_249887530",
    rating: 4,
    reason: "Perfect match for 'best washing machine to buy' - from trusted brand ZENY, highly rated (4.0/5)",
    recommendation_description: "The smallest and lightest twin tub portable washing machine available, our highly popular Super Compact washing machine simply hooks up to your kitchen faucet, and it's ready to go. With a 5.5 lb. wash capacity + 4.4 lb. Spin capacity, this 2in1 washing machine is perfect for washing small loads ...",
    recommendation_title: "ZENY Portable Washing Machine Mini Twin Tub Washing Machine with Washer & Spinner, Gravity Drain ...",
    redirect_url: "https://www.walmart.com/ip/249887530",
    review_count: 384,
    reward_note: "",
    shipping_info: {
      free_shipping_over_35: false,
      standard_rate: 0,
      two_day_rate: 0,
      ship_to_store: false,
      free_ship_to_store: false
    },
    source: "walmart",
    title: "ZENY Portable Washing Machine Mini Twin Tub Washing Machine with Washer & Spinner, Gravity Drain ...",
    trial_days: 0,
    url: "https://www.walmart.com/ip/249887530",
    content_variations: {
      statement: {},
      question: {}
    },
    offer_images: [],
    product_logo: null
  },
  {
    // Additional Walmart product example
    ad_id: "walmart_15843466879",
    admesh_link: "https://goto.walmart.com/c/None/568844/9383?veh=aff&sourceid=imp_000011112222333344&u=https%3A%2F%2Fwww.walmart.com%2Fip%2F15843466879",
    audience_segment: "Gamers",
    availability: "in_stock",
    brand: "MSI",
    brand_trust_score: 0.8,
    categories: ['Electronics', 'Gaming Laptops'],
    description: "The MSI Thin 15 is equipped with a 13th Gen Intel Core i5-13420H processor and NVIDIA GeForce RTX 4050 Laptop GPU.",
    discount_percentage: 14.3,
    external_id: "15843466879",
    feature_sections: [],
    features: ['144Hz Display', 'RTX 4050 GPU', 'Intel i5-13420H'],
    image_url: "https://i5.walmartimages.com/asr/aa2646f3-3788-414c-b4f2-92c721dd215c.d7b975ea4876f1be66fc2d060c971f01.png?odnHeight=450&odnWidth=450&odnBg=ffffff",
    integrations: [],
    intent_match_score: 0.85,
    is_fallback: false,
    keywords: ['gaming', 'laptop', 'MSI'],
    offer_trust_score: 0.9,
    original_price: 699.0,
    price: 599.0,
    pricing: "$599.00",
    product_id: "walmart_15843466879",
    rating: 4.2,
    reason: "High-performance gaming laptop with excellent graphics",
    recommendation_description: "The MSI Thin 15 is equipped with a 13th Gen Intel Core i5-13420H processor and NVIDIA GeForce RTX 4050 Laptop GPU.",
    recommendation_title: "MSI Thin 15.6 inch FHD 144Hz Gaming Laptop Intel Core i5-13420H NVIDIA GeForce RTX 4050",
    redirect_url: "https://www.walmart.com/ip/15843466879",
    review_count: 35,
    reward_note: "",
    shipping_info: {
      free_shipping_over_35: true,
      standard_rate: 0,
      two_day_rate: 0,
      ship_to_store: false,
      free_ship_to_store: false
    },
    source: "walmart",
    title: "MSI Thin 15.6 inch FHD 144Hz Gaming Laptop Intel Core i5-13420H NVIDIA GeForce RTX 4050",
    trial_days: 0,
    url: "https://www.walmart.com/ip/15843466879",
    content_variations: {
      statement: {},
      question: {}
    },
    offer_images: [],
    product_logo: null
  }
];

export const Default: Story = {
  args: {
    recommendations: sampleRecommendations,
    title: "Recommended Products",
    showTitle: true,
    showPricing: true,
    showRatings: true,
    showBrand: true,
    showSource: false,
    showShipping: true,
    maxCards: 10,
    cardWidth: 'md',
    theme: 'auto',
    borderRadius: 'md',
    shadow: 'sm',
  },
};

export const WithSourceBadges: Story = {
  args: {
    ...Default.args,
    showSource: true,
    title: "Mixed Product Sources",
  },
};

export const CompactCards: Story = {
  args: {
    ...Default.args,
    cardWidth: 'sm',
    title: "Compact Product Cards",
    maxCards: 8,
  },
};

export const LargeCards: Story = {
  args: {
    ...Default.args,
    cardWidth: 'lg',
    title: "Large Product Cards",
    maxCards: 5,
  },
};

export const DarkTheme: Story = {
  args: {
    ...Default.args,
    theme: 'dark',
    title: "Dark Theme Products",
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const MinimalDisplay: Story = {
  args: {
    ...Default.args,
    showRatings: false,
    showBrand: false,
    showShipping: false,
    borderRadius: 'none',
    shadow: 'none',
    title: "Minimal Product Display",
  },
};

export const PricingFocused: Story = {
  args: {
    ...Default.args,
    showRatings: false,
    showBrand: false,
    showShipping: false,
    title: "Price-Focused Display",
    cardWidth: 'sm',
  },
};

export const NoTitle: Story = {
  args: {
    ...Default.args,
    showTitle: false,
  },
};

export const LimitedProducts: Story = {
  args: {
    ...Default.args,
    maxCards: 3,
    title: "Top 3 Recommendations",
  },
};

export const RoundedCards: Story = {
  args: {
    ...Default.args,
    borderRadius: 'lg',
    shadow: 'lg',
    title: "Rounded Product Cards",
  },
};

export const EmptyState: Story = {
  args: {
    recommendations: [],
    title: "No Products Available",
  },
};

// Debug story to test unified schema
export const DebugUnifiedSchema: Story = {
  render: () => {
    const testRecommendation = sampleRecommendations[0];
    console.log('Debug test recommendation:', testRecommendation);

    return (
      <div>
        <h3>Debug: Single Recommendation Test</h3>
        <pre style={{ fontSize: '12px', background: '#f5f5f5', padding: '10px', marginBottom: '20px' }}>
          {JSON.stringify(testRecommendation, null, 2)}
        </pre>
        <AdMeshEcommerceCards
          recommendations={[testRecommendation]}
          title="Debug Test"
          showTitle={true}
          showPricing={true}
          showRatings={true}
          showBrand={true}
          maxCards={1}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '🐛 **Debug**: Testing unified schema with single recommendation.',
      },
    },
  },
};
