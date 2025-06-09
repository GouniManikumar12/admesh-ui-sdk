import{A as Z}from"./AdMeshLayout-CUDTzPHh.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-DBb7zPuL.js";import"./AdMeshLinkTracker-Cu4CWCJq.js";import"./AdMeshProductCard-DkZ4ccMa.js";const e=[{title:"HubSpot CRM",reason:"Perfect for remote teams with excellent collaboration features and free tier availability",intent_match_score:.92,admesh_link:"https://useadmesh.com/track?ad_id=hubspot-123&redirect=https://hubspot.com",ad_id:"hubspot-123",product_id:"hubspot-crm",features:["Contact Management","Email Marketing","Sales Pipeline","Reporting","Mobile App"],has_free_tier:!0,integrations:["Gmail","Outlook","Slack","Zoom"],pricing:"Free - $1,200/month",trial_days:14,keywords:["CRM","Sales","Marketing"]},{title:"Salesforce CRM",reason:"Enterprise-grade CRM with advanced customization and automation capabilities",intent_match_score:.88,admesh_link:"https://useadmesh.com/track?ad_id=salesforce-456&redirect=https://salesforce.com",ad_id:"salesforce-456",product_id:"salesforce-crm",features:["Advanced Analytics","Custom Objects","Workflow Automation","AppExchange"],has_free_tier:!1,integrations:["Microsoft 365","Google Workspace","Slack"],pricing:"$25 - $300/user/month",trial_days:30,keywords:["CRM","Enterprise","Automation"]},{title:"Pipedrive",reason:"Simple and intuitive CRM focused on sales pipeline management",intent_match_score:.85,admesh_link:"https://useadmesh.com/track?ad_id=pipedrive-789&redirect=https://pipedrive.com",ad_id:"pipedrive-789",product_id:"pipedrive-crm",features:["Visual Pipeline","Activity Reminders","Email Integration","Mobile App"],has_free_tier:!1,integrations:["Gmail","Outlook","Zapier"],pricing:"$14.90 - $99/user/month",trial_days:14,keywords:["CRM","Pipeline","Sales"]}],J={title:"AdMesh/Layout",component:Z,parameters:{layout:"fullscreen",docs:{description:{component:"An intelligent layout component that automatically chooses the best display format for product recommendations."}}},tags:["autodocs"],argTypes:{intentType:{control:"select",options:["compare_products","best_for_use_case","trial_demo","budget_conscious"],description:"The type of intent to optimize layout for"},theme:{control:"object",description:"Theme configuration"},maxDisplayed:{control:"number",description:"Maximum number of products to display"},showMatchScores:{control:"boolean",description:"Whether to show match scores"},showFeatures:{control:"boolean",description:"Whether to show product features"},autoLayout:{control:"boolean",description:"Whether to automatically choose layout based on data"}}},t={args:{recommendations:e,autoLayout:!0,maxDisplayed:6,showMatchScores:!0,showFeatures:!0}},a={args:{recommendations:e,intentType:"best_for_use_case",autoLayout:!1,maxDisplayed:6,showMatchScores:!0,showFeatures:!0}},o={args:{recommendations:e,intentType:"compare_products",autoLayout:!1,maxDisplayed:3,showMatchScores:!0,showFeatures:!0}},r={args:{recommendations:[e[0]],autoLayout:!0,maxDisplayed:6,showMatchScores:!0,showFeatures:!0}},s={args:{recommendations:e.slice(0,2),autoLayout:!0,maxDisplayed:6,showMatchScores:!0,showFeatures:!0}},n={args:{recommendations:e,theme:{mode:"dark"},autoLayout:!0,maxDisplayed:6,showMatchScores:!0,showFeatures:!0},parameters:{backgrounds:{default:"dark"}}},c={args:{recommendations:e,theme:{mode:"light",accentColor:"#8b5cf6"},autoLayout:!0,maxDisplayed:6,showMatchScores:!0,showFeatures:!0}},u={args:{recommendations:[],autoLayout:!0,maxDisplayed:6,showMatchScores:!0,showFeatures:!0}},i={args:{recommendations:e,autoLayout:!0,maxDisplayed:6,showMatchScores:!1,showFeatures:!0}},m={args:{recommendations:e,autoLayout:!0,maxDisplayed:2,showMatchScores:!0,showFeatures:!0}};var d,p,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    autoLayout: true,
    maxDisplayed: 6,
    showMatchScores: true,
    showFeatures: true
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var h,y,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    intentType: 'best_for_use_case',
    autoLayout: false,
    maxDisplayed: 6,
    showMatchScores: true,
    showFeatures: true
  }
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var w,S,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    intentType: 'compare_products',
    autoLayout: false,
    maxDisplayed: 3,
    showMatchScores: true,
    showFeatures: true
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var _,M,L;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    recommendations: [sampleRecommendations[0]],
    autoLayout: true,
    maxDisplayed: 6,
    showMatchScores: true,
    showFeatures: true
  }
}`,...(L=(M=r.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var b,x,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations.slice(0, 2),
    autoLayout: true,
    maxDisplayed: 6,
    showMatchScores: true,
    showFeatures: true
  }
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var D,F,C;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    theme: {
      mode: 'dark'
    },
    autoLayout: true,
    maxDisplayed: 6,
    showMatchScores: true,
    showFeatures: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(C=(F=n.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var R,A,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    theme: {
      mode: 'light',
      accentColor: '#8b5cf6'
    },
    autoLayout: true,
    maxDisplayed: 6,
    showMatchScores: true,
    showFeatures: true
  }
}`,...(T=(A=c.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var v,P,E;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    recommendations: [],
    autoLayout: true,
    maxDisplayed: 6,
    showMatchScores: true,
    showFeatures: true
  }
}`,...(E=(P=u.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var W,$,O;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    autoLayout: true,
    maxDisplayed: 6,
    showMatchScores: false,
    showFeatures: true
  }
}`,...(O=($=i.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var G,j,z;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    recommendations: sampleRecommendations,
    autoLayout: true,
    maxDisplayed: 2,
    showMatchScores: true,
    showFeatures: true
  }
}`,...(z=(j=m.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const K=["AutoLayout","CardsLayout","CompareLayout","SingleProduct","TwoProducts","DarkTheme","CustomAccentColor","EmptyState","WithoutMatchScores","LimitedDisplay"];export{t as AutoLayout,a as CardsLayout,o as CompareLayout,c as CustomAccentColor,n as DarkTheme,u as EmptyState,m as LimitedDisplay,r as SingleProduct,s as TwoProducts,i as WithoutMatchScores,K as __namedExportsOrder,J as default};
