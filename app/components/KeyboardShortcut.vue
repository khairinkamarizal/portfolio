<template>
  <div class="flex items-center gap-1" :aria-label="`Keyboard shortcut: ${keys.join(' + ')}`">
    <kbd
      v-for="(key, i) in keys"
      :key="i"
      class="inline-flex items-center justify-center font-mono text-[10px] px-1.5 py-0.5 border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 leading-none tracking-wider min-w-[1.25rem]">
      {{ key }}
    </kbd>
    <span v-if="keys.length > 1" class="sr-only">pressed together</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  keys: string[]
}>()
</script>
