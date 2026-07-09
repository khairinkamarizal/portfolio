export function useViewport() {
  const width = ref(0)
  const height = ref(0)
  const isMobile = computed(() => width.value < 1024)
  const isDesktop = computed(() => width.value >= 1024)
  
  onMounted(() => {
    const update = () => {
      width.value = window.innerWidth
      height.value = window.innerHeight
    }
    update()
    window.addEventListener('resize', update, { passive: true })
    onUnmounted(() => window.removeEventListener('resize', update))
  })
  
  return { width, height, isMobile, isDesktop }
}
