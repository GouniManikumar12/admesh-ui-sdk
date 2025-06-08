import React, { useState, useRef, KeyboardEvent } from 'react';
import classNames from 'classnames';
import type { AdMeshChatInputProps } from '../types/index';

export const AdMeshChatInput: React.FC<AdMeshChatInputProps> = ({
  placeholder = "Type your message...",
  disabled = false,
  suggestions = [],
  theme,
  onSendMessage,
  className
}) => {
  const [message, setMessage] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMessage(value);

    // Filter suggestions based on input
    if (value.trim() && suggestions.length > 0) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
    }

    // Auto-resize textarea
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    const trimmedMessage = message.trim();
    if (trimmedMessage && !disabled && onSendMessage) {
      onSendMessage(trimmedMessage);
      setMessage('');
      setShowSuggestions(false);
      
      // Reset textarea height
      if (inputRef.current) {
        inputRef.current.style.height = 'auto';
      }
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
    setShowSuggestions(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const containerClasses = classNames(
    'admesh-chat-input',
    'relative',
    className
  );

  const inputClasses = classNames(
    'w-full resize-none rounded-lg border border-gray-300 dark:border-slate-600',
    'bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100',
    'placeholder-gray-500 dark:placeholder-gray-400',
    'focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent',
    'transition-all duration-200 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600',
    'pr-12 pl-4 py-3 text-sm leading-5',
    {
      'opacity-50 cursor-not-allowed': disabled,
    }
  );

  const sendButtonClasses = classNames(
    'absolute right-2 bottom-2 p-2 rounded-lg transition-all duration-200',
    'flex items-center justify-center',
    {
      'bg-blue-600 hover:bg-blue-700 text-white': message.trim() && !disabled,
      'bg-gray-200 dark:bg-slate-700 text-gray-400 dark:text-gray-500 cursor-not-allowed': !message.trim() || disabled,
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
      {/* Suggestions Dropdown */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg max-h-40 overflow-y-auto z-10">
          {filteredSuggestions.slice(0, 5).map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      {/* Input Container */}
      <div className="relative">
        <textarea
          ref={inputRef}
          value={message}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
          className={inputClasses}
          style={{ minHeight: '44px', maxHeight: '120px' }}
        />

        {/* Send Button */}
        <button
          onClick={handleSend}
          disabled={!message.trim() || disabled}
          className={sendButtonClasses}
          aria-label="Send message"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>

      {/* Helper Text */}
      <div className="flex items-center justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
        <span>Press Enter to send, Shift+Enter for new line</span>
        <span className={classNames(
          'transition-opacity duration-200',
          { 'opacity-0': message.length < 100 }
        )}>
          {message.length}/500
        </span>
      </div>
    </div>
  );
};
