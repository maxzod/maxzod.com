// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ahmed Masoud',
  tagline: 'Software Engineer',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'maxzod', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {

          showReadingTime: true,


          blogSidebarTitle: 'كل المقالات',
          blogSidebarCount: 'ALL',


        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      textColor: '#FFFFFF',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {

        title: 'الرئيسيه',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          { to: '/about-me', label: 'عني', position: 'left' },
          { to: '/blog', label: 'المقالات', position: 'left' },

          // {
          //   type: 'localeDropdown',
          //   position: 'right',

          // },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'Github',

          //   position: 'right',
          // },
        ],
      },
      // footer: {

      // style: 'dark',
      // links: [

      //   {
      //     title: 'المزيد',
      //     items: [
      //       {
      //         label: 'المدونه',
      //         to: '/blog',
      //       }, {
      //         label: 'بيانات التواصل',
      //         to: '/contact',
      //       },

      //     ],
      //   },
      // ],
      // copyright: `جميع الحقوق محفوظه © احمد مسعود توفيق  ${new Date().getFullYear()} .`,
      // },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
