# AdMesh UI SDK - Development Guide

This guide covers the unified development workflow for the AdMesh UI SDK that includes both component library and documentation.

## 🏗️ Architecture Overview

The repository contains:
- **UI SDK Components** (`/src`) - React component library
- **Documentation** (`/docs`) - Docusaurus documentation site  
- **Storybook** (`/.storybook`) - Component showcase
- **Unified Build** - Single deployment with routing

## 🚀 Development Workflows

### Option 1: Concurrent Development (Recommended)

Start both documentation and Storybook simultaneously:

```bash
npm run dev:all
```

This will start:
- **Documentation**: http://localhost:3000 (with Storybook link opening in new tab)
- **Storybook**: http://localhost:6006

### Option 2: Individual Development

Start services individually in separate terminals:

```bash
# Terminal 1: Documentation
npm run docs:dev

# Terminal 2: Storybook  
npm run storybook

# Terminal 3: SDK Development
npm run dev
```

### Option 3: Production-like Testing

Test the unified build locally:

```bash
npm run serve:combined
```

This builds everything and serves at http://localhost:3000 with:
- Documentation at `/`
- Storybook at `/storybook`

## 🔧 Available Scripts

### Development Scripts
```bash
npm run dev:all          # Start docs + Storybook concurrently
npm run docs:dev          # Start documentation dev server (port 3000)
npm run storybook         # Start Storybook dev server (port 6006)
npm run dev               # Start SDK dev server (Vite)
```

### Build Scripts
```bash
npm run build:all         # Build everything for production
npm run docs:build        # Build documentation only
npm run build-storybook   # Build Storybook only
npm run build             # Build SDK library only
```

### Testing Scripts
```bash
npm run serve:combined    # Build and serve unified site locally
npx serve build           # Serve pre-built unified site
```

## 🌐 Development URLs

### Development Mode
- **Documentation**: http://localhost:3000
- **Storybook**: http://localhost:6006
- **SDK Dev Server**: http://localhost:5173

### Production Mode (Local Testing)
- **Documentation**: http://localhost:3000/
- **Storybook**: http://localhost:3000/storybook

## 🔄 Smart Navigation

The documentation navbar automatically adapts based on environment:

- **Development**: Storybook link opens http://localhost:6006 in new tab
- **Production**: Storybook link navigates to `/storybook` in same tab

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
│   ├── components/         # React components
│   ├── hooks/              # Custom hooks
│   ├── types/              # TypeScript types
│   └── index.ts            # Main export
├── .storybook/              # Storybook configuration
├── stories/                 # Storybook stories
├── build/                   # Combined build output
│   ├── index.html          # Documentation
│   └── storybook/          # Storybook build
├── dist/                    # SDK library build
├── storybook-static/        # Storybook build output
├── vercel.json             # Vercel configuration
└── package.json            # Main package.json
```

## 🛠️ Development Tips

### 1. Component Development Workflow

1. Create component in `/src/components/`
2. Add story in `/src/stories/`
3. Test in Storybook (`npm run storybook`)
4. Document usage in `/docs/docs/ui-sdk/`
5. Test unified build (`npm run serve:combined`)

### 2. Documentation Updates

1. Edit content in `/docs/docs/`
2. Test with `npm run docs:dev`
3. Verify Storybook integration works
4. Test production build

### 3. Hot Reloading

- **Documentation**: Auto-reloads on content changes
- **Storybook**: Auto-reloads on component/story changes
- **SDK**: Auto-reloads on source code changes

### 4. Cross-linking

- Link from docs to Storybook: Use navbar link or direct URLs
- Reference components in docs: Include live examples
- Storybook to docs: Add links in story descriptions

## 🚀 Deployment

### Local Testing
```bash
npm run serve:combined     # Test unified build locally
```

### Production Deployment
```bash
npm run build:all          # Creates unified build/ directory
```

The `build/` directory contains:
- Documentation at root
- Storybook at `/storybook`
- Proper routing for Vercel

## 🔍 Troubleshooting

### Common Issues

1. **Storybook link 404 in development**
   - Solution: Use `npm run dev:all` to start both services
   - Or manually start Storybook: `npm run storybook`

2. **Build failures**
   - Check docs dependencies: `cd docs && npm install`
   - Verify all imports are correct
   - Run individual builds to isolate issues

3. **Port conflicts**
   - Documentation: Change port in `docs/docusaurus.config.js`
   - Storybook: Use `npm run storybook -- --port 6007`

### Environment Variables

For development, you can override default ports:

```bash
# Documentation
DOCUSAURUS_PORT=3001 npm run docs:dev

# Storybook  
STORYBOOK_PORT=6007 npm run storybook
```

## 📈 Performance Tips

1. **Development**: Use `npm run dev:all` for full development experience
2. **Documentation only**: Use `npm run docs:dev` when working on docs
3. **Components only**: Use `npm run storybook` when developing components
4. **Production testing**: Use `npm run serve:combined` before deployment

## 🎯 Best Practices

1. **Always test unified build** before pushing to production
2. **Keep documentation in sync** with component changes
3. **Use Storybook for component development** and testing
4. **Test cross-links** between docs and Storybook
5. **Verify mobile responsiveness** in both docs and Storybook

## 📞 Support

- **Repository**: [GitHub Issues](https://github.com/GouniManikumar12/admesh-ui-sdk/issues)
- **Documentation**: Available at deployed site
- **Storybook**: Interactive component examples
