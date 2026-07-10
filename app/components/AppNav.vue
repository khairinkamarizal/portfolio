<template>
  <nav
    :class="direction === 'vertical' ? 'flex flex-col gap-1.5' : 'flex items-center gap-6'"
    aria-label="Main navigation">
    <NuxtLink
      v-for="(link, index) in links"
      :key="link.href"
      :to="link.href"
      :style="{ animationDelay: index * 50 + 'ms' }"
      class="animate-appear text-xs tracking-[0.1em] uppercase font-mono transition-all duration-200 text-black dark:text-white"
      :class="[
        direction === 'vertical'
          ? isActive(link.href)
            ? 'border-l border-current pl-3 py-2 opacity-100 font-medium' /* active: pl-3 consistent */
            : 'pl-2 py-2 opacity-50 hover:opacity-70'
          : isActive(link.href)
            ? 'font-bold opacity-100'
            : 'opacity-40 hover:opacity-70',
        bordered ? 'border-b border-black/10 dark:border-white/10 py-3' : '',
      ]"
      :aria-current="isActive(link.href) ? 'page' : undefined">
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
/**
 * AppNav
 *
 * Primary site navigation. Renders links to Work, Writing, About, and Contact.
 * Supports both horizontal (mobile header) and vertical (desktop sidebar) layouts.
 * Highlights the active route using border-l in vertical mode or font-bold in horizontal.
 * Optionally adds a bottom border to each link via the `bordered` prop.
 */
withDefaults(defineProps<{
  direction?: 'horizontal' | 'vertical'
  bordered?: boolean
}>(), {
  direction: 'horizontal',
  bordered: false,
})

const route = useRoute()

const links = [
  { label: 'Work', href: '/work', ariaLabel: 'View selected work' },
  { label: 'Writing', href: '/writing', ariaLabel: 'Read writing and articles' },
  { label: 'About', href: '/about', ariaLabel: 'Learn about Khairin' },
  { label: 'Contact', href: '/message', ariaLabel: 'Get in touch' },
]

function isActive(href: string): boolean {
  return route.path === href || route.path.startsWith(href + '/')
}
</script>
