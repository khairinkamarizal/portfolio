<template>
  <div>
    <ReadingProgress />

    <article class="w-full px-6 md:px-12 lg:px-20 py-12 lg:py-16">
      <!-- Back link -->
      <div class="mb-10">
        <NuxtLink
          to="/writing"
          class="text-xs tracking-widest uppercase opacity-40 hover:opacity-100 transition-opacity duration-200"
          style="font-family: 'Space Mono', monospace">
          ← Writing
        </NuxtLink>
      </div>

      <!-- Post header -->
      <header class="max-w-2xl mb-12 pb-8 border-b border-black/10 dark:border-white/10">
        <div
          v-if="post?.tags?.length"
          class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="text-xs tracking-widest uppercase opacity-40"
            style="font-family: 'Space Mono', monospace">
            {{ tag }}
          </span>
        </div>

        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">
          {{ post?.title }}
        </h1>

        <p v-if="post?.description" class="text-base opacity-60 leading-relaxed mb-6">
          {{ post?.description }}
        </p>

        <div class="flex items-center gap-4 text-xs tracking-widest uppercase opacity-40" style="font-family: 'Space Mono', monospace">
          <time v-if="post?.date">{{ formatDate(post.date) }}</time>
          <span v-if="post?.readTime">{{ post.readTime }}</span>
        </div>
      </header>

      <!-- Prose content -->
      <div class="prose-content max-w-2xl">
        <ContentRenderer v-if="post" :value="post" />
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(
  `writing-${route.params.slug}`,
  () => queryContent('writing', route.params.slug as string).findOne()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useHead({
  title: post.value?.title,
  meta: [
    { name: 'description', content: post.value?.description },
  ],
})

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style>
/* Prose typography — scoped globally so it applies to rendered markdown */
.prose-content {
  color: inherit;
}

.prose-content p {
  font-size: 1.0625rem;
  line-height: 1.85;
  margin-bottom: 1.5rem;
  opacity: 0.85;
}

.prose-content h2 {
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 1.3;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.prose-content h3 {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.prose-content ul,
.prose-content ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.prose-content li {
  font-size: 1.0625rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0.375rem;
}

.prose-content a {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  opacity: 1;
  transition: opacity 0.2s;
}

.prose-content a:hover {
  opacity: 0.6;
}

.prose-content blockquote {
  border-left: 2px solid currentColor;
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  opacity: 0.7;
}

.prose-content code {
  font-family: 'Space Mono', monospace;
  font-size: 0.875em;
  background: rgba(0, 0, 0, 0.06);
  padding: 0.15em 0.4em;
  border-radius: 2px;
}

.dark .prose-content code {
  background: rgba(255, 255, 255, 0.08);
}

.prose-content pre {
  font-family: 'Space Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.7;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 1.25rem 1.5rem;
  overflow-x: auto;
  margin: 1.75rem 0;
}

.dark .prose-content pre {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.08);
}

.prose-content pre code {
  background: none;
  padding: 0;
  font-size: inherit;
}

.prose-content hr {
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin: 2.5rem 0;
}

.dark .prose-content hr {
  border-top-color: rgba(255, 255, 255, 0.1);
}
</style>
