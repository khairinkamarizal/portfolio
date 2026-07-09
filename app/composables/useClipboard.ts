/**
 * Composable for copying text to the clipboard.
 *
 * Provides reactive `copied` and `error` flags that auto-reset after 2 seconds.
 *
 * @returns {{ copy: (text: string) => Promise<void>, copied: Ref<boolean>, error: Ref<boolean> }}
 *
 * @example
 * const { copy, copied, error } = useClipboard()
 * await copy('Hello, world!')
 * // copied.value === true for 2 seconds
 */
export function useClipboard() {
  const copied = ref(false)
  const error = ref(false)
  
  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      copied.value = true
      error.value = false
      setTimeout(() => { copied.value = false }, 2000)
    } catch {
      error.value = true
      setTimeout(() => { error.value = false }, 2000)
    }
  }
  
  return { copy, copied, error }
}
