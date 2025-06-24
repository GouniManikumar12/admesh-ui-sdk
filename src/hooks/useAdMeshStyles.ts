import { useEffect } from 'react';

// CSS content as a string - this will be injected automatically
const ADMESH_STYLES = `
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
  --admesh-text-light: #6b7280;
  --admesh-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3);
  --admesh-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3);
  --admesh-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3);
  --admesh-shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3);
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
  background: linear-gradient(90deg, var(--admesh-primary-hover), var(--admesh-primary));
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
