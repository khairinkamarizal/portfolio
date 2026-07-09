<template>
  <div class="flex flex-col items-center justify-center py-8 px-6 text-center">
    <!-- Number — the hero -->
    <span class="text-4xl md:text-5xl font-bold tabular-nums leading-none text-black dark:text-white">
      {{ value }}
    </span>

    <!-- Label -->
    <span
      class="text-[10px] tracking-[0.25em] uppercase opacity-40 mt-1 text-black dark:text-white"
      style="font-family: 'Space Mono', monospace">
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string | number
  label: string
}>()
</script>
