<template>
  <NuxtLayout name="simple">
    <!-- Reading progress bar -->
    <template #default>
      <ClientOnly>
        <ReadingProgress />
      </ClientOnly>
      <div class="px-8 pt-10 pb-10">

        <!-- Back link -->
        <NuxtLink to="/writing" class="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-opacity duration-200 mb-8">
          ← Writing
        </NuxtLink>

        <!-- 2-col grid on lg+: content left, ToC right -->
        <div class="lg:grid lg:grid-cols-4 lg:gap-12">

          <!-- Left: post content (3/4 width on lg+) -->
          <div class="lg:col-span-3 flex flex-col gap-8">

            <!-- Post header -->
            <header v-if="post" class="mb-10 pb-8 border-b border-black/8 dark:border-white/8">
              <p v-if="post.category" class="font-mono text-[10px] tracking-[0.25em] uppercase opacity-40 mb-3">{{ post.category }}</p>
              <h1 class="text-3xl md:text-4xl leading-tight dark:font-light">{{ post.title }}</h1>
              <div class="flex items-center gap-4 flex-wrap mt-4">
                <span class="font-mono text-[11px] opacity-50">{{ formattedDate }}</span>
                <PostMeta :date="post.date" :reading-time="readingTime" :tags="post.tags" />
                <ViewCounter :slug="route.params.slug as string" />
              </div>
            </header>

            <!-- Post body — wrapped in prose for @tailwindcss/typography rendering -->
            <div
              v-if="post"
              class="prose prose-sm dark:prose-invert max-w-2xl
                prose-headings:font-medium prose-headings:tracking-tight
                prose-h1:text-xl prose-h2:text-lg prose-h3:text-base
                prose-p:opacity-70 prose-p:leading-relaxed prose-p:dark:font-light
                prose-a:underline prose-a:underline-offset-2
                prose-code:text-sm prose-code:font-mono
                prose-pre:bg-black/5 dark:prose-pre:bg-white/5 prose-pre:rounded-none
                prose-blockquote:border-l-2 prose-blockquote:border-black/20 dark:prose-blockquote:border-white/20 prose-blockquote:pl-4 prose-blockquote:opacity-70
                prose-li:opacity-70">
              <ContentRenderer :value="post" />
            </div>

            <!-- Post footer -->
            <footer v-if="post" class="mt-12 pt-8 border-t border-black/8 dark:border-white/8 flex flex-col gap-6">
              <ShareButtons :url="pageUrl" :title="post.title" />
            </footer>

            <!-- Related posts -->
            <RelatedPosts
              v-if="post?.tags?.length"
              :tags="post.tags"
              :current-slug="route.params.slug as string" />

            <!-- Post navigation -->
            <PostNavigation
              :prev-post="prevPost"
              :next-post="nextPost" />

            <!-- Emoji reactions -->
            <EmojiReaction :post-slug="route.params.slug as string" />

            <!-- Author bio -->
            <AuthorCard
              v-if="post"
              name="Khairinkamarizal"
              title="Software Engineer"
              bio="Writing about design, code, and the space between them." />

            <!-- Share buttons -->
            <ClientOnly>
              <ShareButtons
                v-if="post"
                :title="post.title"
                :url="pageUrl" />
            </ClientOnly>

          </div>

          <!-- Right: sticky ToC (1/4 width on lg+) -->
          <div class="hidden lg:block lg:col-span-1">
            <div class="sticky top-8">
              <TableOfContents v-if="post" />
            </div>
          </div>

        </div>

      </div>
    </template>

    <template #footer-actions>
      <NuxtLink
        to="/writing"
        class="group flex items-center">
        <div class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
        <span>Back to writing</span>
        <div class="flex-1 group-hover:flex-none transition-all duration-300 group-hover:w-2 h-1"></div>
        <ArrowUpRight class="group-hover:rotate-45 transition-transform duration-300" />
      </NuxtLink>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowUpRight } from "lucide-vue-next";

definePageMeta({
  layout: false,
});

const route = useRoute();

const { data: post } = await useAsyncData("writing-" + route.path, () =>
  queryCollection("writing").path(route.path).first()
);

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found",
    fatal: true,
  });
}

// Fetch all posts sorted by date to find prev/next neighbors
const { data: allPosts } = await useAsyncData("all-writing-nav", () =>
  queryCollection("writing")
    .where("draft", "=", false)
    .order("date", "DESC")
    .all()
)

const currentSlug = route.params.slug as string

const prevPost = computed(() => {
  if (!allPosts.value) return null
  const idx = allPosts.value.findIndex(p => p.slug === currentSlug)
  if (idx < allPosts.value.length - 1) {
    const p = allPosts.value[idx + 1]
    return { title: p.title, slug: p.slug }
  }
  return null
})

const nextPost = computed(() => {
  if (!allPosts.value) return null
  const idx = allPosts.value.findIndex(p => p.slug === currentSlug)
  if (idx > 0) {
    const p = allPosts.value[idx - 1]
    return { title: p.title, slug: p.slug }
  }
  return null
})

useHead({
  title: computed(() => post.value?.title ? `${post.value.title} — Khairinkamarizal` : "Khairinkamarizal"),
  meta: [
    {
      name: "description",
      content: computed(() => post.value?.description || ""),
    },
    {
      property: "og:title",
      content: computed(() => post.value?.title ? `${post.value.title} — Khairinkamarizal` : "Khairinkamarizal"),
    },
    {
      property: "og:description",
      content: computed(() => post.value?.description || ""),
    },
  ],
});

const pageUrl = computed(() => `https://khair.ink${route.path}`)

const formattedDate = computed(() => {
  if (!post.value?.date) return ''
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(post.value.date))
})

const readingTime = computed(() => {
  if (!post.value?.body) return ''
  // Extract text from body AST nodes recursively
  function extractText(node: any): string {
    if (node.type === 'text') return node.value || ''
    if (node.children) return node.children.map(extractText).join(' ')
    return ''
  }
  const text = extractText(post.value.body)
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min read`
})

</script>
