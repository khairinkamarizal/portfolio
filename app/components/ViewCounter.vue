<template>
  <ClientOnly>
    <div class="flex items-center gap-1.5 text-xs opacity-50" aria-label="View count">
      <Eye :size="12" />
      <span aria-live="polite">{{ count }} {{ count === 1 ? 'view' : 'views' }}</span>
    </div>
    <template #fallback><div class="w-10 h-4" /></template>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Eye } from 'lucide-vue-next'

/**
 * ViewCounter — tracks and displays per-slug page view counts.
 * @props slug {string} - Post or page slug used as the localStorage key.
 * UI only — no backend. Increments the count once per slug using a "seen" flag
 * so repeated visits in the same browser do not inflate the count.
 */
interface Props {
  slug: string
}

const props = defineProps<Props>()

const { get, set } = useLocalStorage()

const count = ref(0)

onMounted(() => {
  const viewKey = `view_count_${props.slug}`
  const seenKey = `view_seen_${props.slug}`

  const current = get<number>(viewKey, 0)
  const alreadySeen = get<boolean>(seenKey, false)

  if (!alreadySeen) {
    const next = current + 1
    set(viewKey, next)
    set(seenKey, true)
    count.value = next
  } else {
    count.value = current
  }
})
</script>
