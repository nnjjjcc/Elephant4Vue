import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Elephant4VueShared",
      fileName: "elephant4vue-shared",
    },
  },
});
