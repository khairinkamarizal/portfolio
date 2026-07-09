<template>
  <div class="flex flex-wrap justify-start gap-2" role="group" aria-label="Filter projects by type">
    <button
      v-for="type in allTypes"
      :key="type"
      type="button"
      @click="$emit('select', type)"
      :aria-pressed="selected === type"
      :class="[
        'text-xs font-mono tracking-widest px-3 py-1 border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current',
        selected === type
          ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
          : 'text-black dark:text-white border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white hover:bg-black/5 dark:hover:bg-white/5',
      ]">
      {{ type.toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  types: string[]
  selected: string
}>()

defineEmits<{
  select: [type: string]
}>()

const allTypes = computed(() => ['All', ...props.types])
</script>
