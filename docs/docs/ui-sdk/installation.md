---
sidebar_position: 1
---

# UI SDK Installation

The AdMesh UI SDK is a production-ready React + TypeScript component library for displaying product recommendations with integrated tracking, theming, and conversational interface support.

## Requirements

- **React 18.0 or higher**
- **TypeScript 4.9 or higher** (optional but recommended)
- **Node.js 18.0 or higher**

## Installation

### Using npm

```bash
npm install admesh-ui-sdk
```

### Using yarn

```bash
yarn add admesh-ui-sdk
```

### Using pnpm

```bash
pnpm add admesh-ui-sdk
```

## Quick Setup

The UI SDK is designed to be completely self-contained with no additional setup required:

```tsx
import React from 'react';
import { AdMeshLayout } from 'admesh-ui-sdk';
// No CSS import needed! Styles are auto-injected ✨

function App() {
  const recommendations = [
    {
      title: "HubSpot CRM",
      reason: "Perfect for remote teams with excellent collaboration features",
      intent_match_score: 0.92,
      admesh_link: "https://useadmesh.com/track?ad_id=hubspot-123",
      ad_id: "hubspot-123",
      product_id: "hubspot-crm"
    }
  ];

  return (
    <AdMeshLayout
      recommendations={recommendations}
      autoLayout={true}
      onProductClick={(adId, admeshLink) => {
        window.open(admeshLink, '_blank');
      }}
    />
  );
}
```

## Framework Compatibility

### React

The UI SDK is built for React and works with:

- **Create React App** - Works out of the box
- **Next.js** - Full SSR/SSG support
- **Vite** - Fast development and building
- **Remix** - Server-side rendering support
- **Gatsby** - Static site generation

### Next.js Setup

For Next.js applications, no special configuration is needed:

```tsx
// pages/recommendations.tsx or app/recommendations/page.tsx
import { AdMeshLayout } from 'admesh-ui-sdk';

export default function RecommendationsPage() {
  return (
    <div>
      <h1>Product Recommendations</h1>
      <AdMeshLayout recommendations={recommendations} />
    </div>
  );
}
```

### Vite Setup

For Vite applications:

```tsx
// src/App.tsx
import { AdMeshLayout } from 'admesh-ui-sdk';

function App() {
  return (
    <div className="App">
      <AdMeshLayout recommendations={recommendations} />
    </div>
  );
}

export default App;
```

## TypeScript Support

The UI SDK includes full TypeScript definitions:

```tsx
import React from 'react';
import { 
  AdMeshLayout, 
  AdMeshRecommendation, 
  AdMeshTheme 
} from 'admesh-ui-sdk';

interface AppProps {
  recommendations: AdMeshRecommendation[];
}

const theme: AdMeshTheme = {
  mode: 'dark',
  accentColor: '#8b5cf6'
};

function App({ recommendations }: AppProps) {
  return (
    <AdMeshLayout
      recommendations={recommendations}
      theme={theme}
      autoLayout={true}
    />
  );
}
```

## Styling and Theming

### Automatic Style Injection

The UI SDK automatically injects its styles - no manual CSS imports needed:

```tsx
// ✅ This is all you need
import { AdMeshLayout } from 'admesh-ui-sdk';

// ❌ No need for this
// import 'admesh-ui-sdk/styles.css';
```

### Custom Theming

Customize the appearance with theme props:

```tsx
import { AdMeshLayout } from 'admesh-ui-sdk';

const customTheme = {
  mode: 'dark', // 'light' | 'dark'
  accentColor: '#3b82f6', // Custom accent color
};

<AdMeshLayout
  recommendations={recommendations}
  theme={customTheme}
/>
```

### CSS Custom Properties

For advanced customization, override CSS custom properties:

```css
/* Your global CSS */
:root {
  --admesh-primary-color: #8b5cf6;
  --admesh-border-radius: 12px;
  --admesh-font-family: 'Inter', sans-serif;
}

[data-theme='dark'] {
  --admesh-primary-color: #a78bfa;
  --admesh-background-color: #1f2937;
  --admesh-text-color: #f9fafb;
}
```

## Bundle Size Optimization

### Tree Shaking

Import only the components you need:

```tsx
// ✅ Tree-shakable imports
import { AdMeshLayout, AdMeshProductCard } from 'admesh-ui-sdk';

// ❌ Imports entire library
import * as AdMesh from 'admesh-ui-sdk';
```

### Dynamic Imports

For code splitting, use dynamic imports:

