"use client";

// A phone-CALL experience for the AI line — no typing, no Twilio number.
// Tap "Call": she greets you, then you just talk. The browser listens to your
// voice, sends it to the same brain the phone line uses, and she replies OUT
// LOUD — then listens again. A real back-and-forth until you hang up.
//
// Three things make it feel human:
//  1) A short SILENCE detector fires the moment you stop talking, so she answers
//     right away instead of waiting for the browser's slower end-of-speech guess.
//  2) BARGE-IN: the mic stays live while she talks, so you can cut in and she'll
//     stop and listen. (Best with headphones so the mic doesn't hear her voice.)
//  3) The assistant's name + accent come from settings, not hard-coded.

import { useCallback, useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };
type Phase = "idle" | "connecting" | "listening" | "thinking" | "speaking" | "ended";

// How long a pause means "you're done talking" (ms). Lower = snappier.
const SILENCE_MS = 750;

// Accents the browser can listen for. Picking the one closest to how you
// actually speak dramatically improves how well it hears you.
const ACCENTS: { code: string; label: string }[] = [
  { code: "en-NG", label: "English (Nigeria)" },
  { code: "en-GB", label: "English (UK)" },
  { code: "en-US", label: "English (US)" },
  { code: "en-IN", label: "English (India)" },
  { code: "en-ZA", label: "English (South Africa)" },
  { code: "en-KE", label: "English (Kenya)" },
];

function statusText(phase: Phase, name: string): string {
  switch (phase) {
    case "connecting":
      return "Connecting…";
    case "listening":
      return "Listening… go ahead and speak";
    case "thinking":
      return `${name} is thinking…`;
    case "speaking":
      return `${name} is speaking — you can cut in anytime`;
    case "ended":
      return "Call ended";
    default:
      return "";
  }
}

