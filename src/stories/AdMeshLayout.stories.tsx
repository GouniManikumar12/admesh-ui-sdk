import type { Meta, StoryObj } from '@storybook/react';
import { AdMeshLayout } from '../components/AdMeshLayout';

const meta: Meta<typeof AdMeshLayout> = {
  title: 'AdMesh/Layout',
  component: AdMeshLayout,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'AdMeshLayout is the main layout component that automatically renders the appropriate display format based on backend response data. It supports both the new response object API and legacy props for backward compatibility.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    response: {
      control: 'object',
      description: 'Backend response object (preferred) - contains layout_type, citation_summary, and recommendations'
    },
    layout: {
      control: 'select',
      options: ['citation', 'product', 'ecommerce', 'inline'],
      description: 'Legacy layout type (deprecated - use response.layout_type instead)'
    },
    recommendations: {
      control: 'object',
      description: 'Legacy recommendations array (deprecated - use response.recommendations instead)'
    },
    citationSummary: {
      control: 'text',
      description: 'Legacy citation summary (deprecated - use response.citation_summary instead)'
    },
    theme: {
      control: 'object',
      description: 'Theme configuration for styling'
    }
  }
};

export default meta;
type Story = StoryObj<typeof AdMeshLayout>;

// Sample data using unified JSON schema
const sampleRecommendations = [
  {
    // Unified schema structure
    ad_id: 'walmart_15840257186',
    admesh_link: 'https://goto.walmart.com/c/None/568844/9383?veh=aff&sourceid=imp_000011112222333344&u=https%3A%2F%2Fwww.walmart.com%2Fip%2F15840257186',
    audience_segment: 'Students and Professionals',
    availability: 'in_stock',
    brand: 'HP',
    brand_trust_score: 0.8,
    categories: ['Electronics', 'Laptops'],
    description: 'The HP 15 inch FHD Laptop packs in the reliable processing power of an Intel Core processor, plus ample SSD storage, powerful graphics, and design with recycled materials to give you the power and capacity to do more.',
    discount_percentage: 40.5,
    external_id: '15840257186',
    feature_sections: [],
    features: ['Free shipping over $35', 'Intel Core i3-N305', '8GB RAM', '256GB SSD'],
    image_url: 'https://i5.walmartimages.com/asr/6f19d833-3b1f-4482-a2e3-efe4ebd791bc.94d309d793b48d07af4c27d45b860f37.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
    integrations: [],
    intent_match_score: 0.9,
    is_fallback: false,
    keywords: ['laptop', 'HP', 'Windows'],
    offer_trust_score: 0.9,
    original_price: 469.0,
    price: 279.0,
    pricing: '$279.00',
    product_id: 'walmart_15840257186',
    rating: 4.4,
    reason: 'Perfect match for laptop search - from trusted brand HP, highly rated (4.4/5)',
    recommendation_description: 'The HP 15 inch FHD Laptop packs in the reliable processing power of an Intel Core processor, plus ample SSD storage, powerful graphics, and design with recycled materials to give you the power and capacity to do more.',
    recommendation_title: 'HP 15.6 inch Windows Touch Laptop Intel Core i3-N305 8GB RAM 256GB SSD Moonlight Blue',
    redirect_url: 'https://www.walmart.com/ip/15840257186',
    review_count: 97,
    reward_note: '',
    shipping_info: {
      free_shipping_over_35: true,
      standard_rate: 0,
      two_day_rate: 0,
      ship_to_store: false,
      free_ship_to_store: false
    },
    source: 'walmart',
    title: 'HP 15.6 inch Windows Touch Laptop Intel Core i3-N305 8GB RAM 256GB SSD Moonlight Blue',
    trial_days: 0,
    url: 'https://www.walmart.com/ip/15840257186',
    content_variations: {
      statement: {},
      question: {}
    },
    offer_images: [],
    product_logo: null
  },
  {
    id: 'walmart_15843466879',
    ad_id: 'walmart_15843466879',
    title: 'MSI Thin 15.6 inch FHD 144Hz Gaming Laptop Intel Core i5-13420H NVIDIA GeForce RTX 4050',
    reason: 'Perfect match for gaming laptop - from trusted brand MSI, highly rated (4.2/5)',
    intent_match_score: 0.9,
    admesh_link: 'https://goto.walmart.com/c/None/568844/9383?veh=aff&sourceid=imp_000011112222333344&u=https%3A%2F%2Fwww.walmart.com%2Fip%2F15843466879',
    url: 'https://www.walmart.com/ip/15843466879',
    product_id: 'walmart_15843466879',
    // Standardized ecommerce fields (matching Walmart API format)
    price: 599.0,
    original_price: 699.0,
    image_url: 'https://i5.walmartimages.com/asr/aa2646f3-3788-414c-b4f2-92c721dd215c.d7b975ea4876f1be66fc2d060c971f01.png?odnHeight=450&odnWidth=450&odnBg=ffffff',
    brand: 'MSI',
    rating: 4.2,
    review_count: 35,
    availability: 'in_stock',
    discount_percentage: 14.3,
    source: 'walmart',
    description: 'The MSI Thin 15 is equipped with a 13th Gen Intel Core i5-13420H processor and NVIDIA GeForce RTX 4050 Laptop GPU. It features a 15.6" Full HD IPS-level display with a 144Hz refresh rate for smooth visuals.',
    features: ['Free shipping over $35'],
    shipping_info: {
      free_shipping_over_35: true,
      standard_rate: 0,
      two_day_rate: 0,
      ship_to_store: false,
      free_ship_to_store: false
    }
  },
  {
    id: 'walmart_16850267012',
    ad_id: 'walmart_16850267012',
    title: 'Dell 15 Laptop DC15255 - 15.6-inch FHD Touchscreen, AMD Ryzen 5-7530U, 8GB RAM, 512GB SSD, Black',
    reason: 'Perfect match for laptop search - from trusted brand Dell, great deal (20% off)',
    intent_match_score: 0.9,
    admesh_link: 'https://goto.walmart.com/c/None/568844/9383?veh=aff&sourceid=imp_000011112222333344&u=https%3A%2F%2Fwww.walmart.com%2Fip%2F16850267012',
    url: 'https://www.walmart.com/ip/16850267012',
    product_id: 'walmart_16850267012',
    // Standardized ecommerce fields (matching Walmart API format)
    price: 399.0,
    original_price: 499.99,
    image_url: 'https://i5.walmartimages.com/asr/a39aa0bc-55ec-4191-b551-bb1f2091298a.96c5bae25e4983bb3cd56ebe40bf1aad.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
    brand: 'Dell',
    rating: null,
    review_count: 0,
    availability: 'in_stock',
    discount_percentage: 20.2,
    source: 'walmart',
    description: 'Effortlessly chic. Always efficient. A 15-inch laptop with a built-in HD camera, enlarged ergonomic keyboard and AMD Ryzen processors.',
    features: ['Free shipping over $35'],
    shipping_info: {
      free_shipping_over_35: true,
      standard_rate: 0,
      two_day_rate: 0,
      ship_to_store: false,
      free_ship_to_store: false
    }
  }
];

