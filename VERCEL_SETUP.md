# AdMesh UI SDK - Vercel Setup Guide

Simple guide for deploying the unified AdMesh UI SDK (documentation + Storybook) to Vercel.

## 🎯 **Why Vercel?**

- ✅ **Automatic Deployment**: No tokens or complex setup needed
- ✅ **GitHub Integration**: Deploy on every push automatically
- ✅ **Unified Hosting**: Documentation and Storybook on same domain
- ✅ **Free Tier**: Generous limits for open source projects
- ✅ **Custom Domains**: Easy to configure
- ✅ **Global CDN**: Fast loading worldwide

## 🚀 **Quick Setup (5 minutes)**

### Step 1: Prepare Your Repository
Ensure your repository has the unified build setup:

```bash
# Test the build locally first
npm run build:all

# This should create a 'build' directory with:
# - Documentation at root
# - Storybook at /storybook
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"New Project"**
4. Import your `admesh-ui-sdk` repository

### Step 3: Configure Build Settings
When importing, set these build settings:

- **Framework Preset**: Other
- **Build Command**: `npm run build:all`
- **Output Directory**: `build`
- **Install Command**: `npm ci` (default)

### Step 4: Deploy
Click **"Deploy"** and wait for the build to complete!

## 🌐 **Result**

Your unified site will be available at:
- **Documentation**: `https://your-project.vercel.app/`
- **Storybook**: `https://your-project.vercel.app/storybook/`

## 🔧 **Advanced Configuration**

### Custom Domain
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Environment Variables (Optional)
Only needed if you want to publish the SDK to NPM automatically:

1. Go to project settings → "Environment Variables"
2. Add: `NPM_TOKEN` (for automatic NPM publishing)

### Build Optimization
The `vercel.json` file in the repository handles:
- Proper routing between docs and Storybook
- Static asset caching
- Clean URLs

## 🔄 **Automatic Deployment**

Once connected, Vercel automatically:
- ✅ Deploys on every push to main branch
- ✅ Creates preview deployments for pull requests
- ✅ Runs the build command (`npm run build:all`)
- ✅ Serves the unified site with proper routing

## 📊 **Monitoring**

### Vercel Dashboard
- **Deployments**: View build logs and deployment history
- **Analytics**: Track page views and performance
- **Functions**: Monitor any serverless functions (if added)

### Build Logs
If deployment fails, check:
1. Build logs in Vercel dashboard
2. Ensure `npm run build:all` works locally
3. Check that both docs and Storybook build successfully

## 🛠️ **Troubleshooting**

### Common Issues

**Build Fails**
```bash
# Test locally first
npm run build:all

# Check individual builds
npm run docs:build
npm run build-storybook
```

**Storybook 404**
- Verify `build/storybook/` directory exists after build
- Check `vercel.json` routing configuration

**Documentation 404**
- Verify `build/index.html` exists after build
- Check docs build output

### Build Command Issues
If the build command fails, ensure:
- All dependencies are in `package.json`
- Docs dependencies are installed: `cd docs && npm ci`
- Build scripts are correctly configured

## 🎯 **Best Practices**

### 1. Test Locally First
Always test the unified build locally before deploying:
```bash
npm run build:all
npx serve build
```

### 2. Use Preview Deployments
- Create pull requests to test changes
- Vercel creates preview URLs for each PR
- Test both documentation and Storybook routes

### 3. Monitor Performance
- Use Vercel Analytics to track usage
- Monitor build times and optimize if needed
- Check Core Web Vitals in Vercel dashboard

### 4. Keep Dependencies Updated
- Regularly update Docusaurus and Storybook
- Test builds after dependency updates
- Use `npm audit` to check for security issues

## 🚀 **Deployment Checklist**

Before deploying:
- [ ] `npm run build:all` works locally
- [ ] Documentation loads at `http://localhost:3000`
- [ ] Storybook loads at `http://localhost:3000/storybook`
- [ ] Navigation between docs and Storybook works
- [ ] Mobile responsiveness tested
- [ ] All links and assets load correctly

After deploying:
- [ ] Documentation loads at your Vercel URL
- [ ] Storybook loads at `/storybook` route
- [ ] Navigation works in production
- [ ] Custom domain configured (if needed)
- [ ] Analytics enabled (optional)

## 📞 **Support**

### Vercel Support
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Vercel Support](https://vercel.com/support)

### Project Support
- [GitHub Issues](https://github.com/GouniManikumar12/admesh-ui-sdk/issues)
- [Documentation](https://admesh-ui-sdk.vercel.app/)
- [Storybook](https://admesh-ui-sdk.vercel.app/storybook/)

## 🎉 **Success!**

Once deployed, you'll have:
- ✅ **Professional Documentation Site**: Comprehensive SDK docs
- ✅ **Interactive Component Showcase**: Live Storybook examples
- ✅ **Unified Developer Experience**: Everything in one place
- ✅ **Automatic Updates**: Deploy on every push
- ✅ **Global Performance**: Vercel's edge network

Your unified AdMesh UI SDK site is now live and ready for developers to explore!
