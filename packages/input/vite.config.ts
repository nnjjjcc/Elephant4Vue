import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'Elephant4VueInput',
      fileName: 'elephant4vue-input',
    },
    rollupOptions: {
      external: [/@elephant4vue.*/, 'vue'],
    },
  },
});
