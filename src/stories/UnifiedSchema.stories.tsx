import type { Meta, StoryObj } from '@storybook/react';
import { AdMeshProductCard, AdMeshEcommerceCards, AdMeshLayout } from '../components';
import type { AdMeshRecommendation } from '../types/index';

const meta: Meta = {
  title: 'AdMesh/Unified Schema Examples',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Unified JSON Schema Examples

This story demonstrates the new unified JSON schema that works across all recommendation sources (Walmart, AdMesh, Amazon, etc.). 
The schema ensures consistent data structure regardless of the source platform.

## Key Features
- **Consistent Structure**: Same fields across all sources
- **Enhanced Shipping Info**: Detailed shipping options
- **Trust Scores**: Brand and offer trust metrics
- **Marketing Optimization**: Separate recommendation titles/descriptions
- **FTC Compliance**: Built-in disclosure support
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Unified schema example based on your provided JSON
const unifiedSchemaExample: AdMeshRecommendation = {
  // Required core fields
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
  
  // Optional fields
  content_variations: {
    statement: {},
    question: {}
  },
  offer_images: [],
  product_logo: null
};

// Additional examples for variety
const additionalExamples: AdMeshRecommendation[] = [
  unifiedSchemaExample,
  {
    // AdMesh software example
    ad_id: "admesh_hubspot_001",
    admesh_link: "https://useadmesh.com/track?ad_id=admesh_hubspot_001",
    audience_segment: "Startups and SMBs",
    availability: "in_stock",
    brand: "HubSpot",
    brand_trust_score: 0.93,
    categories: ["CRM", "Sales Tools", "Marketing"],
    description: "All-in-one CRM platform with contact management, email marketing, sales pipeline, and reporting features.",
    discount_percentage: 20,
    external_id: "hubspot-crm-001",
    feature_sections: [],
    features: ["Contact Management", "Email Marketing", "Sales Pipeline", "Reporting"],
    image_url: "https://logo.clearbit.com/hubspot.com",
    integrations: [],
    intent_match_score: 0.92,
    is_fallback: false,
    keywords: ["CRM", "Sales", "Marketing"],
    offer_trust_score: 0.95,
    original_price: 1200,
    price: 960,
    pricing: "Free - $960/month",
    product_id: "admesh_hubspot_001",
    rating: 4.5,
    reason: "Perfect for remote teams with excellent collaboration features",
    recommendation_description: "All-in-one CRM platform with contact management, email marketing, sales pipeline, and reporting features.",
    recommendation_title: "HubSpot CRM - Complete Sales & Marketing Platform",
    redirect_url: "https://hubspot.com",
    review_count: 2847,
    reward_note: "Get 20% off your first year",
    shipping_info: {
      free_shipping_over_35: false,
      standard_rate: 0,
      two_day_rate: 0,
      ship_to_store: false,
      free_ship_to_store: false
    },
    source: "admesh",
    title: "HubSpot CRM",
    trial_days: 14,
    url: "https://hubspot.com",
    content_variations: {
      statement: {},
      question: {}
    },
    offer_images: [],
    product_logo: {
      url: "https://logo.clearbit.com/hubspot.com",
      storage_path: "logos/hubspot.png",
      filename: "hubspot.png",
      content_type: "image/png",
      dimensions: { width: 32, height: 32 }
    }
  }
];

// Single Product Card with Unified Schema
export const ProductCard: Story = {
  render: () => (
    <div className="max-w-md">
      <AdMeshProductCard
        recommendation={unifiedSchemaExample}
        showBadges={true}
        variation="default"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '🎯 **Product Card**: Single product card using the unified JSON schema structure.',
      },
    },
  },
};

// Ecommerce Cards with Unified Schema
export const EcommerceCards: Story = {
  render: () => (
    <AdMeshEcommerceCards
      recommendations={additionalExamples}
      title="Unified Schema Products"
      showTitle={true}
      showPricing={true}
      showRatings={true}
      showBrand={true}
      showShipping={true}
      maxCards={5}
      cardWidth="md"
      onProductClick={(product) => {
        console.log('Product clicked:', product);
        window.open(product.admesh_link, '_blank');
      }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: '🛒 **Ecommerce Cards**: Horizontal scrolling cards using unified schema recommendations.',
      },
    },
  },
};

// Layout Component with FTC Disclosures
export const LayoutWithDisclosures: Story = {
  render: () => (
    <AdMeshLayout
      recommendations={additionalExamples}
      layoutType="product_cards"
      showDisclosures={true}
      onRecommendationClick={(adId, admeshLink) => {
        console.log('Recommendation clicked:', { adId, admeshLink });
        window.open(admeshLink, '_blank');
      }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: '📋 **Layout with Disclosures**: Complete layout component with FTC-compliant disclosures using unified schema.',
      },
    },
  },
};

// Schema Documentation
export const SchemaDocumentation: Story = {
  render: () => (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Unified JSON Schema Structure</h2>
      <div className="bg-white p-4 rounded border">
        <pre className="text-sm overflow-auto">
          {JSON.stringify(unifiedSchemaExample, null, 2)}
        </pre>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p><strong>Key Benefits:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Consistent structure across all recommendation sources</li>
          <li>Enhanced shipping information with detailed options</li>
          <li>Trust scores for better recommendation quality</li>
          <li>Marketing-optimized titles and descriptions</li>
          <li>FTC-compliant disclosure support</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '📚 **Schema Documentation**: Complete JSON structure showing all fields in the unified schema.',
      },
    },
  },
};
