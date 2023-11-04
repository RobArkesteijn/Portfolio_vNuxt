import svgLoader from 'vite-svg-loader';
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['@/assets/scss/main.scss'],
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    '@nuxtjs/i18n',
    'nuxt-icon',
    'vue3-carousel-nuxt',
    '@nuxt/image',
    '@hypernym/nuxt-gsap',
  ],
  gsap: {
    composables: true,
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  image: {
    format: ['webp'],
  },
  i18n: {
    baseUrl: 'https://www.robarkes.nl',
    vueI18n: './i18n.config.ts',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
      },
      {
        code: 'nl',
        iso: 'nl-NL',
      },
    ],
    customRoutes: 'config',
    pages: {
      about: {
        en: '/about-me',
        nl: '/over-mij',
      },
      skills: {
        en: '/skills',
        nl: '/vaardigheden',
      },
      services: {
        en: '/services',
        nl: '/diensten',
      },
      projects: {
        en: '/projects',
        nl: '/projecten',
      },
    },
    detectBrowserLanguage: {
      useCookie: false,
    },
  },
});
