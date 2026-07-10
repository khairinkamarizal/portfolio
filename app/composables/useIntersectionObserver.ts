/**
 * Composable that observes when a target element enters or exits the viewport.
 *
 * Wraps the native `IntersectionObserver` API with reactive state and handles
 * setup/teardown tied to the component lifecycle.
 *
 * @param target - A template ref pointing to the element to observe.
 * @param options - Optional `IntersectionObserver` configuration (root, rootMargin, threshold).
 * @returns {{ isIntersecting: Ref<boolean>, entry: Ref<IntersectionObserverEntry | null> }}
 *
 * @example
 * const el = ref<Element | null>(null)
 * const { isIntersecting } = useIntersectionObserver(el, { threshold: 0.5 })
 * // isIntersecting.value === true when at least 50 % of el is visible
 */
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
