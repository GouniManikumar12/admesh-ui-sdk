# AdMesh Documentation Deployment Guide

This guide covers deploying the AdMesh documentation to Vercel (recommended platform).

## 🚀 Vercel Deployment

### Prerequisites

1. GitHub repository with the admesh-docs code
2. Vercel account (free tier available)
3. Domain name (optional, for custom domain setup)

### Step 1: Prepare Repository

Ensure your repository has:

```
admesh-docs/
├── package.json
├── docusaurus.config.js
├── vercel.json
├── docs/
├── src/
└── static/
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your `admesh-docs` repository

### Step 3: Configure Build Settings

Vercel should auto-detect Docusaurus, but verify:

- **Framework Preset**: Docusaurus
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

### Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete
3. Your site will be available at `https://your-project.vercel.app`

### Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `docs.useadmesh.com`)
4. Configure DNS records as instructed

## 🔧 Configuration Files

### vercel.json

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "docusaurus",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### docusaurus.config.js

Update the URL for production:

```javascript
const config = {
  title: 'AdMesh SDK Documentation',
  url: 'https://docs.useadmesh.com', // Your production URL
  baseUrl: '/',
  // ... rest of config
};
```

## 🌍 Environment Variables

No environment variables are required for the documentation site.

## 📊 Analytics (Optional)

To add Google Analytics:

1. In `docusaurus.config.js`, add:

```javascript
gtag: {
  trackingID: 'G-XXXXXXXXXX',
  anonymizeIP: true,
},
```

## 🔄 Automatic Deployments

Vercel automatically deploys when you push to your main branch:

1. Push changes to GitHub
2. Vercel detects changes
3. Builds and deploys automatically
4. Preview deployments for pull requests

## 🐛 Troubleshooting

### Build Failures

1. Check build logs in Vercel dashboard
2. Test build locally: `npm run build`
3. Fix any broken links or missing files

### Common Issues

**Broken Links**: Update `docusaurus.config.js` with correct URLs
**Missing Files**: Ensure all referenced files exist
**Build Timeout**: Optimize build process or contact Vercel support

### Local Testing

Test your build locally before deploying:

```bash
npm run build
npm run serve
```

## 📈 Performance

Vercel provides:
- Global CDN
- Automatic HTTPS
- Image optimization
- Edge functions

## 🔒 Security

Vercel includes:
- DDoS protection
- SSL certificates
- Security headers (configured in `vercel.json`)

## 📞 Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Docusaurus Docs**: [docusaurus.io](https://docusaurus.io)
- **AdMesh Support**: [support@useadmesh.com](mailto:support@useadmesh.com)
