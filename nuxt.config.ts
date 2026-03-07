// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
  ],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
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
    },
  },
  devtools: { enabled: false },
  nitro: {
    preset: "cloudflare",
  },
  compatibilityDate: "2024-11-01",
});
