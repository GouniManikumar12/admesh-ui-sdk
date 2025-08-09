import React from 'react';
import { AdMeshEcommerceCards, EcommerceProduct } from 'admesh-ui-sdk';

// Example: Converting AdMesh API response to EcommerceProduct format
function convertApiResponseToEcommerceProducts(apiResponse: any): EcommerceProduct[] {
  return apiResponse.response.recommendations.map((rec: any) => ({
    id: rec.ad_id || rec.product_id,
    title: rec.title,
    price: rec.price,
    original_price: rec.original_price,
    discount_percentage: rec.discount_percentage,
    image_url: rec.image_url,
    brand: rec.brand,
    rating: rec.rating,
    review_count: rec.review_count,
    url: rec.url || rec.redirect_url,
    source: rec.source || 'admesh',
    availability: rec.availability || 'in_stock',
    shipping_info: rec.shipping_info,
    description: rec.description,
    admesh_link: rec.admesh_link,
  }));
}

// Example usage with actual API response data
const ExampleEcommerceDisplay: React.FC = () => {
  // This is the actual API response from the "laptops" query
  const apiResponse = {
    "session_id": "test_laptops",
    "intent": {
      "intent_group": "transactional",
      "intent_type": "product_discovery",
      "categories": ["electronics", "computing", "laptops"],
      "goal": "The user is looking for information about laptops, indicating a desire to perhaps purchase, learn more about, or compare different laptop brands and models.",
      "known_mentions": ["laptops"],
      "keywords": ["laptops"],
      "llm_intent_confidence_score": 0.85
    },
    "response": {
      "summary": "Here are electronics tools that match your goal: The user is looking for information about laptops, indicating a desire to perhaps purchase, learn more about, or compare different laptop brands and models.",
      "recommendations": [
        {
          "title": "HP 15.6 inch Windows Touch Laptop Intel Core i3-N305 8GB RAM 256GB SSD Moonlight Blue",
          "reason": "Perfect match for 'laptops' - from trusted brand HP, highly rated (4.4/5)",
          "intent_match_score": 0.6,
          "ad_id": "walmart_15840257186",
          "product_id": "walmart_15840257186",
          "admesh_link": "https://goto.walmart.com/c/None/568844/9383?veh=aff&sourceid=imp_000011112222333344&u=https%3A%2F%2Fwww.walmart.com%2Fip%2F15840257186",
          "url": "https://www.walmart.com/ip/15840257186",
          "description": "The HP 15 inch FHD Laptop packs in the reliable processing power of an Intel Core processor, plus ample SSD storage, powerful graphics, and design with recycled materials to give you the power and capacity to do more.. Brand: HP. Save $190.00 from MSRP",
          "pricing": "$279.0",
          "image_url": "https://i5.walmartimages.com/asr/6f19d833-3b1f-4482-a2e3-efe4ebd791bc.94d309d793b48d07af4c27d45b860f37.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
          "source": "walmart",
          "brand": "HP",
          "rating": 4.4,
          "review_count": 97,
          "price": 279.0,
          "original_price": 469.0,
          "discount_percentage": 40.5,
          "availability": "in_stock",
          "shipping_info": {
            "free_shipping_over_35": true,
            "standard_rate": 0,
            "two_day_rate": 0
          }
        },
        {
          "title": "MSI Thin 15.6 inch FHD 144Hz Gaming Laptop Intel Core i5-13420H NVIDIA GeForce RTX 4050",
          "reason": "Perfect match for 'laptops' - from trusted brand MSI, highly rated (4.2/5)",
          "intent_match_score": 0.6,
          "ad_id": "walmart_15843466879",
          "product_id": "walmart_15843466879",
          "admesh_link": "https://goto.walmart.com/c/None/568844/9383?veh=aff&sourceid=imp_000011112222333344&u=https%3A%2F%2Fwww.walmart.com%2Fip%2F15843466879",
          "url": "https://www.walmart.com/ip/15843466879",
          "description": "The MSI Thin 15 is equipped with a 13th Gen Intel Core i5-13420H processor and NVIDIA GeForce RTX 4050 Laptop GPU.",
          "pricing": "$599.0",
          "image_url": "https://i5.walmartimages.com/asr/aa2646f3-3788-414c-b4f2-92c721dd215c.d7b975ea4876f1be66fc2d060c971f01.png?odnHeight=450&odnWidth=450&odnBg=ffffff",
          "source": "walmart",
          "brand": "MSI",
          "rating": 4.2,
          "review_count": 35,
          "price": 599.0,
          "original_price": 699.0,
          "discount_percentage": 14.3,
          "availability": "in_stock",
          "shipping_info": {
            "free_shipping_over_35": true,
            "standard_rate": 0,
            "two_day_rate": 0
          }
        },
        {
          "title": "Paypal",
          "reason": "This offer semantically related and excellent earning potential.",
          "intent_match_score": 0.3802,
          "ad_id": "7b67eee7-85bb-4040-89c2-849ece8a1b93",
          "product_id": "ae72b24a-b0dc-4ba3-aeee-f943a35c5d5c",
          "admesh_link": "http://127.0.0.1:8000/click/r/7b67eee7-85bb-4040-89c2-849ece8a1b93?utm_product=ae72b24a-b0dc-4ba3-aeee-f943a35c5d5c&utm_redirect=https%3A%2F%2Fwww.paypal.com&test=true",
          "url": "https://www.paypal.com",
          "description": "A global online payments system that supports online money transfers and serves as an electronic alternative to traditional paper methods like checks and money orders.",
          "pricing": "'PayPal charges a transaction fee for online purchases, and business accounts have monthly service fees, which can vary based on the plan selected",
          "source": "admesh",
          "brand": "PayPal",
          "price": 29.0,
          "image_url": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop"
        }
      ]
    }
  };

  // Convert API response to EcommerceProduct format
  const products = convertApiResponseToEcommerceProducts(apiResponse);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          AdMesh Ecommerce Cards Demo
        </h1>
        
        {/* Default Display */}
        <div className="mb-12">
          <AdMeshEcommerceCards
            products={products}
            title="Recommended Laptops"
            showPricing={true}
            showRatings={true}
            showBrand={true}
            showSource={true}
            cardWidth="md"
            maxCards={10}
            onProductClick={(product) => {
              console.log('Product clicked:', product);
              window.open(product.admesh_link || product.url, '_blank');
            }}
          />
        </div>

        {/* Compact Display */}
        <div className="mb-12">
          <AdMeshEcommerceCards
            products={products}
            title="Compact View"
            cardWidth="sm"
            showSource={false}
            showShipping={false}
            maxCards={6}
          />
        </div>

        {/* Large Cards */}
        <div className="mb-12">
          <AdMeshEcommerceCards
            products={products}
            title="Large Product Cards"
            cardWidth="lg"
            shadow="lg"
            borderRadius="lg"
            maxCards={4}
          />
        </div>

        {/* Dark Theme */}
        <div className="mb-12 bg-gray-900 p-6 rounded-lg">
          <AdMeshEcommerceCards
            products={products}
            title="Dark Theme"
            theme="dark"
            cardWidth="md"
            maxCards={5}
          />
        </div>

        {/* Minimal Display */}
        <div className="mb-12">
          <AdMeshEcommerceCards
            products={products}
            title="Minimal Display"
            showRatings={false}
            showBrand={false}
            showShipping={false}
            showSource={false}
            borderRadius="none"
            shadow="none"
            maxCards={8}
          />
        </div>
      </div>
    </div>
  );
};

export default ExampleEcommerceDisplay;

// Usage in your React app:
/*
import React, { useState, useEffect } from 'react';
import { AdMeshEcommerceCards, EcommerceProduct } from 'admesh-ui-sdk';

function MyApp() {
  const [products, setProducts] = useState<EcommerceProduct[]>([]);

  useEffect(() => {
    // Fetch from AdMesh API
    fetch('/agent/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: 'laptops',
        session_id: 'user_session_123'
      })
    })
    .then(res => res.json())
    .then(data => {
      const ecommerceProducts = convertApiResponseToEcommerceProducts(data);
      setProducts(ecommerceProducts);
    });
  }, []);

  return (
    <AdMeshEcommerceCards
      products={products}
      title="Product Recommendations"
      onProductClick={(product) => {
        // Track click and redirect
        window.open(product.admesh_link || product.url, '_blank');
      }}
    />
  );
}
*/
