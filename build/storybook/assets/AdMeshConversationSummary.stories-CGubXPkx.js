import{A as B}from"./AdMeshConversationSummary-wBmTX9d3.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-6V_WvihQ.js";import"./AdMeshLinkTracker-BhGdnnRa.js";import"./AdMeshInlineRecommendation-iUkU6sFQ.js";const e=[{title:"HubSpot CRM",reason:"Perfect for remote teams with excellent collaboration features and robust automation capabilities",intent_match_score:.92,admesh_link:"https://useadmesh.com/track?ad_id=hubspot-123",ad_id:"hubspot-123",product_id:"hubspot-crm",has_free_tier:!0,trial_days:14,keywords:["CRM","Sales","Marketing","Automation"],categories:["Sales Tools","CRM"],features:["Contact Management","Deal Pipeline","Email Integration"],pricing:"Free tier available, paid plans from $45/month"},{title:"Salesforce Sales Cloud",reason:"Enterprise-grade CRM with advanced analytics and customization options for growing businesses",intent_match_score:.87,admesh_link:"https://useadmesh.com/track?ad_id=salesforce-456",ad_id:"salesforce-456",product_id:"salesforce-sales",has_free_tier:!1,trial_days:30,keywords:["CRM","Enterprise","Analytics","Customization"],categories:["Sales Tools","Enterprise Software"],features:["Advanced Analytics","Custom Objects","Workflow Automation"],pricing:"Starting from $25/user/month"},{title:"Pipedrive",reason:"Simple and intuitive CRM designed specifically for small to medium businesses",intent_match_score:.81,admesh_link:"https://useadmesh.com/track?ad_id=pipedrive-789",ad_id:"pipedrive-789",product_id:"pipedrive-crm",has_free_tier:!1,trial_days:14,keywords:["CRM","Simple","SMB","Pipeline"],categories:["Sales Tools","Small Business"],features:["Visual Pipeline","Activity Reminders","Email Sync"],pricing:"Starting from $14.90/user/month"},{title:"Monday.com",reason:"Versatile work management platform that can be configured as a CRM with excellent team collaboration",intent_match_score:.75,admesh_link:"https://useadmesh.com/track?ad_id=monday-101",ad_id:"monday-101",product_id:"monday-crm",has_free_tier:!0,trial_days:14,keywords:["CRM","Project Management","Collaboration","Customizable"],categories:["CRM","Project Management"],features:["Custom Workflows","Team Collaboration","Visual Boards"],pricing:"Free for up to 2 users, paid plans from $8/user/month"},{title:"Zoho CRM",reason:"Comprehensive CRM solution with AI-powered insights and extensive customization options",intent_match_score:.78,admesh_link:"https://useadmesh.com/track?ad_id=zoho-202",ad_id:"zoho-202",product_id:"zoho-crm",has_free_tier:!0,trial_days:15,keywords:["CRM","AI","Customization","Integration"],categories:["CRM","Business Software"],features:["AI Assistant","Custom Modules","Email Marketing"],pricing:"Free for up to 3 users, paid plans from $14/user/month"}],o=`We had a great discussion about finding the right CRM solution for your remote team. You mentioned that collaboration features, automation capabilities, and having a free tier to start were your main priorities. 

Based on your specific requirements for remote team management and your preference for tools with good collaboration features, I've identified several excellent options. HubSpot CRM emerged as the top recommendation due to its excellent free tier and robust collaboration tools, followed by Salesforce for its enterprise-grade features and Pipedrive for its simplicity.

Each of these solutions offers unique strengths that align with different aspects of your needs, from budget considerations to advanced functionality.`,F={title:"Conversational/AdMeshConversationSummary",component:B,parameters:{layout:"padded",docs:{description:{component:"End-of-conversation summary component that provides a comprehensive overview with top recommendations and action buttons. Perfect for session wrap-ups and conversation conclusions."}}},argTypes:{conversationSummary:{control:"text",description:"The summary text describing the conversation and findings"},showTopRecommendations:{control:{type:"number",min:1,max:10},description:"Number of top recommendations to display"},theme:{control:"object",description:"Theme configuration for styling"}}},t={args:{recommendations:e,conversationSummary:o,showTopRecommendations:3,theme:{mode:"light"}},parameters:{docs:{description:{story:"Default conversation summary with top 3 recommendations, conversation overview, and action buttons."}}}},n={args:{recommendations:e,conversationSummary:o,showTopRecommendations:5,theme:{mode:"light"}},parameters:{docs:{description:{story:"Extended summary showing 5 recommendations with ranking badges and additional insights."}}}},a={args:{recommendations:e,conversationSummary:o,showTopRecommendations:3,theme:{mode:"dark",accentColor:"#3b82f6"}},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Dark theme variant with custom accent color and appropriate contrast adjustments."}}}},r={args:{recommendations:e.slice(0,2),conversationSummary:"We discussed CRM options for your team. Here are the top matches based on your requirements for collaboration and automation features.",showTopRecommendations:2,theme:{mode:"light"}},parameters:{docs:{description:{story:"Shorter summary with fewer recommendations, suitable for brief conversations or quick consultations."}}}},s={args:{recommendations:[e[0]],conversationSummary:"Based on our conversation about your need for a CRM with excellent collaboration features and a free tier, HubSpot CRM is the perfect match for your requirements.",showTopRecommendations:1,theme:{mode:"light"}},parameters:{docs:{description:{story:"Summary with a single top recommendation, ideal for focused conversations with clear outcomes."}}}},i={args:{recommendations:e,conversationSummary:o,showTopRecommendations:3,theme:{mode:"light"}},parameters:{docs:{description:{story:"Interactive demo with click handlers for recommendations and action buttons."}}},play:async({args:d})=>{d.onRecommendationClick=($,q)=>{alert(`Opening recommendation: ${$}
Tracked link: ${q}`)},d.onStartNewConversation=()=>{alert("Starting new conversation...")}}},m={args:{recommendations:e,conversationSummary:o,showTopRecommendations:3,theme:{mode:"light",accentColor:"#10b981"}},parameters:{docs:{description:{story:"Custom accent color example showing how the component adapts to brand colors."}}}},c={args:{recommendations:e,conversationSummary:o,showTopRecommendations:2,theme:{mode:"light"}},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Mobile-optimized view showing how the component adapts to smaller screens with responsive design."}}}};var p,l,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    conversationSummary,
    showTopRecommendations: 3,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Default conversation summary with top 3 recommendations, conversation overview, and action buttons.'
      }
    }
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,g,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    conversationSummary,
    showTopRecommendations: 5,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Extended summary showing 5 recommendations with ranking badges and additional insights.'
      }
    }
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,w,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    conversationSummary,
    showTopRecommendations: 3,
    theme: {
      mode: 'dark',
      accentColor: '#3b82f6'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Dark theme variant with custom accent color and appropriate contrast adjustments.'
      }
    }
  }
}`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var b,S,R;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations.slice(0, 2),
    conversationSummary: "We discussed CRM options for your team. Here are the top matches based on your requirements for collaboration and automation features.",
    showTopRecommendations: 2,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Shorter summary with fewer recommendations, suitable for brief conversations or quick consultations.'
      }
    }
  }
}`,...(R=(S=r.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var C,_,k;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    recommendations: [sampleRecommendations[0]],
    conversationSummary: "Based on our conversation about your need for a CRM with excellent collaboration features and a free tier, HubSpot CRM is the perfect match for your requirements.",
    showTopRecommendations: 1,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Summary with a single top recommendation, ideal for focused conversations with clear outcomes.'
      }
    }
  }
}`,...(k=(_=s.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var M,T,x;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    conversationSummary,
    showTopRecommendations: 3,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo with click handlers for recommendations and action buttons.'
      }
    }
  },
  play: async ({
    args
  }) => {
    // Add click handlers for demo
    args.onRecommendationClick = (adId: string, admeshLink: string) => {
      alert(\`Opening recommendation: \${adId}\\nTracked link: \${admeshLink}\`);
    };
    args.onStartNewConversation = () => {
      alert('Starting new conversation...');
    };
  }
}`,...(x=(T=i.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var A,E,z;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    conversationSummary,
    showTopRecommendations: 3,
    theme: {
      mode: 'light',
      accentColor: '#10b981' // Green accent
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom accent color example showing how the component adapts to brand colors.'
      }
    }
  }
}`,...(z=(E=m.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var I,D,P;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    conversationSummary,
    showTopRecommendations: 2,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Mobile-optimized view showing how the component adapts to smaller screens with responsive design.'
      }
    }
  }
}`,...(P=(D=c.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const N=["Default","ExtendedSummary","DarkTheme","ShortSummary","SingleRecommendation","InteractiveDemo","CustomAccentColor","MobileOptimized"];export{m as CustomAccentColor,a as DarkTheme,t as Default,n as ExtendedSummary,i as InteractiveDemo,c as MobileOptimized,r as ShortSummary,s as SingleRecommendation,N as __namedExportsOrder,F as default};
