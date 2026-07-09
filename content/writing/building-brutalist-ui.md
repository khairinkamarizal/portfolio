---
title: "Building a Brutalist Design Critique Tool"
description: "Behind the scenes of the AI-powered brutalist critique tool built with Gemini API"
date: "2026-06-28"
tags: ["ai", "gemini", "nuxt", "design"]
draft: false
---

The brutalist critique tool started as a joke. A designer friend sent me a screenshot of a particularly polished, committee-approved SaaS landing page and said "someone needs to tell these people the truth." That was enough to build something.

## What it does

The tool takes a screenshot or URL, sends it to the Gemini API, and returns a critique written in the style of a brutalist design critic — blunt, opinionated, occasionally harsh. No "nice overall composition" or "consider your whitespace." Just the unfiltered take.

It's an experiment in using AI not to be helpful and affirming but to be deliberately critical. Most AI tools are tuned to validate. This one isn't.

## The Gemini API setup

I'm using `@google/generative-ai` in a Nitro server route. The `/api/critique` endpoint accepts a POST with image data — either a base64-encoded screenshot or a URL that gets fetched server-side.

```typescript
import { GoogleGenerativeAI } from '@google/generative-ai'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const genAI = new GoogleGenerativeAI(useRuntimeConfig().geminiApiKey)
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

  const result = await model.generateContent([
    CRITIQUE_PROMPT,
    { inlineData: { data: body.imageBase64, mimeType: 'image/jpeg' } }
  ])

  return { critique: result.response.text() }
})
```

The prompt is the interesting part. I spent most of the build time on it.

## Writing the prompt

Getting Gemini to be genuinely critical rather than diplomatically honest took iteration. The model has a strong pull toward balanced, constructive feedback. I had to be explicit:

- No positive framing unless it's genuinely exceptional
- No suggestions unless asked
- Treat design decisions as intentional, then judge them
- Reference actual design history and movements, not just conventions

The persona is loosely modeled on early 2000s design criticism — writers who came up through print and didn't care about feelings. The contrast with modern AI's default warmth is the whole point.

## The Vue side

The frontend is deliberately spare. A file upload zone, a submit button, and a text area that fills with the critique. No streaming — I tried it, but the brutalist persona worked better as a single uninterrupted statement rather than a stream of tokens appearing word by word.

```vue
<template>
  <div class="flex flex-col gap-6">
    <DropZone @file="handleFile" />
    <button @click="submit" :disabled="loading">
      {{ loading ? 'Judging...' : 'Critique this' }}
    </button>
    <p v-if="critique" class="font-mono text-sm leading-relaxed">
      {{ critique }}
    </p>
  </div>
</template>
```

The monospace font for the output was intentional. It distances the critique from the usual AI assistant aesthetic — it reads more like a terminal output or a printed report than a chat response.

## What I learned

Building a deliberately non-helpful AI tool is harder than it sounds. The model resists it. You have to be very explicit in the system prompt that helpfulness is not the goal, and even then it occasionally slips into suggestions.

The other thing I noticed is that users interact with it differently. They screenshot their own work more than competitor work. The original joke about honest feedback turned out to be something people actually wanted for themselves.

I'm not sure what that says about the state of design feedback culture, but it's interesting enough that I kept the tool running.
