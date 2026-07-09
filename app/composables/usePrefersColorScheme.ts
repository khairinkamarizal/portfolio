export function usePrefersColorScheme() {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')
  const prefersLight = computed(() => !prefersDark.value)
  return { prefersDark, prefersLight }
}
