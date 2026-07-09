export function usePageTitle(title: string) {
  useHead({
    title,
    titleTemplate: (t) => t ? `${t} — Khairin Kamarizal` : 'Khairin Kamarizal'
  })
}
