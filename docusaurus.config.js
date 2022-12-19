// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jaehan TIL',
  tagline: `제가 직접 공부한 내용들을 정리해보았습니다.`,
  url: 'https://wisesaturn.github.io',
  baseUrl: '/TIL/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

 // Github Repository
  organizationName: 'wisesaturn', // Usually your GitHub org/user name.
  projectName: 'TIL', // Usually your repo name.

  // internalization
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko']
  },

  themes: ['@docusaurus/theme-live-codeblock'],

  plugins: [
    require.resolve('docusaurus-lunr-search'),
    'docusaurus-plugin-sass',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        
        theme: {
          customCss: require.resolve('./src/css/global.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Jaehan의 TIL',
        logo: {
          alt: 'Site Logo',
          src: 'img/books.png',
          href: 'https://wisesaturn.github.io/TIL/',
          target: '_self',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'doc',
            docId: '/category/cs',
            position: 'left',
            label: 'CS',
          },
          {
            type: 'doc',
            docId: '/category/algorithm',
            position: 'left',
            label: 'Algorithm',
          },
          {
            type: 'doc',
            docId: '/category/frontend',
            position: 'left',
            label: 'Frontend',
          },
          { 
            to: 'https://github.com/wisesaturn', 
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Study',
            items: [
              {
                label: 'MoGakSo',
                to: 'https://mogakso-ajou.github.io/jaehan/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'docusaurus Docs',
                to: 'https://docusaurus.io/docs',
              },
              {
                label: 'Blog',
                to: 'https://wisesaturn.github.io/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wisesaturn',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jaehan's TIL, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
