---
sidebar_position: 1
slug: /
---

# AdMesh SDK Documentation

AdMesh SDK Documentation provides comprehensive technical guidance for integrating AI-powered product recommendation capabilities into enterprise applications and AI systems.

## What is AdMesh?

AdMesh is an enterprise-grade recommendation engine that enables developers to integrate intelligent product suggestions into applications. The platform supports chatbots, AI assistants, e-commerce platforms, and business applications requiring contextual product recommendations.

## Available SDKs

AdMesh provides three production-ready SDKs for different development environments:

### Python SDK
Backend integration for AI applications, data processing pipelines, and server-side implementations.

```python
from admesh import Admesh

client = Admesh(api_key="your-api-key")
response = client.recommend.get_recommendations(
    query="Enterprise CRM solutions for distributed teams",
    format="auto"
)
```

### TypeScript SDK
Node.js integration for serverless functions, API services, and modern web backends.

```typescript
import Admesh from 'admesh';

const client = new Admesh({ apiKey: 'your-api-key' });
const response = await client.recommend.getRecommendations({
  query: 'Enterprise CRM solutions for distributed teams',
  format: 'auto'
});
```

### UI SDK
React component library for frontend recommendation display with integrated analytics and tracking.

```tsx
import { AdMeshLayout } from 'admesh-ui-sdk';

<AdMeshLayout
  recommendations={recommendations}
  autoLayout={true}
  onProductClick={(adId, admeshLink) => {
    window.open(admeshLink, '_blank');
  }}
/>
```

## AI Agent Integration

AdMesh provides enterprise-grade integration capabilities for AI applications and intelligent agents:

- **Intent Detection Engine** - Automated query analysis and categorization
- **Contextual Recommendations** - Context-aware product suggestions
- **Citation Integration** - Numbered reference system for conversational interfaces
- **Automated Recommendations** - Trigger-based suggestion generation
- **Conversational Components** - Chat-optimized UI elements

## Key Features

### Smart Recommendation Engine
- Machine learning-powered intent detection
- Semantic matching using cosine similarity algorithms
- Trust score-based quality filtering
- Real-time recommendation processing

### Analytics and Tracking
- Automated view and interaction tracking
- Conversion monitoring and attribution
- Performance metrics and reporting
- Revenue analytics and insights

### UI Component Library
- Production-ready React components
- Citation-based conversational interfaces
- Sidebar and floating chat implementations
- Automated recommendation widgets
- Theme customization support

### Developer Experience
- Full TypeScript support with type safety
- Comprehensive error handling and validation
- Asynchronous operation support
- Complete documentation and implementation examples

## Quick Start

1. **Obtain API credentials** from the [AdMesh Dashboard](https://useadmesh.com/agent)
2. **Select appropriate SDK** based on your technology stack
3. **Install SDK** using your package manager
4. **Implement integration** following our technical guides

## Documentation Structure

- **[Getting Started](/getting-started/overview)** - Setup and configuration
- **[Python SDK](/python-sdk/installation)** - Python integration guide
- **[UI SDK](/ui-sdk/installation)** - React component integration
- **[AI Integration](/ai-integration/overview)** - AI agent implementation guides
- **[API Reference](/api/authentication)** - Complete API documentation
- **[Examples](/examples/ai-assistant)** - Implementation examples

## Support Resources

- **Documentation**: Complete technical documentation
- **Issues**: [GitHub Issues](https://github.com/GouniManikumar12/admesh-python/issues)
- **Support**: [support@useadmesh.com](mailto:support@useadmesh.com)
- **Dashboard**: [useadmesh.com](https://useadmesh.com)

## Resources

- [AdMesh Dashboard](https://useadmesh.com) - API key management and analytics
- [Python SDK Repository](https://github.com/GouniManikumar12/admesh-python)
- [TypeScript SDK Repository](https://github.com/GouniManikumar12/admesh-typescript)
- [UI SDK Repository](https://github.com/GouniManikumar12/admesh-ui-sdk)

---

Begin integration by following our [Getting Started Guide](/getting-started/overview).
