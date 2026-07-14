import { existsSync, readdirSync } from "node:fs";
import { basename, extname } from "node:path";

const writingDir = new URL("./content/writing/", import.meta.url);
const writingRoutes = existsSync(writingDir)
  ? readdirSync(writingDir)
    .filter(file => extname(file) === ".md")
    .map(file => `/writing/${basename(file, ".md")}`)
  : [];

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
    pageTransition: false,
    layoutTransition: false,
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
  googleFonts: {
    display: "swap",
    preload: true,
    subsets: ["latin"],
    families: {
      "Inter Tight": [400, 500],
    },
  },
  tailwindcss: {
    config: {
      darkMode: "class",
      theme: {
        fontWeight: {
          normal: "400",
          medium: "500",
          semibold: "500",
          bold: "500",
        },
        extend: {
          fontFamily: {
            sans: ['"Inter Tight"', "sans-serif"],
            mono: ['"Inter Tight"', "sans-serif"],
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
    prerender: {
      routes: [
        "/",
        "/about",
        "/work",
        "/writing",
        "/message",
        "/brutalist",
        "/sitemap.xml",
        ...writingRoutes,
      ],
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  compatibilityDate: "2024-11-01",
});
