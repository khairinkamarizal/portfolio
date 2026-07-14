---
title: "Motion Design for Brand Events and Presentations"
description: "How I approach motion graphics work for live event contexts and large-format displays."
date: "2022-09-01"
tags: ["motion design","motion graphics","branding"]
draft: false
---

Event motion design — the graphics that run on LED walls, projection surfaces, speaker support screens, and broadcast displays at live events — operates under constraints that studio motion design doesn't. You're designing for a physical space, a live audience, lighting conditions you often can't predict, playback systems you may not have tested, and a timeline that ends when the event starts whether you're ready or not.

I've designed for product launches, conferences, award ceremonies, and brand activations. Here's what that work has taught me.

## Know the Playback System

Before designing a single frame, I need to know what system will play back the graphics. Different event graphics platforms — Resolume, Disguise, Watchout, standard broadcast playback — have different capabilities, codec requirements, and timing precision. A graphic designed for smooth 60fps playback that gets played on a 30fps system looks wrong. A looping animation with a seamless loop that doesn't account for the playback system's pre-roll behavior will have a visible glitch.

I get the technical specifications from the event technical director early and design to them. This isn't just due diligence — it's the difference between graphics that work and graphics that embarrass you in front of three thousand people.

## Large Format Display Geometry

LED walls and projection surfaces have pixel configurations that don't match standard video formats. A wall might be 5760×1200 pixels — extremely wide, not very tall. Another might be multiple panels with bezels creating visual breaks. A room might have multiple surfaces with different orientations.

I get the actual pixel dimensions and surface layouts before designing. I mock up the graphics in the actual configuration during development. A motion piece that looks beautiful in a 16:9 preview can look completely wrong when stretched to an unusual aspect ratio.

## Ambient Light Is the Enemy of Detail

At live events, ambient light from stage lighting, house lights, and windows competes with display output. Fine details — subtle gradients, thin typography, light-on-light compositions — disappear in ambient light conditions.

I design for high contrast: bold elements, strong color, generous scale. This feels excessive in studio review and looks right on the actual display in event lighting. Calibrate your expectations to the room, not to your monitor.

## The Loop Point Problem

Event graphics almost always loop — they run continuously before and between program segments. Seamless loops are non-negotiable. A visible loop point (a visual pop or jump at the restart) is one of the most unprofessional things a motion designer can deliver for a live event context.

I design loop points explicitly, ensuring that the last frame's state matches the first frame's state exactly, including any animated elements. I test the loop at full speed, not just by checking the first and last frames visually.

## Building Flexibility Into the Timeline

Live events change. The speaker goes over time. The demo doesn't work. The segment gets cut. The graphics need to respond gracefully to these changes.

I design event graphics as flexible modules that can be extended or shortened without rebuild. Looping backgrounds with overlay elements that can be started or stopped independently. Title cards that work as quick overlays on any background.

The technical director running the event shouldn't need me on site to handle changes. Build for flexibility from the start.
