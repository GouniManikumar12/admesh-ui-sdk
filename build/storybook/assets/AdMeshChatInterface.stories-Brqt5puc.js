import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./iframe-CaenRy-o.js";import{A as q}from"./AdMeshChatInterface-BtAPWNg2.js";import"./AdMeshLinkTracker-7Al4Klcr.js";import"./AdMeshConversationalUnit-CQcgcyjm.js";import"./AdMeshInlineRecommendation-B1kKoBBP.js";import"./AdMeshConversationSummary-Dd3pYoR4.js";import"./AdMeshProductCard-DUNDRGIQ.js";import"./AdMeshCitationUnit-DwppmyLf.js";import"./AdMeshCitationReference-DNxatHzC.js";const p=[{title:"Slack",reason:"Perfect for team communication with excellent integration capabilities",intent_match_score:.94,admesh_link:"https://useadmesh.com/track?ad_id=slack-123",ad_id:"slack-123",product_id:"slack-team",has_free_tier:!0,trial_days:0,keywords:["Communication","Team","Chat","Integration"],categories:["Communication","Productivity"],features:["Channels","Direct Messages","File Sharing","App Integrations"],pricing:"Free tier available, paid plans from $7.25/user/month"},{title:"Microsoft Teams",reason:"Comprehensive collaboration platform with video conferencing and file sharing",intent_match_score:.89,admesh_link:"https://useadmesh.com/track?ad_id=teams-456",ad_id:"teams-456",product_id:"microsoft-teams",has_free_tier:!0,trial_days:30,keywords:["Communication","Video","Collaboration","Microsoft"],categories:["Communication","Video Conferencing"],features:["Video Calls","Screen Sharing","File Collaboration","Office Integration"],pricing:"Free tier available, paid plans from $4/user/month"}],f=[{id:"welcome",role:"assistant",content:"Hello! I'm your AI assistant powered by AdMesh. I can help you discover amazing products and services tailored to your needs. What are you looking for today?",timestamp:new Date(Date.now()-3e5)},{id:"user-1",role:"user",content:"I need a good team communication tool for my remote team",timestamp:new Date(Date.now()-24e4)},{id:"assistant-1",role:"assistant",content:"Great question! For remote teams, communication is crucial. Based on your needs, I've found some excellent team communication tools that are perfect for remote work:",timestamp:new Date(Date.now()-18e4),recommendations:p},{id:"user-2",role:"user",content:"These look good! What about pricing for small teams?",timestamp:new Date(Date.now()-12e4)},{id:"assistant-2",role:"assistant",content:"Both options have great pricing for small teams! Slack offers a generous free tier that works well for teams up to 10,000 messages. Microsoft Teams also has a free version and integrates seamlessly if you're already using Office 365. Would you like me to find more budget-friendly alternatives?",timestamp:new Date(Date.now()-6e4)}],o=({args:e})=>{const[B,y]=b.useState(e.messages||[]),[z,w]=b.useState(!1),O=async t=>{const h={id:`user-${Date.now()}`,role:"user",content:t,timestamp:new Date};y(a=>[...a,h]),w(!0),await new Promise(a=>setTimeout(a,1e3+Math.random()*2e3));let i="Thanks for your question! ",r=[];t.toLowerCase().includes("communication")||t.toLowerCase().includes("team")?(i="Excellent question! Team communication is crucial for remote work success. Here are the top-rated tools I recommend:",r=p):t.toLowerCase().includes("price")||t.toLowerCase().includes("cost")?(i="Budget-conscious? Smart choice! Here are some cost-effective options that still deliver great value:",r=p.filter(a=>a.has_free_tier)):t.toLowerCase().includes("crm")||t.toLowerCase().includes("sales")?(i="CRM systems are game-changers for sales teams! Based on your needs, here are my top picks:",r=[{title:"HubSpot CRM",reason:"Perfect for growing businesses with excellent free tier and automation",intent_match_score:.94,admesh_link:"https://useadmesh.com/track?ad_id=hubspot-crm",ad_id:"hubspot-crm",product_id:"hubspot",has_free_tier:!0,trial_days:14,keywords:["CRM","Sales","Marketing","Free"],categories:["Sales Tools"],features:["Contact Management","Deal Pipeline","Email Integration"],pricing:"Free tier available"}]):(i="Great question! Let me find some relevant recommendations for you:",r=p.slice(0,1));const V={id:`assistant-${Date.now()}`,role:"assistant",content:i,timestamp:new Date,recommendations:r.length>0?r:void 0};y(a=>[...a,V]),w(!1)};return s.jsx("div",{className:"h-screen bg-gray-100 dark:bg-slate-900 p-4",children:s.jsx("div",{className:"max-w-4xl mx-auto h-full",children:s.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg h-full overflow-hidden",children:[s.jsxs("div",{className:"p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white",children:[s.jsx("h1",{className:"text-xl font-semibold",children:"AdMesh Chat Interface Demo"}),s.jsx("p",{className:"text-blue-100 text-sm",children:"Embedded chat interface for web applications"})]}),s.jsx(q,{...e,messages:B,isLoading:z,onSendMessage:O,onRecommendationClick:(t,h)=>{alert(`Clicked: ${t}
Link: ${h}`)},className:"h-full"})]})})})},te={title:"Chat/AdMeshChatInterface",component:q,parameters:{layout:"fullscreen",docs:{description:{component:"Embeddable chat interface component for integrating conversational AI recommendations into web applications. Features message history, typing indicators, suggestions, and recommendation display."}}},argTypes:{messages:{control:"object",description:"Array of chat messages to display"},config:{control:"object",description:"Configuration object for chat behavior"},theme:{control:"object",description:"Theme configuration for styling"},isLoading:{control:"boolean",description:"Whether to show typing indicator"}}},n={render:e=>s.jsx(o,{args:e}),args:{messages:f,config:{placeholder:"Ask me about products, tools, or services...",enableTypingIndicator:!0,enableSuggestions:!0,suggestions:["I need team communication tools","What's the best project management software?","Show me marketing automation platforms"]},theme:{mode:"light"},isLoading:!1},parameters:{docs:{description:{story:"Default chat interface with message history, recommendations, and input field."}}}},c={render:e=>s.jsx(o,{args:e}),args:{messages:[],config:{placeholder:"Start a conversation...",enableTypingIndicator:!0,enableSuggestions:!0,suggestions:["Hello, I need help finding software","What tools do you recommend for startups?","I'm looking for productivity apps"]},theme:{mode:"light"},isLoading:!1},parameters:{docs:{description:{story:"Empty chat interface showing welcome state with suggestions."}}}},m={render:e=>s.jsx(o,{args:e}),args:{messages:[{id:"user-1",role:"user",content:"Can you recommend some good CRM software?",timestamp:new Date}],config:{placeholder:"Type your message...",enableTypingIndicator:!0},theme:{mode:"light"},isLoading:!0},parameters:{docs:{description:{story:"Chat interface showing typing indicator while AI is generating response."}}}},d={render:e=>s.jsx(o,{args:e}),args:{messages:f,config:{placeholder:"Ask me anything...",enableTypingIndicator:!0,enableSuggestions:!0,suggestions:["I need business software","What's trending in tech tools?","Help me find the right solution"]},theme:{mode:"dark",accentColor:"#3b82f6"},isLoading:!1},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Dark theme variant with custom accent color."}}}},l={render:e=>s.jsx(o,{args:e}),args:{messages:f,config:{placeholder:"Ask me about products...",maxMessages:3,enableTypingIndicator:!0},theme:{mode:"light"},isLoading:!1},parameters:{docs:{description:{story:"Chat interface with message limit, showing only the most recent 3 messages."}}}},g={render:e=>s.jsx(o,{args:e}),args:{messages:[],config:{placeholder:"How can I help you today?",enableTypingIndicator:!0,enableSuggestions:!1},theme:{mode:"light"},isLoading:!1},parameters:{docs:{description:{story:"Minimal chat interface without suggestions, focusing on direct conversation."}}}},u={render:e=>s.jsx(o,{args:e}),args:{messages:[],config:{placeholder:"Describe what you're looking for and I'll find the perfect match...",enableTypingIndicator:!0,enableSuggestions:!0,suggestions:["I need e-commerce platform recommendations","What's the best email marketing tool?","Help me find accounting software"]},theme:{mode:"light"},isLoading:!1},parameters:{docs:{description:{story:"Chat interface with custom placeholder text and specialized suggestions."}}}};var I,k,C;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <ChatInterfaceDemo args={args} />,
  args: {
    messages: sampleMessages,
    config: {
      placeholder: "Ask me about products, tools, or services...",
      enableTypingIndicator: true,
      enableSuggestions: true,
      suggestions: ["I need team communication tools", "What's the best project management software?", "Show me marketing automation platforms"]
    },
    theme: {
      mode: 'light'
    },
    isLoading: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Default chat interface with message history, recommendations, and input field.'
      }
    }
  }
}`,...(C=(k=n.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var S,D,x;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <ChatInterfaceDemo args={args} />,
  args: {
    messages: [],
    config: {
      placeholder: "Start a conversation...",
      enableTypingIndicator: true,
      enableSuggestions: true,
      suggestions: ["Hello, I need help finding software", "What tools do you recommend for startups?", "I'm looking for productivity apps"]
    },
    theme: {
      mode: 'light'
    },
    isLoading: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty chat interface showing welcome state with suggestions.'
      }
    }
  }
}`,...(x=(D=c.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var v,M,_;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <ChatInterfaceDemo args={args} />,
  args: {
    messages: [{
      id: 'user-1',
      role: 'user',
      content: "Can you recommend some good CRM software?",
      timestamp: new Date()
    }],
    config: {
      placeholder: "Type your message...",
      enableTypingIndicator: true
    },
    theme: {
      mode: 'light'
    },
    isLoading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat interface showing typing indicator while AI is generating response.'
      }
    }
  }
}`,...(_=(M=m.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var T,L,j;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <ChatInterfaceDemo args={args} />,
  args: {
    messages: sampleMessages,
    config: {
      placeholder: "Ask me anything...",
      enableTypingIndicator: true,
      enableSuggestions: true,
      suggestions: ["I need business software", "What's trending in tech tools?", "Help me find the right solution"]
    },
    theme: {
      mode: 'dark',
      accentColor: '#3b82f6'
    },
    isLoading: false
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Dark theme variant with custom accent color.'
      }
    }
  }
}`,...(j=(L=d.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var A,W,H;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <ChatInterfaceDemo args={args} />,
  args: {
    messages: sampleMessages,
    config: {
      placeholder: "Ask me about products...",
      maxMessages: 3,
      enableTypingIndicator: true
    },
    theme: {
      mode: 'light'
    },
    isLoading: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat interface with message limit, showing only the most recent 3 messages.'
      }
    }
  }
}`,...(H=(W=l.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var E,N,F;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <ChatInterfaceDemo args={args} />,
  args: {
    messages: [],
    config: {
      placeholder: "How can I help you today?",
      enableTypingIndicator: true,
      enableSuggestions: false
    },
    theme: {
      mode: 'light'
    },
    isLoading: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal chat interface without suggestions, focusing on direct conversation.'
      }
    }
  }
}`,...(F=(N=g.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var R,P,$;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <ChatInterfaceDemo args={args} />,
  args: {
    messages: [],
    config: {
      placeholder: "Describe what you're looking for and I'll find the perfect match...",
      enableTypingIndicator: true,
      enableSuggestions: true,
      suggestions: ["I need e-commerce platform recommendations", "What's the best email marketing tool?", "Help me find accounting software"]
    },
    theme: {
      mode: 'light'
    },
    isLoading: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat interface with custom placeholder text and specialized suggestions.'
      }
    }
  }
}`,...($=(P=u.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};const ae=["Default","EmptyState","WithTypingIndicator","DarkTheme","LimitedMessages","NoSuggestions","CustomPlaceholder"];export{u as CustomPlaceholder,d as DarkTheme,n as Default,c as EmptyState,l as LimitedMessages,g as NoSuggestions,m as WithTypingIndicator,ae as __namedExportsOrder,te as default};
