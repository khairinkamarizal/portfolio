<template>
  <div class="flex gap-4 pb-8 last:pb-0">
    <!-- Timeline indicator -->
    <div class="flex flex-col items-center shrink-0 pt-1">
      <!-- Current position: filled dot; past: hollow dot -->
      <div
        class="w-2 h-2 rounded-full shrink-0 mt-0.5 border transition-colors"
        :class="current
          ? 'bg-black dark:bg-white border-black dark:border-white'
          : 'bg-transparent border-black/30 dark:border-white/30'" />
      <div v-if="!last" class="w-px flex-1 mt-1 bg-black/10 dark:bg-white/10"></div>
    </div>

    <!-- Content -->
    <div class="flex flex-col gap-1 pb-2">
      <!-- Role + period row -->
      <div class="flex justify-between items-start gap-4 flex-wrap">
        <span class="text-sm font-medium leading-snug">{{ role }}</span>
        <span class="text-xs opacity-40 shrink-0 font-mono">{{ period }}</span>
      </div>

      <!-- Company + location -->
      <div class="flex items-center gap-2">
        <span class="text-xs opacity-50 tracking-wide">{{ company.toUpperCase() }}</span>
        <span v-if="location" class="text-xs opacity-30">· {{ location }}</span>
        <span
          v-if="current"
          class="text-[10px] tracking-wider px-1.5 py-0.5 border border-black/20 dark:border-white/20 opacity-60">
          NOW
        </span>
      </div>

      <!-- Description -->
      <p v-if="description" class="text-sm opacity-60 leading-relaxed dark:font-light mt-1">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * TimelineItem — single timeline entry for experience section.
 * Props: company, role, period, location, description, current (boolean)
 * Current position has accent dot styling and NOW badge.
 */
defineProps<{
  company: string
  role: string
  period: string
  location?: string
  description?: string
  current?: boolean
  last?: boolean
}>()
</script>
