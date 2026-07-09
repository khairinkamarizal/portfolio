<template>
  <nav class="flex items-center gap-6" aria-label="Main navigation">
    <NuxtLink
      v-for="link in links"
      :key="link.href"
      :to="link.href"
      class="text-xs tracking-wider uppercase font-mono transition-opacity duration-200 text-black dark:text-white"
      :class="isActive(link.href) ? 'font-bold opacity-100' : 'opacity-40 hover:opacity-70'"
      style="font-family: 'Space Mono', monospace"
      :aria-current="isActive(link.href) ? 'page' : undefined">
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()

const links = [
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

function isActive(href: string): boolean {
  return route.path === href || route.path.startsWith(href + '/')
}
</script>
