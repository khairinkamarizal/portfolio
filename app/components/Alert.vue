<template>
  <div
    class="flex items-center p-4 border transition-colors duration-150"
    :class="variants[variant]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
/**
 * Alert — inline alert/notification component.
 * Props: variant ('info' | 'warning' | 'error' | 'success')
 */
withDefaults(defineProps<{
  variant?: 'info' | 'warning' | 'error' | 'success'
}>(), {
  variant: 'info'
})

const variants = {
  info: 'border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5',
  warning: 'border-yellow-500/40 bg-yellow-500/5',
  error: 'border-red-500/40 bg-red-500/5',
  success: 'border-green-500/40 bg-green-500/5',
}
</script>
