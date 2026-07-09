<template>
  <div class="flex flex-col gap-0">
    <div
      v-for="(item, index) in items"
      :key="item.company + item.period"
      class="flex gap-4 pb-8 last:pb-0">
      <!-- Timeline indicator -->
      <div class="flex flex-col items-center shrink-0 pt-1">
        <div class="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mt-0.5"></div>
        <div
          v-if="index < items.length - 1"
          class="w-px flex-1 mt-1 bg-black/10 dark:bg-white/10"></div>
      </div>

      <!-- Content -->
      <div class="flex flex-col gap-1 pb-2">
        <div class="flex justify-between items-start gap-2">
          <span class="text-sm font-medium">{{ item.role }}</span>
          <span class="text-xs opacity-40 shrink-0">{{ item.period }}</span>
        </div>
        <span class="text-xs opacity-50 tracking-wide">{{ item.company.toUpperCase() }}</span>
        <p v-if="item.description" class="text-sm opacity-60 leading-relaxed dark:font-light mt-1">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * ExperienceTimeline — vertical timeline for work history.
 * Props: items array of {company, role, period, description}
 */
interface TimelineItem {
  company: string
  role: string
  period: string
  description?: string
}

interface Props {
  items: TimelineItem[]
}

defineProps<Props>()
</script>