// Minimal typing for the browser's speech-recognition API (Chrome/Safari/Edge).
interface SpeechResult {
  isFinal: boolean;
  0: { transcript: string };
}
interface SpeechEvent {
  resultIndex: number;
  results: ArrayLike<SpeechResult>;
}
interface SpeechRecognitionLike {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  maxAlternatives: number;
  onresult: ((e: SpeechEvent) => void) | null;
  onerror: ((e: { error?: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
}

function getRecognitionCtor(): (new () => SpeechRecognitionLike) | null {
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export default function VoiceCallPage() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [muted, setMuted] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [assistantName, setAssistantName] = useState("Sarah");
  const [accent, setAccent] = useState("en-NG");
  const [bargeIn, setBargeIn] = useState(true);
  const [heardText, setHeardText] = useState(""); // live "what it's hearing"

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const recogRef = useRef<SpeechRecognitionLike | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Refs mirror state so async callbacks always read the latest value.
  const phaseRef = useRef<Phase>("idle");
  const callActiveRef = useRef(false);
  const mutedRef = useRef(false);
  const bargeInRef = useRef(true);
  const accentRef = useRef("en-NG");
  const historyRef = useRef<Msg[]>([]);
  const heardRef = useRef(false); // did we hear anything this turn?
  const utterFinalRef = useRef(""); // finalized words for the current utterance
  const lastHeardRef = useRef(""); // latest full guess (final + interim)
  const sendingRef = useRef(false); // guard against double-send
  // Break callback cycles / self-restart without forward references.
  const handleUserSpeechRef = useRef<((t: string) => void) | null>(null);
  const armMicRef = useRef<(() => void) | null>(null);

  const goto = useCallback((p: Phase) => {
    phaseRef.current = p;
    setPhase(p);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, phase]);

  // Call timer.
  useEffect(() => {
    if (phase === "idle" || phase === "ended") return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [phase]);

  const clearSilenceTimer = useCallback(() => {
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
  }, []);

  const stopRecognizer = useCallback(() => {
    clearSilenceTimer();
    const r = recogRef.current;
    recogRef.current = null;
    if (r) {
      r.onresult = null;
      r.onend = null;
      r.onerror = null;
      try {
        r.abort();
      } catch {
        /* already stopped */
      }
    }
  }, [clearSilenceTimer]);

  const stopAudio = useCallback(() => {
    const el = audioRef.current;
    if (el) {
      el.onended = null;
      el.onerror = null;
      try {
        el.pause();
      } catch {
        /* ignore */
      }
    }
  }, []);

  const endCall = useCallback(() => {
    callActiveRef.current = false;
    stopRecognizer();
    stopAudio();
    setHeardText("");
    goto("ended");
    setTimeout(() => {
      if (!callActiveRef.current) goto("idle");
    }, 1500);
  }, [goto, stopRecognizer, stopAudio]);

  // Commit what the caller said → hand it to the brain.
  const sendUtterance = useCallback(
    (text: string) => {
      const clean = text.trim();
      if (!clean || sendingRef.current) return;
      sendingRef.current = true;
      clearSilenceTimer();
      setHeardText("");
      stopRecognizer();
      handleUserSpeechRef.current?.(clean);
    },
    [clearSilenceTimer, stopRecognizer]
  );

  // Every batch of recognized words lands here (interim + final).
  const onSpeech = useCallback(
    (e: SpeechEvent) => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const res = e.results[i];
        const t = res?.[0]?.transcript ?? "";
        if (res?.isFinal) {
          utterFinalRef.current = `${utterFinalRef.current} ${t}`.trim();
        } else {
          interim += t;
        }
      }
      const combined = `${utterFinalRef.current} ${interim}`.trim();
      if (!combined) return;

      // BARGE-IN: caller started talking while she was speaking → cut her off.
      if (phaseRef.current === "speaking") {
        if (!bargeInRef.current) return;
        const enough = utterFinalRef.current !== "" || combined.split(/\s+/).length >= 2;
        if (!enough) return; // ignore a tiny blip (often just an echo)
        stopAudio();
        goto("listening");
      }

      if (phaseRef.current !== "listening") return;

      heardRef.current = true;
      lastHeardRef.current = combined;
      setHeardText(combined);

      // Restart the "you stopped talking" countdown on every new word.
      clearSilenceTimer();
      silenceTimerRef.current = setTimeout(() => {
        if (phaseRef.current === "listening") sendUtterance(lastHeardRef.current);
      }, SILENCE_MS);
    },
    [goto, stopAudio, clearSilenceTimer, sendUtterance]
  );

  // Turn the mic on and keep it live (used while listening AND while she speaks).
  const armMic = useCallback(() => {
    if (!callActiveRef.current || mutedRef.current) return;
    stopRecognizer();

    const Ctor = getRecognitionCtor();
    if (!Ctor) {
      setError(
        "Voice input isn't supported in this browser. Please use Google Chrome to make the call."
      );
      return;
    }

    utterFinalRef.current = "";
    lastHeardRef.current = "";
    sendingRef.current = false;

    const r = new Ctor();
    r.lang = accentRef.current; // match the caller's accent for accuracy
    r.interimResults = true; // show words as they're heard (feels instant)
    r.continuous = true; // keep listening across pauses so we control timing
    r.maxAlternatives = 1;

    r.onresult = onSpeech;

    r.onerror = (e) => {
      const kind = e?.error ?? "";
      if (kind === "not-allowed" || kind === "service-not-allowed") {
        setError(
          "I couldn't access your microphone. Please allow mic access and start the call again."
        );
        endCall();
      }
      // Other errors (e.g. "no-speech") fall through to onend, which re-arms.
    };

    r.onend = () => {
      // Keep the mic alive whenever it should be (listening or her speaking).
      if (
        callActiveRef.current &&
        !mutedRef.current &&
        (phaseRef.current === "listening" || phaseRef.current === "speaking")
      ) {
        armMicRef.current?.();
      }
    };

    try {
      r.start();
      recogRef.current = r;
    } catch {
      setTimeout(() => armMicRef.current?.(), 300);
    }
  }, [stopRecognizer, onSpeech, endCall]);

  useEffect(() => {
    armMicRef.current = armMic;
  }, [armMic]);

  // Play her reply. If barge-in is on, the mic stays live so you can interrupt.
  const speak = useCallback(
    (speakUrl: string | null, after: () => void) => {
      goto("speaking");
      setHeardText("");
      utterFinalRef.current = "";
      lastHeardRef.current = "";
      if (bargeInRef.current) armMic(); // hot mic during playback = interruptible
      else stopRecognizer();

      const el = audioRef.current;
      if (!speakUrl || !el) {
        after();
        return;
      }
      el.src = speakUrl;
      el.onended = () => {
        if (callActiveRef.current) after();
      };
      el.onerror = () => {
        if (callActiveRef.current) after();
      };
      el.play().catch(() => {
        if (callActiveRef.current) after();
      });
    },
    [goto, armMic, stopRecognizer]
  );

  // After she finishes speaking (and wasn't interrupted): it's your turn.
  const startListening = useCallback(() => {
    if (!callActiveRef.current) return;
    goto("listening");
    utterFinalRef.current = "";
    lastHeardRef.current = "";
    setHeardText("");
    // With barge-in on, the mic is already live; otherwise start it now.
    if (!bargeInRef.current || !recogRef.current) armMic();
  }, [goto, armMic]);

  // Caller said something → ask the brain → speak the reply → listen again.
  const handleUserSpeech = useCallback(
    async (text: string) => {
      if (!callActiveRef.current) return;
      stopRecognizer(); // mic off while we think

      const hist = historyRef.current.slice(-8);
      const userMsg: Msg = { role: "user", content: text };
      historyRef.current = [...historyRef.current, userMsg];
      setMessages((m) => [...m, userMsg]);
      goto("thinking");

      try {
        const res = await fetch("/api/voice/test", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text, history: hist }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Something went wrong.");
        if (!callActiveRef.current) return;

        const reply: string = data.reply ?? "";
        const botMsg: Msg = { role: "assistant", content: reply };
        historyRef.current = [...historyRef.current, botMsg];
        setMessages((m) => [...m, botMsg]);

        speak(data.speakUrl ?? null, startListening);
      } catch (err) {
        if (!callActiveRef.current) return;
        setError(err instanceof Error ? err.message : "Something went wrong.");
        startListening();
      }
    },
    [goto, speak, startListening, stopRecognizer]
  );

  useEffect(() => {
    handleUserSpeechRef.current = handleUserSpeech;
  }, [handleUserSpeech]);

  const startCall = useCallback(async () => {
    setError(null);
    setMessages([]);
    setSeconds(0);
    setHeardText("");
    historyRef.current = [];
    setMuted(false);
    mutedRef.current = false;
    callActiveRef.current = true;
    goto("connecting");

    // Ask for mic permission up front (with echo cancellation) so the flow
    // doesn't stall mid-call and self-echo is reduced on speakers.
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true },
      });
      stream.getTracks().forEach((t) => t.stop());
    } catch {
      setError(
        "I need microphone access to take your call. Please allow the mic and tap Call again."
      );
      callActiveRef.current = false;
      goto("idle");
      return;
    }

