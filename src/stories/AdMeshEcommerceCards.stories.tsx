import type { Meta, StoryObj } from '@storybook/react';
import { AdMeshEcommerceCards } from '../components/AdMeshEcommerceCards';
import type { EcommerceProduct } from '../components/AdMeshEcommerceCards';

const meta: Meta<typeof AdMeshEcommerceCards> = {
  title: 'AdMesh/AdMeshEcommerceCards',
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

// Sample product data based on the actual API response
const sampleProducts: EcommerceProduct[] = [
  {
    id: "walmart_15840257186",
    title: "HP 15.6 inch Windows Touch Laptop Intel Core i3-N305 8GB RAM 256GB SSD Moonlight Blue",
    price: 279.0,
    original_price: 469.0,
    discount_percentage: 40.5,
    image_url: "https://i5.walmartimages.com/asr/6f19d833-3b1f-4482-a2e3-efe4ebd791bc.94d309d793b48d07af4c27d45b860f37.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
    brand: "HP",
    rating: 4.4,
    review_count: 97,
    url: "https://www.walmart.com/ip/15840257186",
    source: "walmart",
    availability: "in_stock",
    shipping_info: {
      free_shipping_over_35: true,
      standard_rate: 0,
      two_day_rate: 0,
    },
    description: "The HP 15 inch FHD Laptop packs in the reliable processing power of an Intel Core processor, plus ample SSD storage, powerful graphics, and design with recycled materials to give you the power and capacity to do more.",
    admesh_link: "https://goto.walmart.com/c/None/568844/9383?veh=aff&sourceid=imp_000011112222333344&u=https%3A%2F%2Fwww.walmart.com%2Fip%2F15840257186"
  },
  {
    id: "walmart_15843466879",
    title: "MSI Thin 15.6 inch FHD 144Hz Gaming Laptop Intel Core i5-13420H NVIDIA GeForce RTX 4050",
    price: 599.0,
    original_price: 699.0,
    discount_percentage: 14.3,
    image_url: "https://i5.walmartimages.com/asr/aa2646f3-3788-414c-b4f2-92c721dd215c.d7b975ea4876f1be66fc2d060c971f01.png?odnHeight=450&odnWidth=450&odnBg=ffffff",
    brand: "MSI",
    rating: 4.2,
    review_count: 35,
    url: "https://www.walmart.com/ip/15843466879",
    source: "walmart",
    availability: "in_stock",
    shipping_info: {
      free_shipping_over_35: true,
      standard_rate: 0,
      two_day_rate: 0,
    },
    description: "The MSI Thin 15 is equipped with a 13th Gen Intel Core i5-13420H processor and NVIDIA GeForce RTX 4050 Laptop GPU.",
    admesh_link: "https://goto.walmart.com/c/None/568844/9383?veh=aff&sourceid=imp_000011112222333344&u=https%3A%2F%2Fwww.walmart.com%2Fip%2F15843466879"
  },
  {
    id: "admesh_stripe",
    title: "Stripe",
    price: 29.0,
    image_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
    brand: "Stripe",
    rating: 4.8,
    review_count: 1250,
    url: "https://stripe.com",
    source: "admesh",
    availability: "in_stock",
    description: "Online payment processing for internet businesses",
    admesh_link: "http://127.0.0.1:8000/click/r/b652be63-9c08-4278-854b-dd400dffbc31"
  },
  {
    id: "walmart_laptop_4",
    title: "ASUS VivoBook 15.6\" FHD Laptop AMD Ryzen 5 7520U 8GB RAM 512GB SSD",
    price: 449.0,
    original_price: 549.0,
    discount_percentage: 18.2,
    image_url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    brand: "ASUS",
    rating: 4.3,
    review_count: 128,
    url: "https://www.walmart.com/ip/laptop-4",
    source: "walmart",
    availability: "in_stock",
    shipping_info: {
      free_shipping_over_35: true,
    },
  },
  {
    id: "walmart_laptop_5",
    title: "Lenovo IdeaPad 3 15.6\" Laptop Intel Core i5-1235U 8GB RAM 256GB SSD",
    price: 379.0,
    original_price: 499.0,
    discount_percentage: 24.0,
    image_url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
    brand: "Lenovo",
    rating: 4.1,
    review_count: 89,
    url: "https://www.walmart.com/ip/laptop-5",
    source: "walmart",
    availability: "in_stock",
    shipping_info: {
      free_shipping_over_35: true,
    },
  },
  {
    id: "walmart_laptop_6",
    title: "Dell Inspiron 15 3000 Laptop Intel Celeron N4020 4GB RAM 128GB SSD",
    price: 229.0,
    original_price: 299.0,
    discount_percentage: 23.4,
    image_url: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop",
    brand: "Dell",
    rating: 3.9,
    review_count: 67,
    url: "https://www.walmart.com/ip/laptop-6",
    source: "walmart",
    availability: "in_stock",
    shipping_info: {
      free_shipping_over_35: true,
    },
  }
];

export const Default: Story = {
  args: {
    products: sampleProducts,
    title: "Recommended Laptops",
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
    products: [],
    title: "No Products Available",
  },
};
