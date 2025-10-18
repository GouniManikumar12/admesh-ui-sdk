# AdMesh UI SDK - MRC Viewability Tracking

Complete guide to implementing Media Rating Council (MRC) compliant viewability tracking in the AdMesh UI SDK.

---

## Overview

The AdMesh UI SDK includes comprehensive viewability tracking that follows **MRC (Media Rating Council) standards** to measure ad engagement and user behavior. This provides brands with detailed insights into how users interact with recommendations.

### What is MRC Viewability?

According to MRC standards, an ad impression is considered "viewable" when:
- **Standard Display Ads**: 50% of pixels visible for at least 1 continuous second
- **Large Display Ads** (>242,500 pixels): 30% of pixels visible for at least 1 continuous second

---

## Features

### ✅ MRC Compliance
- Automatic detection of ad size (standard vs. large)
- Precise visibility percentage calculation using Intersection Observer API
- Continuous time tracking for viewability threshold
- Configurable standards for custom requirements

### 📊 Analytics Collected

#### Time Metrics
- Time to first viewable impression
- Total viewable duration (cumulative)
- Time spent engaging (hover, focus)
- Session duration

#### Engagement Metrics
- Scroll depth when ad becomes visible
- Viewport enter/exit count
- Click-through events
- Hover events and duration

#### Context Metrics
- Page URL and title
- Device type (mobile, tablet, desktop)
- Viewport dimensions
- Ad position on page
- Dark mode detection
- Browser language and timezone

### 🔒 Privacy & GDPR Compliance
- No PII (Personally Identifiable Information) collection
- URL sanitization (removes query parameters)
- Configurable tracking enable/disable
- Transparent data collection

---

## Quick Start

### 1. Basic Usage

Wrap any ad component with `AdMeshViewabilityTracker`:

```tsx
import { AdMeshViewabilityTracker, AdMeshProductCard } from 'admesh-ui-sdk';

function MyAdComponent() {
  return (
    <AdMeshViewabilityTracker
      adId="ad_123"
      productId="prod_456"
      offerId="offer_789"
    >
      <AdMeshProductCard
        recommendations={recommendations}
        onProductClick={(adId, link) => window.open(link, '_blank')}
      />
    </AdMeshViewabilityTracker>
  );
}
```

### 2. With Callbacks

Track viewability events with custom callbacks:

```tsx
<AdMeshViewabilityTracker
  adId="ad_123"
  productId="prod_456"
  onVisible={() => console.log('Ad is visible')}
  onViewable={() => console.log('Ad met MRC viewability threshold!')}
  onViewabilityChange={(isViewable) => {
    console.log('Viewability changed:', isViewable);
  }}
>
  <YourAdComponent />
</AdMeshViewabilityTracker>
```

### 3. Global Configuration

Configure viewability tracking globally for all components:

```tsx
import { setViewabilityTrackerConfig } from 'admesh-ui-sdk';

setViewabilityTrackerConfig({
  enabled: true,
  apiEndpoint: 'https://api.useadmesh.com/analytics/ui-sdk/viewability',
  enableBatching: true,
  batchSize: 10,
  batchTimeout: 5000, // 5 seconds
  debug: true, // Enable for development
  enableRetry: true,
  maxRetries: 3,
  retryDelay: 1000
});
```

---

## Configuration Options

### ViewabilityTrackerConfig

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enabled` | `boolean` | `true` | Enable/disable viewability tracking |
| `apiEndpoint` | `string` | `https://api.useadmesh.com/analytics/ui-sdk/viewability` | API endpoint for analytics |
| `enableBatching` | `boolean` | `true` | Batch events to minimize network requests |
| `batchSize` | `number` | `10` | Maximum events per batch |
| `batchTimeout` | `number` | `5000` | Max time (ms) before sending batch |
| `mrcStandards` | `Partial<MRCViewabilityStandards>` | Auto-detected | Custom MRC standards |
| `debug` | `boolean` | `false` | Enable debug logging |
| `onEvent` | `function` | `undefined` | Custom callback for each event |
| `onBatchSent` | `function` | `undefined` | Custom callback when batch is sent |
| `enableRetry` | `boolean` | `true` | Retry failed requests |
| `maxRetries` | `number` | `3` | Maximum retry attempts |
| `retryDelay` | `number` | `1000` | Retry delay (ms) |

### Custom MRC Standards

Override default MRC standards:

```tsx
setViewabilityTrackerConfig({
  mrcStandards: {
    visibilityThreshold: 0.7, // 70% instead of 50%
    minimumDuration: 2000, // 2 seconds instead of 1
    isLargeAd: false
  }
});
```

---

## Event Types

The tracker emits the following events:

| Event Type | Description | When Triggered |
|------------|-------------|----------------|
| `ad_loaded` | Ad component mounted | Component initialization |
| `ad_visible` | Ad became visible | First time ad enters viewport |
| `ad_viewable` | Ad met MRC threshold | 50% visible for 1 second |
| `ad_hidden` | Ad left viewport | Ad exits viewport |
| `ad_hover_start` | User started hovering | Mouse enters ad |
| `ad_hover_end` | User stopped hovering | Mouse leaves ad |
| `ad_focus` | Ad received focus | Ad element focused |
| `ad_blur` | Ad lost focus | Ad element blurred |
| `ad_click` | Ad was clicked | User clicks ad |
| `ad_unloaded` | Ad component unmounted | Component cleanup |

---

## Advanced Usage

### Using the Hook Directly

For custom implementations, use the `useViewabilityTracker` hook:

