import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  // $production: {
  //   pwa: {
  //     manifest: {
  //       name: 'R.A. | Portfolio',
  //       short_name: 'Portfolio',
  //       description:
  //         'Rob Arkesteijn\'s personal website. Where he shares his passion for software development. A showcase of his projects, skills, and experience.',
  //       icons: [
  //         {
  //           src: '/pwa/icon-64.png',
  //           sizes: '64x64',
  //           type: 'image/png',
  //         },
  //         {
  //           src: '/pwa/icon-144.png',
  //           sizes: '144x144',
  //           type: 'image/png',
  //         },
  //         {
  //           src: '/pwa/icon-192.png',
  //           sizes: '192x192',
  //           type: 'image/png',
  //         },
  //         {
  //           src: '/pwa/icon-512.png',
  //           sizes: '512x512',
  //           type: 'image/png',
  //         },
  //       ],
  //       display: 'fullscreen',
  //       theme_color: '#1b3f4d',
  //       background_color: '#232929',
  //       start_url: '../index.html',
  //     },
  //     workbox: {
  //       navigateFallback: '/',
  //     },
  //     devOptions: {
  //       enabled: true,
  //       type: 'module',
  //     },
  //   },
  // },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  compatibilityDate: '2024-07-27',

  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],

  css: ['@/assets/scss/app.scss'],

  devtools: { enabled: true },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  i18n: {
    baseUrl: import.meta.env.NUXT_PUBLIC_BASE_URL,
    defaultLocale: 'nl',
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
      projects: {
        en: '/projects',
        nl: '/projecten',
      },
    },
    detectBrowserLanguage: {
      useCookie: false,
    },
  },

  image: {
    quality: 80,
    format: ['webp'],
  },

  modules: [
    '@nuxtjs/i18n',
    'vue3-carousel-nuxt',
    '@nuxt/image',
    // '@vite-pwa/nuxt',
    '@nuxtjs/seo',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxthub/core',
  ],

  ogImage: {
    fonts: ['Spectral:200'],
    enabled: false,
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
  },

  sitemap: {
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
      { label: 'Hreflangs', select: 'count(xhtml)', width: '25%' },
    ],
  },

  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "./app/assets/scss/base/_colors.scss"; 
          @import "./app/assets/scss/base/_variables.scss"; 
          @import "./app/assets/scss/helpers/_mixins.scss"; 
          `,
        },
      },
    },
  },
})
