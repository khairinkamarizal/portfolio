---
title: "Motion Design Deliverables: What to Hand Off and How"
description: "The files, formats, and documentation that make a motion design handoff actually useful."
date: "2022-08-25"
tags: ["motion design","motion graphics","process"]
draft: false
---

Motion design deliverables are more complex than static design deliverables, and they're more frequently mishandled. I've seen projects where beautiful animation was delivered in the wrong codec, at the wrong frame rate, without the source files, and without any documentation of how to use what was delivered. The client was stuck with assets they couldn't implement and a designer they couldn't reach.

Good delivery is part of good design. Here's what I include.

## The Master File Package

The source files — After Effects project files, any linked assets, any third-party plugins required — are delivered in a collected, self-contained package. I use After Effects' File > Collect Files function to gather everything into a single folder. Anyone opening the project should find all assets in place, no missing footage warnings.

I test the collected package on a clean machine or in a fresh After Effects instance before delivering it. If it works for me in a clean environment, it'll work for the client.

## Format Matrix

Motion graphics get used in multiple contexts requiring different formats. A logo animation might need to work as: a transparent-background ProRes 4444 for video editing, an MP4 with black background for social media, a GIF for email, and potentially an animated SVG or Lottie for web use.

I deliver a format matrix — a document that lists every delivered file, its format, its intended use case, and its technical specifications. Without this, clients often use the wrong file in the wrong context, and the motion work looks wrong as a result.

## Codec and Technical Specifications

Different platforms require different codecs and compression settings. For broadcast: ProRes or DNxHD. For web social: H.264 MP4 at appropriate bitrate. For archiving: lossless or near-lossless formats.

I specify and deliver for each intended use. A single H.264 export is almost never sufficient for a professional motion project.

## The Loop Documentation

For any looping animation, I document the loop point explicitly: the exact frame where the loop occurs, confirmation that the loop is seamless, and any technical notes about how the loop should be implemented in the playback context.

I also specify whether the file is a true seamless loop (first and last frame match) or requires cross-fade looping in the playback system.

## Editable Components

For clients who will need to update motion graphics themselves — swapping text, updating dates, changing imagery — I provide either clearly labeled template comps within the After Effects project or instructions for how to make common updates.

If the client's team doesn't use After Effects, I consider whether a simpler template format (a Keynote or PowerPoint master with the motion elements) better serves their actual capabilities.

## Version Control in Deliverables

I name delivered files with version numbers and dates: `[PROJECT]_LogoReveal_v03_2022-09.mp4`. This prevents confusion about which version is current and gives the client a clear audit trail.

I also provide a brief version history: what changed between each version, why, and which version is final.

## The Usage Guide

A one-page usage guide that explains: which file to use in which context, what the files are NOT suitable for, any important technical notes about playback, and who to contact if there are questions.

This document takes thirty minutes to write and saves hours of client confusion. The investment is always worth it.

Good delivery is how work that performs well in production gets the chance to perform. Don't let weak handoff undermine strong work.
