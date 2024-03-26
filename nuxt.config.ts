// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "pruvious",
    "nuxt-primevue",
    "@pinia/nuxt",

  ],
  pruvious: {
    jwt: {
      secretKey: "a8zoNHcOFMlu1enyH21mswkzJ2X-ci05roYGWmwENy-oQ1OMi8v7grc9V47HP8Iy"
    }
  },
  app: {
    head: {
      link: [
        {
          id: 'theme-link',
          rel: 'stylesheet',
          href: '/themes/aura-light-green/theme.css'
        }
      ]
    }
  },
})