<template>
  <ClientOnly>
    <div class="flex flex-col gap-2">
      <span class="text-[10px] tracking-widest opacity-40">REACTIONS</span>
      <div class="flex items-center gap-2 flex-wrap">
        <button
          v-for="reaction in reactions"
          :key="reaction.emoji"
          type="button"
          @click="react(reaction.emoji)"
          :class="[
            'flex items-center gap-1.5 border px-2.5 py-1 text-xs transition-all duration-150',
            reacted.has(reaction.emoji)
              ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
              : 'border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white',
          ]"
          :aria-pressed="reacted.has(reaction.emoji)"
          :aria-label="'React with ' + emojiNames[reaction.emoji] + ' emoji (count: ' + reaction.count + ')'">
          <span>{{ reaction.emoji }}</span>
          <span class="font-mono tabular-nums">{{ reaction.count }}</span>
        </button>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
/**
 * EmojiReaction — per-post emoji reaction buttons (👀 🔥 💯 ✨).
 * @props postSlug {string} - Unique post slug used as the localStorage key.
 * Reactions and counts are persisted to localStorage; no backend required.
 * Toggling an emoji increments or decrements its count and tracks state in a Set.
 */
const props = defineProps<{
  postSlug: string
}>()

interface Reaction {
  emoji: string
  count: number
}

const EMOJIS = ['👀', '🔥', '💯', '✨']
const emojiNames: Record<string, string> = { '👀': 'eyes', '🔥': 'fire', '💯': 'hundred points', '✨': 'sparkles' }
const STORAGE_KEY = computed(() => `reactions-${props.postSlug}`)

const reactions = ref<Reaction[]>(EMOJIS.map(emoji => ({ emoji, count: 0 })))
const reacted = ref<Set<string>>(new Set())

onMounted(() => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY.value)
    if (stored) {
      const data = JSON.parse(stored) as { counts: Record<string, number>; reacted: string[] }
      reactions.value = EMOJIS.map(emoji => ({
        emoji,
        count: data.counts[emoji] ?? 0,
      }))
      reacted.value = new Set(data.reacted)
    }
  } catch {
    // noop
  }
})

function react(emoji: string) {
  const reaction = reactions.value.find(r => r.emoji === emoji)
  if (!reaction) return

  if (reacted.value.has(emoji)) {
    reaction.count = Math.max(0, reaction.count - 1)
    reacted.value.delete(emoji)
    reacted.value = new Set(reacted.value)
  } else {
    reaction.count += 1
    reacted.value.add(emoji)
    reacted.value = new Set(reacted.value)
  }

  // Persist to localStorage
  try {
    const counts: Record<string, number> = {}
    for (const r of reactions.value) counts[r.emoji] = r.count
    localStorage.setItem(STORAGE_KEY.value, JSON.stringify({
      counts,
      reacted: [...reacted.value],
    }))
  } catch {
    // noop
  }
}
</script>
