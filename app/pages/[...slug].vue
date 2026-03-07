<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData("page-" + route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

// Use the page's own title if available, otherwise derive from the last slug segment
const pageTitle = computed(() => {
  if (page.value?.title) return page.value.title;
  const segments = route.path.replace(/^\//, "").split("/");
  const last = segments[segments.length - 1];
  return last
    ? last.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "";
});

useHead({
  title: pageTitle,
});
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page" />
</template>
