// Twilio hits this the moment a call comes in to the PGS care line.
// We greet the caller and start listening. Point your Twilio number's
// "A CALL COMES IN" webhook (POST) at:  https://YOUR-SITE/api/voice/incoming

import type { NextRequest } from "next/server";
import { COMPANY } from "@/lib/company";
import { twiml, listen, originFrom } from "@/lib/voice/twiml";

export const dynamic = "force-dynamic";

const GREETING = `Thank you for calling ${COMPANY.name}. This is our virtual assistant. How can I help you today?`;

export async function POST(request: NextRequest) {
  const origin = originFrom(request);
  return twiml(listen(origin, GREETING));
}
