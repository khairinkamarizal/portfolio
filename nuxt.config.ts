// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  // Explicitly enable SSR for proper SEO and hydration
  ssr: true,

  // Nuxt 4 app directory structure
  future: {
    compatibilityVersion: 4,
  },

  // Global CSS
  css: ["~/assets/css/main.css"],

  // Modules
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    // @nuxt/content reads from the content/ directory by default.
    // Structure: content/writing/*.md for blog posts, content/work/*.md for projects.
    "@nuxt/content",
  ],

  // Color mode: defaults to system, persisted in localStorage
  // Light: bg-white, text-black
  // Dark: bg-[#0a0a0a], text-white
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },

  // Tailwind config
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "tailwind.config.ts",
  },

  // App head defaults
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
        { name: "theme-color", content: "#ffffff", media: "(prefers-color-scheme: light)" },
        { name: "theme-color", content: "#000000", media: "(prefers-color-scheme: dark)" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:creator", content: "@khairinkamarizal" },
        { property: "og:image", content: "https://khair.ink/og-image.png" },
        { name: "twitter:image", content: "https://khair.ink/og-image.png" },
        { name: "robots", content: "index, follow" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      ],
      link: [
        { rel: "canonical", href: "https://khair.ink" },
        // Preconnect to Google Fonts origins to reduce DNS + TLS handshake latency
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          // display=swap ensures text remains visible during font load
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
        },
      ],
    },
    // Page transitions
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "page", mode: "out-in" },
  },

  // Nitro server config
  nitro: {
    compressPublicAssets: true,
  },

  // Experimental performance features
  experimental: {
    renderJsonPayloads: true,
    viewTransition: true,
  },

  // Route rules for static page prerendering
  routeRules: {
    '/': { prerender: true },
    '/work': { prerender: true },
    '/about': { prerender: true },
    '/writing': { prerender: true },
    '/message': { prerender: true },
  },

  // Explicit route list for nuxt generate (static deployment)
  generate: {
    routes: ['/', '/work', '/about', '/writing', '/message'],
  },

  // Dev tools
  devtools: { enabled: true },
});
