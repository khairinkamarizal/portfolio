<template>
  <div
    class="flex flex-col gap-2 p-4 my-4 border-l-2"
    :class="calloutClasses">
    <div v-if="title" class="text-sm font-medium">
      <span class="opacity-60 mr-2" aria-hidden="true">{{ icons[type || 'note'] }}</span>{{ title }}
    </div>
    <div class="text-sm opacity-70 leading-relaxed">
      <slot>{{ content }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Callout — aside/callout component for writing posts.
 * Props: type ("note"|"tip"|"warning"|"info"), title (string, optional), content (string)
 * Different subtle background colors per type but still minimal (very light tint).
 * Used in markdown via MDC syntax.
 */
const props = defineProps<{
  type?: 'note' | 'tip' | 'warning' | 'info' | 'error'
  title?: string
  content?: string
}>()

const icons: Record<string, string> = {
  note: '📝',
  tip: '💡',
  warning: '⚠',
  info: 'ℹ',
  error: '✕',
}

const calloutClasses = computed(() => {
  const type = props.type || 'note'

  const classes: Record<string, string> = {
    note: 'border-black/20 dark:border-white/20 bg-black/[0.05] dark:bg-white/[0.05]',
    tip: 'border-green-500/30 dark:border-green-400/30 bg-green-500/[0.08] dark:bg-green-400/[0.08]',
    warning: 'border-yellow-500/30 dark:border-yellow-400/30 bg-yellow-500/[0.08] dark:bg-yellow-400/[0.08]',
    info: 'border-blue-500/30 dark:border-blue-400/30 bg-blue-500/[0.08] dark:bg-blue-400/[0.08]',
    error: 'border-red-500/30 dark:border-red-400/30 bg-red-500/[0.08] dark:bg-red-400/[0.08]',
  }

  return classes[type]
})
</script>
