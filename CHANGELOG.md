# Changelog

All notable changes to khair.ink are documented here.

## [0.3.0] — 2026-07-08

### Overview
Full micro-interaction pass, visual polish, new UI components, and three new writing posts. Establishes the complete component library for the portfolio.

### New Components
- **HoverUnderline** — CSS-only animated underline that slides in from left on hover
- **RevealOnScroll** — IntersectionObserver-based fade+slide reveal, animates once
- **TextSplit** — Character or word stagger animation using CSS custom property delays
- **MagneticButton** — JS mouse-tracking magnetic attraction effect, desktop only
- **GlitchText** — Hover-triggered CSS clip-path glitch effect, three intensity levels
- **NumberedList** — Editorial magazine-style numbered list with large monospace numbers
- **Blockquote** — Styled blockquote with large quotation mark, for use in MDC posts
- **ReadingProgress** — Fixed thin top bar reading progress indicator (black/white)
- **ImageCaption** — Image with micro-typography caption for writing posts
- **TagPill** — Standalone tag pill with active/inactive states and size variants
- **TagList** — Tag list using TagPill with active state management and click events
- **ProjectMeta** — Compact year · category · tags metadata row for work cards
- **EmptyState** — Reusable centered empty state with optional icon
- **ToolBadge** — Tool/technology badge with design/dev/other type variants
- **Testimonial** — Quote card with large quotation mark and attribution footer
- **ProcessStep** — Design process step with large monospace number and description
- **BackgroundText** — Decorative large background text at 20vw scale
- **GridLines** — CSS-only decorative vertical grid lines, fixed, pointer-events-none

### Page Updates
- **index.vue** — Wrapped stats, featured work, and writing sections in RevealOnScroll; hero name uses TextSplit character animation
- **writing/index.vue** — Empty state replaced with EmptyState component
- **writing/[slug].vue** — Added ReadingProgress; improved prose typography with larger line-height, better code block styling
- **about.vue** — Added Tools & Stack section (ToolBadge) and My Process section (ProcessStep)
- **work.vue** — Added BackgroundText "WORK" as decorative hero background element

### Layout Updates
- **simple.vue** — Added GridLines as decorative background layer for editorial feel

### Content
- **portfolio-design-decisions.md** — Why full-bleed, why Space Mono, why minimal palette, the editorial approach (~700 words)
- **balancing-design-dev.md** — Thoughts on being a hybrid designer-developer (~600 words)
- **visual-hierarchy-principles.md** — Scale, contrast, weight, spacing — core hierarchy principles (~700 words)

---

## [0.2.0] — 2026-07-07

### Overview
Full-bleed layout redesign. Rebuilt the layout system from the ground up with a sticky header and newspaper-style typographic hierarchy.

### Changes
- **simple.vue** — Full-bleed rewrite with sticky header, backdrop blur, clock, color toggle, and mobile menu
- **AppNav** — Redesigned for sticky header with mobile prop and close emit
- **MobileMenu** — New hamburger component with route-aware close
- **SectionLabel** — Redesigned as newspaper-style section header
- **PageHeader** — Strong typographic hierarchy with label + title + description

---

## [0.1.0] — 2026-07-06

### Overview
Initial commit. Project scaffolding with Nuxt 4, Tailwind CSS, Space Mono + Inter Tight typography, black/white design system.
