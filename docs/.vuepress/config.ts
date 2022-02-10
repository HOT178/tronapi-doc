import { defineUserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import { navbar, sidebar, appConfig } from "./configs";

export default defineUserConfig<DefaultThemeOptions>({
  base: "/",
  lang: "zh",
  title: appConfig.title,
  description: appConfig.description,
  head: [
    ["link", { rel: "icon", href: appConfig.favicon }],
    ["script", { src: "/js/crisp.js" }],
    ["meta", { name: 'description',  content: appConfig.description }],
    ["meta", { name: 'keywords',  content: appConfig.keywords }]
  ],
  themeConfig: {
    logo: appConfig.logo,
    repo: appConfig.links.repo,
    editLink: false,
    lastUpdated: false,
    docsDir: "docs",
    contributors: false,
    locales: {
      "/": {
        navbar: navbar.zh,
        sidebar: sidebar.zh,
        sidebarDepth: 1,
        tip: "说明",
        warning: "注意",
        danger: "警告",
        backToHome: "返回首页",
      },
    },
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索',
          },
        },
      },
    ]
  ]
});
