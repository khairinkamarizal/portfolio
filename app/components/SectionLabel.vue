<template>
  <div :class="['w-full', showLine ? 'pt-px' : '']">
    <!-- Optional top border line -->
    <div
      v-if="showLine"
      class="border-t border-black/20 dark:border-white/20 mb-3" />

    <!-- Label row -->
    <p
      class="text-xs tracking-[0.3em] uppercase font-mono opacity-40 text-black dark:text-white"
      style="font-family: 'Space Mono', monospace">
      <span v-if="number !== undefined" class="mr-2">{{ String(number).padStart(2, '0') }} /</span>
      <slot>{{ label }}</slot>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  showLine?: boolean
  number?: number | string
}>()
</script>
