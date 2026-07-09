<template>
  <div class="flex flex-col gap-4 p-5 border border-black/10 dark:border-white/10">
    <!-- Author row -->
    <div class="flex items-center gap-4">
      <!-- Avatar -->
      <img
        src="/assets/dp.webp"
        alt="Khairin Kamarizal"
        width="48"
        height="48"
        class="w-12 h-12 object-cover grayscale" />
      <!-- Name + title -->
      <div class="flex flex-col gap-0.5">
        <span class="text-sm font-medium">Khairin Kamarizal</span>
        <span class="text-xs opacity-50">Creative Designer &amp; Developer</span>
      </div>
    </div>

    <!-- Short bio -->
    <p class="text-xs opacity-60 leading-relaxed dark:font-light">
      Ambitious and versatile creative designer skilled in branding, UI/UX, motion content and web development. Passionate about crafting designs that communicate clearly, inspire action and connect with people.
    </p>

    <!-- Social links -->
    <div class="flex items-center gap-4">
      <a
        href="https://instagram.com/khairinkamarizal"
        target="_blank"
        rel="noopener noreferrer"
        class="text-[11px] opacity-40 hover:opacity-100 transition-opacity duration-150 tracking-wider">
        INSTAGRAM
      </a>
      <a
        href="https://be.net/khairinkamarizal"
        target="_blank"
        rel="noopener noreferrer"
        class="text-[11px] opacity-40 hover:opacity-100 transition-opacity duration-150 tracking-wider">
        BEHANCE
      </a>
      <a
        href="https://linkedin.com/in/khairinkamarizal"
        target="_blank"
        rel="noopener noreferrer"
        class="text-[11px] opacity-40 hover:opacity-100 transition-opacity duration-150 tracking-wider">
        LINKEDIN
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * AuthorCard — author bio card for the bottom of writing posts.
 * Shows avatar, name, title, short bio, and social links.
 * Uses /assets/dp.webp for the avatar.
 */
</script>
