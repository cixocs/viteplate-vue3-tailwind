import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgLoader from 'vite-svg-loader';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'static',
  build: {
    emptyOutDir: true
  },
  server: {
    host: true,
    open: true
  },
  /* 使う予定なかったら削除 */
  preview: {
    host: true,
    port: 8080,
    open: true
  },
  plugins: [
    vue({
      reactivityTransform: true,
      template: {
        transformAssetUrls: {
          tags: {
            source: ['src', 'srcset'],
            img: ['src', 'srcset']
          }
        }
      }
    }),
    tsconfigPaths(),
    svgLoader({
      svgoConfig: {
        plugins: [
          { name: 'cleanupIDs', active: true },
          { name: 'mergePaths', active: true },
          { name: 'removeAttrs', params: { attrs: '(fill|stroke)' } },
          { name: 'removeDimensions', active: true },
          { name: 'removeStyleElement', active: true }
        ]
      }
    }),
    Pages(),
    Layouts(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
      dts: 'src/auto-imports.d.ts'
    })
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify'
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head']
  }
});
