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
          <NuxtLink
            v-for="post in posts"
            :key="post.path"
            :to="post.path"
            class="group flex flex-col gap-1.5 py-5 first:pt-0 hover:opacity-70 transition-opacity duration-200">
            <div class="flex justify-between items-start gap-4">
              <h2 class="text-sm font-medium leading-snug">{{ post.title }}</h2>
              <span class="text-xs opacity-40 shrink-0">{{ formatDate(post.date) }}</span>
            </div>
            <p class="text-sm opacity-60 leading-relaxed dark:font-light">{{ post.description }}</p>
            <div v-if="post.tags?.length" class="flex flex-wrap gap-1.5 mt-0.5">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="text-[10px] tracking-wider border border-black/20 dark:border-white/20 px-2 py-0.5">
                {{ tag.toUpperCase() }}
              </span>
            </div>
          </NuxtLink>
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
  title: "Writing",
  meta: [
    {
      name: "description",
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

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
</script>
