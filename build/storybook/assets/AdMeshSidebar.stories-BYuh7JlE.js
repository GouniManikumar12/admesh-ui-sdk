import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as N}from"./iframe-CaenRy-o.js";import{A as T}from"./AdMeshSidebar-DZ377aUK.js";import"./AdMeshLinkTracker-7Al4Klcr.js";import"./AdMeshInlineRecommendation-B1kKoBBP.js";import"./AdMeshProductCard-DUNDRGIQ.js";const t=[{title:"HubSpot CRM",reason:"Perfect for remote teams with excellent collaboration features and robust automation capabilities",intent_match_score:.92,admesh_link:"https://useadmesh.com/track?ad_id=hubspot-123",ad_id:"hubspot-123",product_id:"hubspot-crm",has_free_tier:!0,trial_days:14,keywords:["CRM","Sales","Marketing","Automation"],categories:["Sales Tools","CRM"],features:["Contact Management","Deal Pipeline","Email Integration"],pricing:"Free tier available, paid plans from $45/month"},{title:"Salesforce Sales Cloud",reason:"Enterprise-grade CRM with advanced analytics and customization options for growing businesses",intent_match_score:.87,admesh_link:"https://useadmesh.com/track?ad_id=salesforce-456",ad_id:"salesforce-456",product_id:"salesforce-sales",has_free_tier:!1,trial_days:30,keywords:["CRM","Enterprise","Analytics","Customization"],categories:["Sales Tools","Enterprise Software"],features:["Advanced Analytics","Custom Objects","Workflow Automation"],pricing:"Starting from $25/user/month"},{title:"Pipedrive",reason:"Simple and intuitive CRM designed specifically for small to medium businesses",intent_match_score:.81,admesh_link:"https://useadmesh.com/track?ad_id=pipedrive-789",ad_id:"pipedrive-789",product_id:"pipedrive-crm",has_free_tier:!1,trial_days:14,keywords:["CRM","Simple","SMB","Pipeline"],categories:["Sales Tools","Small Business"],features:["Visual Pipeline","Activity Reminders","Email Sync"],pricing:"Starting from $14.90/user/month"},{title:"Monday.com",reason:"Versatile work management platform that can be configured as a CRM with excellent team collaboration",intent_match_score:.75,admesh_link:"https://useadmesh.com/track?ad_id=monday-101",ad_id:"monday-101",product_id:"monday-crm",has_free_tier:!0,trial_days:14,keywords:["CRM","Project Management","Collaboration","Customizable"],categories:["CRM","Project Management"],features:["Custom Workflows","Team Collaboration","Visual Boards"],pricing:"Free for up to 2 users, paid plans from $8/user/month"},{title:"Zoho CRM",reason:"Comprehensive CRM solution with AI-powered insights and extensive customization options",intent_match_score:.78,admesh_link:"https://useadmesh.com/track?ad_id=zoho-202",ad_id:"zoho-202",product_id:"zoho-crm",has_free_tier:!0,trial_days:15,keywords:["CRM","AI","Customization","Integration"],categories:["CRM","Business Software"],features:["AI Assistant","Custom Modules","Email Marketing"],pricing:"Free for up to 3 users, paid plans from $14/user/month"},{title:"Airtable",reason:"Flexible database platform that works great as a CRM for creative teams and small businesses",intent_match_score:.72,admesh_link:"https://useadmesh.com/track?ad_id=airtable-303",ad_id:"airtable-303",product_id:"airtable-crm",has_free_tier:!0,trial_days:0,keywords:["Database","CRM","Flexible","Creative"],categories:["Database","CRM"],features:["Custom Views","Automation","Integrations"],pricing:"Free tier available, paid plans from $10/user/month"}],s=({args:a})=>{const[o,p]=N.useState(!0);return e.jsxs("div",{className:"relative h-screen bg-gray-100 dark:bg-slate-900",children:[e.jsx("div",{className:`transition-all duration-300 ${o?"ml-80":"ml-0"}`,children:e.jsx("div",{className:"p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4",children:"AdMesh Sidebar Demo"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-8",children:"This demonstrates how the AdMesh sidebar integrates with your application content. The sidebar shows AI-powered product recommendations in a persistent side panel."}),e.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4",children:"Your Application Content"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"The sidebar appears alongside your main content, providing contextual recommendations without interrupting the user's workflow."}),e.jsxs("button",{onClick:()=>p(!o),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:[o?"Hide":"Show"," Sidebar"]})]})]})})}),e.jsx(T,{...a,isOpen:o,onToggle:()=>p(!o),onRecommendationClick:(F,I)=>{alert(`Clicked: ${F}
Link: ${I}`)}})]})},W={title:"Sidebar/AdMeshSidebar",component:T,parameters:{layout:"fullscreen",docs:{description:{component:"Persistent sidebar component for displaying AI-powered product recommendations alongside your main application content. Features search, filtering, multiple display modes, and responsive design."}}},argTypes:{config:{control:"object",description:"Configuration object for sidebar behavior and appearance"},theme:{control:"object",description:"Theme configuration for styling"},title:{control:"text",description:"Sidebar title text"},isOpen:{control:"boolean",description:"Whether the sidebar is open"}}},r={render:a=>e.jsx(s,{args:a}),args:{recommendations:t,config:{position:"left",size:"md",displayMode:"recommendations",collapsible:!0,defaultCollapsed:!1,showHeader:!0,showSearch:!0,showFilters:!0,maxRecommendations:10},theme:{mode:"light"},title:"Recommendations"},parameters:{docs:{description:{story:"Default sidebar configuration with search, collapsible header, and recommendation display mode."}}}},n={render:a=>e.jsx(s,{args:a}),args:{recommendations:t,config:{position:"right",size:"md",displayMode:"recommendations",collapsible:!0,defaultCollapsed:!1,showHeader:!0,showSearch:!0,maxRecommendations:8},theme:{mode:"light"},title:"AI Recommendations"},parameters:{docs:{description:{story:"Right-positioned sidebar for applications that prefer recommendations on the right side."}}}},i={render:a=>e.jsx(s,{args:a}),args:{recommendations:t,config:{position:"left",size:"sm",displayMode:"recommendations",collapsible:!0,defaultCollapsed:!1,showHeader:!0,showSearch:!1,maxRecommendations:5},theme:{mode:"light"},title:"Picks"},parameters:{docs:{description:{story:"Compact sidebar with smaller width, no search, and fewer recommendations for minimal interfaces."}}}},d={render:a=>e.jsx(s,{args:a}),args:{recommendations:t,config:{position:"left",size:"lg",displayMode:"mixed",collapsible:!0,defaultCollapsed:!1,showHeader:!0,showSearch:!0,maxRecommendations:6},theme:{mode:"light"},title:"Smart Recommendations"},parameters:{docs:{description:{story:"Mixed display mode showing the top recommendation as a card and others as inline items."}}}},m={render:a=>e.jsx(s,{args:a}),args:{recommendations:t,config:{position:"left",size:"md",displayMode:"recommendations",collapsible:!0,defaultCollapsed:!1,showHeader:!0,showSearch:!0,maxRecommendations:8},theme:{mode:"dark",accentColor:"#3b82f6"},title:"Recommendations"},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Dark theme variant with custom accent color for dark mode applications."}}}},l={render:a=>e.jsx(s,{args:a}),args:{recommendations:t,config:{position:"left",size:"md",displayMode:"recommendations",collapsible:!0,defaultCollapsed:!0,showHeader:!0,showSearch:!0,maxRecommendations:10},theme:{mode:"light"},title:"Recommendations"},parameters:{docs:{description:{story:"Sidebar that starts in collapsed state, showing only a thin strip with expand button."}}}},c={render:a=>e.jsx(s,{args:a}),args:{recommendations:t,config:{position:"left",size:"xl",displayMode:"mixed",collapsible:!0,defaultCollapsed:!1,showHeader:!0,showSearch:!0,showFilters:!0,maxRecommendations:12},theme:{mode:"light"},title:"AdMesh Recommendations"},parameters:{docs:{description:{story:"Extra large sidebar with maximum width, perfect for detailed recommendation displays."}}}};var h,u,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <SidebarDemo args={args} />,
  args: {
    recommendations: sampleRecommendations,
    config: {
      position: 'left',
      size: 'md',
      displayMode: 'recommendations',
      collapsible: true,
      defaultCollapsed: false,
      showHeader: true,
      showSearch: true,
      showFilters: true,
      maxRecommendations: 10
    },
    theme: {
      mode: 'light'
    },
    title: 'Recommendations'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default sidebar configuration with search, collapsible header, and recommendation display mode.'
      }
    }
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,b,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <SidebarDemo args={args} />,
  args: {
    recommendations: sampleRecommendations,
    config: {
      position: 'right',
      size: 'md',
      displayMode: 'recommendations',
      collapsible: true,
      defaultCollapsed: false,
      showHeader: true,
      showSearch: true,
      maxRecommendations: 8
    },
    theme: {
      mode: 'light'
    },
    title: 'AI Recommendations'
  },
  parameters: {
    docs: {
      description: {
        story: 'Right-positioned sidebar for applications that prefer recommendations on the right side.'
      }
    }
  }
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,x,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <SidebarDemo args={args} />,
  args: {
    recommendations: sampleRecommendations,
    config: {
      position: 'left',
      size: 'sm',
      displayMode: 'recommendations',
      collapsible: true,
      defaultCollapsed: false,
      showHeader: true,
      showSearch: false,
      maxRecommendations: 5
    },
    theme: {
      mode: 'light'
    },
    title: 'Picks'
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact sidebar with smaller width, no search, and fewer recommendations for minimal interfaces.'
      }
    }
  }
}`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var R,C,_;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <SidebarDemo args={args} />,
  args: {
    recommendations: sampleRecommendations,
    config: {
      position: 'left',
      size: 'lg',
      displayMode: 'mixed',
      collapsible: true,
      defaultCollapsed: false,
      showHeader: true,
      showSearch: true,
      maxRecommendations: 6
    },
    theme: {
      mode: 'light'
    },
    title: 'Smart Recommendations'
  },
  parameters: {
    docs: {
      description: {
        story: 'Mixed display mode showing the top recommendation as a card and others as inline items.'
      }
    }
  }
}`,...(_=(C=d.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var M,k,j;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <SidebarDemo args={args} />,
  args: {
    recommendations: sampleRecommendations,
    config: {
      position: 'left',
      size: 'md',
      displayMode: 'recommendations',
      collapsible: true,
      defaultCollapsed: false,
      showHeader: true,
      showSearch: true,
      maxRecommendations: 8
    },
    theme: {
      mode: 'dark',
      accentColor: '#3b82f6'
    },
    title: 'Recommendations'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Dark theme variant with custom accent color for dark mode applications.'
      }
    }
  }
}`,...(j=(k=m.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var v,A,D;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <SidebarDemo args={args} />,
  args: {
    recommendations: sampleRecommendations,
    config: {
      position: 'left',
      size: 'md',
      displayMode: 'recommendations',
      collapsible: true,
      defaultCollapsed: true,
      showHeader: true,
      showSearch: true,
      maxRecommendations: 10
    },
    theme: {
      mode: 'light'
    },
    title: 'Recommendations'
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar that starts in collapsed state, showing only a thin strip with expand button.'
      }
    }
  }
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var z,H,E;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <SidebarDemo args={args} />,
  args: {
    recommendations: sampleRecommendations,
    config: {
      position: 'left',
      size: 'xl',
      displayMode: 'mixed',
      collapsible: true,
      defaultCollapsed: false,
      showHeader: true,
      showSearch: true,
      showFilters: true,
      maxRecommendations: 12
    },
    theme: {
      mode: 'light'
    },
    title: 'AdMesh Recommendations'
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra large sidebar with maximum width, perfect for detailed recommendation displays.'
      }
    }
  }
}`,...(E=(H=c.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};const Y=["Default","RightSidebar","CompactSidebar","MixedDisplayMode","DarkTheme","CollapsedByDefault","ExtraLarge"];export{l as CollapsedByDefault,i as CompactSidebar,m as DarkTheme,r as Default,c as ExtraLarge,d as MixedDisplayMode,n as RightSidebar,Y as __namedExportsOrder,W as default};
