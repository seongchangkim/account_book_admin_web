import { fileURLToPath, URL } from "url";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../accountbook/src/main/resources/static/index.html'),

    // Paths
    outDir: path.resolve(__dirname, '../accountbook/src/main/resources/static'),
    // assetsSubDirectory: 'static',
    // assetsPublicPath: 'vue/',
  }
})
