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
//favicon: '', (아이콘)

 // Github Repository
  organizationName: 'wisesaturn', // Usually your GitHub org/user name.
  projectName: 'TIL', // Usually your repo name.

  // internalization
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko']
  },

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
        // logo: {
        //   alt: 'Site Logo',
        //   src: 'img/Mogakso.png',
        //   href: 'https://MoGakSo-Ajou.github.io/jaehan/',
        //   target: '_self',
        //   width: 32,
        //   height: 32,
        // },
        items: [
          {
            type: 'doc',
            docId: '/category/coding-test',
            position: 'left',
            label: 'Coding Test',
          },
          {
            type: 'doc',
            docId: '/category/cs',
            position: 'left',
            label: 'CS',
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
