const SITE_URL = 'https://khair.ink'

interface SitemapEntry {
  path: string
  lastmod?: string
}

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function normaliseDate(value?: string) {
  if (!value) return undefined

  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString().split('T')[0]
}

export default defineEventHandler(async (event) => {
  const staticPages: SitemapEntry[] = [
    { path: '/' },
    { path: '/about' },
    { path: '/work' },
    { path: '/writing' },
    { path: '/message' },
    { path: '/brutalist' },
  ]

  const posts = await queryCollection(event, 'writing')
    .where('draft', '=', false)
    .all()

  const postPages: SitemapEntry[] = posts.map((post) => ({
    path: post.path || `/writing/${post.stem?.split('/').pop() || ''}`,
    lastmod: normaliseDate(post.date),
  }))

  const entries = [...staticPages, ...postPages]
    .filter(({ path }) => path && !path.endsWith('/writing/'))
    .sort((a, b) => a.path.localeCompare(b.path))

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(({ path, lastmod }) => {
    const location = escapeXml(new URL(path, SITE_URL).href)
    const modified = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''
    return `  <url>\n    <loc>${location}</loc>${modified}\n  </url>`
  }).join('\n')}
</urlset>`

  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8')
  event.node.res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400')

  return sitemap
})
