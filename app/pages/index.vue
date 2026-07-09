<template>
  <div class="w-full">
    <!-- Hero -->
    <section class="px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-16 border-b border-black/10 dark:border-white/10">
      <p
        class="text-xs tracking-widest uppercase opacity-40 mb-6 font-mono text-black dark:text-white"
        style="font-family: 'Space Mono', monospace">
        Designer &amp; Creative Director
      </p>
      <h1
        class="text-[12vw] md:text-[8vw] font-bold leading-none tracking-tight text-black dark:text-white mb-8">
        Khair<br />Studio
      </h1>
      <div class="flex items-center gap-4 flex-wrap">
        <StatusBadge text="Available for work" />
        <NuxtLink
          to="/work"
          class="text-xs tracking-widest uppercase font-mono opacity-60 hover:opacity-100 transition-opacity text-black dark:text-white"
          style="font-family: 'Space Mono', monospace">
          View Work →
        </NuxtLink>
      </div>
    </section>

    <!-- Marquee -->
    <MarqueeTicker
      :items="['Branding', 'Motion Design', 'Editorial', 'Identity Systems', 'Typography', 'Art Direction', 'Visual Design']" />

    <!-- Stats section with BigNumber decorative background -->
    <section class="relative overflow-hidden px-6 md:px-12 lg:px-20 py-16 border-b border-black/10 dark:border-white/10">
      <!-- Decorative ghosted background number (5 years experience) -->
      <div class="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none" aria-hidden="true">
        <BigNumber value="5" label="Years of experience" />
      </div>

      <!-- Stats grid -->
      <div class="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-y md:divide-y-0 divide-black/10 dark:divide-white/10 border border-black/10 dark:border-white/10">
        <StatCounter value="5+" label="Years Experience" />
        <StatCounter value="80+" label="Projects Delivered" />
        <StatCounter value="30+" label="Clients Worldwide" />
        <StatCounter value="12" label="Awards &amp; Recognition" />
      </div>
    </section>

    <!-- Featured work -->
    <section class="px-6 md:px-12 lg:px-20 py-16 border-b border-black/10 dark:border-white/10">
      <SectionDivider number="01" title="Featured Work" class="mb-10" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <FeaturedProject
          title="Brand Identity System"
          category="Branding"
          year="2024"
          description="A comprehensive identity system built around geometric forms and typographic precision."
          :tags="['Identity', 'Print', 'Digital']"
          href="/work/brand-identity" />

        <FeaturedProject
          title="Motion Design Toolkit"
          category="Motion"
          year="2023"
          description="A reusable animation framework for product UI — transitions, micro-interactions, and loading states."
          :tags="['Motion', 'UI', 'Animation']"
          href="/work/motion-toolkit" />
      </div>

      <div class="mt-10">
        <NuxtLink
          to="/work"
          class="text-xs tracking-widest uppercase font-mono opacity-40 hover:opacity-100 transition-opacity text-black dark:text-white"
          style="font-family: 'Space Mono', monospace">
          All Work →
        </NuxtLink>
      </div>
    </section>

    <!-- Contact CTA -->
    <ContactCTA />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Khair Studio — Designer & Creative Director',
  description: 'Portfolio of a designer and creative director specialising in branding, motion, and editorial design.',
})
</script>
