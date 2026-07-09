# khair.ink

Personal portfolio of Khairin Kamarizal — Creative Designer & Developer. Cyberjaya, Malaysia.

Live at [khair.ink](https://khair.ink).

---

## Features

- Minimal black/white design, centered max-w-md column
- Dark/light mode with system preference detection
- Writing section powered by `@nuxt/content` with tag filtering and reading time
- Selected work showcase with Behance links
- AI-powered message interface (Gemini API)
- Experimental brutalist page
- Local time display (Kuala Lumpur timezone)
- Full accessibility: skip link, ARIA labels, semantic HTML
- Open Graph + Twitter card meta on all pages
- Deployed to Cloudflare Pages

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Nuxt 4](https://nuxt.com/) (Vue 3) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Content | [@nuxt/content v3](https://content.nuxt.com/) |
| Icons | [lucide-vue-next](https://lucide.dev/) |
| Fonts | Inter Tight + Space Mono via Google Fonts |
| Deployment | [Cloudflare Pages](https://pages.cloudflare.com/) |

---

## Local Development

**Prerequisites:** Node.js 20+, pnpm

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The dev server runs at `http://localhost:3000`.

### Environment Variables

Create a `.env` file at the root (see `.env.example`):

```
GEMINI_API_KEY=your_key_here
```

The Gemini API key powers the `/message` page. The rest of the site works without it.

---

## Writing Content

Posts live in `content/writing/` as Markdown files with frontmatter:

```md
---
title: My Post Title
description: A short description shown in the list.
date: 2026-01-15
tags: [design, ui]
draft: false
---

Post body here...
```

Set `draft: true` to hide a post from the listing.

---

## Deployment

The site deploys to Cloudflare Pages via the `cloudflare_module` Nitro preset.

```bash
pnpm build
```

The output goes to `.output/`. Point Cloudflare Pages to this directory or connect the GitHub repo directly for automatic deploys on push.

---

## Socials

- [Instagram](https://instagram.com/khairinkamarizal)
- [Behance](https://be.net/khairinkamarizal)
- [LinkedIn](https://linkedin.com/in/khairinkamarizal)

---

## License

MIT — see [LICENSE](./LICENSE).
