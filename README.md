# AdMesh UI SDK

A comprehensive React + TypeScript component library for displaying AdMesh product recommendations across all ad unit formats with built-in tracking, theming, and accessibility support.

## 🌐 Live Sites

- **🎭 Interactive Storybook**: [https://storybook.useadmesh.com/](https://storybook.useadmesh.com/) - Explore all components and ad formats
- **📚 Complete Documentation**: [https://docs.useadmesh.com/](https://docs.useadmesh.com/) - Full SDK documentation and guides
- **🚀 AdMesh Dashboard**: [https://useadmesh.com](https://useadmesh.com) - Get your API keys and manage campaigns

> **🎨 Component Showcase**: This repository contains the UI SDK components with an interactive Storybook for exploring all ad formats and components.

## 🚀 Features

- **Complete Ad Unit Library** - All AdMesh ad formats in one unified SDK
- **Citation-Based Conversation Ads** - Display recommendations as numbered references within text
- **Conversational Ad Units** - Perfect for chat interfaces, AI assistants, and conversational experiences
- **Floating & Auto Widgets** - Non-intrusive recommendation displays
- **Expandable Units** - Rich, interactive product showcases
- **Built-in Tracking** - Automatic click, view, and conversion tracking
- **Intelligent Layouts** - Auto-selects optimal layout based on intent and data
- **Advanced Customization** - Complete freedom over colors, icons, fonts, and styling
- **Theme System** - Enhanced theming with presets, dark mode, and component overrides
- **TypeScript First** - Full type safety and IntelliSense support
- **Framework Agnostic** - React core, but designed for easy embedding
- **Responsive Design** - Mobile-first responsive components
- **Accessibility** - WCAG 2.1 AA compliant

## 📦 Installation

```bash
npm install admesh-ui-sdk
```

## ✨ Self-Contained Design

**Zero configuration required!** The AdMesh UI SDK is completely self-contained and works like Google Ads or any professional SDK:

- ✅ **No Tailwind CSS setup needed** - All styles are automatically injected
- ✅ **No external CSS imports required** - Works out of the box in any React app
- ✅ **No build configuration changes** - Just install and use
- ✅ **Platform independent** - Consistent appearance across all applications
- ✅ **Zero dependencies** - Only requires React and ReactDOM as peer dependencies

The SDK automatically injects all necessary styles when components are rendered, ensuring consistent appearance regardless of your application's CSS framework, Tailwind configuration, or styling approach.

## 🎯 Quick Start

### AdMeshLayout Component (Recommended)
```tsx
import React from 'react';
import { AdMeshLayout } from 'admesh-ui-sdk';
// No CSS import needed! Styles are auto-injected ✨

const recommendations = [
  {
    title: "HubSpot CRM",
    reason: "Perfect for remote teams with excellent collaboration features",
    intent_match_score: 0.92,
    admesh_link: "https://useadmesh.com/track?ad_id=hubspot-123",
    ad_id: "hubspot-123",
    product_id: "hubspot-crm",
    has_free_tier: true,
    trial_days: 14,
    keywords: ["CRM", "Sales", "Marketing"]
  }
];

function App() {
  return (
    <div>
      <h1>My AI Application</h1>

      {/* AdMesh layout - auto-detects best format */}
      <AdMeshLayout
        recommendations={recommendations}
        layout="auto"
        maxItems={6}
        onRecommendationClick={(adId, admeshLink) => {
          window.open(admeshLink, '_blank');
        }}
      />
    </div>
  );
}
```

### Specific Layout Examples
```tsx
// Citation layout for AI conversations
<AdMeshLayout
  recommendations={recommendations}
  conversationText="Based on your startup needs, I recommend HubSpot CRM for its excellent free tier..."
  layout="citation"
/>

// Ecommerce layout for product grids
<AdMeshLayout
  ecommerceProducts={products}
  layout="ecommerce"
  title="Featured Products"
/>

// Grid layout for recommendation cards
<AdMeshLayout
  recommendations={recommendations}
  layout="grid"
  columns={3}
  spacing="lg"
  title="Recommended Solutions"
/>
```

## 📋 Component Comparison

Choose the right component for your use case:

| Component | Best For | Display Style | Integration Complexity | Mobile Optimized |
|-----------|----------|---------------|----------------------|------------------|
| **AdMeshLayout** | All use cases | Auto-adaptive | ⭐ Easy | ✅ Yes |
| **AdMeshProductCard** | Individual products | Single card | ⭐ Easy | ✅ Yes |
| **AdMeshEcommerceCards** | Product carousels | Horizontal scroll | ⭐ Easy | ✅ Yes |
| **AdMeshCitationUnit** | AI assistants | Direct links | ⭐⭐ Medium | ✅ Yes |
| **AdMeshConversationalUnit** | Chat interfaces | Inline/floating | ⭐⭐ Medium | ✅ Yes |
| **AdMeshExpandableUnit** | Rich showcases | Expandable details | ⭐⭐ Medium | ✅ Yes |

## 🎯 AdMeshLayout

**AdMeshLayout** is the recommended component that automatically combines and optimizes all other components:

- **Auto-Detection**: Automatically chooses the best layout based on your content
- **Multiple Layouts**: Citation, ecommerce, grid, list, and mixed layouts
- **Single API**: One component handles all recommendation types
- **Smart Optimization**: Automatically limits items and optimizes for mobile
- **Customizable**: Full control over layout, spacing, and component behavior
- **FTC Compliance**: Includes proper "Sponsored", "Sponsored", and "Powered by AdMesh" disclosures

### Default Configuration

- **Default numberOfItems**: 1 for layout components, 3 for ecommerce
- **Single Item Layout**: When numberOfItems is 1, card displays at 100% width
- **Disclosure Handling**: Only AdMeshLayout shows disclosures - individual components are disclosure-free

The **AdMeshLayout** component is the recommended way to display AdMesh recommendations. It automatically detects the best layout based on your content and provides a single API for all recommendation types.

```tsx
import { AdMeshLayout } from 'admesh-ui-sdk';

// Auto-detection (recommended) - defaults to 1 item for layout, 3 for ecommerce
<AdMeshLayout
  recommendations={recommendations}
  ecommerceProducts={products}
  conversationText="Based on your needs..."
  layout="auto"
  // maxItems defaults: 1 for layout, 3 for ecommerce
/>

// Specific layouts with custom maxItems
<AdMeshLayout layout="citation" recommendations={recs} conversationText="..." />
<AdMeshLayout layout="ecommerce" ecommerceProducts={products} maxItems={3} />
<AdMeshLayout layout="grid" recommendations={recs} maxItems={1} columns={1} />
<AdMeshLayout layout="list" recommendations={recs} maxItems={1} />
<AdMeshLayout layout="mixed" recommendations={recs} ecommerceProducts={products} />
```

**Layout Types:**
- **`auto`**: Automatically detects best layout based on content
- **`citation`**: Direct links within conversation text
- **`ecommerce`**: Horizontal scrolling product grid
- **`grid`**: Responsive grid of recommendation cards
- **`list`**: Vertical list of simplified cards
- **`mixed`**: Combines multiple component types

**Key Features:**
- **Smart Auto-Detection**: Chooses optimal layout automatically
- **Responsive Design**: Adapts to all screen sizes
- **Customizable**: Control columns, spacing, titles, and behavior
- **Component Props**: Pass props to underlying components
- **Event Handling**: Unified click and hover handlers

## 📋 Individual Components

> **Note**: Individual components no longer display disclosure elements (Match Score, "Sponsored", "Powered by AdMesh"). Only AdMeshLayout includes FTC-compliant disclosures. Use AdMeshLayout for platform integration.

### Core Components

#### AdMeshProductCard
Individual product recommendation card with rich information display.

```tsx
<AdMeshProductCard
  recommendation={recommendation}
  showMatchScore={false} // Deprecated - Match Score removed from UI
  showBadges={true}
  onClick={(adId, admeshLink) => window.open(admeshLink)}
/>
```

#### AdMeshEcommerceCards
Horizontal scrolling product cards for ecommerce recommendations, similar to Google product search results.

```tsx
<AdMeshEcommerceCards
  products={ecommerceProducts}
  title="Recommended Laptops"
  showPricing={true}
  showRatings={true}
  showBrand={true}
  cardWidth="md"
  maxCards={10}
  onProductClick={(product) => window.open(product.admesh_link || product.url)}
/>
```

**Perfect for:**
- Product search results
- Ecommerce recommendations
- Mixed AdMesh + Walmart/Amazon products
- Google-style product carousels
- Shopping comparison displays

### Conversational Components

#### AdMeshConversationalUnit
Smart conversational ad component that adapts to different chat contexts and display modes.

```tsx
<AdMeshConversationalUnit
  recommendations={recommendations}
  config={{
    displayMode: 'inline', // 'inline' | 'minimal' | 'floating' | 'summary' | 'citation'
    context: 'chat',
    maxRecommendations: 3,
    showPoweredBy: true
  }}
  onRecommendationClick={(adId, admeshLink) => window.open(admeshLink)}
/>
```

#### AdMeshInlineRecommendation
Compact inline recommendation component perfect for chat interfaces.

```tsx
<AdMeshInlineRecommendation
  recommendation={recommendation}
  compact={true}
  showReason={true}
  onClick={(adId, link) => window.open(link)}
/>
```

#### AdMeshCitationUnit
Citation-based conversation ad component that directly injects clickable links with underlines into text. Supports dynamic content and multiple link insertion strategies.

```tsx
<AdMeshCitationUnit
  recommendations={recommendations}
  conversationText="Based on your requirements, I recommend HubSpot CRM for its features..."
  citationStyle="numbered" // 'numbered' | 'bracketed' | 'superscript'
  onCitationHover={(recommendation) => console.log('Hovered:', recommendation.title)}
/>
```

**Dynamic Content Examples:**

```tsx
// Template-based dynamic links
<AdMeshCitationUnit
  recommendations={recommendations}
  dynamicTemplate="I recommend {product1} for startups and {product2} for enterprises"
  linkInsertionStrategy="template"
  onTextUpdate={(newText) => console.log('Updated text:', newText)}
  enableRealTimeUpdates={true}
/>

// Custom pattern matching
<AdMeshCitationUnit
  recommendations={recommendations}
  conversationText="For CRM solutions, consider these options for your business"
  linkInsertionStrategy="keywords"
  customLinkPatterns={[
    { pattern: "CRM", recommendationIndex: 0, linkText: "HubSpot CRM" },
    { pattern: "business", recommendationIndex: 1, linkText: "Salesforce" }
  ]}
/>

// Append links at the end
<AdMeshCitationUnit
  recommendations={recommendations}
  conversationText="Here are some great software solutions for your needs."
  linkInsertionStrategy="append"
/>
```

**Perfect for:**
- AI assistant responses
- Dynamic conversation generation
- Template-based content
- Real-time text updates
- Natural text integration

#### AdMeshCitationReference
Individual citation references for inline use within conversational text.

```tsx
<AdMeshCitationReference
  recommendations={[recommendation]}
  citationStyle="numbered"
  onRecommendationClick={(adId, link) => window.open(link)}
/>
```

### Chat Components

#### AdMeshChatInterface
Embeddable chat interface for integrating conversational AI into web applications.

```tsx
<AdMeshChatInterface
  messages={messages}
  config={{
    placeholder: "Ask me about products...",
    enableTypingIndicator: true,
    maxMessages: 50
  }}
  onSendMessage={handleSendMessage}
  onRecommendationClick={(adId, link) => window.open(link)}
/>
```

#### AdMeshChatMessage
Individual chat message component with recommendation support.

#### AdMeshChatInput
Chat input component with suggestions and auto-resize functionality.

### Expandable & Interactive Components

#### AdMeshExpandableUnit
Expandable product showcase with detailed information and feature sections.

```tsx
<AdMeshExpandableUnit
  recommendation={recommendation}
  theme={theme}
  showFeatureSections={true}
  showProductImages={true}
  onRecommendationClick={(adId, admeshLink) => window.open(admeshLink)}
/>
```

#### AdMeshProductCard - Simple Variation
Simple, clean ad format for minimal integration (replaces AdMeshSimpleAd).

```tsx
<AdMeshProductCard
  recommendation={recommendation}
  theme={theme}
  variation="simple" // Creates inline ad format
  onClick={(adId, admeshLink) => window.open(admeshLink)}
/>
```

### 🔧 Utility Components

#### AdMeshBadge
Reusable badge component for highlighting features.

#### AdMeshLinkTracker
Wrapper for tracking any clickable element with built-in analytics.

```tsx
<AdMeshLinkTracker
  adId={recommendation.ad_id}
  admeshLink={recommendation.admesh_link}
  productId={recommendation.product_id}
  onClick={() => handleClick()}
  trackingData={{ title: recommendation.title }}
>
  <YourCustomComponent />
</AdMeshLinkTracker>
```

## 🎨 Advanced Customization & Theming

The AdMesh UI SDK provides **complete freedom** for AI platforms to customize colors, icons, fonts, and styling to match their brand perfectly.

### Consistent Design System

The AdMesh UI SDK ensures consistent styling across all components:

- **🎨 Unified Colors & Themes**: All components share the same color palette and theme system
- **📝 Consistent Fonts**: All components use the same font family for visual consistency
- **📐 Standardized Width**: 100% width for all components except ecommerce cards (which maintain horizontal scrolling)
- **📱 Responsive Design**: Mobile-friendly and adaptive across all screen sizes
- **🌙 Dark Mode Support**: Seamless light/dark mode transitions with consistent styling

### Enhanced Theme System

```tsx
import { createAdMeshTheme, themePresets } from 'admesh-ui-sdk';

// Custom brand colors with automatic consistency
const customTheme = createAdMeshTheme({
  mode: 'light',
  primaryColor: '#ff6b6b',      // Your brand color
  secondaryColor: '#4ecdc4',    // Secondary brand color
  accentColor: '#45b7d1',       // Accent color
  borderRadius: '16px',         // Custom border radius
  fontFamily: '"Poppins", sans-serif', // Applied consistently across all components

  // Custom icons (emoji or React components)
  icons: {
    starIcon: '🌟',
    expandIcon: '▼',
    collapseIcon: '▲'
  },

  // Component-specific overrides (width settings are automatically applied)
  components: {
    button: {
      backgroundColor: '#custom-color',
      borderRadius: '12px'
    }
    // Width settings are automatically applied:
    // - productCard: { width: '100%' }
    // - citationUnit: { width: '100%' }
    // - inlineRecommendation: { width: '100%' }
    // - ecommerce cards maintain auto width for horizontal scrolling
  }
});

<AdMeshProductCard
  recommendations={recommendations}
  theme={customTheme}
/>
```

### Preset Themes

```tsx
// Use built-in presets
<AdMeshProductCard theme={themePresets.minimal} />
<AdMeshProductCard theme={themePresets.vibrant} />
<AdMeshProductCard theme={themePresets.corporate} />
```

### Dark Mode

```tsx
import { createDarkTheme } from 'admesh-ui-sdk';

const darkTheme = createDarkTheme({
  primaryColor: '#a78bfa',
  secondaryColor: '#34d399'
});
```

## 📊 Unified Recommendation JSON Response

All AdMesh ad units use the same unified recommendation response structure. This ensures consistency across all components and makes integration seamless.

### Complete Recommendation Object

```typescript
interface AdMeshRecommendation {
  // Core required fields
  title: string;                    // Product/service title
  reason: string;                   // Why this is recommended
  intent_match_score: number;      // 0-1 normalized match score
  admesh_link: string;              // Tracking URL for clicks
  ad_id: string;                    // Unique ad identifier
  product_id: string;               // Unique product identifier

  // Core product/offer fields
  url?: string;                     // Direct product URL
  redirect_url?: string;            // Alternative redirect URL
  description?: string;             // Product description
  pricing?: string;                 // Pricing information
  reward_note?: string | null;      // Special offers/rewards
  keywords?: string[];              // Product keywords
  categories?: string[];            // Product categories
  features?: string[];              // Key features list
  integrations?: string[];          // Integration capabilities
  has_free_tier?: boolean;          // Free tier availability
  trial_days?: number;              // Trial period length
  audience_segment?: string;        // Target audience
  is_ai_powered?: boolean;          // AI-powered product flag
  is_open_source?: boolean;         // Open source flag
  offer_trust_score?: number;       // Offer trust rating (0-1)
  brand_trust_score?: number;       // Brand trust rating (0-1)

  // Marketing content fields (for rich ad units)
  recommendation_title?: string;    // Marketing-optimized title
  recommendation_description?: string; // Marketing-optimized description
  offer_images?: Array<{            // Promotional images
    url: string;
    storage_path: string;
    filename: string;
    content_type: string;
    dimensions: {
      width: number;
      height: number;
    };
  }>;
  product_logo?: {                  // Product logo
    url: string;
    storage_path: string;
    filename: string;
    content_type: string;
    dimensions: {
      width: number;
      height: number;
    };
  };
  feature_sections?: Array<{        // Feature sections for expandable units
    title: string;
    description: string;
    icon: string;
  }>;

  // Extended compatibility fields
  reviews_summary?: string;         // User reviews summary
  security?: string[];              // Security features
  support?: string[];               // Support options
  badges?: string[];                // Display badges
}
```

### API Response Structure

```typescript
interface AgentRecommendationResponse {
  session_id: string;
  intent: {
    categories?: string[];
    goal?: string;
    llm_intent_confidence_score?: number;
    known_mentions?: string[];
    intent_type?: string;
    intent_group?: string;
    keywords?: string[];
  };
  response: {
    summary?: string;
    recommendations: AdMeshRecommendation[];
    followup_suggestions?: Array<{
      label: string;
      query: string;
      product_mentions: string[];
      admesh_links: Record<string, string>;
      session_id: string;
    }>;
  };
  tokens_used: number;
  model_used: string;
  recommendation_id?: string;
  end_of_session?: boolean;
}
```

### Usage Across All Ad Units

The same recommendation object works seamlessly across all ad unit types:

```tsx
// Same recommendations for all components
const recommendations: AdMeshRecommendation[] = [
  {
    title: "HubSpot CRM",
    reason: "Perfect for remote teams with excellent collaboration features",
    intent_match_score: 0.92,
    admesh_link: "https://useadmesh.com/track?ad_id=hubspot-123",
    ad_id: "hubspot-123",
    product_id: "hubspot-crm",
    has_free_tier: true,
    trial_days: 14,
    keywords: ["CRM", "Sales", "Marketing"],
    pricing: "Free tier available, paid plans from $45/month",
    // ... additional fields as needed
  }
];

// Use with any ad unit
{recommendations.map(rec => <AdMeshProductCard key={rec.ad_id} recommendation={rec} />)}
<AdMeshConversationalUnit recommendations={recommendations} config={chatConfig} />
<AdMeshCitationUnit recommendations={recommendations} conversationText="..." />
<AdMeshExpandableUnit recommendation={recommendations[0]} />
```

## 💬 Conversational Ad Units

Perfect for chat interfaces, AI assistants, and conversational experiences.

### Quick Start - Conversational Units

```tsx
import React from 'react';
import { AdMeshConversationalUnit } from 'admesh-ui-sdk';

const recommendations = [
  {
    title: "HubSpot CRM",
    reason: "Perfect for remote teams with excellent collaboration features",
    intent_match_score: 0.92,
    admesh_link: "https://useadmesh.com/track?ad_id=hubspot-123",
    ad_id: "hubspot-123",
    product_id: "hubspot-crm",
    has_free_tier: true,
    trial_days: 14,
    keywords: ["CRM", "Sales", "Marketing"]
  }
];

function ChatInterface() {
  return (
    <div className="chat-container">
      {/* Your chat messages */}
      <div className="message">I need a CRM for my team</div>

      {/* AdMesh conversational ad unit */}
      <AdMeshConversationalUnit
        recommendations={recommendations}
        config={{
          displayMode: 'inline', // 'inline' | 'minimal' | 'floating' | 'summary'
          context: 'chat',
          maxRecommendations: 3,
          showPoweredBy: true
        }}
        onRecommendationClick={(adId, admeshLink) => {
          window.open(admeshLink, '_blank');
        }}
      />
    </div>
  );
}
```

### Display Modes

#### Inline Mode
Full recommendations displayed inline with the conversation:
```tsx
<AdMeshConversationalUnit
  recommendations={recommendations}
  config={{ displayMode: 'inline', context: 'chat' }}
/>
```

#### Minimal Mode
Compact display showing match count and top recommendation:
```tsx
<AdMeshConversationalUnit
  recommendations={recommendations}
  config={{ displayMode: 'minimal', context: 'assistant' }}
/>
```

#### Floating Mode
Floating overlay that doesn't interrupt the conversation flow:
```tsx
<AdMeshConversationalUnit
  recommendations={recommendations}
  config={{ displayMode: 'floating', context: 'support' }}
/>
```

#### Summary Mode
End-of-conversation summary with top recommendations:
```tsx
<AdMeshConversationalUnit
  recommendations={recommendations}
  config={{ displayMode: 'summary', context: 'agent' }}
  conversationSummary="We discussed your CRM needs..."
/>
```

#### Citation Mode
Display recommendations as inline citations within conversational text:
```tsx
<AdMeshConversationalUnit
  recommendations={recommendations}
  config={{ displayMode: 'citation', context: 'assistant' }}
  conversationSummary="Based on your needs, I recommend HubSpot CRM for its excellent features..."
/>
```

### Individual Conversational Components

#### AdMeshInlineRecommendation
Compact inline recommendations for chat bubbles:

```tsx
import { AdMeshInlineRecommendation } from 'admesh-ui-sdk';

<AdMeshInlineRecommendation
  recommendation={recommendation}
  compact={true}
  showReason={true}
  onClick={(adId, link) => window.open(link)}
/>
```

#### AdMeshCitationUnit
Citation-based conversation ads with direct inline links and dynamic content support:

```tsx
import { AdMeshCitationUnit } from 'admesh-ui-sdk';

<AdMeshCitationUnit
  recommendations={recommendations}
  conversationText="Based on your requirements, I recommend HubSpot CRM for its features..."
  citationStyle="numbered" // 'numbered' | 'bracketed' | 'superscript'
  onCitationHover={(recommendation) => console.log('Hovered:', recommendation.title)}
/>
```

**Dynamic Content Strategies:**

```tsx
// 1. Template-based (AI content generation)
<AdMeshCitationUnit
  recommendations={recommendations}
  dynamicTemplate="I recommend {product1} for startups and {product2} for enterprises"
  linkInsertionStrategy="template"
  enableRealTimeUpdates={true}
  onTextUpdate={(text) => updateConversation(text)}
/>

// 2. Custom keyword targeting
<AdMeshCitationUnit
  recommendations={recommendations}
  conversationText="Looking for CRM solutions for your business needs"
  linkInsertionStrategy="keywords"
  customLinkPatterns={[
    { pattern: "CRM", recommendationIndex: 0, linkText: "HubSpot CRM" },
    { pattern: "business", recommendationIndex: 1, linkText: "Salesforce" }
  ]}
/>

// 3. Append recommendations naturally
<AdMeshCitationUnit
  recommendations={recommendations}
  conversationText="Here are some great software options."
  linkInsertionStrategy="append"
/>
```

**Key Features:**
- **Direct Links**: Product names become clickable underlined links
- **Dynamic Templates**: Support for {product1}, {product2} placeholders
- **Smart Insertion**: Multiple strategies for link placement
- **Real-time Updates**: Live text processing and callbacks
- **Custom Patterns**: Target specific keywords or phrases
- **Hover Details**: Shows recommendation details on hover

**Use Cases:**
- **AI Chatbots**: Dynamic conversation generation with template placeholders
- **Content Management**: Auto-linking existing content with product mentions
- **E-commerce**: Keyword-based product recommendations in descriptions
- **Email Marketing**: Append strategy for newsletter recommendations
- **Documentation**: Academic-style citations in technical content

#### AdMeshCitationReference
Individual citation references for inline use:

```tsx
import { AdMeshCitationReference } from 'admesh-ui-sdk';

<p>
  Check out this great CRM solution{' '}
  <AdMeshCitationReference
    recommendation={recommendation}
    citationNumber={1}
    citationStyle="numbered"
    onClick={(adId, link) => window.open(link)}
  />
  {' '}for your business needs.
</p>
```

### 📝 Citation-Based Conversation Ads

Citation-based ads display recommendations as numbered references within conversational text, similar to academic papers or AI assistant responses. This format is perfect for AI applications, chatbots, and content that needs to reference products naturally within flowing text.

#### Key Features

- **Automatic Citation Insertion**: Automatically finds product mentions in text and adds citations
- **Multiple Citation Styles**: Support for numbered (1), bracketed [1], and superscript¹ formats
- **Interactive Tooltips**: Hover over citations to see product details
- **Reference List**: Optional list of all cited products at the bottom
- **Smart Matching**: Uses product titles and keywords to find optimal insertion points

#### Basic Usage

```tsx
import { AdMeshCitationUnit } from 'admesh-ui-sdk';

function AIAssistantResponse() {
  const conversationText = `
    Based on your requirements for a CRM system, I'd recommend HubSpot CRM
    for its excellent free tier and collaboration features. For enterprise needs,
    Salesforce offers the most comprehensive feature set with extensive customization.
  `;

  return (
    <AdMeshCitationUnit
      recommendations={recommendations}
      conversationText={conversationText}
      citationStyle="numbered"
      showCitationList={true}
      onRecommendationClick={(adId, link) => window.open(link)}
    />
  );
}
```

#### Citation Styles

- **Numbered**: `(1)` - Clean numbered circles
- **Bracketed**: `[1]` - Traditional academic style
- **Superscript**: `¹` - Minimal superscript numbers

### Configuration Options

#### ConversationalAdConfig

```tsx
interface ConversationalAdConfig {
  displayMode: 'inline' | 'summary' | 'floating' | 'minimal' | 'citation';
  context: 'chat' | 'assistant' | 'agent' | 'support';
  maxRecommendations?: number;     // Default: 3
  showPoweredBy?: boolean;         // Default: true
  autoShow?: boolean;              // Default: true
  delayMs?: number;                // Default: 0
  position?: 'top' | 'bottom' | 'inline'; // Default: 'inline'
}
```

### Integration Examples

#### Chat Application
```tsx
function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const handleUserMessage = async (message) => {
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: message }]);

    // Get AI response and recommendations
    const response = await getAIResponse(message);
    setMessages(prev => [...prev, { role: 'assistant', content: response.text }]);

    // Show recommendations if available
    if (response.recommendations) {
      setRecommendations(response.recommendations);
    }
  };

  return (
    <div className="chat-container">
      {messages.map((msg, i) => (
        <div key={i} className={`message ${msg.role}`}>
          {msg.content}

          {/* Show recommendations after assistant messages */}
          {msg.role === 'assistant' && recommendations.length > 0 && (
            <AdMeshConversationalUnit
              recommendations={recommendations}
              config={{
                displayMode: 'inline',
                context: 'chat',
                maxRecommendations: 2
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

<AdMeshProductCard theme={theme} recommendations={recommendations} />
```

## 💬 Chat Components

Perfect for websites and applications that want to provide AI-powered recommendations through chat interfaces.

### Embedded Chat Interface

```tsx
import React, { useState } from 'react';
import { AdMeshChatInterface } from 'admesh-ui-sdk';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (messageContent) => {
    // Add user message
    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: messageContent,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Get AI response
    const response = await getAIResponse(messageContent);
    setMessages(prev => [...prev, response]);
    setIsLoading(false);
  };

  return (
    <div className="h-screen">
      <AdMeshChatInterface
        messages={messages}
        config={{
          placeholder: "Ask me about products...",
          enableTypingIndicator: true,
          maxMessages: 50
        }}
        theme={{ mode: 'light' }}
        isLoading={isLoading}
        onSendMessage={handleSendMessage}
        onRecommendationClick={(adId, link) => window.open(link)}
      />
    </div>
  );
}
```

### Chat Features

- **Embedded Interface**: Full chat interface for web applications
- **Message History**: Persistent conversation state
- **Typing Indicators**: Visual feedback during AI response generation
- **Recommendation Display**: Inline product recommendations with tracking
- **Theme Support**: Light/dark modes with custom branding

### Configuration Examples

```tsx
// Embedded chat with message limit
<AdMeshChatInterface
  config={{
    maxMessages: 20,
    enableTypingIndicator: true,
    placeholder: "What can I help you find today?"
  }}
/>
```

## 🤖 Auto-Recommendations (AI Integration)

### Integration with AI Applications

#### ChatGPT Plugin Integration
```tsx
// When ChatGPT detects software-related queries
const handleChatGPTResponse = (userQuery, gptResponse) => {
  if (containsSoftwareQuery(userQuery)) {
    const recommendations = await getAdMeshRecommendations(userQuery);
    showAutoRecommendations(recommendations, userQuery);
  }
};
```

#### Claude Integration
```tsx
// When Claude processes business queries
const handleClaudeQuery = async (query) => {
  const intent = await detectIntent(query);
  if (intent.category === 'software' || intent.category === 'tools') {
    const recommendations = await fetchRecommendations(intent);
    triggerAutoWidget(recommendations, query);
  }
};
```

### Auto-Recommendation Features

- **Zero User Input**: Automatically appears based on AI detection
- **Contextual Triggers**: Shows why recommendations appeared
- **Smart Positioning**: Non-intrusive placement options
## 📊 Tracking & Analytics

All AdMesh UI components include comprehensive built-in tracking for views, clicks, and conversions.

### Automatic Tracking

Every component automatically tracks:
- **Views**: When recommendations are displayed
- **Clicks**: When users click on recommendations
- **Conversions**: When users complete desired actions

```tsx
// All components automatically track interactions
<AdMeshProductCard
  recommendations={recommendations}
  onProductClick={(adId, admeshLink) => {
    // This click is automatically tracked
    window.open(admeshLink, '_blank');
  }}
  onTrackView={(data) => {
    // Optional: Custom view tracking
    console.log('Recommendation viewed:', data);
  }}
/>
```

### Global Tracking Configuration

```tsx
import { setAdMeshTrackerConfig } from '@admesh/ui-sdk';

setAdMeshTrackerConfig({
  apiBaseUrl: 'https://api.useadmesh.com',
  enabled: true,
  debug: true, // Enable for development
  userId: 'user-123', // Optional user identification
  sessionId: 'session-456' // Optional session tracking
});
```

### Custom Tracking

Use the `AdMeshLinkTracker` component for custom tracking:

```tsx
import { AdMeshLinkTracker } from 'admesh-ui-sdk';

<AdMeshLinkTracker
  adId="custom-ad-123"
  admeshLink="https://useadmesh.com/track?ad_id=custom-ad-123"
  productId="product-456"
  trackingData={{
    customField: 'value',
    source: 'custom-component'
  }}
  onClick={() => {
    // Your custom click handler
    console.log('Custom click tracked');
  }}
>
  <YourCustomComponent />
</AdMeshLinkTracker>
```

### Tracking Events

```tsx
import { useAdMeshTracker } from 'admesh-ui-sdk';

function CustomComponent() {
  const { trackClick, trackView, trackConversion } = useAdMeshTracker();

  const handleCustomEvent = async () => {
    await trackClick({
      adId: 'ad-123',
      admeshLink: 'https://useadmesh.com/track?ad_id=ad-123',
      productId: 'product-456',
      metadata: { source: 'custom-button' }
    });
  };

  return <button onClick={handleCustomEvent}>Track Custom Event</button>;
}
```

## 🔗 Integration Examples

### Complete Integration with AdMesh Backend SDKs

```tsx
import { AdMesh } from '@admesh/typescript-sdk';
import { AdMeshProductCard, AdMeshConversationalUnit } from '@admesh/ui-sdk';

const client = new AdMesh({ apiKey: 'your-api-key' });

// Basic recommendation display
async function getRecommendations(query: string) {
  const response = await client.recommend.getRecommendations({
    query,
    format: 'auto'
  });

  return (
    <AdMeshProductCard
      recommendations={response.response?.recommendations || []}
      autoLayout={true}
      onProductClick={(adId, admeshLink) => {
        // Track click and open link
        window.open(admeshLink, '_blank');
      }}
    />
  );
}

// Chat interface integration
function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const handleUserMessage = async (message: string) => {
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: message }]);

    // Get AI response with recommendations
    const response = await client.recommend.getRecommendations({
      query: message,
      format: 'conversational'
    });

    // Add assistant response
    setMessages(prev => [...prev, {
      role: 'assistant',
      content: response.response?.summary || 'Here are some recommendations...'
    }]);

    // Show recommendations
    if (response.response?.recommendations) {
      setRecommendations(response.response.recommendations);
    }
  };

  return (
    <div className="chat-container">
      {messages.map((msg, i) => (
        <div key={i} className={`message ${msg.role}`}>
          {msg.content}

          {/* Show recommendations after assistant messages */}
          {msg.role === 'assistant' && recommendations.length > 0 && (
            <AdMeshConversationalUnit
              recommendations={recommendations}
              config={{
                displayMode: 'inline',
                context: 'chat',
                maxRecommendations: 3
              }}
              onRecommendationClick={(adId, link) => window.open(link)}
            />
          )}
        </div>
      ))}
    </div>
  );
}
```

### Multi-Format Display

```tsx
// Display the same recommendations in different formats
function MultiFormatDemo({ recommendations }: { recommendations: AdMeshRecommendation[] }) {
  return (
    <div className="space-y-8">
      {/* Main layout */}
      <AdMeshProductCard
        recommendations={recommendations}
        autoLayout={true}
      />

      {/* Citation format */}
      <AdMeshCitationUnit
        recommendations={recommendations}
        conversationText="Based on your requirements, I recommend these solutions..."
        citationStyle="numbered"
      />

      {/* Expandable showcase */}
      {recommendations[0] && (
        <AdMeshExpandableUnit
          recommendation={recommendations[0]}
          showFeatureSections={true}
        />
      )}
    </div>
  );
}
```

## 📚 API Reference

### Core Types

```tsx
// Complete recommendation interface (see Unified JSON Response section above)
interface AdMeshRecommendation {
  // Core required fields
  title: string;
  reason: string;
  intent_match_score: number; // 0-1 normalized score
  admesh_link: string;
  ad_id: string;
  product_id: string;

  // All optional fields for different ad unit needs
  url?: string;
  description?: string;
  pricing?: string;
  features?: string[];
  keywords?: string[];
  categories?: string[];
  has_free_tier?: boolean;
  trial_days?: number;
  // ... see complete interface above
}

// Intent types for layout selection
type IntentType =
  | 'compare_products'
  | 'best_for_use_case'
  | 'trial_demo'
  | 'budget_conscious';

// Theme configuration
interface AdMeshTheme {
  mode: 'light' | 'dark';
  accentColor?: string;
  borderRadius?: string;
  fontFamily?: string;
}

// Conversational ad configuration
interface ConversationalAdConfig {
  displayMode: 'inline' | 'summary' | 'floating' | 'minimal' | 'citation';
  context: 'chat' | 'assistant' | 'agent' | 'support';
  maxRecommendations?: number;
  showPoweredBy?: boolean;
  autoShow?: boolean;
  delayMs?: number;
  position?: 'top' | 'bottom' | 'inline';
}

// Chat configuration
interface AdMeshChatConfig {
  position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  size: 'sm' | 'md' | 'lg' | 'xl';
  displayMode: 'widget' | 'fullscreen' | 'embedded';
  autoOpen?: boolean;
  showWelcomeMessage?: boolean;
  welcomeMessage?: string;
  placeholder?: string;
  maxMessages?: number;
  enableTypingIndicator?: boolean;
}
```

## 🎭 Live Examples & Documentation

### Interactive Storybook
**🌐 Hosted Storybook**: [https://storybook.useadmesh.com/](https://storybook.useadmesh.com/)

Explore interactive examples and component variations:

- **📝 Citation Components** - Different citation styles (numbered, bracketed, superscript)
- **💬 Conversational Ads** - Chat interface integration examples
- **🎯 Layout Components** - Unified layout with multiple display options
- **🎨 Theme Variations** - Light/dark mode examples
- **📱 Responsive Design** - Mobile and desktop layout adaptations
- **🔧 Configuration Options** - All component props and configurations

**No installation required** - view all ad formats directly in your browser!

### Complete Documentation
**📚 Full Documentation**: [https://docs.useadmesh.com/](https://docs.useadmesh.com/)

- **Getting Started Guides** - Step-by-step integration tutorials
- **API Reference** - Complete component and prop documentation
- **Integration Examples** - Real-world implementation patterns
- **Best Practices** - Optimization and performance tips
- **Troubleshooting** - Common issues and solutions

## 🎨 Theming & Dark Mode

The AdMesh UI SDK provides comprehensive theming support with full dark mode compliance:

### Theme Configuration

```jsx
// Light theme (default)
<AdMeshProductCard theme={{ mode: "light" }} />

// Dark theme with proper contrast ratios
<AdMeshProductCard theme={{ mode: "dark" }} />

// Custom accent color
<AdMeshProductCard theme={{ mode: "light", accentColor: "#3b82f6" }} />

// Dynamic theme switching
const [isDarkMode, setIsDarkMode] = useState(false);
<AdMeshProductCard theme={{ mode: isDarkMode ? "dark" : "light" }} />
```

### Dark Mode Features

- ✅ **Full Dark Mode Support**: All components automatically adapt to dark theme
- ✅ **WCAG Accessibility**: Proper contrast ratios meet accessibility guidelines
- ✅ **Consistent Branding**: "Powered by AdMesh" remains visible in both themes
- ✅ **Smooth Transitions**: Components transition smoothly between light and dark modes
- ✅ **CSS Variables**: Uses CSS custom properties for consistent theming
- ✅ **No Ambiguous Elements**: Clean, focused interface without confusing UI elements

### CSS Custom Properties

The SDK uses CSS custom properties that automatically adjust based on the theme:

```css
/* Light theme variables */
.admesh-component[data-admesh-theme="light"] {
  --admesh-background: #ffffff;
  --admesh-text: #111827;
  --admesh-border: #e5e7eb;
  --admesh-surface: #f9fafb;
}

/* Dark theme variables */
.admesh-component[data-admesh-theme="dark"] {
  --admesh-background: #111827;
  --admesh-text: #f9fafb;
  --admesh-border: #374151;
  --admesh-surface: #1f2937;
  --admesh-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.3);
}
```

### Theme Integration

All AdMesh components automatically respect the theme prop:

```jsx
// All components support the same theme interface
<AdMeshProductCard theme={{ mode: "dark" }} />
<AdMeshChatInterface theme={{ mode: "dark" }} />
```

## 📱 Responsive Design & Accessibility

### Mobile-First Design

All AdMesh components are built with mobile-first responsive design:

```tsx
// Components automatically adapt to screen sizes
<AdMeshProductCard
  recommendations={recommendations}
  // Automatically shows:
  // - Grid layout on desktop
  // - Single column on mobile
  // - Optimized touch targets
  // - Readable typography scaling
/>

```

### Accessibility Features

- **WCAG 2.1 AA Compliant**: All components meet accessibility standards
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators and logical tab order
- **Color Contrast**: Meets contrast requirements in both light and dark modes
- **Reduced Motion**: Respects user's motion preferences

```tsx
// Accessibility is built-in, no additional configuration needed
<AdMeshConversationalUnit
  recommendations={recommendations}
  config={{ displayMode: 'inline' }}
  // Automatically includes:
  // - aria-labels for recommendations
  // - keyboard navigation
  // - screen reader announcements
  // - focus management
/>
```

### Responsive Breakpoints

```css
/* Built-in responsive breakpoints */
.admesh-component {
  /* Mobile: 0-640px */
  /* Tablet: 641-1024px */
  /* Desktop: 1025px+ */
}

/* Components automatically adjust:
   - Typography scales appropriately
   - Touch targets are 44px minimum
   - Layouts stack on mobile
   - Sidebars become overlays
   - Chat widgets resize appropriately
*/
```

## 🔧 Troubleshooting

### Common Issues & Solutions

#### Components Not Displaying
```tsx
// ❌ Missing recommendations data
<AdMeshProductCard recommendations={undefined} />

// ✅ Always provide valid recommendations array
<AdMeshProductCard recommendations={recommendations || []} />
```

#### Styling Issues
```tsx
// ❌ CSS not loading (if using manual import)
import { AdMeshProductCard } from 'admesh-ui-sdk';

// ✅ Styles are auto-injected, no import needed
import { AdMeshProductCard } from 'admesh-ui-sdk';
// Styles automatically included ✨
```

#### TypeScript Errors
```bash
# Install required peer dependencies
npm install --save-dev @types/react @types/react-dom

# Ensure React 16.8+ for hooks support
npm install react@^16.8.0 react-dom@^16.8.0
```

#### Tracking Not Working
```tsx
// ❌ Missing admesh_link in recommendations
const recommendations = [{
  title: "Product",
  // Missing admesh_link
}];

// ✅ Include proper tracking URLs
const recommendations = [{
  title: "Product",
  admesh_link: "https://useadmesh.com/track?ad_id=123",
  ad_id: "123",
  product_id: "product-123"
}];
```

#### Mobile Layout Issues
```tsx
// ❌ Fixed widths that don't scale
<div style={{ width: '800px' }}>
  <AdMeshProductCard recommendations={recommendations} />
</div>

// ✅ Use responsive containers
<div className="w-full max-w-4xl mx-auto">
  <AdMeshProductCard recommendations={recommendations} />
</div>
```

### Performance Optimization

```tsx
// ✅ Limit recommendations for better performance
<AdMeshProductCard
  recommendations={recommendations}
  maxDisplayed={6} // Limit to 6 items
/>

// ✅ Use React.memo for static recommendations
const MemoizedAdMeshProductCard = React.memo(AdMeshProductCard);

// ✅ Lazy load heavy components
const AdMeshExpandableUnit = React.lazy(() =>
  import('admesh-ui-sdk').then(module => ({
    default: module.AdMeshExpandableUnit
  }))
);
```

## 🛠 Development

```bash
# Install dependencies
npm install

# Start Storybook for development
npm run storybook         # Storybook at :6006

# Build library for NPM
npm run build

# Build Storybook for deployment
npm run build-storybook

# Run linting
npm run lint

# Run tests
npm run test

# Type checking
npm run type-check
```

## 🚀 Deployment

### Automatic Vercel Deployment
1. Go to [vercel.com](https://vercel.com) and import your GitHub repository
2. Configure build settings:
   - **Build Command**: `npm run build-storybook`
   - **Output Directory**: `storybook-static`
3. Deploy automatically on every push to main

**No environment variables needed** - Vercel's GitHub integration handles everything automatically!

### Manual Deployment
```bash
npm run build-storybook
npx serve storybook-static
```

---

## 🎯 Summary

The AdMesh UI SDK provides a complete solution for displaying product recommendations across all ad unit formats:

### ✅ What You Get
- **10+ Ad Unit Types** - From simple cards to complex conversational interfaces
- **Unified JSON Schema** - Same recommendation structure works across all components and sources (Walmart, AdMesh, etc.)
- **Built-in Tracking** - Automatic analytics for views, clicks, and conversions
- **Full Responsive Design** - Mobile-first with accessibility compliance
- **TypeScript Support** - Complete type safety and IntelliSense
- **Theme System** - Light/dark mode with custom branding
- **Zero Configuration** - Works out of the box with sensible defaults

### 🚀 Get Started in 3 Steps

1. **Install**: `npm install admesh-ui-sdk`
2. **Import**: `import { AdMeshProductCard } from 'admesh-ui-sdk';`
3. **Use**: `<AdMeshProductCard recommendations={recommendations} />`

📋 **New in v0.13.0**: [Unified Schema Guide](./UNIFIED_SCHEMA_GUIDE.md) - Learn about the new unified JSON schema that works across all recommendation sources.

## 📋 Unified JSON Schema

The AdMesh UI SDK uses a unified JSON schema that works across all recommendation sources (Walmart, AdMesh, Amazon, etc.). This ensures consistent data structure regardless of the source:

```typescript
interface AdMeshRecommendation {
  // Required core fields
  ad_id: string;
  admesh_link: string;
  audience_segment: string;
  availability: string;
  brand: string;
  brand_trust_score: number;
  categories: string[];
  description: string;
  discount_percentage: number;
  external_id: string;
  feature_sections: any[];
  features: string[];
  image_url: string;
  integrations: any[];
  intent_match_score: number; // 0-1 normalized score
  is_fallback: boolean;
  keywords: string[];
  offer_trust_score: number;
  original_price: number;
  price: number;
  pricing: string; // Formatted price string (e.g., "$99.48")
  product_id: string;
  rating: number;
  reason: string; // Match reason/explanation
  recommendation_description: string; // Marketing-optimized description
  recommendation_title: string; // Marketing-optimized title
  redirect_url: string;
  review_count: number;
  reward_note: string;
  source: string; // Source platform (walmart, admesh, etc.)
  title: string; // Product title
  trial_days: number;
  url: string;

  // Optional fields
  content_variations?: {
    statement?: any;
    question?: any;
  };
  shipping_info?: {
    free_shipping_over_35: boolean;
    standard_rate: number;
    two_day_rate: number;
    ship_to_store: boolean;
    free_ship_to_store: boolean;
  };
  // ... additional optional fields
}
```

### Example Unified Response

```json
{
  "ad_id": "walmart_249887530",
  "admesh_link": "https://goto.walmart.com/c/None/568844/9383?veh=aff&sourceid=imp_000011112222333344&u=https%3A%2F%2Fwww.walmart.com%2Fip%2F249887530",
  "audience_segment": "",
  "availability": "in_stock",
  "brand": "ZENY",
  "brand_trust_score": 0.5,
  "categories": ["All Walmart Restored Large Appliances"],
  "description": "The smallest and lightest twin tub portable washing machine available...",
  "discount_percentage": 34.9,
  "external_id": "249887530",
  "features": ["Free 2-3 day shipping"],
  "image_url": "https://i5.walmartimages.com/asr/7505138e-bbfa-4a43-9de4-2ab8c71eed99.6810f971aaffdca38d18e9928b3e4450.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
  "intent_match_score": 0.72,
  "is_fallback": false,
  "keywords": [],
  "offer_trust_score": 1,
  "original_price": 152.9,
  "price": 99.48,
  "pricing": "$99.48",
  "product_id": "walmart_249887530",
  "rating": 4,
  "reason": "Perfect match for 'best washing machine to buy' - from trusted brand ZENY, highly rated (4.0/5)",
  "recommendation_description": "The smallest and lightest twin tub portable washing machine available...",
  "recommendation_title": "ZENY Portable Washing Machine Mini Twin Tub Washing Machine with Washer & Spinner, Gravity Drain ...",
  "redirect_url": "https://www.walmart.com/ip/249887530",
  "review_count": 384,
  "reward_note": "",
  "source": "walmart",
  "title": "ZENY Portable Washing Machine Mini Twin Tub Washing Machine with Washer & Spinner, Gravity Drain ...",
  "trial_days": 0,
  "url": "https://www.walmart.com/ip/249887530",
  "shipping_info": {
    "free_shipping_over_35": false,
    "standard_rate": 0,
    "two_day_rate": 0,
    "ship_to_store": false,
    "free_ship_to_store": false
  }
}
```

### 🌟 Perfect For
- **AI Applications** - Citation-based conversation ads
- **Chat Interfaces** - Inline and floating recommendation units
- **E-commerce Sites** - Product comparison and showcase components
- **SaaS Platforms** - Unified layout components with smart detection
- **Content Sites** - Expandable and simple ad formats

Ready to get started? Check out our [Interactive Storybook](https://storybook.useadmesh.com/) or [Complete Documentation](https://docs.useadmesh.com/)!

---

## 📄 License

MIT License

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and stories
5. Submit a pull request

See our [Contributing Guide](CONTRIBUTING.md) for detailed instructions.

## 📞 Support & Community

### Documentation & Resources
- **📚 Complete Documentation**: [https://docs.useadmesh.com](https://docs.useadmesh.com)
- **🎭 Interactive Storybook**: [https://storybook.useadmesh.com](https://storybook.useadmesh.com)
- **🚀 AdMesh Dashboard**: [https://useadmesh.com](https://useadmesh.com)

### Get Help
- **GitHub Issues**: [Report bugs or request features](https://github.com/GouniManikumar12/admesh-ui-sdk/issues)
- **Email Support**: [mani@useadmesh.com](mailto:mani@useadmesh.com)
- **Discord Community**: [Join our Discord](https://discord.gg/admesh) (coming soon)

### Quick Links
- **API Keys**: Get your API keys at [useadmesh.com](https://useadmesh.com)
- **TypeScript SDK**: [@admesh/typescript-sdk](https://www.npmjs.com/package/@admesh/typescript-sdk)
- **Python SDK**: [admesh-python](https://pypi.org/project/admesh/)
- **Status Page**: [status.useadmesh.com](https://status.useadmesh.com)

### Contributing
We welcome contributions! See our [Contributing Guide](CONTRIBUTING.md) for details on:
- Setting up the development environment
- Code style and standards
- Submitting pull requests
- Reporting issues
