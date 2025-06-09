import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as O}from"./iframe-CaenRy-o.js";import{A as H}from"./AdMeshFloatingChat-aV0ku25n.js";import"./AdMeshLinkTracker-7Al4Klcr.js";import"./AdMeshChatInterface-BtAPWNg2.js";import"./AdMeshConversationalUnit-CQcgcyjm.js";import"./AdMeshInlineRecommendation-B1kKoBBP.js";import"./AdMeshConversationSummary-Dd3pYoR4.js";import"./AdMeshProductCard-DUNDRGIQ.js";import"./AdMeshCitationUnit-DwppmyLf.js";import"./AdMeshCitationReference-DNxatHzC.js";const n=[{title:"HubSpot CRM",reason:"Perfect for remote teams with excellent collaboration features and robust automation",intent_match_score:.92,admesh_link:"https://useadmesh.com/track?ad_id=hubspot-123",ad_id:"hubspot-123",product_id:"hubspot-crm",has_free_tier:!0,trial_days:14,keywords:["CRM","Sales","Marketing","Automation"],categories:["Sales Tools","CRM"],features:["Contact Management","Deal Pipeline","Email Integration"],pricing:"Free tier available, paid plans from $45/month"},{title:"Salesforce Sales Cloud",reason:"Enterprise-grade CRM with advanced analytics and customization options",intent_match_score:.87,admesh_link:"https://useadmesh.com/track?ad_id=salesforce-456",ad_id:"salesforce-456",product_id:"salesforce-sales",has_free_tier:!1,trial_days:30,keywords:["CRM","Enterprise","Analytics","Customization"],categories:["Sales Tools","Enterprise Software"],features:["Advanced Analytics","Custom Objects","Workflow Automation"],pricing:"Starting from $25/user/month"}],r=({args:t})=>{const[i,u]=O.useState(!1),D=async o=>{await new Promise(F=>setTimeout(F,1e3+Math.random()*2e3));let s="I'd be happy to help you find the right solution! ",a=[];return o.toLowerCase().includes("crm")||o.toLowerCase().includes("sales")?(s="Great choice! CRM systems are essential for managing customer relationships. Based on your needs, I've found some excellent options:",a=n):o.toLowerCase().includes("hello")||o.toLowerCase().includes("hi")?s="Hello! I'm your AI assistant powered by AdMesh. I can help you discover amazing products and services. What are you looking for today?":o.toLowerCase().includes("project")||o.toLowerCase().includes("management")?(s="Project management tools can really boost your team's productivity! Here are some top-rated options:",a=[{...n[0],title:"Asana",reason:"Excellent for team collaboration with intuitive task management",intent_match_score:.89,ad_id:"asana-123",keywords:["Project Management","Team","Tasks","Collaboration"]}]):o.toLowerCase().includes("marketing")||o.toLowerCase().includes("email")?(s="Marketing automation can save you tons of time! Check out these powerful platforms:",a=[{...n[0],title:"Mailchimp",reason:"User-friendly email marketing with great automation features",intent_match_score:.91,ad_id:"mailchimp-456",keywords:["Email Marketing","Automation","Analytics","Templates"]}]):(s="Let me search for some great recommendations based on your query. Here's what I found:",a=n.slice(0,1)),{id:`assistant-${Date.now()}`,role:"assistant",content:s,timestamp:new Date,recommendations:a.length>0?a:void 0}};return e.jsxs("div",{className:"h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4",children:"AdMesh Floating Chat Demo"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-8",children:"This demonstrates the floating chat widget that can be embedded on any website. The chat appears in the bottom-right corner and provides AI-powered product recommendations."}),e.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4",children:"Your Website Content"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"The floating chat widget appears on top of your existing content without interfering with your site's layout. Users can click the chat button to start a conversation and get personalized recommendations."}),e.jsxs("button",{onClick:()=>u(!i),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:[i?"Close":"Open"," Chat Widget"]})]})]}),e.jsx(H,{...t,isOpen:i,onToggle:()=>u(!i),onSendMessage:D,onRecommendationClick:(o,s)=>{alert(`Clicked: ${o}
Link: ${s}`)}})]})},Y={title:"Chat/AdMeshFloatingChat",component:H,parameters:{layout:"fullscreen",docs:{description:{component:"Floating chat widget that can be embedded on any website to provide AI-powered product recommendations through a conversational interface. Features auto-positioning, responsive design, and customizable appearance."}}},argTypes:{config:{control:"object",description:"Configuration object for chat behavior and appearance"},theme:{control:"object",description:"Theme configuration for styling"},title:{control:"text",description:"Chat widget title"},subtitle:{control:"text",description:"Chat widget subtitle"}}},d={render:t=>e.jsx(r,{args:t}),args:{config:{position:"bottom-right",size:"md",displayMode:"widget",autoOpen:!1,showWelcomeMessage:!0,welcomeMessage:"Hi! I'm your AI assistant. I can help you find the perfect products and services. What are you looking for today?",placeholder:"Ask me about products, tools, or services...",enableTypingIndicator:!0,enableSuggestions:!0,suggestions:["I need a CRM for my sales team","What's the best project management tool?","Show me email marketing platforms"]},theme:{mode:"light"},title:"AI Assistant",subtitle:"Get personalized recommendations"},parameters:{docs:{description:{story:"Default floating chat widget positioned in the bottom-right corner with welcome message and suggestions."}}}},c={render:t=>e.jsx(r,{args:t}),args:{config:{position:"bottom-left",size:"md",displayMode:"widget",autoOpen:!1,showWelcomeMessage:!0,welcomeMessage:"Hello! I'm here to help you discover amazing products. What can I help you find?",enableTypingIndicator:!0},theme:{mode:"light"},title:"Product Finder",subtitle:"AI-powered recommendations"},parameters:{docs:{description:{story:"Chat widget positioned in the bottom-left corner, useful for left-to-right reading layouts."}}}},l={render:t=>e.jsx(r,{args:t}),args:{config:{position:"bottom-right",size:"lg",displayMode:"widget",autoOpen:!1,showWelcomeMessage:!0,welcomeMessage:"Welcome to our AI-powered recommendation engine! I can help you find the perfect solutions for your business needs.",enableTypingIndicator:!0,enableSuggestions:!0,suggestions:["I need business software recommendations","What tools do you recommend for startups?","Help me find productivity apps"]},theme:{mode:"light"},title:"Business Assistant",subtitle:"Find the right tools for your business"},parameters:{docs:{description:{story:"Large-sized chat widget with more space for detailed conversations and recommendations."}}}},m={render:t=>e.jsx(r,{args:t}),args:{config:{position:"bottom-right",size:"md",displayMode:"widget",autoOpen:!1,showWelcomeMessage:!0,welcomeMessage:"Hi there! I'm your AI shopping assistant. Let me help you find exactly what you're looking for.",enableTypingIndicator:!0},theme:{mode:"dark",accentColor:"#3b82f6"},title:"Shopping Assistant",subtitle:"Smart product recommendations"},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Dark theme variant with custom accent color, perfect for dark websites."}}}},g={render:t=>e.jsx(r,{args:t}),args:{config:{position:"bottom-right",size:"md",displayMode:"widget",autoOpen:!0,showWelcomeMessage:!0,welcomeMessage:"Welcome! I noticed you're browsing our site. Can I help you find something specific?",enableTypingIndicator:!0,enableSuggestions:!0,suggestions:["Show me your best products","I'm looking for recommendations","Help me choose the right solution"]},theme:{mode:"light"},title:"Help Center",subtitle:"We're here to help!"},parameters:{docs:{description:{story:"Chat widget that opens automatically when the page loads, useful for proactive customer engagement."}}}},p={render:t=>e.jsx(r,{args:t}),args:{config:{position:"bottom-right",size:"sm",displayMode:"widget",autoOpen:!1,showWelcomeMessage:!0,welcomeMessage:"Hi! Quick question - what are you looking for?",enableTypingIndicator:!0},theme:{mode:"light"},title:"Quick Help",subtitle:"Fast recommendations"},parameters:{docs:{description:{story:"Compact chat widget with smaller footprint, ideal for mobile or space-constrained layouts."}}}};var h,f,y;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <FloatingChatDemo args={args} />,
  args: {
    config: {
      position: 'bottom-right',
      size: 'md',
      displayMode: 'widget',
      autoOpen: false,
      showWelcomeMessage: true,
      welcomeMessage: "Hi! I'm your AI assistant. I can help you find the perfect products and services. What are you looking for today?",
      placeholder: "Ask me about products, tools, or services...",
      enableTypingIndicator: true,
      enableSuggestions: true,
      suggestions: ["I need a CRM for my sales team", "What's the best project management tool?", "Show me email marketing platforms"]
    },
    theme: {
      mode: 'light'
    },
    title: 'AI Assistant',
    subtitle: 'Get personalized recommendations'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default floating chat widget positioned in the bottom-right corner with welcome message and suggestions.'
      }
    }
  }
}`,...(y=(f=d.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,w,k;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <FloatingChatDemo args={args} />,
  args: {
    config: {
      position: 'bottom-left',
      size: 'md',
      displayMode: 'widget',
      autoOpen: false,
      showWelcomeMessage: true,
      welcomeMessage: "Hello! I'm here to help you discover amazing products. What can I help you find?",
      enableTypingIndicator: true
    },
    theme: {
      mode: 'light'
    },
    title: 'Product Finder',
    subtitle: 'AI-powered recommendations'
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat widget positioned in the bottom-left corner, useful for left-to-right reading layouts.'
      }
    }
  }
}`,...(k=(w=c.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var M,C,I;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <FloatingChatDemo args={args} />,
  args: {
    config: {
      position: 'bottom-right',
      size: 'lg',
      displayMode: 'widget',
      autoOpen: false,
      showWelcomeMessage: true,
      welcomeMessage: "Welcome to our AI-powered recommendation engine! I can help you find the perfect solutions for your business needs.",
      enableTypingIndicator: true,
      enableSuggestions: true,
      suggestions: ["I need business software recommendations", "What tools do you recommend for startups?", "Help me find productivity apps"]
    },
    theme: {
      mode: 'light'
    },
    title: 'Business Assistant',
    subtitle: 'Find the right tools for your business'
  },
  parameters: {
    docs: {
      description: {
        story: 'Large-sized chat widget with more space for detailed conversations and recommendations.'
      }
    }
  }
}`,...(I=(C=l.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var x,A,v;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <FloatingChatDemo args={args} />,
  args: {
    config: {
      position: 'bottom-right',
      size: 'md',
      displayMode: 'widget',
      autoOpen: false,
      showWelcomeMessage: true,
      welcomeMessage: "Hi there! I'm your AI shopping assistant. Let me help you find exactly what you're looking for.",
      enableTypingIndicator: true
    },
    theme: {
      mode: 'dark',
      accentColor: '#3b82f6'
    },
    title: 'Shopping Assistant',
    subtitle: 'Smart product recommendations'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Dark theme variant with custom accent color, perfect for dark websites.'
      }
    }
  }
}`,...(v=(A=m.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var S,W,j;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <FloatingChatDemo args={args} />,
  args: {
    config: {
      position: 'bottom-right',
      size: 'md',
      displayMode: 'widget',
      autoOpen: true,
      showWelcomeMessage: true,
      welcomeMessage: "Welcome! I noticed you're browsing our site. Can I help you find something specific?",
      enableTypingIndicator: true,
      enableSuggestions: true,
      suggestions: ["Show me your best products", "I'm looking for recommendations", "Help me choose the right solution"]
    },
    theme: {
      mode: 'light'
    },
    title: 'Help Center',
    subtitle: 'We\\'re here to help!'
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat widget that opens automatically when the page loads, useful for proactive customer engagement.'
      }
    }
  }
}`,...(j=(W=g.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var T,_,z;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <FloatingChatDemo args={args} />,
  args: {
    config: {
      position: 'bottom-right',
      size: 'sm',
      displayMode: 'widget',
      autoOpen: false,
      showWelcomeMessage: true,
      welcomeMessage: "Hi! Quick question - what are you looking for?",
      enableTypingIndicator: true
    },
    theme: {
      mode: 'light'
    },
    title: 'Quick Help',
    subtitle: 'Fast recommendations'
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact chat widget with smaller footprint, ideal for mobile or space-constrained layouts.'
      }
    }
  }
}`,...(z=(_=p.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};const J=["Default","BottomLeft","LargeSize","DarkTheme","AutoOpen","Compact"];export{g as AutoOpen,c as BottomLeft,p as Compact,m as DarkTheme,d as Default,l as LargeSize,J as __namedExportsOrder,Y as default};
