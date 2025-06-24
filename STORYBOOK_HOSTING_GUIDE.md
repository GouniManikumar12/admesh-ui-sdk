# 🌐 AdMesh Storybook Hosting Guide

## 🚀 Quick Access Options

### Option 1: GitHub Pages (Automatic)
**URL**: [https://storybook.useadmesh.com/](https://storybook.useadmesh.com/)

- ✅ **Automatic deployment** on every push to main
- ✅ **Always up-to-date** with latest changes
- ✅ **No setup required** for viewing
- ⏳ **Setting up** - may take a few minutes after first push

### Option 2: Netlify Drop (Instant)
**Steps**:
1. Download the `storybook-static` folder from this repository
2. Visit [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `storybook-static` folder
4. Get instant hosted URL (e.g., `https://amazing-name-123456.netlify.app`)

### Option 3: Vercel (Quick)
**Steps**:
1. Download the `storybook-static` folder
2. Visit [https://vercel.com/new](https://vercel.com/new)
3. Upload the folder
4. Get instant hosted URL

### Option 4: Local Development
**Steps**:
```bash
git clone https://github.com/GouniManikumar12/admesh-ui-sdk.git
cd admesh-ui-sdk
npm install
npm run storybook
```
**URL**: `http://localhost:6006`

## 🎭 What You'll See

### **Interactive Ad Format Gallery**
- **📚 AdMesh Showcase** - Complete component examples
- **📝 Citation Components** - Different citation styles
- **💬 Conversational Ads** - Chat interface integration
- **📊 Format Comparisons** - Traditional vs AdMesh demos
- **🎨 Theme Variations** - Light/dark mode examples
- **📱 Responsive Design** - Mobile/desktop layouts

### **Live Features**
- **Click Citations** - See tracking data in browser console
- **Toggle Themes** - Switch between visual modes
- **Interactive Demos** - Real-time component interaction
- **Performance Metrics** - Visual engagement comparisons

## 🛠️ For Developers

### **Build Storybook Locally**
```bash
npm run build-storybook
```
This creates a `storybook-static` folder ready for hosting.

### **Deploy Script**
Use the included deployment script:
```bash
./deploy-storybook.sh
```

Choose from multiple hosting options:
1. GitHub Pages (automatic)
2. Netlify (manual upload)
3. Vercel (manual upload)
4. Chromatic (visual testing + hosting)
5. Surge.sh (quick hosting)

### **GitHub Actions**
The repository includes automatic deployment:
- **Triggers**: Every push to main branch
- **Builds**: Storybook static files
- **Deploys**: To GitHub Pages
- **URL**: `https://storybook.useadmesh.com/`

## 🎯 Why Hosted Storybook?

### **For Users**
- **No Installation** - View ad formats instantly
- **Always Current** - See latest component updates
- **Mobile Friendly** - Works on all devices
- **Interactive** - Click and explore components

### **For Developers**
- **Easy Sharing** - Send links to stakeholders
- **Visual Documentation** - Show components in action
- **Testing Platform** - Verify responsive behavior
- **Integration Examples** - See real implementation patterns

### **For AI Platforms**
- **Visual Understanding** - See how ad formats integrate
- **Implementation Patterns** - Learn from interactive examples
- **Performance Data** - Understand engagement improvements
- **Citation Styles** - Explore different visual approaches

## 🔗 Quick Links

- **🌐 Hosted Storybook**: [https://storybook.useadmesh.com/](https://storybook.useadmesh.com/)
- **📦 Repository**: [https://github.com/GouniManikumar12/admesh-ui-sdk](https://github.com/GouniManikumar12/admesh-ui-sdk)
- **📚 Documentation**: [https://docs.useadmesh.com](https://docs.useadmesh.com)
- **🚀 Netlify Drop**: [https://app.netlify.com/drop](https://app.netlify.com/drop)

## 🆘 Troubleshooting

### **GitHub Pages Not Working?**
- Check if GitHub Pages is enabled in repository settings
- Verify the workflow ran successfully in Actions tab
- Wait a few minutes for DNS propagation

### **Want Instant Access?**
- Use Netlify Drop with the `storybook-static` folder
- Or run locally with `npm run storybook`

### **Need Custom Domain?**
- Use Netlify or Vercel for custom domain hosting
- Configure DNS settings in your hosting platform

---

**Experience AdMesh's revolutionary ad formats visually** - no installation required! 🎉
