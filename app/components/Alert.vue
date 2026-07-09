<template>
  <div
    class="flex items-center p-4 border transition-colors duration-150"
    :class="variants[variant]">
    <span class="font-mono text-xs opacity-60 mr-2" aria-hidden="true">{{ icons[variant] }}</span>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
/**
 * Alert — inline alert/notification component.
 *
 * @prop {'info'|'warning'|'error'|'success'} [variant='info'] - Visual style and icon for the alert.
 *
 * Renders a bordered, tinted banner with a monospace icon prefix and a default slot
 * for content. Colors and icons are mapped per variant; defaults to 'info'.
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

const icons = {
  info: 'ℹ',
  warning: '⚠',
  error: '✕',
  success: '✓',
}
</script>
