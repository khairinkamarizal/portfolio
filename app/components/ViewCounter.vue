<template>
  <ClientOnly>
    <div class="flex items-center gap-1.5 text-xs opacity-40" aria-label="View count">
      <Eye :size="12" />
      <span>{{ count }} {{ count === 1 ? 'view' : 'views' }}</span>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Eye } from 'lucide-vue-next'

/**
 * ViewCounter — tracks per-slug view counts via localStorage.
 * UI only — no backend. Increments once per slug per session key.
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
