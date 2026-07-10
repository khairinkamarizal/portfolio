/**
 * Composable that enables smooth scrolling for all same-page anchor links.
 *
 * On mount it attaches click listeners to every `<a href="#...">` in the
 * document and scrolls the matching target element into view smoothly.
 * No cleanup is needed — listeners are scoped to the component lifecycle.
 *
 * @example
 * // Call once in a layout component to activate site-wide smooth scrolling
 * useSmoothScroll()
 */
export function useSmoothScroll() {
  onMounted(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (!href) return
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    })
  })
}
