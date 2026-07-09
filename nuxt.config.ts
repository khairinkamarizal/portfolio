// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
  ],
  css: [
    "~/assets/css/main.css",
  ],
  experimental: {
    payloadExtraction: false,
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "canonical", href: "https://khair.ink" },
      ],
      meta: [
        { property: "og:site_name", content: "Khairinkamarizal" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://khair.ink" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:creator", content: "@khairinkamarizal" },
      ],
    },
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
  compatibilityDate: "2024-11-01",
});
