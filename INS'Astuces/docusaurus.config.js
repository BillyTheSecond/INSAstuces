// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'INS\'Astuces HdF',
  tagline: 'Le site pour les étudiants de l\'INSA Hauts-de-France',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://astuces.insahdf.fr/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'INS\'Astuces HdF', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/BillyTheSecond/INSAstuces',
        },
        blog: false,
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'INS\'Astuces HdF',
        logo: {
          alt: 'Logo INS\'Astuces',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
            items: [
              {
                label: 'Linkedin',
                href: 'https://linkedin.com/',
              },
              {
                type: 'doc',
                label: 'Tuto',
                docId: 'intro', 
              }
            ]

          },
          {to: '/docs/category/associations-1/', label: 'Assos', position: 'left'},
          {to: '/docs/category/nouveaux-étudiants-1', label: 'Futur Etudiant', position: 'left'},
          {
            to: 'https://insash.fr', //change to to href to displa an icon 'open in a new tab'
            label: './insa.sh',
            position: 'right',
          },
          {
            to: 'https://bde-insa-hdf.fr', //change to to href to displa an icon 'open in a new tab'
            label: 'BDE',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Signaler un problème',
                to: 'https://github.com/BillyTheSecond/INSAstuces/issues/new/choose',
              },
            ],
          },
        ],
        copyright: `Made and hosted with love by <b>./insa.sh</b> - INS'Astuces HdF`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
