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
- **Sidebar Components** - Persistent recommendation panels alongside main content
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

## 🎯 Quick Start

```tsx
import React from 'react';
import { AdMeshProductCard } from 'admesh-ui-sdk';
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
    <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
      {recommendations.map((rec, index) => (
        <AdMeshProductCard
          key={rec.ad_id}
          recommendation={rec}
          showBadges={true}
          showMatchScore={true}
          onClick={(adId, admeshLink) => {
            console.log('Product clicked:', { adId, admeshLink });
          }}
        />
      ))}
    </div>
  );
}
```

## 📋 Ad Unit Comparison

Choose the right ad unit for your use case:

| Ad Unit | Best For | Display Style | Integration Complexity | Mobile Optimized |
|---------|----------|---------------|----------------------|------------------|

| **AdMeshProductCard** | Individual products | Single card | ⭐ Easy | ✅ Yes |
| **AdMeshCompareTable** | Product comparisons | Side-by-side table | ⭐⭐ Medium | ✅ Yes |
| **AdMeshConversationalUnit** | Chat interfaces | Inline/floating | ⭐⭐ Medium | ✅ Yes |
| **AdMeshCitationUnit** | AI assistants | Numbered references | ⭐⭐⭐ Advanced | ✅ Yes |
| **AdMeshSidebar** | Persistent panels | Fixed sidebar | ⭐⭐ Medium | ✅ Yes |
| **AdMeshFloatingChat** | Website widgets | Floating overlay | ⭐⭐⭐ Advanced | ✅ Yes |
| **AdMeshExpandableUnit** | Rich showcases | Expandable details | ⭐⭐ Medium | ✅ Yes |

| **AdMeshAutoRecommendationWidget** | AI-triggered | Auto-appearing | ⭐⭐⭐ Advanced | ✅ Yes |

## 🧩 All Ad Units & Components

### 📋 Core Layout Components



#### AdMeshProductCard
Individual product recommendation card with rich information display.

```tsx
<AdMeshProductCard
  recommendation={recommendation}
  showMatchScore={true}
  showBadges={true}
  onClick={(adId, admeshLink) => window.open(admeshLink)}
/>
```

#### AdMeshCompareTable
Side-by-side product comparison table for multiple recommendations.

```tsx
<AdMeshCompareTable
  recommendations={recommendations.slice(0, 3)}
  showMatchScores={true}
  showFeatures={true}
  onProductClick={(adId, admeshLink) => window.open(admeshLink)}
/>
```

### 💬 Conversational Ad Units

Perfect for chat interfaces, AI assistants, and conversational experiences.

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

#### AdMeshConversationSummary
End-of-conversation summary with top recommendations and action buttons.

```tsx
<AdMeshConversationSummary
  recommendations={recommendations}
  conversationSummary="Here's what we discussed and found for you..."
  showTopRecommendations={3}
  onRecommendationClick={(adId, link) => window.open(link)}
  onStartNewConversation={() => startNewChat()}
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
Citation-based conversation ad component that displays recommendations as numbered references within text.

```tsx
<AdMeshCitationUnit
  recommendations={recommendations}
  conversationText="Based on your requirements, I recommend HubSpot CRM for its features..."
  showCitationList={true}
  citationStyle="numbered" // 'numbered' | 'bracketed' | 'superscript'
  onRecommendationClick={(adId, link) => window.open(link)}
/>
```

#### AdMeshCitationReference
Individual citation references for inline use within conversational text.

```tsx
<AdMeshCitationReference
  recommendations={[recommendation]}
  citationStyle="numbered"
  onRecommendationClick={(adId, link) => window.open(link)}
/>
```

### 📋 Sidebar Components

Perfect for applications that need persistent recommendation panels alongside main content.

#### AdMeshSidebar
Persistent sidebar component for displaying recommendations alongside your main content.

```tsx
<AdMeshSidebar
  recommendations={recommendations}
  config={{
    position: 'left',        // 'left' | 'right'
    size: 'md',             // 'sm' | 'md' | 'lg' | 'xl'
    displayMode: 'recommendations', // 'recommendations' | 'mixed' | 'history' | 'favorites'
    collapsible: true,
    showHeader: true,
    showSearch: true,
    maxRecommendations: 10
  }}
  title="AI Recommendations"
  onRecommendationClick={(adId, admeshLink) => window.open(admeshLink)}
