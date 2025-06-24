import React, { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import type { AdMeshSidebarProps, SidebarFilters } from '../types/index';
import { AdMeshSidebarHeader } from './AdMeshSidebarHeader';
import { AdMeshSidebarContent } from './AdMeshSidebarContent';

export const AdMeshSidebar: React.FC<AdMeshSidebarProps> = ({
  recommendations,
  config,
  theme,
  title = 'Recommendations',
  isOpen = true,
  onToggle,
  onRecommendationClick,
  onSearch,
  // onFilter,
  className,
  containerMode = false // New prop for demo/container integration
}) => {
  const [isCollapsed, setIsCollapsed] = useState(config.defaultCollapsed || false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters] = useState<SidebarFilters>({});

  // Handle auto-refresh if enabled
  useEffect(() => {
    if (config.autoRefresh && config.refreshInterval) {
      const interval = setInterval(() => {
        // Trigger a refresh - in a real app this would refetch recommendations
        console.log('Auto-refreshing recommendations...');
      }, config.refreshInterval);

      return () => clearInterval(interval);
    }
  }, [config.autoRefresh, config.refreshInterval]);

  // Filter recommendations based on search and filters
  const filteredRecommendations = useMemo(() => {
    let filtered = [...recommendations];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(rec => 
        rec.title.toLowerCase().includes(query) ||
        rec.reason.toLowerCase().includes(query) ||
        rec.keywords?.some(keyword => keyword.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (filters.categories && filters.categories.length > 0) {
      filtered = filtered.filter(rec => 
        rec.categories?.some(cat => filters.categories?.includes(cat))
      );
    }

    // Apply free tier filter
    if (filters.hasFreeTier) {
      filtered = filtered.filter(rec => rec.has_free_tier);
    }

    // Apply trial filter
    if (filters.hasTrial) {
      filtered = filtered.filter(rec => rec.trial_days && rec.trial_days > 0);
    }

    // Apply minimum match score filter
    if (filters.minMatchScore !== undefined) {
      filtered = filtered.filter(rec => rec.intent_match_score >= filters.minMatchScore!);
    }

    // Sort by match score (highest first)
    filtered.sort((a, b) => b.intent_match_score - a.intent_match_score);

    // Limit results
    if (config.maxRecommendations) {
      filtered = filtered.slice(0, config.maxRecommendations);
    }

    return filtered;
  }, [recommendations, searchQuery, filters, config.maxRecommendations]);

  const handleToggle = () => {
    if (config.collapsible) {
      setIsCollapsed(!isCollapsed);
      onToggle?.();
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch?.(query);
  };

  // const handleFilter = (newFilters: SidebarFilters) => {
  //   setFilters(newFilters);
  //   onFilter?.(newFilters);
  // };

  // Get sidebar width based on size with mobile responsiveness
  const getSidebarWidth = () => {
    if (isCollapsed) return 'w-12';

    switch (config.size) {
      case 'sm': return 'w-full sm:w-64 max-w-sm';
      case 'md': return 'w-full sm:w-80 max-w-md';
      case 'lg': return 'w-full sm:w-96 max-w-lg';
      case 'xl': return 'w-full sm:w-[28rem] max-w-xl';
      default: return 'w-full sm:w-80 max-w-md';
    }
  };

  const sidebarClasses = classNames(
    'admesh-sidebar',
    'flex flex-col bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-700 shadow-lg transition-all duration-300 ease-in-out',
    getSidebarWidth(),
    {
      'border-r': config.position === 'left',
      'border-l': config.position === 'right',
      // Use fixed positioning for full-screen mode, relative for container mode
      'fixed top-0 bottom-0 z-50': !containerMode,
      'relative h-full': containerMode,
      'left-0': config.position === 'left' && !containerMode,
      'right-0': config.position === 'right' && !containerMode,
      'transform -translate-x-full': config.position === 'left' && !isOpen && !containerMode,
      'transform translate-x-full': config.position === 'right' && !isOpen && !containerMode,
    },
    className
  );

  const containerStyle = theme?.accentColor ? {
    '--admesh-primary': theme.accentColor,
  } as React.CSSProperties : undefined;

  if (!isOpen && !config.collapsible) {
    return null;
  }

  return (
    <>
      {/* Overlay for mobile - show in both modes on small screens */}
      {isOpen && !isCollapsed && (
        <div
          className={classNames(
            "bg-black bg-opacity-50 z-40 sm:hidden",
            containerMode ? "absolute inset-0" : "fixed inset-0"
          )}
          onClick={() => onToggle?.()}
        />
      )}

      {/* Sidebar */}
      <div
        className={sidebarClasses}
        style={containerStyle}
        data-admesh-theme={theme?.mode}
        data-sidebar-position={config.position}
        data-sidebar-size={config.size}
      >
        {/* Header */}
        {config.showHeader !== false && (
          <AdMeshSidebarHeader
            title={title}
            theme={theme}
            collapsible={config.collapsible}
            isCollapsed={isCollapsed}
            onToggle={handleToggle}
            onSearch={config.showSearch ? handleSearch : undefined}
            showSearch={config.showSearch && !isCollapsed}
          />
        )}

        {/* Content */}
        {!isCollapsed && (
          <AdMeshSidebarContent
            recommendations={filteredRecommendations}
            displayMode={config.displayMode}
            theme={theme}
            maxRecommendations={config.maxRecommendations}
            onRecommendationClick={onRecommendationClick}
            className="flex-1 overflow-hidden"
          />
        )}

        {/* Collapsed state indicator */}
        {isCollapsed && config.collapsible && (
          <div className="flex-1 flex flex-col items-center justify-center p-2">
            <button
              onClick={handleToggle}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              title="Expand sidebar"
            >
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 transform -rotate-90 whitespace-nowrap">
              {filteredRecommendations.length}
            </div>
          </div>
        )}

        {/* Powered by AdMesh */}
        {!isCollapsed && (
          <div className="p-3 border-t border-gray-200 dark:border-slate-700">
            <div className="text-xs text-gray-400 dark:text-gray-500 text-center">
              Powered by AdMesh
            </div>
          </div>
        )}
      </div>
    </>
  );
};
