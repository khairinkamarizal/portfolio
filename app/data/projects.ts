export interface PortfolioProject {
  title: string
  year: number
  category: string
  services: string[]
  description: string
  outcome: string
  url: string
  thumbnail?: string
  featured?: boolean
  tone: 'red' | 'blue' | 'ink' | 'yellow'
}

export const projects: PortfolioProject[] = [
  {
    title: 'FRONTFACE',
    year: 2024,
    category: 'Brand identity',
    services: ['Strategy', 'Identity', 'Art direction'],
    description: 'A bold identity system built to make a confident first impression across digital and physical touchpoints.',
    outcome: 'Distinctive by design',
    url: 'https://www.behance.net/gallery/236186445/FRONTFACE',
    thumbnail: '/assets/projects/frontface.webp',
    featured: true,
    tone: 'red',
  },
  {
    title: 'Flavisse Patisserie',
    year: 2024,
    category: 'Brand identity',
    services: ['Identity', 'Packaging', 'Typography'],
    description: 'A refined visual language for a French-inspired patisserie, balancing elegance with an approachable character.',
    outcome: 'Made to feel considered',
    url: 'https://www.behance.net/gallery/236185493/Flavisse-Patisserie',
    thumbnail: '/assets/projects/flavisse.webp',
    featured: true,
    tone: 'yellow',
  },
  {
    title: 'Tempatan Fest',
    year: 2024,
    category: 'Stage motion',
    services: ['Motion', 'Event graphics', 'Art direction'],
    description: 'A high-energy motion system designed to hold attention at live-event scale.',
    outcome: 'Built for the big screen',
    url: 'https://www.behance.net/gallery/236161491/Tempatan-Fest-2024-Stage-Motion',
    thumbnail: '/assets/projects/tempatan.webp',
    featured: true,
    tone: 'blue',
  },
  {
    title: 'Mero & Kero',
    year: 2023,
    category: 'Brand identity',
    services: ['Identity', 'Logo', 'Visual system'],
    description: 'A playful identity with enough structure to stay coherent across every expression.',
    outcome: 'Character with consistency',
    url: 'https://www.behance.net/gallery/197734851/Mero-Kero',
    thumbnail: '/assets/projects/mero-kero.webp',
    featured: true,
    tone: 'ink',
  },
  {
    title: 'Datalyse',
    year: 2024,
    category: 'Logo design',
    services: ['Logo', 'Identity', 'Digital'],
    description: 'A precise mark for a data aggregation product, turning complexity into a simple visual idea.',
    outcome: 'Complexity, clarified',
    url: 'https://www.behance.net/gallery/193559721/Datalyse-Logo',
    thumbnail: '/assets/projects/datalyse.webp',
    tone: 'blue',
  },
  {
    title: 'HighRisk Mal',
    year: 2024,
    category: 'Streetwear identity',
    services: ['Identity', 'Apparel', 'Art direction'],
    description: 'An expressive identity system shaped for a streetwear label with a strong point of view.',
    outcome: 'Energy without noise',
    url: 'https://www.behance.net/gallery/236161813/HighRisk-Mal',
    thumbnail: '/assets/projects/highrisk.webp',
    tone: 'red',
  },
]
