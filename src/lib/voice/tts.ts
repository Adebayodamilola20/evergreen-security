// PGS phone-line "voice" — ElevenLabs text-to-speech.
//
// Turns the brain's reply text into spoken MP3 audio that Twilio plays down the
// phone line. The ElevenLabs key and chosen voice come from environment
// variables so nothing sensitive lives in source.
//
// Because the audio is fetched by Twilio over the public internet, the /speak
// endpoint that calls this must not be an open text-to-audio service anyone can
// abuse. We sign the text with an HMAC secret; /speak only synthesises text that
// carries a valid signature.

import { createHmac, timingSafeEqual } from "node:crypto";

const TTS_URL = "https://api.elevenlabs.io/v1/text-to-speech";
// eleven_turbo_v2_5 is low-latency, which matters on a live call.
const TTS_MODEL = process.env.ELEVENLABS_MODEL ?? "eleven_turbo_v2_5";

/** True when ElevenLabs is fully configured. When false, callers fall back to a
 *  built-in Twilio voice so the line still works before ElevenLabs is set up. */
export function ttsConfigured(): boolean {
  return Boolean(process.env.ELEVENLABS_API_KEY && process.env.ELEVENLABS_VOICE_ID);
}

const SIGNING_SECRET = process.env.VOICE_SIGNING_SECRET ?? "";

/** Sign a piece of text so /speak can trust it came from our own routes. */
export function signText(text: string): string {
  return createHmac("sha256", SIGNING_SECRET).update(text).digest("hex");
}

/** Verify a signature in constant time. */
export function verifyText(text: string, signature: string): boolean {
  if (!SIGNING_SECRET || !signature) return false;
  const expected = signText(text);
  const a = Buffer.from(expected, "hex");
  const b = Buffer.from(signature, "hex");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export interface TtsResult {
  ok: boolean;
  audio?: ArrayBuffer;
  error?: string;
}

/** Synthesise speech for the given text. Returns MP3 bytes on success. */
export async function synthesize(text: string): Promise<TtsResult> {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const voiceId = process.env.ELEVENLABS_VOICE_ID;
  if (!apiKey || !voiceId) {
    return { ok: false, error: "ElevenLabs not configured" };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const res = await fetch(`${TTS_URL}/${voiceId}`, {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "audio/mpeg",
      },
      body: JSON.stringify({
        text,
        model_id: TTS_MODEL,
        voice_settings: { stability: 0.5, similarity_boost: 0.75 },
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      const detail = (await res.text().catch(() => "")).slice(0, 300);
      console.error(`ElevenLabs error ${res.status}:`, detail);
      return { ok: false, error: `ElevenLabs ${res.status}` };
    }

    const audio = await res.arrayBuffer();
    return { ok: true, audio };
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("ElevenLabs synth error:", msg);
    return { ok: false, error: msg };
  } finally {
    clearTimeout(timeout);
  }
}
