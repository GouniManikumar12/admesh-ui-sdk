import{A as T}from"./AdMeshProductCard-BhpBY9Ff.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-6V_WvihQ.js";import"./AdMeshLinkTracker-BhGdnnRa.js";const e={title:"HubSpot CRM",reason:"Perfect for remote teams with excellent collaboration features and free tier availability",intent_match_score:.92,admesh_link:"https://useadmesh.com/track?ad_id=hubspot-123&redirect=https://hubspot.com",ad_id:"hubspot-123",product_id:"hubspot-crm",features:["Contact Management","Email Marketing","Sales Pipeline","Reporting","Mobile App"],has_free_tier:!0,integrations:["Gmail","Outlook","Slack","Zoom"],pricing:"Free - $1,200/month",trial_days:14,url:"https://hubspot.com",reviews_summary:"Highly rated for ease of use and customer support",keywords:["CRM","Sales","Marketing","Customer Management"],badges:["Top Match","Free Tier"]},W={title:"OpenAI GPT-4 API",reason:"Leading AI language model with excellent performance for content generation and analysis",intent_match_score:.88,admesh_link:"https://useadmesh.com/track?ad_id=openai-456&redirect=https://openai.com",ad_id:"openai-456",product_id:"openai-gpt4",features:["Natural Language Processing","Code Generation","Content Creation","API Access"],has_free_tier:!1,integrations:["REST API","Python SDK","Node.js SDK"],pricing:"$0.03/1K tokens",trial_days:0,url:"https://openai.com",reviews_summary:"Industry-leading AI model with exceptional capabilities",keywords:["AI","Machine Learning","Natural Language","API"],badges:["AI Powered","Popular"]},G={title:"AdMesh/ProductCard",component:T,parameters:{layout:"centered",docs:{description:{component:"A product recommendation card component with built-in tracking and theming support."}}},tags:["autodocs"],argTypes:{theme:{control:"object",description:"Theme configuration for the card"},showMatchScore:{control:"boolean",description:"Whether to show the intent match score"},showBadges:{control:"boolean",description:"Whether to show product badges"},maxKeywords:{control:"number",description:"Maximum number of keywords to display"}}},o={args:{recommendation:e,showMatchScore:!0,showBadges:!0,maxKeywords:3}},a={args:{recommendation:{...e,intent_match_score:.95},showMatchScore:!0,showBadges:!0,maxKeywords:3}},r={args:{recommendation:W,showMatchScore:!0,showBadges:!0,maxKeywords:4}},t={args:{recommendation:e,theme:{mode:"dark"},showMatchScore:!0,showBadges:!0,maxKeywords:3},parameters:{backgrounds:{default:"dark"}}},s={args:{recommendation:e,theme:{mode:"light",accentColor:"#10b981"},showMatchScore:!0,showBadges:!0,maxKeywords:3}},n={args:{recommendation:e,showMatchScore:!0,showBadges:!1,maxKeywords:3}},c={args:{recommendation:e,showMatchScore:!1,showBadges:!0,maxKeywords:3}},m={args:{recommendation:{title:"Basic Product",reason:"Simple recommendation without extra features",intent_match_score:.75,admesh_link:"https://useadmesh.com/track?ad_id=basic-123",ad_id:"basic-123",product_id:"basic-product"},showMatchScore:!0,showBadges:!0,maxKeywords:3}};var d,i,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    showMatchScore: true,
    showBadges: true,
    maxKeywords: 3
  }
}`,...(h=(i=o.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var u,p,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    recommendation: {
      ...sampleRecommendation,
      intent_match_score: 0.95
    },
    showMatchScore: true,
    showBadges: true,
    maxKeywords: 3
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var g,w,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendationAI,
    showMatchScore: true,
    showBadges: true,
    maxKeywords: 4
  }
}`,...(S=(w=r.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var _,M,y;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    theme: {
      mode: 'dark'
    },
    showMatchScore: true,
    showBadges: true,
    maxKeywords: 3
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(y=(M=t.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var b,f,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    theme: {
      mode: 'light',
      accentColor: '#10b981'
    },
    showMatchScore: true,
    showBadges: true,
    maxKeywords: 3
  }
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var x,A,B;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    showMatchScore: true,
    showBadges: false,
    maxKeywords: 3
  }
}`,...(B=(A=n.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var K,P,C;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    recommendation: sampleRecommendation,
    showMatchScore: false,
    showBadges: true,
    maxKeywords: 3
  }
}`,...(C=(P=c.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var I,R,D;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    recommendation: {
      title: "Basic Product",
      reason: "Simple recommendation without extra features",
      intent_match_score: 0.75,
      admesh_link: "https://useadmesh.com/track?ad_id=basic-123",
      ad_id: "basic-123",
      product_id: "basic-product"
    },
    showMatchScore: true,
    showBadges: true,
    maxKeywords: 3
  }
}`,...(D=(R=m.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};const N=["Default","HighMatchScore","AIProduct","DarkTheme","CustomAccentColor","WithoutBadges","WithoutMatchScore","MinimalData"];export{r as AIProduct,s as CustomAccentColor,t as DarkTheme,o as Default,a as HighMatchScore,m as MinimalData,n as WithoutBadges,c as WithoutMatchScore,N as __namedExportsOrder,G as default};
