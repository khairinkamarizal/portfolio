<template>
  <div
    role="separator"
    :aria-orientation="orientation"
    :class="[
      orientation === 'horizontal'
        ? 'w-full h-px'
        : 'h-full w-px',
      'bg-black/10 dark:bg-white/10',
      className
    ]" />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  orientation?: 'horizontal' | 'vertical'
  className?: string
}>(), {
  orientation: 'horizontal'
})
</script>
