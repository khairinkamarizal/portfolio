/**
 * Composable that returns a debounced version of a reactive ref.
 *
 * The returned ref only updates after the source ref has been stable for
 * `delay` milliseconds, preventing excessive downstream work (e.g. API calls).
 *
 * @template T - The type of the tracked value.
 * @param value - The source reactive ref to debounce.
 * @param delay - Debounce delay in milliseconds (default: `300`).
 * @returns {Ref<T>} A new ref that lags behind `value` by `delay` ms.
 *
 * @example
 * const query = ref('')
 * const debouncedQuery = useDebounce(query, 500)
 * // debouncedQuery.value updates 500 ms after the user stops typing
 */
export function useDebounce<T>(value: Ref<T>, delay = 300) {
  const debounced = ref<T>(value.value) as Ref<T>
  let timeout: ReturnType<typeof setTimeout>
  
  watch(value, (v) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => { debounced.value = v }, delay)
  })
  
  return debounced
}
