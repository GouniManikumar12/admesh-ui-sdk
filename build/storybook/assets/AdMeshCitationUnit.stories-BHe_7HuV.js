import{A as V}from"./AdMeshCitationUnit-DwppmyLf.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CaenRy-o.js";import"./AdMeshLinkTracker-7Al4Klcr.js";import"./AdMeshCitationReference-DNxatHzC.js";import"./AdMeshInlineRecommendation-B1kKoBBP.js";const e=[{title:"HubSpot CRM",reason:"Perfect for remote teams with excellent collaboration features and robust automation capabilities",intent_match_score:.92,admesh_link:"https://useadmesh.com/track?ad_id=hubspot-123",ad_id:"hubspot-123",product_id:"hubspot-crm",has_free_tier:!0,trial_days:14,keywords:["CRM","Sales","Marketing","Automation"],categories:["Sales Tools","CRM"],features:["Contact Management","Deal Pipeline","Email Integration"],pricing:"Free tier available, paid plans from $45/month"},{title:"Salesforce",reason:"Enterprise-grade CRM with extensive customization and integration capabilities",intent_match_score:.88,admesh_link:"https://useadmesh.com/track?ad_id=salesforce-456",ad_id:"salesforce-456",product_id:"salesforce-crm",has_free_tier:!1,trial_days:30,keywords:["CRM","Enterprise","Sales","Cloud"],categories:["Sales Tools","CRM","Enterprise"],features:["Advanced Analytics","Custom Objects","Workflow Automation"],pricing:"Starting from $25/user/month"},{title:"Pipedrive",reason:"Simple and intuitive CRM focused on sales pipeline management",intent_match_score:.85,admesh_link:"https://useadmesh.com/track?ad_id=pipedrive-789",ad_id:"pipedrive-789",product_id:"pipedrive-crm",has_free_tier:!1,trial_days:14,keywords:["CRM","Pipeline","Sales","Simple"],categories:["Sales Tools","CRM"],features:["Visual Pipeline","Activity Reminders","Email Sync"],pricing:"Starting from $14.90/user/month"}],t=`
Based on your requirements for a CRM system for your remote team, I'd recommend considering several excellent options. 

HubSpot CRM offers a comprehensive free tier that's perfect for getting started, with excellent collaboration features that work well for remote teams. The platform includes robust automation capabilities and integrates seamlessly with other business tools.

For larger enterprises, Salesforce provides the most comprehensive feature set with extensive customization options. While it has a steeper learning curve, it's the industry standard for enterprise CRM solutions.

If you prefer simplicity, Pipedrive focuses specifically on sales pipeline management with an intuitive interface that's easy for teams to adopt quickly.

All of these CRM solutions offer strong integration capabilities and can scale with your business needs.
`,K={title:"Citation/AdMeshCitationUnit",component:V,parameters:{layout:"padded",docs:{description:{component:"Citation-based conversation ad component that displays recommendations as numbered references within conversational text, similar to academic papers or AI assistant responses. Perfect for AI applications, chatbots, and content that needs to reference products naturally within flowing text."}}},argTypes:{conversationText:{control:"text",description:"The conversational text where citations will be inserted"},citationStyle:{control:{type:"select"},options:["numbered","bracketed","superscript"],description:"Style of citation references"},showCitationList:{control:"boolean",description:"Whether to show the reference list at the bottom"},theme:{control:"object",description:"Theme configuration for styling"}}},o={args:{recommendations:e,conversationText:t,citationStyle:"numbered",showCitationList:!0,theme:{mode:"light"}},parameters:{docs:{description:{story:'Numbered citation style with clean numbered circles. Product names like "HubSpot CRM" are clickable links, and citation numbers provide additional reference points. Click on either the product names or citation numbers to open product pages.'}}}},r={args:{recommendations:e,conversationText:t,citationStyle:"bracketed",showCitationList:!0,theme:{mode:"light"}},parameters:{docs:{description:{story:"Bracketed citation style [1] similar to academic papers and research documents."}}}},a={args:{recommendations:e,conversationText:t,citationStyle:"superscript",showCitationList:!0,theme:{mode:"light"}},parameters:{docs:{description:{story:"Superscript citation style¹ with minimal visual footprint, perfect for dense text."}}}},i={args:{recommendations:e,conversationText:t,citationStyle:"numbered",showCitationList:!1,theme:{mode:"light"}},parameters:{docs:{description:{story:"Citations without the reference list at the bottom. Users can still hover over citations to see details in tooltips."}}}},s={args:{recommendations:e,conversationText:t,citationStyle:"numbered",showCitationList:!0,theme:{mode:"dark",accentColor:"#3b82f6"}},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Dark theme variant with custom accent color. Citations adapt to dark mode with appropriate contrast."}}}},n={args:{recommendations:e.slice(0,2),conversationText:"For your CRM needs, I recommend HubSpot CRM for its excellent features and Salesforce for enterprise requirements.",citationStyle:"numbered",showCitationList:!0,theme:{mode:"light"}},parameters:{docs:{description:{story:"Citation unit with shorter text content. The component automatically finds product mentions and inserts appropriate citations."}}}},c={args:{recommendations:e,conversationText:t,citationStyle:"numbered",showCitationList:!0,theme:{mode:"light"}},parameters:{docs:{description:{story:'Demonstrates clickable product names within the conversational text. Product names like "HubSpot CRM", "Salesforce", and "Pipedrive" are styled as blue hyperlinks and are fully clickable, while citation numbers provide additional reference points.'}}}},d={args:{recommendations:e,conversationText:t,citationStyle:"numbered",showCitationList:!0,theme:{mode:"light"}},parameters:{docs:{description:{story:"Interactive demo with click and hover handlers. Both product names and citation numbers are clickable. Hover over citations to see tooltips, click to open product links."}}},play:async({args:p})=>{p.onRecommendationClick=(l,E)=>{console.log(`Product clicked - Ad ID: ${l}, Opening: ${E}`)},p.onCitationHover=l=>{console.log("Product hovered:",l.title)}}},W=`Sarah was a brilliant engineer who decided to start her own SaaS company. As her customer base grew from 10 to 1,000 users, she realized she needed better tools to manage customer relationships¹ and track her sales pipeline².

She also struggled with project management³ as her team expanded from 2 to 15 people. The spreadsheets and email chains that worked in the early days were no longer sufficient for coordinating complex projects and maintaining clear communication across the growing team.

After researching various solutions and talking to other founders, Sarah found the perfect combination of tools that helped her scale efficiently while maintaining the personal touch that made her customers love the product.`,m={args:{recommendations:[{title:"HubSpot CRM",reason:"Perfect for growing businesses with excellent free tier and automation features",intent_match_score:.94,admesh_link:"https://useadmesh.com/track?ad_id=hubspot-crm&story=startup-journey",ad_id:"hubspot-crm",product_id:"hubspot",has_free_tier:!0,trial_days:14,keywords:["CRM","Sales","Free"],categories:["Sales Tools"],features:["Contact Management","Deal Pipeline","Email Integration"],pricing:"Free tier available"},{title:"Pipedrive",reason:"Visual sales pipeline management that's perfect for tracking deals and opportunities",intent_match_score:.89,admesh_link:"https://useadmesh.com/track?ad_id=pipedrive&story=startup-journey",ad_id:"pipedrive",product_id:"pipedrive",has_free_tier:!1,trial_days:14,keywords:["CRM","Sales Pipeline","Visual"],categories:["Sales Tools"],features:["Visual Pipeline","Deal Tracking","Sales Reporting"],pricing:"Starting at $14.90/user/month"},{title:"Notion",reason:"All-in-one workspace perfect for project management and team collaboration",intent_match_score:.91,admesh_link:"https://useadmesh.com/track?ad_id=notion&story=startup-journey",ad_id:"notion",product_id:"notion",has_free_tier:!0,trial_days:0,keywords:["Productivity","Project Management","Collaboration"],categories:["Productivity Tools"],features:["Database","Wiki","Project Management","AI Assistant"],pricing:"Free for personal use"}],conversationText:W,citationStyle:"numbered",showCitationList:!0,theme:{mode:"light"}},parameters:{docs:{description:{story:'📚 **Storybook Ad Format**: A business growth story showing how AdMesh recommendations appear as academic-style citations within narratives. This demonstrates the revolutionary "storybook advertising" approach that enhances content rather than interrupting it.'}}}};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    conversationText: conversationText,
    citationStyle: 'numbered',
    showCitationList: true,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Numbered citation style with clean numbered circles. Product names like "HubSpot CRM" are clickable links, and citation numbers provide additional reference points. Click on either the product names or citation numbers to open product pages.'
      }
    }
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,y,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    conversationText: conversationText,
    citationStyle: 'bracketed',
    showCitationList: true,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Bracketed citation style [1] similar to academic papers and research documents.'
      }
    }
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var k,v,w;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    conversationText: conversationText,
    citationStyle: 'superscript',
    showCitationList: true,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Superscript citation style¹ with minimal visual footprint, perfect for dense text.'
      }
    }
  }
}`,...(w=(v=a.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,_,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    conversationText: conversationText,
    citationStyle: 'numbered',
    showCitationList: false,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Citations without the reference list at the bottom. Users can still hover over citations to see details in tooltips.'
      }
    }
  }
}`,...(C=(_=i.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var x,T,R;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    conversationText: conversationText,
    citationStyle: 'numbered',
    showCitationList: true,
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
        story: 'Dark theme variant with custom accent color. Citations adapt to dark mode with appropriate contrast.'
      }
    }
  }
}`,...(R=(T=s.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var M,P,A;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations.slice(0, 2),
    conversationText: "For your CRM needs, I recommend HubSpot CRM for its excellent features and Salesforce for enterprise requirements.",
    citationStyle: 'numbered',
    showCitationList: true,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Citation unit with shorter text content. The component automatically finds product mentions and inserts appropriate citations.'
      }
    }
  }
}`,...(A=(P=n.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var L,I,D;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    conversationText: conversationText,
    citationStyle: 'numbered',
    showCitationList: true,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates clickable product names within the conversational text. Product names like "HubSpot CRM", "Salesforce", and "Pipedrive" are styled as blue hyperlinks and are fully clickable, while citation numbers provide additional reference points.'
      }
    }
  }
}`,...(D=(I=c.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var j,H,F;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    conversationText: conversationText,
    citationStyle: 'numbered',
    showCitationList: true,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo with click and hover handlers. Both product names and citation numbers are clickable. Hover over citations to see tooltips, click to open product links.'
      }
    }
  },
  play: async ({
    args
  }) => {
    args.onRecommendationClick = (adId: string, admeshLink: string) => {
      console.log(\`Product clicked - Ad ID: \${adId}, Opening: \${admeshLink}\`);
      // Let the AdMeshLinkTracker handle opening the link
    };
    args.onCitationHover = (recommendation: AdMeshRecommendation) => {
      console.log('Product hovered:', recommendation.title);
    };
  }
}`,...(F=(H=d.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var N,B,$;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    recommendations: [{
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
    }, {
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
    }, {
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
    }],
    conversationText: startupStoryText,
    citationStyle: 'numbered',
    showCitationList: true,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: '📚 **Storybook Ad Format**: A business growth story showing how AdMesh recommendations appear as academic-style citations within narratives. This demonstrates the revolutionary "storybook advertising" approach that enhances content rather than interrupting it.'
      }
    }
  }
}`,...($=(B=m.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const Q=["NumberedCitations","BracketedCitations","SuperscriptCitations","WithoutReferenceList","DarkTheme","ShortText","ClickableProductNames","InteractiveDemo","StorybookBusinessNarrative"];export{r as BracketedCitations,c as ClickableProductNames,s as DarkTheme,d as InteractiveDemo,o as NumberedCitations,n as ShortText,m as StorybookBusinessNarrative,a as SuperscriptCitations,i as WithoutReferenceList,Q as __namedExportsOrder,K as default};
