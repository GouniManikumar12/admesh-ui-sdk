# AdMesh Documentation Publishing Guide

This guide explains how to publish your AdMesh documentation site using various hosting platforms.

## 🎉 Success! Documentation is Working

Your AdMesh documentation site is now successfully running with:

✅ **Fixed Issues:**
- Corrected package name from `@admesh/ui-sdk` to `admesh-ui-sdk`
- Fixed sidebar navigation to only include existing files
- Documentation site now builds and runs successfully at `http://localhost:3000`

✅ **What's Included:**
- Complete Docusaurus setup with modern UI
- AI-focused documentation for agent integration
- Python, TypeScript, and UI SDK guides
- Real-world examples including complete AI assistant
- Mobile-responsive design with dark/light mode
- Built-in search and navigation

## 🚀 Publishing Options

### 1. GitHub Pages (Recommended - Free)

#### Setup
1. **Create a GitHub repository** for your documentation
2. **Push your docs folder** to the repository
3. **Enable GitHub Pages** in repository settings

#### Deploy
```bash
cd docs
npm run deploy
```

This will:
- Build the documentation
- Push to `gh-pages` branch
- Make it available at `https://yourusername.github.io/repository-name`

#### Custom Domain (Optional)
1. Add a `CNAME` file to `static/` folder with your domain
2. Configure DNS to point to GitHub Pages
3. Enable custom domain in GitHub settings

### 2. Vercel (Recommended - Free with Pro Features)

#### Setup
1. **Connect GitHub repository** to Vercel
2. **Import project** and select the `docs` folder
3. **Configure build settings:**
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm ci`

#### Deploy
- **Automatic**: Pushes to main branch auto-deploy
- **Manual**: Use Vercel CLI or dashboard

#### Benefits
- Automatic deployments
- Preview deployments for PRs
- Custom domains
- Analytics
- Edge network (fast global loading)

### 3. Netlify (Free with Pro Features)

#### Setup
1. **Connect GitHub repository** to Netlify
2. **Configure build settings:**
   - Build Command: `npm run build`
   - Publish Directory: `build`
   - Node Version: 18

#### Deploy
```bash
cd docs
./deploy.sh
# Choose option 3 for Netlify
```

#### Benefits
- Automatic deployments
- Form handling
- Serverless functions
- Custom domains
- Branch previews

### 4. Custom Server (VPS/Dedicated)

#### Using the Deploy Script
```bash
cd docs
./deploy.sh
# Choose option 4 for custom server
```

#### Manual Setup
```bash
# Build the documentation
npm run build

# Upload to your server
scp -r build/* user@yourserver.com:/var/www/html/docs/

# Configure web server (nginx example)
server {
    listen 80;
    server_name docs.yourdomain.com;
    root /var/www/html/docs;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🔧 Configuration for Production

### Environment Variables

Create `.env.production`:
```bash
# Custom domain
CUSTOM_DOMAIN=docs.useadmesh.com

# Google Analytics
GA_TRACKING_ID=G-XXXXXXXXXX

# Algolia Search
ALGOLIA_APP_ID=your_app_id
ALGOLIA_API_KEY=your_api_key
ALGOLIA_INDEX_NAME=admesh-docs
```

### SEO Optimization

Update `docusaurus.config.js`:
```javascript
export default {
  title: 'AdMesh SDK Documentation',
  tagline: 'AI Agent Integration Guide for Product Recommendations',
  url: 'https://docs.useadmesh.com',
  baseUrl: '/',
  
  // SEO
  metadata: [
    {name: 'keywords', content: 'admesh, ai, sdk, recommendations, chatbot, api'},
    {name: 'description', content: 'Complete guide for integrating AdMesh SDKs into AI applications and chatbots'},
  ],
  
  // Social card
  image: 'img/admesh-social-card.jpg',
};
```

### Performance Optimization

1. **Enable compression** in your web server
2. **Use CDN** for static assets
3. **Enable caching** headers
4. **Optimize images** in `static/img/`

## 📊 Analytics and Monitoring

### Google Analytics
Add to `docusaurus.config.js`:
```javascript
gtag: {
  trackingID: 'G-XXXXXXXXXX',
  anonymizeIP: true,
}
```

### Search Console
1. Verify ownership of your domain
2. Submit sitemap: `https://yourdomain.com/sitemap.xml`
3. Monitor search performance

## 🔄 Continuous Integration

### GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy Documentation

on:
  push:
    branches: [ main ]
    paths: [ 'docs/**' ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: docs/package-lock.json
      
      - name: Install dependencies
        run: cd docs && npm ci
      
      - name: Build documentation
        run: cd docs && npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/build
```

## 🎯 Best Practices

### Content Management
1. **Regular updates** - Keep SDK examples current
2. **Version control** - Tag releases for documentation versions
3. **User feedback** - Add feedback forms or GitHub issues
4. **Analytics** - Monitor popular pages and search queries

### SEO and Discovery
1. **Submit to search engines** - Google, Bing, DuckDuckGo
2. **Social sharing** - Add Open Graph meta tags
3. **Internal linking** - Link between related pages
4. **External backlinks** - Share on developer communities

### Performance
1. **Monitor Core Web Vitals** - Use PageSpeed Insights
2. **Optimize images** - Use WebP format when possible
3. **Minimize JavaScript** - Only load what's needed
4. **Enable caching** - Set appropriate cache headers

## 🆘 Troubleshooting

### Build Failures
```bash
# Clear cache and rebuild
cd docs
npm run clear
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Issues
```bash
# Check build output
cd docs
npm run build
npm run serve  # Test locally

# Check deployment logs
# GitHub Pages: Check Actions tab
# Vercel: Check deployment logs in dashboard
# Netlify: Check deploy logs in dashboard
```

### Search Not Working
1. **Configure Algolia** - Set up search indexing
2. **Check API keys** - Ensure they're correct in config
3. **Verify index** - Check Algolia dashboard for indexed content

## 📞 Support

- **Documentation Issues**: [GitHub Issues](https://github.com/GouniManikumar12/admesh-protocol/issues)
- **Hosting Support**: Contact your hosting provider
- **AdMesh Support**: [support@useadmesh.com](mailto:support@useadmesh.com)

---

## 🎉 You're Ready!

Your AdMesh documentation is now ready to help AI agents integrate your SDKs. Choose your preferred hosting option and deploy!

**Recommended Quick Start:**
1. Push to GitHub repository
2. Connect to Vercel for automatic deployments
3. Configure custom domain
4. Add analytics and search
5. Share with the AI development community!

The documentation includes everything AI agents need:
- Complete SDK integration guides
- Citation-based conversation ads
- Auto-recommendation patterns
- Real-world AI assistant examples
- Comprehensive API reference

Happy documenting! 🚀
