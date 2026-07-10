<template>
  <button
    type="button"
    :class="[
      'inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 transition-colors duration-150',
      active
        ? 'bg-black dark:bg-white text-white dark:text-black'
        : 'border border-black/15 dark:border-white/15 opacity-60 hover:opacity-100 hover:border-black dark:hover:border-white',
    ]"
    :aria-pressed="active">
    <slot />
    <span v-if="count !== undefined" class="opacity-50 ml-0.5">({{ count }})</span>
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  active?: boolean
  count?: number
}>(), {
  active: false
})
</script>
