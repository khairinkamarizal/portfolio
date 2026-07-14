---
title: "Broadcast Graphics: Designing for the Television Environment"
description: "The specific technical and aesthetic challenges of creating graphics for broadcast television."
date: "2022-12-05"
tags: ["motion graphics", "motion design", "branding"]
draft: false
---

Broadcast graphics occupy a different world from social or web motion design. The technical constraints are stricter, the production chain is more complex, and the audience expectations are shaped by decades of established conventions. Understanding the broadcast environment before designing for it prevents a lot of expensive mistakes.

## The Title Safe Area

Broadcast television has safe zones that define where content should live to be visible on all receiving screens. The action safe area (typically 93% of frame) is where moving content should live. The title safe area (typically 90% of frame, or 80% in older specifications) is where text should live.

These safe zones exist because older CRT televisions had physical overscan — the image extended slightly beyond the visible tube area. Modern flat-screen televisions have largely eliminated this issue, but broadcasting standards still encode these safe zones, and many broadcast facilities still enforce them.

## Legal Whites and Super Blacks

Broadcast signal specifications limit the legal luminance range. "Legal white" is 100 IRE — any brighter and the signal clips. "Super black" (below 7.5 IRE in older NTSC systems) can cause issues in some broadcast chains.

Pure white (#FFFFFF) in a design is not broadcast-legal white. Broadcast-legal white in the Rec. 709 color space is approximately 235, 235, 235 in RGB values. I check every design against broadcast-legal color ranges before delivery.

## Frame Rate Considerations

Broadcast frame rates vary by region and delivery specification. North American broadcast is typically 29.97fps. European is 25fps. Film is 24fps. The motion design is affected by frame rate — the same animation at 25fps feels slightly different than at 29.97fps. I design to the specified delivery frame rate and test playback at that rate.

## Lower Third Design

Lower thirds — the graphic elements that identify speakers or provide contextual information — are one of the highest-volume deliverables in broadcast design. A well-designed lower third system needs to: be instantly legible, work across a wide range of backgrounds (a lower third that only works on dark backgrounds fails in daylight exterior shots), and animate in and out in a way that feels appropriate for the broadcast's editorial tone.

I design lower thirds with semi-transparent backgrounds that are flexible across background complexity. Solid color backgrounds are cleaner but fail against backgrounds that share that color.

## The Broadcast Style Guide

Every broadcast project needs a motion style guide that production partners can use to build new elements without coming back to the original designer for every need. The guide includes After Effects templates, font files, color specifications in broadcast-legal values, and documented animation parameters. Broadcast production moves quickly — the style guide has to be operational, not just beautiful.
