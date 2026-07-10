<template>
  <div class="flex items-start justify-between gap-4 py-2.5 border-b border-black/8 dark:border-white/8 last:border-b-0">
    <dt class="font-mono text-[10px] tracking-[0.15em] uppercase opacity-40 shrink-0">{{ label }}</dt>
    <dd class="text-sm text-right">
      <slot>{{ value }}</slot>
    </dd>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value?: string | number
}>()
</script>
