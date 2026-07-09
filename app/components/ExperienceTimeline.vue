<template>
  <div class="flex flex-col gap-0">
    <TimelineItem
      v-for="item in items"
      :key="item.company + item.period"
      :company="item.company"
      :role="item.role"
      :period="item.period"
      :location="item.location"
      :description="item.description"
      :current="item.current" />
  </div>
</template>

<script setup lang="ts">
/**
 * ExperienceTimeline — vertical timeline for work history.
 * Props: items array of {company, role, period, location, description, current}
 * - current: true shows a filled dot and a "NOW" badge on the item
 * - location: displays city/country alongside company name
 * Delegates rendering to TimelineItem for each entry.
 */
interface TimelineItem {
  company: string
  role: string
  period: string
  location?: string
  description?: string
  current?: boolean
}

interface Props {
  items: TimelineItem[]
}

defineProps<Props>()
</script>
