<template>
  <span
    class="inline-flex items-center gap-2 px-3 py-1.5 border border-black/10 dark:border-white/10 rounded-full text-black dark:text-white">
    <!-- Pulsing dot -->
    <span class="relative flex w-1.5 h-1.5">
      <span
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
      <span class="relative inline-flex rounded-full w-1.5 h-1.5 bg-green-500" />
    </span>

    <!-- Text -->
    <span class="text-xs tracking-wider">
      <slot>{{ text }}</slot>
    </span>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>
