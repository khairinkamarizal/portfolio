<template>
  <ClientOnly>
    <button type="button" class="invert-control" :aria-label="`Use ${isDark ? 'light' : 'dark'} interface`" @click="toggleTheme">
      <span v-if="showLabel">{{ isDark ? 'Standard' : 'Invert' }}</span>
      <Contrast :size="17" :stroke-width="1.5" aria-hidden="true" />
    </button>
    <template #fallback><span class="invert-control" aria-hidden="true" /></template>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Contrast } from 'lucide-vue-next'
withDefaults(defineProps<{ showLabel?: boolean }>(), { showLabel: false })
const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.invert-control { min-width: 2.35rem; height: 2.35rem; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; color: var(--ink); border: 1px solid var(--line); font-size: 0.7rem; font-weight: 500; text-transform: uppercase; }
.invert-control:has(span) { padding: 0 0.7rem; }
.invert-control:hover { background: var(--ink); color: var(--paper); }
</style>
