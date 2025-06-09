/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/overview',
        'getting-started/api-keys',
        'getting-started/quick-start',
        'getting-started/ad-formats',
        'getting-started/admesh-vs-traditional',
      ],
    },
    {
      type: 'category',
      label: 'Python SDK',
      items: [
        'python-sdk/installation',
      ],
    },
    {
      type: 'category',
      label: 'TypeScript SDK',
      items: [
        'typescript-sdk/installation',
      ],
    },
    {
      type: 'category',
      label: 'UI SDK',
      items: [
        'ui-sdk/installation',
      ],
    },
    {
      type: 'category',
      label: 'AI Agent Integration',
      items: [
        'ai-integration/overview',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/authentication',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/ai-assistant',
      ],
    },
  ],
};

module.exports = sidebars;
