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
    'nuxt-og-image',
  ],
  site: {
    url: process.env.NUXT_SITE_URL,
  },
  ogImage: {
    fonts: ['Spectral:200'],
  },
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
        name: 'English',
        dir: 'ltr',
      },
      {
        code: 'nl',
        iso: 'nl-NL',
        name: 'Nederlands',
        dir: 'ltr',
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
