<template>
  <NuxtLayout name="simple">
    <section class="about-hero">
      <div class="about-hero__title">
        <p class="eyebrow">About / Khairin Kamarizal</p>
        <h1>Designer by instinct.<br><em>Builder by practice.</em></h1>
      </div>
      <figure>
        <NuxtImg src="/assets/dp.webp" alt="Khairin Kamarizal" width="640" height="800" format="webp" loading="eager" />
        <figcaption class="eyebrow">Cyberjaya, Malaysia</figcaption>
      </figure>
      <div class="about-hero__bio">
        <p>I am an independent Malaysian designer and developer working across brand identity, digital experiences, and creative technology.</p>
        <p>My advantage is range without disconnect: I can shape the idea, define the visual system, and understand what it takes to make it work in the browser.</p>
      </div>
    </section>

    <section class="about-belief">
      <p class="eyebrow">A working belief</p>
      <blockquote>Design is not decoration added at the end. It is the logic that decides what matters, what comes next, and what people remember.</blockquote>
    </section>

    <section class="about-practice" aria-labelledby="practice-title">
      <div>
        <p class="eyebrow">The practice</p>
        <h2 id="practice-title">From first question<br>to final detail.</h2>
      </div>
      <div class="about-practice__copy">
        <p>I care about typography that gives content a voice, systems that make brands recognizable, and interactions that feel obvious only after someone has carefully designed them.</p>
        <p>That means research before styling, a reason behind every visual move, and close attention to how the work behaves beyond the polished mockup.</p>
      </div>
    </section>

    <section class="about-grid" aria-label="Capabilities and tools">
      <article v-for="group in practiceGroups" :key="group.title">
        <p class="eyebrow">{{ group.number }}</p>
        <h2>{{ group.title }}</h2>
        <p>{{ group.description }}</p>
        <ul>
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </section>

    <section class="about-now">
      <div>
        <p class="eyebrow">Now</p>
        <h2>Open to thoughtful collaborations.</h2>
      </div>
      <div>
        <p>Available for selected identity, web, and creative development projects. Remote worldwide, with local collaboration across the Klang Valley.</p>
        <NuxtLink to="/message" class="button-primary">Start a conversation <ArrowUpRight :size="15" /></NuxtLink>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

definePageMeta({ layout: false })

const practiceGroups = [
  {
    number: '01 / Identity',
    title: 'Give the idea a face.',
    description: 'Distinctive systems grounded in positioning, not trends.',
    items: ['Brand strategy', 'Visual identity', 'Logo systems', 'Art direction', 'Guidelines'],
  },
  {
    number: '02 / Experience',
    title: 'Make the path feel natural.',
    description: 'Digital experiences built around hierarchy, rhythm, and human behavior.',
    items: ['UI/UX design', 'Information architecture', 'Design systems', 'Prototyping', 'Motion'],
  },
  {
    number: '03 / Development',
    title: 'Protect the intent in code.',
    description: 'Responsive frontends that keep the character and precision of the design.',
    items: ['Vue and Nuxt', 'TypeScript', 'Tailwind CSS', 'Accessibility', 'Performance'],
  },
]

useSeoMeta({
  title: 'About',
  description: 'About Khairin Kamarizal, an independent Malaysian designer and developer working across identity, digital experiences, and creative technology.',
  ogTitle: 'About | Khairin Kamarizal',
  ogUrl: 'https://khair.ink/about',
})
</script>

<style scoped>
.about-hero {
  min-height: calc(100svh - 5rem);
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 2rem;
  align-items: end;
  padding: clamp(3rem, 7vw, 7rem) var(--page);
  border-bottom: 1px solid var(--line);
}

.about-hero__title {
  z-index: 2;
  grid-column: 1 / 11;
  grid-row: 1;
  align-self: start;
}

.about-hero h1 {
  margin-top: 1.5rem;
  font-size: clamp(4rem, 9.5vw, 10rem);
  line-height: 0.86;
  font-weight: 630;
}

