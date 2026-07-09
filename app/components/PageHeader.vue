<template>
  <div class="flex flex-col gap-2">
    <h1 class="text-xs opacity-50 tracking-widest">{{ title }}</h1>
    <p v-if="description" class="text-2xl leading-tight dark:font-light">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>
