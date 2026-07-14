const DEFAULT_LIMIT = 40
const MAX_LIMIT = 80

type WritingIndexPost = {
  path: string
  title: string
  description: string
  date: string
  tags: string[]
}

function getNumber(value: unknown, fallback: number) {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback
}

function getString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const limit = Math.min(getNumber(query.limit, DEFAULT_LIMIT), MAX_LIMIT)
  const offset = getNumber(query.offset, 0)
  const activeTag = getString(query.tag)

  const allPosts = await queryCollection(event, 'writing')
    .select('path', 'title', 'description', 'date', 'tags')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()

  const normalizedPosts: WritingIndexPost[] = allPosts.map(post => ({
    path: post.path,
    title: post.title,
    description: post.description,
    date: post.date,
    tags: Array.isArray(post.tags) ? post.tags : [],
  }))

  const tags = Array.from(new Set(normalizedPosts.flatMap(post => post.tags))).sort((a, b) => a.localeCompare(b))
  const matchingPosts = activeTag && activeTag !== 'All'
    ? normalizedPosts.filter(post => post.tags.includes(activeTag))
    : normalizedPosts
  const posts = matchingPosts.slice(offset, offset + limit)

  setHeader(event, 'Cache-Control', 'public, max-age=60, s-maxage=300')

  return {
    posts,
    tags,
    total: matchingPosts.length,
    limit,
    offset,
    hasMore: offset + posts.length < matchingPosts.length,
  }
})
