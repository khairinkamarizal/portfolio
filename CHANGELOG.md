# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.1.0] - 2026-07-09

### Added

#### Pages
- **Home** (`/`) — hero section with animated tagline, featured work preview, and social links
- **About** (`/about`) — bio, skills by category, experience timeline, tools list
- **Work** (`/work`) — selected projects with tags, descriptions, and Behance links
- **Writing** (`/writing`) — blog index with tag filtering and reading time estimates
- **Writing post** (`/writing/[slug]`) — full post view with prose styling and metadata
- **Message** (`/message`) — AI-powered message/contact interface via Gemini API
- **Brutalist** (`/brutalist`) — experimental brutalist design page

#### Components
- `AppLogo` — SVG logo with hover animation
- `AppNav` — main navigation with active state
- `ColorToggle` — dark/light mode toggle button
- `PageHeader` — reusable page title + description block
- `PostCard` — writing list item with date, tags, reading time
- `SkillBadge` — pill badge for skill tags
- `WorkCard` — project list item with year, tags, description, external link
- `NewsletterSignup` — email subscribe form (UI only)
- `CopyButton` — clipboard copy button with feedback state

#### Layout
- `simple.vue` — base layout with header, nav, footer slot, local time display

#### SEO & Meta
- Open Graph tags on all pages
- Twitter card meta
- Canonical URL configured
- Favicon (SVG)

#### Accessibility
- Skip to content link for keyboard users
- ARIA labels on header, nav, interactive elements
- Semantic HTML throughout
- Focus-visible styles

#### Content
- `@nuxt/content` v3 integration with writing collection schema
- Markdown rendering with prose typography classes

#### Infrastructure
- Nuxt 4 with Cloudflare Pages deployment (`cloudflare_module` preset)
- `@nuxtjs/color-mode` with system preference detection
- `@nuxtjs/google-fonts` — Inter Tight + Space Mono
- `@nuxtjs/tailwindcss` with dark mode class strategy
- Runtime config for Gemini API key
