<template>
  <div class="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16">
    <!-- Page header with decorative background text -->
    <div class="relative overflow-hidden">
      <BackgroundText text="WORK" :opacity="0.04" />
      <PageHeader
        label="Portfolio"
        title="Work"
        description="A selection of projects spanning branding, motion, and digital design." />
    </div>

    <!-- Featured section -->
    <section class="mt-12 mb-16" aria-label="Featured work">
      <SectionDivider number="01" title="Featured Work" class="mb-10" />

      <div class="grid grid-cols-1 gap-12">
        <FeaturedProject
          title="Brand Identity System"
          category="Branding"
          year="2024"
          description="A comprehensive identity system built around geometric forms and typographic precision. Spans print, digital, and environmental applications."
          :tags="['Identity', 'Print', 'Digital']"
          href="/work/brand-identity" />

        <FeaturedProject
          title="Motion Design Toolkit"
          category="Motion"
          year="2023"
          description="A reusable animation framework for product UI — transitions, micro-interactions, and loading states designed with rhythm and intent."
          :tags="['Motion', 'UI', 'Animation']"
          href="/work/motion-toolkit" />
      </div>
    </section>

    <!-- All work section -->
    <section aria-label="All work">
      <SectionDivider number="02" title="All Work" class="mb-10" />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <WorkCard
          title="Jersey Collection"
          year="2024"
          category="jersey"
          description="Sport apparel design system featuring bold typography and performance-first aesthetics."
          :tags="['Apparel', 'Sport', 'Print']" />

        <WorkCard
          title="Logo Suite"
          year="2023"
          category="logo"
          description="Mark design for a series of startups in the fintech space."
          :tags="['Logo', 'Identity']" />

        <WorkCard
          title="Editorial Design"
          year="2023"
          category="branding"
          description="Magazine layout and typographic systems for an independent publication."
          :tags="['Editorial', 'Print']" />

        <WorkCard
          title="Product Animation"
          year="2022"
          category="motion"
          description="UI motion language for a B2B SaaS product launch."
          :tags="['Motion', 'Product']" />

        <WorkCard
          title="Packaging Design"
          year="2022"
          category="branding"
          description="Retail packaging for a consumer goods brand entering a new market."
          :tags="['Packaging', 'Print']" />

        <WorkCard
          title="Type Specimen"
          year="2021"
          category="logo"
          description="Custom lettering and type exploration for an editorial client."
          :tags="['Type', 'Lettering']" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Work',
  description: 'A selection of projects spanning branding, motion, and digital design.',
})
</script>
