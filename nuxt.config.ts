// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      "Inter": [100, 200, 300, 400, 500, 600, 700, 800, 900],
      download: true,
      inject: true
    }
  },

  fontawesome: {
    icons: {
      solid: ["house", "record-vinyl", "circle-info", "link", "users", "globe", "bars", "xmark"],
      regular: [],
      brands: ["facebook", "youtube", "x-twitter", "bluesky", "discord", "twitch", "instagram", "tiktok"]
    },
    component: 'fa',
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
				// Open Graph
				{ name: "robots", content: "index, follow" },
				{ name: "author", content: "Byte of Melon Community Game Awards" },
				{ name: "description", content: "The Byte of Melon Community Game Awards is a game award show presented by Michael Webb, aka Byte of Melon, on his Twitch channel. The goal of the show is to allow the audience to run the show by allowing winners to be chosen by the audience (from a select number of candidates decided by the BOM Community Game Awards Nomination Committee)." },

        { name: 'og:title', content: "Byte of Melon Community Game Awards"},
        { name: 'og:type', content: "website"},
        { name: 'og:description', content: "The Byte of Melon Community Game Awards is a game award show presented by Michael Webb, aka Byte of Melon, on his Twitch channel. The goal of the show is to allow the audience to run the show by allowing winners to be chosen by the audience (from a select number of candidates decided by the BOM Community Game Awards Nomination Committee)."},
        { name: 'og:image', content: 'https://chromaforgeband.com/og-image.png'},
        { name: 'og:site_name', content: 'Byte of Melon Community Game Awards'},

				// Theme color
				{ name: "msapplication-TileColor", content: "#ff6d85" },
				{ name: "theme-color", content: "#ff6d85" },
			],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  }
})