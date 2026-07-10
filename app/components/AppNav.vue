<template>
  <nav class="flex items-center gap-4 sm:gap-7" aria-label="Main navigation">
    <NuxtLink
      v-for="link in links"
      :key="link.href"
      :to="link.href"
      class="site-nav-link"
      :class="isActive(link.href) ? 'is-active' : ''"
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
  { label: 'Contact', href: '/message' },
]

function isActive(href: string): boolean {
  return route.path === href || route.path.startsWith(href + '/')
}
</script>
