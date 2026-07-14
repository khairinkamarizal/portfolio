<template>
  <NuxtLayout name="simple">
    <section class="cover" aria-labelledby="cover-title">
      <div class="cover__meta animate-appear">
        <p class="index-label">Portfolio index<br>Edition 2026</p>
        <p class="index-label">Identity / Digital<br>Creative development</p>
        <p class="index-label">Cyberjaya, Malaysia<br>Working worldwide</p>
      </div>

      <h1 id="cover-title" class="cover__name animate-appear animate-appear-delay-1">
        <span>Khairin</span><span>Kamarizal</span>
      </h1>

      <div class="cover__lower animate-appear animate-appear-delay-2">
        <p class="cover__manifesto">I design identities and digital experiences where the idea, the interface, and the implementation speak the same language.</p>
        <div class="cover__facts">
          <span class="index-label">Independent practice</span>
          <span class="index-label">Selected work / {{ projects.length }}</span>
        </div>
      </div>
    </section>

    <section class="home-index" aria-labelledby="selected-title">
      <header class="home-index__header">
        <div>
          <p class="eyebrow">01 / Selected work</p>
          <h2 id="selected-title">A working archive.</h2>
        </div>
        <NuxtLink to="/work" class="rule-link">Full project ledger <ArrowUpRight :size="15" aria-hidden="true" /></NuxtLink>
      </header>

      <div class="home-projects">
        <WorkCard v-for="(project, index) in featuredProjects" :key="project.title" :project="project" :index="index + 1" :eager="index === 0" />
      </div>
    </section>

    <section class="manifesto" aria-labelledby="manifesto-title">
      <p class="eyebrow">02 / Position</p>
      <div>
        <h2 id="manifesto-title">Design should make the essential visible.</h2>
        <div class="manifesto__copy">
          <p>Strategy gives the work direction. Typography gives it voice. Code makes the system real and accountable.</p>
          <NuxtLink to="/about" class="rule-link">Read the full profile <ArrowUpRight :size="15" aria-hidden="true" /></NuxtLink>
        </div>
      </div>
    </section>

    <section v-if="latestPosts?.length" class="notes" aria-labelledby="notes-title">
      <div class="notes__heading">
        <p class="eyebrow">03 / Recent notes</p>
        <h2 id="notes-title">Writing</h2>
      </div>
      <div class="notes__list">
        <NuxtLink v-for="(post, index) in latestPosts" :key="post.path" :to="post.path" class="note-row">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ post.title }}</h3>
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          <ArrowUpRight :size="17" aria-hidden="true" />
        </NuxtLink>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { projects } from '~/data/projects'

definePageMeta({ layout: false })
const featuredProjects = projects.filter(project => project.featured).slice(0, 3)
const { data: latestPosts } = await useAsyncData('latest-posts-home', () =>
  queryCollection('writing')
    .select('path', 'title', 'date')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .limit(3)
    .all()
)
function formatDate(value: string) { return new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(new Date(value)) }

