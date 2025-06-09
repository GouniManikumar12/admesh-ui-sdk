// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AdMesh SDK Documentation',
  tagline: 'AI Agent Integration Guide for Product Recommendations',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://admesh-ui-sdk.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // Vercel deployment config
  organizationName: 'GouniManikumar12',
  projectName: 'admesh-ui-sdk',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve docs at the root
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/GouniManikumar12/admesh-ui-sdk/tree/main/docs/docs/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/admesh-social-card.jpg',
      navbar: {
        title: 'AdMesh',
        logo: {
          alt: 'AdMesh Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: process.env.NODE_ENV === 'development' ? 'http://localhost:6006' : '/storybook',
            label: 'Storybook',
            position: 'left',
            target: process.env.NODE_ENV === 'development' ? '_blank' : '_self',
          },
          {
            href: 'https://useadmesh.com',
            label: 'Dashboard',
            position: 'right',
          },
          {
            href: 'https://github.com/GouniManikumar12/admesh-python',
            label: 'Python SDK',
            position: 'right',
          },
          {
            href: 'https://github.com/GouniManikumar12/admesh-typescript',
            label: 'TypeScript SDK',
            position: 'right',
          },
          {
            href: 'https://github.com/GouniManikumar12/admesh-ui-sdk',
            label: 'UI SDK',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started/overview',
              },
              {
                label: 'Python SDK',
                to: '/python-sdk/installation',
              },
              {
                label: 'TypeScript SDK',
                to: '/typescript-sdk/installation',
              },
              {
                label: 'UI SDK',
                to: '/ui-sdk/installation',
              },
            ],
          },
          {
            title: 'SDKs',
            items: [
              {
                label: 'Python SDK',
                href: 'https://github.com/GouniManikumar12/admesh-python',
              },
              {
                label: 'TypeScript SDK',
                href: 'https://github.com/GouniManikumar12/admesh-typescript',
              },
              {
                label: 'UI SDK',
                href: 'https://github.com/GouniManikumar12/admesh-ui-sdk',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'AdMesh Dashboard',
                href: 'https://useadmesh.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/GouniManikumar12',
              },
              {
                label: 'Support',
                href: 'mailto:support@useadmesh.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AdMesh. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'python', 'typescript', 'javascript'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'YOUR_APP_ID',
        // Public API key: it is safe to commit it
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'admesh-docs',
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push
        externalUrlRegex: 'external\\.com|domain\\.com',
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl.
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
        // Optional: Algolia search parameters
        searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
