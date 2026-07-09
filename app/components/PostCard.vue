<template>
  <NuxtLink
    :to="`/writing/${slug}`"
    class="group flex flex-col gap-1.5 py-5 first:pt-0 hover:opacity-70 transition-opacity duration-200">
    <div class="flex justify-between items-start gap-4">
      <h2 class="text-sm font-medium leading-snug">{{ title }}</h2>
      <span class="text-xs opacity-40 shrink-0">{{ formattedDate }}</span>
    </div>
    <p class="text-sm opacity-60 leading-relaxed dark:font-light">{{ description }}</p>
    <div v-if="tags?.length" class="flex flex-wrap gap-1.5 mt-0.5">
      <span
        v-for="tag in tags"
        :key="tag"
        class="text-[10px] tracking-wider border border-black/20 dark:border-white/20 px-2 py-0.5">
        {{ tag.toUpperCase() }}
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  date: string
  tags?: string[]
  slug: string
}>()

const { formatDate } = useFormatDate()

const formattedDate = computed(() => {
  return formatDate(props.date)
})
</script>