// Sample AdMesh software recommendations (will auto-detect as product layout)
const sampleAdMeshRecommendations = [
  {
    ad_id: 'hubspot-1',
    title: 'HubSpot CRM',
    reason: 'Perfect for startups with excellent free tier and comprehensive features',
    intent_match_score: 0.95,
    admesh_link: 'https://useadmesh.com/track?ad_id=hubspot-1',
    url: 'https://hubspot.com',
    product_id: 'hubspot-crm',
    source: 'admesh', // This will trigger product layout auto-detection
    pricing: 'Free - $25/month',
    features: ['Contact Management', 'Email Marketing', 'Sales Pipeline', 'Reporting'],
    company_name: 'HubSpot',
    logo_url: 'https://via.placeholder.com/300x300?text=HubSpot+CRM'
  }
];

// Sample Walmart recommendations (recommendation_source=walmart)
const sampleWalmartRecommendations = [
  {
    ad_id: 'walmart-1',
    title: 'Apple iPhone 15 Pro',
    reason: 'Latest iPhone with advanced camera features',
    intent_match_score: 0.92,
    admesh_link: 'https://useadmesh.com/track?ad_id=walmart-1',
    url: 'https://walmart.com/ip/apple-iphone-15-pro',
    product_id: 'walmart-iphone-15-pro',
    recommendation_source: 'walmart' as const,
    walmart_item_id: '12345678',
    walmart_product_id: 'APPLE_IPHONE_15_PRO',
    walmart_brand: 'Apple',
    walmart_price: 999.00,
    walmart_sale_price: 899.00,
    walmart_currency: 'USD',
    walmart_short_description: 'iPhone 15 Pro with titanium design and advanced camera system',
    walmart_availability: 'Available',
    walmart_rating: {
      average_rating: 4.5,
      total_reviews: 1250
    },
    walmart_images: {
      thumbnail: 'https://i5.walmartimages.com/asr/iphone-15-pro-thumb.jpg',
      large: 'https://i5.walmartimages.com/asr/iphone-15-pro-large.jpg'
    },
    walmart_shipping: {
      two_day_shipping: true,
      free_shipping_over_35: true
    }
  },
  {
    ad_id: 'walmart-2',
    title: 'Samsung Galaxy S24 Ultra',
    reason: 'Premium Android phone with S Pen',
    intent_match_score: 0.88,
    admesh_link: 'https://useadmesh.com/track?ad_id=walmart-2',
    url: 'https://walmart.com/ip/samsung-galaxy-s24-ultra',
    product_id: 'walmart-galaxy-s24-ultra',
    recommendation_source: 'walmart' as const,
    walmart_item_id: '87654321',
    walmart_product_id: 'SAMSUNG_GALAXY_S24_ULTRA',
    walmart_brand: 'Samsung',
    walmart_price: 1199.00,
    walmart_sale_price: 1099.00,
    walmart_currency: 'USD',
    walmart_short_description: 'Galaxy S24 Ultra with built-in S Pen and AI features',
    walmart_availability: 'Available',
    walmart_rating: {
      average_rating: 4.3,
      total_reviews: 890
    },
    walmart_images: {
      thumbnail: 'https://i5.walmartimages.com/asr/galaxy-s24-ultra-thumb.jpg',
      large: 'https://i5.walmartimages.com/asr/galaxy-s24-ultra-large.jpg'
    },
    walmart_shipping: {
      two_day_shipping: true,
      free_shipping_over_35: true
    }
  }
];

