<template>
  <div class="flex items-center gap-2 flex-wrap">
    <span v-if="readingTime" class="text-xs opacity-30 font-mono">{{ readingTime }}</span>
    <span class="text-xs opacity-40">{{ formattedDate }}</span>
    <div v-if="tags?.length" class="flex items-center gap-1.5">
      <span
        v-for="tag in tags"
        :key="tag"
        class="text-[10px] tracking-wider border border-black/20 dark:border-white/20 px-2 py-0.5">
        {{ tag.toUpperCase() }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * PostMeta — compact post metadata display
 * Props: date (string), readingTime (string, optional), tags (string[], optional)
 * Used in PostCard and post detail pages
 */
const props = defineProps<{
  date: string
  readingTime?: string
  tags?: string[]
}>()

const { formatDate } = useFormatDate()

const formattedDate = computed(() => {
  return formatDate(props.date)
})
</script>
