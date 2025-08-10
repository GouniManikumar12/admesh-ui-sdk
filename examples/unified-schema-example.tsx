import React from 'react';
import { AdMeshProductCard, AdMeshEcommerceCards, AdMeshLayout } from 'admesh-ui-sdk';
import type { AdMeshRecommendation } from 'admesh-ui-sdk';

// Example unified schema data (from your JSON)
const exampleRecommendation: AdMeshRecommendation = {
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
};

// Example of multiple recommendations
const exampleRecommendations: AdMeshRecommendation[] = [
  exampleRecommendation,
  // You can add more recommendations here following the same schema
];

/**
 * Example component demonstrating the unified schema usage
 */
export const UnifiedSchemaExample: React.FC = () => {
  const handleProductClick = (adId: string, admeshLink: string) => {
    console.log('Product clicked:', { adId, admeshLink });
    window.open(admeshLink, '_blank');
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-4">AdMesh UI SDK - Unified Schema Examples</h1>
      
      {/* Single Product Card */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Single Product Card</h2>
        <AdMeshProductCard
          recommendation={exampleRecommendation}
          showBadges={true}
          variation="default"
        />
      </section>

      {/* Ecommerce Cards (Horizontal Scroll) */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Ecommerce Cards</h2>
        <AdMeshEcommerceCards
          recommendations={exampleRecommendations}
          title="Product Recommendations"
          showTitle={true}
          showPricing={true}
          showRatings={true}
          showBrand={true}
          showShipping={true}
          maxCards={5}
          cardWidth="md"
          onProductClick={(product) => {
            console.log('Ecommerce product clicked:', product);
            window.open(product.admesh_link, '_blank');
          }}
        />
      </section>

      {/* Layout Component with FTC Disclosures */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Layout with FTC Disclosures</h2>
        <AdMeshLayout
          recommendations={exampleRecommendations}
          layoutType="product_cards"
          showDisclosures={true}
          onRecommendationClick={handleProductClick}
        />
      </section>

      {/* Simple Inline Format */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Simple Inline Format</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-2">
            Looking for a washing machine? Check out this{' '}
            <AdMeshProductCard
              recommendation={exampleRecommendation}
              variation="simple"
            />
          </p>
        </div>
      </section>

      {/* Schema Information */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Schema Information</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Key Benefits of Unified Schema:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Consistent data structure across all recommendation sources (Walmart, AdMesh, Amazon, etc.)</li>
            <li>Standardized field names and types for reliable component rendering</li>
            <li>Enhanced shipping information with detailed options</li>
            <li>Trust scores and intent matching for better recommendations</li>
            <li>Marketing-optimized titles and descriptions</li>
            <li>Comprehensive product metadata (categories, features, keywords)</li>
            <li>FTC-compliant disclosure support</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default UnifiedSchemaExample;