/>
```

#### AdMeshSidebarHeader
Customizable header with search, title, and collapse functionality.

#### AdMeshSidebarContent
Content area with tabs, filtering, and multiple display modes.

### 💬 Chat Components

Perfect for websites and applications that want to provide AI-powered recommendations through chat interfaces.

#### AdMeshFloatingChat
Floating chat widget that can be embedded on any website for AI-powered recommendations.

```tsx
<AdMeshFloatingChat
  config={{
    position: 'bottom-right',    // 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
    size: 'md',                 // 'sm' | 'md' | 'lg' | 'xl'
    autoOpen: false,
    showWelcomeMessage: true,
    welcomeMessage: "Hi! How can I help you find the perfect products?"
  }}
  onSendMessage={handleSendMessage}
  onRecommendationClick={(adId, admeshLink) => window.open(admeshLink)}
/>
```

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

### 🤖 Auto-Recommendation Components

Perfect for AI applications that want to automatically show recommendations without user input.

#### AdMeshAutoRecommendationWidget
Standalone widget that automatically appears with recommendations when triggered by AI applications.

```tsx
<AdMeshAutoRecommendationWidget
  recommendations={autoRecommendations}
  trigger={userQuery}
  autoShow={true}
  showDelay={1000}
  position="bottom-right"
  size="md"
  title="AI Recommendations"
  onRecommendationClick={(adId, admeshLink) => window.open(admeshLink)}
  onDismiss={() => setAutoRecommendations([])}
/>
```

### 🎯 Expandable & Interactive Units

Rich, interactive components for detailed product showcases.

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

### Enhanced Theme System

```tsx
import { createAdMeshTheme, themePresets } from 'admesh-ui-sdk';

// Custom brand colors
const customTheme = createAdMeshTheme({
  mode: 'light',
  primaryColor: '#ff6b6b',      // Your brand color
  secondaryColor: '#4ecdc4',    // Secondary brand color
  accentColor: '#45b7d1',       // Accent color
  borderRadius: '16px',         // Custom border radius
  fontFamily: '"Poppins", sans-serif',

  // Custom icons (emoji or React components)
  icons: {
    starIcon: '🌟',
    expandIcon: '▼',
    collapseIcon: '▲'
  },

  // Component-specific overrides
  components: {
    button: {
      backgroundColor: '#custom-color',
      borderRadius: '12px'
    }
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
<AdMeshSidebar recommendations={recommendations} config={sidebarConfig} />
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

#### AdMeshConversationSummary
Perfect for end-of-conversation summaries:

```tsx
import { AdMeshConversationSummary } from 'admesh-ui-sdk';

<AdMeshConversationSummary
  recommendations={recommendations}
  conversationSummary="Here's what we discussed and found for you..."
  showTopRecommendations={3}
  onRecommendationClick={(adId, link) => window.open(link)}
  onStartNewConversation={() => startNewChat()}
/>
```

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
Citation-based conversation ads with inline references:

```tsx
import { AdMeshCitationUnit } from 'admesh-ui-sdk';

<AdMeshCitationUnit
  recommendations={recommendations}
  conversationText="Based on your requirements, I recommend HubSpot CRM for its features..."
  showCitationList={true}
  citationStyle="numbered" // 'numbered' | 'bracketed' | 'superscript'
  onRecommendationClick={(adId, link) => window.open(link)}
  onCitationHover={(recommendation) => console.log('Hovered:', recommendation.title)}
/>
```

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

## 📋 Sidebar Components

Perfect for applications that need persistent recommendation panels alongside main content.

### Quick Start - Sidebar

```tsx
import React, { useState } from 'react';
import { AdMeshSidebar } from 'admesh-ui-sdk';

function AppWithSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* AdMesh Sidebar */}
      <AdMeshSidebar
        recommendations={recommendations}
        config={{
          position: 'left',        // 'left' | 'right'
          size: 'md',             // 'sm' | 'md' | 'lg' | 'xl'
          displayMode: 'recommendations', // 'recommendations' | 'mixed' | 'history' | 'favorites'
          collapsible: true,
          showHeader: true,
          showSearch: true,
          maxRecommendations: 10
        }}
        theme={{ mode: 'light' }}
        title="AI Recommendations"
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        onRecommendationClick={(adId, admeshLink) => {
          window.open(admeshLink, '_blank');
        }}
      />

      {/* Your main content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-80' : 'ml-0'}`}>
        <div className="p-8">
          <h1>Your Application Content</h1>
          <p>The sidebar appears alongside your main content.</p>
        </div>
      </div>
    </div>
  );
}
```

### Sidebar Features

- **Multiple Positions**: Left or right sidebar placement
- **Responsive Sizes**: Small to extra-large width options
- **Display Modes**: Recommendations, mixed, history, and favorites views
- **Search & Filter**: Built-in search and filtering capabilities
- **Collapsible**: Space-saving collapsed state
- **Tabs**: All, Top, and Recent recommendation tabs
- **Theme Support**: Light/dark mode with custom accent colors

### Configuration Examples

```tsx
// Compact right sidebar
<AdMeshSidebar
  config={{
    position: 'right',
    size: 'sm',
    displayMode: 'recommendations',
    showSearch: false,
    maxRecommendations: 5
  }}
