/**
 * Composable that traps keyboard focus within a container element.
 *
 * When active, Tab and Shift+Tab cycle through focusable descendants without
 * leaving the container — useful for modals and drawers.
 *
 * @param containerRef - A template ref pointing to the container element.
 * @returns {{ activate: () => void, deactivate: () => void }}
 *
 * @example
 * const modal = ref<HTMLElement | null>(null)
 * const { activate, deactivate } = useFocusTrap(modal)
 * // call activate() when the modal opens, deactivate() when it closes
 */
export function useFocusTrap(containerRef: Ref<HTMLElement | null>) {
  const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  
  function trap(e: KeyboardEvent) {
    if (e.key !== 'Tab' || !containerRef.value) return
    const focusable = [...containerRef.value.querySelectorAll<HTMLElement>(focusableSelectors)]
    if (!focusable.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus()
    }
  }
  
  function activate() { document.addEventListener('keydown', trap) }
  function deactivate() { document.removeEventListener('keydown', trap) }
  
  return { activate, deactivate }
}
