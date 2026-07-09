<template>
  <footer class="w-full px-6 md:px-12 lg:px-20 py-12 lg:py-16">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">

      <!-- LEFT: Logo + tagline -->
      <div class="flex flex-col gap-4">
        <NuxtLink to="/" class="inline-block">
          <AppLogo class="w-8 h-8 hover:scale-125 transition-transform duration-300" />
        </NuxtLink>
        <p class="text-xs leading-relaxed opacity-50 max-w-[18ch]">
          Khairin Kamarizal — Designer & Developer
        </p>
        <p class="text-xs opacity-30" style="font-family: 'Space Mono', monospace">
          Based in Cyberjaya, MY
        </p>
      </div>

      <!-- CENTER: Nav links -->
      <div class="flex flex-col gap-3">
        <span
          class="text-xs tracking-widest uppercase opacity-30 mb-2"
          style="font-family: 'Space Mono', monospace">
          Navigation
        </span>
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-xs tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity duration-200 w-fit"
          style="font-family: 'Space Mono', monospace">
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- RIGHT: Social links + copyright -->
      <div class="flex flex-col gap-3">
        <span
          class="text-xs tracking-widest uppercase opacity-30 mb-2"
          style="font-family: 'Space Mono', monospace">
          Connect
        </span>
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="link.label"
          class="text-xs tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity duration-200 w-fit"
          style="font-family: 'Space Mono', monospace">
          {{ link.label }}
        </a>

        <!-- Copyright -->
        <p
          class="text-xs opacity-30 mt-auto pt-6"
          style="font-family: 'Space Mono', monospace">
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
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Email", href: "mailto:hello@khairin.dev" },
];
</script>