// Sample conversation text links (company name -> link mapping)
const sampleConversationTextLinks = {
  'Microsoft': 'https://microsoft.com',
  'Google': 'https://google.com',
  'Amazon': 'https://amazon.com',
  'Apple': 'https://apple.com'
};

const sampleEcommerceProducts = [
  {
    id: 'laptop-1',
    title: 'MacBook Pro 16"',
    price: 2499,
    image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    brand: 'Apple',
    url: 'https://apple.com/macbook-pro',
    source: 'admesh',
    description: 'Powerful laptop for professionals',
    admesh_link: 'https://useadmesh.com/track?product=laptop-1',
    rating: 4.8,
    review_count: 1250
  },
  {
    id: 'laptop-2',
    title: 'Dell XPS 13',
    price: 1299,
    image_url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    brand: 'Dell',
    url: 'https://dell.com/xps-13',
    source: 'walmart',
    description: 'Compact and powerful ultrabook',
    admesh_link: 'https://useadmesh.com/track?product=laptop-2',
    rating: 4.6,
    review_count: 890
  }
];

// Product Layout (Default)
export const ProductLayout: Story = {
  args: {
    recommendations: sampleRecommendations,
    layout: 'product',
    maxItems: 1, // Default for layout
    showTitle: true,
    title: 'Smart Recommendations',
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: '🧩 **Product Layout**: Displays recommendations as individual cards with disclosures. Default numberOfItems is 1 (100% width).',
      },
    },
  },
};

// Citation Layout
export const CitationLayout: Story = {
  args: {
    recommendations: sampleRecommendations,
    conversationTextLinks: {
      'HubSpot CRM': sampleRecommendations[0].admesh_link,
      'Salesforce': sampleRecommendations[1].admesh_link,
      'Pipedrive': sampleRecommendations[2].admesh_link
    },
    layout: 'citation',
    showTitle: true,
    title: 'AI Recommendations',
    theme: { mode: 'light' },
    citationUnitProps: {
      dynamicTemplate: "Based on your startup needs, I recommend {product1} for its excellent free tier and comprehensive features. For enterprise requirements, {product2} offers advanced customization capabilities. For simple pipeline management, consider {product3}.",
      linkInsertionStrategy: 'template'
    }
  },
  parameters: {
    docs: {
      description: {
        story: '💬 **Citation Layout**: Displays recommendations as direct links within conversation text. Perfect for AI assistants and chatbots.',
      },
    },
  },
};

// Auto-detected Ecommerce Layout (based on Walmart source)
export const AutoDetectedEcommerce: Story = {
  args: {
    recommendations: sampleRecommendations, // Contains Walmart products, will auto-detect as ecommerce
    // No layout specified - will auto-detect as 'ecommerce' due to Walmart source
    showTitle: true,
    title: 'Auto-Detected Ecommerce Layout',
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: '🤖 **Auto-Detection**: Layout automatically detects ecommerce when Walmart products are present. No need to specify layout="ecommerce".',
      },
    },
  },
};

