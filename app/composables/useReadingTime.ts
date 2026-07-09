export function useReadingTime(text: Ref<string> | string) {
  return computed(() => {
    const content = typeof text === 'string' ? text : text.value
    const words = content.trim().split(/\s+/).filter(Boolean).length
    const minutes = Math.max(1, Math.round(words / 200))
    return { minutes, label: `${minutes} min read` }
  })
}
