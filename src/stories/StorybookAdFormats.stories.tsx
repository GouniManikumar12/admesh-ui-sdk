import type { Meta, StoryObj } from '@storybook/react-vite-vite';
import React, { useState } from 'react';
import { AdMeshCitationUnit } from '../components';
import type { AdMeshRecommendation } from '../types';

// Sample recommendations for storybook examples
const businessStoryRecommendations: AdMeshRecommendation[] = [
  {
    title: "HubSpot CRM",
    reason: "Perfect for growing businesses with excellent free tier and automation features",
    intent_match_score: 0.94,
    admesh_link: "https://useadmesh.com/track?ad_id=hubspot-crm&story=startup-journey",
    ad_id: "hubspot-crm",
    product_id: "hubspot",
    has_free_tier: true,
    trial_days: 14,
    keywords: ["CRM", "Sales", "Free"],
    categories: ["Sales Tools"],
    features: ["Contact Management", "Deal Pipeline", "Email Integration"],
    pricing: "Free tier available"
  },
  {
    title: "Pipedrive",
    reason: "Visual sales pipeline management that's perfect for tracking deals and opportunities",
    intent_match_score: 0.89,
    admesh_link: "https://useadmesh.com/track?ad_id=pipedrive&story=startup-journey",
    ad_id: "pipedrive",
    product_id: "pipedrive",
    has_free_tier: false,
    trial_days: 14,
    keywords: ["CRM", "Sales Pipeline", "Visual"],
    categories: ["Sales Tools"],
    features: ["Visual Pipeline", "Deal Tracking", "Sales Reporting"],
    pricing: "Starting at $14.90/user/month"
  },
  {
    title: "Notion",
    reason: "All-in-one workspace perfect for project management and team collaboration",
    intent_match_score: 0.91,
    admesh_link: "https://useadmesh.com/track?ad_id=notion&story=startup-journey",
    ad_id: "notion",
    product_id: "notion",
    has_free_tier: true,
    trial_days: 0,
    keywords: ["Productivity", "Project Management", "Collaboration"],
    categories: ["Productivity Tools"],
    features: ["Database", "Wiki", "Project Management", "AI Assistant"],
    pricing: "Free for personal use"
  },
  {
    title: "Intercom",
    reason: "Customer support and messaging platform that scales with your business",
    intent_match_score: 0.87,
    admesh_link: "https://useadmesh.com/track?ad_id=intercom&story=startup-journey",
    ad_id: "intercom",
    product_id: "intercom",
    has_free_tier: false,
    trial_days: 14,
    keywords: ["Customer Support", "Live Chat", "Messaging"],
    categories: ["Customer Support"],
    features: ["Live Chat", "Help Desk", "Customer Messaging", "Automation"],
    pricing: "Starting at $39/month"
  }
];

// Story content with citation placeholders
const startupJourneyStory = `Sarah was a brilliant engineer who decided to start her own SaaS company. As her customer base grew from 10 to 1,000 users, she realized she needed better tools to manage customer relationships¹ and track her sales pipeline².

She also struggled with project management³ as her team expanded from 2 to 15 people, and needed a reliable way to handle the increasing volume of customer support tickets⁴. The spreadsheets and email chains that worked in the early days were no longer sufficient.

After researching various solutions and talking to other founders, Sarah found the perfect combination of tools that helped her scale efficiently while maintaining the personal touch that made her customers love the product.`;

const developerStory = `Alex was a senior developer who joined a fast-growing startup. The team was using a mix of different tools that didn't integrate well together, causing friction in their development process.

They needed a better code repository hosting solution, a more efficient continuous integration pipeline, and a way to track bugs and feature requests that didn't get lost in Slack messages.

Alex also wanted to implement better monitoring and error tracking for their production applications, and needed a reliable way to manage their cloud infrastructure as the team grew.`;

