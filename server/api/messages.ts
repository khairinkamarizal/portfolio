import type { D1Database } from "@cloudflare/workers-types";

// Simple in-memory rate limiting (Note: transient in serverless environments like CF workers, but enough for simple spam prevention)
const rateLimit = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 5000; // 5 seconds

export default defineEventHandler(async (event) => {
  const method = event.method;
  const db = event.context.cloudflare?.env?.DB as D1Database;

  if (!db) {
    throw createError({
      statusCode: 500,
      statusMessage:
        "Database connection failed. Ensure D1 binding is configured.",
    });
  }

  if (method === "GET") {
    try {
      const { results } = await db
        .prepare(
          "SELECT id, name, message, created_at FROM messages ORDER BY created_at DESC LIMIT 50",
        )
        .all();
      return results;
    } catch (err) {
      console.error("GET Error:", err);
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to fetch messages",
      });
    }
  }

  if (method === "POST") {
    // Rate limit check
    const ip =
      getRequestHeader(event, "cf-connecting-ip") ||
      getRequestHeader(event, "x-forwarded-for") ||
      "unknown-ip";
    const now = Date.now();
    const lastPostTime = rateLimit.get(ip);

    if (lastPostTime && now - lastPostTime < RATE_LIMIT_WINDOW_MS) {
      throw createError({
        statusCode: 429,
        statusMessage: "Too many requests. Please wait a few seconds.",
      });
    }

    const body = await readBody(event);
    if (
      !body ||
      !body.message ||
      typeof body.message !== "string" ||
      body.message.trim() === ""
    ) {
      throw createError({
        statusCode: 400,
        statusMessage: "Message is required",
      });
    }

    if (body.message.length > 200) {
      throw createError({
        statusCode: 400,
        statusMessage: "Message is limited to 200 characters",
      });
    }

    const name =
      body.name && typeof body.name === "string" && body.name.trim() !== ""
        ? body.name.trim()
        : "anon";
    const message = body.message.trim();

    try {
      await db
        .prepare("INSERT INTO messages (name, message) VALUES (?, ?)")
        .bind(name, message)
        .run();

      // Update rate limit after successful insertion
      rateLimit.set(ip, Date.now());

      // Clean up old entries
      for (const [key, time] of rateLimit.entries()) {
        if (now - time > RATE_LIMIT_WINDOW_MS) {
          rateLimit.delete(key);
        }
      }

      return { success: true };
    } catch (err) {
      console.error("POST Error:", err);
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to insert message",
      });
    }
  }

  throw createError({
    statusCode: 405,
    statusMessage: "Method Not Allowed",
  });
});
