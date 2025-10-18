/**
 * AdMesh Viewability Tracker Component
 * Wraps any ad component with MRC viewability tracking
 */

import React, { useRef, useEffect } from 'react';
import { useViewabilityTracker } from '../hooks/useViewabilityTracker';
import type { ViewabilityTrackerConfig } from '../types/analytics';

export interface AdMeshViewabilityTrackerProps {
  /** Ad ID */
  adId: string;
  /** Product ID */
  productId?: string;
  /** Offer ID */
  offerId?: string;
  /** Agent ID */
  agentId?: string;
  /** Children to wrap with viewability tracking */
  children: React.ReactNode;
  /** Custom viewability tracker configuration */
  config?: Partial<ViewabilityTrackerConfig>;
  /** CSS class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Callback when viewability state changes */
  onViewabilityChange?: (isViewable: boolean) => void;
  /** Callback when ad becomes visible */
  onVisible?: () => void;
  /** Callback when ad becomes viewable (meets MRC threshold) */
  onViewable?: () => void;
  /** Callback when ad is clicked */
  onClick?: () => void;
}

/**
 * AdMeshViewabilityTracker Component
 * 
 * Wraps ad components with comprehensive MRC viewability tracking.
 * Automatically tracks:
 * - Viewability (50% visible for 1 second)
 * - Time metrics (time to viewable, total visible duration, etc.)
 * - Engagement metrics (hover, focus, clicks, scroll depth)
 * - Context metrics (device type, viewport size, ad position)
 * 
 * @example
 * ```tsx
 * <AdMeshViewabilityTracker
 *   adId="ad_123"
 *   productId="prod_456"
 *   offerId="offer_789"
 *   onViewable={() => console.log('Ad is viewable!')}
 * >
 *   <YourAdComponent />
 * </AdMeshViewabilityTracker>
 * ```
 */
export const AdMeshViewabilityTracker: React.FC<AdMeshViewabilityTrackerProps> = ({
  adId,
  productId,
  offerId,
  agentId,
  children,
  config,
  className,
  style,
  onViewabilityChange,
  onVisible,
  onViewable,
  onClick
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  // Use viewability tracker hook
  const viewabilityState = useViewabilityTracker({
    adId,
    productId,
    offerId,
    agentId,
    elementRef,
    config
  });

  // Track viewability changes
  const previousViewable = useRef(viewabilityState.isViewable);
  
  useEffect(() => {
    if (viewabilityState.isViewable !== previousViewable.current) {
      previousViewable.current = viewabilityState.isViewable;
      
      if (onViewabilityChange) {
        onViewabilityChange(viewabilityState.isViewable);
      }
      
      if (viewabilityState.isViewable && onViewable) {
        onViewable();
      }
    }
  }, [viewabilityState.isViewable, onViewabilityChange, onViewable]);

  // Track visibility changes
  const previousVisible = useRef(viewabilityState.isVisible);
  
  useEffect(() => {
    if (viewabilityState.isVisible !== previousVisible.current) {
      previousVisible.current = viewabilityState.isVisible;
      
      if (viewabilityState.isVisible && onVisible) {
        onVisible();
      }
    }
  }, [viewabilityState.isVisible, onVisible]);

  // Handle click
  const handleClick = (event: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
    
    // Allow event to propagate to children
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={style}
      onClick={handleClick}
      data-admesh-viewability-tracker
      data-ad-id={adId}
      data-is-viewable={viewabilityState.isViewable}
      data-is-visible={viewabilityState.isVisible}
      data-visibility-percentage={viewabilityState.visibilityPercentage.toFixed(2)}
    >
      {children}
    </div>
  );
};

AdMeshViewabilityTracker.displayName = 'AdMeshViewabilityTracker';

