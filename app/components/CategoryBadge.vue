<template>
  <span
    :class="[
      'text-[10px] tracking-wider px-2 py-0.5 border',
      categoryStyles[category.toLowerCase()] || categoryStyles.default,
    ]">
    {{ category.toUpperCase() }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  category: string
}>()

const categoryStyles: Record<string, string> = {
  branding: 'bg-black/5 dark:bg-white/5 border-black/20 dark:border-white/20',
  motion: 'bg-blue-500/10 dark:bg-blue-400/10 border-blue-500/30 dark:border-blue-400/30',
  jersey: 'bg-green-500/10 dark:bg-green-400/10 border-green-500/30 dark:border-green-400/30',
  logo: 'bg-purple-500/10 dark:bg-purple-400/10 border-purple-500/30 dark:border-purple-400/30',
  default: 'bg-black/5 dark:bg-white/5 border-black/20 dark:border-white/20',
}
</script>
