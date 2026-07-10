export type ProjectLayout = 'wide' | 'portrait' | 'standard'

export interface PortfolioProject {
  title: string
  year: number
  discipline: string
  role: string
  medium: string
  scope: string[]
  description: string
  url: string
  thumbnail?: string
  featured?: boolean
  layout: ProjectLayout
}

export const projects: PortfolioProject[] = [
  {
    title: 'FRONTFACE', year: 2024, discipline: 'Identity', role: 'Designer / Art director', medium: 'Brand system',
    scope: ['Strategy', 'Identity', 'Art direction'],
    description: 'A confident identity system built to make a clear first impression across digital and physical touchpoints.',
    url: 'https://www.behance.net/gallery/236186445/FRONTFACE', thumbnail: '/assets/projects/frontface.webp', featured: true, layout: 'wide',
  },
  {
    title: 'Flavisse Patisserie', year: 2024, discipline: 'Identity', role: 'Identity designer', medium: 'Brand / Packaging',
    scope: ['Identity', 'Packaging', 'Typography'],
    description: 'A restrained visual language for a French-inspired patisserie, balancing elegance with approachability.',
    url: 'https://www.behance.net/gallery/236185493/Flavisse-Patisserie', thumbnail: '/assets/projects/flavisse.webp', featured: true, layout: 'portrait',
  },
  {
    title: 'Tempatan Fest', year: 2024, discipline: 'Motion', role: 'Motion designer', medium: 'Stage graphics',
    scope: ['Motion', 'Event graphics', 'Art direction'],
    description: 'A kinetic motion system designed to hold attention and remain legible at live-event scale.',
    url: 'https://www.behance.net/gallery/236161491/Tempatan-Fest-2024-Stage-Motion', thumbnail: '/assets/projects/tempatan.webp', featured: true, layout: 'standard',
  },
  {
    title: 'Mero & Kero', year: 2023, discipline: 'Identity', role: 'Identity designer', medium: 'Brand system',
    scope: ['Identity', 'Logo', 'Visual system'],
    description: 'A character-led identity with enough structure to stay coherent across every expression.',
    url: 'https://www.behance.net/gallery/197734851/Mero-Kero', thumbnail: '/assets/projects/mero-kero.webp', featured: true, layout: 'wide',
  },
  {
    title: 'Datalyse', year: 2024, discipline: 'Identity', role: 'Logo designer', medium: 'Digital identity',
    scope: ['Logo', 'Identity', 'Digital'],
    description: 'A precise mark for a data aggregation product, turning complexity into a direct visual idea.',
    url: 'https://www.behance.net/gallery/193559721/Datalyse-Logo', thumbnail: '/assets/projects/datalyse.webp', layout: 'standard',
  },
  {
    title: 'HighRisk Mal', year: 2024, discipline: 'Art direction', role: 'Designer / Art director', medium: 'Apparel',
    scope: ['Identity', 'Apparel', 'Art direction'],
    description: 'An expressive identity system shaped for a streetwear label with a distinct point of view.',
    url: 'https://www.behance.net/gallery/236161813/HighRisk-Mal', thumbnail: '/assets/projects/highrisk.webp', layout: 'portrait',
  },
]
