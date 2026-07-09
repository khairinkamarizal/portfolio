<template>
  <div class="w-full border border-black/10 dark:border-white/10 p-8 md:p-12">
    <!-- Eyebrow -->
    <p class="text-xs tracking-widest uppercase opacity-40 mb-6 font-mono text-black dark:text-white">
      Current Status
    </p>

    <!-- Big headline -->
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black dark:text-white mb-4">
      Open to Work
    </h2>

    <!-- Details -->
    <p class="text-sm opacity-60 leading-relaxed max-w-lg text-black dark:text-white mb-8">
      Available for freelance projects, full-time roles, and creative collaborations. Specialising in brand identity, motion design, and editorial work.
    </p>

    <!-- Meta details -->
    <div class="flex flex-wrap gap-x-8 gap-y-3 mb-8">
      <div v-for="detail in details" :key="detail.label">
        <p class="text-[10px] tracking-widest uppercase opacity-40 font-mono text-black dark:text-white mb-0.5">
          {{ detail.label }}
        </p>
        <p class="text-sm font-medium text-black dark:text-white">
          {{ detail.value }}
        </p>
      </div>
    </div>

    <!-- CTA -->
    <NuxtLink
      to="/message"
      class="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-mono border border-black dark:border-white px-5 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200 text-black dark:text-white">
      Get in Touch →
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const details = [
  { label: 'Availability', value: 'Immediate' },
  { label: 'Location', value: 'Kuala Lumpur, MY' },
  { label: 'Remote', value: 'Yes, worldwide' },
  { label: 'Type', value: 'Freelance / Full-time' },
]
</script>
