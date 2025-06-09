---
sidebar_position: 3
---

# Quick Start Guide

Get up and running with AdMesh in under 5 minutes! This guide will walk you through making your first recommendation request using any of our SDKs.

## Prerequisites

- ✅ AdMesh account ([sign up here](https://useadmesh.com/agent))
- ✅ API key ([get yours here](/getting-started/api-keys))
- ✅ Development environment (Python 3.8+, Node.js 18+, or React app)

## Choose Your Adventure

Select the SDK that matches your technology stack:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="python" label="🐍 Python" default>

### 1. Install the Python SDK

```bash
pip install admesh-python
```

### 2. Set up your environment

```bash
# Create a .env file
echo "ADMESH_API_KEY=your_api_key_here" > .env
```

### 3. Make your first request

```python
import os
from admesh import Admesh

# Initialize the client
client = Admesh(api_key=os.environ.get("ADMESH_API_KEY"))

# Get recommendations
response = client.recommend.get_recommendations(
    query="Best CRM for remote teams",
    format="auto"
)

# Print results
print(f"Recommendation ID: {response.recommendation_id}")
print(f"Found {len(response.response.recommendations)} recommendations:")

for rec in response.response.recommendations:
    print(f"\n🎯 {rec.title}")
    print(f"   Reason: {rec.reason}")
    print(f"   Match Score: {rec.intent_match_score:.2f}")
    print(f"   Link: {rec.admesh_link}")
```

### 4. Run your code

```bash
python your_script.py
```

</TabItem>
<TabItem value="typescript" label="🟦 TypeScript">

### 1. Install the TypeScript SDK

```bash
npm install admesh
# or
yarn add admesh
```

### 2. Set up your environment

```bash
# Create a .env file
echo "ADMESH_API_KEY=your_api_key_here" > .env
```

### 3. Make your first request

```typescript
import Admesh from 'admesh';

// Initialize the client
const client = new Admesh({
  apiKey: process.env.ADMESH_API_KEY
});

async function getRecommendations() {
  try {
    // Get recommendations
    const response = await client.recommend.getRecommendations({
      query: 'Best CRM for remote teams',
      format: 'auto'
    });

    // Print results
    console.log(`Recommendation ID: ${response.recommendation_id}`);
    console.log(`Found ${response.response?.recommendations?.length} recommendations:`);

    response.response?.recommendations?.forEach(rec => {
      console.log(`\n🎯 ${rec.title}`);
      console.log(`   Reason: ${rec.reason}`);
      console.log(`   Match Score: ${rec.intent_match_score?.toFixed(2)}`);
      console.log(`   Link: ${rec.admesh_link}`);
    });
  } catch (error) {
    console.error('Error getting recommendations:', error);
  }
}

getRecommendations();
```

### 4. Run your code

```bash
# For Node.js with dotenv
npm install dotenv
node -r dotenv/config your_script.js

# For TypeScript
npx ts-node your_script.ts
```

</TabItem>
<TabItem value="react" label="⚛️ React">

### 1. Install the UI SDK

```bash
npm install admesh-ui-sdk
# or
yarn add admesh-ui-sdk
```

### 2. Create a simple React component

```tsx
import React, { useState, useEffect } from 'react';
import { AdMeshLayout } from 'admesh-ui-sdk';

// Mock recommendations for this example
const mockRecommendations = [
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
  },
  {
    title: "Salesforce",
    reason: "Enterprise-grade CRM with powerful automation",
    intent_match_score: 0.88,
    admesh_link: "https://useadmesh.com/track?ad_id=salesforce-456",
    ad_id: "salesforce-456", 
    product_id: "salesforce-crm",
    has_free_tier: false,
    trial_days: 30,
    keywords: ["CRM", "Enterprise", "Automation"]
  }
];

function App() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // In a real app, you'd fetch from your backend
    // const response = await fetch('/api/recommendations');
    // const data = await response.json();
    // setRecommendations(data.recommendations);
    
    setRecommendations(mockRecommendations);
  }, []);

  return (
    <div className="App">
      <h1>AdMesh Quick Start</h1>
      <p>Here are some CRM recommendations for remote teams:</p>
      
      <AdMeshLayout
        recommendations={recommendations}
        autoLayout={true}
        showMatchScores={true}
        onProductClick={(adId, admeshLink) => {
          console.log('Product clicked:', { adId, admeshLink });
          window.open(admeshLink, '_blank');
        }}
      />
    </div>
  );
}

export default App;
```

### 3. Run your React app

```bash
npm start
# or
yarn start
```

</TabItem>
</Tabs>

## Expected Output

When you run any of the examples above, you should see output similar to:

```
Recommendation ID: rec_abc123xyz
Found 2 recommendations:

🎯 HubSpot CRM
   Reason: Perfect for remote teams with excellent collaboration features
   Match Score: 0.92
   Link: https://useadmesh.com/track?ad_id=hubspot-123

🎯 Salesforce
   Reason: Enterprise-grade CRM with powerful automation
   Match Score: 0.88
   Link: https://useadmesh.com/track?ad_id=salesforce-456
```

## Understanding the Response

Each recommendation includes:

- **title** - Product name
- **reason** - AI-generated explanation for why it's recommended
- **intent_match_score** - How well it matches the query (0-1)
- **admesh_link** - Tracked link for analytics and monetization
- **ad_id** - Unique identifier for the advertisement
- **product_id** - Unique identifier for the product

## Next Steps

### 🔧 Customize Your Integration

<div className="feature-box feature-box--tip">

**For AI Applications**: Check out our [AI Integration Guide](/ai-integration/overview) for chatbots and AI assistants.

</div>

<div className="feature-box feature-box--tip">

**For Web Applications**: Explore our [UI SDK Installation](/ui-sdk/installation) for rich recommendation displays.

</div>

<div className="feature-box feature-box--tip">

**For Backend Services**: Learn about [Python SDK](/python-sdk/installation) and [TypeScript SDK](/typescript-sdk/installation).

</div>

### 📚 Explore More Features

- **[AI Integration](/ai-integration/overview)** - Citation-based recommendations for AI assistants
- **[API Reference](/api/authentication)** - Complete API documentation
- **[Examples](/examples/ai-assistant)** - Implementation examples
- **[UI SDK](/ui-sdk/installation)** - Frontend component integration

### 🛠 Advanced Configuration

#### Error Handling

```python
import admesh

try:
    response = client.recommend.get_recommendations(
        query="Best CRM for remote teams",
        format="auto"
    )
except admesh.NoRecommendationsError:
    print("No recommendations found for this query")
except admesh.RateLimitError:
    print("Rate limit exceeded, please try again later")
except admesh.APIError as e:
    print(f"API error: {e}")
```

#### Custom Parameters

```python
response = client.recommend.get_recommendations(
    query="Best CRM for remote teams",
    format="auto",
    max_recommendations=5,
    include_free_tier=True,
    min_trust_score=0.8
)
```

## Troubleshooting

### Common Issues

#### Authentication Error
```
Error: Invalid API key
```
**Solution**: Double-check your API key and ensure it's set correctly in your environment variables.

#### No Recommendations
```
NoRecommendationsError: No recommendations available
```
**Solution**: Try a different query or set `raise_on_empty_recommendations=False` to handle empty results gracefully.

#### Rate Limit
```
RateLimitError: Rate limit exceeded
```
**Solution**: Implement exponential backoff or upgrade your plan for higher limits.

### Getting Help

- 📖 **Documentation**: Browse our comprehensive guides
- 🐛 **Issues**: [Report bugs on GitHub](https://github.com/GouniManikumar12/admesh-python/issues)
- 💬 **Support**: [support@useadmesh.com](mailto:support@useadmesh.com)

---

🎉 **Congratulations!** You've successfully made your first AdMesh API call. Ready to build something amazing? Explore our detailed SDK guides and examples to learn more!
