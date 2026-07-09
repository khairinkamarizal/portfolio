---
title: Motion Design Principles for UI
description: The core principles that make UI motion feel intentional rather than decorative — timing, easing, purpose, and how to apply them in practice.
date: "2026-03-05"
tags: ["motion", "animation", "design"]
draft: false
---

# Motion Design Principles for UI

Motion in UI divides into two camps: motion that helps and motion that distracts. The difference isn't the quantity of animation — it's whether each animation has a clear reason to exist. These are the principles I return to whenever I'm designing or reviewing motion.

## Purpose Before Aesthetics

Every animation should answer one of these questions:

- **Orientation** — where did this element come from / where did it go?
- **Feedback** — did my action register?
- **Continuity** — how do these two states relate to each other?
- **Hierarchy** — what should I pay attention to first?

If an animation doesn't serve one of these, remove it. Decorative motion adds cognitive load without benefit. The best UI animations are the ones users don't consciously notice — they just feel that the interface is clear and responsive.

## Timing

Timing is the most powerful tool in motion design. Too fast and transitions feel jarring; too slow and the interface feels sluggish.

General ranges that work well in UI:

- **Micro-interactions** (button hover, toggle, checkbox): 100–200ms
- **Component transitions** (modal open, dropdown expand): 200–300ms
- **Page transitions**: 300–400ms
- **Emphasis animations** (drawing attention to something): 400–600ms

These are starting points, not rules. A small element should move faster than a large one — the eye expects objects to cross distances proportionally. A full-screen transition at 150ms will feel broken; a tooltip appearing at 300ms will feel slow.

## Easing

Linear motion looks mechanical because nothing in the physical world moves at constant speed. Objects accelerate when they start moving and decelerate when they stop.

The four essential easing curves:

**Ease-out** (`cubic-bezier(0, 0, 0.2, 1)`) — fast start, slow end. Use for elements entering the screen. They arrive with energy and settle into place.

**Ease-in** (`cubic-bezier(0.4, 0, 1, 1)`) — slow start, fast end. Use for elements leaving the screen. They build momentum as they exit.

**Ease-in-out** (`cubic-bezier(0.4, 0, 0.2, 1)`) — slow start, slow end. Use for elements that move from one position to another within the screen. Natural, physical feel.

**Spring** — overshoots the target, then settles. Adds personality and weight. Use sparingly — works well for playful interactions, not for professional utility software.

In CSS:

```css
.enter {
  animation: slide-in 250ms cubic-bezier(0, 0, 0.2, 1);
}

.exit {
  animation: slide-out 200ms cubic-bezier(0.4, 0, 1, 1);
}
```

Note that enter and exit durations are different — exits should be slightly faster. When something leaves the screen, the user is already focused on what's next.

## Spatial Consistency

Motion should reinforce the spatial model of your interface. If a modal opens from a button, it should feel like it emerged from that button — not appeared from nowhere. If a panel slides in from the right, dismissing it should slide it back right.

This creates a mental model for the user. They develop intuitions: "swiping left dismisses," "tapping back slides right." Consistent spatial motion makes navigation feel learnable rather than arbitrary.

In practice, this means thinking about your interface as a three-dimensional space, even though it's rendered flat. Screens stack on top of each other (z-axis). Elements within a screen exist on the same plane (x/y). Modal overlays sit above the content beneath them.

## Choreography

When multiple elements animate together, they need to be choreographed. Everything moving at once is chaos. Elements entering in strict sequence can feel robotic.

The middle ground: stagger. Enter animations stagger in reading order (top to bottom, left to right), with small offsets:

```css
.item:nth-child(1) { animation-delay: 0ms; }
.item:nth-child(2) { animation-delay: 40ms; }
.item:nth-child(3) { animation-delay: 80ms; }
```

Keep stagger offsets small — 30–60ms is usually enough. Larger offsets make the animation feel like a PowerPoint presentation.

## Respecting User Preferences

Some users are sensitive to motion — vestibular disorders, migraines, or simply preference. The `prefers-reduced-motion` media query exists for this:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Don't just remove animations — replace them with instant state changes. The UI should still work; the motion is just stripped out. This is a baseline accessibility requirement, not optional polish.

## The Restraint Principle

The most common mistake in UI motion is too much. Every added animation competes for attention. A single well-timed, purposeful animation stands out. Ten animations happening simultaneously means none of them land.

Start with no motion. Add it only when you can articulate the specific reason — what does this animation communicate that static state changes don't? If you can't answer that clearly, don't add it.

Motion is a design tool, not a feature. Use it like whitespace: deliberately, sparingly, and always in service of the content.
