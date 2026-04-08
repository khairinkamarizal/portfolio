import { GoogleGenerativeAI } from "@google/generative-ai";
import { defineEventHandler, readBody, createError, getRequestIP } from "h3";

// Simple in-memory rate limiter
const rateLimits = new Map<string, number>();

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const apiKey = config.geminiApiKey;

  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage:
        "Gemini API Key is missing. Please set GEMINI_API_KEY in your environment.",
    });
  }

  // Rate limiting per IP (1 request per 15 seconds)
  const ip = getRequestIP(event, { xForwardedFor: true }) || "unknown";
  const now = Date.now();
  if (rateLimits.has(ip)) {
    const lastTime = rateLimits.get(ip)!;
    if (now - lastTime < 15000) {
      throw createError({
        statusCode: 429,
        statusMessage:
          "Whoa, slow down! Please wait a moment before asking for another critique.",
      });
    }
  }
  rateLimits.set(ip, now);

  const body = await readBody(event);
  const { image, honesty_scale } = body;

  if (!image) {
    throw createError({ statusCode: 400, statusMessage: "Image is required" });
  }

  const honesty = parseInt(honesty_scale) || 5;

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "	gemini-3-flash-preview" });

  try {
    const matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    let mimeType = "image/jpeg";
    let data = image;

    if (matches && matches.length === 3) {
      mimeType = matches[1];
      data = matches[2];
    } else {
      data = image.replace(/^data:image\/\w+;base64,/, "");
    }

    const prompt = `You are an elite, world-class Specialist Designer. You are reviewing a UI/UX, web, or graphic design.
    You possess deep knowledge of typography, grid systems, color theory, spacing, accessibility, user psychology, and modern design trends.
    The user has selected an honesty/brutality scale of ${honesty} out of 10.
    1 = Extremely gentle, encouraging, and supportive. Highlight the positives and gently suggest minor tweaks.
    5 = Honest, balanced, and professional feedback. Direct but constructive. Point out what works and what doesn't.
    10 = Absolutely brutal, uncompromising, sarcastic, and hyper-critical (like a harsh art director), but grounded in real design principles. Tear it apart if needed, but still provide actionable, expert advice.
    
    If the design is genuinely flawless or has very little to critique, acknowledge its brilliance, give specific praise about WHY it works, and say nice things creatively.
    
    Examine the provided design image and return a JSON object with EXACTLY the following structure (do not use Markdown blocks like \`\`\`json, just return raw JSON text):
    {
      "critique": "[Your expert design critique, tailored strictly to the honesty level ${honesty}]",
      "suggestions": "[Your focused, practical improvement suggestions based on design best practices]",
      "rating": [A number from 1 to 10 evaluating the overall design quality, with 1 being terrible and 10 being flawless],
      "honesty_level": ${honesty},
      "emoji": "[A single emoji that perfectly represents the mood of your critique (e.g. 🤩, 🤔, 😬, 🗑️)]"
    }
    Make sure the response is purely the JSON text. No markdown formatting.
    `;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data,
          mimeType,
        },
      },
    ]);

    let text = result.response.text();
    // remove potential markdown formatting if the model still outputs them
    text = text
      .replace(/```json\n?/g, "")
      .replace(/```\n?/g, "")
      .trim();

    try {
      const jsonOutput = JSON.parse(text);
      return jsonOutput;
    } catch (parseError) {
      // Fallback if the model doesn't return perfect JSON
      console.error(
        "Failed to parse JSON from AI response. Raw string: ",
        text,
      );
      return {
        critique: result.response.text(),
        suggestions:
          "Consider simplifying your layout and checking your alignment.",
        rating: 5,
        honesty_level: honesty,
        emoji: honesty > 7 ? "💀" : "🤔",
      };
    }
  } catch (error: any) {
    console.error("Gemini Error:", error);
    throw createError({
      statusCode: 500,
      statusMessage:
        "Failed to generate critique. Make sure the API key is valid.",
    });
  }
});
