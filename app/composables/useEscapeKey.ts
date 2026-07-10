/**
 * Composable that invokes a callback whenever the Escape key is pressed.
 *
 * The event listener is registered on `window` after mount and removed on
 * unmount automatically.
 *
 * @param callback - Function to call when `Escape` is detected.
 *
 * @example
 * useEscapeKey(() => { isOpen.value = false })
 */
export function useEscapeKey(callback: () => void) {
  onMounted(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') callback()
    }
    window.addEventListener('keydown', handler)
    onUnmounted(() => window.removeEventListener('keydown', handler))
  })
}
