export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Жилой дом "Романовъ"',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Жилой дом "Романовъ", Волгоград ул.Ангарская 100а',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Жилой дом "Романовъ"',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Жилой дом "Романовъ", Волгоград ул.Ангарская 100а',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Жилой дом "Романовъ" Волгоград',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `http://a100a.ru`,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'a100.jpg',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Жилой дом "Романовъ", Волгоград ул.Ангарская 100а',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Жилой дом "Романовъ"',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/romanoff_fav.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
