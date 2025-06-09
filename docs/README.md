# AdMesh Documentation

This is the official documentation site for AdMesh SDKs and AI agent integration, built with [Docusaurus](https://docusaurus.io/).

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## 📚 Documentation Structure

- **Getting Started** - Setup and basic concepts
- **Python SDK** - Complete Python integration guide
- **TypeScript SDK** - Complete TypeScript integration guide
- **UI SDK** - React components and UI integration
- **AI Integration** - Guides for AI agents and chatbots
- **API Reference** - Detailed API documentation
- **Examples** - Real-world implementation examples
- **Troubleshooting** - Common issues and solutions

## 🛠 Development

### Adding New Documentation

1. Create new `.md` files in the `docs/` directory
2. Update `sidebars.js` to include new pages in navigation
3. Use frontmatter for page metadata:

```markdown
---
sidebar_position: 1
title: Page Title
---

# Page Content
```

### Code Examples

Use language-specific code blocks with syntax highlighting:

````markdown
```python
from admesh import Admesh
client = Admesh(api_key="your-api-key")
```
````

### Interactive Components

Use Docusaurus components for enhanced documentation:

```markdown
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="python" label="Python">

```python
# Python code here
```

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// TypeScript code here
```

</TabItem>
</Tabs>
```

### Admonitions

Use admonitions for important information:

```markdown
:::tip
This is a helpful tip!
:::

:::warning
This is a warning!
:::

:::danger
This is dangerous!
:::
```

## 🎨 Customization

### Styling

- Edit `src/css/custom.css` for global styles
- Use CSS custom properties for theming
- Follow the existing design system

### Configuration

- Edit `docusaurus.config.js` for site configuration
- Update `sidebars.js` for navigation structure
- Modify `package.json` for dependencies

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel automatically detects Docusaurus configuration
3. Deploy with automatic builds on push to main branch

### Manual Deployment

```bash
npm run build
# Upload the `build` directory to your hosting provider
```

## 📝 Writing Guidelines

### Content Structure

1. **Start with overview** - Explain what the page covers
2. **Provide examples** - Show practical implementations
3. **Include troubleshooting** - Address common issues
4. **Link to related content** - Help users navigate

### Code Examples

1. **Complete examples** - Show full working code
2. **Explain key concepts** - Don't just show code
3. **Multiple languages** - Provide Python, TypeScript, and React examples
4. **Real-world scenarios** - Use practical use cases

### AI Agent Focus

Since this documentation is for AI agents:

1. **Emphasize integration patterns** - Show how to integrate with AI platforms
2. **Provide conversation examples** - Show realistic AI interactions
3. **Explain intent detection** - Help AI understand user needs
4. **Show citation patterns** - Demonstrate academic-style references

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm start`
5. Submit a pull request

### Content Guidelines

- Use clear, concise language
- Provide working code examples
- Include screenshots where helpful
- Test all code examples
- Follow the existing style and structure

## 📞 Support

- 📖 **Documentation**: You're reading it!
- 🐛 **Issues**: [GitHub Issues](https://github.com/GouniManikumar12/admesh-protocol/issues)
- 💬 **Support**: [support@useadmesh.com](mailto:support@useadmesh.com)

## 📄 License

This documentation is licensed under the MIT License.
