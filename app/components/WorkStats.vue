<template>
  <div class="flex flex-row gap-8">
    <div v-for="stat in stats" :key="stat.label" class="flex flex-col gap-0.5">
      <span class="text-2xl font-medium tracking-tight">{{ stat.value }}</span>
      <span class="text-xs opacity-40 tracking-wider">{{ stat.label.toUpperCase() }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: '8+', label: 'Projects' },
  { value: '4+', label: 'Years exp.' },
  { value: '12+', label: 'Technologies' },
]
</script>
