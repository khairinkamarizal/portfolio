/**
 * Composable for reading and controlling the color theme.
 *
 * Wraps Nuxt's `useColorMode` to expose computed booleans and helper methods
 * for toggling or explicitly setting the theme.
 *
 * @returns {{ isDark: ComputedRef<boolean>, isLight: ComputedRef<boolean>, toggleTheme: () => void, setTheme: (theme: 'light' | 'dark' | 'system') => void, colorMode: ReturnType<typeof useColorMode> }}
 *
 * @example
 * const { isDark, toggleTheme, setTheme } = useTheme()
 * toggleTheme()          // flips between light and dark
 * setTheme('system')     // follows OS preference
 */
export function useTheme() {
  const colorMode = useColorMode()
  const isDark = computed(() => colorMode.value === 'dark')
  const isLight = computed(() => colorMode.value === 'light')
  
  function toggleTheme() {
    colorMode.preference = isDark.value ? 'light' : 'dark'
  }
  
  function setTheme(theme: 'light' | 'dark' | 'system') {
    colorMode.preference = theme
  }
  
  return { isDark, isLight, toggleTheme, setTheme, colorMode }
}
