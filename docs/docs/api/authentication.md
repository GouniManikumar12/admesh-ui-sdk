---
sidebar_position: 1
---

# Authentication

Technical documentation for AdMesh API authentication using API keys and error handling procedures.

## Overview

AdMesh implements API key-based authentication for all requests. API keys are account-specific and provide access to the recommendation engine and tracking capabilities.

## API Key Format

AdMesh API keys follow this format:
```
admesh_[environment]_[random_string]
```

Examples:
- `admesh_prod_abc123xyz789` - Production key
- `admesh_test_def456uvw012` - Test key
- `admesh_dev_ghi789rst345` - Development key

## Authentication Methods

### HTTP Header (Recommended)

Include your API key in the `Authorization` header:

```http
GET /api/v1/recommendations
Host: api.useadmesh.com
Authorization: Bearer admesh_prod_abc123xyz789
Content-Type: application/json
```

### Query Parameter (Not Recommended)

For testing only, you can include the API key as a query parameter:

```http
GET /api/v1/recommendations?api_key=admesh_prod_abc123xyz789
Host: api.useadmesh.com
```

:::warning Security Warning
Never use query parameters for API keys in production. They can be logged in server logs and browser history.
:::

## SDK Authentication

### Python SDK

```python
from admesh import Admesh

# Method 1: Environment variable (recommended)
import os
client = Admesh(api_key=os.environ.get("ADMESH_API_KEY"))

# Method 2: Direct parameter
client = Admesh(api_key="admesh_prod_abc123xyz789")

# Method 3: Using dotenv
from dotenv import load_dotenv
load_dotenv()
client = Admesh()  # Automatically uses ADMESH_API_KEY from .env
```

### TypeScript SDK

```typescript
import Admesh from 'admesh';

// Method 1: Environment variable (recommended)
const client = new Admesh({
  apiKey: process.env.ADMESH_API_KEY
});

// Method 2: Direct parameter
const client = new Admesh({
  apiKey: 'admesh_prod_abc123xyz789'
});
```

### UI SDK

The UI SDK doesn't require direct authentication - it works with recommendations fetched from your backend:

```tsx
// Backend fetches recommendations with authentication
const recommendations = await fetch('/api/recommendations', {
  headers: {
    'Authorization': `Bearer ${process.env.ADMESH_API_KEY}`
  }
});

// Frontend displays recommendations without API key
<AdMeshLayout recommendations={recommendations} />
```

## Environment-Based Keys

Use different API keys for different environments:

### Development
```bash
ADMESH_API_KEY=admesh_dev_abc123xyz789
ADMESH_BASE_URL=http://localhost:8000  # Local development
```

### Testing
```bash
ADMESH_API_KEY=admesh_test_def456uvw012
ADMESH_BASE_URL=https://api-test.useadmesh.com
```

### Production
```bash
ADMESH_API_KEY=admesh_prod_ghi789rst345
ADMESH_BASE_URL=https://api.useadmesh.com
```

## API Key Permissions

Different API keys can have different permission levels:

### Read-Only Keys
- Get recommendations
- View analytics (read-only)
- Access public product data

```python
# Read-only operations
recommendations = client.recommend.get_recommendations(query="CRM software")
analytics = client.analytics.get_stats()  # Read-only
```

### Read-Write Keys
- All read-only permissions
- Submit tracking data
- Update user preferences

```python
# Read-write operations
recommendations = client.recommend.get_recommendations(query="CRM software")
client.tracking.record_click(ad_id="abc123", user_id="user456")
```

### Admin Keys
- All read-write permissions
- Manage offers and products
- Access sensitive analytics

```python
# Admin operations (requires admin key)
client.offers.create_offer(product_data)
client.analytics.get_revenue_data()
```

## Authentication Errors

### Invalid API Key

**HTTP Status:** `401 Unauthorized`

```json
{
  "error": {
    "code": "INVALID_API_KEY",
    "message": "The provided API key is invalid or has been revoked",
    "type": "authentication_error"
  }
}
```

**Common causes:**
- Typo in API key
- API key has been revoked
- Using wrong environment key

### Missing API Key

**HTTP Status:** `401 Unauthorized`

```json
{
  "error": {
    "code": "MISSING_API_KEY",
    "message": "API key is required for this endpoint",
    "type": "authentication_error"
  }
}
```

### Insufficient Permissions

**HTTP Status:** `403 Forbidden`

