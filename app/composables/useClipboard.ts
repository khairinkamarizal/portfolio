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
