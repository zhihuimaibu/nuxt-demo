// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  imports: {
    dirs: [
      'utils/*'
    ]
  },
  app: {
    head: {
      title: 'sdfddd',
      charset: 'utf-8',
      viewport: 'width=device-width',
    }
  },
  hooks: {
    'prerender:routes'({routes}) {
      routes.clear()
    }
  },
  routeRules: {
    '/bms/**': {
      ssr: false
    }
    // '/posts/**': {
    //   ssr: false //默认为true
    // },
    // '/about': {
    //   ssr: true
    // }
  }
})
