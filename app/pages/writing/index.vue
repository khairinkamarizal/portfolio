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

        <div v-if="filteredPosts && filteredPosts.length > 0" class="flex flex-col gap-0 divide-y divide-black/10 dark:divide-white/10">
          <PostCard
            v-for="post in filteredPosts"
            :key="post.path"
            :title="post.title"
            :description="post.description"
            :date="post.date"
            :tags="post.tags"
            :slug="post.stem?.split('/').pop() || ''" />
        </div>

        <div v-else class="flex flex-col gap-2">
          <p class="text-sm opacity-50">Nothing published yet. Check back soon.</p>
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
</script>
