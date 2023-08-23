import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Elephant4VueButton",
      fileName: "elephant4vue-button",
    },
    rollupOptions: {
      external: [/@elephant4vue.*/, "vue"],
    },
  },
});