/>

// Large sidebar with mixed display
<AdMeshSidebar
  config={{
    position: 'left',
    size: 'lg',
    displayMode: 'mixed',
    collapsible: true,
    showSearch: true,
    showFilters: true
  }}
/>
```

## 💬 Chat Components

Perfect for websites and applications that want to provide AI-powered recommendations through chat interfaces.

### Quick Start - Floating Chat Widget

```tsx
import React, { useState } from 'react';
import { AdMeshFloatingChat } from 'admesh-ui-sdk';

function WebsiteWithChat() {
  const [chatOpen, setChatOpen] = useState(false);

  const handleSendMessage = async (message) => {
    // Call your AI API to get response with recommendations
    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message })
    });

    const data = await response.json();

    return {
      id: `assistant-${Date.now()}`,
      role: 'assistant',
      content: data.response,
      timestamp: new Date(),
      recommendations: data.recommendations
    };
  };

  return (
    <div>
      {/* Your website content */}
      <main>
        <h1>Your Website</h1>
        <p>The chat widget appears in the corner</p>
      </main>

      {/* AdMesh Floating Chat */}
      <AdMeshFloatingChat
        config={{
          position: 'bottom-right',    // 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
          size: 'md',                 // 'sm' | 'md' | 'lg' | 'xl'
          autoOpen: false,            // Auto-open on page load
          showWelcomeMessage: true,
          welcomeMessage: "Hi! How can I help you find the perfect products?",
          enableSuggestions: true,
          suggestions: [
            "I need software recommendations",
            "What tools do you recommend?",
            "Help me find the right solution"
          ]
        }}
        theme={{ mode: 'light' }}
        title="AI Assistant"
        subtitle="Get personalized recommendations"
        isOpen={chatOpen}
        onToggle={() => setChatOpen(!chatOpen)}
        onSendMessage={handleSendMessage}
        onRecommendationClick={(adId, admeshLink) => {
          window.open(admeshLink, '_blank');
        }}
      />
    </div>
  );
}
```

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

- **Floating Widget**: Non-intrusive chat button that expands to full chat
- **Multiple Positions**: Place in any corner of the screen
- **Responsive Sizes**: From compact mobile to large desktop
- **Auto-open**: Proactive engagement with visitors
- **Welcome Messages**: Customizable greeting messages
- **Quick Suggestions**: Pre-defined conversation starters
- **Typing Indicators**: Visual feedback during AI response generation
- **Message History**: Persistent conversation state
- **Recommendation Display**: Inline product recommendations with tracking
- **Theme Support**: Light/dark modes with custom branding

### Configuration Examples

```tsx
// Compact bottom-left widget
<AdMeshFloatingChat
  config={{
    position: 'bottom-left',
    size: 'sm',
    autoOpen: false,
    showWelcomeMessage: true,
    welcomeMessage: "Need help finding something?"
  }}
/>

// Large auto-opening widget with suggestions
<AdMeshFloatingChat
  config={{
    position: 'bottom-right',
    size: 'lg',
    autoOpen: true,
    enableSuggestions: true,
    suggestions: [
      "Show me your best products",
      "I need business software",
      "Help me choose the right tool"
    ]
  }}
/>

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

Perfect for AI applications that want to automatically show recommendations without user input.

### Quick Start - Auto-Recommendation Widget

```tsx
import React, { useState } from 'react';
import { AdMeshAutoRecommendationWidget } from 'admesh-ui-sdk';

function AIApplicationWithAutoRecommendations() {
  const [autoRecommendations, setAutoRecommendations] = useState([]);
  const [triggerQuery, setTriggerQuery] = useState('');

  // This would be called when your AI detects a relevant query
  const handleAIQuery = (userQuery, detectedRecommendations) => {
    setTriggerQuery(userQuery);
    setAutoRecommendations(detectedRecommendations);
  };

  return (
    <div>
      {/* Your AI application interface */}
      <main>
        <h1>Your AI Assistant</h1>
        {/* Your chat interface, AI responses, etc. */}
      </main>

      {/* Auto-Recommendation Widget */}
      <AdMeshAutoRecommendationWidget
        recommendations={autoRecommendations}
        trigger={triggerQuery}
        autoShow={true}
        showDelay={1000}
        position="bottom-right"
        size="md"
        title="AI Recommendations"
        onRecommendationClick={(adId, admeshLink) => {
          window.open(admeshLink, '_blank');
        }}
        onDismiss={() => {
          setAutoRecommendations([]);
        }}
      />
    </div>
  );
}
```

