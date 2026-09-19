// Helpers for building Twilio's call-control XML ("TwiML") and the responses we
// send back to Twilio. Kept tiny and dependency-free.

import { ttsConfigured, signText } from "./tts";

/** Escape text so it is safe inside XML. */
export function xmlEscape(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Wrap a TwiML document in a proper XML Response for Twilio. */
export function twiml(body: string): Response {
  const xml = `<?xml version="1.0" encoding="UTF-8"?><Response>${body}</Response>`;
  return new Response(xml, {
    status: 200,
    headers: { "Content-Type": "text/xml; charset=utf-8" },
  });
}

/**
 * Speak a line to the caller. When ElevenLabs is configured we <Play> audio from
 * our own /speak endpoint (the natural voice). Otherwise we fall back to a
 * built-in Twilio voice with <Say>, so the line still works before ElevenLabs is
 * wired up.
 */
export function say(origin: string, text: string): string {
  if (ttsConfigured()) {
    const url = `${origin}/api/voice/speak?text=${encodeURIComponent(text)}&sig=${signText(text)}`;
    return `<Play>${xmlEscape(url)}</Play>`;
  }
  // Amazon Polly voice via Twilio — decent, and needs no extra account.
  return `<Say voice="Polly.Joanna-Neural">${xmlEscape(text)}</Say>`;
}

/**
 * A block that speaks `prompt` and then listens for the caller's next words,
 * posting the result to /api/voice/respond. `actionOnEmptyResult` guarantees we
 * always hear back (even on silence) so the flow never dead-ends.
 */
export function listen(origin: string, prompt: string, actionQuery = ""): string {
  const action = `${origin}/api/voice/respond${actionQuery ? `?${actionQuery}` : ""}`;
  return (
    `<Gather input="speech" action="${xmlEscape(action)}" method="POST" ` +
    `language="en-US" speechTimeout="auto" speechModel="phone_call" ` +
    `actionOnEmptyResult="true">${say(origin, prompt)}</Gather>`
  );
}

/** Derive the public origin (https://host) Twilio reached us on. */
export function originFrom(request: Request): string {
  const url = new URL(request.url);
  // Behind Vercel's proxy the forwarded host/proto are the public ones.
  const host = request.headers.get("x-forwarded-host") ?? url.host;
  const proto = request.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "");
  return `${proto}://${host}`;
}
