export function useEscapeKey(callback: () => void) {
  onMounted(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') callback()
    }
    window.addEventListener('keydown', handler)
    onUnmounted(() => window.removeEventListener('keydown', handler))
  })
}
