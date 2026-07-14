---
title: "Designing for Broadcast: Motion Graphics in Video Production"
description: "What's different about designing motion graphics for broadcast versus digital-first contexts."
date: "2020-01-10"
tags: ["motion graphics", "broadcast design", "motion design"]
draft: false
---

Broadcast motion graphics have their own set of rules, constraints, and aesthetic conventions that don't fully translate from digital-first design. I've worked on both, and the differences are significant enough that treating them as the same discipline produces work that looks out of place in broadcast contexts.

## Safe Zones and Title Safety

Broadcast television has safe zone conventions that predate modern flat-screen displays but persist in professional production workflows because broadcast clients and post-production teams expect them. Title safe (typically 80% of the frame) and action safe (typically 90% of the frame) define where text and critical visual information should be placed to avoid being cut off on older displays or in varying broadcast conditions.

Modern digital delivery has relaxed these constraints, but working with broadcast clients means respecting their house standards, which often still include safe zone requirements.

## Frame Rates and Motion Quality

Broadcast in different markets runs at different frame rates: 24fps for cinematic work, 25fps for PAL broadcast markets, 29.97fps for NTSC markets, 50 or 60fps for sports and live production. Motion designed at the wrong frame rate looks wrong when converted.

More practically: motion that looks smooth at 60fps on a monitor can look strobed and harsh at 25fps broadcast. Designing motion for broadcast means testing at broadcast frame rates, not assuming that what looks good on your monitor will look good on air.

## Color for Broadcast

Broadcast has specific color gamut constraints. Colors that look saturated and vivid on a computer monitor can "bloom" or smear in broadcast, particularly highly saturated reds. Video scopes — waveform monitors and vectorscopes — are the tools for ensuring broadcast-legal color.

I check every broadcast motion project against broadcast color standards. Keeping luminance values within broadcast legal range (7.5–100 IRE for NTSC, 0–100% for PAL) and avoiding oversaturated hues is non-negotiable for broadcast delivery.

## Typography at Video Resolution

Typography for broadcast has to survive being output to video and displayed on a television screen. This means avoiding very thin strokes that can flicker on interlaced displays, avoiding very small type that becomes illegible at broadcast resolution, and using generous leading because video compression can make closely-set lines visually muddy.

My minimum type size for broadcast lower thirds and supers is typically larger than I'd use in print or digital design at the same relative scale.

## Working With Video Editors

Broadcast motion graphics are rarely standalone — they integrate with video editing workflows managed by editors in DaVinci Resolve, Premiere Pro, or Avid. Designing in formats that editors can actually use is part of the job.

This means understanding the editor's workflow before starting, delivering in the formats they need (often pre-rendered video with alpha, or After Effects project files compatible with their version), and designing with the edit in mind — knowing that the motion will be cut, that timing may be adjusted, and that flexibility is more valuable than perfection.
