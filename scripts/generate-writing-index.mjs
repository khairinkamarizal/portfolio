import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { basename, extname, join } from 'node:path'

const PAGE_SIZE = 40
const CONTENT_DIR = join(process.cwd(), 'content', 'writing')
const OUTPUT_DIR = join(process.cwd(), 'public', 'writing-index')

function parseScalar(value) {
  const trimmed = value.trim()

  if (trimmed === 'true') return true
  if (trimmed === 'false') return false

  if (trimmed.startsWith('[')) {
    try {
      return JSON.parse(trimmed.replaceAll("'", '"'))
    } catch {
      return []
    }
  }

  return trimmed.replace(/^['"]|['"]$/g, '')
}

function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}

  return match[1].split(/\r?\n/).reduce((data, line) => {
    const separatorIndex = line.indexOf(':')
    if (separatorIndex === -1) return data

    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1)
    data[key] = parseScalar(value)
    return data
  }, {})
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function writeJson(path, data) {
  writeFileSync(path, `${JSON.stringify(data)}\n`)
}

function writePages(directory, posts) {
  mkdirSync(directory, { recursive: true })
  const pageCount = Math.max(1, Math.ceil(posts.length / PAGE_SIZE))

  for (let page = 0; page < pageCount; page += 1) {
    const offset = page * PAGE_SIZE
    writeJson(join(directory, `page-${page}.json`), {
      posts: posts.slice(offset, offset + PAGE_SIZE),
      total: posts.length,
      page,
      pageSize: PAGE_SIZE,
      hasMore: page < pageCount - 1,
    })
  }
}

const posts = readdirSync(CONTENT_DIR)
  .filter(file => extname(file) === '.md')
  .map((file) => {
    const frontmatter = parseFrontmatter(readFileSync(join(CONTENT_DIR, file), 'utf8'))
    return {
      path: `/writing/${basename(file, '.md')}`,
      title: frontmatter.title || basename(file, '.md'),
      description: frontmatter.description || '',
      date: frontmatter.date || '',
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      draft: frontmatter.draft === true,
    }
  })
  .filter(post => !post.draft)
  .sort((a, b) => String(b.date).localeCompare(String(a.date)))
  .map(({ draft, ...post }) => post)

const tagMap = new Map()

for (const post of posts) {
  for (const tag of post.tags) {
    if (!tagMap.has(tag)) {
      tagMap.set(tag, { name: tag, slug: slugify(tag), posts: [] })
    }
    tagMap.get(tag).posts.push(post)
  }
}

const tags = Array.from(tagMap.values())
  .sort((a, b) => a.name.localeCompare(b.name))
  .map(tag => ({ name: tag.name, slug: tag.slug, total: tag.posts.length }))

rmSync(OUTPUT_DIR, { recursive: true, force: true })
mkdirSync(OUTPUT_DIR, { recursive: true })
writeJson(join(OUTPUT_DIR, 'index.json'), {
  total: posts.length,
  pageSize: PAGE_SIZE,
  tags,
})
writePages(join(OUTPUT_DIR, 'all'), posts)

for (const tag of tagMap.values()) {
  writePages(join(OUTPUT_DIR, 'tags', tag.slug), tag.posts)
}
