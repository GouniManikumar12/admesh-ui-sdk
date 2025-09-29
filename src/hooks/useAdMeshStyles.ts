import { useEffect } from 'react';

// Complete CSS content as a string - this will be injected automatically
const ADMESH_STYLES = `
/* AdMesh UI SDK - Complete Self-Contained Styles */

/* CSS Reset for AdMesh components */
.admesh-component, .admesh-component * {
  box-sizing: border-box;
}

/* CSS Variables - Black/White Color Scheme */
.admesh-component {
  --admesh-primary: #000000;
  --admesh-primary-hover: #333333;
  --admesh-secondary: #666666;
  --admesh-accent: #000000;
  --admesh-background: #ffffff;
  --admesh-surface: #ffffff;
  --admesh-border: #e5e7eb;
  --admesh-text: #000000;
  --admesh-text-muted: #666666;
  --admesh-text-light: #999999;
  --admesh-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --admesh-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --admesh-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --admesh-shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --admesh-radius: 0.5rem;
  --admesh-radius-sm: 0.25rem;
  --admesh-radius-lg: 0.75rem;
  --admesh-radius-xl: 1rem;
}

.admesh-component[data-admesh-theme="dark"] {
  --admesh-primary: #ffffff;
  --admesh-primary-hover: #e5e7eb;
  --admesh-secondary: #9ca3af;
  --admesh-accent: #ffffff;
  --admesh-background: #000000;
  --admesh-surface: #111111;
  --admesh-border: #333333;
  --admesh-text: #ffffff;
  --admesh-text-muted: #9ca3af;
  --admesh-text-light: #666666;
  --admesh-shadow: 0 1px 3px 0 rgb(255 255 255 / 0.1), 0 1px 2px -1px rgb(255 255 255 / 0.1);
  --admesh-shadow-md: 0 4px 6px -1px rgb(255 255 255 / 0.1), 0 2px 4px -2px rgb(255 255 255 / 0.1);
  --admesh-shadow-lg: 0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1);
  --admesh-shadow-xl: 0 20px 25px -5px rgb(255 255 255 / 0.1), 0 8px 10px -6px rgb(255 255 255 / 0.1);
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
  /* Consistent width: 100% for all layouts except ecommerce */
  width: 100%;
}

/* Ecommerce layout exception */
.admesh-layout--ecommerce {
  width: auto;
}

/* Citation Unit Styles */
.admesh-citation-unit {
  width: 100%;
}

/* Inline Recommendation Styles */
.admesh-inline-recommendation {
  width: 100%;
}

/* Simple Ad Styles */
.admesh-simple-ad {
  width: 100%;
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
  /* Consistent width: 100% for product cards */
  width: 100%;
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
  background: var(--admesh-primary);
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

/* Dark mode specific enhancements */
.admesh-component[data-admesh-theme="dark"] .admesh-product-card__keyword {
  background-color: #4b5563;
  color: #d1d5db;
}

.admesh-component[data-admesh-theme="dark"] .admesh-product-card:hover {
  border-color: var(--admesh-primary);
  background-color: #374151;
}

.admesh-component[data-admesh-theme="dark"] .admesh-product-card__button:hover {
  background: var(--admesh-primary-hover);
}

.admesh-product-card__footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
}

/* Mobile-specific sidebar improvements */
@media (max-width: 640px) {
  .admesh-sidebar {
    /* Ensure proper mobile viewport handling */
    height: 100vh !important;
    height: 100dvh !important; /* Dynamic viewport height for mobile browsers */
    max-height: 100vh !important;
    max-height: 100dvh !important;
    width: 100vw !important;
    max-width: 90vw !important;
    overflow: hidden !important;
  }

  .admesh-sidebar.relative {
    height: 100% !important;
    width: 100% !important;
    max-width: 100% !important;
  }

  /* Improve touch scrolling */
  .admesh-sidebar .overflow-y-auto {
    -webkit-overflow-scrolling: touch !important;
    overscroll-behavior: contain !important;
    scroll-behavior: smooth !important;
  }

  /* Prevent body scroll when sidebar is open */
  body:has(.admesh-sidebar[data-mobile-open="true"]) {
    overflow: hidden !important;
    position: fixed !important;
    width: 100% !important;
  }
}

/* Tablet improvements */
@media (min-width: 641px) and (max-width: 1024px) {
  .admesh-sidebar {
    max-width: 400px !important;
  }
}

/* Mobile responsiveness improvements for all components */
@media (max-width: 640px) {
  /* Product cards mobile optimization */
  .admesh-card {
    padding: 0.75rem !important;
    margin-bottom: 0.75rem !important;
  }

  /* Inline recommendations mobile optimization */
  .admesh-inline-recommendation {
    padding: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  /* Conversation summary mobile optimization */
  .admesh-conversation-summary {
    padding: 1rem !important;
  }

  /* Percentage text mobile improvements */
  .admesh-component .text-xs {
    font-size: 0.75rem !important;
    line-height: 1rem !important;
  }

  .admesh-component .text-sm {
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
  }

  /* Button mobile improvements */
  .admesh-component button {
    padding: 0.375rem 0.75rem !important;
    font-size: 0.75rem !important;
    min-height: 2rem !important;
    touch-action: manipulation !important;
  }

  /* Badge mobile improvements */
  .admesh-component .rounded-full {
    padding: 0.25rem 0.5rem !important;
    font-size: 0.625rem !important;
    line-height: 1rem !important;
  }

  /* Progress bar mobile improvements */
  .admesh-component .bg-gray-200,
  .admesh-component .bg-slate-600 {
    height: 0.25rem !important;
  }

  /* Flex layout mobile improvements */
  .admesh-component .flex {
    flex-wrap: wrap !important;
  }

  .admesh-component .gap-2 {
    gap: 0.375rem !important;
  }

  .admesh-component .gap-3 {
    gap: 0.5rem !important;
  }
}

.admesh-product-card__button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--admesh-primary);
  color: var(--admesh-background);
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

/* Comparison Table Styles */
.admesh-compare-table {
  width: 100%;
  border-collapse: collapse;
  background-color: var(--admesh-surface);
  border: 1px solid var(--admesh-border);
  border-radius: var(--admesh-radius);
  overflow: hidden;
}

.admesh-compare-table th,
.admesh-compare-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--admesh-border);
}

.admesh-compare-table th {
  background-color: var(--admesh-background);
  font-weight: 600;
  color: var(--admesh-text);
  font-size: 0.875rem;
}

.admesh-compare-table td {
  color: var(--admesh-text);
  font-size: 0.875rem;
}

.admesh-compare-table tr:hover {
  background-color: var(--admesh-border);
}

/* Dark mode table enhancements */
.admesh-component[data-admesh-theme="dark"] .admesh-compare-table th {
  background-color: #374151;
}

.admesh-component[data-admesh-theme="dark"] .admesh-compare-table tr:hover {
  background-color: #4b5563;
}

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

  .admesh-compare-table {
    font-size: 0.75rem;
  }

  .admesh-compare-table th,
  .admesh-compare-table td {
    padding: 0.5rem;
  }
}

/* Essential Utility Classes for Self-Contained SDK - High Specificity */
.admesh-component .relative { position: relative !important; }
.admesh-component .absolute { position: absolute !important; }
.admesh-component .flex { display: flex !important; }
.admesh-component .inline-flex { display: inline-flex !important; }
.admesh-component .grid { display: grid !important; }
.admesh-component .hidden { display: none !important; }
.admesh-component .block { display: block !important; }
.admesh-component .inline-block { display: inline-block !important; }

/* Flexbox utilities */
.admesh-component .flex-col { flex-direction: column !important; }
.admesh-component .flex-row { flex-direction: row !important; }
.admesh-component .flex-wrap { flex-wrap: wrap !important; }
.admesh-component .items-center { align-items: center !important; }
.admesh-component .items-start { align-items: flex-start !important; }
.admesh-component .items-end { align-items: flex-end !important; }
.admesh-component .justify-center { justify-content: center !important; }
.admesh-component .justify-between { justify-content: space-between !important; }
.admesh-component .justify-end { justify-content: flex-end !important; }
.admesh-component .flex-1 { flex: 1 1 0% !important; }
.admesh-component .flex-shrink-0 { flex-shrink: 0 !important; }

/* Grid utilities */
.admesh-component .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.admesh-component .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.admesh-component .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

/* Spacing utilities */
.admesh-component .gap-1 { gap: 0.25rem; }
.admesh-component .gap-2 { gap: 0.5rem; }
.admesh-component .gap-3 { gap: 0.75rem; }
.admesh-component .gap-4 { gap: 1rem; }
.admesh-component .gap-6 { gap: 1.5rem; }
.admesh-component .gap-8 { gap: 2rem; }

/* Padding utilities */
.admesh-component .p-1 { padding: 0.25rem; }
.admesh-component .p-2 { padding: 0.5rem; }
.admesh-component .p-3 { padding: 0.75rem; }
.admesh-component .p-4 { padding: 1rem; }
.admesh-component .p-5 { padding: 1.25rem; }
.admesh-component .p-6 { padding: 1.5rem; }
.admesh-component .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
.admesh-component .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
.admesh-component .px-4 { padding-left: 1rem; padding-right: 1rem; }
.admesh-component .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
.admesh-component .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.admesh-component .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
.admesh-component .pt-2 { padding-top: 0.5rem; }
.admesh-component .pt-3 { padding-top: 0.75rem; }
.admesh-component .pb-2 { padding-bottom: 0.5rem; }
.admesh-component .pb-3 { padding-bottom: 0.75rem; }

/* Margin utilities */
.admesh-component .m-0 { margin: 0; }
.admesh-component .mb-1 { margin-bottom: 0.25rem; }
.admesh-component .mb-2 { margin-bottom: 0.5rem; }
.admesh-component .mb-3 { margin-bottom: 0.75rem; }
.admesh-component .mb-4 { margin-bottom: 1rem; }
.admesh-component .mb-6 { margin-bottom: 1.5rem; }
.admesh-component .mt-1 { margin-top: 0.25rem; }
.admesh-component .mt-2 { margin-top: 0.5rem; }
.admesh-component .mt-4 { margin-top: 1rem; }
.admesh-component .mt-6 { margin-top: 1.5rem; }
.admesh-component .mt-auto { margin-top: auto; }
.admesh-component .ml-1 { margin-left: 0.25rem; }
.admesh-component .mr-1 { margin-right: 0.25rem; }
.admesh-component .mr-2 { margin-right: 0.5rem; }

/* Width and height utilities */
.admesh-component .w-2 { width: 0.5rem; }
.admesh-component .w-3 { width: 0.75rem; }
.admesh-component .w-4 { width: 1rem; }
.admesh-component .w-5 { width: 1.25rem; }
.admesh-component .w-6 { width: 1.5rem; }
.admesh-component .w-full { width: 100%; }
.admesh-component .w-fit { width: fit-content; }
.admesh-component .h-2 { height: 0.5rem; }
.admesh-component .h-3 { height: 0.75rem; }
.admesh-component .h-4 { height: 1rem; }
.admesh-component .h-5 { height: 1.25rem; }
.admesh-component .h-6 { height: 1.5rem; }
.admesh-component .h-full { height: 100%; }
.admesh-component .min-w-0 { min-width: 0px; }

/* Border utilities */
.admesh-component .border { border-width: 1px; }
.admesh-component .border-t { border-top-width: 1px; }
.admesh-component .border-gray-100 { border-color: #f3f4f6; }
.admesh-component .border-gray-200 { border-color: #e5e7eb; }
.admesh-component .border-gray-300 { border-color: #d1d5db; }
.admesh-component .border-blue-200 { border-color: #bfdbfe; }
.admesh-component .border-green-200 { border-color: #bbf7d0; }

/* Border radius utilities */
.admesh-component .rounded { border-radius: 0.25rem !important; }
.admesh-component .rounded-md { border-radius: 0.375rem !important; }
.admesh-component .rounded-lg { border-radius: 0.5rem !important; }
.admesh-component .rounded-xl { border-radius: 0.75rem !important; }
.admesh-component .rounded-full { border-radius: 9999px !important; }

/* Background utilities */
.admesh-component .bg-white { background-color: #ffffff; }
.admesh-component .bg-gray-50 { background-color: #f9fafb; }
.admesh-component .bg-gray-100 { background-color: #f3f4f6; }
.admesh-component .bg-blue-50 { background-color: #eff6ff; }
.admesh-component .bg-blue-100 { background-color: #dbeafe; }
.admesh-component .bg-green-100 { background-color: #dcfce7; }
.admesh-component .bg-green-500 { background-color: #22c55e; }
.admesh-component .bg-blue-500 { background-color: #3b82f6; }

/* Solid backgrounds - no gradients for minimal design */
.admesh-component .bg-primary { background-color: var(--admesh-primary); }
.admesh-component .bg-secondary { background-color: var(--admesh-secondary); }
.admesh-component .bg-surface { background-color: var(--admesh-surface); }
.admesh-component .bg-background { background-color: var(--admesh-background); }

/* Text utilities */
.admesh-component .text-xs { font-size: 0.75rem; line-height: 1rem; }
.admesh-component .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
.admesh-component .text-base { font-size: 1rem; line-height: 1.5rem; }
.admesh-component .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.admesh-component .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.admesh-component .font-medium { font-weight: 500; }
.admesh-component .font-semibold { font-weight: 600; }
.admesh-component .font-bold { font-weight: 700; }
.admesh-component .leading-relaxed { line-height: 1.625; }

/* Text colors */
.admesh-component .text-white { color: #ffffff; }
.admesh-component .text-gray-400 { color: #9ca3af; }
.admesh-component .text-gray-500 { color: #6b7280; }
.admesh-component .text-gray-600 { color: #4b5563; }
.admesh-component .text-gray-700 { color: #374151; }
.admesh-component .text-gray-800 { color: #1f2937; }
.admesh-component .text-blue-600 { color: #2563eb; }
.admesh-component .text-blue-700 { color: #1d4ed8; }
.admesh-component .text-green-700 { color: #15803d; }

/* Shadow utilities */
.admesh-component .shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
.admesh-component .shadow { box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); }
.admesh-component .shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
.admesh-component .shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); }
.admesh-component .shadow-xl { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); }

/* Transition utilities */
.admesh-component .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
.admesh-component .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
.admesh-component .duration-200 { transition-duration: 200ms; }
.admesh-component .duration-300 { transition-duration: 300ms; }

/* Transform utilities */
.admesh-component .hover\\:-translate-y-1:hover { transform: translateY(-0.25rem); }
.admesh-component .hover\\:scale-105:hover { transform: scale(1.05); }

/* Hover utilities */
.admesh-component .hover\\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); }
.admesh-component .hover\\:bg-gray-100:hover { background-color: #f3f4f6; }
.admesh-component .hover\\:text-blue-800:hover { color: #1e40af; }

/* Cursor utilities */
.admesh-component .cursor-pointer { cursor: pointer; }

/* Overflow utilities */
.admesh-component .overflow-hidden { overflow: hidden; }
.admesh-component .truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

/* Text decoration */
.admesh-component .underline { text-decoration-line: underline; }

/* Whitespace */
.admesh-component .whitespace-nowrap { white-space: nowrap; }

/* Dark mode utilities */
@media (prefers-color-scheme: dark) {
  .admesh-component .dark\\:bg-slate-800 { background-color: #1e293b; }
  .admesh-component .dark\\:bg-slate-900 { background-color: #0f172a; }
  .admesh-component .dark\\:border-slate-700 { border-color: #334155; }
  .admesh-component .dark\\:text-white { color: #ffffff; }
  .admesh-component .dark\\:text-gray-200 { color: #e5e7eb; }
  .admesh-component .dark\\:text-gray-300 { color: #d1d5db; }
  .admesh-component .dark\\:text-gray-400 { color: #9ca3af; }
  .admesh-component .dark\\:text-blue-400 { color: #60a5fa; }
}

/* Responsive utilities */
@media (min-width: 640px) {
  .admesh-component .sm\\:p-5 { padding: 1.25rem; }
  .admesh-component .sm\\:text-base { font-size: 1rem; line-height: 1.5rem; }
  .admesh-component .sm\\:text-lg { font-size: 1.125rem; line-height: 1.75rem; }
  .admesh-component .sm\\:flex-row { flex-direction: row; }
  .admesh-component .sm\\:items-center { align-items: center; }
  .admesh-component .sm\\:justify-between { justify-content: space-between; }
}

@media (min-width: 768px) {
  .admesh-component .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (min-width: 1024px) {
  .admesh-component .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .admesh-component .lg\\:col-span-1 { grid-column: span 1 / span 1; }
}
`;

let stylesInjected = false;

export const useAdMeshStyles = () => {
  useEffect(() => {
    if (stylesInjected) return;

    // Create and inject styles
    const styleElement = document.createElement('style');
    styleElement.id = 'admesh-ui-sdk-styles';
    styleElement.textContent = ADMESH_STYLES;
    
    // Check if styles are already injected
    if (!document.getElementById('admesh-ui-sdk-styles')) {
      document.head.appendChild(styleElement);
      stylesInjected = true;
    }

    // Cleanup function
    return () => {
      const existingStyle = document.getElementById('admesh-ui-sdk-styles');
      if (existingStyle && document.head.contains(existingStyle)) {
        document.head.removeChild(existingStyle);
        stylesInjected = false;
      }
    };
  }, []);
};
