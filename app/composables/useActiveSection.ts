/**
 * Composable that tracks which page section is currently in view.
 *
 * Uses `IntersectionObserver` with a `-20% 0px -60% 0px` root margin so the
 * active section updates as the user scrolls through the page. Cleans up the
 * observer automatically on unmount.
 *
 * @param sectionIds - Array of element `id` strings to observe (e.g. `['about', 'work', 'contact']`).
 * @returns {Ref<string>} Reactive ref containing the `id` of the currently visible section.
 *
 * @example
 * const activeSection = useActiveSection(['hero', 'about', 'work', 'contact'])
 * // activeSection.value === 'about' while that section is centred in the viewport
 */
export function useActiveSection(sectionIds: string[]) {
  const activeId = ref('')
  
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) activeId.value = e.target.id
        })
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    onUnmounted(() => observer.disconnect())
  })
  
  return activeId
}
