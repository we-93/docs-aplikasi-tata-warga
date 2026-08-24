// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tutorial Tata Warga',
  tagline: 'Halaman ini akan memberikan panduan menggunakan sistem Tata Warga, silakan akses berdasarkan kategori. Terdapat juga Chat Tata Ai di bawah pojok kiri untuk menanyakan apapun tentang Tata Warga.',
  favicon: 'img/Favicon tata warga.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Edit URL removed
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Edit URL removed
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ["en"],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/LOGO TATA WARGA CLEAN.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Tata Warga Logo',
          src: 'img/LOGO TATA WARGA CLEAN.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'html',
            position: 'right',
            value: '<div style="order: 99; display: flex; align-items: center; margin-left: 8px;"><a href="https://tatawarga.web.id/auth/login" class="navbar__item navbar__link login-btn" style="display:flex; align-items:center; gap:8px; background-color:var(--ifm-color-primary); color:white; border-radius:20px; padding:6px 16px; font-weight:600;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg> Login</a></div>',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Tata Warga Logo',
          src: 'img/LOGO TATA WARGA CLEAN.png',
          href: 'https://tatawarga.net',
        },
        links: [
          {
            title: 'Navigasi',
            items: [
              { label: 'Dashboard', href: 'https://tatawarga.net/dashboard/rt' },
              { label: 'Fitur', href: 'https://tatawarga.net/#fitur' },
              { label: 'Harga', href: 'https://tatawarga.net/#harga' },
              { label: 'Tutorial', to: '/' },
            ],
          },
          {
            title: 'Hubungi Kami',
            items: [
              { label: 'Email: info@tatawarga.net', href: 'mailto:info@tatawarga.net' },
              { label: 'WhatsApp: +62 859 4544 1445', href: 'https://api.whatsapp.com/send?phone=6285945441445&text=Halo%20admin%2C%20saya%20ingin%20informasi%20terkait%20Tata%20Warga....' },
              { label: 'Instagram: @tatawarga.id', href: 'https://www.instagram.com/tatawarga.id/' },
              { label: 'YouTube: Tata Warga', href: 'https://www.youtube.com/@TataWarga' },
            ],
          },
          {
            title: 'Legalitas',
            items: [
              { label: 'Kebijakan Privasi', href: 'https://tatawarga.net/privacy' },
              { label: 'Syarat Ketentuan', href: 'https://tatawarga.net/terms' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Tata Warga. Hak Cipta Dilindungi.<br/><span style="font-size: 0.8rem; opacity: 0.8; margin-top: 10px; display: inline-block;">Solusi cerdas untuk administrasi RT modern yang terintegrasi dengan WhatsApp dan teknologi AI.</span>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
