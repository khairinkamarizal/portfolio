<template>
  <NuxtLayout name="simple">
    <header class="about-cover">
      <div class="about-cover__title"><p class="eyebrow">Profile 02 / Khairin Kamarizal</p><h1>Designer by instinct.<br>Builder by practice.</h1></div>
      <figure>
        <NuxtImg src="/assets/dp.webp" alt="Portrait of Khairin Kamarizal" width="720" height="900" format="webp" loading="eager" fetchpriority="high" />
        <figcaption class="index-label">Cyberjaya, Malaysia / 2026</figcaption>
      </figure>
      <p class="about-cover__intro">An independent Malaysian designer and developer working across brand identity, digital experience, and creative technology.</p>
    </header>

    <section class="about-statement">
      <p class="eyebrow">Working position</p>
      <blockquote>Design is the logic that decides what matters, what comes next, and what people remember.</blockquote>
    </section>

    <section class="about-copy" aria-labelledby="practice-title">
      <div><p class="eyebrow">Practice</p><h2 id="practice-title">From first question to final detail.</h2></div>
      <div>
        <p>I care about typography that gives content a voice, systems that make brands recognizable, and interactions that feel obvious only after someone has carefully designed them.</p>
        <p>My range is connected: I can shape the idea, define the visual system, and understand what it takes to make it work in the browser.</p>
      </div>
    </section>

    <section class="practice-ledger" aria-label="Capabilities">
      <article v-for="group in practiceGroups" :key="group.title">
        <div class="practice-ledger__index"><span>{{ group.number }}</span><h2>{{ group.title }}</h2></div>
        <p>{{ group.description }}</p>
        <ul><li v-for="item in group.items" :key="item">{{ item }}</li></ul>
      </article>
    </section>

    <section class="about-now">
      <p class="eyebrow">Current status</p>
      <h2>Open to thoughtful collaborations.</h2>
      <div><p>Available for selected identity, web, and creative development projects. Remote worldwide, with local collaboration across the Klang Valley.</p><NuxtLink to="/message" class="rule-link">Start a conversation <ArrowUpRight :size="15" aria-hidden="true" /></NuxtLink></div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
definePageMeta({ layout: false })
const practiceGroups = [
  { number: '01', title: 'Identity', description: 'Distinctive systems grounded in positioning, not short-lived trends.', items: ['Brand strategy', 'Visual identity', 'Logo systems', 'Art direction', 'Guidelines'] },
  { number: '02', title: 'Experience', description: 'Digital experiences structured around hierarchy, rhythm, and behavior.', items: ['UI/UX design', 'Information architecture', 'Design systems', 'Prototyping', 'Motion'] },
  { number: '03', title: 'Development', description: 'Responsive frontends that preserve the character and precision of the design.', items: ['Vue / Nuxt', 'TypeScript', 'CSS systems', 'Accessibility', 'Performance'] },
]
useSeoMeta({ title: 'About', description: 'About Khairin Kamarizal, an independent Malaysian designer and developer.', ogTitle: 'About | Khairin Kamarizal', ogUrl: 'https://khair.ink/about' })
</script>

<style scoped>
.about-cover { min-height: 90svh; display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); grid-template-rows: 1fr auto; gap: 2rem; padding: clamp(4rem, 8vw, 8rem) var(--page) 2rem; border-bottom: 1px solid var(--line); }
.about-cover__title { z-index: 2; grid-column: 1 / 12; grid-row: 1; }
.about-cover h1 { margin-top: 1rem; max-width: 11ch; font-size: clamp(3.5rem, 8.5vw, 9.5rem); line-height: 0.87; font-weight: 500; }
.about-cover figure { position: relative; grid-column: 8 / 13; grid-row: 1 / 3; align-self: end; aspect-ratio: 4 / 5; max-height: 70svh; overflow: hidden; background: var(--soft); }
.about-cover figure img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(1) contrast(1.06); }
.about-cover figcaption { position: absolute; right: 0; bottom: 0; padding: 0.6rem; background: var(--paper); }
.about-cover__intro { z-index: 2; grid-column: 1 / 7; grid-row: 2; max-width: 36rem; font-size: clamp(1.2rem, 2.2vw, 2rem); line-height: 1.25; }
.about-statement { display: grid; grid-template-columns: 0.45fr 1.55fr; gap: 3rem; padding: clamp(6rem, 12vw, 12rem) var(--page); border-bottom: 1px solid var(--line); }
.about-statement blockquote { max-width: 20ch; font-size: clamp(2.6rem, 6vw, 6.5rem); line-height: 0.97; font-weight: 500; }
.about-copy { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(3rem, 8vw, 9rem); padding: clamp(6rem, 10vw, 10rem) var(--page); }
.about-copy h2 { max-width: 11ch; margin-top: 1rem; font-size: clamp(2.8rem, 5.5vw, 6rem); line-height: 0.95; font-weight: 500; }
.about-copy > div:last-child { align-self: end; display: grid; gap: 1.5rem; color: var(--muted); font-size: clamp(1.05rem, 1.5vw, 1.35rem); line-height: 1.5; }
.practice-ledger { padding: 0 var(--page) clamp(7rem, 12vw, 12rem); }
.practice-ledger article { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; padding: 1.5rem 0 3rem; border-top: 1px solid var(--line); }
.practice-ledger__index { display: grid; grid-template-columns: 2rem 1fr; gap: 1rem; }
.practice-ledger__index span { color: var(--muted); font-size: 0.68rem; }
.practice-ledger h2 { font-size: clamp(1.8rem, 3vw, 3.2rem); line-height: 1; font-weight: 500; }
.practice-ledger article > p { max-width: 25rem; color: var(--muted); line-height: 1.45; }
.practice-ledger li { padding: 0.55rem 0; border-bottom: 1px solid var(--line); font-size: 0.72rem; text-transform: uppercase; }
.about-now { display: grid; grid-template-columns: 0.45fr 1fr 0.75fr; gap: 3rem; padding: clamp(5rem, 9vw, 9rem) var(--page); border-top: 1px solid var(--line); }
.about-now h2 { font-size: clamp(2.5rem, 5vw, 5.5rem); line-height: 0.95; font-weight: 500; }
.about-now > div { color: var(--muted); line-height: 1.5; }
.about-now .rule-link { margin-top: 2rem; color: var(--ink); }
@media (max-width: 780px) {
  .about-cover { min-height: 80svh; }
  .about-cover__title { grid-column: 1 / 13; }
  .about-cover figure { grid-column: 7 / 13; opacity: 0.48; }
  .about-cover__intro { grid-column: 1 / 10; }
  .about-statement, .about-copy, .about-now { grid-template-columns: 1fr; }
  .practice-ledger article { grid-template-columns: 1fr; }
}
@media (max-width: 520px) { .about-cover figure { grid-column: 6 / 13; } .about-cover__intro { grid-column: 1 / 13; } }
</style>
