import React, { useCallback, useEffect, useRef } from 'react';
import type { AdMeshLinkTrackerProps } from '../types/index';
import { useAdMeshTracker } from '../hooks/useAdMeshTracker';

export const AdMeshLinkTracker: React.FC<AdMeshLinkTrackerProps> = ({
  adId,
  admeshLink,
  productId,
  children,
  onClick,
  trackingData,
  className
}) => {
  const { trackClick, trackView } = useAdMeshTracker();
  const elementRef = useRef<HTMLDivElement>(null);
  const hasTrackedView = useRef(false);

  // Track view when component becomes visible
  useEffect(() => {
    if (!elementRef.current || hasTrackedView.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTrackedView.current) {
            hasTrackedView.current = true;
            trackView({
              adId,
              admeshLink,
              productId,
              ...trackingData
            }).catch(console.error);
          }
        });
      },
      {
        threshold: 0.5, // Track when 50% of the element is visible
        rootMargin: '0px'
      }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [adId, admeshLink, productId, trackingData, trackView]);

  const handleClick = useCallback(async (event: React.MouseEvent) => {
    // Track the click
    try {
      await trackClick({
        adId,
        admeshLink,
        productId,
        ...trackingData
      });
    } catch (error) {
      console.error('Failed to track click:', error);
    }

    // Call custom onClick handler if provided
    if (onClick) {
      onClick();
    }

    // If the children contain a link, let the browser handle navigation
    // Otherwise, navigate programmatically
    const target = event.target as HTMLElement;
    const link = target.closest('a');
    
    if (!link) {
      // No link found, navigate programmatically
      window.open(admeshLink, '_blank', 'noopener,noreferrer');
    }
    // If there's a link, let the browser handle it naturally
  }, [adId, admeshLink, productId, trackingData, trackClick, onClick]);

  return (
    <div
      ref={elementRef}
      className={className}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </div>
  );
};

AdMeshLinkTracker.displayName = 'AdMeshLinkTracker';
