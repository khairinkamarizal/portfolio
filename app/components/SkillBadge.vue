<template>
  <span class="text-xs border border-black/20 dark:border-white/20 px-2.5 py-1">
    {{ label }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>
