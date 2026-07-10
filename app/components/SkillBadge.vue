<template>
  <span class="text-xs border border-black/20 dark:border-white/20 px-2.5 py-1">
    {{ label }}
  </span>
</template>

<script setup lang="ts">
/**
 * SkillBadge
 *
 * Renders a single skill or technology label as a small inline badge.
 * Uses a subtle border treatment that adapts to light and dark modes.
 * Intended for use in lists of skills, tags, or technology stacks.
 *
 * @prop {string} label - The skill or technology name to display inside the badge.
 */
defineProps<{
  label: string
}>()
</script>
