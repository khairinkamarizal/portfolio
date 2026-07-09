<template>
  <div class="w-full border-b border-black/10 dark:border-white/10 pb-8 pt-12 md:pt-16">
    <!-- Eyebrow label -->
    <p
      v-if="label"
      class="text-xs tracking-widest uppercase opacity-40 mb-4 font-mono">
      {{ label }}
    </p>

    <!-- Title -->
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-black dark:text-white">
      <slot name="title">{{ title }}</slot>
    </h1>

    <!-- Description -->
    <p
      v-if="description"
      class="text-sm md:text-base opacity-60 max-w-xl mt-4 leading-relaxed text-black dark:text-white">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  title: string
  description?: string
}>()
</script>
