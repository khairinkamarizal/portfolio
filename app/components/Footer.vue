<template>
  <footer class="w-full px-6 md:px-12 lg:px-20 py-12 lg:py-16 border-t border-black/8 dark:border-white/8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">

      <!-- LEFT: Logo + tagline -->
      <div class="flex flex-col gap-4">
        <NuxtLink to="/" class="inline-block">
          <AppLogo class="w-8 h-8 hover:scale-110 transition-transform duration-300" />
        </NuxtLink>
        <p class="text-xs leading-relaxed opacity-50 max-w-[18ch]">
          Khairin Kamarizal — Designer & Developer
        </p>
        <p class="text-xs opacity-50 font-mono">
          Based in Cyberjaya, MY
        </p>
      </div>

      <!-- CENTER: Nav links -->
      <div class="flex flex-col gap-3 border-t border-black/8 dark:border-white/8 pt-6 md:border-t-0 md:pt-0" aria-label="Footer navigation">
        <span class="text-xs tracking-widest uppercase opacity-40 mb-2 font-mono">
          Navigation
        </span>
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-xs tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity duration-200 w-fit font-mono">
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- RIGHT: Social links -->
      <div class="flex flex-col gap-3 border-t border-black/8 dark:border-white/8 pt-6 md:border-t-0 md:pt-0" aria-label="Social links">
        <span class="text-xs tracking-widest uppercase opacity-40 mb-2 font-mono">
          Connect
        </span>
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="link.label"
          class="text-xs tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity duration-200 w-fit font-mono">
          {{ link.label }} ↗
        </a>
      </div>

      <!-- COPYRIGHT: full-width row -->
      <div class="border-t border-black/8 dark:border-white/8 mt-8 pt-6 col-span-full">
        <p class="text-xs opacity-50 font-mono">
          &copy; {{ currentYear }} Khairin Kamarizal
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/writing", label: "Writing" },
  { to: "/about", label: "About" },
  { to: "/message", label: "Message" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/khairinkamarizal" },
  { label: "LinkedIn", href: "https://linkedin.com/in/khairinkamarizal" },
  { label: "Twitter", href: "https://x.com/khairinkamarizal" },
  { label: "Email", href: "mailto:hello@khairin.dev" },
];
</script>
