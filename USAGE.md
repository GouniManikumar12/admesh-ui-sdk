# How to Use AdMesh UI SDK

This guide shows developers how to integrate AdMesh UI components into their applications.

## 📦 Installation

```bash
npm install @admesh/ui-sdk
```

## 🚀 Quick Start

### 1. Import Components and Styles

```jsx
import { AdMeshLayout } from '@admesh/ui-sdk';
import '@admesh/ui-sdk/dist/ui-sdk.css';
```

### 2. Prepare Your Data

```jsx
const recommendations = [
  {
    title: "Linear",
    reason: "Perfect for modern development teams",
    intent_match_score: 0.95,
    admesh_link: "https://useadmesh.com/track?ad_id=linear&redirect=https://linear.app",
    ad_id: "linear-premium",
    product_id: "linear-issues",
    features: ["Issue Tracking", "Sprint Planning"],
    has_free_tier: true,
    pricing: "$8/user/month",
    trial_days: 14,
    keywords: ["Development", "Project Management"]
  }
];
```

### 3. Render the Component

```jsx
function App() {
  return (
    <AdMeshLayout
      recommendations={recommendations}
      onProductClick={(adId, admeshLink) => {
        window.open(admeshLink, '_blank');
      }}
    />
  );
}
```

## 🎯 Component Options

### AdMeshLayout (Main Component)

```jsx
<AdMeshLayout
  recommendations={recommendations}        // Required: Array of recommendations
  intentType="best_for_use_case"          // Optional: Layout hint
  theme={{ mode: "light" }}               // Optional: Theme configuration
  maxDisplayed={6}                        // Optional: Max items to show
  showMatchScores={true}                  // Optional: Show match percentages
  showFeatures={true}                     // Optional: Show product features
  autoLayout={true}                       // Optional: Auto-select layout
  onProductClick={(adId, link) => {}}     // Optional: Click handler
  onTrackView={(adId, productId) => {}}   // Optional: View tracking
/>
```

### Individual Components

```jsx
// Single product card
<AdMeshProductCard
  recommendation={recommendation}
  theme={{ mode: "dark" }}
  showMatchScore={true}
  onClick={(adId, link) => window.open(link, '_blank')}
/>

// Comparison table
<AdMeshCompareTable
  recommendations={recommendations}
  maxProducts={3}
  showFeatures={true}
  onProductClick={(adId, link) => window.open(link, '_blank')}
/>
```

## 🎨 Styling

### Built-in Themes

```jsx
// Light theme (default)
<AdMeshLayout theme={{ mode: "light" }} />

// Dark theme
<AdMeshLayout theme={{ mode: "dark" }} />

// Custom accent color
<AdMeshLayout theme={{ 
  mode: "light", 
  accentColor: "#10b981" 
}} />
```

### CSS Customization

```css
/* Override default styles */
.admesh-card {
  border-radius: 16px !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important;
}

.admesh-button--primary {
  background: linear-gradient(135deg, #667eea, #764ba2) !important;
}
```

## 📊 Event Handling

### Click Tracking

```jsx
const handleProductClick = (adId, admeshLink) => {
  // Your analytics tracking
  analytics.track('recommendation_clicked', {
    ad_id: adId,
    timestamp: new Date().toISOString()
  });
  
  // Open the tracked link
  window.open(admeshLink, '_blank');
};

<AdMeshLayout
  recommendations={recommendations}
  onProductClick={handleProductClick}
/>
```

### View Tracking

```jsx
const handleProductView = (adId, productId) => {
  // Track when products come into view
  analytics.track('recommendation_viewed', {
    ad_id: adId,
    product_id: productId
  });
};

<AdMeshLayout
  recommendations={recommendations}
  onTrackView={handleProductView}
/>
```

## 🔧 Advanced Usage

### Conditional Rendering

```jsx
function RecommendationWidget({ query, userId }) {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecommendations(query, userId)
      .then(setRecommendations)
      .finally(() => setLoading(false));
  }, [query, userId]);

  if (loading) {
    return <div>Loading recommendations...</div>;
  }

  if (recommendations.length === 0) {
    return <div>No recommendations found</div>;
  }

  return (
    <AdMeshLayout
      recommendations={recommendations}
      intentType="best_for_use_case"
    />
  );
}
```

### Responsive Layout

```jsx
<div className="container mx-auto px-4">
  <div className="max-w-7xl mx-auto">
    <AdMeshLayout
      recommendations={recommendations}
      maxDisplayed={window.innerWidth < 768 ? 3 : 6}
    />
  </div>
</div>
```

### Error Handling

```jsx
function SafeRecommendations({ recommendations }) {
  try {
    return (
      <AdMeshLayout
        recommendations={recommendations}
        onProductClick={(adId, admeshLink) => {
          try {
            window.open(admeshLink, '_blank');
          } catch (error) {
            console.error('Failed to open link:', error);
            // Fallback behavior
            window.location.href = admeshLink;
          }
        }}
      />
    );
  } catch (error) {
    console.error('AdMesh component error:', error);
    return <div>Unable to load recommendations</div>;
  }
}
```

## 🌐 Framework Integration

### Next.js

```jsx
// pages/recommendations.js
import dynamic from 'next/dynamic';

const AdMeshLayout = dynamic(
  () => import('@admesh/ui-sdk').then(mod => mod.AdMeshLayout),
  { ssr: false }
);

export default function RecommendationsPage() {
  return (
    <div>
      <AdMeshLayout recommendations={recommendations} />
    </div>
  );
}
```

### React Router

```jsx
import { useParams } from 'react-router-dom';

function CategoryRecommendations() {
  const { category } = useParams();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetchRecommendationsByCategory(category)
      .then(setRecommendations);
  }, [category]);

  return (
    <AdMeshLayout
      recommendations={recommendations}
      intentType="best_for_use_case"
    />
  );
}
```

## 📱 Mobile Optimization

```jsx
// Responsive configuration
const isMobile = window.innerWidth < 768;

<AdMeshLayout
  recommendations={recommendations}
  maxDisplayed={isMobile ? 3 : 6}
  showFeatures={!isMobile} // Hide features on mobile
  theme={{ mode: "light" }}
/>
```

## 🔍 SEO Considerations

```jsx
// Add structured data for SEO
function SEORecommendations({ recommendations }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": recommendations.map((rec, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": rec.title,
        "description": rec.reason
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AdMeshLayout recommendations={recommendations} />
    </>
  );
}
```

## 🚨 Common Issues

### CSS Not Loading
```jsx
// Make sure to import the CSS
import '@admesh/ui-sdk/dist/ui-sdk.css';
```

### TypeScript Errors
```bash
npm install --save-dev @types/react @types/react-dom
```

### Bundle Size
```jsx
// Use tree shaking for smaller bundles
import { AdMeshLayout } from '@admesh/ui-sdk/dist/components/AdMeshLayout';
```

## 📞 Support

- 📖 **Documentation**: https://docs.useadmesh.com
- 🐛 **Issues**: https://github.com/GouniManikumar12/admesh-ui-sdk/issues
- 📧 **Email**: mani@useadmesh.com
