import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),
    writing: defineCollection({
      type: 'page',
      source: 'writing/**',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
      }),
    }),
    work: defineCollection({
      type: 'data',
      source: 'work/**',
      schema: z.object({
        title: z.string(),
        year: z.number(),
        tags: z.array(z.string()).default([]),
        description: z.string(),
        behanceUrl: z.string(),
      }),
    }),
  },
})
