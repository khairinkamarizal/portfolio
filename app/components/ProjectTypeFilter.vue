<template>
  <div class="flex flex-wrap gap-2" role="group" aria-label="Filter projects by type">
    <button
      v-for="type in allTypes"
      :key="type"
      type="button"
      @click="$emit('select', type)"
      :aria-pressed="selected === type"
      :class="[
        'text-[10px] tracking-wider px-3 py-1 border transition-all duration-150',
        selected === type
          ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
          : 'border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white',
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
