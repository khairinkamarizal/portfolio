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
