import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import type { AdMeshSidebarHeaderProps } from '../types/index';

export const AdMeshSidebarHeader: React.FC<AdMeshSidebarHeaderProps> = ({
  title,
  theme,
  collapsible = false,
  isCollapsed = false,
  onToggle,
  onSearch,
  showSearch = false,
  className
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch?.(value);
  };

  const handleSearchClear = () => {
    setSearchQuery('');
    onSearch?.('');
  };

  const headerClasses = classNames(
    'admesh-sidebar-header',
    'flex flex-col p-4 border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800',
    className
  );

  const containerStyle = theme?.accentColor ? {
    '--admesh-primary': theme.accentColor,
  } as React.CSSProperties : undefined;

  return (
    <div
      className={headerClasses}
      style={containerStyle}
      data-admesh-theme={theme?.mode}
    >
      {/* Title and Toggle */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
          {title}
        </h3>

        <div className="flex items-center gap-2">
          {/* Mobile close button */}
          {isMobile && onToggle && (
            <button
              onClick={onToggle}
              className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors flex-shrink-0 sm:hidden"
              title="Close sidebar"
            >
              <svg
                className="w-4 h-4 text-gray-600 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* Desktop collapse button */}
          {collapsible && (
            <button
              onClick={onToggle}
              className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors flex-shrink-0 hidden sm:block"
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <svg
                className={classNames(
                  'w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-200',
                  { 'rotate-180': isCollapsed }
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && !isCollapsed && (
        <div className="relative">
          <div className={classNames(
            'relative flex items-center transition-all duration-200',
            {
              'ring-2 ring-blue-500 dark:ring-blue-400': isSearchFocused,
            }
          )}>
            {/* Search Icon */}
            <div className="absolute left-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Search Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              placeholder="Search recommendations..."
              className={classNames(
                'w-full pl-10 pr-10 py-2 text-sm bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded-lg',
                'placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100',
                'focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent',
                'transition-all duration-200'
              )}
            />

            {/* Clear Button */}
            {searchQuery && (
              <button
                onClick={handleSearchClear}
                className="absolute right-3 p-0.5 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                title="Clear search"
              >
                <svg className="w-3 h-3 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Search Results Count */}
          {searchQuery && (
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Search results will be filtered in real-time
            </div>
          )}
        </div>
      )}

      {/* Quick Stats */}
      {!isCollapsed && (
        <div className="mt-3 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Live recommendations</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>AI-powered</span>
          </div>
        </div>
      )}
    </div>
  );
};