// Interactive Storybook Component
const StorybookAdDemo: React.FC<{
  story: string;
  recommendations: AdMeshRecommendation[];
  title: string;
  category: string;
}> = ({ story, recommendations, title, category }) => {
  const [clickedRecommendations, setClickedRecommendations] = useState<string[]>([]);

  const handleRecommendationClick = (adId: string, admeshLink: string) => {
    setClickedRecommendations(prev => [...prev, adId]);
    
    // Show tracking info in Storybook
    console.log('📚 Storybook Ad Clicked:', {
      adId,
      admeshLink,
      storyTitle: title,
      category,
      timestamp: new Date().toISOString()
    });
    
    // In a real app, this would open the link
    alert(`📚 Storybook Ad Clicked!\n\nProduct: ${recommendations.find(r => r.ad_id === adId)?.title}\nStory: ${title}\nCategory: ${category}\n\nLink: ${admeshLink}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Story Header */}
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
            {category}
          </span>
          <span className="text-sm text-gray-500">
            📚 Storybook Ad Format
          </span>
        </div>
      </div>

      {/* Story Content with Citations */}
      <div className="prose prose-lg max-w-none mb-6">
        <AdMeshCitationUnit
          recommendations={recommendations}
          conversationText={story}
          citationStyle="numbered"
          showCitationList={true}
          onRecommendationClick={handleRecommendationClick}
          theme={{ mode: 'light' }}
        />
      </div>

      {/* Story Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span>📚 Contextual recommendations powered by</span>
          <strong className="text-purple-600">AdMesh</strong>
        </div>
        <div className="flex items-center gap-4">
          <span>{recommendations.length} relevant tools found</span>
          {clickedRecommendations.length > 0 && (
            <span className="text-green-600">
              {clickedRecommendations.length} clicked
            </span>
          )}
        </div>
      </div>

      {/* Demo Info */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">🎭 Storybook Ad Format Demo</h4>
        <p className="text-blue-800 text-sm">
          This demonstrates AdMesh's revolutionary storybook advertising format. Notice how recommendations appear as 
          academic-style citations within the narrative, enhancing the story rather than interrupting it. 
          Click on any numbered citation to see the tracking in action!
        </p>
      </div>
    </div>
  );
};

// Comparison Component
const AdFormatComparison: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          📊 Ad Format Comparison
        </h2>
        <p className="text-lg text-gray-600">
          See how AdMesh's storybook format compares to traditional advertising
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Traditional Intrusive Ads */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-red-600 mb-4">
            ❌ Traditional Push Ads (Intrusive)
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-800 mb-4">
              Sarah was a brilliant engineer who decided to start her own SaaS company...
            </p>
            
            {/* Intrusive Ad */}
            <div className="bg-red-100 border-2 border-red-300 p-4 rounded-lg mb-4 animate-pulse">
              <div className="text-center">
                <h4 className="text-red-800 font-bold text-lg">🚨 URGENT! CRM SOFTWARE SALE! 🚨</h4>
                <p className="text-red-700">⚡ 50% OFF TODAY ONLY! ⚡</p>
                <button className="bg-red-600 text-white px-4 py-2 rounded font-bold mt-2">
                  👆 CLICK NOW OR MISS OUT! 👆
                </button>
              </div>
            </div>
            
            <p className="text-gray-800">
              ...but she quickly realized managing customers was harder than expected...
            </p>
          </div>
          
          <div className="bg-red-50 p-3 rounded text-sm">
            <strong className="text-red-800">Problems:</strong>
            <ul className="text-red-700 mt-1 space-y-1">
              <li>• Interrupts reading flow</li>
              <li>• Often irrelevant to content</li>
              <li>• Creates user frustration</li>
              <li>• Low engagement rates</li>
            </ul>
          </div>
        </div>

        {/* AdMesh Storybook Format */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            ✅ AdMesh Storybook Format (Contextual)
          </h3>
          <div className="bg-green-50 p-4 rounded-lg">
            <AdMeshCitationUnit
              recommendations={businessStoryRecommendations.slice(0, 2)}
              conversationText="Sarah was a brilliant engineer who decided to start her own SaaS company. As her customer base grew, she realized she needed better tools to manage customer relationships¹ and track her sales pipeline²."
              citationStyle="numbered"
              showCitationList={true}
              onRecommendationClick={(adId, admeshLink) => {
                console.log('Citation clicked:', adId, 'Link:', admeshLink);
              }}
              theme={{ mode: 'light' }}
            />
          </div>
          
          <div className="bg-green-50 p-3 rounded text-sm">
            <strong className="text-green-800">Benefits:</strong>
            <ul className="text-green-700 mt-1 space-y-1">
              <li>• Enhances story content</li>
              <li>• Contextually relevant</li>
              <li>• Academic-style citations</li>
              <li>• High engagement rates</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">📈 Performance Comparison</h4>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-red-600">0.05%</div>
            <div className="text-sm text-gray-600">Traditional CTR</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">8-12%</div>
            <div className="text-sm text-gray-600">AdMesh Engagement</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">300%</div>
            <div className="text-sm text-gray-600">ROI Improvement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof StorybookAdDemo> = {
  title: 'AdMesh/Storybook Ad Formats',
  component: StorybookAdDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Showcase of AdMesh\'s revolutionary storybook-style advertising format that integrates recommendations naturally into narratives, similar to academic citations or footnotes.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Business Story Example
export const StartupJourneyStory: Story = {
  args: {
    story: startupJourneyStory,
    recommendations: businessStoryRecommendations,
    title: "The Startup Founder's Journey",
    category: "Business Growth"
  },
  parameters: {
    docs: {
      description: {
        story: 'A business growth story showing how recommendations appear as academic-style citations within the narrative. Click on the numbered citations to see the tracking in action.',
      },
    },
  },
};

// Developer Story Example
export const DeveloperWorkflowStory: Story = {
  args: {
    story: developerStory,
    recommendations: [
      {
        title: "GitHub",
        reason: "Industry-standard code repository hosting with excellent collaboration features",
        intent_match_score: 0.95,
        admesh_link: "https://useadmesh.com/track?ad_id=github&story=developer-workflow",
        ad_id: "github",
        product_id: "github",
        has_free_tier: true,
        trial_days: 0,
        keywords: ["Git", "Code Repository", "Collaboration"],
        categories: ["Development Tools"],
        features: ["Version Control", "Pull Requests", "Actions", "Issues"],
        pricing: "Free for public repositories"
      },
      {
        title: "Sentry",
        reason: "Real-time error tracking and performance monitoring for production applications",
        intent_match_score: 0.88,
        admesh_link: "https://useadmesh.com/track?ad_id=sentry&story=developer-workflow",
        ad_id: "sentry",
        product_id: "sentry",
        has_free_tier: true,
        trial_days: 14,
        keywords: ["Error Tracking", "Monitoring", "Performance"],
        categories: ["Development Tools"],
        features: ["Error Tracking", "Performance Monitoring", "Release Health"],
        pricing: "Free tier available"
      }
    ],
    title: "Building the Perfect Development Workflow",
    category: "Software Development"
  },
  parameters: {
    docs: {
      description: {
        story: 'A developer-focused story demonstrating how technical tool recommendations can be naturally integrated into professional narratives.',
      },
    },
  },
};

// Format Comparison
export const AdFormatComparisonDemo: Story = {
  render: () => <AdFormatComparison />,
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison showing the difference between traditional intrusive advertising and AdMesh\'s contextual storybook format.',
      },
    },
  },
};

// Interactive Demo
export const InteractiveStorybookDemo: Story = {
  render: () => {
    const [selectedStory, setSelectedStory] = useState<'startup' | 'developer'>('startup');
    
    const stories = {
      startup: {
        story: startupJourneyStory,
        recommendations: businessStoryRecommendations,
        title: "The Startup Founder's Journey",
        category: "Business Growth"
      },
      developer: {
        story: developerStory,
        recommendations: [
          businessStoryRecommendations[0], // Reuse for demo
          businessStoryRecommendations[1]
        ],
        title: "Building the Perfect Development Workflow",
        category: "Software Development"
      }
    };
    
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🎭 Interactive Storybook Ad Demo
          </h2>
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setSelectedStory('startup')}
              className={`px-4 py-2 rounded-lg font-medium ${
                selectedStory === 'startup'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📈 Startup Story
            </button>
            <button
              onClick={() => setSelectedStory('developer')}
              className={`px-4 py-2 rounded-lg font-medium ${
                selectedStory === 'developer'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              💻 Developer Story
            </button>
          </div>
        </div>
        
        <StorybookAdDemo {...stories[selectedStory]} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo allowing you to switch between different story types and see how AdMesh recommendations adapt to different contexts and audiences.',
      },
    },
  },
};
