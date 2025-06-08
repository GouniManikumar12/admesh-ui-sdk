import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import type { AdMeshFloatingChatProps, ChatMessage } from '../types/index';
import { AdMeshChatInterface } from './AdMeshChatInterface';

export const AdMeshFloatingChat: React.FC<AdMeshFloatingChatProps> = ({
  config,
  theme,
  title = 'AI Assistant',
  subtitle = 'Get personalized recommendations',
  isOpen: controlledIsOpen,
  onToggle,
  onSendMessage,
  onRecommendationClick,
  autoRecommendations,
  autoRecommendationTrigger,
  showInputField = true,
  autoShowRecommendations = false,
  onAutoRecommendationDismiss,
  className
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(config.autoOpen || false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  // Initialize with welcome message
  useEffect(() => {
    if (config.showWelcomeMessage && config.welcomeMessage && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        role: 'assistant',
        content: config.welcomeMessage,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [config.showWelcomeMessage, config.welcomeMessage, messages.length]);

  // Handle auto-recommendations
  useEffect(() => {
    if (autoRecommendations && autoRecommendations.length > 0 && autoShowRecommendations) {
      const autoMessage: ChatMessage = {
        id: `auto-${Date.now()}`,
        role: 'assistant',
        content: autoRecommendationTrigger
          ? `Based on "${autoRecommendationTrigger}", here are some relevant recommendations:`
          : 'I found some relevant recommendations for you:',
        timestamp: new Date(),
        recommendations: autoRecommendations,
      };

      // Auto-open the chat and show recommendations
      if (controlledIsOpen === undefined) {
        setInternalIsOpen(true);
      }

      // Add the auto-recommendation message
      setMessages(prev => {
        // Avoid duplicating auto-recommendations
        const hasAutoMessage = prev.some(msg => msg.id.startsWith('auto-'));
        if (hasAutoMessage) {
          return prev.map(msg =>
            msg.id.startsWith('auto-') ? autoMessage : msg
          );
        }
        return [...prev, autoMessage];
      });
    }
  }, [autoRecommendations, autoShowRecommendations, autoRecommendationTrigger, controlledIsOpen]);

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
    setHasInteracted(true);
  };

  const handleSendMessage = async (messageContent: string) => {
    if (!onSendMessage) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: messageContent,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Get AI response
      const assistantMessage = await onSendMessage(messageContent);
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Get chat dimensions based on size
  const getChatDimensions = () => {
    switch (config.size) {
      case 'sm': return 'w-80 h-96';
      case 'md': return 'w-96 h-[32rem]';
      case 'lg': return 'w-[28rem] h-[36rem]';
      case 'xl': return 'w-[32rem] h-[40rem]';
      default: return 'w-96 h-[32rem]';
    }
  };

  // Get position classes
  const getPositionClasses = () => {
    switch (config.position) {
      case 'bottom-right': return 'bottom-4 right-4';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'top-right': return 'top-4 right-4';
      case 'top-left': return 'top-4 left-4';
      default: return 'bottom-4 right-4';
    }
  };

  const containerClasses = classNames(
    'admesh-floating-chat',
    'fixed z-50 transition-all duration-300 ease-in-out',
    getPositionClasses(),
    className
  );

  const chatClasses = classNames(
    'bg-white dark:bg-slate-900 rounded-lg shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden',
    getChatDimensions(),
    {
      'opacity-0 scale-95 pointer-events-none': !isOpen,
      'opacity-100 scale-100': isOpen,
    }
  );

  const containerStyle = theme?.accentColor ? {
    '--admesh-primary': theme.accentColor,
  } as React.CSSProperties : undefined;

  return (
    <div
      className={containerClasses}
      style={containerStyle}
      data-admesh-theme={theme?.mode}
    >
      {/* Chat Interface */}
      <div className={chatClasses}>
        {isOpen && (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{title}</h3>
                  <p className="text-xs text-blue-100">{subtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Dismiss auto-recommendations button */}
                {autoRecommendations && autoRecommendations.length > 0 && onAutoRecommendationDismiss && (
                  <button
                    onClick={() => {
                      onAutoRecommendationDismiss();
                      setMessages(prev => prev.filter(msg => !msg.id.startsWith('auto-')));
                    }}
                    className="p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
                    aria-label="Dismiss recommendations"
                    title="Dismiss recommendations"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  </button>
                )}

                <button
                  onClick={handleToggle}
                  className="p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
                  aria-label="Close chat"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Chat Interface */}
            <AdMeshChatInterface
              messages={messages}
              config={{
                ...config,
                showInputField: showInputField
              }}
              theme={theme}
              isLoading={isLoading}
              onSendMessage={showInputField ? handleSendMessage : undefined}
              onRecommendationClick={onRecommendationClick}
              className="h-full"
            />
          </>
        )}
      </div>

      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={handleToggle}
          className={classNames(
            'w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
            'text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200',
            'flex items-center justify-center relative'
          )}
          aria-label="Open chat"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          
          {/* Notification dot for new users */}
          {!hasInteracted && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          )}
        </button>
      )}

      {/* Powered by AdMesh */}
      {isOpen && (
        <div className="absolute bottom-2 right-2 text-xs text-gray-400 dark:text-gray-500 bg-white dark:bg-slate-900 px-2 py-1 rounded shadow-sm">
          Powered by AdMesh
        </div>
      )}
    </div>
  );
};
