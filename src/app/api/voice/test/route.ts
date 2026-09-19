// Browser test endpoint for the phone brain — lets you try the AI WITHOUT a
// Twilio number. The /voice-test page posts what you "said" here; we ask the
// same NVIDIA brain the phone line uses, then hand back the reply text plus a
// signed URL the page can play through the same ElevenLabs voice (Adam).
//
// Note: this is an unlisted testing route. It is not linked anywhere on the site
// and mirrors exactly what happens on a real call.

import type { NextRequest } from "next/server";
import { askBrain, type Turn } from "@/lib/voice/brain";
import { ttsConfigured, signText } from "@/lib/voice/tts";
import { COMPANY } from "@/lib/company";

export const dynamic = "force-dynamic";

// A ready-to-play signed voice URL for a line of text (null if ElevenLabs is off).
function speakUrlFor(text: string): string | null {
  return ttsConfigured()
    ? `/api/voice/speak?text=${encodeURIComponent(text)}&sig=${signText(text)}`
    : null;
}

export async function POST(request: NextRequest) {
  let text = "";
  let greeting = false;
  let history: Turn[] = [];

  try {
    const data = await request.json();
    text = (data?.text ?? "").toString().trim();
    greeting = data?.greeting === true;
    if (Array.isArray(data?.history)) {
      // Keep only well-formed, recent turns (cap so the prompt stays small).
      history = data.history
        .filter(
          (t: unknown): t is Turn =>
            !!t &&
            typeof (t as Turn).content === "string" &&
            ((t as Turn).role === "user" || (t as Turn).role === "assistant")
        )
        .slice(-8);
    }
  } catch {
    // fall through as empty
  }

  // Call opener: the AI answers the "phone" with a spoken greeting, no user
  // input needed. Lets the call UI start talking the moment you connect.
  if (greeting && !text) {
    const company = COMPANY.name.replace(/\.+$/, ""); // avoid "PGS, Inc.." double period
    const assistant = process.env.VOICE_ASSISTANT_NAME ?? "Sarah";
    const hello = `Hi, thanks for calling ${company}! This is ${assistant}. What can I do for you today?`;
    return Response.json({
      reply: hello,
      speakUrl: speakUrlFor(hello),
      voice: ttsConfigured() ? "elevenlabs" : "none",
      assistant,
    });
  }

  if (!text) {
    return Response.json({ error: "Please say something first." }, { status: 400 });
  }

  const reply = await askBrain(text, history);

  // A ready-to-play voice URL (only if ElevenLabs is configured). Relative URL
  // resolves against whatever host the browser is on, so it works locally and
  // when deployed.
  const speakUrl = speakUrlFor(reply);

  return Response.json({ reply, speakUrl, voice: ttsConfigured() ? "elevenlabs" : "none" });
}
