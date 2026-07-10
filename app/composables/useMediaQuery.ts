/**
 * Composable that reactively evaluates a CSS media query.
 *
 * Uses the `MediaQueryList` API and stays in sync with changes for the
 * lifetime of the component.
 *
 * @param query - A valid CSS media query string (e.g. `'(prefers-color-scheme: dark)'`).
 * @returns {Ref<boolean>} Reactive boolean that mirrors the current match state.
 *
 * @example
 * const isReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
 * // isReducedMotion.value === true when the user prefers reduced motion
 */
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
