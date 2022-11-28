// Plugins
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Layouts from 'vite-plugin-vue-layouts'
import basicSsl from '@vitejs/plugin-basic-ssl'

// Utilities
import { defineConfig } from 'vite'
import config from "./src/config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://vuejs.org/guide/extras/reactivity-transform.html#refs-vs-reactive-variables
    vue({
      reactivityTransform: true,
    }),
    
    
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    
    
    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),
    
    
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        '@vueuse/core',
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),
    
    
    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),
    
    
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/vitejs/vite-plugin-basic-ssl
    basicSsl(),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    }
  },
  server: {
    host: true,
    port: 443,

    // https://vitejs.dev/config/server-options.html#server-https
    https: true,
    // https://vitejs.dev/config/#server-proxy
    // useful when running vite on localhost
    // as the primary web / dev server
    proxy: {
      "/api": {
        target: `http://${config.apiHost}:${config.apiPort}`,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
