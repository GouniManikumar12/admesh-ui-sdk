/**
 * AdMesh UI SDK - Viewability Tracking Example
 * 
 * This example demonstrates how to implement MRC viewability tracking
 * for AdMesh recommendations in your application.
 */

import React, { useState, useEffect } from 'react';
import {
  AdMeshViewabilityTracker,
  AdMeshProductCard,
  setViewabilityTrackerConfig,
  type AdMeshRecommendation,
  type ViewabilityTrackerState
} from 'admesh-ui-sdk';

// Configure viewability tracking globally
setViewabilityTrackerConfig({
  enabled: true,
  enableBatching: true,
  batchSize: 10,
  batchTimeout: 5000,
  debug: process.env.NODE_ENV === 'development',
  
  // Custom event callback for additional analytics
  onEvent: (event) => {
    console.log('Viewability Event:', event.eventType, event);
    
    // Send to Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', event.eventType, {
        event_category: 'ad_viewability',
        event_label: event.adId,
        value: event.isViewable ? 1 : 0,
        custom_parameters: {
          visibility_percentage: event.engagementMetrics.maxVisibilityPercentage,
          time_to_viewable: event.timeMetrics.timeToViewable,
          device_type: event.contextMetrics.deviceType
        }
      });
    }
  },
  
  // Callback when batch is sent
  onBatchSent: (batch) => {
    console.log(`✅ Sent ${batch.eventCount} viewability events to AdMesh`);
  }
});

// Example 1: Basic Viewability Tracking
export function BasicViewabilityExample() {
  const [recommendations, setRecommendations] = useState<AdMeshRecommendation[]>([]);

  useEffect(() => {
    // Fetch recommendations from AdMesh API
    fetch('https://api.useadmesh.com/agent/recommend', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: 'best CRM for startups',
        format: 'auto'
      })
    })
      .then(res => res.json())
      .then(data => setRecommendations(data.recommendations || []))
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h2>Product Recommendations</h2>
      
      {recommendations.map((rec) => (
        <AdMeshViewabilityTracker
          key={rec.ad_id}
          adId={rec.ad_id}
          productId={rec.product_id}
          offerId={rec.meta?.offer_id}
        >
          <AdMeshProductCard
            recommendation={rec}
            onProductClick={(adId, link) => {
              window.open(link, '_blank');
            }}
          />
        </AdMeshViewabilityTracker>
      ))}
    </div>
  );
}

// Example 2: With Viewability Callbacks
export function ViewabilityCallbacksExample() {
  const [viewabilityStats, setViewabilityStats] = useState({
    totalAds: 0,
    viewableAds: 0,
    clickedAds: 0
  });

  const handleViewable = (adId: string) => {
    console.log(`Ad ${adId} is now viewable!`);
    setViewabilityStats(prev => ({
      ...prev,
      viewableAds: prev.viewableAds + 1
    }));
  };

  const handleClick = (adId: string) => {
    console.log(`Ad ${adId} was clicked!`);
    setViewabilityStats(prev => ({
      ...prev,
      clickedAds: prev.clickedAds + 1
    }));
  };

  return (
    <div className="container">
      <div className="stats-panel">
        <h3>Viewability Stats</h3>
        <p>Total Ads: {viewabilityStats.totalAds}</p>
        <p>Viewable Ads: {viewabilityStats.viewableAds}</p>
        <p>Clicked Ads: {viewabilityStats.clickedAds}</p>
        <p>
          Viewability Rate: 
          {viewabilityStats.totalAds > 0 
            ? ((viewabilityStats.viewableAds / viewabilityStats.totalAds) * 100).toFixed(1)
            : 0}%
        </p>
      </div>

      <AdMeshViewabilityTracker
        adId="ad_123"
        productId="prod_456"
        onVisible={() => {
          console.log('Ad became visible');
          setViewabilityStats(prev => ({
            ...prev,
            totalAds: prev.totalAds + 1
          }));
        }}
        onViewable={() => handleViewable('ad_123')}
        onClick={() => handleClick('ad_123')}
      >
        <div className="ad-container">
          <h3>Your Ad Content Here</h3>
          <p>This ad is being tracked for viewability</p>
        </div>
      </AdMeshViewabilityTracker>
    </div>
  );
}

