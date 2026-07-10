<template>
  <div class="w-full" role="list">
    <div
      v-for="(item, index) in items"
      :key="item.company + '-' + item.period"
      role="listitem"
      class="relative flex gap-6 pb-10 last:pb-0">

      <!-- Timeline spine -->
      <div class="flex flex-col items-center shrink-0">
        <!-- Dot -->
        <div class="w-2 h-2 rounded-full bg-black dark:bg-white mt-1.5 shrink-0" />
        <!-- Connecting line -->
        <div
          v-if="index < items.length - 1"
          class="flex-1 border-l border-black/20 dark:border-white/20 mt-1" />
      </div>

      <!-- Content -->
      <div class="flex-1 min-w-0 pb-0">
        <!-- Company + NOW badge -->
        <div class="flex items-center gap-2 flex-wrap mb-0.5">
          <span class="text-base font-bold text-black dark:text-white leading-tight">
            {{ item.company }}
          </span>
          <span
            v-if="item.current"
            class="text-[10px] tracking-widest uppercase bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 font-mono">
            NOW
          </span>
        </div>

        <!-- Role -->
        <p class="text-sm font-medium opacity-80 text-black dark:text-white mb-1">
          {{ item.role }}
        </p>

        <!-- Period + location -->
        <p
          class="text-xs font-mono opacity-40 text-black dark:text-white mb-3">
          {{ item.period }}<span v-if="item.location"> · {{ item.location }}</span>
        </p>

        <!-- Description -->
        <p
          v-if="item.description"
          class="text-sm opacity-60 leading-relaxed text-black dark:text-white">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

/**
 * ExperienceTimeline component.
 *
 * Renders a vertical timeline of work experience entries. Each item shows a
 * dot-and-line spine on the left alongside company, role, period, optional
 * location, and optional description. A "NOW" badge is shown for the current
 * position when `current: true`.
 *
 * @prop {Array} items - List of experience entries to render.
 *   @prop {string}  items[].company     - Company or organisation name.
 *   @prop {string}  items[].role        - Job title or role.
 *   @prop {string}  items[].period      - Display string for the date range (e.g. "2022 – Present").
 *   @prop {string}  [items[].location]  - Optional location string.
 *   @prop {string}  [items[].description] - Optional short description of responsibilities.
 *   @prop {boolean} [items[].current]   - When true, renders a "NOW" badge next to the company name.
 */
<script setup lang="ts">
defineProps<{
  items: Array<{
    company: string
    role: string
    period: string
    location?: string
    description?: string
    current?: boolean
  }>
}>()
</script>
