<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-xs opacity-50 tracking-widest">Currently</h2>
    <div class="flex flex-col gap-3">
      <div
        v-for="item in items"
        :key="item.label"
        class="flex flex-col gap-0.5">
        <span class="text-[10px] opacity-40 tracking-wider">{{ item.label.toUpperCase() }}</span>
        <span class="text-sm opacity-70 dark:font-light leading-snug">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    label: 'Working on',
    value: 'Building khair.ink — a personal portfolio and experimental space for design and code.',
  },
  {
    label: 'Learning',
    value: 'Cloudflare Durable Objects and edge-native real-time patterns.',
  },
  {
    label: 'Reading',
    value: 'The Design of Everyday Things — Don Norman.',
  },
]
</script>
