import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import type { AdMeshChatInterfaceProps } from '../types/index';
import { AdMeshChatMessage } from './AdMeshChatMessage';
import { AdMeshChatInput } from './AdMeshChatInput';

export const AdMeshChatInterface: React.FC<AdMeshChatInterfaceProps> = ({
  messages,
  config,
  theme,
  isLoading = false,
  onSendMessage,
  onRecommendationClick,
  className
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const containerClasses = classNames(
    'admesh-chat-interface',
    'flex flex-col h-full bg-white dark:bg-slate-900',
    className
  );

  const containerStyle = theme?.accentColor ? {
    '--admesh-primary': theme.accentColor,
  } as React.CSSProperties : undefined;

  // Limit messages if maxMessages is set
  const displayMessages = config.maxMessages 
    ? messages.slice(-config.maxMessages)
    : messages;

  return (
    <div
      className={containerClasses}
      style={containerStyle}
      data-admesh-theme={theme?.mode}
    >
      {/* Messages Area */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600"
      >
        {displayMessages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Welcome to AdMesh AI
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Ask me anything about products, tools, or services. I'll provide personalized recommendations just for you!
            </p>
          </div>
        ) : (
          <>
            {displayMessages.map((message) => (
              <AdMeshChatMessage
                key={message.id}
                message={message}
                theme={theme}
                onRecommendationClick={onRecommendationClick}
              />
            ))}

            {/* Typing Indicator */}
            {isLoading && config.enableTypingIndicator !== false && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="bg-gray-100 dark:bg-slate-800 rounded-lg px-4 py-3 max-w-xs">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Quick Suggestions */}
      {config.enableSuggestions && config.suggestions && config.suggestions.length > 0 && messages.length === 0 && (
        <div className="px-4 pb-2">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick suggestions:</div>
          <div className="flex flex-wrap gap-2">
            {config.suggestions.slice(0, 3).map((suggestion, index) => (
              <button
                key={index}
                onClick={() => onSendMessage?.(suggestion)}
                className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      {config.showInputField !== false && onSendMessage && (
        <div className="border-t border-gray-200 dark:border-slate-700 p-4">
          <AdMeshChatInput
            placeholder={config.placeholder || "Ask me about products, tools, or services..."}
            disabled={isLoading}
            suggestions={config.suggestions}
            theme={theme}
            onSendMessage={onSendMessage}
          />
        </div>
      )}
    </div>
  );
};
