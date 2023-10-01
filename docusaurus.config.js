// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "whateverlogs",

  // Set the production url of your site here
  url: "https://jeonjaewon.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/jeonjaewon.github.io/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "JeonJaewon", // Usually your GitHub org/user name.
  projectName: "jeonjaewon.github.io", // Usually your repo name.
  trailingSlash: false,

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
          routeBasePath: "/",
          blogTitle: "Blog",
          showReadingTime: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "whateverlogs",
        items: [
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
