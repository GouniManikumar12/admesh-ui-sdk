import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { AdMeshSimpleAd } from '../components/AdMeshSimpleAd';
import type { AdMeshRecommendation } from '../types';

// Sample recommendations for different use cases
const sampleRecommendations: AdMeshRecommendation[] = [
  {
    title: "Stripe",
    reason: "Complete payments platform for the internet with powerful APIs and beautiful interfaces",
    intent_match_score: 0.95,
    admesh_link: "https://useadmesh.com/track?ad_id=stripe-simple&redirect=https://stripe.com",
    ad_id: "stripe-simple",
    product_id: "stripe-payments",
    keywords: ["payment solutions", "payments", "e-commerce"],
    categories: ["Payments"],
    has_free_tier: false,
    trial_days: 0
  },
  {
    title: "HubSpot CRM",
    reason: "Perfect for growing businesses with excellent free tier and automation features",
    intent_match_score: 0.92,
    admesh_link: "https://useadmesh.com/track?ad_id=hubspot-simple&redirect=https://hubspot.com",
    ad_id: "hubspot-simple",
    product_id: "hubspot-crm",
    keywords: ["CRM solutions", "customer management", "sales"],
    categories: ["CRM"],
    has_free_tier: true,
    trial_days: 14
  },
  {
    title: "Notion",
    reason: "All-in-one workspace for teams with powerful collaboration and AI features",
    intent_match_score: 0.89,
    admesh_link: "https://useadmesh.com/track?ad_id=notion-simple&redirect=https://notion.so",
    ad_id: "notion-simple",
    product_id: "notion-workspace",
    keywords: ["productivity tools", "collaboration", "workspace"],
    categories: ["Productivity"],
    has_free_tier: true,
    trial_days: 0
  },
  {
    title: "Vercel",
    reason: "The platform for frontend developers with instant deployment and edge functions",
    intent_match_score: 0.91,
    admesh_link: "https://useadmesh.com/track?ad_id=vercel-simple&redirect=https://vercel.com",
    ad_id: "vercel-simple",
    product_id: "vercel-platform",
    keywords: ["deployment platform", "hosting", "frontend"],
    categories: ["Development"],
    has_free_tier: true,
    trial_days: 14
  }
];

const meta: Meta<typeof AdMeshSimpleAd> = {
  title: 'One Line Ad/AdMeshSimpleAd',
  component: AdMeshSimpleAd,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A one-line ad unit that displays product name, simple description, and clickable link. Perfect for clean, unobtrusive recommendations that blend naturally into content.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variation: {
      control: { type: 'radio' },
      options: ['question', 'statement'],
      description: 'Style variation for the ad text'
    },
    showPoweredBy: {
      control: { type: 'boolean' },
      description: 'Show "powered by AdMesh" branding'
    },
    theme: {
      control: { type: 'object' },
      description: 'Theme configuration for light/dark mode'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Question variation (default)
export const QuestionVariation: Story = {
  args: {
    recommendation: sampleRecommendations[0], // Stripe
    variation: 'question',
    showPoweredBy: true,
    theme: { mode: 'light' }
  },
  parameters: {
    docs: {
      description: {
        story: 'Question format: "Looking for [category] for your business? Try [Product]". Perfect for introducing solutions to potential problems.',
      },
    },
  },
};

// Statement variation
export const StatementVariation: Story = {
  args: {
    recommendation: sampleRecommendations[0], // Stripe
    variation: 'statement',
    showPoweredBy: true,
    theme: { mode: 'light' }
  },
  parameters: {
    docs: {
      description: {
        story: 'Statement format: "[Product] is [benefit], visit". More direct approach highlighting the product\'s value proposition.',
      },
    },
  },
};

// Dark theme
export const DarkTheme: Story = {
  args: {
    recommendation: sampleRecommendations[1], // HubSpot
    variation: 'question',
    showPoweredBy: true,
    theme: { mode: 'dark' }
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Dark theme version with proper contrast and readability.',
      },
    },
  },
};

// Custom accent color
export const CustomAccentColor: Story = {
  args: {
    recommendation: sampleRecommendations[2], // Notion
    variation: 'question',
    showPoweredBy: true,
    theme: { mode: 'light', accentColor: '#10b981' }
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom accent color for the clickable product link to match your brand.',
      },
    },
  },
};

// Without branding
export const WithoutBranding: Story = {
  args: {
    recommendation: sampleRecommendations[3], // Vercel
    variation: 'statement',
    showPoweredBy: false,
    theme: { mode: 'light' }
  },
  parameters: {
    docs: {
      description: {
        story: 'Clean version without "powered by AdMesh" branding for seamless integration.',
      },
    },
  },
};

// Multiple variations showcase
export const VariationsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Question Variation</h4>
        <AdMeshSimpleAd
          recommendation={sampleRecommendations[0]}
          variation="question"
          showPoweredBy={true}
          onClick={(adId, link) => console.log('Clicked:', adId, link)}
        />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Statement Variation</h4>
        <AdMeshSimpleAd
          recommendation={sampleRecommendations[0]}
          variation="statement"
          showPoweredBy={true}
          onClick={(adId, link) => console.log('Clicked:', adId, link)}
        />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Different Products</h4>
        {sampleRecommendations.slice(1, 3).map((rec, index) => (
          <div key={rec.ad_id} style={{ marginBottom: '8px' }}>
            <AdMeshSimpleAd
              recommendation={rec}
              variation={index % 2 === 0 ? 'question' : 'statement'}
              showPoweredBy={false}
              onClick={(adId, link) => console.log('Clicked:', adId, link)}
            />
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of different variations and products to demonstrate flexibility.',
      },
    },
  },
};

// Interactive demo
export const InteractiveDemo: Story = {
  render: () => {
    const [clickedAds, setClickedAds] = React.useState<string[]>([]);
    
    const handleClick = (adId: string, link: string) => {
      setClickedAds(prev => [...prev, adId]);
      console.log('🎯 Simple Ad Clicked:', { adId, link, timestamp: new Date().toISOString() });
      alert(`Simple Ad Clicked!\n\nProduct: ${sampleRecommendations.find(r => r.ad_id === adId)?.title}\nLink: ${link}`);
    };

    return (
      <div style={{ maxWidth: '500px' }}>
        <div style={{ marginBottom: '16px', padding: '12px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Interactive Simple Ads</h4>
          <p style={{ margin: '0', fontSize: '12px', color: '#6b7280' }}>
            Click on any product link to see tracking in action. Check the browser console for detailed tracking data.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {sampleRecommendations.map((rec, index) => (
            <div key={rec.ad_id}>
              <AdMeshSimpleAd
                recommendation={rec}
                variation={index % 2 === 0 ? 'question' : 'statement'}
                showPoweredBy={true}
                onClick={handleClick}
                theme={{ mode: 'light', accentColor: clickedAds.includes(rec.ad_id) ? '#10b981' : '#2563eb' }}
              />
              {clickedAds.includes(rec.ad_id) && (
                <div style={{ fontSize: '11px', color: '#10b981', marginTop: '4px', textAlign: 'right' }}>
                  ✓ Clicked
                </div>
              )}
            </div>
          ))}
        </div>

        {clickedAds.length > 0 && (
          <div style={{ marginTop: '16px', padding: '8px', backgroundColor: '#ecfdf5', borderRadius: '6px', fontSize: '12px' }}>
            <strong>Tracking Summary:</strong> {clickedAds.length} ad{clickedAds.length !== 1 ? 's' : ''} clicked
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing click tracking and state management. Click on product links to see the tracking in action.',
      },
    },
  },
};
