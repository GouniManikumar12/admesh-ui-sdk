# AdMesh UI SDK

A React + TypeScript component library for displaying AdMesh product recommendations with built-in tracking and theming support.

## 🚀 Features

- **Pre-built UI Components** - Ready-to-use components for product recommendations
- **Built-in Tracking** - Automatic click, view, and conversion tracking
- **Intelligent Layouts** - Auto-selects optimal layout based on intent and data
- **Theme Support** - Light/dark mode with custom accent colors
- **TypeScript First** - Full type safety and IntelliSense support
- **Framework Agnostic** - React core, but designed for easy embedding
- **Responsive Design** - Mobile-first responsive components
- **Accessibility** - WCAG 2.1 AA compliant

## 📦 Installation

```bash
npm install admesh-ui-sdk
```

## 🎯 Quick Start

```tsx
import React from 'react';
import { AdMeshLayout } from 'admesh-ui-sdk';
// No CSS import needed! Styles are auto-injected ✨

const recommendations = [
  {
    title: "HubSpot CRM",
    reason: "Perfect for remote teams with excellent collaboration features",
    intent_match_score: 0.92,
    admesh_link: "https://useadmesh.com/track?ad_id=hubspot-123",
    ad_id: "hubspot-123",
    product_id: "hubspot-crm",
    has_free_tier: true,
    trial_days: 14,
    keywords: ["CRM", "Sales", "Marketing"]
  }
];

function App() {
  return (
    <AdMeshLayout
      recommendations={recommendations}
      autoLayout={true}
      showMatchScores={true}
      onProductClick={(adId, admeshLink) => {
        console.log('Product clicked:', { adId, admeshLink });
      }}
    />
  );
}
```

## 🧩 Components

### AdMeshLayout
The main layout component that automatically chooses the best display format.

### AdMeshProductCard
Individual product recommendation card.

### AdMeshCompareTable
Side-by-side product comparison table.

### AdMeshBadge
Reusable badge component.

### AdMeshLinkTracker
Wrapper for tracking any clickable element.

## 🎨 Theming

```tsx
const theme = {
  mode: 'dark', // 'light' | 'dark'
  accentColor: '#8b5cf6', // Custom accent color
};

<AdMeshLayout theme={theme} recommendations={recommendations} />
```

## 📊 Tracking

All components include built-in view and click tracking:

```tsx
import { setAdMeshTrackerConfig } from '@admesh/ui-sdk';

setAdMeshTrackerConfig({
  apiBaseUrl: 'https://api.useadmesh.com',
  enabled: true,
  debug: true
});
```

## 🔗 Integration with AdMesh SDKs

Works seamlessly with AdMesh backend SDKs:

```tsx
import { AdMesh } from '@admesh/typescript-sdk';
import { AdMeshLayout } from '@admesh/ui-sdk';

const client = new AdMesh({ apiKey: 'your-api-key' });

async function getRecommendations(query: string) {
  const response = await client.recommend.getRecommendations({
    query,
    format: 'auto'
  });

  return (
    <AdMeshLayout
      recommendations={response.response?.recommendations || []}
      autoLayout={true}
    />
  );
}
```

## 📚 API Reference

### Types

```tsx
interface AdMeshRecommendation {
  title: string;
  reason: string;
  intent_match_score: number; // 0-1
  admesh_link: string;
  ad_id: string;
  product_id: string;
  features?: string[];
  has_free_tier?: boolean;
  trial_days?: number;
  pricing?: string;
  keywords?: string[];
}

type IntentType =
  | 'compare_products'
  | 'best_for_use_case'
  | 'trial_demo'
  | 'budget_conscious';

interface AdMeshTheme {
  mode: 'light' | 'dark';
  accentColor?: string;
}
```

## 🛠 Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build library
npm run build

# Run linting
npm run lint
```

## 📄 License

MIT License

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and stories
5. Submit a pull request

## 📞 Support

- Documentation: [AdMesh Docs](https://docs.useadmesh.com)
- GitHub Issues: [Report a bug](https://github.com/GouniManikumar12/admesh-ui-sdk/issues)
- Email: support@useadmesh.com
