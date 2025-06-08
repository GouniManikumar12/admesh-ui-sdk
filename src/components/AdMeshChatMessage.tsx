import React from 'react';
import classNames from 'classnames';
import type { AdMeshChatMessageProps } from '../types/index';
import { AdMeshConversationalUnit } from './AdMeshConversationalUnit';

export const AdMeshChatMessage: React.FC<AdMeshChatMessageProps> = ({
  message,
  theme,
  onRecommendationClick,
  className
}) => {
  const isUser = message.role === 'user';
  const isAssistant = message.role === 'assistant';

  const messageClasses = classNames(
    'admesh-chat-message',
    'flex items-start gap-3',
    {
      'flex-row-reverse': isUser,
    },
    className
  );

  const bubbleClasses = classNames(
    'max-w-xs lg:max-w-sm px-4 py-3 rounded-lg text-sm',
    {
      'bg-gradient-to-r from-blue-600 to-indigo-600 text-white': isUser,
      'bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100': isAssistant,
      'bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100': message.role === 'system',
    }
  );

  const containerStyle = theme?.accentColor ? {
    '--admesh-primary': theme.accentColor,
  } as React.CSSProperties : undefined;

  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div
      className={messageClasses}
      style={containerStyle}
      data-admesh-theme={theme?.mode}
    >
      {/* Avatar */}
      {!isUser && (
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      )}

      {isUser && (
        <div className="w-8 h-8 bg-gray-300 dark:bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      )}

      {/* Message Content */}
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} flex-1`}>
        {/* Message Bubble */}
        <div className={bubbleClasses}>
          <div className="whitespace-pre-wrap break-words">
            {message.content}
          </div>
        </div>

        {/* Timestamp */}
        <div className={classNames(
          'text-xs text-gray-500 dark:text-gray-400 mt-1',
          { 'text-right': isUser }
        )}>
          {formatTime(message.timestamp)}
        </div>

        {/* Recommendations */}
        {message.recommendations && message.recommendations.length > 0 && (
          <div className="mt-3 w-full max-w-lg">
            {/* Recommendations Header */}
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {message.recommendations.length} recommendation{message.recommendations.length > 1 ? 's' : ''} found
              </span>
            </div>

            {/* Recommendations Display */}
            <AdMeshConversationalUnit
              recommendations={message.recommendations}
              config={{
                displayMode: 'inline',
                context: 'chat',
                maxRecommendations: 3,
                showPoweredBy: false,
                autoShow: true,
                delayMs: 300
              }}
              theme={theme}
              onRecommendationClick={onRecommendationClick}
              className="bg-gray-50 dark:bg-slate-800/50 rounded-lg p-3 border border-gray-200 dark:border-slate-700"
            />
          </div>
        )}
      </div>
    </div>
  );
};
