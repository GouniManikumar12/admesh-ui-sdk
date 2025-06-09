import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-CaenRy-o.js";import{c as v,A as j}from"./AdMeshLinkTracker-7Al4Klcr.js";import{A as k}from"./AdMeshProductCard-DUNDRGIQ.js";const y=({recommendations:t,theme:s,maxProducts:r=3,showMatchScores:n=!0,showFeatures:i=!0,onProductClick:o,className:d})=>{const m=u.useMemo(()=>t.slice(0,r),[t,r]),c=v("admesh-component","admesh-compare-layout",d),p=s!=null&&s.accentColor?{"--admesh-primary":s.accentColor}:void 0;return m.length===0?e.jsx("div",{className:c,children:e.jsx("div",{className:"p-8 text-center text-gray-500 dark:text-gray-400",children:e.jsx("p",{children:"No products to compare"})})}):e.jsx("div",{className:c,style:p,"data-admesh-theme":s==null?void 0:s.mode,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[e.jsx("svg",{className:"w-5 h-5 text-gray-600 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),e.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200",children:"Smart Comparison"})]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[m.length," intelligent matches found"]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:m.map((a,l)=>e.jsxs(j,{adId:a.ad_id,admeshLink:a.admesh_link,productId:a.product_id,onClick:()=>o==null?void 0:o(a.ad_id,a.admesh_link),className:"relative p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow transition-shadow",children:[e.jsxs("div",{className:"flex justify-between items-start mb-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[l===0&&e.jsx("span",{className:"text-xs font-semibold text-white bg-black px-2 py-0.5 rounded-full",children:"Top Match"}),e.jsxs("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:["#",l+1]})]}),n&&e.jsxs("div",{className:"text-xs text-gray-500 dark:text-gray-400",children:[Math.round(a.intent_match_score*100),"% match"]})]}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:a.title}),n&&e.jsxs("div",{className:"mb-3",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1",children:[e.jsx("span",{children:"Confidence"}),e.jsxs("span",{children:[Math.round(a.intent_match_score*100),"%"]})]}),e.jsx("div",{className:"w-full bg-gray-200 dark:bg-slate-600 rounded h-1.5 overflow-hidden",children:e.jsx("div",{className:"bg-black h-1.5",style:{width:`${Math.round(a.intent_match_score*100)}%`}})})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 text-xs mb-3",children:[a.pricing&&e.jsxs("span",{className:"flex items-center text-gray-600 dark:text-gray-400",children:[e.jsx("svg",{className:"h-3 w-3 mr-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"})}),a.pricing]}),a.has_free_tier&&e.jsxs("span",{className:"flex items-center px-1.5 py-0.5 bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400 rounded-full",children:[e.jsx("svg",{className:"h-3 w-3 mr-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"})}),"Free Tier"]}),a.trial_days&&a.trial_days>0&&e.jsxs("span",{className:"flex items-center text-gray-600 dark:text-gray-400",children:[e.jsx("svg",{className:"h-3 w-3 mr-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m6-10v10m-6 0h6"})}),a.trial_days,"-day trial"]})]}),i&&a.features&&a.features.length>0&&e.jsxs("div",{className:"mb-3",children:[e.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 mb-1",children:"Key Features:"}),e.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[a.features.slice(0,4).map((h,x)=>e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300",children:[e.jsx("svg",{className:"h-3 w-3 mr-0.5 inline text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),h]},x)),(a.features.length||0)>4&&e.jsxs("span",{className:"text-xs text-gray-500 dark:text-gray-400 italic",children:["+",a.features.length-4," more"]})]})]}),e.jsxs("button",{className:"w-full text-xs px-3 py-2 rounded-lg bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-1 mt-auto",children:["Visit Offer",e.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})]},a.product_id||l))}),e.jsx("div",{className:"flex items-center justify-center mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50",children:e.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500",children:[e.jsx("svg",{className:"w-3 h-3 text-indigo-500",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",clipRule:"evenodd"})}),e.jsx("span",{className:"font-medium",children:"Powered by"}),e.jsx("span",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"AdMesh"})]})})]})})};y.displayName="AdMeshCompareTable";y.__docgenInfo={description:"",methods:[],displayName:"AdMeshCompareTable",props:{recommendations:{required:!0,tsType:{name:"Array",elements:[{name:"AdMeshRecommendation"}],raw:"AdMeshRecommendation[]"},description:""},theme:{required:!1,tsType:{name:"AdMeshTheme"},description:""},maxProducts:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},showMatchScores:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showFeatures:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onProductClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(adId: string, admeshLink: string) => void",signature:{arguments:[{type:{name:"string"},name:"adId"},{type:{name:"string"},name:"admeshLink"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const w=`
/* AdMesh UI SDK Scoped Styles - Smart Recommendations Design */
.admesh-component {
  --admesh-primary: #6366f1;
  --admesh-primary-hover: #4f46e5;
  --admesh-secondary: #8b5cf6;
  --admesh-accent: #06b6d4;
  --admesh-background: #ffffff;
  --admesh-surface: #ffffff;
  --admesh-border: #e2e8f0;
  --admesh-text: #0f172a;
  --admesh-text-muted: #64748b;
  --admesh-text-light: #94a3b8;
  --admesh-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --admesh-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --admesh-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --admesh-shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --admesh-radius: 0.75rem;
  --admesh-radius-sm: 0.375rem;
  --admesh-radius-lg: 1rem;
  --admesh-radius-xl: 1.5rem;
}

.admesh-component[data-admesh-theme="dark"] {
  --admesh-background: #111827;
  --admesh-surface: #1f2937;
  --admesh-border: #374151;
  --admesh-text: #f9fafb;
  --admesh-text-muted: #9ca3af;
}

/* Layout Styles */
.admesh-layout {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: var(--admesh-text);
  background-color: var(--admesh-background);
  border-radius: var(--admesh-radius);
  padding: 1.5rem;
  box-shadow: var(--admesh-shadow);
  border: 1px solid var(--admesh-border);
}

.admesh-layout__header {
  margin-bottom: 1.5rem;
  text-align: center;
}

.admesh-layout__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--admesh-text);
  margin-bottom: 0.5rem;
}

