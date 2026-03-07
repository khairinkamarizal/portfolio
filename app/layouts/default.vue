<template>
  <VideoBackground />
  <div
    class="min-h-screen w-full overflow-x-hidden bg-neutral-50/70 dark:bg-neutral-950/70 text-neutral-950 dark:text-neutral-50 selection:bg-neutral-950 selection:text-neutral-50 dark:selection:bg-neutral-50 dark:selection:text-neutral-950 transition-colors duration-300 flex flex-col backdrop-blur-sm">
    <AppHeader />

    <main class="flex-1">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "en" },
  bodyAttrs: { class: "antialiased" },
  titleTemplate: (title) =>
    title ? `Khairin Kamarizal — ${title}` : "Khairin Kamarizal",
});
</script>
