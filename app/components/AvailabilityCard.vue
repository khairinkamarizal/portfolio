<template>
  <div class="w-full border border-black/10 dark:border-white/10 p-6">
    <!-- Header row -->
    <div class="flex items-start justify-between gap-4 mb-5">
      <div>
        <!-- Eyebrow -->
        <p
          class="text-[10px] tracking-widest uppercase opacity-50 mb-1.5 font-mono text-black dark:text-white">
          Availability
        </p>
        <!-- Status -->
        <h3 class="text-base font-bold text-black dark:text-white leading-tight">
          {{ available ? 'Available Now' : 'Currently Busy' }}
        </h3>
      </div>
      <StatusBadge :text="available ? 'Open' : 'Busy'" />
    </div>

    <!-- Details -->
    <dl class="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-black/10 dark:border-white/10 pt-5">
      <div v-for="detail in details" :key="detail.label">
        <dt
          class="text-[10px] tracking-widest uppercase opacity-50 font-mono text-black dark:text-white mb-0.5">
          {{ detail.label }}
        </dt>
        <dd class="text-sm text-black dark:text-white font-medium">
          {{ detail.value }}
        </dd>
      </div>
    </dl>

    <!-- CTA -->
    <div class="mt-6 pt-5 border-t border-black/10 dark:border-white/10">
      <NuxtLink
        to="/message"
        class="text-xs tracking-widest uppercase font-mono opacity-60 hover:opacity-100 transition-opacity duration-200 text-black dark:text-white"
        Start a Conversation →
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * AvailabilityCard — compact sidebar card showing current work availability.
 * @props available {boolean} - When true shows "Available Now"; false shows "Currently Busy".
 * Uses StatusBadge for the visual indicator and dl/dt/dd for structured detail rows.
 */
defineProps<{
  available?: boolean
}>()

const details = [
  { label: 'Location', value: 'Kuala Lumpur, MY' },
  { label: 'Timezone', value: 'UTC +8' },
  { label: 'Remote', value: 'Yes, worldwide' },
  { label: 'Start Date', value: 'Immediate' },
]
</script>
