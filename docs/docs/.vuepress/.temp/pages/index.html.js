export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/img/heroImage.jpg\",\"heroHeight\":280,\"heroText\":\"Elephant4Vue\",\"tagline\":\"整合开发部分前端工程化的方案从而落实到日常项目\",\"actions\":[{\"text\":\"快速开始\",\"link\":\"/guide/quick-start.md\",\"type\":\"primary\"},{\"text\":\"仓库\",\"link\":\"https://github.com/nnjjjcc/Elephant4Vue\",\"type\":\"secondary\"}],\"footer\":\"<p>&copy; 2023 Elephant4Vue. All rights reserved.</p>\",\"footerHtml\":true},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"readme.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
