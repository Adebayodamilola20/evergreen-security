// The conversation loop. Twilio posts what the caller said (SpeechResult) here;
// we decide what to do — hand off to a human, say goodbye, or ask the NVIDIA
// brain for an answer — then speak it and listen again.

import type { NextRequest } from "next/server";
import { COMPANY, HQ } from "@/lib/company";
import { askBrain } from "@/lib/voice/brain";
import { twiml, listen, say, xmlEscape, originFrom } from "@/lib/voice/twiml";

export const dynamic = "force-dynamic";

// The caller is asking for a real person.
const HUMAN_RE =
  /\b(speak|talk|connect)\b.*\b(person|human|representative|agent|someone|operator|manager)\b|\b(representative|operator|real person)\b/;
// The caller is wrapping up.
const BYE_RE =
  /\b(good\s?bye|bye bye|that'?s all|that is all|nothing else|no thank you|no thanks|i'?m good|we'?re good|hang up)\b|^\s*bye\s*$/;

export async function POST(request: NextRequest) {
  const origin = originFrom(request);
  const url = new URL(request.url);
  const silence = parseInt(url.searchParams.get("s") ?? "0", 10) || 0;

  let speech = "";
  try {
    const form = await request.formData();
    speech = (form.get("SpeechResult")?.toString() ?? "").trim();
  } catch {
    // fall through as empty
  }

  // Nothing heard — reprompt once, then end gracefully so a silent line can't
  // loop forever.
  if (!speech) {
    if (silence >= 1) {
      return twiml(
        say(
          origin,
          `It looks like I lost you. Please call ${COMPANY.name} back any time. Goodbye.`
        ) + "<Hangup/>"
      );
    }
    return twiml(
      listen(origin, `Sorry, I didn't catch that. What can I help you with?`, `s=${silence + 1}`)
    );
  }

  const lower = speech.toLowerCase();

  // Ask for a human.
  if (HUMAN_RE.test(lower)) {
    const fallback = process.env.VOICE_HUMAN_FALLBACK;
    if (fallback) {
      return twiml(
        say(origin, `Of course. Let me connect you to our team now. One moment.`) +
          `<Dial>${xmlEscape(fallback)}</Dial>`
      );
    }
    return twiml(
      listen(
        origin,
        `I'm not able to transfer you directly right now, but our team is reachable at ${HQ.phone}. Is there anything else I can help you with?`
      )
    );
  }

  // Wrap up.
  if (BYE_RE.test(lower)) {
    return twiml(
      say(origin, `Thank you for calling ${COMPANY.name}. Have a great day. Goodbye.`) +
        "<Hangup/>"
    );
  }

  // Normal question — ask the brain, then keep the conversation going.
  const reply = await askBrain(speech);
  return twiml(listen(origin, reply));
}
