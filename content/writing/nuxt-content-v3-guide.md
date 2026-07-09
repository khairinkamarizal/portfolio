---
title: "Getting Started with Nuxt Content v3"
description: "A practical guide to building content-driven sites with @nuxt/content v3 and Cloudflare"
date: "2026-07-05"
tags: ["nuxt", "content", "cloudflare", "tutorial"]
draft: false
---

Nuxt Content v3 is a significant rewrite of the content module — and if you've used v2 before, the mental model has shifted enough that it's worth starting fresh rather than trying to map old concepts onto new ones.

This guide covers the setup, querying, and deployment to Cloudflare Pages. By the end you'll have a working content-driven site that's fast, type-safe, and globally distributed.

## What Changed in v3

The biggest shift is the query API. v2 used a MongoDB-like query builder (`$query('articles').where('published', true).fetch()`). v3 moves to a SQL-inspired `queryCollection` API backed by a SQLite database under the hood.

This means:
- Queries are faster and more predictable
- You get proper type inference from your content schema
- The `content.config.ts` file is now the source of truth for your schema

## Setup

Start with a fresh Nuxt 4 project:

```bash
npx nuxi@latest init my-site
cd my-site
npx nuxi@latest module add content
```

Install the Cloudflare adapter while you're at it:

```bash
npx nuxi@latest module add cloudflare
```

## Defining Your Schema

Create `content.config.ts` in the project root. This is new in v3 — it's where you define collections and their schemas:

```ts
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    writing: defineCollection({
      type: 'page',
      source: 'writing/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
      }),
    }),
  },
})
```

The `z` here is Zod — v3 uses it natively for schema validation. Any frontmatter that doesn't match the schema will cause a build warning, which is helpful for catching typos early.

## Writing Your First Post

Create `content/writing/my-first-post.md`:

```md
---
title: "My First Post"
description: "A short intro post"
date: "2026-07-05"
tags: ["writing"]
draft: false
---

Your content here.
```

The `draft: false` field is important. In v3, you filter drafts explicitly in your queries — there's no automatic draft filtering.

## Querying Content

In a page component, use `queryCollection`:

```ts
const { data: posts } = await useAsyncData('writing', () =>
  queryCollection('writing')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()
)
```

For a single post by slug:

```ts
const route = useRoute()

const { data: post } = await useAsyncData(`post-${route.params.slug}`, () =>
  queryCollection('writing')
    .path(`/writing/${route.params.slug}`)
    .first()
)
```

Note the `.path()` method — v3 uses the file path as the primary identifier rather than a separate slug field. The stem (filename without extension) maps to the URL path automatically.

## Rendering Content

Use `ContentRenderer` to render the parsed markdown:

```vue
<template>
  <ContentRenderer v-if="post" :value="post" />
</template>
```

For prose styling, pair it with `@tailwindcss/typography`:

```vue
<div class="prose prose-sm dark:prose-invert max-w-none">
  <ContentRenderer :value="post" />
</div>
```

## Deploying to Cloudflare Pages

With the Cloudflare adapter installed, your `nuxt.config.ts` needs:

```ts
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages',
  },
})
```

Build and deploy:

```bash
npx nuxi build
npx wrangler pages deploy dist
```

Or set up a GitHub integration in the Cloudflare dashboard and push to deploy automatically. Cloudflare Pages runs the build step for you on each push.

One thing to watch: Nuxt Content v3 generates a SQLite database at build time (`content.db`). The Cloudflare adapter bundles this correctly, but if you're using D1 for dynamic content, you'll need additional configuration — that's a separate guide.

## A Few Gotchas

**Draft filtering is manual.** Unlike v2, v3 doesn't filter drafts automatically. Always add `.where('draft', '=', false)` to production queries.

**Path-based queries use the full path.** If your file is at `content/writing/my-post.md`, the path is `/writing/my-post`. The leading slash matters.

**Schema changes need a rebuild.** The SQLite database is generated at build time. If you change your schema in `content.config.ts`, restart the dev server to regenerate it.

**`useAsyncData` keys must be unique.** Reusing the same key across multiple calls causes cache collisions. Use the slug or route params as part of the key.

## What's Next

This setup gets you a fast, statically generated content site deployed globally on Cloudflare's edge network. From here you can explore MDC (Markdown Components) for richer content, `ContentRenderer` customisation, and incremental static regeneration if you need dynamic content updates without a full rebuild.

The v3 docs are still catching up to the implementation in places — reading the source and the changelog has saved me more than once. Worth bookmarking the GitHub repo alongside the official docs.
