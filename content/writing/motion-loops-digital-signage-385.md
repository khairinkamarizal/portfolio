---
title: "Designing Motion Loops for Digital Signage"
description: "The specific constraints and techniques for motion that runs on screens in physical spaces."
date: "2023-03-22"
tags: ["motion design", "motion graphics", "branding"]
draft: false
---

Digital signage is one of the most underserved areas of motion design. The constraints are different from broadcast, different from social, different from web. The motion plays continuously in a physical environment, often without audio, often viewed by people who are moving past the screen rather than sitting still in front of it.

## The Three-Second Rule

People passing a digital sign have roughly three seconds of attention before they're past it. The most important message needs to hit in the first two seconds. The third second is for the viewer who pauses.

This means every motion graphic for signage needs to work as a still frame as well as a motion piece. The peak frame — the frame I'd choose if I could only show one — should communicate the primary message completely. The motion adds emphasis and draws attention, but the still frame carries the content.

## Ambient vs. Active States

Signage often needs two states: an ambient state (looping motion that runs when no specific message needs to be conveyed) and an active state (the full motion sequence that plays when there's content to communicate).

The ambient state should be subtle — motion that catches the peripheral eye without demanding focused attention. Slow, continuous movement. Gently cycling colors. Rhythmic elements. The ambient state says "something is happening here" without competing with the environment.

The active state can be more assertive — faster pace, higher contrast, more deliberate hierarchy.

## Audio-Independent Design

Always design signage for no audio. Even when a venue has audio capability, the sound environment can't be predicted or controlled. A motion piece that depends on a soundtrack for timing or emphasis will feel wrong half the time.

All hierarchy has to be visual. Motion drives the message, not audio cues. This is a useful constraint — it forces visual clarity that makes the piece stronger even when audio is present.

## Loop Smoothness

The loop point — the invisible cut where the animation wraps — is the most critical technical challenge in signage design. A visible loop ruins the ambient quality of the piece. I design the end state of every loop to match the start state closely enough that the transition is imperceptible.

For complex motion, I build short crossfade transitions into the loop point. In video editing, a one-frame dissolve at the loop point smooths most transitions. In generative or code-based motion, I ease velocity to near-zero at both ends of the loop.

## Environmental Considerations

Digital signage screens are often viewed in high-ambient-light environments. I design for reduced contrast relative to controlled viewing conditions. Colors that look vivid in a dark room can look washed out next to a sunlit window.

I also consider viewing angles. Wide-format signage may be viewed from extreme angles where the color profile shifts. Test the piece under the actual viewing conditions whenever possible.