useSeoMeta({
  title: 'Independent Designer + Developer',
  description: 'Khairin Kamarizal is an independent designer and developer in Malaysia, creating identities and digital experiences.',
  ogTitle: 'Khairin Kamarizal | Independent Designer + Developer',
  ogDescription: 'Identity, digital design, and creative development shaped as one coherent practice.',
  ogImage: '/assets/preview.jpg', ogUrl: 'https://khair.ink', twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.cover { min-height: 100svh; display: grid; grid-template-rows: auto 1fr auto; padding: 1.5rem var(--page) 2rem; border-bottom: 1px solid var(--line); }
.cover__meta { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; padding-bottom: 1rem; border-bottom: 1px solid var(--line); color: var(--muted); }
.cover__meta p:last-child { text-align: right; }
.cover__name { align-self: center; display: flex; flex-direction: column; padding: clamp(3rem, 8vh, 8rem) 0; font-size: clamp(5.2rem, 12.3vw, 13.5rem); line-height: 0.72; font-weight: 500; }
.cover__name span:last-child { align-self: flex-end; }
.cover__lower { display: grid; grid-template-columns: minmax(16rem, 0.75fr) 1.25fr; gap: clamp(3rem, 8vw, 9rem); align-items: end; }
.cover__manifesto { max-width: 32rem; font-size: clamp(1.25rem, 2vw, 2rem); line-height: 1.18; }
.cover__facts { display: flex; justify-content: space-between; gap: 2rem; padding-top: 1rem; border-top: 1px solid var(--line); color: var(--muted); }
.home-index { padding: clamp(5rem, 9vw, 9rem) var(--page); }
.home-index__header { display: flex; align-items: end; justify-content: space-between; gap: 2rem; margin-bottom: clamp(3rem, 6vw, 6rem); }
.home-index__header h2, .notes h2 { margin-top: 0.75rem; font-size: clamp(2.8rem, 6vw, 6.5rem); line-height: 0.9; font-weight: 500; }
.home-projects { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: clamp(4rem, 8vw, 9rem) clamp(1rem, 2vw, 2rem); }
.home-projects > :nth-child(1) { grid-column: 1 / 9; }
.home-projects > :nth-child(2) { grid-column: 6 / 13; }
.home-projects > :nth-child(3) { grid-column: 1 / 8; }
.manifesto { display: grid; grid-template-columns: 0.45fr 1.55fr; gap: 3rem; padding: clamp(6rem, 12vw, 12rem) var(--page); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.manifesto h2 { max-width: 13ch; font-size: clamp(3rem, 7vw, 8rem); line-height: 0.94; font-weight: 500; }
.manifesto__copy { display: grid; grid-template-columns: 1fr auto; gap: 3rem; align-items: end; max-width: 50rem; margin: 4rem 0 0 auto; color: var(--muted); font-size: clamp(1rem, 1.4vw, 1.25rem); line-height: 1.5; }
.notes { display: grid; grid-template-columns: 0.45fr 1.55fr; gap: 3rem; padding: clamp(5rem, 9vw, 9rem) var(--page); }
.notes__list { border-top: 1px solid var(--line); }
.note-row { display: grid; grid-template-columns: 2.5rem minmax(0, 1fr) 6rem 1.25rem; gap: 1rem; align-items: center; padding: 1.35rem 0; border-bottom: 1px solid var(--line); }
.note-row > span, .note-row time { color: var(--muted); font-size: 0.68rem; text-transform: uppercase; }
.note-row h3 { font-size: clamp(1.15rem, 2vw, 1.8rem); font-weight: 500; }
.note-row svg { transition: transform 180ms ease; }
.note-row:hover svg { transform: translate(0.15rem, -0.15rem); }
@media (max-width: 780px) {
  .cover { min-height: calc(100svh - var(--rail)); }
  .cover__meta { grid-template-columns: 1fr 1fr; }
  .cover__meta p:nth-child(2) { display: none; }
  .cover__name { font-size: clamp(4.2rem, 17vw, 8rem); }
  .cover__name span:last-child { align-self: flex-start; }
  .cover__lower, .manifesto, .notes { grid-template-columns: 1fr; }
  .home-projects { display: grid; grid-template-columns: 1fr; }
  .home-projects > :nth-child(n) { grid-column: auto; }
  .manifesto__copy { grid-template-columns: 1fr; margin-left: 0; }
}
@media (max-width: 520px) {
  .cover__name { line-height: 0.8; }
  .cover__lower { gap: 2rem; }
  .cover__facts { flex-direction: column; gap: 0.4rem; }
  .home-index__header { align-items: flex-start; flex-direction: column; }
  .note-row { grid-template-columns: 2rem minmax(0, 1fr) 1.25rem; }
  .note-row time { display: none; }
}
</style>
