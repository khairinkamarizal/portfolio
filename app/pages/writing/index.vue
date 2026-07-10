<template>
  <NuxtLayout name="simple">
    <header class="editorial-header">
      <div><p class="eyebrow">Notes 03 / {{ posts?.length ?? 0 }} entries</p><h1>Writing and field notes.</h1></div>
      <p class="editorial-header__copy">Observations on design craft, frontend development, systems, and the decisions behind the work.</p>
    </header>

    <section class="writing-index">
      <div class="writing-toolbar">
        <p class="eyebrow">Topic index</p>
        <div class="topic-filters" role="group" aria-label="Filter writing by topic">
          <button v-for="tag in tags" :key="tag" type="button" :class="{ active: activeTag === tag }" :aria-pressed="activeTag === tag" @click="activeTag = tag">{{ tag }}</button>
        </div>
        <p class="eyebrow">{{ filteredPosts.length }} shown</p>
      </div>

      <div class="post-ledger" aria-live="polite">
        <NuxtLink v-for="(post, index) in filteredPosts" :key="post.path" :to="post.path" class="post-row">
          <span class="post-row__number">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="post-row__title"><h2>{{ post.title }}</h2><p>{{ post.description }}</p></div>
          <div class="post-row__meta"><time :datetime="post.date">{{ formatDate(post.date) }}</time><span>{{ post.tags.slice(0, 2).join(' / ') }}</span></div>
          <ArrowUpRight :size="18" aria-hidden="true" />
        </NuxtLink>
      </div>

      <p v-if="filteredPosts.length === 0" class="empty-index">No notes in this topic.</p>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
definePageMeta({ layout: false })
const { data: posts } = await useAsyncData('writing-index', () => queryCollection('writing').where('draft', '=', false).order('date', 'DESC').all())
const activeTag = ref('All')
const tags = computed(() => ['All', ...new Set((posts.value || []).flatMap(post => post.tags))])
const filteredPosts = computed(() => activeTag.value === 'All' ? (posts.value || []) : (posts.value || []).filter(post => post.tags.includes(activeTag.value)))
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
@media (max-width: 760px) {
  .writing-toolbar { top: var(--rail); grid-template-columns: 1fr auto; padding: 1rem 0; }
  .topic-filters { grid-column: 1 / 3; grid-row: 2; }
  .post-row { grid-template-columns: 2rem minmax(0, 1fr) 1.25rem; }
  .post-row__meta { grid-column: 2; grid-row: 2; grid-template-columns: auto 1fr; }
  .post-row svg { grid-column: 3; grid-row: 1; }
}
</style>
