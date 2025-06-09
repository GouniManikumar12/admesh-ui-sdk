---
sidebar_position: 4
---

# AI Assistant Integration

Technical implementation guide for building AI assistants with intelligent product recommendation capabilities using AdMesh. This example demonstrates production-ready conversational AI with contextual product suggestions.

## Implementation Overview

This implementation includes:
- **Intent detection engine** for user query analysis
- **Contextual recommendation system** based on conversation history
- **Citation-based display system** for recommendations
- **Automated suggestion triggers** during conversations
- **Analytics and tracking** for recommendation performance

## Complete AI Assistant Example

### Backend (Python + FastAPI)

```python
# ai_assistant.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import openai
from admesh import AsyncAdmesh
import re

app = FastAPI()

# Initialize clients
openai.api_key = "your-openai-api-key"
admesh_client = AsyncAdmesh()

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[ChatMessage]
    include_recommendations: bool = True

class RecommendationResponse(BaseModel):
    title: str
    reason: str
    intent_match_score: float
    admesh_link: str
    ad_id: str

class ChatResponse(BaseModel):
    message: str
    recommendations: List[RecommendationResponse] = []
    recommendation_context: Optional[str] = None

class AIAssistant:
    def __init__(self):
        self.product_keywords = [
            'software', 'tool', 'platform', 'service', 'solution',
            'app', 'system', 'product', 'crm', 'marketing', 'sales'
        ]
    
    def should_recommend_products(self, query: str, ai_response: str) -> bool:
        """Determine if we should show product recommendations"""
        combined_text = f"{query} {ai_response}".lower()
        keyword_count = sum(1 for keyword in self.product_keywords if keyword in combined_text)
        
        # Recommend if multiple product keywords or explicit request
        return keyword_count >= 2 or any(phrase in combined_text for phrase in [
            'recommend', 'suggest', 'what should i use', 'best tool', 'help me find'
        ])
    
    def extract_recommendation_query(self, query: str, ai_response: str) -> str:
        """Extract the best query for recommendations"""
        # Look for specific product mentions or use cases
        combined_text = f"{query} {ai_response}"
        
        # Extract key phrases for better recommendations
        patterns = [
            r'need (?:a |an )?([^.!?]+)',
            r'looking for (?:a |an )?([^.!?]+)',
            r'recommend (?:a |an )?([^.!?]+)',
            r'best ([^.!?]+) for',
        ]
        
        for pattern in patterns:
            match = re.search(pattern, combined_text, re.IGNORECASE)
            if match:
                return match.group(1).strip()
        
        # Fallback to original query
        return query
    
    async def get_ai_response(self, messages: List[ChatMessage]) -> str:
        """Get response from OpenAI"""
        try:
            response = await openai.ChatCompletion.acreate(
                model="gpt-4",
                messages=[{"role": msg.role, "content": msg.content} for msg in messages],
                max_tokens=500,
                temperature=0.7
            )
            return response.choices[0].message.content
        except Exception as e:
            raise HTTPException(status_code=500, f"AI service error: {str(e)}")
    
    async def get_recommendations(self, query: str) -> List[RecommendationResponse]:
        """Get product recommendations from AdMesh"""
        try:
            response = await admesh_client.recommend.get_recommendations(
                query=query,
                format="auto",
                max_recommendations=3
            )
            
            return [
                RecommendationResponse(
                    title=rec.title,
                    reason=rec.reason,
                    intent_match_score=rec.intent_match_score,
                    admesh_link=rec.admesh_link,
                    ad_id=rec.ad_id
                )
                for rec in response.response.recommendations
            ]
        except Exception as e:
            print(f"Recommendation error: {e}")
            return []

assistant = AIAssistant()

@app.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    """Main chat endpoint with AI and recommendations"""
    
    # Get AI response
    user_query = request.messages[-1].content
    ai_response = await assistant.get_ai_response(request.messages)
    
    # Check if we should include recommendations
    recommendations = []
    recommendation_context = None
    
    if request.include_recommendations and assistant.should_recommend_products(user_query, ai_response):
        # Extract query for recommendations
        rec_query = assistant.extract_recommendation_query(user_query, ai_response)
        recommendations = await assistant.get_recommendations(rec_query)
        
        if recommendations:
            recommendation_context = f"Based on your interest in {rec_query}"
    
    return ChatResponse(
        message=ai_response,
        recommendations=recommendations,
        recommendation_context=recommendation_context
    )

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

### Frontend (React + TypeScript)

```tsx
// AIAssistant.tsx
import React, { useState, useRef, useEffect } from 'react';
import { 
  AdMeshConversationalUnit, 
  AdMeshCitationUnit,
  AdMeshRecommendation 
} from 'admesh-ui-sdk';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  recommendations?: AdMeshRecommendation[];
  recommendationContext?: string;
}

