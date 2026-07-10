<template>
  <NuxtLayout name="simple">
    <ClientOnly><ReadingProgress /></ClientOnly>

    <article v-if="post" class="article-page">
      <div class="article-rail">
        <NuxtLink to="/writing" class="article-back"><ArrowLeft :size="14" aria-hidden="true" /> Writing index</NuxtLink>
        <span class="eyebrow">Note / {{ formattedDate }}</span>
      </div>

      <header class="article-header">
        <div>
          <p class="eyebrow">Field note / {{ post.tags.join(' / ') }}</p>
          <h1>{{ post.title }}</h1>
        </div>
        <div class="article-header__aside">
          <p>{{ post.description }}</p>
          <dl>
            <dt>Published</dt><dd>{{ formattedDate }}</dd>
            <dt>Length</dt><dd>{{ readingTime }} / {{ wordCount }} words</dd>
            <dt>Topics</dt><dd>{{ post.tags.join(', ') }}</dd>
          </dl>
        </div>
      </header>

      <div class="article-layout">
        <div class="article-prose">
          <ContentRenderer :value="renderPost" />
        </div>

        <aside class="article-aside" aria-label="Article information">
          <div class="article-aside__sticky">
            <p class="eyebrow">In this note</p>
            <nav v-if="tocLinks.length" aria-label="Table of contents">
              <a v-for="link in tocLinks" :key="link.id" :href="`#${link.id}`">{{ link.text }}</a>
            </nav>
            <a class="rule-link" :href="shareUrl" target="_blank" rel="noopener noreferrer">Share note <ArrowUpRight :size="14" aria-hidden="true" /></a>
          </div>
        </aside>
      </div>

      <nav class="article-navigation" aria-label="Adjacent writing">
        <NuxtLink v-if="prevPost" :to="`/writing/${prevPost.slug}`">
          <span class="eyebrow">Previous note</span><strong>{{ prevPost.title }}</strong>
        </NuxtLink>
        <span v-else aria-hidden="true" />
        <NuxtLink v-if="nextPost" :to="`/writing/${nextPost.slug}`">
          <span class="eyebrow">Next note</span><strong>{{ nextPost.title }}</strong>
        </NuxtLink>
      </nav>
    </article>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowUpRight } from 'lucide-vue-next'

definePageMeta({ layout: false })
const route = useRoute()

