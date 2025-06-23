# AdMesh Conversational Ad Units Integration Guide

This guide covers how to integrate AdMesh conversational ad units into chat interfaces, AI assistants, and other conversational experiences.

## 🎯 Overview

Conversational ad units are designed to seamlessly inject product recommendations into conversations without disrupting the user experience. They can be displayed inline, as summaries, or as floating overlays.

## 🚀 Quick Integration

### 1. Basic Chat Integration

```tsx
import React, { useState } from 'react';
import { AdMeshConversationalUnit } from 'admesh-ui-sdk';

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [currentRecommendations, setCurrentRecommendations] = useState([]);

  const handleUserMessage = async (userInput) => {
    // Add user message
    setMessages(prev => [...prev, { 
      role: 'user', 
      content: userInput 
    }]);

    // Get AI response with recommendations
    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: userInput })
    });
    
    const data = await response.json();
    
    // Add AI response
    setMessages(prev => [...prev, { 
      role: 'assistant', 
      content: data.response,
      recommendations: data.recommendations 
    }]);
  };

  return (
    <div className="chat-container">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.role}`}>
          <div className="message-content">
            {message.content}
          </div>
          
          {/* Show recommendations after assistant messages */}
          {message.role === 'assistant' && message.recommendations && (
            <AdMeshConversationalUnit
              recommendations={message.recommendations}
              config={{
                displayMode: 'inline',
                context: 'chat',
                maxRecommendations: 3,
                showPoweredBy: true
              }}
              onRecommendationClick={(adId, admeshLink) => {
                // Track click and open link
                window.open(admeshLink, '_blank');
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
```

### 2. AI Assistant Integration

```tsx
import { AdMeshConversationalUnit, AdMeshConversationSummary, AdMeshCitationUnit } from 'admesh-ui-sdk';

function AIAssistant() {
  const [conversation, setConversation] = useState([]);
  const [sessionSummary, setSessionSummary] = useState(null);
  const [isSessionEnded, setIsSessionEnded] = useState(false);

  const endConversation = () => {
    setIsSessionEnded(true);
    // Generate session summary with recommendations
    generateSessionSummary();
  };

  return (
    <div className="assistant-interface">
      {/* Conversation messages */}
      {conversation.map((msg, i) => (
        <div key={i} className="message">
          {msg.content}
          
          {/* Inline recommendations during conversation */}
          {msg.recommendations && !isSessionEnded && (
            <AdMeshConversationalUnit
              recommendations={msg.recommendations}
              config={{
                displayMode: 'minimal',
                context: 'assistant',
                maxRecommendations: 1,
                autoShow: true,
                delayMs: 1000
              }}
            />
          )}
        </div>
      ))}

      {/* Session summary at the end */}
      {isSessionEnded && sessionSummary && (
        <AdMeshConversationSummary
          recommendations={sessionSummary.recommendations}
          conversationSummary={sessionSummary.text}
          showTopRecommendations={3}
          onRecommendationClick={(adId, link) => window.open(link)}
          onStartNewConversation={() => {
            setIsSessionEnded(false);
            setConversation([]);
            setSessionSummary(null);
          }}
        />
      )}
    </div>
  );
}
```

## 🎨 Display Modes

### Inline Mode
Best for: Chat applications, conversational AI
- Shows full recommendation cards inline with the conversation
- Doesn't interrupt conversation flow
- Provides detailed product information

```tsx
<AdMeshConversationalUnit
  recommendations={recommendations}
  config={{
    displayMode: 'inline',
    context: 'chat',
    maxRecommendations: 3
  }}
/>
```

### Minimal Mode
Best for: Quick suggestions, space-constrained interfaces
- Shows match count and top recommendation only
- Very compact footprint
- Perfect for mobile interfaces

```tsx
<AdMeshConversationalUnit
  recommendations={recommendations}
  config={{
    displayMode: 'minimal',
    context: 'assistant',
    maxRecommendations: 1
  }}
/>
```

### Floating Mode
Best for: Non-intrusive suggestions, overlay recommendations
- Appears as floating overlay
- Dismissible by user
- Doesn't affect conversation layout

```tsx
<AdMeshConversationalUnit
  recommendations={recommendations}
  config={{
    displayMode: 'floating',
    context: 'support',
    maxRecommendations: 2,
    position: 'bottom'
  }}
  onDismiss={() => console.log('User dismissed recommendations')}
/>
```

### Summary Mode
Best for: End-of-conversation summaries, session wrap-ups
- Comprehensive summary with top recommendations
- Action buttons for next steps
- Perfect for conversation conclusions

```tsx
<AdMeshConversationalUnit
  recommendations={recommendations}
  config={{
    displayMode: 'summary',
    context: 'agent'
  }}
  conversationSummary="Based on our conversation about CRM solutions..."
/>
```

### Citation Mode
Best for: AI assistants, academic-style references, natural product mentions
- Displays recommendations as numbered citations within text
- Interactive tooltips on hover
- Reference list at the bottom
- Perfect for AI responses that mention products naturally

```tsx
<AdMeshConversationalUnit
  recommendations={recommendations}
  config={{
    displayMode: 'citation',
    context: 'assistant'
  }}
  conversationSummary="Based on your requirements, I recommend HubSpot CRM for its excellent features..."
/>
```

## 📝 Citation-Based Integration

### Using Citation Components Directly

For more control over citation placement and styling:

```tsx
import { AdMeshCitationUnit, AdMeshCitationReference } from 'admesh-ui-sdk';

function AIResponseWithCitations({ responseText, recommendations }) {
  return (
    <div className="ai-response">
      {/* Use the full citation unit */}
      <AdMeshCitationUnit
        recommendations={recommendations}
        conversationText={responseText}
        citationStyle="numbered"
        showCitationList={true}
        onRecommendationClick={(adId, link) => {
          // Track citation clicks
          analytics.track('citation_clicked', { adId });
          window.open(link, '_blank');
        }}
        onCitationHover={(recommendation) => {
          // Track citation hovers for engagement metrics
          analytics.track('citation_hovered', {
            productId: recommendation.product_id
          });
        }}
      />
    </div>
  );
}

// Or use individual citation references
function CustomTextWithCitations() {
  return (
    <p>
      For your CRM needs, I recommend{' '}
      <AdMeshCitationReference
        recommendation={recommendations[0]}
        citationNumber={1}
        citationStyle="bracketed"
        onClick={(adId, link) => window.open(link)}
      />
      {' '}which offers excellent automation features.
    </p>
  );
}
```

### Citation Styles

Choose the citation style that best fits your application:

```tsx
// Numbered circles (default) - clean and modern
citationStyle="numbered"  // (1)

// Bracketed - academic style
citationStyle="bracketed"  // [1]

// Superscript - minimal footprint
citationStyle="superscript"  // ¹
```

## 🔧 Advanced Configuration

### Delayed Display
Show recommendations after a delay to avoid overwhelming users:

```tsx
<AdMeshConversationalUnit
  recommendations={recommendations}
  config={{
    displayMode: 'inline',
    context: 'chat',
    autoShow: false,
    delayMs: 2000  // Show after 2 seconds
  }}
/>
```

### Context-Aware Styling
Different contexts automatically apply appropriate styling:

```tsx
// Chat context - casual, friendly styling
config={{ context: 'chat' }}

// Assistant context - professional, helpful styling  
config={{ context: 'assistant' }}

// Agent context - business-focused styling
config={{ context: 'agent' }}

// Support context - problem-solving styling
config={{ context: 'support' }}
```

### Custom Theming
Apply consistent theming across your application:

```tsx
const theme = {
  mode: 'dark',
  accentColor: '#3b82f6',
  borderRadius: '8px',
  fontFamily: 'Inter, sans-serif'
};

<AdMeshConversationalUnit
  recommendations={recommendations}
  config={{ displayMode: 'inline', context: 'chat' }}
  theme={theme}
/>
```

## 📱 Mobile Optimization

Conversational ad units are mobile-first and automatically adapt:

```tsx
// Automatically uses compact layout on mobile
<AdMeshConversationalUnit
  recommendations={recommendations}
  config={{
    displayMode: 'inline',
    context: 'chat',
    maxRecommendations: 2  // Fewer recommendations on mobile
  }}
/>
```

## 🎯 Best Practices

### 1. Timing
- Show recommendations after the AI provides a helpful response
- Use delays for non-urgent suggestions
- Don't show recommendations on every message

### 2. Relevance
- Only show recommendations when they're contextually relevant
- Limit to 1-3 recommendations to avoid overwhelming users
- Prioritize by intent match score

### 3. User Experience
- Make recommendations dismissible
- Provide clear value proposition
- Don't interrupt active conversations

### 4. Performance
- Load recommendations asynchronously
- Cache recommendations when possible
- Use minimal mode for better performance

## 🔗 Integration with AdMesh API

```tsx
const getRecommendations = async (userQuery, sessionId) => {
  const response = await fetch('/api/admesh/recommendations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: userQuery,
      session_id: sessionId,
      context: 'chat'
    })
  });
  
  const data = await response.json();
  return data.recommendations;
};

// Use in your chat handler
const handleMessage = async (message) => {
  const recommendations = await getRecommendations(message, sessionId);
  
  if (recommendations && recommendations.length > 0) {
    // Show conversational ad unit
    setCurrentRecommendations(recommendations);
  }
};
```

## 🎉 Complete Example

Check out the [AdMesh Storybook](https://storybook.useadmesh.com/) for complete working examples with all display modes and configurations.
