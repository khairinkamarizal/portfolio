/**
 * Composable that synchronises a reactive ref with a `localStorage` entry.
 *
 * The stored value is hydrated after mount (avoiding SSR mismatches) and
 * persisted via a deep watcher on every subsequent change.
 * JSON serialisation errors are silently swallowed.
 *
 * @template T - The type of the stored value.
 * @param key - The `localStorage` key to read from / write to.
 * @param defaultValue - Fallback value used when no entry exists in storage.
 * @returns {Ref<T>} Reactive ref backed by `localStorage`.
 *
 * @example
 * const theme = useLocalStorage('theme', 'system')
 * theme.value = 'dark' // immediately persisted to localStorage
 */
export function useLocalStorage<T>(key: string, defaultValue: T) {
  const value = ref<T>(defaultValue)
  
  onMounted(() => {
    try {
      const stored = localStorage.getItem(key)
      if (stored !== null) value.value = JSON.parse(stored)
    } catch {}
  })
  
  watch(value, (v) => {
    try { localStorage.setItem(key, JSON.stringify(v)) } catch {}
  }, { deep: true })
  
  return value
}
