export function useDebounce<T>(value: Ref<T>, delay = 300) {
  const debounced = ref<T>(value.value) as Ref<T>
  let timeout: ReturnType<typeof setTimeout>
  
  watch(value, (v) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => { debounced.value = v }, delay)
  })
  
  return debounced
}
