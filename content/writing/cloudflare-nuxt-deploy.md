---
title: Deploying Nuxt 4 on Cloudflare Pages
description: A step-by-step guide to deploying a Nuxt 4 application on Cloudflare Pages — from build config to environment variables to the edge runtime gotchas.
date: "2026-04-10"
tags: ["cloudflare", "deployment", "nuxt"]
draft: false
---

# Deploying Nuxt 4 on Cloudflare Pages

Cloudflare Pages has become my go-to deployment target for Nuxt projects. The global edge network, generous free tier, and tight integration with Workers make it a strong choice. Getting Nuxt 4 configured correctly takes a few steps — here's what actually works.

## Why Cloudflare Pages

Before getting into setup: the reasons I reach for Cloudflare over Vercel or Netlify are mostly practical.

The free tier is genuinely useful — unlimited sites, 500 builds per month, and no cold starts. The edge runtime means your server-rendered pages run close to the user without paying for serverless functions. And if you later want to add a Workers-powered API, KV storage, or D1 database, it's all in the same ecosystem.

## Project Setup

Nuxt 4 supports Cloudflare Pages through the `cloudflare-pages` Nitro preset. Set it in `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages',
  },
})
```

That's the core change. Nitro handles the rest — it adapts the server output to run in the Workers runtime.

## Build Configuration in Cloudflare Dashboard

When connecting your repository to Cloudflare Pages, use these build settings:

- **Framework preset**: None (don't select Nuxt — it may use outdated defaults)
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js version**: 20 (set in environment variables as `NODE_VERSION = 20`)

The output directory is important. With the Cloudflare Pages preset, Nitro outputs to `dist/` rather than `.output/`. If you set the wrong directory, the deployment will succeed but serve a blank page.

## The `wrangler.jsonc` File

For local development with `wrangler`, create a `wrangler.jsonc` at the project root:

```jsonc
{
  "name": "your-project-name",
  "pages_build_output_dir": "./dist",
  "compatibility_date": "2024-09-23",
  "compatibility_flags": ["nodejs_compat"]
}
```

The `nodejs_compat` flag is required. The Workers runtime doesn't have Node.js APIs by default — this flag polyfills the ones Nuxt/Nitro depends on. Without it, you'll hit runtime errors for things like `Buffer` or `crypto`.

## Environment Variables

Cloudflare Pages handles environment variables differently from Node.js servers. A few things to keep in mind:

Runtime variables are set in the Pages dashboard under Settings > Environment variables. They're available in your Nitro server routes via `process.env`, but not in the build step unless you also add them as build-time variables.

For `useRuntimeConfig`, Nuxt splits between `runtimeConfig.public` (available in both client and server) and `runtimeConfig` (server-only). Mark sensitive values as server-only:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '', // server-only, set via environment variable NUXT_API_SECRET
    public: {
      apiBase: '/api', // exposed to client
    },
  },
})
```

Cloudflare will inject `NUXT_API_SECRET` at runtime, and Nuxt will map it to `runtimeConfig.apiSecret` automatically.

## @nuxt/content on the Edge

If you're using `@nuxt/content` v3, there's one important caveat: the SQLite database it generates needs to be bundled correctly.

Add this to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages',
    experimental: {
      wasm: true,
    },
  },
})
```

Content v3 uses a SQLite-based query engine, and the WASM flag ensures the binary is included in the Workers bundle. Without it, content queries will fail silently in production.

## Local Testing Before Deploy

Don't deploy without testing locally first. Wrangler can simulate the Cloudflare environment:

```bash
npm run build
npx wrangler pages dev dist
```

This runs your built output in a local Workers runtime, catching edge-specific issues before they hit production.

## Deployment

Once connected to Cloudflare via the dashboard, every push to your production branch triggers a build. Preview deployments are created automatically for other branches — useful for testing changes before merging.

For manual deploys:

```bash
npm run build
npx wrangler pages deploy dist --project-name your-project-name
```

## Common Issues

**Blank page after deploy** — check the build output directory. Should be `dist`.

**Module not found errors** — ensure `nodejs_compat` flag is set in `wrangler.jsonc`.

**Content not loading** — enable WASM experimental flag in Nitro config.

**Environment variables missing at runtime** — variables set in the dashboard are only available after the next deployment. Changes don't apply to existing deployments.

Once it's running, Cloudflare Pages is remarkably low-maintenance. Deployments are fast, the edge distribution is automatic, and there's very little to configure after initial setup.