```tsx
import React, { lazy, Suspense } from 'react';

const AdMeshLayout = lazy(() => 
  import('admesh-ui-sdk').then(module => ({ 
    default: module.AdMeshLayout 
  }))
);

function App() {
  return (
    <Suspense fallback={<div>Loading recommendations...</div>}>
      <AdMeshLayout recommendations={recommendations} />
    </Suspense>
  );
}
```

## Development Setup

### With Create React App

```bash
npx create-react-app my-app --template typescript
cd my-app
npm install admesh-ui-sdk
```

```tsx
// src/App.tsx
import React from 'react';
import { AdMeshLayout } from 'admesh-ui-sdk';

function App() {
  return (
    <div className="App">
      <AdMeshLayout recommendations={[]} />
    </div>
  );
}

export default App;
```

### With Next.js

```bash
npx create-next-app@latest my-app --typescript
cd my-app
npm install admesh-ui-sdk
```

```tsx
// pages/index.tsx
import { AdMeshLayout } from 'admesh-ui-sdk';

export default function Home() {
  return (
    <main>
      <h1>Welcome to AdMesh</h1>
      <AdMeshLayout recommendations={[]} />
    </main>
  );
}
```

### With Vite

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install admesh-ui-sdk
```

## Integration with Backend SDKs

Combine with AdMesh backend SDKs for full functionality:

### With Python Backend

```python
# backend/api.py
from admesh import Admesh
from flask import Flask, jsonify

app = Flask(__name__)
client = Admesh()

@app.route('/api/recommendations')
def get_recommendations():
    response = client.recommend.get_recommendations(
        query=request.args.get('query'),
        format='auto'
    )
    return jsonify(response.response.recommendations)
```

```tsx
// frontend/src/App.tsx
import React, { useState, useEffect } from 'react';
import { AdMeshLayout } from 'admesh-ui-sdk';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch('/api/recommendations?query=CRM software')
      .then(res => res.json())
      .then(setRecommendations);
  }, []);

  return <AdMeshLayout recommendations={recommendations} />;
}
```

### With TypeScript Backend

```typescript
// backend/api.ts
import Admesh from 'admesh';
import express from 'express';

const app = express();
const client = new Admesh();

app.get('/api/recommendations', async (req, res) => {
  const response = await client.recommend.getRecommendations({
    query: req.query.query as string,
    format: 'auto'
  });
  
  res.json(response.response?.recommendations || []);
});
```

## Troubleshooting

### Common Issues

#### Styles Not Loading

If styles aren't appearing:

```tsx
// Make sure you're importing from the correct package
import { AdMeshLayout } from 'admesh-ui-sdk'; // ✅ Correct

// Not from a different package
import { AdMeshLayout } from 'admesh-ui-sdk'; // ❌ Wrong package
```

#### TypeScript Errors

If you get TypeScript errors:

```bash
# Make sure you have the latest version
npm update admesh-ui-sdk

# Check your TypeScript version
npx tsc --version
# Should be 4.9 or higher
```

#### Bundle Size Issues

If your bundle is too large:

```tsx
// Use specific imports instead of barrel imports
import { AdMeshLayout } from 'admesh-ui-sdk/components/AdMeshLayout';
import { AdMeshProductCard } from 'admesh-ui-sdk/components/AdMeshProductCard';
```

#### React Version Conflicts

If you get React version warnings:

```bash
# Check your React version
npm list react

# Update React if needed
npm update react react-dom
```

### Performance Optimization

#### Lazy Loading

```tsx
import React, { lazy, Suspense } from 'react';

const AdMeshSidebar = lazy(() => import('admesh-ui-sdk/components/AdMeshSidebar'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdMeshSidebar recommendations={recommendations} />
    </Suspense>
  );
}
```

#### Memoization

```tsx
import React, { memo, useMemo } from 'react';
import { AdMeshLayout } from 'admesh-ui-sdk';

const MemoizedRecommendations = memo(function Recommendations({ recommendations }) {
  const memoizedRecommendations = useMemo(() => 
    recommendations.filter(rec => rec.intent_match_score > 0.8),
    [recommendations]
  );

  return <AdMeshLayout recommendations={memoizedRecommendations} />;
});
```

## Next Steps

After completing UI SDK installation:

1. **[Getting Started](/getting-started/overview)** - Core concepts and setup
2. **[Python SDK](/python-sdk/installation)** - Backend SDK integration
3. **[TypeScript SDK](/typescript-sdk/installation)** - Node.js SDK integration
4. **[Examples](/examples/ai-assistant)** - Implementation examples

## Support Resources

For installation assistance:

- **GitHub Issues**: [Report issues](https://github.com/GouniManikumar12/admesh-ui-sdk/issues)
- **Support**: [support@useadmesh.com](mailto:support@useadmesh.com)
- **Documentation**: Complete technical documentation
