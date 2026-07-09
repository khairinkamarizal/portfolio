/**
 * useLocalStorage — reactive localStorage composable with SSR safety.
 * Checks for window existence before any access to avoid SSR errors.
 */
export function useLocalStorage() {
  const isClient = typeof window !== 'undefined'

  function get<T>(key: string, defaultValue: T): T {
    if (!isClient) return defaultValue
    try {
      const item = window.localStorage.getItem(key)
      if (item === null) return defaultValue
      return JSON.parse(item) as T
    } catch {
      return defaultValue
    }
  }

  function set<T>(key: string, value: T): void {
    if (!isClient) return
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // localStorage may be unavailable (private browsing, quota exceeded, etc.)
    }
  }

  function remove(key: string): void {
    if (!isClient) return
    try {
      window.localStorage.removeItem(key)
    } catch {
      // noop
    }
  }

  return { get, set, remove }
}
