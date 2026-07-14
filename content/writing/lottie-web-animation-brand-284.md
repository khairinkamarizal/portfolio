---
title: "Lottie and Web Animation for Brand Motion"
description: "How I approach creating brand-consistent motion graphics for web contexts using Lottie."
date: "2022-07-18"
tags: ["motion design","motion graphics","branding"]
draft: false
---

Video formats — MP4, GIF, WebM — have been the default way to deliver motion graphics for web contexts. They work, but they have real limitations: file sizes that affect page load performance, fixed dimensions that don't scale to different screen sizes, and no ability for the web environment to interact with or modify the animation dynamically.

Lottie, the JSON-based animation format exported from After Effects via the Bodymovin plugin, addresses many of these limitations. It's lightweight, infinitely scalable, customizable at runtime, and interactive. For brand motion work in web contexts, it's increasingly the right tool.

## What Lottie Does Well

Lottie excels at relatively simple, clean animation: logo reveals, icon animations, loading states, illustration-based animations, and motion graphics built from vectors. These animations export cleanly to JSON, render crisply at any scale, and typically have very small file sizes compared to equivalent video formats.

A logo reveal that's 500KB as an MP4 might be 15KB as a Lottie file. At the same time, the Lottie version renders sharply on a 4K display where the MP4 would look soft.

## What Lottie Does Poorly

Lottie doesn't handle footage, complex compositing, particle systems, or 3D rendering. Any animation that relies on video footage, photograph compositing, or After Effects effects that render to pixel images won't translate to Lottie.

I assess each motion project for Lottie suitability based on the animation techniques used. If the entire piece can be built from vector shapes, text, and solid layers with transform properties, it's likely a good Lottie candidate. If it relies on rasterized effects or footage, it isn't.

## Preparing After Effects Files for Lottie Export

Not all valid After Effects animation translates to Lottie. The Bodymovin exporter supports a subset of After Effects' feature set, and unsupported features either export incorrectly or are ignored entirely.

I work from a clean practices checklist: all text converted to shapes (or using the text export option), expressions replaced with baked keyframes where Lottie-unsupported expressions are used, trim paths used instead of stroke effects, and layer styles avoided in favor of native shape properties.

Testing the Lottie export early in the animation process — not after the entire piece is finished — catches incompatibilities when they're cheap to address.

## Runtime Customization

Lottie animations can be modified at runtime by web developers: colors changed to match a user's theme, text replaced with dynamic content, playback speed controlled by user interaction. This opens up possibilities that video formats don't.

For brand motion work where the same animation needs to work in multiple color contexts (light mode, dark mode, different brand color variants), I build color control layers that developers can target for runtime modification. This delivers one animation file that adapts to its context rather than multiple variant files.

## Testing Across Playback Libraries

Lottie is rendered by JavaScript libraries — lottie-web is the standard. Different versions and different configurations can produce slightly different rendering. I test exported animations in the actual playback environment rather than just in the Lottie preview apps.

Edge cases that look perfect in preview can have rendering differences in production. Test in the real context before signing off.

The performance benefits of Lottie for appropriate use cases are substantial enough to warrant the additional preparation. File size, scalability, and interactivity aren't nice-to-haves in web contexts — they're significant quality factors.
