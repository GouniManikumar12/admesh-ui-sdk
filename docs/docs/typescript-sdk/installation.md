---
sidebar_position: 1
---

# TypeScript SDK Installation

Technical guide for installing and configuring the AdMesh TypeScript SDK for Node.js applications and serverless functions.

## Installation

### NPM Installation

```bash
npm install admesh
```

### Yarn Installation

```bash
yarn add admesh
```

### PNPM Installation

```bash
pnpm add admesh
```

## Basic Configuration

### Environment Setup

```typescript
// .env
ADMESH_API_KEY=your_api_key_here
ADMESH_BASE_URL=https://api.useadmesh.com
```

### Client Initialization

```typescript
import Admesh from 'admesh';

// Environment variable configuration (recommended)
const client = new Admesh({
  apiKey: process.env.ADMESH_API_KEY
});

// Direct configuration
const client = new Admesh({
  apiKey: 'your_api_key_here',
  baseUrl: 'https://api.useadmesh.com'
});
```

## Basic Usage

### Get Recommendations

```typescript
import Admesh from 'admesh';

const client = new Admesh({
  apiKey: process.env.ADMESH_API_KEY
});

async function getRecommendations() {
  try {
    const response = await client.recommend.getRecommendations({
      query: 'Enterprise CRM solutions',
      format: 'auto'
    });
    
    console.log('Recommendations:', response.recommendations);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## Configuration Options

### Client Configuration

```typescript
interface AdmeshConfig {
  apiKey: string;
  baseUrl?: string;
  timeout?: number;
  retries?: number;
}

const client = new Admesh({
  apiKey: process.env.ADMESH_API_KEY,
  baseUrl: 'https://api.useadmesh.com',
  timeout: 30000,
  retries: 3
});
```

## Error Handling

```typescript
import Admesh, { AdmeshError, AuthenticationError } from 'admesh';

try {
  const response = await client.recommend.getRecommendations({
    query: 'CRM software'
  });
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.error('Authentication failed:', error.message);
  } else if (error instanceof AdmeshError) {
    console.error('AdMesh API error:', error.message);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Next Steps

- **[Getting Started](/getting-started/overview)** - Core concepts and setup
- **[API Reference](/api/authentication)** - Complete API documentation
- **[Examples](/examples/ai-assistant)** - Implementation examples
