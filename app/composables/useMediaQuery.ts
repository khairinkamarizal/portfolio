export function useMediaQuery(query: string) {
  const matches = ref(false)
  
  onMounted(() => {
    const mq = window.matchMedia(query)
    matches.value = mq.matches
    const handler = (e: MediaQueryListEvent) => { matches.value = e.matches }
    mq.addEventListener('change', handler)
    onUnmounted(() => mq.removeEventListener('change', handler))
  })
  
  return matches
}
