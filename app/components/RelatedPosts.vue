<template>
  <div v-if="!error && related.length" class="flex flex-col gap-4 pt-8 border-t border-black/10 dark:border-white/10">
    <h3 class="text-xs opacity-50 tracking-widest">Related</h3>
    <div class="flex flex-col divide-y divide-black/10 dark:divide-white/10">
      <NuxtLink
        v-for="post in related"
        :key="post.slug"
        :to="`/writing/${post.slug}`"
        class="group flex flex-col gap-1 py-3 first:pt-0">
        <span class="text-sm font-medium leading-snug opacity-70 group-hover:opacity-100 transition-opacity duration-150">{{ post.title }}</span>
        <span class="text-xs opacity-50">{{ formatDate(post.date) }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tags: string[]
  currentSlug: string
}>()

const { formatDate } = useFormatDate()

const { data: allPosts, error } = await useAsyncData(`related-${props.currentSlug}`, () =>
  queryCollection('writing')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()
)

const related = computed(() => {
  if (!allPosts.value) return []
  return allPosts.value
    .filter(post => post.slug !== props.currentSlug)
    .filter(post => post.tags?.some((tag: string) => props.tags.includes(tag)))
    .slice(0, 3)
})
</script>
