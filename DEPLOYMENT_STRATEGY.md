# AdMesh UI SDK - Deployment Strategy

This guide covers the comprehensive deployment strategy for the AdMesh UI SDK, including both unified Vercel deployment and optional Chromatic integration.

## 🎯 **Deployment Architecture**

We use a **hybrid approach** that combines the best of both worlds:

1. **Primary**: Unified Vercel deployment (docs + Storybook)
2. **Secondary**: Optional Chromatic for team collaboration

## 🚀 **Primary Deployment: Vercel (Recommended)**

### Benefits
- ✅ **Unified Experience**: Documentation and Storybook on same domain
- ✅ **Cost Effective**: Single hosting solution
- ✅ **Better SEO**: Unified domain structure
- ✅ **Easy Setup**: One-click deployment
- ✅ **Custom Domain**: Easy to configure

### Setup Process

#### 1. Build for Production
```bash
npm run build:all
```

This creates a unified `build/` directory with:
- Documentation at `/`
- Storybook at `/storybook`

#### 2. Deploy to Vercel (Automatic)

**GitHub Integration (Recommended)**
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project" and import your repository
3. Configure build settings:
   - **Build Command**: `npm run build:all`
   - **Output Directory**: `build`
   - **Install Command**: `npm ci`
4. Deploy automatically on every push to main

**Manual Deployment (Optional)**
```bash
npm install -g vercel
vercel --prod
```

#### 3. No Environment Variables Needed
Vercel's GitHub integration handles everything automatically - no tokens required!

### Result
- **Documentation**: `https://admesh-ui-sdk.vercel.app/`
- **Storybook**: `https://admesh-ui-sdk.vercel.app/storybook/`

## 🎨 **Secondary Deployment: Chromatic (Optional)**

### Benefits
- ✅ **Visual Testing**: Automated visual regression testing
- ✅ **Team Collaboration**: Review and feedback tools
- ✅ **Design System**: Component library management
- ✅ **CI Integration**: Automated testing in pull requests

### Setup Process

#### 1. Install Chromatic
```bash
npm install --save-dev chromatic
```

#### 2. Create Chromatic Project
1. Go to [chromatic.com](https://chromatic.com)
2. Sign in with GitHub
3. Create new project "admesh-ui-sdk"
4. Get your project token

#### 3. Deploy Storybook
```bash
npx chromatic --project-token=<your-token>
```

#### 4. Add to CI/CD
Create `.github/workflows/chromatic.yml`:

```yaml
name: 'Chromatic Deployment'
on: push
jobs:
  chromatic:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - run: npm ci
      - uses: chromaui/action@latest
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          token: ${{ secrets.GITHUB_TOKEN }}
```

### Result
- **Chromatic URL**: `https://random-uuid.chromatic.com`
- **Visual Testing**: Automated on every PR
- **Team Reviews**: Built-in collaboration tools

## 📊 **Deployment Comparison**

| Feature | Vercel (Primary) | Chromatic (Secondary) |
|---------|------------------|----------------------|
| **Documentation** | ✅ Included | ❌ Storybook only |
| **Custom Domain** | ✅ Easy setup | ✅ Available |
| **Visual Testing** | ❌ Manual | ✅ Automated |
| **Team Collaboration** | ⚠️ Basic | ✅ Advanced |
| **Cost** | Free tier generous | Free tier limited |
| **SEO** | ✅ Excellent | ⚠️ Limited |
| **Integration** | ✅ Unified experience | ❌ Separate tool |

## 🛠️ **Recommended Workflow**

### For Development Teams
```bash
# 1. Primary deployment (public-facing)
npm run build:all
vercel --prod

# 2. Team collaboration (internal reviews)
npm run chromatic
```

### For Open Source Projects
```bash
# Focus on unified public deployment
npm run build:all
vercel --prod
```

### For Enterprise Teams
```bash
# Use both for comprehensive workflow
npm run build:all        # Deploy to Vercel
npm run chromatic        # Deploy to Chromatic for team reviews
```

## 🔄 **CI/CD Integration**

### GitHub Actions Workflow
Our current `.github/workflows/publish.yml` handles:

1. **Build**: Documentation + Storybook + SDK
2. **Test**: Linting and validation
3. **Deploy**: Vercel deployment
4. **Publish**: NPM package (if version changed)
5. **Optional**: Chromatic deployment

### Environment Variables Needed
```bash
# NPM Publishing (Required for SDK publishing)
NPM_TOKEN=your_npm_token

# Chromatic (Optional - only if using Chromatic)
CHROMATIC_PROJECT_TOKEN=your_chromatic_token

# Note: Vercel deployment requires NO environment variables
# when using GitHub integration - it's fully automatic!
```

## 🎯 **Best Practices**

### 1. Use Vercel as Primary
- Public documentation and component showcase
- SEO-optimized unified experience
- Easy custom domain setup

### 2. Add Chromatic for Teams
- Internal design system collaboration
- Visual regression testing
- PR review workflows

### 3. Automate Everything
- Deploy on every push to main
- Visual testing on every PR
- Automatic NPM publishing on version bump

### 4. Monitor Performance
- Vercel Analytics for usage insights
- Chromatic for visual changes
- GitHub Actions for build health

## 🚀 **Quick Start Commands**

```bash
# Development
npm run dev:all              # Start both docs and Storybook

# Production Build
npm run build:all            # Build unified site

# Deployment
npm run serve:combined       # Test locally
vercel --prod               # Deploy to Vercel
npm run chromatic           # Deploy to Chromatic (optional)

# Publishing
npm version patch           # Bump version
git push origin main        # Trigger CI/CD
```

## 📈 **Success Metrics**

### Vercel Deployment
- ✅ Documentation loads at root URL
- ✅ Storybook loads at `/storybook`
- ✅ Navigation between docs and Storybook works
- ✅ Mobile responsiveness
- ✅ Fast loading times

### Chromatic Integration
- ✅ Visual tests pass
- ✅ Team can review components
- ✅ Automated testing in CI
- ✅ Design system collaboration

## 🎉 **Final Recommendation**

**Start with Vercel** for the unified public deployment. This gives you:
- Professional documentation site
- Integrated component showcase
- Great developer experience
- SEO benefits

**Add Chromatic later** if you need:
- Advanced team collaboration
- Automated visual testing
- Design system management
- Enterprise-grade review workflows

The unified Vercel approach is perfect for most use cases and provides a superior developer and user experience compared to separate deployments.
