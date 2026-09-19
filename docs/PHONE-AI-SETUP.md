# PGS AI Phone Line — Setup Guide

This is the AI that answers your customer-care number instead of a human. It is
built into your website's server (already on Vercel), so there is **nothing new
to host**. It reuses the exact same PGS knowledge as your website chatbot.

**How a call flows:**

```
Caller dials your number
      │
      ▼
  Twilio  ──(what the caller said)──►  Your site  ──►  NVIDIA (the "brain")
 (the phone)                          /api/voice          decides the answer
      ▲                                   │
      │                                   ▼
      └───────(spoken answer)────  ElevenLabs (the "voice")
```

- **Twilio** = the phone number + hearing what the caller says.
- **NVIDIA** = the brain that decides the answer (your API key).
- **ElevenLabs** = the natural voice that speaks the answer (your API key).

---

## Step 1 — Create the three accounts and get your keys

You (only you) need to do this part, because it involves signing in and billing.

### NVIDIA (the brain) — you said you already have this
1. Go to **build.nvidia.com**, sign in, and create an API key (it starts with `nvapi-`).
2. Pick a chat model you like and copy its exact name, e.g. `meta/llama-3.3-70b-instruct`.

### ElevenLabs (the voice)
1. Go to **elevenlabs.io**, sign up (free tier is fine to start).
2. Open **Voices**, pick a voice you like, and copy its **Voice ID**.
3. Go to your profile → **API Key** and copy it.

### Twilio (the phone number)
1. Go to **twilio.com**, sign up.
2. Buy a phone number (**Phone Numbers → Buy a number**) — about **$1–2/month**.
   Choose one that supports **Voice**.
3. Leave this tab open — you'll point the number at your site in Step 3.

---

## Step 2 — Add the keys to Vercel

In the **Vercel dashboard** for your site → **Settings → Environment Variables**,
add these (then redeploy so they take effect):

| Name | Value | Required? |
|---|---|---|
| `NVIDIA_API_KEY` | your `nvapi-...` key | ✅ yes |
| `NVIDIA_MODEL` | e.g. `meta/llama-3.3-70b-instruct` | optional (has a default) |
| `ELEVENLABS_API_KEY` | your ElevenLabs key | ✅ yes (for the natural voice) |
| `ELEVENLABS_VOICE_ID` | the Voice ID you copied | ✅ yes (for the natural voice) |
| `VOICE_SIGNING_SECRET` | a long random secret (one is generated for you below) | ✅ yes |
| `VOICE_HUMAN_FALLBACK` | a real phone number to transfer to, like `+13014594000` | optional |

**A ready-to-use `VOICE_SIGNING_SECRET`** (or make your own):

```
06ad7123bf7d5418675795322694170dec9f7d1f6816cd194c9bbb4ab14130e0
```

> **Good to know:** If you skip the two ElevenLabs values, the line still works —
> it just uses a built-in Twilio voice instead of the natural ElevenLabs one. So
> you can test with only NVIDIA + the signing secret first, and add ElevenLabs
> after.

---

## Step 3 — Point your Twilio number at the site

1. In Twilio, open **Phone Numbers → Manage → Active numbers** and click your number.
2. Find the **"A CALL COMES IN"** setting.
3. Set it to **Webhook**, method **HTTP POST**, and paste this URL
   (replace with your real site address):

   ```
   https://YOUR-SITE.vercel.app/api/voice/incoming
   ```

4. Save.

That's it — **call the Twilio number and the AI answers.**

---

## What it does on a call

- Greets the caller and asks how it can help.
- Answers questions about PGS services, the training academy, careers and
  contact details — using only your verified company facts (it won't make things up).
- If the caller asks for **a real person**, it transfers to `VOICE_HUMAN_FALLBACK`
  (if you set one), otherwise it reads out the office number.
- Says a warm goodbye and hangs up when the caller is done.

---

## Costs (roughly)

- **Twilio number:** ~$1–2/month, plus ~1¢/minute for the call.
- **NVIDIA:** per your NVIDIA plan.
- **ElevenLabs:** free tier to start; paid plans priced per characters spoken.

You only pay for talk time when someone actually calls.

---

## Notes & things to improve later

- **Memory within a call:** right now each question is answered on its own. It
  handles one-off questions well; adding short-term memory (so "what about the
  armed one?" remembers the previous question) is a later upgrade using a small
  key-value store keyed by the call ID.
- **Security:** the voice endpoint is signature-protected so no one else can use
  your ElevenLabs credits. To also verify that requests genuinely come from
  Twilio, you can enable Twilio request validation later (needs your Twilio Auth
  Token) — not required to go live.
- **The system prompt** the AI follows lives in `src/lib/voice/brain.ts`. It's
  tuned for speaking (short, spoken answers). Edit it there if you want to change
  how it talks.
- Everything here is separate from your website pages — it only adds the
  `/api/voice/*` endpoints and never changes how the site looks.
```
