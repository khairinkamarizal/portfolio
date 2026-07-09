/**
 * Estimates reading time for a given content string.
 * Based on an average reading speed of 200 words per minute.
 */
export function useReadingTime(content: string): { minutes: number; text: string } {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 200))
  const text = `${minutes} min read`
  return { minutes, text }
}
