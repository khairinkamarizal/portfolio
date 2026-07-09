<template>
  <span
    class="inline-flex items-center gap-2 px-2.5 py-1 border border-black/15 dark:border-white/15 text-black dark:text-white">
    <!-- Pulsing dot -->
    <span class="relative flex w-1.5 h-1.5">
      <span
        v-if="pulse"
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"
        :style="{ animationDuration: '2s' }" />
      <span class="relative inline-flex rounded-full w-1.5 h-1.5 bg-green-500" />
    </span>

    <!-- Text -->
    <span class="text-[10px] tracking-[0.15em] uppercase font-mono" style="font-family: 'Space Mono', monospace">
      <slot>Available for projects</slot>
    </span>
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  text?: string
  pulse?: boolean
}>(), {
  pulse: true,
})
</script>
