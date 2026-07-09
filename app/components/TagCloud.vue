<template>
  <div class="flex flex-wrap gap-3 items-center justify-center py-6">
    <button
      v-for="tag in sortedTags"
      :key="tag.name"
      type="button"
      @click="$emit('filter', tag.name)"
      :style="{ fontSize: `${Math.max(10, Math.min(18, 10 + tag.count * 2))}px`, transform: `rotate(${tag.rotation}deg)` }"
      class="tracking-wider border border-black/20 dark:border-white/20 px-2.5 py-1 hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-200 cursor-pointer">
      {{ tag.name.toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
interface TagWithCount {
  name: string
  count: number
}

const props = defineProps<{
  tags: TagWithCount[]
}>()

defineEmits<{
  filter: [tag: string]
}>()

const sortedTags = computed(() => {
  return props.tags
    .slice()
    .sort((a, b) => b.count - a.count)
    .map(tag => ({
      ...tag,
      rotation: (Math.random() - 0.5) * 6, // Slight rotation for creative effect
    }))
})
</script>
