<template>
  <nav aria-label="Table of contents" class="flex flex-col gap-1">
    <span class="text-xs opacity-40 tracking-widest mb-2">CONTENTS</span>
    <ul class="flex flex-col gap-0.5">
      <li
        v-for="link in links"
        :key="link.id"
        :style="{ paddingLeft: `${(link.depth - 1) * 12}px` }">
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
</script>
