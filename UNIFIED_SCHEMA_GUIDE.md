# 🔄 AdMesh UI SDK - Unified Schema Guide

## Overview

The AdMesh UI SDK now uses a **unified JSON schema** that works consistently across all recommendation sources (Walmart, AdMesh, Amazon, etc.). This ensures reliable component rendering and consistent user experience regardless of the data source.

## 🎯 Key Benefits

- **Consistent Structure**: Same field names and types across all sources
- **Enhanced Shipping Info**: Detailed shipping options with multiple rates
- **Trust Scoring**: Brand and offer trust metrics for better recommendations
- **Marketing Optimization**: Separate recommendation titles/descriptions for better presentation
- **FTC Compliance**: Built-in support for proper disclosures
- **Type Safety**: Full TypeScript support with proper required/optional field distinctions

## 📋 Schema Structure

### Required Core Fields

```typescript
interface AdMeshRecommendation {
  // Identifiers
  ad_id: string;                    // Unique advertisement identifier
  product_id: string;               // Product identifier
  external_id: string;              // External source ID (e.g., Walmart item ID)
  
  // Links
  admesh_link: string;              // Tracked affiliate link
  url: string;                      // Direct product URL
  redirect_url: string;             // Redirect URL
  
  // Product Information
  title: string;                    // Product title
  description: string;              // Product description
  brand: string;                    // Brand name
  categories: string[];             // Product categories
  features: string[];               // Product features
  keywords: string[];               // Search keywords
  
  // Pricing
  price: number;                    // Current price (numeric)
  pricing: string;                  // Formatted price string (e.g., "$99.48")
  original_price: number;           // Original price
  discount_percentage: number;      // Discount percentage
  
  // Quality Metrics
  rating: number;                   // Product rating (1-5)
  review_count: number;             // Number of reviews
  brand_trust_score: number;        // Brand trust score (0-1)
  offer_trust_score: number;        // Offer trust score (0-1)
  intent_match_score: number;       // Intent matching score (0-1)
  
  // Availability
  availability: string;             // Stock status
  source: string;                   // Source platform
  
  // Marketing
  reason: string;                   // Match explanation
  recommendation_title: string;     // Marketing-optimized title
  recommendation_description: string; // Marketing-optimized description
  reward_note: string;              // Reward/incentive information
  
  // Metadata
  audience_segment: string;         // Target audience
  trial_days: number;               // Trial period
  is_fallback: boolean;             // Is fallback recommendation
  feature_sections: any[];          // Structured features
  integrations: any[];              // Available integrations
  image_url: string;                // Product image URL
}
```

### Optional Fields

```typescript
// Enhanced shipping information
shipping_info?: {
  free_shipping_over_35: boolean;
  standard_rate: number;
  two_day_rate: number;
  ship_to_store: boolean;
  free_ship_to_store: boolean;
};

// Content variations for different presentations
content_variations?: {
  statement?: any;
  question?: any;
};

// Media assets
offer_images?: Array<{
  url: string;
  storage_path: string;
  filename: string;
  content_type: string;
  dimensions: { width: number; height: number; };
}>;

product_logo?: {
  url: string;
  storage_path: string;
  filename: string;
  content_type: string;
  dimensions: { width: number; height: number; };
} | null;
```

## 🔄 Migration from Previous Versions

### Field Mappings

| Old Field | New Field | Notes |
|-----------|-----------|-------|
| `walmart_item_id` | `external_id` | Standardized external ID |
| `walmart_sale_price` | `price` | Numeric price value |
| `walmart_price` | `original_price` | Original price before discount |
| `walmart_images.large` | `image_url` | Standardized image URL |
| `walmart_brand` | `brand` | Standardized brand name |
| `recommendation_source` | `source` | Source platform identifier |

### Breaking Changes

1. **Required Fields**: Many fields are now required for consistency
2. **Shipping Info**: Enhanced structure with more detailed options
3. **Type Safety**: Stricter TypeScript types
4. **Field Names**: Standardized naming convention

## 🛠️ Usage Examples

### Basic Product Card

```tsx
import { AdMeshProductCard } from 'admesh-ui-sdk';

const recommendation = {
  ad_id: "walmart_249887530",
  admesh_link: "https://goto.walmart.com/...",
  // ... all required fields
};

<AdMeshProductCard
  recommendation={recommendation}
  showBadges={true}
  variation="default"
/>
```

### Ecommerce Cards

```tsx
import { AdMeshEcommerceCards } from 'admesh-ui-sdk';

<AdMeshEcommerceCards
  recommendations={recommendations}
  title="Product Recommendations"
  showPricing={true}
  showRatings={true}
  maxCards={5}
/>
```

### Layout with Disclosures

```tsx
import { AdMeshLayout } from 'admesh-ui-sdk';

<AdMeshLayout
  recommendations={recommendations}
  layoutType="product_cards"
  showDisclosures={true}
  onRecommendationClick={(adId, admeshLink) => {
    window.open(admeshLink, '_blank');
  }}
/>
```

## 📚 Storybook Examples

Run Storybook to see live examples:

```bash
cd admesh-ui-sdk
npm run storybook
```

Navigate to **"AdMesh/Unified Schema Examples"** to see:
- Product Card with unified schema
- Ecommerce Cards with multiple recommendations
- Layout component with FTC disclosures
- Complete schema documentation

## 🔍 Example JSON

```json
{
  "ad_id": "walmart_249887530",
  "admesh_link": "https://goto.walmart.com/c/None/568844/9383?veh=aff&sourceid=imp_000011112222333344&u=https%3A%2F%2Fwww.walmart.com%2Fip%2F249887530",
  "audience_segment": "",
  "availability": "in_stock",
  "brand": "ZENY",
  "brand_trust_score": 0.5,
  "categories": ["All Walmart Restored Large Appliances"],
  "description": "The smallest and lightest twin tub portable washing machine available...",
  "discount_percentage": 34.9,
  "external_id": "249887530",
  "features": ["Free 2-3 day shipping"],
  "image_url": "https://i5.walmartimages.com/asr/7505138e-bbfa-4a43-9de4-2ab8c71eed99.6810f971aaffdca38d18e9928b3e4450.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
  "intent_match_score": 0.72,
  "is_fallback": false,
  "keywords": [],
  "offer_trust_score": 1,
  "original_price": 152.9,
  "price": 99.48,
  "pricing": "$99.48",
  "product_id": "walmart_249887530",
  "rating": 4,
  "reason": "Perfect match for 'best washing machine to buy' - from trusted brand ZENY, highly rated (4.0/5)",
  "recommendation_description": "The smallest and lightest twin tub portable washing machine available...",
  "recommendation_title": "ZENY Portable Washing Machine Mini Twin Tub Washing Machine with Washer & Spinner, Gravity Drain ...",
  "redirect_url": "https://www.walmart.com/ip/249887530",
  "review_count": 384,
  "reward_note": "",
  "source": "walmart",
  "title": "ZENY Portable Washing Machine Mini Twin Tub Washing Machine with Washer & Spinner, Gravity Drain ...",
  "trial_days": 0,
  "url": "https://www.walmart.com/ip/249887530",
  "shipping_info": {
    "free_shipping_over_35": false,
    "standard_rate": 0,
    "two_day_rate": 0,
    "ship_to_store": false,
    "free_ship_to_store": false
  }
}
```

## 🚀 Next Steps

1. **Update your backend** to provide data in the unified schema format
2. **Test components** using the new schema structure
3. **Migrate existing implementations** using the field mapping guide
4. **Leverage new features** like enhanced shipping info and trust scores

For questions or support, refer to the Storybook examples or check the component documentation.
