<template>
  <button
    @click="handleCopy"
    class="text-xs tracking-wider px-3 py-1.5 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white transition-all duration-150 flex items-center gap-1.5"
    :aria-label="copied ? 'Copied to clipboard' : 'Copy to clipboard'">
    <Copy :size="14" aria-hidden="true" />
    <Transition name="swap" mode="out-in">
      <span :key="copied ? 'copied' : 'copy'">{{ copied ? 'Copied!' : 'Copy' }}</span>
    </Transition>
  </button>
</template>

<script setup lang="ts">
import { Copy } from 'lucide-vue-next'

interface Props {
  text: string
}

const props = defineProps<Props>()

const copied = ref(false)

async function handleCopy() {
  try {
    await navigator.clipboard.writeText(props.text)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<style scoped>
.swap-enter-active, .swap-leave-active { transition: opacity 0.15s ease; }
.swap-enter-from, .swap-leave-to { opacity: 0; }
</style>
