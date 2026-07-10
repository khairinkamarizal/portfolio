// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
  ],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
      meta: [
        { property: "og:site_name", content: "Khairinkamarizal" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://khair.ink" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:creator", content: "@khairinkamarizal" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "page", mode: "out-in" },
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
  googleFonts: {
    families: {
      "Inter Tight": "100..900",
      "Space Mono": [400, 700],
    },
  },
  tailwindcss: {
    config: {
      darkMode: "class",
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Inter Tight"', "sans-serif"],
          },
        },
      },
      plugins: [require("@tailwindcss/typography")],
    },
  },
  devtools: { enabled: false },
  runtimeConfig: {
    geminiApiKey: process.env.GEMINI_API_KEY || "",
  },
  nitro: {
    preset: "cloudflare_module",
  },
  experimental: {
    payloadExtraction: false,
  },
  compatibilityDate: "2024-11-01",
});
