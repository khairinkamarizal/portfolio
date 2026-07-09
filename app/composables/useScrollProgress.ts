/**
 * Returns the current scroll progress as a percentage (0-100).
 * Updates on scroll via passive listener.
 */
export function useScrollProgress() {
  const progress = ref(0)
  
  onMounted(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      progress.value = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0
    }
    window.addEventListener('scroll', update, { passive: true })
    onUnmounted(() => window.removeEventListener('scroll', update))
  })
  
  return { progress }
}
