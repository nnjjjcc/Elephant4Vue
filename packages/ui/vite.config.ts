import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Elephant4VueUi",
      fileName: "elephant4vue-ui",
    },
    rollupOptions: {
      external: [/@openxui.*/],
    },
    minify: false,
  },
});