    if (!callActiveRef.current) return;

    // She answers the phone with a spoken greeting, then starts listening.
    goto("thinking");
    try {
      const res = await fetch("/api/voice/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ greeting: true }),
      });
      const data = await res.json();
      if (!callActiveRef.current) return;
      if (typeof data.assistant === "string" && data.assistant) {
        setAssistantName(data.assistant);
      }
      const hello: string = data.reply ?? "Hi, thanks for calling! What can I do for you?";
      const botMsg: Msg = { role: "assistant", content: hello };
      historyRef.current = [botMsg];
      setMessages([botMsg]);
      speak(data.speakUrl ?? null, startListening);
    } catch {
      if (callActiveRef.current) startListening();
    }
  }, [goto, speak, startListening]);

  const endCallClick = useCallback(() => endCall(), [endCall]);

  const toggleMute = useCallback(() => {
    const next = !mutedRef.current;
    mutedRef.current = next;
    setMuted(next);
    if (next) {
      stopRecognizer();
      setHeardText("");
    } else if (
      callActiveRef.current &&
      (phaseRef.current === "listening" || phaseRef.current === "speaking")
    ) {
      armMic();
    }
  }, [stopRecognizer, armMic]);

  const toggleBargeIn = useCallback(() => {
    const next = !bargeInRef.current;
    bargeInRef.current = next;
    setBargeIn(next);
    // If turning it off mid-playback, stop the hot mic so she isn't interrupted.
    if (!next && phaseRef.current === "speaking") stopRecognizer();
    // If turning it on mid-playback, go live so you can cut in right away.
    if (next && phaseRef.current === "speaking") armMic();
  }, [stopRecognizer, armMic]);

  // Clean up if the user navigates away mid-call.
  useEffect(() => {
    return () => {
      callActiveRef.current = false;
      stopRecognizer();
    };
  }, [stopRecognizer]);

  const onCall = phase !== "idle" && phase !== "ended";
  const mmss = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(
    seconds % 60
  ).padStart(2, "0")}`;

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col bg-primary px-5 py-8 text-white">
      <div className="mb-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
          Internal test — not on the live site
        </p>
      </div>

      {/* Caller card */}
      <div className="flex flex-col items-center pt-4">
        <div
          className={
            "relative flex h-32 w-32 items-center justify-center rounded-full bg-accent/20 " +
            (phase === "speaking" ? "ring-4 ring-accent/60" : "")
          }
        >
          {phase === "listening" && !muted && (
            <span className="absolute inset-0 animate-ping rounded-full bg-accent/30" />
          )}
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent text-4xl font-bold">
            {assistantName.charAt(0).toUpperCase()}
          </div>
        </div>
        <h1 className="mt-5 text-2xl font-bold">{assistantName}</h1>
        <p className="text-sm text-white/60">PGS front desk</p>
        <p className="mt-3 h-5 text-sm text-accent">
          {onCall
            ? statusText(phase, assistantName)
            : phase === "ended"
              ? statusText("ended", assistantName)
              : "Ready to call"}
        </p>
        {onCall && <p className="mt-1 text-xs text-white/40">{mmss}</p>}
        {(phase === "listening" || phase === "speaking") && heardText && (
          <p className="mt-2 max-w-xs text-center text-sm italic text-white/70">
            “{heardText}”
          </p>
        )}
      </div>

      {/* Live transcript */}
      <div
        ref={scrollRef}
        className="mt-5 flex-1 space-y-3 overflow-y-auto rounded-2xl bg-white/5 p-4"
        style={{ minHeight: 160 }}
      >
        {messages.length === 0 && !onCall && (
          <div className="mt-8 text-center text-sm text-white/40">
            Tap the green button to call. Then just talk — ask about services, the
            training academy, careers, anything.
          </div>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
          >
            <div
              className={
                m.role === "user"
                  ? "max-w-[80%] rounded-2xl rounded-br-sm bg-accent px-4 py-2.5 text-sm text-white"
                  : "max-w-[80%] rounded-2xl rounded-bl-sm bg-white/10 px-4 py-2.5 text-sm text-white/90"
              }
            >
              {m.content}
            </div>
          </div>
        ))}
      </div>

      {error && (
        <p className="mt-3 rounded-lg bg-red-500/20 px-3 py-2 text-center text-sm text-red-200">
          {error}
        </p>
      )}

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-6">
        {onCall && (
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            className={
              "flex h-14 w-14 items-center justify-center rounded-full text-xl transition-colors " +
              (muted ? "bg-white text-primary" : "bg-white/15 text-white hover:bg-white/25")
            }
          >
            {muted ? "🔇" : "🎙️"}
          </button>
        )}

        {!onCall ? (
          <button
            type="button"
            onClick={startCall}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-2xl shadow-lg transition-transform hover:scale-105"
            aria-label="Start call"
          >
            📞
          </button>
        ) : (
          <button
            type="button"
            onClick={endCallClick}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500 text-2xl shadow-lg transition-transform hover:scale-105"
            aria-label="End call"
          >
            📵
          </button>
        )}
        {onCall && <div className="h-14 w-14" aria-hidden />}
      </div>

      {/* Settings */}
      <div className="mt-6 flex flex-col items-center gap-3 text-xs text-white/60">
        <div className="flex items-center gap-2">
          <span>Your accent:</span>
          <select
            value={accent}
            onChange={(e) => {
              accentRef.current = e.target.value;
              setAccent(e.target.value);
            }}
            className="rounded-lg border border-white/20 bg-white/10 px-2 py-1 text-white outline-none"
          >
            {ACCENTS.map((a) => (
              <option key={a.code} value={a.code} className="text-primary">
                {a.label}
              </option>
            ))}
          </select>
        </div>
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={bargeIn}
            onChange={toggleBargeIn}
            className="h-4 w-4 accent-green-500"
          />
          <span>Let me interrupt her while she talks (use headphones)</span>
        </label>
      </div>

      <p className="mt-3 text-center text-xs text-white/40">
        Best in Google Chrome. If she mishears you, switch your accent above and
        speak in a quiet spot, close to the mic.
      </p>

      {/* Hidden player — her voice. */}
      <audio ref={audioRef} className="hidden" />
    </main>
  );
}
