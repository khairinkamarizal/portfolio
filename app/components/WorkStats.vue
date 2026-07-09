<template>
  <div class="flex flex-row border border-black/8 dark:border-white/8 divide-x divide-black/8 dark:divide-white/8">
    <div v-for="stat in stats" :key="stat.label" class="flex-1 flex flex-col gap-0.5 px-6 py-4">
      <span class="text-3xl font-light tracking-tight tabular-nums">{{ stat.value }}</span>
      <span class="text-[10px] tracking-[0.15em] opacity-50 font-mono">{{ stat.label.toUpperCase() }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: '8+', label: 'Projects' },
  { value: '5+', label: 'Years exp.' },
  { value: '12+', label: 'Technologies' },
]
</script>
