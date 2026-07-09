export default defineEventHandler(async (event) => {
  const today = new Date().toISOString().split('T')[0]
  
  // Static pages
  const staticPages = [
    '/',
    '/about',
    '/work',
    '/writing',
    '/message',
    '/brutalist',
  ]
  
  // Query dynamic writing posts
  const posts = await queryCollection('writing')
    .where('draft', '=', false)
    .all()
  
  const postUrls = posts.map((post) => {
    const slug = post.stem?.split('/').pop() || ''
    return `/writing/${slug}`
  })
  
  const allUrls = [...staticPages, ...postUrls]
  
  // Build XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map((url) => `  <url>
    <loc>https://khair.ink${url}</loc>
    <lastmod>${today}</lastmod>
  </url>`).join('\n')}
</urlset>`
  
  event.node.res.setHeader('Content-Type', 'application/xml')
  return sitemap
})
