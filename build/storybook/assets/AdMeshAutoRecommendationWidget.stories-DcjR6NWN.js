import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-6V_WvihQ.js";import{A as z}from"./AdMeshAutoRecommendationWidget-J9FDmkKX.js";import"./AdMeshLinkTracker-BhGdnnRa.js";import"./AdMeshConversationalUnit-DQbn-Ijw.js";import"./AdMeshInlineRecommendation-iUkU6sFQ.js";import"./AdMeshConversationSummary-wBmTX9d3.js";import"./AdMeshProductCard-BhpBY9Ff.js";import"./AdMeshCitationUnit-BfnoZkX0.js";import"./AdMeshCitationReference-Dm80h120.js";const M=[{title:"HubSpot CRM",reason:"Perfect for growing businesses with excellent free tier and automation",intent_match_score:.94,admesh_link:"https://useadmesh.com/track?ad_id=hubspot-crm",ad_id:"hubspot-crm",product_id:"hubspot",has_free_tier:!0,trial_days:14,keywords:["CRM","Sales","Free"],categories:["Sales Tools"],features:["Contact Management","Deal Pipeline","Email Integration"],pricing:"Free tier available"},{title:"Salesforce Sales Cloud",reason:"Enterprise-grade CRM with advanced analytics and AI features",intent_match_score:.89,admesh_link:"https://useadmesh.com/track?ad_id=salesforce-sales",ad_id:"salesforce-sales",product_id:"salesforce",has_free_tier:!1,trial_days:30,keywords:["CRM","Enterprise","AI"],categories:["Sales Tools","Enterprise"],features:["Advanced Analytics","AI Einstein","Custom Objects"],pricing:"Starting from $25/user/month"}],r=({args:t})=>{const[l,g]=h.useState(!1),[p,T]=h.useState(""),m=c=>{T(c),g(!0)};return e.jsxs("div",{className:"h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4",children:"Auto-Recommendation Widget Demo"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-8",children:"This widget automatically appears when your AI application detects relevant queries. Perfect for integrating with ChatGPT, Claude, or any AI assistant."}),e.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700 mb-8",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4",children:"Simulate AI Application Integration"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Click any button to simulate a user query in your AI application. The widget will automatically appear with relevant recommendations."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsx("button",{onClick:()=>m("I need a CRM for my sales team"),className:"px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm",children:'"I need a CRM system"'}),e.jsx("button",{onClick:()=>m("What's the best project management tool?"),className:"px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm",children:'"Project management tool"'}),e.jsx("button",{onClick:()=>m("Help me find business software"),className:"px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm",children:'"Business software help"'})]}),l&&e.jsxs("div",{className:"mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg",children:[e.jsx("p",{className:"text-green-800 dark:text-green-200 font-medium",children:"✅ Widget triggered! Check the bottom-right corner."}),e.jsxs("p",{className:"text-green-600 dark:text-green-300 text-sm mt-1",children:['Query: "',p,'"']})]})]}),e.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4",children:"Integration Benefits"}),e.jsxs("ul",{className:"space-y-2 text-gray-600 dark:text-gray-400",children:[e.jsx("li",{children:"• Automatically appears when relevant queries are detected"}),e.jsx("li",{children:"• No user input required - purely AI-driven recommendations"}),e.jsx("li",{children:"• Contextual recommendations based on conversation content"}),e.jsx("li",{children:"• Non-intrusive design that doesn't interrupt user workflow"}),e.jsx("li",{children:"• Built-in tracking and analytics for recommendation performance"}),e.jsx("li",{children:"• Easy integration with any AI application or chatbot"})]})]})]}),l&&e.jsx(z,{...t,recommendations:M,trigger:p,onRecommendationClick:(c,E)=>{alert(`Clicked: ${c}
Link: ${E}`)},onDismiss:()=>g(!1)})]})},J={title:"Chat/AdMeshAutoRecommendationWidget",component:z,parameters:{layout:"fullscreen",docs:{description:{component:"Auto-recommendation widget that appears automatically when AI applications detect relevant queries. Perfect for integrating with ChatGPT, Claude, or any AI assistant to show contextual product recommendations."}}},argTypes:{recommendations:{control:"object",description:"Array of recommendations to display"},trigger:{control:"text",description:"The query or context that triggered the recommendations"},position:{control:"select",options:["bottom-right","bottom-left","top-right","top-left"],description:"Widget position on screen"},size:{control:"select",options:["sm","md","lg"],description:"Widget size"},theme:{control:"object",description:"Theme configuration"}}},o={render:t=>e.jsx(r,{args:t}),args:{title:"AI Recommendations",position:"bottom-right",size:"md",autoShow:!0,showDelay:1e3,theme:{mode:"light"}},parameters:{docs:{description:{story:"Default auto-recommendation widget that appears automatically when triggered by AI queries."}}}},s={render:t=>e.jsx(r,{args:t}),args:{title:"Smart Suggestions",position:"bottom-left",size:"md",autoShow:!0,showDelay:500,theme:{mode:"light"}},parameters:{docs:{description:{story:"Widget positioned in bottom-left corner with faster appearance."}}}},a={render:t=>e.jsx(r,{args:t}),args:{title:"Product Recommendations",position:"bottom-right",size:"lg",autoShow:!0,showDelay:800,theme:{mode:"light"}},parameters:{docs:{description:{story:"Large-sized widget with more space for detailed recommendations."}}}},n={render:t=>e.jsx(r,{args:t}),args:{title:"AI Recommendations",position:"bottom-right",size:"md",autoShow:!0,showDelay:1e3,theme:{mode:"dark",accentColor:"#3b82f6"}},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Dark theme variant perfect for dark-mode applications."}}}},i={render:t=>e.jsx(r,{args:t}),args:{title:"Quick Suggestions",position:"top-right",size:"sm",autoShow:!0,showDelay:200,theme:{mode:"light"}},parameters:{docs:{description:{story:"Fast-appearing widget with minimal delay, positioned in top-right corner."}}}},d={render:t=>e.jsx(r,{args:t}),args:{title:"Context-Aware Recommendations",position:"bottom-right",size:"md",autoShow:!0,showDelay:1e3,theme:{mode:"light"}},parameters:{docs:{description:{story:"Widget showing how trigger context is displayed to users, helping them understand why recommendations appeared."}}}};var u,y,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <AutoWidgetDemo args={args} />,
  args: {
    title: 'AI Recommendations',
    position: 'bottom-right',
    size: 'md',
    autoShow: true,
    showDelay: 1000,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Default auto-recommendation widget that appears automatically when triggered by AI queries.'
      }
    }
  }
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var w,b,f;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <AutoWidgetDemo args={args} />,
  args: {
    title: 'Smart Suggestions',
    position: 'bottom-left',
    size: 'md',
    autoShow: true,
    showDelay: 500,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Widget positioned in bottom-left corner with faster appearance.'
      }
    }
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var k,A,j;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <AutoWidgetDemo args={args} />,
  args: {
    title: 'Product Recommendations',
    position: 'bottom-right',
    size: 'lg',
    autoShow: true,
    showDelay: 800,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Large-sized widget with more space for detailed recommendations.'
      }
    }
  }
}`,...(j=(A=a.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var S,D,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <AutoWidgetDemo args={args} />,
  args: {
    title: 'AI Recommendations',
    position: 'bottom-right',
    size: 'md',
    autoShow: true,
    showDelay: 1000,
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
        story: 'Dark theme variant perfect for dark-mode applications.'
      }
    }
  }
}`,...(C=(D=n.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var I,v,R;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <AutoWidgetDemo args={args} />,
  args: {
    title: 'Quick Suggestions',
    position: 'top-right',
    size: 'sm',
    autoShow: true,
    showDelay: 200,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Fast-appearing widget with minimal delay, positioned in top-right corner.'
      }
    }
  }
}`,...(R=(v=i.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var W,_,N;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <AutoWidgetDemo args={args} />,
  args: {
    title: 'Context-Aware Recommendations',
    position: 'bottom-right',
    size: 'md',
    autoShow: true,
    showDelay: 1000,
    theme: {
      mode: 'light'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Widget showing how trigger context is displayed to users, helping them understand why recommendations appeared.'
      }
    }
  }
}`,...(N=(_=d.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const K=["Default","BottomLeft","LargeSize","DarkTheme","FastAppearance","CustomTrigger"];export{s as BottomLeft,d as CustomTrigger,n as DarkTheme,o as Default,i as FastAppearance,a as LargeSize,K as __namedExportsOrder,J as default};