```json
{
  "error": {
    "code": "INSUFFICIENT_PERMISSIONS",
    "message": "Your API key does not have permission to access this resource",
    "type": "authorization_error"
  }
}
```

### Expired API Key

**HTTP Status:** `401 Unauthorized`

```json
{
  "error": {
    "code": "EXPIRED_API_KEY",
    "message": "Your API key has expired. Please generate a new one",
    "type": "authentication_error"
  }
}
```

## Error Handling

### Python SDK

```python
import admesh

try:
    client = Admesh(api_key="invalid_key")
    response = client.recommend.get_recommendations(query="CRM software")
except admesh.AuthenticationError as e:
    print(f"Authentication failed: {e.message}")
    # Handle invalid API key
except admesh.PermissionDeniedError as e:
    print(f"Permission denied: {e.message}")
    # Handle insufficient permissions
except admesh.APIError as e:
    print(f"API error: {e.status_code} - {e.message}")
```

### TypeScript SDK

```typescript
import Admesh from 'admesh';

try {
  const client = new Admesh({ apiKey: 'invalid_key' });
  const response = await client.recommend.getRecommendations({
    query: 'CRM software'
  });
} catch (error) {
  if (error instanceof Admesh.AuthenticationError) {
    console.log('Authentication failed:', error.message);
    // Handle invalid API key
  } else if (error instanceof Admesh.PermissionDeniedError) {
    console.log('Permission denied:', error.message);
    // Handle insufficient permissions
  } else {
    console.log('API error:', error);
  }
}
```

## Security Best Practices

### ✅ Do's

1. **Store API keys securely**
   ```bash
   # Use environment variables
   export ADMESH_API_KEY="your_api_key"
   
   # Or use a .env file
   echo "ADMESH_API_KEY=your_api_key" > .env
   ```

2. **Use different keys for different environments**
   ```python
   # Different keys for dev/test/prod
   if os.environ.get('NODE_ENV') == 'production':
       api_key = os.environ.get('ADMESH_PROD_API_KEY')
   else:
       api_key = os.environ.get('ADMESH_DEV_API_KEY')
   ```

3. **Rotate keys regularly**
   ```python
   # Set up key rotation schedule
   # Generate new keys monthly
   # Update applications with new keys
   # Revoke old keys after transition
   ```

4. **Monitor API key usage**
   ```python
   # Check dashboard for unusual activity
   # Set up alerts for high usage
   # Monitor error rates
   ```

### ❌ Don'ts

1. **Never commit API keys to version control**
   ```bash
   # Add to .gitignore
   echo ".env" >> .gitignore
   echo "*.key" >> .gitignore
   ```

2. **Don't use production keys in development**
   ```python
   # ❌ Wrong
   client = Admesh(api_key="admesh_prod_abc123xyz789")  # In dev environment
   
   # ✅ Correct
   client = Admesh(api_key=os.environ.get("ADMESH_API_KEY"))
   ```

3. **Don't expose keys in client-side code**
   ```javascript
   // ❌ Wrong - API key exposed in browser
   const client = new Admesh({ apiKey: 'admesh_prod_abc123xyz789' });
   
   // ✅ Correct - API key stays on server
   const response = await fetch('/api/recommendations');
   ```

4. **Don't share API keys**
   ```bash
   # ❌ Wrong
   # Sharing keys in chat, email, or documentation
   
   # ✅ Correct
   # Each developer/environment gets their own key
   ```

## Testing Authentication

### Verify API Key

```bash
curl -H "Authorization: Bearer your_api_key" \
     https://api.useadmesh.com/api/v1/auth/verify
```

Expected response:
```json
{
  "valid": true,
  "key_id": "key_abc123",
  "permissions": ["read", "write"],
  "rate_limit": {
    "requests_per_minute": 100,
    "requests_remaining": 99
  }
}
```

### Test with Invalid Key

```bash
curl -H "Authorization: Bearer invalid_key" \
     https://api.useadmesh.com/api/v1/recommendations
```

Expected response:
```json
{
  "error": {
    "code": "INVALID_API_KEY",
    "message": "The provided API key is invalid or has been revoked"
  }
}
```

## Next Steps

- **[API Keys Setup](/getting-started/api-keys)** - Obtain API credentials from dashboard
- **[Python SDK](/python-sdk/installation)** - Backend SDK implementation
- **[UI SDK](/ui-sdk/installation)** - Frontend component integration
- **[Quick Start](/getting-started/quick-start)** - Execute first API call