.about-hero h1 em {
  color: var(--red);
  font-family: Georgia, serif;
  font-weight: 400;
}

.about-hero figure {
  position: relative;
  grid-column: 7 / 12;
  grid-row: 1 / 3;
  align-self: end;
  aspect-ratio: 0.8;
  max-height: 65svh;
  overflow: hidden;
  background: var(--blue);
}

.about-hero figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
}

.about-hero figcaption {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0.75rem;
  background: var(--blue);
  color: white;
}

.about-hero__bio {
  z-index: 2;
  grid-column: 1 / 6;
  grid-row: 2;
  display: grid;
  gap: 1rem;
  font-size: clamp(1.1rem, 1.8vw, 1.5rem);
  line-height: 1.4;
}

.about-belief {
  display: grid;
  grid-template-columns: 0.45fr 1.55fr;
  gap: 3rem;
  padding: clamp(6rem, 12vw, 12rem) var(--page);
  background: var(--red);
  color: white;
}

.about-belief blockquote {
  max-width: 72rem;
  font-size: clamp(2.5rem, 6vw, 6rem);
  line-height: 0.98;
  font-weight: 560;
}

.about-practice {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(3rem, 8vw, 9rem);
  padding: clamp(6rem, 10vw, 10rem) var(--page);
}

.about-practice h2 {
  margin-top: 1.5rem;
  font-size: clamp(3rem, 6vw, 6.5rem);
  line-height: 0.95;
  font-weight: 620;
}

.about-practice__copy {
  align-self: end;
  display: grid;
  gap: 1.5rem;
  color: var(--muted);
  font-size: clamp(1.1rem, 1.6vw, 1.4rem);
  line-height: 1.5;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 var(--page) clamp(7rem, 12vw, 12rem);
}

.about-grid article {
  padding: 2rem clamp(1.25rem, 2.5vw, 2.5rem);
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.about-grid article:first-child {
  padding-left: 0;
  border-left: 0;
}

.about-grid h2 {
  min-height: 6.5rem;
  margin: 2rem 0 1rem;
  font-size: clamp(1.8rem, 3vw, 3.2rem);
  line-height: 1.05;
  font-weight: 600;
}

.about-grid article > p:nth-of-type(2) {
  min-height: 5rem;
  color: var(--muted);
  line-height: 1.45;
}

.about-grid ul {
  margin-top: 2rem;
  border-top: 1px solid var(--line);
}

.about-grid li {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--line);
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  text-transform: uppercase;
}

.about-now {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: clamp(5rem, 9vw, 9rem) var(--page);
  border-top: 1px solid var(--line);
}

.about-now h2 {
  margin-top: 1rem;
  font-size: clamp(2.8rem, 5vw, 5.5rem);
  line-height: 0.98;
  font-weight: 620;
}

.about-now > div:last-child {
  align-self: end;
  max-width: 34rem;
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.5;
}

.about-now .button-primary {
  margin-top: 2rem;
  color: var(--paper);
}

@media (max-width: 800px) {
  .about-hero {
    min-height: 80svh;
  }

  .about-hero__title {
    grid-column: 1 / 13;
  }

  .about-hero figure {
    grid-column: 7 / 13;
    opacity: 0.45;
  }

  .about-hero__bio {
    grid-column: 1 / 9;
  }

  .about-belief,
  .about-practice,
  .about-now {
    grid-template-columns: 1fr;
  }

  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-grid article,
  .about-grid article:first-child {
    padding: 2rem 0 4rem;
    border-left: 0;
  }

  .about-grid h2,
  .about-grid article > p:nth-of-type(2) {
    min-height: 0;
  }
}

@media (max-width: 540px) {
  .about-hero figure {
    grid-column: 6 / 13;
  }

  .about-hero__bio {
    grid-column: 1 / 12;
  }
}
</style>
