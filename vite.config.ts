import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 8080
  },

  build: {
    emptyOutDir: false,
    minify: true,
    outDir: 'docs',

    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',

        manualChunks: {
          vendor: [
            'vue', 'vue-router', 'pinia',
            '@fortawesome/vue-fontawesome',
          ]}
      }

    }
  }

});
