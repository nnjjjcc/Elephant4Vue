import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'node:path';
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /^@elephant4vue\/(.+)$/,
        replacement: join(__dirname, '..', 'packages', '$1', 'src'),
      },
    ],
  },
});
