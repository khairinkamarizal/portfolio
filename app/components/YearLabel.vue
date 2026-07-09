<template>
  <span class="font-mono text-[10px] tracking-wider opacity-40">{{ year }}</span>
</template>

<script setup lang="ts">
defineProps<{
  year: string | number
}>()
</script>
