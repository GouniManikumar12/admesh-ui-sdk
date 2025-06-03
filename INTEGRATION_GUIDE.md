# AdMesh UI SDK - Integration Guide

Complete guide for integrating AdMesh UI components into your application.

## 🚀 Getting Started

### Step 1: Install the Package

```bash
npm install admesh-ui-sdk
# or
yarn add admesh-ui-sdk
# or
pnpm add admesh-ui-sdk
```

### Step 2: Use Components (Zero Configuration!)

**✨ No CSS imports needed!** Styles are automatically injected when you use any AdMesh component.

```jsx
import { AdMeshLayout } from 'admesh-ui-sdk';

function App() {
  const recommendations = [
    {
      title: "Linear",
      reason: "The issue tracking tool you'll actually love.",
      intent_match_score: 0.98,
      admesh_link: "https://useadmesh.com/track?ad_id=linear&redirect=https://linear.app",
      ad_id: "linear-premium",
      product_id: "linear-issues",
      features: ["Issue Tracking", "Sprint Planning", "Git Integration"],
      has_free_tier: true,
      pricing: "$8 - $16/user/month",
      trial_days: 14,
      keywords: ["Project Management", "Development", "Productivity"]
    }
  ];

  return (
    <AdMeshLayout
      recommendations={recommendations}
      intentType="best_for_use_case"
      onProductClick={(adId, admeshLink) => {
        // Track the click
        console.log('Product clicked:', { adId, admeshLink });
        // Open the link
        window.open(admeshLink, '_blank');
      }}
    />
  );
}
```

## 🎯 Framework-Specific Examples

### Next.js Integration

```jsx
// pages/recommendations.js
import { AdMeshLayout } from '@admesh/ui-sdk';
import '@admesh/ui-sdk/dist/ui-sdk.css';

export default function RecommendationsPage({ recommendations }) {
  const handleProductClick = (adId, admeshLink) => {
    // Track with your analytics
    gtag('event', 'recommendation_click', {
      ad_id: adId,
      source: 'admesh'
    });
    
    // Open the tracked link
    window.open(admeshLink, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Recommended for You</h1>
      <AdMeshLayout
        recommendations={recommendations}
        intentType="best_for_use_case"
        theme={{ mode: "light" }}
        onProductClick={handleProductClick}
      />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch recommendations from your API or AdMesh API
  const recommendations = await fetchRecommendations();
  
  return {
    props: {
      recommendations
    }
  };
}
```

### React + Vite

```jsx
// src/App.jsx
import { useState, useEffect } from 'react';
import { AdMeshLayout } from '@admesh/ui-sdk';
import '@admesh/ui-sdk/dist/ui-sdk.css';

function App() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/recommendations');
        const data = await response.json();
        setRecommendations(data.recommendations || []);
      } catch (error) {
        console.error('Failed to fetch recommendations:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="flex justify-center p-8">Loading recommendations...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <AdMeshLayout
          recommendations={recommendations}
          theme={{ mode: "light" }}
          maxDisplayed={6}
          showMatchScores={true}
          onProductClick={(adId, admeshLink) => {
            window.open(admeshLink, '_blank');
          }}
        />
      </div>
    </div>
  );
}

export default App;
```

### Vue.js Integration

```vue
<template>
  <div class="recommendations-container">
    <div ref="admeshContainer"></div>
  </div>
</template>

<script>
import { createRoot } from 'react-dom/client';
import { createElement } from 'react';
import { AdMeshLayout } from '@admesh/ui-sdk';
import '@admesh/ui-sdk/dist/ui-sdk.css';

export default {
  name: 'RecommendationsWidget',
  props: {
    recommendations: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.renderAdMeshComponent();
  },
  updated() {
    this.renderAdMeshComponent();
  },
  methods: {
    renderAdMeshComponent() {
      const root = createRoot(this.$refs.admeshContainer);
      root.render(
        createElement(AdMeshLayout, {
          recommendations: this.recommendations,
          intentType: 'best_for_use_case',
          onProductClick: (adId, admeshLink) => {
            this.$emit('product-click', { adId, admeshLink });
            window.open(admeshLink, '_blank');
          }
        })
      );
    }
  }
};
</script>
```

## 🎨 Styling & Customization

### Using with Tailwind CSS

