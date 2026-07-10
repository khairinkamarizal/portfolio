/**
 * Provides date formatting utilities.
 *
 * @returns formatDate, formatShort, formatRelative
 *
 * @example
 * const { formatDate, formatShort, formatRelative } = useFormatDate()
 * formatDate('2024-01-15')         // "January 15, 2024"
 * formatShort('2024-01-15')        // "Jan 2024"
 * formatRelative('2024-01-15')     // "6mo ago"
 */
export function useFormatDate() {
  function formatDate(date: string | Date, options?: Intl.DateTimeFormatOptions): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      ...options,
    }).format(typeof date === 'string' ? new Date(date) : date)
  }
  
  function formatShort(date: string | Date): string {
    return formatDate(date, { month: 'short', year: 'numeric', day: undefined })
  }
  
  function formatRelative(date: string | Date): string {
    const d = typeof date === 'string' ? new Date(date) : date
    const diff = Date.now() - d.getTime()
    const days = Math.floor(diff / 86400000)
    if (days < 1) return 'Today'
    if (days < 7) return `${days}d ago`
    if (days < 30) return `${Math.floor(days / 7)}w ago`
    if (days < 365) return `${Math.floor(days / 30)}mo ago`
    return `${Math.floor(days / 365)}y ago`
  }
  
  return { formatDate, formatShort, formatRelative }
}
