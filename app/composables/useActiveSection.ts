export function useActiveSection(sectionIds: string[]) {
  const activeId = ref('')
  
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) activeId.value = e.target.id
        })
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    onUnmounted(() => observer.disconnect())
  })
  
  return activeId
}