The components work perfectly with Tailwind CSS:

```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
    <AdMeshLayout
      recommendations={recommendations}
      theme={{ mode: "light" }}
    />
  </div>
</div>
```

### Custom Theme

```jsx
const customTheme = {
  mode: 'light',
  accentColor: '#10b981' // Custom green
};

<AdMeshLayout
  recommendations={recommendations}
  theme={customTheme}
/>
```

### Dark Mode

```jsx
// Automatic dark mode based on system preference
const [darkMode, setDarkMode] = useState(
  window.matchMedia('(prefers-color-scheme: dark)').matches
);

<AdMeshLayout
  recommendations={recommendations}
  theme={{ mode: darkMode ? 'dark' : 'light' }}
/>
```

## 📊 Analytics Integration

### Google Analytics

```jsx
import { gtag } from 'ga-gtag';

const handleProductClick = (adId, admeshLink) => {
  // Track with Google Analytics
  gtag('event', 'recommendation_click', {
    event_category: 'AdMesh',
    event_label: adId,
    value: 1
  });
  
  window.open(admeshLink, '_blank');
};

<AdMeshLayout
  recommendations={recommendations}
  onProductClick={handleProductClick}
  onTrackView={(adId, productId) => {
    gtag('event', 'recommendation_view', {
      event_category: 'AdMesh',
      event_label: adId
    });
  }}
/>
```

### Mixpanel

```jsx
import mixpanel from 'mixpanel-browser';

const handleProductClick = (adId, admeshLink) => {
  mixpanel.track('Recommendation Clicked', {
    ad_id: adId,
    source: 'admesh',
    timestamp: new Date().toISOString()
  });
  
  window.open(admeshLink, '_blank');
};
```

## 🔧 Advanced Configuration

### Custom Layout Selection

```jsx
<AdMeshLayout
  recommendations={recommendations}
  autoLayout={false} // Disable auto layout
  intentType="compare_products" // Force comparison table
  maxDisplayed={4}
/>
```

### Individual Components

```jsx
import { AdMeshProductCard, AdMeshCompareTable } from '@admesh/ui-sdk';

// Use individual cards
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {recommendations.map(rec => (
    <AdMeshProductCard
      key={rec.ad_id}
      recommendation={rec}
      showMatchScore={true}
      showBadges={true}
      maxKeywords={3}
      onClick={(adId, admeshLink) => window.open(admeshLink, '_blank')}
    />
  ))}
</div>

// Use comparison table
<AdMeshCompareTable
  recommendations={recommendations.slice(0, 3)}
  showMatchScores={true}
  showFeatures={true}
  onProductClick={(adId, admeshLink) => window.open(admeshLink, '_blank')}
/>
```

## 🚨 Common Issues & Solutions

### CSS Not Loading

Make sure to import the CSS file:

```jsx
import '@admesh/ui-sdk/dist/ui-sdk.css';
```

### TypeScript Errors

Install type definitions:

```bash
npm install --save-dev @types/react @types/react-dom
```

### Bundle Size Optimization

Use tree shaking to import only what you need:

```jsx
import { AdMeshLayout } from '@admesh/ui-sdk/dist/components/AdMeshLayout';
```

## 📱 Responsive Design

Components are fully responsive out of the box:

```jsx
// Mobile-first responsive container
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <AdMeshLayout recommendations={recommendations} />
</div>
```

## 🔒 Security Considerations

- All `admesh_link` URLs are validated before opening
- XSS protection is built into all text rendering
- No external scripts are loaded automatically
- All tracking is opt-in and configurable

## 📈 Performance Tips

1. **Lazy Loading**: Load recommendations on demand
2. **Memoization**: Use React.memo for static recommendations
3. **Virtual Scrolling**: For large lists of recommendations
4. **Image Optimization**: Optimize any custom images

```jsx
import { memo } from 'react';

const MemoizedLayout = memo(AdMeshLayout);

<MemoizedLayout recommendations={recommendations} />
```

## 🤝 Support

Need help? We're here for you:

- 📖 **Documentation**: https://docs.useadmesh.com
- 💬 **Discord**: https://discord.gg/admesh
- 📧 **Email**: support@useadmesh.com
- 🐛 **Issues**: https://github.com/GouniManikumar12/admesh-ui-sdk/issues
