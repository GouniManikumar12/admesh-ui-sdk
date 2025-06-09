import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as u}from"./AdMeshInlineRecommendation-B1kKoBBP.js";import"./iframe-CaenRy-o.js";import"./AdMeshLinkTracker-7Al4Klcr.js";const a={title:"HubSpot CRM",reason:"Perfect for remote teams with excellent collaboration features and robust automation capabilities that streamline your sales process",intent_match_score:.92,admesh_link:"https://useadmesh.com/track?ad_id=hubspot-123",ad_id:"hubspot-123",product_id:"hubspot-crm",has_free_tier:!0,trial_days:14,keywords:["CRM","Sales","Marketing","Automation","Collaboration"],categories:["Sales Tools","CRM"],features:["Contact Management","Deal Pipeline","Email Integration","Team Collaboration"],pricing:"Free tier available, paid plans from $45/month"},J={...a,title:"Salesforce Sales Cloud",reason:"Enterprise-grade CRM with advanced analytics and customization options",intent_match_score:.95,ad_id:"salesforce-456",product_id:"salesforce-sales",has_free_tier:!1,trial_days:30,keywords:["CRM","Enterprise","Analytics"]},K={...a,title:"Basic CRM Tool",reason:"Simple contact management solution",intent_match_score:.65,ad_id:"basic-789",product_id:"basic-crm",has_free_tier:!0,trial_days:7,keywords:["CRM","Simple"]},oe={title:"Conversational/AdMeshInlineRecommendation",component:u,parameters:{layout:"padded",docs:{description:{component:"Compact inline recommendation component perfect for chat interfaces and conversational experiences. Displays product information in a space-efficient format with hover effects and match score indicators."}}},argTypes:{compact:{control:"boolean",description:"Whether to use compact layout for space-constrained interfaces"},showReason:{control:"boolean",description:"Whether to display the recommendation reason/description"},theme:{control:"object",description:"Theme configuration for styling"}}},t={args:{recommendation:a,compact:!1,showReason:!0,theme:{mode:"light"}},parameters:{docs:{description:{story:"Default inline recommendation with full information display including reason, keywords, and feature badges."}}}},n={args:{recommendation:a,compact:!0,showReason:!0,theme:{mode:"light"}},parameters:{docs:{description:{story:"Compact version suitable for space-constrained interfaces like mobile chat or sidebar recommendations."}}}},r={args:{recommendation:a,compact:!0,showReason:!1,theme:{mode:"light"}},parameters:{docs:{description:{story:"Ultra-compact version with just title and match score, perfect for minimal chat interfaces."}}}},s={args:{recommendation:J,compact:!1,showReason:!0,theme:{mode:"light"}},parameters:{docs:{description:{story:"High match score (95%) recommendation showing green indicator and match badge."}}}},c={args:{recommendation:K,compact:!1,showReason:!0,theme:{mode:"light"}},parameters:{docs:{description:{story:"Lower match score (65%) recommendation with blue indicator and no match badge (below 70% threshold)."}}}},i={args:{recommendation:a,compact:!1,showReason:!0,theme:{mode:"dark",accentColor:"#3b82f6"}},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Dark theme variant with custom accent color and appropriate contrast adjustments."}}}},m={args:{recommendation:a,compact:!0,showReason:!1,theme:{mode:"dark",accentColor:"#10b981"}},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Compact dark theme version with green accent color, ideal for dark chat interfaces."}}}},d={args:{recommendation:a,compact:!1,showReason:!0,theme:{mode:"light"}},parameters:{docs:{description:{story:"Interactive demo with click handler. Click the recommendation to see the tracking in action."}}},play:async({args:o})=>{o.onClick=(Q,X)=>{alert(`Clicked recommendation: ${Q}
Tracked link: ${X}`)}}},l={args:{recommendation:a,compact:!0,showReason:!0,theme:{mode:"light"}},decorators:[o=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"flex justify-end",children:e.jsx("div",{className:"bg-blue-600 text-white rounded-lg px-4 py-2 max-w-xs",children:"I need a CRM for my remote team"})}),e.jsx("div",{className:"flex justify-start",children:e.jsxs("div",{className:"bg-gray-100 rounded-lg px-4 py-2 max-w-md",children:[e.jsx("p",{className:"mb-2",children:"I'd recommend checking out these CRM solutions that work great for remote teams:"}),e.jsx(o,{})]})})]})})],parameters:{docs:{description:{story:"Example showing how the inline recommendation looks within a chat bubble context."}}}},p={render:o=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(u,{...o,recommendation:J}),e.jsx(u,{...o,recommendation:a}),e.jsx(u,{...o,recommendation:K})]}),args:{compact:!0,showReason:!1,theme:{mode:"light"}},parameters:{docs:{description:{story:"Multiple inline recommendations stacked vertically, showing different match scores and indicators."}}}},h={args:{recommendation:a,compact:!0,showReason:!0,theme:{mode:"light"}},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Mobile-optimized view showing how the component adapts to smaller screens."}}}};var g,f,w;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    compact: false,
    showReason: true,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Default inline recommendation with full information display including reason, keywords, and feature badges.'
      }
    }
  }
}`,...(w=(f=t.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var y,b,R;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    compact: true,
    showReason: true,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact version suitable for space-constrained interfaces like mobile chat or sidebar recommendations.'
      }
    }
  }
}`,...(R=(b=n.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var k,v,x;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    compact: true,
    showReason: false,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Ultra-compact version with just title and match score, perfect for minimal chat interfaces.'
      }
    }
  }
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,M,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    recommendation: highMatchRecommendation,
    compact: false,
    showReason: true,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'High match score (95%) recommendation showing green indicator and match badge.'
      }
    }
  }
}`,...(S=(M=s.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var _,j,N;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    recommendation: lowMatchRecommendation,
    compact: false,
    showReason: true,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Lower match score (65%) recommendation with blue indicator and no match badge (below 70% threshold).'
      }
    }
  }
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var I,D,A;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    compact: false,
    showReason: true,
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
}`,...(A=(D=i.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var E,T,L;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    compact: true,
    showReason: false,
    theme: {
      mode: 'dark',
      accentColor: '#10b981'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Compact dark theme version with green accent color, ideal for dark chat interfaces.'
      }
    }
  }
}`,...(L=(T=m.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var z,H,$;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    compact: false,
    showReason: true,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo with click handler. Click the recommendation to see the tracking in action.'
      }
    }
  },
  play: async ({
    args
  }) => {
    // Add click handler for demo
    args.onClick = (adId: string, admeshLink: string) => {
      alert(\`Clicked recommendation: \${adId}\\nTracked link: \${admeshLink}\`);
    };
  }
}`,...($=(H=d.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var B,O,P;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    compact: true,
    showReason: true,
    theme: {
      mode: 'light'
    }
  },
  decorators: [Story => <div className="max-w-md mx-auto">
        {/* Simulated chat messages */}
        <div className="space-y-3">
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-xs">
              I need a CRM for my remote team
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-md">
              <p className="mb-2">I'd recommend checking out these CRM solutions that work great for remote teams:</p>
              <Story />
            </div>
          </div>
        </div>
      </div>],
  parameters: {
    docs: {
      description: {
        story: 'Example showing how the inline recommendation looks within a chat bubble context.'
      }
    }
  }
}`,...(P=(O=l.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var U,V,W;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <div className="space-y-2">
      <AdMeshInlineRecommendation {...args} recommendation={highMatchRecommendation} />
      <AdMeshInlineRecommendation {...args} recommendation={sampleRecommendation} />
      <AdMeshInlineRecommendation {...args} recommendation={lowMatchRecommendation} />
    </div>,
  args: {
    compact: true,
    showReason: false,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple inline recommendations stacked vertically, showing different match scores and indicators.'
      }
    }
  }
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var F,q,G;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    compact: true,
    showReason: true,
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
        story: 'Mobile-optimized view showing how the component adapts to smaller screens.'
      }
    }
  }
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const te=["Default","Compact","CompactNoReason","HighMatchScore","LowMatchScore","DarkTheme","CompactDark","InteractiveDemo","ChatBubbleExample","MultipleRecommendations","MobileOptimized"];export{l as ChatBubbleExample,n as Compact,m as CompactDark,r as CompactNoReason,i as DarkTheme,t as Default,s as HighMatchScore,d as InteractiveDemo,c as LowMatchScore,h as MobileOptimized,p as MultipleRecommendations,te as __namedExportsOrder,oe as default};