```tsx
import { useRef } from 'react';
import { useViewabilityTracker } from 'admesh-ui-sdk';

function CustomAdComponent({ adId, productId }) {
  const elementRef = useRef<HTMLDivElement>(null);
  
  const viewabilityState = useViewabilityTracker({
    adId,
    productId,
    elementRef,
    config: {
      debug: true
    }
  });

  return (
    <div ref={elementRef}>
      <p>Viewable: {viewabilityState.isViewable ? 'Yes' : 'No'}</p>
      <p>Visibility: {viewabilityState.visibilityPercentage.toFixed(2)}%</p>
      <p>Total Visible: {viewabilityState.timeMetrics.totalVisibleDuration}ms</p>
      
      {/* Your ad content */}
    </div>
  );
}
```

### Custom Analytics Integration

Send events to your own analytics service:

```tsx
setViewabilityTrackerConfig({
  onEvent: (event) => {
    // Send to Google Analytics
    gtag('event', event.eventType, {
      ad_id: event.adId,
      is_viewable: event.isViewable,
      visibility_percentage: event.engagementMetrics.maxVisibilityPercentage
    });
    
    // Send to Mixpanel
    mixpanel.track(event.eventType, {
      ad_id: event.adId,
      time_to_viewable: event.timeMetrics.timeToViewable,
      device_type: event.contextMetrics.deviceType
    });
  },
  
  onBatchSent: (batch) => {
    console.log(`Sent ${batch.eventCount} events to AdMesh`);
  }
});
```

### Disable Tracking for Specific Ads

```tsx
<AdMeshViewabilityTracker
  adId="ad_123"
  config={{ enabled: false }}
>
  <YourAdComponent />
</AdMeshViewabilityTracker>
```

---

## Data Structure

### ViewabilityAnalyticsEvent

Complete event structure sent to the API:

```typescript
{
  eventType: 'ad_viewable',
  timestamp: '2024-01-15T10:30:00.000Z',
  sessionId: 'session_1234567890_abc123',
  adId: 'ad_123',
  productId: 'prod_456',
  offerId: 'offer_789',
  agentId: 'agent_abc',
  
  timeMetrics: {
    loadedAt: '2024-01-15T10:29:55.000Z',
    timeToFirstVisible: 1200,
    timeToViewable: 2500,
    totalVisibleDuration: 5000,
    totalViewableDuration: 3000,
    totalHoverDuration: 1500,
    totalFocusDuration: 0,
    sessionDuration: 15000
  },
  
  engagementMetrics: {
    scrollDepthAtFirstVisible: 45.5,
    currentScrollDepth: 60.2,
    viewportEnterCount: 2,
    viewportExitCount: 1,
    hoverCount: 3,
    wasClicked: true,
    maxVisibilityPercentage: 95.5,
    averageVisibilityPercentage: 75.3
  },
  
  contextMetrics: {
    pageUrl: 'https://example.com/search',
    pageTitle: 'Search Results',
    referrer: 'https://google.com',
    deviceType: 'desktop',
    viewportWidth: 1920,
    viewportHeight: 1080,
    adWidth: 300,
    adHeight: 250,
    adPositionTop: 500,
    adPositionLeft: 100,
    isDarkMode: false,
    language: 'en-US',
    timezone: 'America/New_York'
  },
  
  mrcStandards: {
    visibilityThreshold: 0.5,
    minimumDuration: 1000,
    isLargeAd: false
  },
  
  isViewable: true,
  metadata: {}
}
```

---

## Backend Integration

### API Endpoint

Events are sent to: `POST /analytics/ui-sdk/viewability`

### Firestore Storage

Analytics data is stored in Firestore:

```
analytics/
  ui_sdk/
    {session_id}/
      summary/
        - session metadata
        - event counts
        - first/last event timestamps
      events/
        events/
          {event_id}/
            - complete event data
```

### Offer-Level Analytics

Viewability metrics are aggregated at the offer level:

```
offers/
  {offer_id}/
    analytics/
      viewability/
        - total_impressions
        - total_viewable_impressions
        - total_clicks
        - viewability_rate
```

---

## Dashboard Analytics

Brands can view viewability metrics in their dashboard:

- **Viewability Rate**: % of impressions that met MRC threshold
- **Average Time to Viewable**: How long until ads become viewable
- **Average Viewable Duration**: How long ads remain viewable
- **Device Type Distribution**: Mobile vs. tablet vs. desktop
- **Engagement Metrics**: Hover rate, click rate, scroll depth

---

## Performance Considerations

### Optimizations

1. **Batching**: Events are batched to minimize network requests (default: 10 events or 5 seconds)
2. **Throttling**: Visibility calculations are throttled to 100ms intervals
3. **Intersection Observer**: Efficient viewport detection with minimal performance impact
4. **Lazy Evaluation**: Metrics calculated only when needed

### Best Practices

- Enable batching for production (`enableBatching: true`)
- Use appropriate batch size (10-20 events)
- Set reasonable batch timeout (5-10 seconds)
- Enable retry for reliability
- Disable debug logging in production

---

## Troubleshooting

### Events Not Being Sent

1. Check if tracking is enabled: `config.enabled = true`
2. Verify API endpoint is correct
3. Check browser console for errors
4. Enable debug mode: `config.debug = true`

### Viewability Not Triggering

1. Ensure ad is at least 50% visible
2. Check if ad remains visible for 1 full second
3. Verify element ref is attached correctly
4. Check MRC standards configuration

### High Network Usage

1. Increase batch size: `batchSize: 20`
2. Increase batch timeout: `batchTimeout: 10000`
3. Reduce event frequency (if using custom implementation)

---

## Examples

See complete examples in:
- `/admesh-ui-sdk/examples/viewability-tracking/`
- Storybook: https://storybook.useadmesh.com/

---

## Support

For questions or issues:
- Email: mani@useadmesh.com
- Documentation: https://docs.useadmesh.com
- GitHub: https://github.com/admesh/ui-sdk