// Explicit Ecommerce Layout
export const EcommerceLayout: Story = {
  args: {
    recommendations: sampleRecommendations,
    layout: 'ecommerce', // Explicitly set
    showTitle: true,
    title: 'Explicit Ecommerce Layout',
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: '🛒 **Ecommerce Layout**: Displays products in a horizontal scrolling grid, similar to Google Shopping results.',
      },
    },
  },
};

// Inline Layout (compact cards)
export const InlineLayout: Story = {
  args: {
    recommendations: sampleRecommendations,
    layout: 'inline',
    maxItems: 1, // Default for layout
    showTitle: true,
    title: 'Inline Recommendations',
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: '📋 **Inline Layout**: Displays compact card-style recommendations in a vertical stack.',
      },
    },
  },
};

// Dark Theme
export const DarkTheme: Story = {
  args: {
    recommendations: sampleRecommendations,
    layout: 'product',
    maxItems: 1,
    showTitle: true,
    title: 'Dark Mode Layout',
    theme: { mode: 'dark' },
  },
  parameters: {
    docs: {
      description: {
        story: '🌙 **Dark Theme**: All layout types support dark mode theming for better user experience.',
      },
    },
  },
};

// Custom Configuration
export const CustomConfiguration: Story = {
  args: {
    recommendations: sampleRecommendations,
    layout: 'product',
    maxItems: 1,
    showTitle: true,
    title: 'Custom Layout',
    productCardProps: {
      variation: 'default',
      showBadges: true,
      expandable: false
    },
    theme: { mode: 'light' },
  },
  parameters: {
    docs: {
      description: {
        story: '⚙️ **Custom Configuration**: Demonstrates advanced customization options including component-specific props and layout settings.',
      },
    },
  },
};

// Backend-Controlled Styling
export const BackendControlledStyling: Story = {
  args: {
    recommendations: sampleRecommendations,
    layout: 'cards',
    maxItems: 1,
    showTitle: true,
    title: 'Custom Styled Layout',
    layoutConfig: {
      backgroundColor: '#f8fafc',
      textColor: '#1e293b',
      primaryColor: '#3b82f6',
      secondaryColor: '#64748b',
      accentColor: '#06b6d4',
      borderColor: '#e2e8f0',
      borderRadius: '12px',
      fontSize: '16px',
      fontFamily: 'Inter, system-ui, sans-serif',
      fontWeight: '500',
      padding: '24px',
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      linkColor: '#0ea5e9',
      hoverColor: '#0284c7',
      customCSS: `
        .admesh-layout {
          border: 2px solid var(--admesh-border-color);
        }
        .admesh-layout h3 {
          background: linear-gradient(135deg, var(--admesh-primary-color), var(--admesh-accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `
    },
  },
  parameters: {
    docs: {
      description: {
        story: '🎨 **Backend-Controlled Styling**: Demonstrates how the backend can control all visual aspects including colors, fonts, spacing, and custom CSS.',
      },
    },
  },
};

// New Response Object API Stories
export const NewResponseObjectCitation: Story = {
  args: {
    response: {
      layout_type: 'citation',
      citation_summary: 'For payment processing, I recommend [Stripe](http://127.0.0.1:8000/click/r/stripe_payment_001?utm_product=prod_stripe_123&utm_redirect=https%3A%2F%2Fstripe.com&test=true) for its excellent developer tools.',
      recommendations: [
        {
          ad_id: 'stripe_payment_001',
          product_id: 'prod_stripe_123',
          admesh_link: 'http://127.0.0.1:8000/click/r/stripe_payment_001?utm_product=prod_stripe_123&utm_redirect=https%3A%2F%2Fstripe.com&test=true',
          title: 'Stripe',
          description: 'Complete payment infrastructure for the internet',
          pricing: '2.9% + 30¢ per transaction',
          brand: 'Stripe',
          url: 'https://stripe.com',
          redirect_url: 'https://stripe.com',
          features: ['Developer Tools', 'Global Payments'],
          categories: ['payments'],
          keywords: ['payment'],
          intent_match_score: 0.95,
          reason: 'Perfect for startups',
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
          trial_days: 0,
          recommendation_title: 'Stripe Payment Platform',
          recommendation_description: 'Complete payment infrastructure'
        }
      ],
      requires_summary: true
    },
    theme: {
      mode: 'light',
      primaryColor: '#3b82f6'
    }
  },
  parameters: {
    docs: {
      description: {
        story: '🆕 **New Response Object API**: Demonstrates the new response object format with citation layout and embedded AdMesh links.',
      },
    },
  },
};
