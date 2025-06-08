# Changelog

All notable changes to the AdMesh UI SDK will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
