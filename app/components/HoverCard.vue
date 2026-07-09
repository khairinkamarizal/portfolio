<template>
  <div
    class="group relative overflow-hidden border border-black/10 dark:border-white/10 p-5 cursor-default transition-all duration-300 hover:border-black dark:hover:border-white focus-within:border-black dark:focus-within:border-white"
    tabindex="0">
    <!-- Default visible content -->
    <div class="flex flex-col gap-1 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0">
      <span class="text-xs opacity-40 tracking-wider">{{ subtitle?.toUpperCase() }}</span>
      <h3 class="text-base font-medium leading-tight">{{ title }}</h3>
    </div>
    <!-- Hidden content revealed on hover -->
    <div class="absolute inset-0 p-5 flex flex-col justify-center gap-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0 bg-black dark:bg-white text-white dark:text-black">
      <p class="text-xs leading-relaxed opacity-80">{{ content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  content: string
}>()
</script>
