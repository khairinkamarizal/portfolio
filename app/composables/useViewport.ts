/**
 * Composable for tracking the browser viewport dimensions.
 *
 * Listens to `window.resize` (passive) and updates reactive `width` / `height`.
 * `isMobile` is `true` when width < 1024 px; `isDesktop` is the inverse.
 *
 * @returns {{ width: Ref<number>, height: Ref<number>, isMobile: ComputedRef<boolean>, isDesktop: ComputedRef<boolean> }}
 *
 * @example
 * const { isMobile, width } = useViewport()
 * // isMobile.value === true on screens narrower than 1024 px
 */
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
