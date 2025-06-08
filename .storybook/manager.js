import { addons, types } from '@storybook/manager-api';
import { create } from '@storybook/theming';

// Custom theme
const theme = create({
  base: 'light',
  brandTitle: 'AdMesh UI SDK',
  brandUrl: 'https://useadmesh.com',
  brandImage: undefined,
  brandTarget: '_self',
});

// Configure addons
addons.setConfig({
  theme,
  panelPosition: 'bottom',
  selectedPanel: 'storybook/docs/panel',
});

// Add custom toolbar addon for documentation links
addons.register('admesh/docs-links', () => {
  addons.add('admesh/docs-links', {
    type: types.TOOL,
    title: 'Documentation Links',
    render: () => {
      // Create a dropdown or button group for documentation links
      const container = document.createElement('div');
      container.style.cssText = `
        display: flex;
        align-items: center;
        gap: 8px;
        margin-right: 8px;
      `;
      
      // Documentation link
      const docsLink = document.createElement('a');
      docsLink.href = 'https://gounimanikumar12.github.io/admesh-docs/';
      docsLink.target = '_blank';
      docsLink.rel = 'noopener noreferrer';
      docsLink.textContent = '📚 Docs';
      docsLink.style.cssText = `
        color: #0066cc;
        text-decoration: none;
        font-size: 14px;
        padding: 6px 12px;
        border: 1px solid #0066cc;
        border-radius: 4px;
        background: white;
        transition: all 0.2s;
      `;
      docsLink.onmouseover = () => {
        docsLink.style.background = '#0066cc';
        docsLink.style.color = 'white';
      };
      docsLink.onmouseout = () => {
        docsLink.style.background = 'white';
        docsLink.style.color = '#0066cc';
      };
      
      // Dashboard link
      const dashboardLink = document.createElement('a');
      dashboardLink.href = 'https://useadmesh.com';
      dashboardLink.target = '_blank';
      dashboardLink.rel = 'noopener noreferrer';
      dashboardLink.textContent = '🚀 Dashboard';
      dashboardLink.style.cssText = `
        color: #28a745;
        text-decoration: none;
        font-size: 14px;
        padding: 6px 12px;
        border: 1px solid #28a745;
        border-radius: 4px;
        background: white;
        transition: all 0.2s;
      `;
      dashboardLink.onmouseover = () => {
        dashboardLink.style.background = '#28a745';
        dashboardLink.style.color = 'white';
      };
      dashboardLink.onmouseout = () => {
        dashboardLink.style.background = 'white';
        dashboardLink.style.color = '#28a745';
      };
      
      container.appendChild(docsLink);
      container.appendChild(dashboardLink);
      
      return container;
    },
  });
});
