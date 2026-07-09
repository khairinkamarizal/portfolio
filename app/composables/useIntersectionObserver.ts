export function useIntersectionObserver(
  target: Ref<Element | null>,
  options?: IntersectionObserverInit
) {
  const isIntersecting = ref(false)
  const entry = ref<IntersectionObserverEntry | null>(null)
  
  onMounted(() => {
    if (!target.value) return
    const observer = new IntersectionObserver(([e]) => {
      isIntersecting.value = e.isIntersecting
      entry.value = e
    }, options)
    observer.observe(target.value)
    onUnmounted(() => observer.disconnect())
  })
  
  return { isIntersecting, entry }
}
