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

        <div v-if="posts && posts.length > 0" class="flex flex-col gap-0 divide-y divide-black/10 dark:divide-white/10">
          <PostCard
            v-for="post in posts"
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
</script>
