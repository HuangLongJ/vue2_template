export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css',
    'element-ui/lib/theme-chalk/index.css',
    './assets/main.scss',
    'swiper/css/swiper.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/vue-i18n',
    { src: '@/plugins/swiper', mode: 'client' },
    { src: '@/plugins/global.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['./assets/common/_mixins.scss']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt'
  ],

  axios: {
    proxy: true
  },

  proxy: {
    '/api': {
      target: 'https://devapi.jingsocial.com'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    babel: {
      presets (env, [preset, options]) {
        return [
          ["@nuxt/babel-preset-app", options]
        ]
      }
    },
    postcss: {
      postcssOptions: {
        plugins: {
          'postcss-pxtorem': {
            rootValue: 16,
            propList: ['*'],
            mediaQuery: true
          }
        }
      }
    }
  }
}
