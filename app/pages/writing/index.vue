<template>
  <NuxtLayout name="simple">
    <header class="editorial-header">
      <div>
        <p class="eyebrow"><VueBitsDecryptedText :text="`Memos 03 / ${totalPosts} entries`" animate-on="inViewHover" /></p>
        <h1 aria-label="Writing and field notes"><VueBitsSplitText text="Writing and field notes." split-type="words" :delay="64" /></h1>
      </div>
      <p class="editorial-header__copy">Short-form memos and longer notes on design craft, frontend development, systems, and the decisions behind the work.</p>
    </header>

    <section class="writing-index">
      <div class="writing-toolbar">
        <p class="eyebrow">Topic index</p>
        <div class="topic-filters" role="group" aria-label="Filter writing by topic">
          <button v-for="tag in tags" :key="tag" type="button" :class="{ active: activeTag === tag }" :aria-pressed="activeTag === tag" @click="activeTag = tag">{{ tag }}</button>
        </div>
        <p class="eyebrow">{{ posts.length }} of {{ totalPosts }} shown</p>
      </div>

      <div class="post-ledger" aria-live="polite" :aria-busy="isLoading">
        <NuxtLink v-for="(post, index) in posts" :key="post.path" :to="post.path" class="post-row">
          <span class="post-row__number">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="post-row__title"><h2>{{ post.title }}</h2><p>{{ post.description }}</p></div>
          <div class="post-row__meta"><time :datetime="post.date">{{ formatDate(post.date) }}</time><span>{{ post.tags?.slice(0, 2).join(' / ') }}</span></div>
          <ArrowUpRight :size="18" aria-hidden="true" />
        </NuxtLink>
      </div>

      <p v-if="loadError" class="empty-index">{{ loadError }}</p>
      <p v-else-if="!isLoading && totalPosts === 0" class="empty-index">No notes in this topic.</p>
      <button v-else-if="hasMore" type="button" class="load-more" :disabled="isLoading" @click="loadMore">
        {{ isLoading ? 'Loading memos' : `Load ${nextBatchCount} more memos` }}
      </button>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
definePageMeta({ layout: false })
const POSTS_PER_PAGE = 40

type WritingIndexPost = {
  path: string
  title: string
  description: string
  date: string
  tags: string[]
}

type WritingIndexTag = {
  name: string
  slug: string
  total: number
}

type WritingIndexMeta = {
  total: number
  pageSize: number
  tags: WritingIndexTag[]
}

