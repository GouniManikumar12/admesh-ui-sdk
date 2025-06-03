import type { Meta, StoryObj } from '@storybook/react';
import { AdMeshLayout, AdMeshProductCard, AdMeshBadge } from '../components';
import type { AdMeshRecommendation } from '../types/index';

// Premium sample recommendations with realistic data
const premiumRecommendations: AdMeshRecommendation[] = [
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
  },
  {
    title: "Notion",
    reason: "All-in-one workspace for teams. Combine notes, docs, wikis, and project management in one beautiful, collaborative platform with AI assistance.",
    intent_match_score: 0.91,
    admesh_link: "https://useadmesh.com/track?ad_id=notion-premium&redirect=https://notion.so",
    ad_id: "notion-premium",
    product_id: "notion-workspace",
    features: ["AI Writing Assistant", "Team Collaboration", "Database Management", "Template Library", "API Integration"],
    has_free_tier: true,
    integrations: ["Slack", "Google Drive", "Figma", "GitHub"],
    pricing: "Free - $10/user/month",
    trial_days: 0,
    keywords: ["Productivity", "Collaboration", "Database", "AI"]
  }
];

const meta: Meta<typeof AdMeshLayout> = {
  title: 'AdMesh/Showcase',
  component: AdMeshLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive showcase of AdMesh UI components with shadcn/ui inspired design.'
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// Premium shadcn/ui inspired showcase
export const PremiumShowcase: Story = {
  args: {
    recommendations: premiumRecommendations,
    autoLayout: true,
    showMatchScores: true,
    showFeatures: true
  },
  parameters: {
    backgrounds: { default: 'light' }
  }
};

// Dark theme showcase
export const DarkThemeShowcase: Story = {
  args: {
    recommendations: premiumRecommendations,
    theme: { mode: 'dark' },
    autoLayout: true,
    showMatchScores: true,
    showFeatures: true
  },
  parameters: {
    backgrounds: { default: 'dark' }
  }
};

// Cards layout with custom accent
export const CustomAccentCards: Story = {
  args: {
    recommendations: premiumRecommendations,
    theme: { mode: 'light', accentColor: '#10b981' },
    intentType: 'best_for_use_case',
    autoLayout: false,
    showMatchScores: true,
    showFeatures: true
  }
};

// Compare layout
export const ComparisonView: Story = {
  args: {
    recommendations: premiumRecommendations.slice(0, 3),
    intentType: 'compare_products',
    autoLayout: false,
    showMatchScores: true,
    showFeatures: true
  }
};

// Single premium card
export const PremiumCard: Story = {
  render: () => (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <AdMeshProductCard
        recommendation={premiumRecommendations[0]}
        showMatchScore={true}
        showBadges={true}
        maxKeywords={4}
      />
    </div>
  )
};

// Badge collection
export const BadgeShowcase: Story = {
  render: () => (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>Primary Badges</h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <AdMeshBadge type="Top Match" variant="primary" />
          <AdMeshBadge type="AI Powered" variant="primary" />
          <AdMeshBadge type="Popular" variant="primary" />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>Success Badges</h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <AdMeshBadge type="Free Tier" variant="success" />
          <AdMeshBadge type="Trial Available" variant="success" />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>Secondary Badges</h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <AdMeshBadge type="New" variant="secondary" />
          <AdMeshBadge type="Popular" variant="secondary" />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>Different Sizes</h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <AdMeshBadge type="Top Match" size="sm" />
          <AdMeshBadge type="Top Match" size="md" />
          <AdMeshBadge type="Top Match" size="lg" />
        </div>
      </div>
    </div>
  )
};

// Responsive showcase
export const ResponsiveShowcase: Story = {
  args: {
    recommendations: premiumRecommendations,
    autoLayout: true,
    showMatchScores: true,
    showFeatures: true
  },
  parameters: {
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '667px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1200px', height: '800px' } }
      },
      defaultViewport: 'mobile'
    }
  }
};
