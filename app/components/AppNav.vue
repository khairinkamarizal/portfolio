<template>
  <nav class="index-nav" aria-label="Primary navigation">
    <NuxtLink
      v-for="(link, index) in links"
      :key="link.href"
      :to="link.href"
      class="index-nav__link"
      :class="{ 'is-active': isActive(link.href) }"
      :aria-current="isActive(link.href) ? 'page' : undefined"
      @click="emit('navigate')">
      <span>{{ String(index + 1).padStart(2, '0') }}</span>
      <span>{{ link.label }}</span>
      <ArrowRight :size="14" aria-hidden="true" />
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
const emit = defineEmits<{ navigate: [] }>()
const route = useRoute()
const links = [
  { label: 'Cover', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Writing', href: '/writing' },
  { label: 'Contact', href: '/message' },
]
function isActive(href: string) { return href === '/' ? route.path === '/' : route.path.startsWith(href) }
</script>

<style scoped>
.index-nav { display: grid; margin-top: 2rem; border-top: 1px solid var(--line); }
.index-nav__link { display: grid; grid-template-columns: 2rem 1fr 1rem; gap: 0.5rem; align-items: center; min-height: 2.65rem; border-bottom: 1px solid var(--line); color: var(--muted); font-size: 0.76rem; text-transform: uppercase; }
.index-nav__link span:first-child { font-size: 0.62rem; }
.index-nav__link svg { opacity: 0; transform: translateX(-0.25rem); transition: opacity 150ms ease, transform 150ms ease; }
.index-nav__link:hover, .index-nav__link.is-active { color: var(--ink); }
.index-nav__link:hover svg, .index-nav__link.is-active svg { opacity: 1; transform: none; }
@media (max-width: 900px) {
  .index-nav { margin-top: 0; }
  .index-nav__link { grid-template-columns: 2.5rem 1fr 2rem; min-height: clamp(3.75rem, 11vh, 6rem); font-size: clamp(1.8rem, 8vw, 3.5rem); line-height: 1; font-weight: 500; text-transform: none; }
  .index-nav__link span:first-child { align-self: start; padding-top: 0.55rem; font-size: 0.65rem; }
  .index-nav__link svg { width: 1.5rem; height: 1.5rem; opacity: 1; }
}
</style>
