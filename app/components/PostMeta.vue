<template>
  <div class="flex items-center gap-2 flex-wrap">
    <span v-if="readingTime" class="text-xs opacity-50 font-mono">{{ readingTime }}</span>
    <span v-if="readingTime" class="opacity-30" aria-hidden="true">·</span>
    <span class="text-xs opacity-50">{{ formattedDate }}</span>
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
 * PostMeta — compact post metadata display.
 * @props date {string} - ISO date string for the post.
 * @props readingTime {string} - Optional estimated read time (e.g. "4 min read").
 * @props tags {string[]} - Optional list of tags rendered as uppercase badges.
 * Used in PostCard and post detail pages.
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
