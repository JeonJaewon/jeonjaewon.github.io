// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "whateverlogs",

  // Set the production url of your site here
  url: "https://jeonjaewon.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  deploymentBranch: "gh-pages",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "JeonJaewon", // Usually your GitHub org/user name.
  projectName: "jeonjaewon.github.io", // Usually your repo name.
  trailingSlash: false,

  favicon: "/img/favicon-48.svg",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        blog: {
          routeBasePath: "/blog",
          blogTitle: "Blog",
          showReadingTime: false,
        },
        gtag: {
          trackingID: "G-0NXZ4Z35W5",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      metadata: [
        {
          name: "keywords",
          content: "programming, frontend, web, javascript, typescript",
        },
        {
          name: "description",
          content: "JeonJaewon's blog",
        },
      ],
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "whateverlogs",
        items: [
          {
            href: "/blog",
            label: "Blog",
          },
          {
            href: "/docs/intro",
            label: "Docs",
          },
          {
            href: "https://github.com/JeonJaewon",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
