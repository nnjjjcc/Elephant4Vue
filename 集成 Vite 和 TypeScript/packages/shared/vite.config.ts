import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [/lodash.*/],

      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量。即使不设置，构建工具也会为我们自动生成。个人倾向于不设置
        /*
        globals: {
          lodash: 'lodash'
        }
        */
      },
    },
    lib: {
      entry: './src/index.ts',
      name: 'Elephant4VueShared',
      fileName: 'elephant4vue-shared',
    },
  },
});