.admesh-layout__subtitle {
  font-size: 0.875rem;
  color: var(--admesh-text-muted);
}

.admesh-layout__cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.admesh-layout__more-indicator {
  text-align: center;
  padding: 1rem;
  color: var(--admesh-text-muted);
  font-size: 0.875rem;
}

.admesh-layout__empty {
  text-align: center;
  padding: 3rem 1rem;
}

.admesh-layout__empty-content h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--admesh-text-muted);
  margin-bottom: 0.5rem;
}

.admesh-layout__empty-content p {
  font-size: 0.875rem;
  color: var(--admesh-text-muted);
}

/* Product Card Styles */
.admesh-product-card {
  background-color: var(--admesh-surface);
  border: 1px solid var(--admesh-border);
  border-radius: var(--admesh-radius);
  padding: 1.5rem;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
}

.admesh-product-card:hover {
  box-shadow: var(--admesh-shadow-lg);
  transform: translateY(-2px);
  border-color: var(--admesh-primary);
}

.admesh-product-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.admesh-product-card__title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--admesh-text);
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.admesh-product-card__reason {
  font-size: 0.875rem;
  color: var(--admesh-text-muted);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.admesh-product-card__match-score {
  margin-bottom: 1rem;
}

.admesh-product-card__match-score-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: var(--admesh-text-muted);
  margin-bottom: 0.25rem;
}

.admesh-product-card__match-score-bar {
  width: 100%;
  height: 0.375rem;
  background-color: var(--admesh-border);
  border-radius: var(--admesh-radius-sm);
  overflow: hidden;
}

.admesh-product-card__match-score-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--admesh-primary), #8b5cf6);
  border-radius: var(--admesh-radius-sm);
  transition: width 0.3s ease-in-out;
}

.admesh-product-card__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.admesh-product-card__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: var(--admesh-primary);
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: var(--admesh-radius-sm);
}

.admesh-product-card__badge--secondary {
  background-color: var(--admesh-secondary);
}

.admesh-product-card__keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

.admesh-product-card__keyword {
  padding: 0.125rem 0.375rem;
  background-color: var(--admesh-border);
  color: var(--admesh-text-muted);
  font-size: 0.75rem;
  border-radius: var(--admesh-radius-sm);
}

.admesh-product-card__footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
}

.admesh-product-card__button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(90deg, var(--admesh-primary), var(--admesh-primary-hover));
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  border-radius: var(--admesh-radius);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
}

.admesh-product-card__button:hover {
  transform: translateY(-1px);
  box-shadow: var(--admesh-shadow-lg);
}

