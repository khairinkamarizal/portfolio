<template>
  <nav
    :class="direction === 'vertical' ? 'flex flex-col gap-1' : 'flex items-center gap-6'"
    aria-label="Main navigation">
    <NuxtLink
      v-for="(link, index) in links"
      :key="link.href"
      :to="link.href"
      :style="{ animationDelay: index * 50 + 'ms' }"
      class="animate-appear text-xs tracking-wider uppercase font-mono transition-all duration-200 text-black dark:text-white"
      :class="[
        direction === 'vertical'
          ? isActive(link.href)
            ? 'border-l-2 border-current pl-3 py-1.5 opacity-100'
            : 'pl-2 py-1.5 opacity-40 hover:opacity-70'
          : isActive(link.href)
            ? 'font-bold opacity-100'
            : 'opacity-40 hover:opacity-70',
      ]"
      :aria-current="isActive(link.href) ? 'page' : undefined">
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  direction?: 'horizontal' | 'vertical'
}>(), {
  direction: 'horizontal',
})

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
