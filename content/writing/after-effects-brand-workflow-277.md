---
title: "After Effects Workflow for Brand Motion Design"
description: "How I structure After Effects projects for brand motion work to stay organized and efficient."
date: "2022-04-14"
tags: ["motion graphics","motion design","process"]
draft: false
---

Motion design project organization is the difference between a manageable project and a nightmare. After Effects files for brand work accumulate quickly — multiple compositions, dozens of layers, audio tracks, imported assets from multiple sources. Without a consistent organizational system, these projects become increasingly difficult to navigate, revise, and hand off.

Here's the structure I use for every brand motion project.

## Folder Structure First

Before I create a single composition, I set up the project panel structure:

`_ASSETS` — imported footage, images, audio, Illustrator and Photoshop files. Subfolders by asset type.
`_COMPS` — all compositions, organized into subfolders: `_FINALS` for delivery compositions, `_SEQUENCES` for scene-level comps, `_ELEMENTS` for reusable component comps.
`_PRECOMPS` — pre-compositions that serve as organizational layers within sequences.
`_RENDERS` — render queue outputs and reference exports.

This structure is consistent across every project, which means I can navigate any project I've worked on without relearning the file organization.

## The Master Composition

Every project has a master composition that contains only the delivery sequences. The master comp is what gets rendered for final delivery. Nothing except scene-level comps lives in the master.

This separation keeps the master comp clean and means that revising a single scene doesn't require navigating a composition with 200 layers. Changes propagate up from the scene comp to the master automatically.

## Naming Conventions

Consistent naming prevents the layer-naming entropy that makes complex projects unnavigable. My convention:

Compositions: `[PROJECT]_[TYPE]_[DESCRIPTOR]_[VERSION]` — e.g., `BRAND_FINAL_LogoReveal_v03`
Layers: descriptive names, not After Effects defaults. "Title Text — Main" not "Text Layer 14"
Null objects and guides: prefixed with `_` to float to the top of the layer order — `_Camera Controller`, `_Easing Null`

I name every layer immediately on creation. Retroactive naming of 50 layers is tedious and gets skipped.

## Global Controls

For brand motion work with consistent easing, timing, and color, I create a global controls composition with sliders and color controls that drive values throughout the project. Easing values, brand colors, duration multipliers — all in one place.

When a client asks to "make everything a bit slower" I change one slider value rather than manually adjusting timing across two dozen keyframes.

## The Asset Update Problem

Illustrator and Photoshop assets imported into After Effects maintain a live link to the source file. When the brand assets are updated (new logo version, revised color specifications), I can update the source file and the change propagates through the After Effects project.

This only works if the original file import is set to "Footage" mode for still assets and if the layer mode is compatible. I verify this on import rather than discovering the link is broken when I need it.

## Handoff and Archive

When a project is delivered, I do a File > Collect Files to gather all assets into a single folder. This ensures that anyone opening the archived project has everything they need without hunting for missing footage.

I document the project in a simple text file in the archive: what the deliverables were, what versions were produced, where the final renders live, and any project-specific notes a future editor would need.

Good organization is invisible when it's working. You only notice it when it's absent.
