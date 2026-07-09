<template>
  <div class="flex items-center gap-3">
    <span class="text-xs opacity-40 tracking-wider">SHARE</span>

    <!-- Copy link -->
    <button
      @click="copyLink"
      class="text-[11px] opacity-50 hover:opacity-100 transition-opacity duration-150 tracking-wider flex items-center gap-1"
      :aria-label="copied ? 'Link copied' : 'Copy link'">
      <span>{{ copied ? 'COPIED' : 'COPY LINK' }}</span>
    </button>

    <!-- Twitter / X -->
    <a
      :href="twitterUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="text-[11px] opacity-50 hover:opacity-100 transition-opacity duration-150 tracking-wider"
      aria-label="Share on Twitter / X">
      X
    </a>

    <!-- LinkedIn -->
    <a
      :href="linkedinUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="text-[11px] opacity-50 hover:opacity-100 transition-opacity duration-150 tracking-wider"
      aria-label="Share on LinkedIn">
      LINKEDIN
    </a>
  </div>
</template>

<script setup lang="ts">
/**
 * ShareButtons — share buttons for Copy link, Twitter/X, LinkedIn.
 * Props: title (string), url (string)
 * Uses navigator.clipboard for copy with a "copied" feedback state.
 */
const props = defineProps<{
  title: string
  url: string
}>()

const copied = ref(false)

async function copyLink() {
  try {
    await navigator.clipboard.writeText(props.url)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    // Fallback: show URL in prompt so user can copy manually
    window.prompt('Copy this link:', props.url)
  }
}

const twitterUrl = computed(() => {
  const text = encodeURIComponent(`${props.title} ${props.url}`)
  return `https://x.com/intent/tweet?text=${text}`
})

const linkedinUrl = computed(() => {
  const url = encodeURIComponent(props.url)
  const title = encodeURIComponent(props.title)
  return `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`
})
</script>