### Floating Chat with Auto-Recommendations

```tsx
import React, { useState } from 'react';
import { AdMeshFloatingChat } from 'admesh-ui-sdk';

function AppWithAutoFloatingChat() {
  const [autoRecommendations, setAutoRecommendations] = useState([]);
  const [triggerQuery, setTriggerQuery] = useState('');

  // Called when AI detects relevant queries
  const handleAIDetection = (query, recommendations) => {
    setTriggerQuery(query);
    setAutoRecommendations(recommendations);
  };

  return (
    <div>
      {/* Your application */}

      {/* Floating Chat with Auto-Recommendations */}
      <AdMeshFloatingChat
        autoRecommendations={autoRecommendations}
        autoRecommendationTrigger={triggerQuery}
        autoShowRecommendations={true}
        showInputField={false}  // Hide input since it's auto-triggered
        config={{
          position: 'bottom-right',
          size: 'md',
          autoOpen: true
        }}
        title="AI Recommendations"
        subtitle="Based on your conversation"
        onRecommendationClick={(adId, link) => window.open(link)}
        onAutoRecommendationDismiss={() => {
          setAutoRecommendations([]);
        }}
      />
    </div>
  );
}
```

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
- **Auto-Dismiss**: Configurable auto-hide after time or interaction
- **Delay Control**: Customizable appearance timing
- **Theme Integration**: Matches your application's design
- **Analytics Ready**: Built-in tracking for recommendation performance

### Configuration Examples

```tsx
// Minimal auto-widget
<AdMeshAutoRecommendationWidget
  recommendations={recommendations}
  trigger="I need a CRM system"
  autoShow={true}
/>

// Advanced configuration
<AdMeshAutoRecommendationWidget
  recommendations={recommendations}
  trigger={userQuery}
  position="bottom-left"
  size="lg"
  autoShow={true}
  showDelay={2000}
  title="Smart Recommendations"
  theme={{ mode: 'dark', accentColor: '#3b82f6' }}
  onRecommendationClick={handleClick}
  onDismiss={handleDismiss}
/>

// Floating chat without input
<AdMeshFloatingChat
  autoRecommendations={recommendations}
  autoRecommendationTrigger={query}
  autoShowRecommendations={true}
  showInputField={false}
  config={{ position: 'bottom-right', autoOpen: true }}
/>
```

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

      {/* Sidebar */}
      <AdMeshSidebar
        recommendations={recommendations}
        config={{
          position: 'right',
          size: 'md',
          displayMode: 'recommendations'
        }}
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

// Sidebar configuration
interface AdMeshSidebarConfig {
  position: 'left' | 'right';
  size: 'sm' | 'md' | 'lg' | 'xl';
  displayMode: 'recommendations' | 'history' | 'favorites' | 'mixed';
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  showHeader?: boolean;
  showSearch?: boolean;
  maxRecommendations?: number;
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
- **📋 Sidebar Components** - Different sizes and configurations
- **🤖 Auto-Recommendation Widgets** - AI-triggered recommendation examples
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
<AdMeshCompareTable theme={{ mode: "dark" }} />
<AdMeshSidebar theme={{ mode: "dark" }} />
<AdMeshFloatingChat theme={{ mode: "dark" }} />
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

// Sidebar components include mobile-specific behavior
<AdMeshSidebar
  config={{
    position: 'left',
    size: 'md'
    // Automatically becomes:
    // - Overlay on mobile
    // - Fixed sidebar on desktop
    // - Swipe gestures on touch devices
  }}
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
- **Unified JSON Response** - Same recommendation structure works across all components
- **Built-in Tracking** - Automatic analytics for views, clicks, and conversions
- **Full Responsive Design** - Mobile-first with accessibility compliance
- **TypeScript Support** - Complete type safety and IntelliSense
- **Theme System** - Light/dark mode with custom branding
- **Zero Configuration** - Works out of the box with sensible defaults

### 🚀 Get Started in 3 Steps

1. **Install**: `npm install admesh-ui-sdk`
2. **Import**: `import { AdMeshProductCard } from 'admesh-ui-sdk';`
3. **Use**: `<AdMeshProductCard recommendations={recommendations} />`

### 🌟 Perfect For
- **AI Applications** - Citation-based conversation ads
- **Chat Interfaces** - Inline and floating recommendation units
- **E-commerce Sites** - Product comparison and showcase components
- **SaaS Platforms** - Sidebar and auto-recommendation widgets
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
