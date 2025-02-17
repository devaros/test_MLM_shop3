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
})