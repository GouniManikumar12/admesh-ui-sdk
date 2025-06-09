---
sidebar_position: 2
---

# Getting Your API Key

To use AdMesh APIs and SDKs, you'll need an API key. This guide walks you through the process of creating an account and obtaining your API key.

## Creating an Account

### Step 1: Sign Up

1. Visit [useadmesh.com/agent](https://useadmesh.com/agent)
2. Click **"Sign Up"** to create a new account
3. Fill in your details:
   - Email address
   - Password
   - Company/Project name (optional)

### Step 2: Email Verification

1. Check your email for a verification message from AdMesh
2. Click the verification link to activate your account
3. You'll be redirected to the AdMesh dashboard

## Obtaining Your API Key

### Step 1: Access the Dashboard

1. Log in to your AdMesh account at [useadmesh.com/agent](https://useadmesh.com/agent)
2. Navigate to the **API Keys** section in the dashboard

### Step 2: Generate API Key

1. Click **"Generate New API Key"**
2. Give your API key a descriptive name (e.g., "Production App", "Development")
3. Select the appropriate permissions:
   - **Read** - Get recommendations
   - **Write** - Submit tracking data
   - **Admin** - Manage offers and settings

### Step 3: Copy and Secure Your Key

:::warning Important
Your API key will only be shown once. Make sure to copy and store it securely.
:::

1. Copy the generated API key
2. Store it in a secure location (password manager, environment variables)
3. Never commit API keys to version control

## API Key Types

AdMesh provides different types of API keys for different environments:

### Production Keys
- Used for live applications
- Full rate limits apply
- Real analytics and tracking
- Revenue attribution enabled

### Test Keys
- Used for development and testing
- Reduced rate limits
- Sandbox environment
- No revenue attribution

### Development Keys
- Local development only
- Unlimited requests for testing
- Mock data responses available
- No analytics tracking

## Using Your API Key

### Environment Variables (Recommended)

Store your API key as an environment variable:

```bash
# .env file
ADMESH_API_KEY=your_api_key_here
```

### Python SDK

```python
import os
from admesh import Admesh

# Using environment variable (recommended)
client = Admesh(api_key=os.environ.get("ADMESH_API_KEY"))

# Or pass directly (not recommended for production)
client = Admesh(api_key="your_api_key_here")
```

### TypeScript SDK

```typescript
import Admesh from 'admesh';

// Using environment variable (recommended)
const client = new Admesh({
  apiKey: process.env.ADMESH_API_KEY
});

// Or pass directly (not recommended for production)
const client = new Admesh({
  apiKey: 'your_api_key_here'
});
```

### Using dotenv

For local development, use dotenv to load environment variables:

#### Python
```python
# Install: pip install python-dotenv
from dotenv import load_dotenv
load_dotenv()

from admesh import Admesh
client = Admesh()  # Automatically uses ADMESH_API_KEY from .env
```

#### Node.js
```typescript
// Install: npm install dotenv
require('dotenv').config();

import Admesh from 'admesh';
const client = new Admesh(); // Automatically uses ADMESH_API_KEY from .env
```

## Security Best Practices

### ✅ Do's

- Store API keys in environment variables
- Use different keys for different environments
- Rotate keys regularly
- Monitor API key usage in the dashboard
- Use the principle of least privilege (minimal required permissions)

### ❌ Don'ts

- Never commit API keys to version control
- Don't share API keys in chat or email
- Don't use production keys in development
- Don't hardcode keys in your application code
- Don't expose keys in client-side code

## Rate Limits

Different subscription tiers have different rate limits:

| Plan | Daily Requests | Monthly Requests | Rate Limit |
|------|----------------|------------------|------------|
| **Free** | 10,000 | 100,000 | 100/minute |
| **Pro** | 50,000 | 1,000,000 | 500/minute |
| **Enterprise** | Unlimited | Unlimited | 1000/minute |

## Managing API Keys

### Viewing Usage

Monitor your API key usage in the dashboard:
- Request count and rate limit status
- Error rates and response times
- Geographic distribution of requests
- Most popular endpoints

### Rotating Keys

To rotate an API key:
1. Generate a new API key in the dashboard
2. Update your application with the new key
3. Test that everything works correctly
4. Delete the old API key

### Revoking Keys

If an API key is compromised:
1. Immediately revoke the key in the dashboard
2. Generate a new API key
3. Update all applications using the old key
4. Monitor for any unauthorized usage

## Troubleshooting

### Common Issues

#### Invalid API Key
```json
{
  "error": "Invalid API key",
  "code": "INVALID_API_KEY",
  "status": 401
}
```
**Solution**: Verify your API key is correct and hasn't been revoked.

#### Rate Limit Exceeded
```json
{
  "error": "Rate limit exceeded",
  "code": "RATE_LIMIT_EXCEEDED", 
  "status": 429
}
```
**Solution**: Implement exponential backoff or upgrade your plan.

#### Insufficient Permissions
```json
{
  "error": "Insufficient permissions",
  "code": "INSUFFICIENT_PERMISSIONS",
  "status": 403
}
```
**Solution**: Check that your API key has the required permissions.

### Getting Help

If you're having trouble with API keys:
- Contact support at [support@useadmesh.com](mailto:support@useadmesh.com)
- Check our [GitHub Issues](https://github.com/GouniManikumar12/admesh-python/issues)
- Join our community discussions

---

Now that you have your API key, let's make your first API call in the [Quick Start Guide](/getting-started/quick-start)!