interface ChatResponse {
  message: string;
  recommendations: AdMeshRecommendation[];
  recommendation_context?: string;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m your AI assistant. I can help you find the perfect tools and software for your needs. What can I help you with today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          })),
          include_recommendations: true
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data: ChatResponse = await response.json();

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
        recommendations: data.recommendations,
        recommendationContext: data.recommendation_context
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleRecommendationClick = (adId: string, admeshLink: string) => {
    // Track the click
    console.log('Recommendation clicked:', { adId, admeshLink });
    
    // Open in new tab
    window.open(admeshLink, '_blank');
  };

  return (
    <div className="ai-assistant">
      <div className="chat-header">
        <h1>🤖 AI Assistant with Smart Recommendations</h1>
        <p>Ask me about tools, software, or business solutions!</p>
      </div>

      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.role}`}>
            <div className="message-content">
              <div className="message-text">
                {message.role === 'assistant' && message.recommendations?.length ? (
                  // Use citation-based display for AI responses with recommendations
                  <AdMeshCitationUnit
                    recommendations={message.recommendations}
                    conversationText={message.content}
                    citationStyle="numbered"
                    showCitationList={true}
                    onRecommendationClick={handleRecommendationClick}
                  />
                ) : (
                  message.content
                )}
              </div>

              {/* Show conversational recommendations if available */}
              {message.recommendations?.length > 0 && (
                <div className="recommendations-section">
                  {message.recommendationContext && (
                    <p className="recommendation-context">
                      💡 {message.recommendationContext}
                    </p>
                  )}
                  
                  <AdMeshConversationalUnit
                    recommendations={message.recommendations}
                    config={{
                      displayMode: 'inline',
                      context: 'assistant',
                      maxRecommendations: 3,
                      showPoweredBy: true
                    }}
                    onRecommendationClick={handleRecommendationClick}
                  />
                </div>
              )}
            </div>

            <div className="message-timestamp">
              {message.timestamp.toLocaleTimeString()}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="message assistant">
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <div className="input-container">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about tools, software, or business solutions..."
            disabled={isLoading}
            rows={1}
          />
          <button 
            onClick={sendMessage} 
            disabled={!inputValue.trim() || isLoading}
          >
            Send
          </button>
        </div>
      </div>

      <style jsx>{`
        .ai-assistant {
          max-width: 800px;
          margin: 0 auto;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f9fafb;
        }

        .chat-header {
          padding: 1rem;
          background: white;
          border-bottom: 1px solid #e5e7eb;
          text-align: center;
        }

        .chat-header h1 {
          margin: 0 0 0.5rem 0;
          color: #1f2937;
        }

        .chat-header p {
          margin: 0;
          color: #6b7280;
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .message {
          display: flex;
          flex-direction: column;
        }

        .message.user {
          align-items: flex-end;
        }

        .message.assistant {
          align-items: flex-start;
        }

        .message-content {
          max-width: 70%;
          padding: 1rem;
          border-radius: 1rem;
          background: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .message.user .message-content {
          background: #8b5cf6;
          color: white;
        }

        .message-text {
          margin-bottom: 0.5rem;
        }

        .recommendations-section {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }

        .recommendation-context {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
          font-style: italic;
        }

        .message-timestamp {
          font-size: 0.75rem;
          color: #9ca3af;
          margin-top: 0.25rem;
        }

        .typing-indicator {
          display: flex;
          gap: 0.25rem;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #9ca3af;
          animation: typing 1.4s infinite ease-in-out;
        }

        .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
        .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes typing {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        .chat-input {
          padding: 1rem;
          background: white;
          border-top: 1px solid #e5e7eb;
        }

        .input-container {
          display: flex;
          gap: 0.5rem;
          align-items: flex-end;
        }

        .input-container textarea {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          resize: none;
          font-family: inherit;
          font-size: 1rem;
        }

        .input-container button {
          padding: 0.75rem 1.5rem;
          background: #8b5cf6;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 500;
        }

        .input-container button:disabled {
          background: #9ca3af;
          cursor: not-allowed;
        }

        .input-container button:hover:not(:disabled) {
          background: #7c3aed;
        }
      `}</style>
    </div>
  );
}
```

## Key Features Demonstrated

### 1. Intent Detection
The AI assistant automatically detects when users are asking about products or tools and triggers recommendations.

### 2. Contextual Recommendations
Recommendations are based on both the user's query and the AI's response, providing more relevant suggestions.

### 3. Citation-Based Display
Recommendations are displayed as numbered citations within the AI's response, similar to academic papers.

### 4. Conversational Integration
Recommendations appear naturally within the conversation flow without interrupting the user experience.

### 5. Tracking and Analytics
All recommendation clicks are tracked for performance analysis and revenue attribution.

## Implementation Examples

### Enterprise Consultation
```
User: "Enterprise e-commerce platform requirements for customer management"

AI: "For enterprise e-commerce customer management, implement a CRM system such as HubSpot¹ for comprehensive free tier capabilities and e-commerce integrations. Consider Shopify Plus² for enterprise-level e-commerce functionality..."

[1] HubSpot CRM - Enterprise-grade CRM with e-commerce integration capabilities
[2] Shopify Plus - Enterprise e-commerce platform with advanced CRM features
```

### Technical Implementation
```
User: "SaaS application payment processing requirements"

AI: "For SaaS payment processing implementation, Stripe¹ provides industry-standard developer tools and subscription management capabilities. For advanced billing requirements, Chargebee² offers specialized subscription billing functionality..."

[1] Stripe - Developer-focused payment processing with SaaS capabilities
[2] Chargebee - Advanced subscription billing and revenue management platform
```

## Deployment

### Docker Deployment

```dockerfile
# Dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "ai_assistant:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Environment Variables

```bash
# .env
OPENAI_API_KEY=your_openai_api_key
ADMESH_API_KEY=your_admesh_api_key
ADMESH_BASE_URL=https://api.useadmesh.com
```

## Next Steps

- **[AI Integration Overview](/ai-integration/overview)** - Complete AI integration guide
- **[Python SDK](/python-sdk/installation)** - Backend SDK implementation
- **[UI SDK](/ui-sdk/installation)** - Frontend component integration
- **[API Reference](/api/authentication)** - Complete API documentation

This implementation provides a production-ready foundation for AI assistants with intelligent product recommendations. Customize based on specific enterprise requirements and use cases.
