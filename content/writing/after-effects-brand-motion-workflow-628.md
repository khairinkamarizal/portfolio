---
title: "After Effects for Brand Motion: My Actual Workflow"
description: "A practical look at how I build brand motion work in After Effects — tools, techniques, and how I keep things organized."
date: "2024-03-18"
tags: ["motion graphics", "motion design", "after effects"]
draft: false
---

I've built up a fairly consistent After Effects workflow over years of brand motion work. Not because I'm precious about process, but because consistency in the technical workflow frees up attention for the creative decisions that actually matter. Here's how I actually work.

## Project Organization Before Anything Else

The amount of time I've lost in badly organized After Effects projects over the course of a career is something I don't want to calculate. I now spend 15 minutes at the start of every project setting up a folder structure I can maintain.

My standard structure:
- `_COMPS` — working compositions and master compositions
- `_PRECOMPS` — sub-compositions organized by sequence or element
- `_ASSETS` — imported files, organized by type (footage, audio, stills)
- `_RENDERS` — render outputs (though I usually render externally now)
- `_SCRIPTS` — any expressions or scripts used in the project

Naming conventions: I use all-caps labels for main sections and timestamp-prefixed names for comps that go through revisions (`v01_`, `v02_`, etc.). When you're deep in a project at midnight, clear naming is the difference between fast iteration and hours of confusion.

## Setting Up the Motion Language First

Before I animate anything, I build an easing preset file. The motion language of the brand — the specific easing curves that feel right for this brand's personality — gets established once and then referenced throughout.

I use the FLOW plugin for easing visualization, and I save custom curves as presets named for the brand. A "brand_arrive" curve, a "brand_exit" curve, a "brand_transition" curve. Using these consistently throughout the project is what creates the motion coherence that feels branded rather than generic.

## Expression-Based Systems

For brand motion work that needs to be consistent across multiple assets — a whole campaign, a series of social videos, a system of animated brand elements — I build expression-based systems rather than manually animating each comp.

A null object controlling timing offsets. Expressions that link color values to a single "brand color" control so I can update the whole project by changing one value. Parent-child hierarchies that make spatial adjustments propagate correctly.

This takes longer to build than manually animating each comp, but it makes revisions — which are inevitable in brand work — dramatically faster. When the client changes the hero color, I change one expression value and the whole project updates.

## The Pre-Comp Philosophy

Pre-composing is one of the most powerful organizational and workflow tools in After Effects, and it's commonly misused or underused. My rule: anything that's a self-contained unit of animation gets its own pre-comp. Logo animation, a text reveal, a graphic transition, a title sequence section.

Working this way means I can iterate on components independently, reuse them across multiple master comps, and maintain a master comp that's a clean sequence of pre-comps rather than a tangle of 200 layers.

## Rendering and Output

I render to an intermediate format (ProRes or DNx) rather than final delivery format from within After Effects. Final encoding happens in Media Encoder or a dedicated encoding workflow. This is faster, preserves quality for future revisions, and gives me a clean master file separate from the delivery formats.

For brand asset delivery I output multiple formats simultaneously: H.264 for web, ProRes for broadcast or high-quality applications, and a lossless PNG sequence for clients who need to composite the animation.
