# Changelog

All notable changes to the AdMesh UI SDK will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.11.0] - 2025-01-09

### Added
- **AdMeshEcommerceCards** - New horizontal scrolling product cards component for ecommerce recommendations
- **Google-style Product Display** - Product cards similar to Google product search results with images, pricing, ratings
- **Mixed Source Support** - Display both AdMesh affiliate offers and external ecommerce products (Walmart, Amazon, etc.)
- **Intelligent Product Ranking** - Physical products ranked higher for ecommerce queries, software for software queries
- **Responsive Design** - Mobile-optimized horizontal scrolling with touch support
- **Rich Product Information** - Pricing, discounts, ratings, reviews, shipping info, availability status
- **Customizable Display** - Configurable card sizes, themes, shadows, border radius
- **Source Badges** - Optional badges showing product source (Walmart, AdMesh, etc.)
- **Discount Indicators** - Visual discount percentage badges on product images
- **Star Ratings** - Visual star rating display with review counts
- **Free Shipping Indicators** - Shipping information display
- **Brand Display** - Product brand information
- **Availability Status** - In stock/out of stock indicators
- **Click Tracking** - Built-in click tracking for affiliate links
- **Dark Mode Support** - Full dark theme compatibility
- **TypeScript Support** - Complete type definitions for EcommerceProduct interface
- **Storybook Stories** - Comprehensive component documentation and examples

### Enhanced
- Updated package version to 0.11.0
- Added EcommerceProduct and AdMeshEcommerceCardsProps type exports
- Enhanced README.md with AdMeshEcommerceCards documentation
- Added component to comparison table in documentation
- Created example usage file with real API response data conversion

### Technical
- Built with Vite and TypeScript
- CSS modules for styling isolation
- Responsive design with mobile-first approach
- Accessibility features (WCAG 2.1 AA compliant)
- Performance optimized with lazy loading images

## [0.8.0] - 2024-12-30

### Added
- **Citation-Based Conversation Ads** - New citation format for displaying recommendations as numbered references within conversational text
- `AdMeshCitationUnit` component - Main citation component with automatic product name detection and citation insertion
- `AdMeshCitationReference` component - Individual citation references for inline use
- **Clickable Product Names** - Product names in conversational text are now styled as clickable hyperlinks
- **Multiple Citation Styles** - Support for numbered (1), bracketed [1], and superscript¹ citation formats
- **Interactive Tooltips** - Hover over citations to see product details with match scores
- **Reference Lists** - Optional citation reference list at the bottom of conversational content
- **Smart Text Processing** - Automatic detection of product mentions in conversational text
- Citation mode support in `AdMeshConversationalUnit` component
- Comprehensive Storybook stories for all citation components
- Citation-specific TypeScript interfaces and types

### Enhanced
- Updated `AdMeshConversationalUnit` to support `'citation'` display mode
- Enhanced `AdMeshInlineRecommendation` with clickable product title styling
- Improved `AdMeshLinkTracker` integration for citation components
- Added citation-related keywords to package.json for better discoverability

### Documentation
- Updated README.md with comprehensive citation documentation
- Added citation usage examples and integration guides
- Created interactive HTML demos for citation functionality
- Updated conversational guide with citation mode examples

### Technical
- Enhanced TypeScript types for citation components
- Improved build process for citation component exports
- Added comprehensive test coverage for citation functionality
- Updated Storybook configuration for citation component stories

## [0.7.0] - 2024-12-29

### Added
- Sidebar components (`AdMeshSidebar`, `AdMeshSidebarHeader`, `AdMeshSidebarContent`)
- Chat components (`AdMeshFloatingChat`, `AdMeshChatInterface`, `AdMeshChatMessage`, `AdMeshChatInput`)
- Auto-recommendation widget (`AdMeshAutoRecommendationWidget`)
- Conversational ad units (`AdMeshConversationalUnit`, `AdMeshConversationSummary`, `AdMeshInlineRecommendation`)
- Multiple display modes for conversational components
- Comprehensive theming system
- Built-in tracking and analytics
- Responsive design improvements
- Accessibility enhancements

### Enhanced
- Improved component architecture
- Better TypeScript support
- Enhanced documentation
- Storybook integration

## [0.6.0] - 2024-12-28

### Added
- Initial release of core components
- `AdMeshLayout`, `AdMeshProductCard`, `AdMeshCompareTable` components
- Basic theming support
- TypeScript definitions
- Initial documentation

### Technical
- React 18+ support
- Vite build system
- Tailwind CSS integration
- ESLint and TypeScript configuration
