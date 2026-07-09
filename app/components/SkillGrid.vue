<template>
  <div class="flex flex-col gap-6">
    <div
      v-for="group in groupedSkills"
      :key="group.category"
      class="flex flex-col gap-3">
      <!-- Category label -->
      <span class="text-xs opacity-40 tracking-wider">{{ group.category.toUpperCase() }}</span>

      <!-- Skills grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <div
          v-for="skill in group.skills"
          :key="skill.name"
          class="flex flex-col gap-1.5 p-3 border border-black/10 dark:border-white/10">
          <span class="text-xs font-medium leading-snug">{{ skill.name }}</span>
          <!-- Level indicator dots -->
          <div class="flex items-center gap-1">
            <span
              v-for="i in 5"
              :key="i"
              class="w-1 h-1 rounded-full transition-colors duration-150"
              :class="i <= skillLevel(skill.level)
                ? 'bg-black dark:bg-white'
                : 'bg-black/15 dark:bg-white/15'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * SkillGrid — visual skills grid component.
 * Props: skills (array of {name, level, category})
 * Renders skills in a clean grid with dot level indicators, grouped by category.
 */
interface Skill {
  name: string
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert' | number
  category: string
}

const props = defineProps<{
  skills: Skill[]
}>()

// Group skills by category
const groupedSkills = computed(() => {
  const groups: Record<string, { category: string; skills: Skill[] }> = {}
  for (const skill of props.skills) {
    if (!groups[skill.category]) {
      groups[skill.category] = { category: skill.category, skills: [] }
    }
    groups[skill.category].skills.push(skill)
  }
  return Object.values(groups)
})

// Convert level to numeric 1-5
function skillLevel(level: Skill['level']): number {
  if (typeof level === 'number') return Math.min(5, Math.max(1, level))
  const map: Record<string, number> = {
    beginner: 2,
    intermediate: 3,
    advanced: 4,
    expert: 5,
  }
  return level ? (map[level] ?? 3) : 3
}
</script>
