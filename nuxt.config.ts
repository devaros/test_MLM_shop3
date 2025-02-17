// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  app: {
    head: {
      viewport: 'user-scalable=yes, initial-scale=1, maximum-scale=1.8, minimum-scale=0.7, width=device-width, viewport-fit=cover',
      htmlAttrs: {
        lang: "ru"
      },
    },
  },
  css: [
    //'~/css/main.module.scss',
    '~/css/main.scss',
  ],
  build: {
    transpile: ['vuetify'],
  },
  typescript: {
    typeCheck: true
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    //'pinia',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  pinia: {
    storesDirs: ['./store/**', './store/*.*'],
  },

  devServer: {
      //headers: {
        //'Access-Control-Allow-Origin': '*'            
      //},
      // open: process.platform === 'darwin',
      host: '0.0.0.0',
      port: 3001, // CHANGE YOUR PORT HERE!
      https: false,
      //hotOnly: false,
      //hmr: true,
      //watch: ["./src"],
      //watch: {
        //usePolling: true,
        //interval: 100,
        //poll: 101, // Check for changes every second
      //},
      //watchFiles: [
       //'/ui/src/components/virtual-scroll/*'
      //]
      //watchOptions: {
        //poll: 101 // Check for changes every second
      //},
  },

})