/* Utility Classes */
.admesh-text-xs { font-size: 0.75rem; }
.admesh-text-sm { font-size: 0.875rem; }
.admesh-text-base { font-size: 1rem; }
.admesh-text-lg { font-size: 1.125rem; }
.admesh-text-xl { font-size: 1.25rem; }

.admesh-font-medium { font-weight: 500; }
.admesh-font-semibold { font-weight: 600; }
.admesh-font-bold { font-weight: 700; }

.admesh-text-muted { color: var(--admesh-text-muted); }

/* Responsive Design */
@media (max-width: 768px) {
  .admesh-layout {
    padding: 1rem;
  }
  
  .admesh-layout__cards-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .admesh-product-card {
    padding: 1rem;
  }
}
`;let f=!1;const N=()=>{u.useEffect(()=>{if(f)return;const t=document.createElement("style");return t.id="admesh-ui-sdk-styles",t.textContent=w,document.getElementById("admesh-ui-sdk-styles")||(document.head.appendChild(t),f=!0),()=>{const s=document.getElementById("admesh-ui-sdk-styles");s&&document.head.contains(s)&&(document.head.removeChild(s),f=!1)}},[])},M=(t,s,r)=>{if(!r&&s)switch(s){case"compare_products":return"compare";case"best_for_use_case":case"trial_demo":case"budget_conscious":return"cards";default:return"cards"}const n=t.length;if(n>=2&&n<=4){const i=t.some(d=>d.features&&d.features.length>0),o=t.some(d=>d.pricing);if(i||o)return"compare"}return"cards"},b=({recommendations:t,intentType:s,theme:r,maxDisplayed:n=6,showMatchScores:i=!0,showFeatures:o=!0,autoLayout:d=!0,onProductClick:m,onTrackView:c,className:p})=>{N();const a=u.useMemo(()=>t.slice(0,n),[t,n]),l=u.useMemo(()=>M(a,s,d),[a,s,d]),h=v("admesh-component",p),x=r!=null&&r.accentColor?{"--admesh-primary":r.accentColor}:void 0;return a.length===0?e.jsx("div",{className:h,children:e.jsx("div",{className:"admesh-layout__empty",children:e.jsxs("div",{className:"admesh-layout__empty-content",children:[e.jsx("div",{className:"flex items-center justify-center mb-3",children:e.jsx("svg",{className:"w-8 h-8 text-indigo-500",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",clipRule:"evenodd"})})}),e.jsx("h3",{className:"admesh-text-lg admesh-font-semibold admesh-text-muted",children:"No smart recommendations found"}),e.jsx("p",{className:"admesh-text-sm admesh-text-muted",children:"Try refining your search or check back later for new matches."})]})})}):e.jsx("div",{className:h,style:x,"data-admesh-theme":r==null?void 0:r.mode,children:l==="compare"?e.jsx(y,{recommendations:a,theme:r,maxProducts:Math.min(a.length,4),showMatchScores:i,showFeatures:o,onProductClick:m}):e.jsx("div",{className:"space-y-4",children:a.map((g,_)=>e.jsx(k,{recommendation:g,theme:r,showMatchScore:i,showBadges:!0,maxKeywords:3,onClick:m,onTrackView:c},g.product_id||g.ad_id||_))})})};b.displayName="AdMeshLayout";b.__docgenInfo={description:"",methods:[],displayName:"AdMeshLayout",props:{recommendations:{required:!0,tsType:{name:"Array",elements:[{name:"AdMeshRecommendation"}],raw:"AdMeshRecommendation[]"},description:""},intentType:{required:!1,tsType:{name:"union",raw:`| 'compare_products' 
| 'best_for_use_case' 
| 'trial_demo' 
| 'budget_conscious'`,elements:[{name:"literal",value:"'compare_products'"},{name:"literal",value:"'best_for_use_case'"},{name:"literal",value:"'trial_demo'"},{name:"literal",value:"'budget_conscious'"}]},description:""},theme:{required:!1,tsType:{name:"AdMeshTheme"},description:""},maxDisplayed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},showMatchScores:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showFeatures:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},autoLayout:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onProductClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(adId: string, admeshLink: string) => void",signature:{arguments:[{type:{name:"string"},name:"adId"},{type:{name:"string"},name:"admeshLink"}],return:{name:"void"}}},description:""},onTrackView:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: TrackingData) => void",signature:{arguments:[{type:{name:"TrackingData"},name:"data"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{b as A};
