// Basic Usage Example - AdMesh UI SDK
import React from 'react';
import { AdMeshLayout } from '@admesh/ui-sdk';
import '@admesh/ui-sdk/dist/ui-sdk.css';

// Sample recommendation data
const sampleRecommendations = [
  {
    title: "Linear",
    reason: "The issue tracking tool you'll actually love. Built for modern software teams with beautiful design, powerful automation, and seamless integrations.",
    intent_match_score: 0.98,
    admesh_link: "https://useadmesh.com/track?ad_id=linear-premium&redirect=https://linear.app",
    ad_id: "linear-premium",
    product_id: "linear-issues",
    features: ["Issue Tracking", "Sprint Planning", "Git Integration", "Automation", "Analytics"],
    has_free_tier: true,
    integrations: ["GitHub", "GitLab", "Slack", "Figma"],
    pricing: "$8 - $16/user/month",
    trial_days: 14,
    keywords: ["Project Management", "Issue Tracking", "Development", "Productivity"]
  },
  {
    title: "Vercel",
    reason: "The platform for frontend developers. Deploy instantly with zero configuration, automatic scaling, and edge functions for optimal performance worldwide.",
    intent_match_score: 0.95,
    admesh_link: "https://useadmesh.com/track?ad_id=vercel-premium&redirect=https://vercel.com",
    ad_id: "vercel-premium",
    product_id: "vercel-platform",
    features: ["Instant Deployment", "Edge Functions", "Analytics", "Preview Deployments", "Team Collaboration"],
    has_free_tier: true,
    integrations: ["GitHub", "GitLab", "Bitbucket", "Next.js"],
    pricing: "Free - $20/user/month",
    trial_days: 14,
    keywords: ["Deployment", "Frontend", "Edge Computing", "Performance"]
  },
  {
    title: "Stripe",
    reason: "The complete payments platform for the internet. Accept payments, send payouts, and manage your business online with powerful APIs and beautiful interfaces.",
    intent_match_score: 0.93,
    admesh_link: "https://useadmesh.com/track?ad_id=stripe-premium&redirect=https://stripe.com",
    ad_id: "stripe-premium",
    product_id: "stripe-payments",
    features: ["Payment Processing", "Subscription Management", "Fraud Prevention", "Global Payments", "Developer APIs"],
    has_free_tier: false,
    integrations: ["Shopify", "WooCommerce", "Salesforce", "QuickBooks"],
    pricing: "2.9% + 30¢ per transaction",
    trial_days: 0,
    keywords: ["Payments", "E-commerce", "Subscriptions", "APIs"]
  }
];

// Basic usage component
function BasicUsageExample() {
  const handleProductClick = (adId, admeshLink) => {
    console.log('Product clicked:', { adId, admeshLink });
    
    // Track the click (replace with your analytics)
    if (window.gtag) {
      window.gtag('event', 'recommendation_click', {
        event_category: 'AdMesh',
        event_label: adId,
        value: 1
      });
    }
    
    // Open the tracked link
    window.open(admeshLink, '_blank');
  };

  const handleProductView = (adId, productId) => {
    console.log('Product viewed:', { adId, productId });
    
    // Track the view (replace with your analytics)
    if (window.gtag) {
      window.gtag('event', 'recommendation_view', {
        event_category: 'AdMesh',
        event_label: adId
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Recommended Tools for You
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Discover the best tools to boost your productivity and streamline your workflow.
          </p>
          
          <AdMeshLayout
            recommendations={sampleRecommendations}
            intentType="best_for_use_case"
            theme={{ mode: "light" }}
            maxDisplayed={6}
            showMatchScores={true}
            showFeatures={true}
            autoLayout={true}
            onProductClick={handleProductClick}
            onTrackView={handleProductView}
          />
        </div>
      </div>
    </div>
  );
}

export default BasicUsageExample;

// Usage in your app:
// import BasicUsageExample from './examples/basic-usage';
// 
// function App() {
//   return <BasicUsageExample />;
// }
