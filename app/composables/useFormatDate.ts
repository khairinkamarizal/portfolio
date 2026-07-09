/**
 * Composable that formats a date string into a readable format.
 * e.g. "2026-06-15" → "June 15, 2026"
 */
export function useFormatDate() {
  function formatDate(dateStr: string): string {
    if (!dateStr) return ""
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return { formatDate }
}
