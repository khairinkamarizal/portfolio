<template>
  <div
    role="separator"
    :aria-orientation="orientation"
    :class="[
      orientation === 'horizontal'
        ? 'w-full h-px'
        : 'h-full w-px',
      'bg-black/8 dark:bg-white/8',
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
