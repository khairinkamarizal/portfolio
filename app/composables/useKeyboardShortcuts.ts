export function useKeyboardShortcuts() {
  const router = useRouter()
  const keys = ref<string[]>([])
  let timeout: ReturnType<typeof setTimeout>

  const shortcuts: Record<string, string> = {
    'g h': '/',
    'g w': '/work',
    'g a': '/about',
    'g c': '/message',
    'g b': '/writing',
  }

  onMounted(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      keys.value.push(e.key.toLowerCase())
      clearTimeout(timeout)
      timeout = setTimeout(() => { keys.value = [] }, 1000)
      const combo = keys.value.join(' ')
      const route = shortcuts[combo]
      if (route) { router.push(route); keys.value = [] }
    }
    window.addEventListener('keydown', handler)
    onUnmounted(() => window.removeEventListener('keydown', handler))
  })
}
