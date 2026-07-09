<template>
  <NuxtLayout name="simple">
    <template #default>
      <div class="flex flex-col gap-10 mt-10">
        <div class="flex flex-col gap-2">
          <h1 class="text-xs opacity-50 tracking-widest">Writing</h1>
          <p class="text-2xl leading-tight dark:font-light">
            Thoughts on design, development, and the space between.
          </p>
        </div>

        <!-- Tag filter -->
        <div v-if="allTags.length > 0" class="flex flex-wrap gap-1.5">
          <button
            class="text-[10px] tracking-wider px-2 py-0.5 transition-colors duration-150"
            :class="selectedTag === null
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'border border-black/20 dark:border-white/20 opacity-60 hover:opacity-100'"
            @click="selectedTag = null">
            ALL
          </button>
          <button
            v-for="tag in allTags"
            :key="tag"
            class="text-[10px] tracking-wider px-2 py-0.5 transition-colors duration-150"
            :class="selectedTag === tag
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'border border-black/20 dark:border-white/20 opacity-60 hover:opacity-100'"
            @click="selectedTag = tag">
            {{ tag.toUpperCase() }}
          </button>
        </div>

        <!-- Featured post -->
        <FeaturedPost
          v-if="filteredPosts && filteredPosts.length > 0 && !selectedTag"
          :title="filteredPosts[0].title"
          :description="filteredPosts[0].description"
          :date="filteredPosts[0].date"
          :tags="filteredPosts[0].tags"
          :slug="filteredPosts[0].stem?.split('/').pop() || ''"
          :reading-time="getReadingTime(filteredPosts[0])" />

        <!-- Post count -->
        <div v-if="filteredPosts && filteredPosts.length > 0" class="flex items-center gap-2">
          <span class="text-xs opacity-40 tracking-wider">
            {{ filteredPosts.length }} {{ filteredPosts.length === 1 ? 'POST' : 'POSTS' }}
            <span v-if="selectedTag"> IN {{ selectedTag.toUpperCase() }}</span>
          </span>
        </div>

        <!-- On lg+: 2-column grid for remaining posts; on mobile: single column list -->
        <div v-if="remainingPosts.length > 0" class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0 divide-y divide-black/10 dark:divide-white/10 lg:divide-y-0">
          <PostCard
            v-for="post in remainingPosts"
            :key="post.path"
            :title="post.title"
            :description="post.description"
            :date="post.date"
            :tags="post.tags"
            :slug="post.stem?.split('/').pop() || ''"
            :reading-time="getReadingTime(post)" />
        </div>

        <div v-else class="flex flex-col gap-4 py-12 items-center text-center">
          <div class="flex flex-col gap-2">
            <p class="text-sm opacity-60">
              <span v-if="selectedTag">No posts found with the tag "{{ selectedTag }}".</span>
              <span v-else>Nothing published yet. Check back soon.</span>
            </p>
            <button
              v-if="selectedTag"
              @click="selectedTag = null"
              class="text-xs opacity-40 hover:opacity-100 transition-opacity duration-200 underline underline-offset-2">
              Clear filter
            </button>
          </div>
        </div>

        <!-- Stay updated -->
        <div class="flex flex-col gap-2">
          <h2 class="text-xs opacity-50 tracking-widest">Stay updated</h2>
          <NewsletterSignup />
        </div>
      </div>
    </template>

    <template #footer-actions>
      <NuxtLink
        to="/"
        class="group flex items-center">
        <div class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
        <span>Back to home</span>
        <div class="flex-1 group-hover:flex-none transition-all duration-300 group-hover:w-2 h-1"></div>
        <ArrowUpRight class="group-hover:rotate-45 transition-transform duration-300" />
      </NuxtLink>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next";

definePageMeta({
  layout: false,
});

useHead({
  title: "Writing — Khairinkamarizal",
  meta: [
    {
      name: "description",
      content: "Thoughts on design, development, and the space between.",
    },
    {
      property: "og:title",
      content: "Writing — Khairinkamarizal",
    },
    {
      property: "og:description",
      content: "Thoughts on design, development, and the space between.",
    },
  ],
});

const { data: posts } = await useAsyncData("writing-index", () =>
  queryCollection("writing")
    .where("draft", "=", false)
    .order("date", "DESC")
    .all()
);

const selectedTag = ref<string | null>(null);

const allTags = computed(() => {
  if (!posts.value) return [];
  const tagSet = new Set<string>();
  for (const post of posts.value) {
    for (const tag of post.tags ?? []) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet).sort();
});

const filteredPosts = computed(() => {
  if (!posts.value) return [];
  if (!selectedTag.value) return posts.value;
  return posts.value.filter((post) => post.tags?.includes(selectedTag.value!));
});

// When no tag filter is active, the first post is shown as FeaturedPost — skip it in the list
const remainingPosts = computed(() => {
  if (!filteredPosts.value.length) return [];
  if (!selectedTag.value) return filteredPosts.value.slice(1);
  return filteredPosts.value;
});

function getReadingTime(post: any): string {
  // Estimate reading time from title + description
  const content = `${post.title || ''} ${post.description || ''}`
  const { text } = useReadingTime(content)
  return text
}
</script>
