import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as l}from"./AdMeshCitationReference-CWPhK5Z7.js";import"./iframe-DBb7zPuL.js";import"./AdMeshLinkTracker-Cu4CWCJq.js";const t={title:"HubSpot CRM",reason:"Perfect for remote teams with excellent collaboration features and robust automation capabilities",intent_match_score:.92,admesh_link:"https://useadmesh.com/track?ad_id=hubspot-123",ad_id:"hubspot-123",product_id:"hubspot-crm",has_free_tier:!0,trial_days:14,keywords:["CRM","Sales","Marketing","Automation"],categories:["Sales Tools","CRM"],features:["Contact Management","Deal Pipeline","Email Integration"],pricing:"Free tier available, paid plans from $45/month"},W={title:"Citation/AdMeshCitationReference",component:l,parameters:{layout:"padded",docs:{description:{component:"Individual citation reference component for inline use within conversational text. Can be used independently to create custom citation layouts or embedded within other text content."}}},argTypes:{citationNumber:{control:{type:"number",min:1,max:99},description:"The citation number to display"},citationStyle:{control:{type:"select"},options:["numbered","bracketed","superscript"],description:"Style of citation reference"},showTooltip:{control:"boolean",description:"Whether to show tooltip on hover"},theme:{control:"object",description:"Theme configuration for styling"}},decorators:[o=>e.jsxs("div",{style:{padding:"20px",lineHeight:"1.6"},children:[e.jsxs("p",{style:{margin:"0 0 20px 0",color:"#374151"},children:["This is an example of inline citation usage. You can embed citations directly in your text like this"," ",e.jsx(o,{})," ","to reference products naturally within conversational content."]}),e.jsx("p",{style:{margin:"0",fontSize:"14px",color:"#6b7280"},children:"Hover over the citation to see the tooltip with product details."})]})]},n={args:{recommendation:t,citationNumber:1,citationStyle:"numbered",showTooltip:!0,theme:{mode:"light"}},parameters:{docs:{description:{story:"Numbered citation style with clean numbered circles. This is the default and most modern-looking citation format. Click the citation to open the product page."}}}},i={args:{recommendation:t,citationNumber:2,citationStyle:"bracketed",showTooltip:!0,theme:{mode:"light"}},parameters:{docs:{description:{story:"Bracketed citation style [2] similar to academic papers and research documents."}}}},r={args:{recommendation:t,citationNumber:3,citationStyle:"superscript",showTooltip:!0,theme:{mode:"light"}},parameters:{docs:{description:{story:"Superscript citation style³ with minimal visual footprint, perfect for dense text."}}}},a={args:{recommendation:t,citationNumber:4,citationStyle:"numbered",showTooltip:!1,theme:{mode:"light"}},parameters:{docs:{description:{story:"Citation reference without tooltip. Useful when you want to handle hover interactions differently or show details elsewhere."}}}},s={args:{recommendation:t,citationNumber:5,citationStyle:"numbered",showTooltip:!0,theme:{mode:"dark",accentColor:"#3b82f6"}},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Dark theme variant with custom accent color. Citations adapt to dark mode with appropriate contrast."}}},decorators:[o=>e.jsxs("div",{style:{padding:"20px",lineHeight:"1.6"},children:[e.jsxs("p",{style:{margin:"0 0 20px 0",color:"#f3f4f6"},children:["This is an example of inline citation usage in dark mode. You can embed citations directly in your text like this"," ",e.jsx(o,{})," ","to reference products naturally within conversational content."]}),e.jsx("p",{style:{margin:"0",fontSize:"14px",color:"#9ca3af"},children:"Hover over the citation to see the tooltip with product details."})]})]},c={args:{recommendation:{...t,intent_match_score:.95},citationNumber:6,citationStyle:"numbered",showTooltip:!0,theme:{mode:"light"}},parameters:{docs:{description:{story:"Citation with high match score (95%). The tooltip will show the match percentage when the score is above 70%."}}}},d={args:{recommendation:t,citationNumber:7,citationStyle:"numbered",showTooltip:!0,theme:{mode:"light"}},parameters:{docs:{description:{story:"Interactive demo with click and hover handlers. Click the citation to open the product link."}}},play:async({args:o})=>{o.onClick=(p,$)=>{console.log(`Citation clicked - Ad ID: ${p}, Opening: ${$}`)},o.onHover=p=>{console.log("Citation hovered:",p.title)}}},m={render:()=>e.jsxs("div",{style:{padding:"20px",lineHeight:"1.8"},children:[e.jsxs("p",{style:{margin:"0 0 20px 0",color:"#374151"},children:["Here's a comparison of all citation styles in one paragraph. You can use numbered"," ",e.jsx(l,{recommendation:t,citationNumber:1,citationStyle:"numbered",showTooltip:!0,theme:{mode:"light"}})," ","citations, bracketed"," ",e.jsx(l,{recommendation:t,citationNumber:2,citationStyle:"bracketed",showTooltip:!0,theme:{mode:"light"}})," ","citations, or superscript"," ",e.jsx(l,{recommendation:t,citationNumber:3,citationStyle:"superscript",showTooltip:!0,theme:{mode:"light"}})," ","citations depending on your design preferences and use case."]}),e.jsx("p",{style:{margin:"0",fontSize:"14px",color:"#6b7280"},children:"Hover over any citation to see the product details in a tooltip."})]}),parameters:{docs:{description:{story:"Comparison of all three citation styles in a single paragraph. This shows how different styles can be mixed or how you can choose the one that best fits your design."}}}};var h,u,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    citationNumber: 1,
    citationStyle: 'numbered',
    showTooltip: true,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Numbered citation style with clean numbered circles. This is the default and most modern-looking citation format. Click the citation to open the product page.'
      }
    }
  }
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,b,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    citationNumber: 2,
    citationStyle: 'bracketed',
    showTooltip: true,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Bracketed citation style [2] similar to academic papers and research documents.'
      }
    }
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var w,S,k;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    citationNumber: 3,
    citationStyle: 'superscript',
    showTooltip: true,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Superscript citation style³ with minimal visual footprint, perfect for dense text.'
      }
    }
  }
}`,...(k=(S=r.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var x,v,T;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    citationNumber: 4,
    citationStyle: 'numbered',
    showTooltip: false,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Citation reference without tooltip. Useful when you want to handle hover interactions differently or show details elsewhere.'
      }
    }
  }
}`,...(T=(v=a.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var C,N,R;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    citationNumber: 5,
    citationStyle: 'numbered',
    showTooltip: true,
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
  },
  decorators: [Story => <div style={{
    padding: '20px',
    lineHeight: '1.6'
  }}>
        <p style={{
      margin: '0 0 20px 0',
      color: '#f3f4f6'
    }}>
          This is an example of inline citation usage in dark mode. You can embed citations directly in your text like this{' '}
          <Story />
          {' '}to reference products naturally within conversational content.
        </p>
        <p style={{
      margin: '0',
      fontSize: '14px',
      color: '#9ca3af'
    }}>
          Hover over the citation to see the tooltip with product details.
        </p>
      </div>]
}`,...(R=(N=s.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var j,H,M;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    recommendation: {
      ...sampleRecommendation,
      intent_match_score: 0.95
    },
    citationNumber: 6,
    citationStyle: 'numbered',
    showTooltip: true,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Citation with high match score (95%). The tooltip will show the match percentage when the score is above 70%.'
      }
    }
  }
}`,...(M=(H=c.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var _,A,I;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    citationNumber: 7,
    citationStyle: 'numbered',
    showTooltip: true,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo with click and hover handlers. Click the citation to open the product link.'
      }
    }
  },
  play: async ({
    args
  }) => {
    args.onClick = (adId: string, admeshLink: string) => {
      console.log(\`Citation clicked - Ad ID: \${adId}, Opening: \${admeshLink}\`);
      // Let the AdMeshLinkTracker handle opening the link
    };
    args.onHover = (recommendation: AdMeshRecommendation) => {
      console.log('Citation hovered:', recommendation.title);
    };
  }
}`,...(I=(A=d.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var D,z,Y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    lineHeight: '1.8'
  }}>
      <p style={{
      margin: '0 0 20px 0',
      color: '#374151'
    }}>
        Here's a comparison of all citation styles in one paragraph. You can use numbered{' '}
        <AdMeshCitationReference recommendation={sampleRecommendation} citationNumber={1} citationStyle="numbered" showTooltip={true} theme={{
        mode: 'light'
      }} />
        {' '}citations, bracketed{' '}
        <AdMeshCitationReference recommendation={sampleRecommendation} citationNumber={2} citationStyle="bracketed" showTooltip={true} theme={{
        mode: 'light'
      }} />
        {' '}citations, or superscript{' '}
        <AdMeshCitationReference recommendation={sampleRecommendation} citationNumber={3} citationStyle="superscript" showTooltip={true} theme={{
        mode: 'light'
      }} />
        {' '}citations depending on your design preferences and use case.
      </p>
      <p style={{
      margin: '0',
      fontSize: '14px',
      color: '#6b7280'
    }}>
        Hover over any citation to see the product details in a tooltip.
      </p>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all three citation styles in a single paragraph. This shows how different styles can be mixed or how you can choose the one that best fits your design.'
      }
    }
  }
}`,...(Y=(z=m.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};const P=["NumberedStyle","BracketedStyle","SuperscriptStyle","WithoutTooltip","DarkTheme","HighMatchScore","InteractiveDemo","MultipleStyles"];export{i as BracketedStyle,s as DarkTheme,c as HighMatchScore,d as InteractiveDemo,m as MultipleStyles,n as NumberedStyle,r as SuperscriptStyle,a as WithoutTooltip,P as __namedExportsOrder,W as default};
