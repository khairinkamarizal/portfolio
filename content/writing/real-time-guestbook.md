---
title: "Building a Real-time Guestbook with Cloudflare Durable Objects"
description: "How the message board feature works under the hood"
date: "2026-06-20"
tags: ["cloudflare", "real-time", "nuxt"]
draft: false
---

The message board on this site is powered by Cloudflare Durable Objects — a technology that makes real-time, stateful coordination on the edge genuinely feasible. This is how it works and why I chose it over simpler alternatives.

## The requirement

I wanted a guestbook-style message board where visitors can leave messages and see others' messages appear without refreshing. Nothing complicated — no user accounts, no threading, just a simple stream of messages persisted and broadcast in real time.

The constraints were dictated by the deployment setup. The site runs on Cloudflare Pages with a Nuxt server configured for the `cloudflare_module` preset. That means the backend runs as a Cloudflare Worker — no Node.js, no persistent process, no WebSocket server in the traditional sense.

## Why Durable Objects

Workers are stateless by design. Each request is handled in isolation. For a real-time feature that needs shared state across connections, that's a problem.

Durable Objects solve this by giving you a single-instance JavaScript object that lives on the edge. One Durable Object instance coordinates all the connections to your message board. It holds state, handles WebSocket connections, and broadcasts messages — all in one place.

The alternative would have been a third-party service like Pusher or Ably. That works fine, but it adds a dependency, a billing relationship, and latency from bouncing through another service. Durable Objects keep everything inside Cloudflare's network.

## The implementation

The Durable Object handles two things: WebSocket connections and message storage.

```typescript
export class MessageBoard implements DurableObject {
  private sessions: WebSocket[] = []
  private messages: Message[] = []

  async fetch(request: Request): Promise<Response> {
    const upgradeHeader = request.headers.get('Upgrade')
    if (upgradeHeader === 'websocket') {
      return this.handleWebSocket(request)
    }
    return this.handleHttp(request)
  }

  private async handleWebSocket(request: Request): Promise<Response> {
    const [client, server] = Object.values(new WebSocketPair())
    this.sessions.push(server)
    server.accept()

    // Send existing messages to new connection
    server.send(JSON.stringify({ type: 'init', messages: this.messages }))

    server.addEventListener('message', (event) => {
      const msg = JSON.parse(event.data as string)
      this.messages.push(msg)
      this.broadcast(msg)
    })

    server.addEventListener('close', () => {
      this.sessions = this.sessions.filter(s => s !== server)
    })

    return new Response(null, { status: 101, webSocket: client })
  }

  private broadcast(message: Message) {
    for (const session of this.sessions) {
      try {
        session.send(JSON.stringify({ type: 'message', message }))
      } catch {
        // Session closed
      }
    }
  }
}
```

## The Nuxt side

On the frontend, I use the native `WebSocket` API wrapped in a composable. The connection is established when the message board component mounts and cleaned up on unmount.

```typescript
export function useMessageBoard() {
  const messages = ref<Message[]>([])
  let ws: WebSocket | null = null

  function connect() {
    ws = new WebSocket(WS_URL)
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      if (data.type === 'init') messages.value = data.messages
      if (data.type === 'message') messages.value.push(data.message)
    }
  }

  function send(content: string) {
    ws?.send(JSON.stringify({ content, timestamp: Date.now() }))
  }

  onMounted(connect)
  onUnmounted(() => ws?.close())

  return { messages, send }
}
```

## Persistence caveat

One thing worth knowing: Durable Objects lose in-memory state when they hibernate (go idle). For production use you'd write messages to Durable Object storage — a small key-value store attached to each instance — so they survive hibernation. The implementation here uses an array for simplicity, which works fine in development and for low-traffic scenarios.

If I were building this for something more serious, I'd add storage with `this.state.storage.put()` and load it in the constructor. About ten extra lines of code, but important for durability.

## What I'd do differently

The WebSocket approach is the right call for real-time. What I'd change is adding a simple moderation layer — right now any content goes straight through. A quick pass through the Gemini API for content screening would handle that without much overhead.
