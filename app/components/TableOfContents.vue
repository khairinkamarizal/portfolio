<template>
  <nav aria-label="Table of contents" class="flex flex-col gap-2">
    <p class="text-xs opacity-50 tracking-[0.2em] uppercase font-mono">CONTENTS</p>
    <ul class="flex flex-col gap-0.5">
      <li
        v-for="link in links"
        :key="link.id"
        :class="depthClass(link.depth)">
        <a
          :href="`#${link.id}`"
          class="text-xs hover:opacity-100 transition-opacity duration-150 leading-relaxed"
          :class="link.id === activeId ? 'opacity-100 font-medium' : 'opacity-50'">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
/**
 * TableOfContents — sidebar navigation for long-form content.
 * Props: links (Array<{ id, text, depth }>)
 * Highlights the active heading via IntersectionObserver as the user scrolls.
 */
defineProps<{
  links: Array<{
    id: string
    text: string
    depth: number
  }>
}>()

const depthClass = (depth: number) => {
  if (depth <= 1) return 'pl-0'
  if (depth === 2) return 'pl-3'
  return 'pl-6'
}

const activeId = ref('')

onMounted(() => {
  const headings = document.querySelectorAll('h1, h2, h3, h4')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => { if (e.isIntersecting) activeId.value = e.target.id })
    },
    { rootMargin: '0px 0px -80% 0px', threshold: 0 }
  )
  headings.forEach(h => observer.observe(h))
  onUnmounted(() => observer.disconnect())
})
</script>
