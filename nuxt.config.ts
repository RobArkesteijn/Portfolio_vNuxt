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
    '@nuxtjs/robots',
    '@vite-pwa/nuxt',
  ],
  pwa: {
    manifest: {
      name: 'R.A. | Portfolio',
      short_name: 'Portfolio',
      description:
        "Rob Arkesteijn's personal website. Where he shares his passion for software development. A showcase of his projects, skills, and experience.",
      icons: [
        {
          src: '/pwa/icon-64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: '/pwa/icon-144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: '/pwa/icon-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      display: 'fullscreen',
      theme_color: '#233746',
      background_color: '#252329',
      start_url: '../index.html',
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
  robots: {
    UserAgent: '*',
    Disallow: '',
  },
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
