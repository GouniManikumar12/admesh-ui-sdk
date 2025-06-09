import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as W}from"./AdMeshProductCard-DUNDRGIQ.js";import{A as F}from"./AdMeshLayout-DZDRGlLj.js";import{A as t}from"./AdMeshBadge-DDleC9sR.js";import"./AdMeshLinkTracker-7Al4Klcr.js";import"./AdMeshConversationalUnit-CQcgcyjm.js";import"./AdMeshConversationSummary-Dd3pYoR4.js";import"./AdMeshInlineRecommendation-B1kKoBBP.js";import"./AdMeshCitationUnit-DwppmyLf.js";import"./AdMeshCitationReference-DNxatHzC.js";import"./AdMeshSidebar-DZ377aUK.js";import"./AdMeshFloatingChat-aV0ku25n.js";import"./AdMeshChatInterface-BtAPWNg2.js";import"./AdMeshAutoRecommendationWidget-De6j8vaT.js";import"./iframe-CaenRy-o.js";const r=[{title:"Linear",reason:"The issue tracking tool you'll actually love. Built for modern software teams with beautiful design, powerful automation, and seamless integrations.",intent_match_score:.98,admesh_link:"https://useadmesh.com/track?ad_id=linear-premium&redirect=https://linear.app",ad_id:"linear-premium",product_id:"linear-issues",features:["Issue Tracking","Sprint Planning","Git Integration","Automation","Analytics"],has_free_tier:!0,integrations:["GitHub","GitLab","Slack","Figma"],pricing:"$8 - $16/user/month",trial_days:14,keywords:["Project Management","Issue Tracking","Development","Productivity"]},{title:"Vercel",reason:"The platform for frontend developers. Deploy instantly with zero configuration, automatic scaling, and edge functions for optimal performance worldwide.",intent_match_score:.95,admesh_link:"https://useadmesh.com/track?ad_id=vercel-premium&redirect=https://vercel.com",ad_id:"vercel-premium",product_id:"vercel-platform",features:["Instant Deployment","Edge Functions","Analytics","Preview Deployments","Team Collaboration"],has_free_tier:!0,integrations:["GitHub","GitLab","Bitbucket","Next.js"],pricing:"Free - $20/user/month",trial_days:14,keywords:["Deployment","Frontend","Edge Computing","Performance"]},{title:"Stripe",reason:"The complete payments platform for the internet. Accept payments, send payouts, and manage your business online with powerful APIs and beautiful interfaces.",intent_match_score:.93,admesh_link:"https://useadmesh.com/track?ad_id=stripe-premium&redirect=https://stripe.com",ad_id:"stripe-premium",product_id:"stripe-payments",features:["Payment Processing","Subscription Management","Fraud Prevention","Global Payments","Developer APIs"],has_free_tier:!1,integrations:["Shopify","WooCommerce","Salesforce","QuickBooks"],pricing:"2.9% + 30¢ per transaction",trial_days:0,keywords:["Payments","E-commerce","Subscriptions","APIs"]},{title:"Notion",reason:"All-in-one workspace for teams. Combine notes, docs, wikis, and project management in one beautiful, collaborative platform with AI assistance.",intent_match_score:.91,admesh_link:"https://useadmesh.com/track?ad_id=notion-premium&redirect=https://notion.so",ad_id:"notion-premium",product_id:"notion-workspace",features:["AI Writing Assistant","Team Collaboration","Database Management","Template Library","API Integration"],has_free_tier:!0,integrations:["Slack","Google Drive","Figma","GitHub"],pricing:"Free - $10/user/month",trial_days:0,keywords:["Productivity","Collaboration","Database","AI"]}],U={title:"AdMesh/Showcase",component:F,parameters:{layout:"fullscreen",docs:{description:{component:"A comprehensive showcase of AdMesh UI components with shadcn/ui inspired design."}}},tags:["autodocs"]},a={args:{recommendations:r,autoLayout:!0,showMatchScores:!0,showFeatures:!0},parameters:{backgrounds:{default:"light"}}},s={args:{recommendations:r,theme:{mode:"dark"},autoLayout:!0,showMatchScores:!0,showFeatures:!0},parameters:{backgrounds:{default:"dark"}}},o={args:{recommendations:r,theme:{mode:"light",accentColor:"#10b981"},intentType:"best_for_use_case",autoLayout:!1,showMatchScores:!0,showFeatures:!0}},n={args:{recommendations:r.slice(0,3),intentType:"compare_products",autoLayout:!1,showMatchScores:!0,showFeatures:!0}},i={render:()=>e.jsx("div",{style:{maxWidth:"400px",margin:"2rem auto"},children:e.jsx(W,{recommendation:r[0],showMatchScore:!0,showBadges:!0,maxKeywords:4})})},m={render:()=>e.jsxs("div",{style:{padding:"2rem",display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.25rem",fontWeight:"600"},children:"Primary Badges"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[e.jsx(t,{type:"Top Match",variant:"primary"}),e.jsx(t,{type:"AI Powered",variant:"primary"}),e.jsx(t,{type:"Popular",variant:"primary"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.25rem",fontWeight:"600"},children:"Success Badges"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[e.jsx(t,{type:"Free Tier",variant:"success"}),e.jsx(t,{type:"Trial Available",variant:"success"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.25rem",fontWeight:"600"},children:"Secondary Badges"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[e.jsx(t,{type:"New",variant:"secondary"}),e.jsx(t,{type:"Popular",variant:"secondary"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.25rem",fontWeight:"600"},children:"Different Sizes"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(t,{type:"Top Match",size:"sm"}),e.jsx(t,{type:"Top Match",size:"md"}),e.jsx(t,{type:"Top Match",size:"lg"})]})]})]})},d={args:{recommendations:r,autoLayout:!0,showMatchScores:!0,showFeatures:!0},parameters:{viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop",styles:{width:"1200px",height:"800px"}}},defaultViewport:"mobile"}}};var c,p,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    recommendations: premiumRecommendations,
    autoLayout: true,
    showMatchScores: true,
    showFeatures: true
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    recommendations: premiumRecommendations,
    theme: {
      mode: 'dark'
    },
    autoLayout: true,
    showMatchScores: true,
    showFeatures: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,f,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    recommendations: premiumRecommendations,
    theme: {
      mode: 'light',
      accentColor: '#10b981'
    },
    intentType: 'best_for_use_case',
    autoLayout: false,
    showMatchScores: true,
    showFeatures: true
  }
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var x,v,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    recommendations: premiumRecommendations.slice(0, 3),
    intentType: 'compare_products',
    autoLayout: false,
    showMatchScores: true,
    showFeatures: true
  }
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var _,b,M;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px',
    margin: '2rem auto'
  }}>
      <AdMeshProductCard recommendation={premiumRecommendations[0]} showMatchScore={true} showBadges={true} maxKeywords={4} />
    </div>
}`,...(M=(b=i.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var A,k,B;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <h3 style={{
        marginBottom: '1rem',
        fontSize: '1.25rem',
        fontWeight: '600'
      }}>Primary Badges</h3>
        <div style={{
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}>
          <AdMeshBadge type="Top Match" variant="primary" />
          <AdMeshBadge type="AI Powered" variant="primary" />
          <AdMeshBadge type="Popular" variant="primary" />
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '1rem',
        fontSize: '1.25rem',
        fontWeight: '600'
      }}>Success Badges</h3>
        <div style={{
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}>
          <AdMeshBadge type="Free Tier" variant="success" />
          <AdMeshBadge type="Trial Available" variant="success" />
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '1rem',
        fontSize: '1.25rem',
        fontWeight: '600'
      }}>Secondary Badges</h3>
        <div style={{
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}>
          <AdMeshBadge type="New" variant="secondary" />
          <AdMeshBadge type="Popular" variant="secondary" />
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '1rem',
        fontSize: '1.25rem',
        fontWeight: '600'
      }}>Different Sizes</h3>
        <div style={{
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
          <AdMeshBadge type="Top Match" size="sm" />
          <AdMeshBadge type="Top Match" size="md" />
          <AdMeshBadge type="Top Match" size="lg" />
        </div>
      </div>
    </div>
}`,...(B=(k=m.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var j,P,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    recommendations: premiumRecommendations,
    autoLayout: true,
    showMatchScores: true,
    showFeatures: true
  },
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px'
          }
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px'
          }
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1200px',
            height: '800px'
          }
        }
      },
      defaultViewport: 'mobile'
    }
  }
}`,...(T=(P=d.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const q=["PremiumShowcase","DarkThemeShowcase","CustomAccentCards","ComparisonView","PremiumCard","BadgeShowcase","ResponsiveShowcase"];export{m as BadgeShowcase,n as ComparisonView,o as CustomAccentCards,s as DarkThemeShowcase,i as PremiumCard,a as PremiumShowcase,d as ResponsiveShowcase,q as __namedExportsOrder,U as default};
