<template>
  <div :class="['w-full', showLine ? 'pt-px' : '']">
    <!-- Optional top border line -->
    <div
      v-if="showLine"
      class="border-t border-black/10 dark:border-white/10 mb-3" />

    <!-- Label row -->
    <p
      class="text-xs tracking-[0.2em] uppercase font-mono opacity-50 text-black dark:text-white"
      style="font-family: 'Space Mono', monospace">
      <span v-if="number !== undefined" class="mr-3">{{ String(number).padStart(2, '0') }} /</span>
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
