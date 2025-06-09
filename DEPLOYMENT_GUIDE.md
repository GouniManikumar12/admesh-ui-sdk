# AdMesh UI SDK - Unified Deployment Guide

This guide covers deploying the unified AdMesh UI SDK repository that contains both the component library and documentation to Vercel.

## 🏗️ Architecture Overview

The repository now contains:
- **UI SDK Components** (`/src`) - React component library
- **Documentation** (`/docs`) - Docusaurus documentation site
- **Storybook** (`/.storybook`) - Component showcase
- **Unified Build** - Single deployment with routing

## 🌐 Live URLs

- **Documentation**: [https://admesh-ui-sdk.vercel.app/](https://admesh-ui-sdk.vercel.app/)
- **Storybook**: [https://admesh-ui-sdk.vercel.app/storybook/](https://admesh-ui-sdk.vercel.app/storybook/)

## 🚀 Vercel Deployment

### Prerequisites

1. **GitHub Repository**: Push your code to GitHub
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Environment Variables**: Set up required secrets

### Step 1: Connect Repository to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your `admesh-ui-sdk` repository
4. Configure build settings:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build:all`
   - **Output Directory**: `build`
   - **Install Command**: `npm ci`

### Step 2: Environment Variables

Add these environment variables in Vercel dashboard:

```bash
# Required for GitHub Actions deployment
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
```

### Step 3: Build Process

The unified build process:

1. **Install Dependencies**: `npm ci`
2. **Install Docs Dependencies**: `cd docs && npm ci`
3. **Build Documentation**: `npm run docs:build`
4. **Build Storybook**: `npm run build-storybook`
5. **Combine Builds**: Copy docs to `/build` and Storybook to `/build/storybook`

### Step 4: Routing Configuration

The `vercel.json` handles routing:

```json
{
  "buildCommand": "npm run build:all",
  "outputDirectory": "build",
  "rewrites": [
    {
      "source": "/storybook/(.*)",
      "destination": "/storybook/$1"
    },
    {
      "source": "/(.*)",
      "destination": "/$1"
    }
  ]
}
```

## 🔄 Automatic Deployment

### GitHub Actions Workflow

The repository includes a GitHub Actions workflow that:

1. **Triggers on**: Push to main branch or manual dispatch
2. **Builds**: Documentation, Storybook, and SDK
3. **Publishes**: SDK to NPM (if version changed)
4. **Deploys**: To Vercel automatically
5. **Creates**: GitHub releases with links

### Required GitHub Secrets

Add these secrets in your GitHub repository settings:

```bash
# NPM Publishing
NPM_TOKEN=your_npm_token

# Vercel Deployment
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_vercel_org_id
VERCEL_PROJECT_ID=your_vercel_project_id
```

## 🛠️ Local Development

### Documentation Development

```bash
# Start documentation dev server
npm run docs:dev
# Opens http://localhost:3000
```

### Storybook Development

```bash
# Start Storybook dev server
npm run storybook
# Opens http://localhost:6006
```

### Combined Build Testing

```bash
# Build everything locally
npm run build:all

# Serve the combined build
npx serve build
# Opens http://localhost:3000
```

## 📁 Project Structure

```
admesh-ui-sdk/
├── docs/                    # Docusaurus documentation
│   ├── docs/               # Documentation content
│   ├── src/                # Docusaurus source
│   ├── static/             # Static assets
│   ├── docusaurus.config.js
│   └── package.json
├── src/                     # SDK source code
├── .storybook/              # Storybook configuration
├── build/                   # Combined build output
│   ├── index.html          # Documentation
│   └── storybook/          # Storybook build
├── vercel.json             # Vercel configuration
├── package.json            # Main package.json
└── .github/workflows/      # GitHub Actions
```

## 🔧 Troubleshooting

### Build Issues

1. **Dependencies**: Ensure both root and docs dependencies are installed
2. **Node Version**: Use Node.js 18+ for compatibility
3. **Memory**: Increase Node memory if builds fail: `NODE_OPTIONS=--max-old-space-size=4096`

### Deployment Issues

1. **Vercel Logs**: Check build logs in Vercel dashboard
2. **Environment Variables**: Verify all required secrets are set
3. **Build Command**: Ensure `npm run build:all` works locally

### Routing Issues

1. **Storybook 404**: Check `/storybook` path in vercel.json
2. **Documentation 404**: Verify docs build output in `/build`
3. **Assets**: Ensure static assets are properly copied

## 📈 Performance Optimization

### Build Optimization

- **Parallel Builds**: Documentation and Storybook build separately
- **Asset Optimization**: Images and fonts are optimized during build
- **Caching**: Vercel caches static assets with long TTL

### Runtime Optimization

- **CDN**: Vercel Edge Network for global distribution
- **Compression**: Automatic gzip/brotli compression
- **HTTP/2**: Modern protocol support

## 🎯 Next Steps

1. **Custom Domain**: Configure custom domain in Vercel
2. **Analytics**: Add Vercel Analytics for usage insights
3. **Monitoring**: Set up error tracking and performance monitoring
4. **SEO**: Optimize meta tags and sitemap generation

## 📞 Support

- **Documentation Issues**: [GitHub Issues](https://github.com/GouniManikumar12/admesh-ui-sdk/issues)
- **Deployment Support**: [Vercel Support](https://vercel.com/support)
- **AdMesh Support**: [support@useadmesh.com](mailto:support@useadmesh.com)