// Example 3: Using the Hook Directly
export function DirectHookExample() {
  const elementRef = React.useRef<HTMLDivElement>(null);
  
  const viewabilityState = useViewabilityTracker({
    adId: 'ad_789',
    productId: 'prod_101',
    elementRef,
    config: {
      debug: true,
      mrcStandards: {
        visibilityThreshold: 0.7, // 70% instead of default 50%
        minimumDuration: 2000, // 2 seconds instead of 1
        isLargeAd: false
      }
    }
  });

  return (
    <div className="container">
      <div className="viewability-dashboard">
        <h3>Real-time Viewability Metrics</h3>
        
        <div className="metric">
          <label>Status:</label>
          <span className={viewabilityState.isViewable ? 'viewable' : 'not-viewable'}>
            {viewabilityState.isViewable ? '✅ Viewable' : '⏳ Not Viewable'}
          </span>
        </div>

        <div className="metric">
          <label>Visibility:</label>
          <span>{viewabilityState.visibilityPercentage.toFixed(2)}%</span>
        </div>

        <div className="metric">
          <label>Total Visible Duration:</label>
          <span>{(viewabilityState.timeMetrics.totalVisibleDuration / 1000).toFixed(2)}s</span>
        </div>

        <div className="metric">
          <label>Total Viewable Duration:</label>
          <span>{(viewabilityState.timeMetrics.totalViewableDuration / 1000).toFixed(2)}s</span>
        </div>

        <div className="metric">
          <label>Hover Duration:</label>
          <span>{(viewabilityState.timeMetrics.totalHoverDuration / 1000).toFixed(2)}s</span>
        </div>

        <div className="metric">
          <label>Viewport Entries:</label>
          <span>{viewabilityState.engagementMetrics.viewportEnterCount}</span>
        </div>

        <div className="metric">
          <label>Hover Count:</label>
          <span>{viewabilityState.engagementMetrics.hoverCount}</span>
        </div>

        <div className="metric">
          <label>Was Clicked:</label>
          <span>{viewabilityState.engagementMetrics.wasClicked ? 'Yes' : 'No'}</span>
        </div>
      </div>

      <div ref={elementRef} className="ad-container">
        <h3>Tracked Ad Content</h3>
        <p>Scroll this ad in and out of view to see metrics update</p>
        <button onClick={() => console.log('Ad clicked!')}>
          Click Me
        </button>
      </div>
    </div>
  );
}

// Example 4: Custom Analytics Integration
export function CustomAnalyticsExample() {
  // Send viewability data to multiple analytics platforms
  setViewabilityTrackerConfig({
    onEvent: (event) => {
      // Google Analytics 4
      if (typeof gtag !== 'undefined') {
        gtag('event', event.eventType, {
          ad_id: event.adId,
          is_viewable: event.isViewable,
          visibility_percentage: event.engagementMetrics.maxVisibilityPercentage,
          device_type: event.contextMetrics.deviceType
        });
      }

      // Mixpanel
      if (typeof mixpanel !== 'undefined') {
        mixpanel.track(event.eventType, {
          ad_id: event.adId,
          product_id: event.productId,
          is_viewable: event.isViewable,
          time_to_viewable: event.timeMetrics.timeToViewable,
          total_viewable_duration: event.timeMetrics.totalViewableDuration,
          device_type: event.contextMetrics.deviceType,
          viewport_width: event.contextMetrics.viewportWidth
        });
      }

      // Amplitude
      if (typeof amplitude !== 'undefined') {
        amplitude.track(event.eventType, {
          ad_id: event.adId,
          is_viewable: event.isViewable,
          engagement_metrics: event.engagementMetrics,
          context_metrics: event.contextMetrics
        });
      }

      // Custom backend
      fetch('/api/analytics/viewability', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      }).catch(console.error);
    }
  });

  return (
    <div className="container">
      <p>Viewability events are being sent to multiple analytics platforms</p>
    </div>
  );
}

// Example 5: Conditional Tracking
export function ConditionalTrackingExample() {
  const [trackingEnabled, setTrackingEnabled] = useState(true);

  return (
    <div className="container">
      <div className="controls">
        <label>
          <input
            type="checkbox"
            checked={trackingEnabled}
            onChange={(e) => setTrackingEnabled(e.target.checked)}
          />
          Enable Viewability Tracking
        </label>
      </div>

      <AdMeshViewabilityTracker
        adId="ad_conditional"
        config={{ enabled: trackingEnabled }}
      >
        <div className="ad-container">
          <h3>Conditionally Tracked Ad</h3>
          <p>
            Tracking is currently: 
            <strong>{trackingEnabled ? 'Enabled' : 'Disabled'}</strong>
          </p>
        </div>
      </AdMeshViewabilityTracker>
    </div>
  );
}

// CSS Styles (add to your stylesheet)
const styles = `
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.stats-panel {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.viewability-dashboard {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.metric {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.metric label {
  font-weight: 600;
}

.viewable {
  color: #22c55e;
  font-weight: 600;
}

.not-viewable {
  color: #ef4444;
  font-weight: 600;
}

.ad-container {
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  background: white;
}

.controls {
  margin-bottom: 20px;
  padding: 15px;
  background: #f9fafb;
  border-radius: 8px;
}
`;

export default BasicViewabilityExample;

