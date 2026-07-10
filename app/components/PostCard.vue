<template>
  <NuxtLink
    :to="post._path ?? `/writing/${post.slug}`"
    class="group block w-full relative py-5 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 group-hover:after:w-full after:bg-black dark:after:bg-white after:transition-all after:duration-300">
    <!-- Date + category -->
    <p class="text-xs font-mono opacity-50 mb-2 text-black dark:text-white">
      <span v-if="post.category" class="mono-label mr-2">{{ post.category }}</span>{{ formattedDate }}
    </p>

    <!-- Title -->
    <div class="flex items-center gap-3 mb-2">
      <h2
        class="text-sm font-medium tracking-tight leading-tight text-black dark:text-white group-hover:translate-x-0.5 transition-transform duration-200">
        {{ post.title }}
      </h2>
      <span class="opacity-0 group-hover:opacity-60 transition-opacity duration-200 text-black dark:text-white">→</span>
    </div>

    <!-- Description -->
    <p v-if="post.description" class="text-xs font-sans opacity-0 group-hover:opacity-50 transition-opacity duration-200 mt-1 line-clamp-2 leading-relaxed">
      {{ post.description }}
    </p>

    <!-- Footer: tags + reading time -->
    <div class="flex items-center gap-3 flex-wrap">
      <span
        v-for="tag in post.tags"
        :key="tag"
        class="mono-label text-black dark:text-white">
        #{{ tag }}
      </span>
      <span
        v-if="post.readingTime"
        class="mono-label ml-auto text-black dark:text-white">
        {{ post.readingTime }} min read
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
/**
 * PostCard
 *
 * Renders a single blog post as a list-row link. Shows the post's
 * category, formatted date, title, description (revealed on hover),
 * tags, and reading time. Uses a bottom-border underline animation
 * on hover. Intended for use in the Writing index page.
 */
const props = defineProps<{
  post: {
    _path?: string
    slug?: string
    title: string
    date: string
    description?: string
    tags?: string[]
    readingTime?: number
    category?: string
  }
}>()

const formattedDate = computed(() =>
  new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(new Date(props.post.date))
)
</script>
