<template>
  <section class="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24 border-t border-black/10 dark:border-white/10">
    <!-- Eyebrow -->
    <p
      class="text-xs tracking-widest uppercase opacity-40 mb-6 font-mono text-black dark:text-white">
      Let's Talk
    </p>

    <!-- Large headline -->
    <h2 class="text-3xl md:text-4xl font-bold leading-tight text-black dark:text-white mb-4 max-w-2xl">
      Have a project in mind?
    </h2>

    <!-- Sub-text -->
    <p class="text-sm opacity-60 leading-relaxed max-w-md text-black dark:text-white mb-10">
      Whether it's a brand identity, a motion project, or something entirely new — I'm always open to a conversation.
    </p>

    <!-- Links -->
    <div class="flex items-center gap-4 flex-wrap">
      <a
        href="mailto:khairinkamarizal@gmail.com"
        class="text-xs tracking-widest uppercase font-mono border border-black dark:border-white px-5 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200 text-black dark:text-white">
        Send Email →
      </a>
      <NuxtLink
        to="/about"
        class="text-xs tracking-widest uppercase font-mono opacity-40 hover:opacity-100 transition-opacity duration-200 text-black dark:text-white">
        More about me
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
// No props — static CTA section
</script>
