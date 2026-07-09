<template>
  <NuxtLayout name="simple">
    <template #default>
      <div class="flex flex-col gap-8 mt-10">

        <!-- Back link -->
        <NuxtLink
          to="/writing"
          class="flex items-center gap-1.5 text-xs opacity-50 hover:opacity-100 transition-opacity duration-200 w-fit">
          <ArrowLeft class="w-3 h-3" />
          <span>Writing</span>
        </NuxtLink>

        <!-- Post header -->
        <div class="flex flex-col gap-3" v-if="post">
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="text-[10px] tracking-wider border border-black/20 dark:border-white/20 px-2 py-0.5">
              {{ tag.toUpperCase() }}
            </span>
          </div>
          <h1 class="text-2xl leading-tight dark:font-light">{{ post.title }}</h1>
          <div class="flex items-center gap-2">
            <span class="text-xs opacity-30">{{ readingTime }}</span>
            <span class="text-xs opacity-50">{{ formatDate(post.date) }}</span>
          </div>
        </div>

        <!-- Post body -->
        <div
          v-if="post"
          class="prose prose-sm dark:prose-invert max-w-none
            prose-headings:font-medium prose-headings:tracking-tight
            prose-h1:text-xl prose-h2:text-lg prose-h3:text-base
            prose-p:opacity-70 prose-p:leading-relaxed prose-p:dark:font-light
            prose-a:underline prose-a:underline-offset-2
            prose-code:text-sm prose-code:font-mono
            prose-pre:bg-black/5 dark:prose-pre:bg-white/5 prose-pre:rounded-none
            prose-blockquote:border-l-2 prose-blockquote:border-black/20 dark:prose-blockquote:border-white/20 prose-blockquote:pl-4 prose-blockquote:opacity-70
            prose-li:opacity-70">
          <ContentRenderer :value="post" />
        </div>

      </div>
    </template>

    <template #footer-actions>
      <NuxtLink
        to="/writing"
        class="group flex items-center">
        <div class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
        <span>Back to writing</span>
        <div class="flex-1 group-hover:flex-none transition-all duration-300 group-hover:w-2 h-1"></div>
        <ArrowUpRight class="group-hover:rotate-45 transition-transform duration-300" />
      </NuxtLink>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowUpRight } from "lucide-vue-next";

definePageMeta({
  layout: false,
});

const route = useRoute();

const { data: post } = await useAsyncData("writing-" + route.path, () =>
  queryCollection("writing").path(route.path).first()
);

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found",
    fatal: true,
  });
}

useHead({
  title: computed(() => post.value?.title ? `${post.value.title} — Khairinkamarizal` : "Khairinkamarizal"),
  meta: [
    {
      name: "description",
      content: computed(() => post.value?.description || ""),
    },
    {
      property: "og:title",
      content: computed(() => post.value?.title ? `${post.value.title} — Khairinkamarizal` : "Khairinkamarizal"),
    },
    {
      property: "og:description",
      content: computed(() => post.value?.description || ""),
    },
  ],
});

const readingTime = computed(() => {
  if (!post.value?.body) return ""
  // Convert AST body to text by extracting from description and title
  const content = `${post.value.title || ''} ${post.value.description || ''}`
  const { text } = useReadingTime(content)
  return text
})

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>
