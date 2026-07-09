<template>
  <NuxtLayout name="simple">
    <template #default>

      <!-- ============================================ -->
      <!-- HERO: page heading                           -->
      <!-- ============================================ -->
      <section class="w-full border-b border-black/10 dark:border-white/10 px-6 md:px-12 lg:px-20 py-16 lg:py-24">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h1 class="font-mono text-4xl md:text-5xl font-bold tracking-tight leading-none uppercase">
            Writing<span class="font-mono text-xs opacity-30 ml-2">({{ posts.length }})</span>
          </h1>
          <p class="text-sm opacity-60 max-w-sm leading-relaxed md:text-right">
            Thoughts on design, engineering, and the space between.
          </p>
        </div>
      </section>

      <!-- ============================================ -->
      <!-- FEATURED POST: full-width                    -->
      <!-- ============================================ -->
      <section
        v-if="featuredPost"
        class="w-full border-b border-black/10 dark:border-white/10">
        <NuxtLink
          :to="`/writing/${featuredPost.slug}`"
          class="group block px-6 md:px-12 lg:px-20 py-12 lg:py-16 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-150">
          <div class="flex flex-col lg:flex-row lg:items-start lg:gap-16">
            <!-- Featured label + meta -->
            <div class="lg:w-1/3 flex flex-col gap-4 mb-6 lg:mb-0">
              <span class="text-xs tracking-widest uppercase font-mono opacity-50">
                Featured
              </span>
              <div class="flex items-center gap-3 text-xs opacity-50 font-mono">
                <span>{{ formatDate(featuredPost.date) }}</span>
                <span>·</span>
                <span>{{ featuredPost.readTime }}</span>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in featuredPost.tags"
                  :key="tag"
                  class="text-xs tracking-wide border border-black/10 dark:border-white/10 px-2 py-0.5 opacity-50">
                  {{ tag }}
                </span>
              </div>
            </div>
            <!-- Title + excerpt -->
            <div class="lg:w-2/3">
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight group-hover:opacity-70 transition-opacity duration-150">
                {{ featuredPost.title }}
              </h2>
              <p class="mt-4 text-sm leading-relaxed opacity-60 max-w-2xl">
                {{ featuredPost.excerpt }}
              </p>
              <span class="mt-6 inline-block text-xs tracking-widest uppercase font-mono opacity-50 group-hover:opacity-100 transition-opacity duration-150">
                Read More →
              </span>
            </div>
          </div>
        </NuxtLink>
      </section>

      <!-- ============================================ -->
      <!-- POSTS GRID: 3-col xl+, 2-col md, 1-col      -->
      <!-- ============================================ -->
      <section class="w-full px-6 md:px-12 lg:px-20 py-12 lg:py-16">
        <!-- Tag filter -->
        <div class="flex flex-wrap gap-2 mb-10">
          <button
            v-for="tag in allTags"
            :key="tag"
            :aria-pressed="activeTag === tag"
            :class="[
              'text-xs tracking-widest uppercase font-mono px-3 py-1.5 border transition-colors duration-150',
              activeTag === tag
                ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                : 'border-black/20 dark:border-white/20 hover:border-black/60 dark:hover:border-white/60',
            ]"
            @click="activeTag = tag">
            {{ tag }}
          </button>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10">
          <NuxtLink
            v-for="post in filteredPosts"
            :key="post.slug"
            :to="`/writing/${post.slug}`"
            class="group bg-white dark:bg-black p-6 flex flex-col gap-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-150">
            <div class="flex items-center justify-between">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in post.tags"
                  :key="tag"
                  class="text-xs tracking-wide border border-black/10 dark:border-white/10 px-2 py-0.5 opacity-50">
                  {{ tag }}
                </span>
              </div>
              <span class="text-xs font-mono opacity-50 shrink-0">
                {{ post.readTime }}
              </span>
            </div>
            <h3 class="text-base font-semibold leading-snug group-hover:opacity-70 transition-opacity duration-150">
              {{ post.title }}
            </h3>
            <p class="text-sm opacity-50 leading-relaxed line-clamp-3 flex-1">
              {{ post.excerpt }}
            </p>
            <span class="text-xs font-mono opacity-50 mt-auto">
              {{ formatDate(post.date) }}
            </span>
          </NuxtLink>
        </div>

        <!-- Empty state -->
        <EmptyState
          v-if="filteredPosts.length === 0"
          title="No posts found"
          :description="`No writing tagged with '${activeTag}' yet. Try a different tag.`" />
      </section>

    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">

useHead({
  title: 'Writing — Khairin Kamarizal',
  meta: [
    { name: 'description', content: 'Writing about design, development, and the creative process.' },
    { property: 'og:title', content: 'Writing — Khairin Kamarizal' },
    { property: 'og:description', content: 'Writing about design, development, and the creative process.' },
    { property: 'og:url', content: 'https://khair.ink/writing' },
  ],
});

definePageMeta({
  layout: false,
});

const posts = [
  {
    slug: "on-design-systems",
    title: "On Design Systems",
    date: "2024-06-01",
    readTime: "5 min",
    tags: ["Design", "Systems"],
    excerpt:
      "Design systems are not just component libraries. They are a shared language between designers and engineers — and the decisions baked into them shape every product decision downstream.",
    featured: true,
  },
  {
    slug: "the-case-for-boring-tech",
    title: "The Case for Boring Tech",
    date: "2024-05-12",
    readTime: "4 min",
    tags: ["Engineering"],
    excerpt:
      "Choosing proven, well-understood technology over the shiny new thing is often the most radical choice you can make on a team that values velocity.",
    featured: false,
  },
  {
    slug: "nuxt-4-first-look",
    title: "Nuxt 4 First Look",
    date: "2024-04-20",
    readTime: "6 min",
    tags: ["Vue", "Nuxt"],
    excerpt:
      "Nuxt 4 brings a new app directory structure, improved TypeScript support, and a faster dev server. Here's what changed and what it means for existing projects.",
    featured: false,
  },
  {
    slug: "typography-in-product-ui",
    title: "Typography in Product UI",
    date: "2024-03-15",
    readTime: "7 min",
    tags: ["Design", "Typography"],
    excerpt:
      "Most UI typography problems are not about choosing the right typeface. They are about hierarchy, spacing, and having the discipline to use fewer styles.",
    featured: false,
  },
  {
    slug: "building-with-tailwind",
    title: "Building with Tailwind at Scale",
    date: "2024-02-08",
    readTime: "5 min",
    tags: ["Engineering", "CSS"],
    excerpt:
      "Tailwind CSS gets a bad reputation for verbose HTML. Here is how we keep it manageable in large codebases without sacrificing the utility-first approach.",
    featured: false,
  },
];

const featuredPost = computed(() => posts.find((p) => p.featured) ?? null);
const nonFeaturedPosts = computed(() => posts.filter((p) => !p.featured));

function formatDate(d: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(new Date(d))
}

const allTags = computed(() => {
  const tags = new Set<string>(["All"]);
  nonFeaturedPosts.value.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags);
});

const activeTag = ref("All");

const filteredPosts = computed(() =>
  activeTag.value === "All"
    ? nonFeaturedPosts.value
    : nonFeaturedPosts.value.filter((p) => p.tags.includes(activeTag.value))
);
</script>
