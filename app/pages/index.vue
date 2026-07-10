<template>
  <NuxtLayout name="simple">
    <section class="home-hero" aria-labelledby="hero-title">
      <div class="home-hero__intro animate-appear">
        <p class="eyebrow">Independent designer + developer</p>
        <div class="availability"><span aria-hidden="true" /> Available for selected projects</div>
      </div>

      <h1 id="hero-title" class="home-hero__name animate-appear animate-appear-delay-1">
        <span>Khairin</span>
        <span>Kamarizal<span class="home-hero__dot">.</span></span>
      </h1>

      <div class="home-hero__portrait animate-appear animate-appear-delay-2">
        <NuxtImg
          src="/assets/dp.webp"
          alt="Portrait of Khairin Kamarizal"
          width="520"
          height="650"
          format="webp"
          loading="eager"
          fetchpriority="high" />
        <span class="home-hero__portrait-label eyebrow">Cyberjaya / MY</span>
      </div>

      <div class="home-hero__statement animate-appear animate-appear-delay-3">
        <p>I shape brands and digital experiences with a sharp eye for identity, interaction, and the details that make work memorable.</p>
        <div class="home-hero__actions">
          <NuxtLink to="/work" class="button-primary">Explore selected work <ArrowDownRight :size="16" /></NuxtLink>
          <NuxtLink to="/message" class="button-secondary">Start a conversation</NuxtLink>
        </div>
      </div>

      <div class="home-hero__edition eyebrow">Portfolio / 2026</div>
    </section>

    <div class="discipline-strip" aria-label="Disciplines">
      <div v-for="(discipline, index) in disciplines" :key="discipline">
        <span>{{ discipline }}</span><i aria-hidden="true">{{ index % 2 === 0 ? '●' : '✦' }}</i>
      </div>
    </div>

    <section aria-labelledby="selected-work-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">01 / Selected work</p>
          <h2 id="selected-work-title">Proof, not promises.</h2>
        </div>
        <div>
          <p class="section-heading__copy">Identity, motion, and digital work built around one principle: the idea should be clear enough to remember and flexible enough to live.</p>
          <NuxtLink to="/work" class="text-link">View the full archive <ArrowUpRight :size="15" /></NuxtLink>
        </div>
      </div>

      <div class="work-grid">
        <WorkCard
          v-for="(project, index) in featuredProjects"
          :key="project.title"
          :title="project.title"
          :year="project.year"
          :category="project.category"
          :tags="project.services"
          :description="project.description"
          :outcome="project.outcome"
          :url="project.url"
          :thumbnail="project.thumbnail"
          :tone="project.tone"
          :index="index + 1"
          :eager="index < 2" />
      </div>
    </section>

    <section class="capabilities" aria-labelledby="capabilities-title">
      <div class="capabilities__heading">
        <p class="eyebrow">02 / What I bring</p>
        <h2 id="capabilities-title">One point of view.<br>Three connected practices.</h2>
      </div>

      <div class="capabilities__list">
        <article v-for="(item, index) in capabilities" :key="item.title">
          <span class="eyebrow">0{{ index + 1 }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <div>
            <span v-for="skill in item.skills" :key="skill">{{ skill }}</span>
          </div>
        </article>
      </div>
    </section>

    <section class="principle" aria-labelledby="principle-title">
      <div class="principle__aside">
        <p class="eyebrow">My approach</p>
        <p>Strategy gives the work direction. Craft gives it presence. Code makes it real.</p>
      </div>
      <div>
        <h2 id="principle-title">Good design earns attention.<br><em>Great design directs it.</em></h2>
        <p class="principle__copy">I move between concept and implementation, so the original idea survives the journey from first sketch to final screen. Fewer handoff gaps. More intentional outcomes.</p>
        <NuxtLink to="/about" class="text-link">More about how I work <ArrowUpRight :size="15" /></NuxtLink>
      </div>
    </section>

    <section class="process" aria-labelledby="process-title">
      <div class="process__intro">
        <p class="eyebrow">03 / Process</p>
        <h2 id="process-title">Clear enough to follow.<br>Flexible enough to discover.</h2>
      </div>
      <ol>
        <li v-for="(step, index) in process" :key="step.title">
          <span class="eyebrow">0{{ index + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </li>
      </ol>
    </section>

    <section v-if="latestPosts?.length" class="journal" aria-labelledby="journal-title">
      <div class="journal__heading">
        <div>
          <p class="eyebrow">04 / Field notes</p>
          <h2 id="journal-title">Thinking in public.</h2>
        </div>
        <NuxtLink to="/writing" class="text-link">Read all notes <ArrowUpRight :size="15" /></NuxtLink>
      </div>

      <div class="journal__list">
        <NuxtLink v-for="(post, index) in latestPosts" :key="post.path" :to="post.path" class="journal-row">
          <span class="eyebrow">{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
          </div>
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          <ArrowUpRight aria-hidden="true" />
        </NuxtLink>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowDownRight, ArrowUpRight } from 'lucide-vue-next'
import { projects } from '~/data/projects'

definePageMeta({ layout: false })

const featuredProjects = projects.filter(project => project.featured)

const { data: latestPosts } = await useAsyncData('latest-posts-home', () =>
  queryCollection('writing').where('draft', '=', false).order('date', 'DESC').limit(3).all()
)

const disciplines = ['Brand identity', 'Digital design', 'Creative development', 'Motion systems', 'Art direction']

const capabilities = [
  {
    title: 'Identity',
    description: 'Brand systems with a clear idea, a recognizable voice, and enough range to work everywhere.',
    skills: ['Strategy', 'Naming', 'Visual identity', 'Guidelines'],
  },
  {
    title: 'Experience',
    description: 'Interfaces that turn hierarchy, rhythm, and interaction into an experience people understand quickly.',
    skills: ['UI/UX', 'Design systems', 'Prototyping', 'Motion'],
  },
  {
    title: 'Build',
    description: 'Responsive, accessible frontends where the implementation keeps the precision of the design.',
    skills: ['Vue', 'Nuxt', 'TypeScript', 'Creative code'],
  },
]

const process = [
  { title: 'Discover', description: 'Find the real problem, the audience, and the context before choosing a visual answer.' },
  { title: 'Define', description: 'Turn insight into a focused direction with principles the whole project can use.' },
  { title: 'Design', description: 'Explore broadly, test the strongest ideas, and refine the system through real applications.' },
  { title: 'Deliver', description: 'Build, document, and launch with the small decisions treated as part of the big idea.' },
]

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(new Date(value))
}

useSeoMeta({
  title: 'Independent Designer + Developer',
  description: 'Khairin Kamarizal is an independent designer and developer in Malaysia, creating memorable brand identities and digital experiences.',
  ogTitle: 'Khairin Kamarizal | Independent Designer + Developer',
  ogDescription: 'Brand identities and digital experiences shaped with clarity, character, and craft.',
  ogImage: '/assets/preview.jpg',
  ogUrl: 'https://khair.ink',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.home-hero {
  position: relative;
  min-height: calc(100svh - 5rem);
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: auto 1fr auto;
  gap: 1.5rem;
  padding: clamp(2rem, 4vw, 4rem) var(--page) 2rem;
  border-bottom: 1px solid var(--line);
}

.home-hero__intro {
  grid-column: 1 / 13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.availability {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.78rem;
  color: var(--muted);
}

.availability span {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #24a148;
  box-shadow: 0 0 0 4px color-mix(in srgb, #24a148 18%, transparent);
}

.home-hero__name {
  z-index: 2;
  grid-column: 1 / 11;
  align-self: center;
  display: flex;
  flex-direction: column;
  font-size: clamp(4.2rem, 11.5vw, 11.5rem);
  line-height: 0.77;
  font-weight: 650;
  letter-spacing: 0;
}

.home-hero__name span:last-child {
  padding-left: 8vw;
}

.home-hero__dot {
  color: var(--red);
  padding: 0 !important;
}

.home-hero__portrait {
  position: absolute;
  z-index: 1;
  top: 17%;
  right: var(--page);
  width: clamp(12rem, 22vw, 24rem);
  aspect-ratio: 0.8;
  overflow: hidden;
  background: var(--blue);
}

.home-hero__portrait::after {
  content: '';
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 0 1px rgba(17, 17, 15, 0.18);
}

.home-hero__portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.04);
  transition: filter 450ms ease, transform 700ms var(--ease);
}

.home-hero__portrait:hover img {
  filter: grayscale(0%) contrast(1);
  transform: scale(1.025);
}

.home-hero__portrait-label {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
  padding: 0.65rem 0.8rem;
  background: var(--blue);
  color: white;
}

.home-hero__statement {
  z-index: 3;
  grid-column: 1 / 7;
  align-self: end;
  max-width: 42rem;
}

.home-hero__statement > p {
  max-width: 35rem;
  font-size: clamp(1.15rem, 2vw, 1.7rem);
  line-height: 1.28;
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.5rem;
}

.home-hero__edition {
  grid-column: 10 / 13;
  align-self: end;
  justify-self: end;
}

.discipline-strip {
  display: flex;
  justify-content: space-around;
  gap: 1.5rem;
  padding: 1.1rem var(--page);
  overflow: hidden;
  border-bottom: 1px solid var(--line);
  background: var(--yellow);
  color: #11110f;
  font-family: 'Space Mono', monospace;
  font-size: 0.64rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.discipline-strip div {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.discipline-strip i {
  color: var(--red);
  font-style: normal;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 1.5rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid currentColor;
  font-family: 'Space Mono', monospace;
  font-size: 0.66rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.text-link svg {
  transition: transform 180ms var(--ease);
}

.text-link:hover svg {
  transform: translate(0.2rem, -0.2rem);
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: clamp(2.5rem, 6vw, 7rem) clamp(1rem, 2vw, 2rem);
  padding: 0 var(--page) clamp(6rem, 10vw, 10rem);
}

.work-grid > :nth-child(1),
.work-grid > :nth-child(4) {
  grid-column: span 7;
}

.work-grid > :nth-child(2),
.work-grid > :nth-child(3) {
  grid-column: span 5;
}

.work-grid > :nth-child(2) {
  margin-top: 14vw;
}

.capabilities {
  padding: clamp(5rem, 9vw, 9rem) var(--page);
  background: var(--blue);
  color: white;
}

.capabilities__heading {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  align-items: start;
  padding-bottom: clamp(3rem, 7vw, 7rem);
}

.capabilities__heading h2 {
  font-size: clamp(2.7rem, 6vw, 6.5rem);
  line-height: 0.95;
  font-weight: 620;
}

.capabilities__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
}

.capabilities article {
  min-width: 0;
  padding: 2rem clamp(1rem, 2.4vw, 2.5rem) 0;
  border-left: 1px solid rgba(255, 255, 255, 0.4);
}

.capabilities article:first-child {
  border-left: 0;
  padding-left: 0;
}

.capabilities article h3 {
  margin: 2rem 0 1rem;
  font-size: clamp(2rem, 3.5vw, 3.7rem);
  line-height: 1;
  font-weight: 600;
}

.capabilities article > p {
  max-width: 24rem;
  min-height: 6rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.75);
}

.capabilities article div {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 2rem;
}

.capabilities article div span {
  padding: 0.4rem 0.55rem;
  border: 1px solid rgba(255, 255, 255, 0.35);
  font-family: 'Space Mono', monospace;
  font-size: 0.58rem;
  text-transform: uppercase;
}

.principle {
  display: grid;
  grid-template-columns: 0.7fr 1.5fr;
  gap: clamp(3rem, 9vw, 10rem);
  padding: clamp(6rem, 12vw, 12rem) var(--page);
  border-bottom: 1px solid var(--line);
}

.principle__aside > p:last-child {
  max-width: 16rem;
  margin-top: 2rem;
  color: var(--muted);
  line-height: 1.45;
}

.principle h2 {
  font-size: clamp(3rem, 7.5vw, 8rem);
  line-height: 0.94;
  font-weight: 600;
}

.principle h2 em {
  color: var(--red);
  font-family: Georgia, serif;
  font-weight: 400;
}

.principle__copy {
  max-width: 39rem;
  margin: 3rem 0 0 auto;
  color: var(--muted);
  font-size: clamp(1.05rem, 1.5vw, 1.35rem);
  line-height: 1.5;
}

.principle .text-link {
  margin-left: calc(100% - min(39rem, 100%));
}

.process {
  padding: clamp(5rem, 10vw, 10rem) var(--page);
}

.process__intro {
  display: grid;
  grid-template-columns: 0.7fr 1.5fr;
  gap: clamp(3rem, 9vw, 10rem);
  margin-bottom: clamp(4rem, 8vw, 8rem);
}

.process__intro h2 {
  font-size: clamp(2.8rem, 5.8vw, 6rem);
  line-height: 0.96;
  font-weight: 600;
}

.process ol {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--line);
}

.process li {
  min-width: 0;
  padding: 1.5rem 1.5rem 0;
  border-left: 1px solid var(--line);
}

.process li:first-child {
  padding-left: 0;
  border-left: 0;
}

.process li h3 {
  margin: 3rem 0 1rem;
  font-size: clamp(1.5rem, 2.5vw, 2.7rem);
  font-weight: 600;
}

.process li p {
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

.journal {
  padding: clamp(5rem, 9vw, 9rem) var(--page);
  border-top: 1px solid var(--line);
}

.journal__heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 4rem;
}

.journal__heading h2 {
  margin-top: 1rem;
  font-size: clamp(2.7rem, 6vw, 6rem);
  line-height: 1;
  font-weight: 620;
}

.journal-row {
  display: grid;
  grid-template-columns: 4rem minmax(0, 1fr) 7rem 2rem;
  gap: 1.5rem;
  align-items: center;
  padding: 1.75rem 0;
  border-top: 1px solid var(--line);
  transition: padding 220ms var(--ease), color 180ms ease;
}

.journal-row:last-child {
  border-bottom: 1px solid var(--line);
}

.journal-row:hover {
  padding-left: 1rem;
  color: var(--blue);
}

.journal-row h3 {
  font-size: clamp(1.3rem, 2.5vw, 2.5rem);
  line-height: 1.1;
  font-weight: 600;
}

.journal-row p {
  margin-top: 0.45rem;
  color: var(--muted);
  line-height: 1.4;
}

.journal-row time {
  font-family: 'Space Mono', monospace;
  font-size: 0.64rem;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .home-hero {
    min-height: 76svh;
  }

  .home-hero__name {
    grid-column: 1 / 13;
  }

  .home-hero__portrait {
    opacity: 0.48;
    width: clamp(11rem, 32vw, 18rem);
  }

  .home-hero__statement {
    grid-column: 1 / 9;
  }

  .capabilities__heading,
  .principle,
  .process__intro {
    grid-template-columns: 1fr;
  }

  .capabilities__list {
    grid-template-columns: 1fr;
  }

  .capabilities article,
  .capabilities article:first-child {
    display: grid;
    grid-template-columns: 3rem 0.8fr 1fr;
    gap: 1.5rem;
    padding: 2rem 0;
    border-left: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  .capabilities article h3,
  .capabilities article > p,
  .capabilities article div {
    min-height: 0;
    margin: 0;
  }

  .capabilities article div {
    grid-column: 2 / 4;
  }

  .principle__copy {
    margin-left: 0;
  }

  .principle .text-link {
    margin-left: 0;
  }
}

@media (max-width: 767px) {
  .home-hero {
    min-height: 82svh;
    grid-template-rows: auto 1fr auto auto;
    padding-top: 1.5rem;
  }

  .home-hero__intro {
    align-items: flex-start;
  }

  .availability {
    max-width: 8rem;
    font-size: 0.68rem;
  }

  .home-hero__name {
    align-self: center;
    font-size: clamp(3.5rem, 17vw, 6.5rem);
  }

  .home-hero__name span:last-child {
    padding-left: 0;
  }

  .home-hero__portrait {
    top: 24%;
    right: -2rem;
    width: 43vw;
    opacity: 0.38;
  }

  .home-hero__statement {
    grid-column: 1 / 13;
  }

  .home-hero__statement > p {
    max-width: 24rem;
  }

  .home-hero__edition {
    grid-column: 1 / 13;
    justify-self: start;
  }

  .discipline-strip {
    justify-content: flex-start;
  }

  .work-grid {
    display: flex;
    flex-direction: column;
  }

  .work-grid > :nth-child(2) {
    margin-top: 0;
  }

  .capabilities article,
  .capabilities article:first-child {
    grid-template-columns: 2.5rem 1fr;
  }

  .capabilities article > p,
  .capabilities article div {
    grid-column: 2;
  }

  .process ol {
    grid-template-columns: 1fr 1fr;
  }

  .process li,
  .process li:first-child {
    padding: 1.5rem;
    border-left: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .process li:nth-child(odd) {
    padding-left: 0;
    border-left: 0;
  }

  .journal__heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .journal-row {
    grid-template-columns: 2.5rem minmax(0, 1fr) 1.25rem;
    gap: 0.75rem;
  }

  .journal-row time {
    display: none;
  }
}

@media (max-width: 440px) {
  .home-hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .process ol {
    grid-template-columns: 1fr;
  }

  .process li,
  .process li:first-child,
  .process li:nth-child(odd) {
    padding: 1.5rem 0;
    border-left: 0;
  }
}
</style>
