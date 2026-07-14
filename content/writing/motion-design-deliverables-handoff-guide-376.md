---
title: "Motion Design Deliverables: What to Hand Off and How"
description: "A practical guide to organizing and delivering motion design files to clients and collaborators."
date: "2022-10-25"
tags: ["motion design", "motion graphics", "graphic design"]
draft: false
---

Motion design deliverables are more complex than static design deliverables. The source files are typically large, the dependencies are numerous, and the range of export formats required spans multiple use cases. Getting the handoff right prevents the client's first experience with the delivered files from being confusion and frustration.

## The Deliverable Structure

I organize motion deliverables in a consistent folder structure for every project:

`/SOURCE` — all After Effects project files, organized by deliverable  
`/ASSETS` — all source footage, audio files, fonts, and other dependencies  
`/EXPORTS` — all rendered exports, organized by format and deliverable  
`/DOCS` — delivery notes, format specifications, and technical requirements

This structure is consistent across all my projects. A client or collaborator who has worked with me before knows exactly where to find things.

## Source File Documentation

The After Effects source files need documentation that explains their structure to anyone who'll need to edit them. I leave a text layer at the top of the master composition (rendered invisible) that notes: the composition structure, where to make common edits, font and asset dependencies, and any expressions that need to be understood to edit safely.

This takes thirty minutes to write and saves hours of confusion for anyone who inherits the files.

## The Collect Files Operation

Before delivering After Effects source files, I always run File > Dependencies > Collect Files. This creates a self-contained project folder with all linked assets copied into a single location. A project delivered without this step often has broken links on the recipient's machine because file paths differ.

I verify the collected project opens cleanly on my machine before packaging it for delivery.

## Export Format Matrix

Most motion deliverables require multiple export formats for different use cases. A typical motion brand element might need: H.264 MP4 for web, ProRes 4444 with alpha for broadcast and compositing, animated GIF for email contexts, and a still frame PNG for thumbnail use.

I document the export format matrix in the delivery notes so the client understands what each file is for and which format to use in each context.

## Version Control

Motion projects iterate. I maintain a clear version numbering system — v01, v02, v03 — in both file names and exported deliverables. I never overwrite a previous version; I create a new version. The client always has the full revision history if they need to return to a previous version.

In the export folder, the current approved version is clearly designated — either by naming convention (APPROVED_v03) or by a readme file that lists the current approved versions of each deliverable.

## Archiving

After delivery, I archive the complete project including all assets and exports. Motion project archives are large, but the cost of not having them when a client needs a revision eighteen months later is larger. I keep projects archived for a minimum of three years after final delivery.
