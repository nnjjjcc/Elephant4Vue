import { defaultTheme, defineUserConfig } from 'vuepress';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Elephant4Vue 文档',
  description: 'Elephant4Vue - 整合开发部分前端工程化的方案从而落实到日常项目',
  base: '/',
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '指南',
        children: ['/guide/quick-start.md'],
      },
    ],
    repo: 'https://github.com/nnjjjcc/Elephant4Vue',
    repoLabel: '仓库',
  }),
});
