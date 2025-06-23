# 📚 AdMesh UI SDK Storybook Guide

This guide shows you how to access and explore AdMesh's revolutionary **storybook-style ad formats** using our interactive Storybook component showcase.

## 🚀 Quick Start

### 1. **Access Storybook**

```bash
cd admesh-ui-sdk
npm run storybook
```

The Storybook interface will open at `http://localhost:6006`

### 2. **Navigate to AdMesh Components**

In the Storybook sidebar, look for:

```
📚 AdMesh/Showcase
├── 🎨 Premium Showcase
├── 🌙 Dark Theme Showcase
├── 📊 Comparison View
└── 📱 Responsive Showcase
```

## 🎭 What You'll See

### **AdMesh Component Examples**

#### 1. **Business Growth Story**
```
📖 The Startup Founder's Journey

Sarah was a brilliant engineer who decided to start her own SaaS 
company. As her customer base grew, she realized she needed better 
tools to manage customer relationships¹ and track her sales pipeline².

References:
¹ HubSpot CRM - Perfect for growing businesses with free tier
² Pipedrive - Visual sales pipeline management
```

#### 2. **Developer Workflow Story**
```
💻 Building the Perfect Development Workflow

Alex was a senior developer who joined a fast-growing startup. 
They needed better code repository hosting¹, continuous integration², 
and error tracking³ for their applications.

References:
¹ GitHub - Industry-standard code repository hosting
² CircleCI - Automated CI/CD pipeline
³ Sentry - Real-time error tracking
```

#### 3. **Interactive Comparison**
Side-by-side view showing:
- ❌ **Traditional Push Ads** (intrusive, annoying)
- ✅ **AdMesh Citations** (helpful, contextual)

## 🎯 Key Features to Explore

### **Citation Styles**
- **Numbered**: ¹ ² ³ (default)
- **Bracketed**: [1] [2] [3] (academic)
- **Lettered**: ᵃ ᵇ ᶜ (alternative)

### **Interactive Elements**
- **Click Citations**: See tracking in action
- **Hover Effects**: Preview recommendation details
- **Theme Switching**: Light/dark mode support
- **Responsive Design**: Mobile-friendly layouts

### **Real-World Integration**
- **Chat Interfaces**: How citations appear in AI conversations
- **Blog Content**: Academic-style references in articles
- **Product Reviews**: Contextual tool recommendations

## 📊 Storybook Navigation

### **Main Categories**

1. **AdMesh/Showcase** 📚
   - Complete component showcase examples
   - Interactive demos and theme variations
   - Premium component designs

2. **Citation/AdMeshCitationUnit** 📝
   - Citation component variations
   - Different styling options
   - Technical implementation examples

3. **Conversational/Showcase** 💬
   - Chat interface integrations
   - AI assistant examples
   - Conversation summary features

4. **AdMesh/Showcase** 🎨
   - Premium component designs
   - Layout variations
   - Theme customizations

## 🔧 How to Use in Your Project

### **1. Install the SDK**
```bash
npm install admesh-ui-sdk
```

### **2. Import Components**
```tsx
import { AdMeshCitationUnit } from 'admesh-ui-sdk';
```

### **3. Implement Citation Components**
```tsx
<AdMeshCitationUnit
  recommendations={recommendations}
  conversationText={storyContent}
  citationStyle="numbered"
  showCitationList={true}
  onRecommendationClick={(adId, link) => {
    // Track clicks and open links
    window.open(link, '_blank');
  }}
/>
```

## 🎨 Customization Options

### **Theme Configuration**
```tsx
const theme = {
  mode: 'light', // or 'dark'
  accentColor: '#8b5cf6', // Custom brand color
};

<AdMeshCitationUnit theme={theme} />
```

### **Citation Styles**
```tsx
// Academic style with brackets
<AdMeshCitationUnit citationStyle="bracketed" />

// Minimal superscript style  
<AdMeshCitationUnit citationStyle="superscript" />

// Traditional numbered style
<AdMeshCitationUnit citationStyle="numbered" />
```

### **Display Options**
```tsx
// Show full reference list
<AdMeshCitationUnit showCitationList={true} />

// Citations only (no reference list)
<AdMeshCitationUnit showCitationList={false} />
```

## 📱 Responsive Design

The storybook ad formats are fully responsive:

- **Desktop**: Full layout with sidebar references
- **Tablet**: Optimized spacing and typography
- **Mobile**: Stacked layout with touch-friendly citations

## 🎯 Use Cases Demonstrated

### **1. Business Blogs**
- Startup journey stories
- Growth challenge narratives
- Tool recommendation articles

### **2. Educational Content**
- Technical tutorials with tool suggestions
- Best practice guides with citations
- Case studies with product references

### **3. AI Applications**
- Chatbot responses with recommendations
- AI assistant suggestions
- Conversational commerce

### **4. E-commerce Content**
- Product comparison articles
- Buying guide narratives
- User experience stories

## 🔍 Interactive Features

### **Click Tracking**
Every citation click is tracked with:
- Product ID and recommendation details
- Story context and category
- User interaction timestamps
- Conversion attribution data

### **Hover Previews**
Hover over citations to see:
- Product descriptions
- Pricing information
- Feature highlights
- Trust scores

### **Real-time Updates**
- Dynamic recommendation loading
- Context-aware suggestions
- Personalized content adaptation

## 📊 Performance Metrics

Storybook ads show dramatically better performance:

| Metric | Traditional Ads | AdMesh Citations |
|--------|----------------|------------------|
| **Engagement Rate** | 0.05% | 8-12% |
| **User Experience** | Negative | Positive |
| **Content Value** | Degrades | Enhances |
| **Trust Building** | Low | High |

## 🚀 Getting Started Checklist

- [ ] Run `npm run storybook` to start the showcase
- [ ] Explore the "AdMesh/Showcase" section
- [ ] Try the interactive demos and comparisons
- [ ] Test different citation styles and themes
- [ ] Click on citations to see tracking in action
- [ ] Review the code examples in each story
- [ ] Implement in your own project using the examples

## 🆘 Need Help?

- **Storybook Issues**: Check the browser console for errors
- **Component Questions**: Review the documentation in each story
- **Integration Help**: See the code examples and implementation guides
- **Custom Requirements**: Contact [support@useadmesh.com](mailto:support@useadmesh.com)

## 🔗 Related Resources

- **[Main Documentation](../docs/)** - Complete integration guides
- **[GitHub Repository](https://github.com/GouniManikumar12/admesh-ui-sdk)** - Source code and issues
- **[NPM Package](https://www.npmjs.com/package/admesh-ui-sdk)** - Installation and versions
- **[AdMesh Dashboard](https://useadmesh.com)** - Get API keys and manage campaigns

---

The Storybook showcase demonstrates how AdMesh revolutionizes advertising by transforming intrusive interruptions into helpful, contextual suggestions that enhance rather than degrade the user experience. Explore the interactive examples to see the future of advertising! 🚀
