// Streams spoken audio for a line of text. Twilio's <Play> fetches this URL.
// The text is signed by our own routes (see tts.signText) so this can't be
// abused as an open text-to-speech service that burns ElevenLabs credits.

import type { NextRequest } from "next/server";
import { synthesize, verifyText } from "@/lib/voice/tts";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const text = url.searchParams.get("text") ?? "";
  const sig = url.searchParams.get("sig") ?? "";

  if (!text || !verifyText(text, sig)) {
    return new Response("Forbidden", { status: 403 });
  }

  const result = await synthesize(text);
  if (!result.ok || !result.audio) {
    return new Response("Speech unavailable", { status: 502 });
  }

  return new Response(result.audio, {
    status: 200,
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "no-store",
    },
  });
}
