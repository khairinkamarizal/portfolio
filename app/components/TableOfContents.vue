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
          class="text-xs opacity-50 hover:opacity-100 transition-opacity duration-150 leading-relaxed">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
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
</script>
