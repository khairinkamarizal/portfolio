<template>
  <span
    aria-live="polite"
    class="inline-flex items-center gap-2 px-2.5 py-1 border border-black/15 dark:border-white/15 text-black dark:text-white">
    <!-- Pulsing dot -->
    <span class="relative flex w-1.5 h-1.5">
      <span
        v-if="pulse"
        :class="['animate-ping absolute inline-flex h-full w-full rounded-full opacity-75', pingColors[color]]"
        :style="{ animationDuration: '2s' }" />
      <span :class="['relative inline-flex rounded-full w-1.5 h-1.5', dotColors[color]]" />
    </span>

    <!-- Text -->
    <span class="text-[10px] tracking-[0.15em] uppercase font-mono" style="font-family: 'Space Mono', monospace">
      <slot>Available for projects</slot>
    </span>
  </span>
</template>

<script setup lang="ts">
const dotColors = { green: 'bg-green-500', yellow: 'bg-yellow-500', red: 'bg-red-500' }
const pingColors = { green: 'bg-green-400', yellow: 'bg-yellow-400', red: 'bg-red-400' }

withDefaults(defineProps<{
  text?: string
  pulse?: boolean
  color?: 'green' | 'yellow' | 'red'
}>(), {
  pulse: true,
  color: 'green',
})
</script>