const { data: post } = await useAsyncData(`writing-${route.path}`, () =>
  queryCollection('writing').path(route.path).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

const { data: allPosts } = await useAsyncData('all-writing-nav', () =>
  queryCollection('writing').where('draft', '=', false).order('date', 'DESC').all()
)

const currentSlug = route.params.slug as string
const currentIndex = computed(() => allPosts.value?.findIndex(item => item.slug === currentSlug) ?? -1)
const prevPost = computed(() => {
  const item = allPosts.value?.[currentIndex.value + 1]
  return item ? { title: item.title, slug: item.slug } : null
})
const nextPost = computed(() => {
  const item = currentIndex.value > 0 ? allPosts.value?.[currentIndex.value - 1] : null
  return item ? { title: item.title, slug: item.slug } : null
})

function extractText(node: any): string {
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(extractText).join(' ')
  if (node?.type === 'text') return node.value || ''
  if (node?.children) return node.children.map(extractText).join(' ')
  if (node?.value && typeof node.value !== 'string') return extractText(node.value)
  return ''
}

const renderPost = computed(() => {
  const value = structuredClone(toRaw(post.value!))
  const nodes = value.body?.value
  if (Array.isArray(nodes)) {
    value.body.value = nodes.filter((node: any, index: number) => !(index === 0 && Array.isArray(node) && node[0] === 'h1'))
  }
  return value
})

const wordCount = computed(() => extractText(post.value?.body).trim().split(/\s+/).filter(Boolean).length)
const readingTime = computed(() => `${Math.max(1, Math.round(wordCount.value / 200))} min read`)
const formattedDate = computed(() => new Intl.DateTimeFormat('en', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(post.value!.date)))
const pageUrl = computed(() => `https://khair.ink${route.path}`)
const shareUrl = computed(() => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl.value)}`)
const tocLinks = computed(() => post.value?.body?.toc?.links || [])

useSeoMeta({
  title: () => post.value?.title || 'Writing',
  description: () => post.value?.description || '',
  ogTitle: () => post.value?.title || 'Writing',
  ogDescription: () => post.value?.description || '',
  ogUrl: pageUrl,
})
</script>

<style scoped>
.article-page { padding: 0 var(--page) clamp(6rem, 10vw, 10rem); }
.article-rail { min-height: 5rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; border-bottom: 1px solid var(--line); }
.article-back { display: inline-flex; align-items: center; gap: 0.45rem; font-size: 0.7rem; font-weight: 500; text-transform: uppercase; }
.article-header { display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(16rem, 0.55fr); gap: clamp(3rem, 8vw, 9rem); align-items: end; padding: clamp(4rem, 9vw, 9rem) 0 clamp(3rem, 6vw, 6rem); border-bottom: 1px solid var(--line); }
.article-header h1 { max-width: 12ch; margin-top: 1rem; font-size: clamp(3.2rem, 7.5vw, 8.5rem); line-height: 0.9; font-weight: 500; }
.article-header__aside { display: grid; gap: 2.5rem; color: var(--muted); line-height: 1.5; }
.article-header dl { display: grid; grid-template-columns: 0.7fr 1.3fr; margin: 0; border-top: 1px solid var(--line); font-size: 0.72rem; }
.article-header dt, .article-header dd { margin: 0; padding: 0.6rem 0; border-bottom: 1px solid var(--line); }
.article-header dt { text-transform: uppercase; }
.article-header dd { color: var(--ink); }
.article-layout { display: grid; grid-template-columns: minmax(0, 1fr) 14rem; gap: clamp(4rem, 9vw, 10rem); padding-top: clamp(4rem, 8vw, 8rem); }
.article-prose { width: min(100%, 46rem); font-size: clamp(1.05rem, 1.25vw, 1.2rem); line-height: 1.7; }
.article-prose :deep(> div > h1:first-child), .article-prose :deep(> h1:first-child) { display: none; }
.article-prose :deep(h2) { margin: 3.5rem 0 1rem; padding-top: 1rem; border-top: 1px solid var(--line); font-size: clamp(1.8rem, 3.2vw, 3.2rem); line-height: 1; font-weight: 500; }
.article-prose :deep(h3) { margin: 2.5rem 0 0.75rem; font-size: 1.35rem; font-weight: 500; }
.article-prose :deep(p) { margin: 0 0 1.4rem; }
.article-prose :deep(ul), .article-prose :deep(ol) { margin: 0 0 1.5rem; padding-left: 1.25rem; }
.article-prose :deep(li) { margin: 0.45rem 0; padding-left: 0.35rem; }
.article-prose :deep(strong) { font-weight: 500; }
.article-prose :deep(a) { border-bottom: 1px solid currentColor; }
.article-prose :deep(blockquote) { margin: 2.5rem 0; padding-left: 1.25rem; border-left: 2px solid var(--ink); font-size: 1.25em; }
.article-prose :deep(pre) { max-width: 100%; margin: 2rem 0; padding: 1.25rem; overflow-x: auto; background: var(--soft); border: 1px solid var(--line); font-size: 0.82rem; line-height: 1.55; }
.article-prose :deep(code) { font-family: 'Inter Tight', system-ui, sans-serif; }
.article-prose :deep(:not(pre) > code) { padding: 0.1rem 0.3rem; background: var(--soft); }
.article-aside__sticky { position: sticky; top: 2rem; display: grid; gap: 1.5rem; }
.article-aside nav { display: grid; border-top: 1px solid var(--line); }
.article-aside nav a { padding: 0.65rem 0; border-bottom: 1px solid var(--line); color: var(--muted); font-size: 0.74rem; line-height: 1.3; }
.article-aside nav a:hover { color: var(--ink); }
.article-aside .rule-link { justify-self: start; margin-top: 1rem; }
.article-navigation { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: clamp(5rem, 10vw, 10rem); padding-top: 1.5rem; border-top: 1px solid var(--line); }
.article-navigation a { display: grid; gap: 0.7rem; }
.article-navigation a:last-child { text-align: right; }
.article-navigation strong { font-size: clamp(1.2rem, 2vw, 2rem); line-height: 1.05; font-weight: 500; }
@media (max-width: 820px) {
  .article-header { grid-template-columns: 1fr; }
  .article-layout { grid-template-columns: minmax(0, 1fr); }
  .article-aside { order: -1; }
  .article-aside__sticky { position: static; }
  .article-aside nav { grid-template-columns: 1fr 1fr; column-gap: 1.5rem; }
}
@media (max-width: 520px) {
  .article-page { padding-left: var(--page); padding-right: var(--page); }
  .article-header h1 { font-size: clamp(3rem, 15vw, 5rem); }
  .article-aside nav { grid-template-columns: 1fr; }
  .article-navigation { grid-template-columns: 1fr; }
  .article-navigation a:last-child { text-align: left; }
}
</style>
