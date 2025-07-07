# AdMesh UI SDK

A React + TypeScript component library for displaying AdMesh product recommendations with **citation-based conversation ads**, built-in tracking, and theming support.

## 🌐 Live Sites

- **🎭 Interactive Storybook**: [https://storybook.useadmesh.com/](https://storybook.useadmesh.com/) - Explore all components and ad formats
- **📚 Complete Documentation**: [https://docs.useadmesh.com/](https://docs.useadmesh.com/) - Full SDK documentation and guides
- **🚀 AdMesh Dashboard**: [https://useadmesh.com](https://useadmesh.com) - Get your API keys and manage campaigns

> **🎨 Component Showcase**: This repository contains the UI SDK components with an interactive Storybook for exploring all ad formats and components.

## 🚀 Features

- **Citation-Based Conversation Ads** - Display recommendations as numbered references within text, like academic papers or AI assistants
- **Pre-built UI Components** - Ready-to-use components for product recommendations
- **Built-in Tracking** - Automatic click, view, and conversion tracking
- **Intelligent Layouts** - Auto-selects optimal layout based on intent and data
- **Theme Support** - Light/dark mode with custom accent colors
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
    <AdMeshLayout
      recommendations={recommendations}
      autoLayout={true}
      showMatchScores={true}
      onProductClick={(adId, admeshLink) => {
        console.log('Product clicked:', { adId, admeshLink });
      }}
    />
  );
}
```

## 🧩 Components

### Core Components

#### AdMeshLayout
The main layout component that automatically chooses the best display format.

#### AdMeshProductCard
Individual product recommendation card.

#### AdMeshCompareTable
Side-by-side product comparison table.

#### AdMeshBadge
Reusable badge component.

#### AdMeshLinkTracker
Wrapper for tracking any clickable element.

### 💬 Conversational Ad Units

#### AdMeshConversationalUnit
Smart conversational ad component that adapts to different chat contexts and display modes.

#### AdMeshConversationSummary
End-of-conversation summary with top recommendations and action buttons.

#### AdMeshInlineRecommendation
Compact inline recommendation component perfect for chat interfaces.

#### AdMeshCitationUnit
Citation-based conversation ad component that displays recommendations as numbered references within text.

#### AdMeshCitationReference
Individual citation reference component for inline use within conversational text.

### 📋 Sidebar Components

#### AdMeshSidebar
Persistent sidebar component for displaying recommendations alongside your main content.

#### AdMeshSidebarHeader
Customizable header with search, title, and collapse functionality.

#### AdMeshSidebarContent
Content area with tabs, filtering, and multiple display modes.

### 💬 Chat Components

#### AdMeshFloatingChat
Floating chat widget that can be embedded on any website for AI-powered recommendations.

#### AdMeshChatInterface
Embeddable chat interface for integrating conversational AI into web applications.

#### AdMeshChatMessage
Individual chat message component with recommendation support.

#### AdMeshChatInput
Chat input component with suggestions and auto-resize functionality.

#### AdMeshAutoRecommendationWidget
Standalone widget that automatically appears with recommendations when triggered by AI applications.

## 🎨 Theming

```tsx
const theme = {
  mode: 'dark', // 'light' | 'dark'
  accentColor: '#8b5cf6', // Custom accent color
};
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

<AdMeshLayout theme={theme} recommendations={recommendations} />
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

## 📊 Tracking

All components include built-in view and click tracking:

```tsx
import { setAdMeshTrackerConfig } from '@admesh/ui-sdk';

setAdMeshTrackerConfig({
  apiBaseUrl: 'https://api.useadmesh.com',
  enabled: true,
  debug: true
});
```

## 🔗 Integration with AdMesh SDKs

Works seamlessly with AdMesh backend SDKs:

```tsx
import { AdMesh } from '@admesh/typescript-sdk';
import { AdMeshLayout } from '@admesh/ui-sdk';

const client = new AdMesh({ apiKey: 'your-api-key' });

async function getRecommendations(query: string) {
  const response = await client.recommend.getRecommendations({
    query,
    format: 'auto'
  });

  return (
    <AdMeshLayout
      recommendations={response.response?.recommendations || []}
      autoLayout={true}
    />
  );
}
```

## 📚 API Reference

### Types

```tsx
interface AdMeshRecommendation {
  title: string;
  reason: string;
  intent_match_score: number; // 0-1
  admesh_link: string;
  ad_id: string;
  product_id: string;
  features?: string[];
  has_free_tier?: boolean;
  trial_days?: number;
  pricing?: string;
  keywords?: string[];
}

type IntentType =
  | 'compare_products'
  | 'best_for_use_case'
  | 'trial_demo'
  | 'budget_conscious';

interface AdMeshTheme {
  mode: 'light' | 'dark';
  accentColor?: string;
}
```

## 🎭 Live Storybook Examples

**🌐 Hosted Storybook**: [https://storybook.useadmesh.com/](https://storybook.useadmesh.com/)

Explore interactive examples and component variations:

- **📝 Citation Components** - Different citation styles (numbered, bracketed, superscript)
- **💬 Conversational Ads** - Chat interface integration examples
- **🎨 Theme Variations** - Light/dark mode examples
- **📱 Responsive Design** - Mobile and desktop layout adaptations

**No installation required** - view all ad formats directly in your browser!

## 🎨 Theming & Dark Mode

The AdMesh UI SDK provides comprehensive theming support with full dark mode compliance:

### Theme Configuration

```jsx
// Light theme (default)
<AdMeshLayout theme={{ mode: "light" }} />

// Dark theme with proper contrast ratios
<AdMeshLayout theme={{ mode: "dark" }} />

// Custom accent color
<AdMeshLayout theme={{ mode: "light", accentColor: "#3b82f6" }} />

// Dynamic theme switching
const [isDarkMode, setIsDarkMode] = useState(false);
<AdMeshLayout theme={{ mode: isDarkMode ? "dark" : "light" }} />
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
<AdMeshChatWidget theme={{ mode: "dark" }} />
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

## 📄 License

MIT License

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and stories
5. Submit a pull request

## 📞 Support

- Documentation: [AdMesh Docs](https://docs.useadmesh.com)
- GitHub Issues: [Report a bug](https://github.com/GouniManikumar12/admesh-ui-sdk/issues)
- Email: mani@useadmesh.com