type WritingIndexPage = {
  posts: WritingIndexPost[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}

const activeTag = ref('All')
const isLoading = ref(true)
const loadError = ref('')
const requestId = ref(0)
const indexMeta = ref<WritingIndexMeta | null>(null)
const posts = ref<WritingIndexPost[]>([])
const currentPage = ref(0)
const totalPosts = ref(0)
const hasMore = ref(false)

const tags = computed(() => ['All', ...(indexMeta.value?.tags.map(tag => tag.name) || [])])
const activeTagData = computed(() => indexMeta.value?.tags.find(tag => tag.name === activeTag.value))
const nextBatchCount = computed(() => Math.min(POSTS_PER_PAGE, totalPosts.value - posts.value.length))

async function ensureIndexMeta() {
  if (!indexMeta.value) {
    indexMeta.value = await $fetch<WritingIndexMeta>('/writing-index/index.json')
  }
}

async function fetchPosts(reset = false) {
  const currentRequest = requestId.value + 1
  requestId.value = currentRequest
  isLoading.value = true
  loadError.value = ''

  try {
    await ensureIndexMeta()
    const page = reset ? 0 : currentPage.value + 1
    const scope = activeTag.value === 'All' ? 'all' : `tags/${activeTagData.value?.slug}`
    const data = await $fetch<WritingIndexPage>(`/writing-index/${scope}/page-${page}.json`)

    if (currentRequest !== requestId.value) return

    posts.value = reset ? data.posts : [...posts.value, ...data.posts]
    currentPage.value = data.page
    totalPosts.value = data.total
    hasMore.value = data.hasMore
  } catch {
    if (currentRequest === requestId.value) {
      loadError.value = 'Unable to load the writing archive.'
    }
  } finally {
    if (currentRequest === requestId.value) {
      isLoading.value = false
    }
  }
}

function loadMore() {
  if (!isLoading.value && hasMore.value) {
    fetchPosts()
  }
}

watch(activeTag, () => { fetchPosts(true) })
onMounted(() => { fetchPosts(true) })
function formatDate(value: string) { return new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(new Date(value)) }
useSeoMeta({ title: 'Writing', description: 'Writing about design, development, systems, and creative practice.', ogTitle: 'Writing | Khairin Kamarizal', ogUrl: 'https://khair.ink/writing' })
</script>

<style scoped>
.writing-index { padding: 0 var(--page) clamp(7rem, 12vw, 12rem); }
.writing-toolbar { position: sticky; top: 0; z-index: 20; display: grid; grid-template-columns: 0.5fr 1fr 0.5fr; gap: 1rem; align-items: center; min-height: 5rem; border-bottom: 1px solid var(--line); background: var(--paper); }
.writing-toolbar > p:last-child { text-align: right; }
.topic-filters { display: flex; gap: 0.35rem; overflow-x: auto; }
.topic-filters button { flex: 0 0 auto; min-height: 2rem; padding: 0.35rem 0.6rem; border: 1px solid var(--line); color: var(--muted); font-size: 0.66rem; font-weight: 500; text-transform: uppercase; }
.topic-filters button:hover, .topic-filters button.active { background: var(--ink); color: var(--paper); border-color: var(--ink); }
.post-ledger { border-top: 1px solid var(--line); margin-top: clamp(3rem, 6vw, 6rem); }
.post-row { display: grid; grid-template-columns: 3rem minmax(0, 1fr) 10rem 1.5rem; gap: clamp(1rem, 3vw, 3rem); align-items: start; padding: 1.5rem 0 2rem; border-bottom: 1px solid var(--line); }
.post-row__number { padding-top: 0.25rem; color: var(--muted); font-size: 0.68rem; }
.post-row h2 { font-size: clamp(1.6rem, 3vw, 3.2rem); line-height: 1; font-weight: 500; }
.post-row__title p { max-width: 43rem; margin-top: 0.8rem; color: var(--muted); line-height: 1.45; }
.post-row__meta { display: grid; gap: 0.6rem; padding-top: 0.25rem; color: var(--muted); font-size: 0.68rem; text-transform: uppercase; }
.post-row svg { margin-top: 0.15rem; transition: transform 180ms ease; }
.post-row:hover svg { transform: translate(0.2rem, -0.2rem); }
.empty-index { padding: 4rem 0; color: var(--muted); }
.load-more { display: block; width: min(100%, 22rem); min-height: 3rem; margin: 3rem auto 0; border: 1px solid var(--line); color: var(--muted); font-size: 0.72rem; font-weight: 500; text-transform: uppercase; transition: background 180ms ease, color 180ms ease, border-color 180ms ease; }
.load-more:hover { background: var(--ink); color: var(--paper); border-color: var(--ink); }
.load-more:disabled { cursor: wait; opacity: 0.55; }
@media (max-width: 760px) {
  .writing-toolbar { top: var(--rail); grid-template-columns: 1fr auto; padding: 1rem 0; }
  .topic-filters { grid-column: 1 / 3; grid-row: 2; }
  .post-row { grid-template-columns: 2rem minmax(0, 1fr) 1.25rem; }
  .post-row__meta { grid-column: 2; grid-row: 2; grid-template-columns: auto 1fr; }
  .post-row svg { grid-column: 3; grid-row: 1; }
}
</style>
