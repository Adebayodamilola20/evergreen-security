"use client";

// Unlisted test bench for the AI phone line — try it WITHOUT a Twilio number.
// Type a question (or tap the mic and speak), and the same NVIDIA brain answers,
// spoken aloud in the same ElevenLabs voice (Adam) the phone line will use.

import { useCallback, useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

// Minimal typing for the browser's speech-recognition API (Chrome/Safari).
interface SpeechRecognitionLike {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

export default function VoiceTestPage() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [listening, setListening] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const recogRef = useRef<SpeechRecognitionLike | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  const send = useCallback(
    async (text: string) => {
      const clean = text.trim();
      if (!clean || busy) return;
      setError(null);
      setInput("");

      const history = messages.slice(-8);
      setMessages((m) => [...m, { role: "user", content: clean }]);
      setBusy(true);

      try {
        const res = await fetch("/api/voice/test", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: clean, history }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Something went wrong.");

        setMessages((m) => [...m, { role: "assistant", content: data.reply }]);

        if (data.speakUrl && audioRef.current) {
          audioRef.current.src = data.speakUrl;
          audioRef.current.play().catch(() => {
            /* autoplay may be blocked until first interaction */
          });
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong.");
      } finally {
        setBusy(false);
      }
    },
    [busy, messages]
  );

  const toggleMic = () => {
    if (listening) {
      recogRef.current?.stop();
      setListening(false);
      return;
    }
    const w = window as unknown as {
      SpeechRecognition?: new () => SpeechRecognitionLike;
      webkitSpeechRecognition?: new () => SpeechRecognitionLike;
    };
    const Ctor = w.SpeechRecognition ?? w.webkitSpeechRecognition;
    if (!Ctor) {
      setError("Voice input isn't supported in this browser — just type instead (try Chrome).");
      return;
    }
    // Fresh recognizer each time so it captures the latest conversation state.
    const r = new Ctor();
    r.lang = "en-US";
    r.interimResults = false;
    r.continuous = false;
    r.onresult = (e) => {
      const said = e.results?.[0]?.[0]?.transcript ?? "";
      if (said) void send(said);
    };
    r.onerror = () => setListening(false);
    r.onend = () => setListening(false);
    recogRef.current = r;
    setError(null);
    try {
      r.start();
      setListening(true);
    } catch {
      setListening(false);
    }
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 py-8">
      <div className="mb-6 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Internal test — not on the live site
        </p>
        <h1 className="text-2xl font-bold text-primary sm:text-3xl">PGS AI Line — Test Bench</h1>
        <p className="mt-2 text-sm text-gray-600">
          This is the exact AI that will answer the phone. Type a question or tap the mic and
          speak. You&apos;ll hear Adam answer out loud. No phone number needed.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 space-y-3 overflow-y-auto rounded-2xl border border-border bg-rail/40 p-4"
        style={{ minHeight: 320 }}
      >
        {messages.length === 0 && (
          <div className="mt-16 text-center text-sm text-gray-400">
            Try: &ldquo;What services do you offer?&rdquo; · &ldquo;Do you have a training
            academy?&rdquo; · &ldquo;How do I apply for a job?&rdquo;
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
                  ? "max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-white"
                  : "max-w-[80%] rounded-2xl rounded-bl-sm border border-border bg-white px-4 py-2.5 text-sm text-primary shadow-sm"
              }
            >
              {m.content}
            </div>
          </div>
        ))}
        {busy && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-sm border border-border bg-white px-4 py-2.5 text-sm text-gray-400 shadow-sm">
              Adam is thinking…
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-center text-sm text-red-600">
          {error}
        </p>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          void send(input);
        }}
        className="mt-4 flex items-center gap-2"
      >
        <button
          type="button"
          onClick={toggleMic}
          aria-label={listening ? "Stop listening" : "Speak"}
          className={
            "flex h-11 w-11 flex-none items-center justify-center rounded-full border transition-colors " +
            (listening
              ? "border-accent bg-accent text-white"
              : "border-border bg-white text-primary hover:bg-rail")
          }
        >
          {listening ? "■" : "🎤"}
        </button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={listening ? "Listening…" : "Type what a caller would say…"}
          disabled={busy}
          className="h-11 flex-1 rounded-full border border-border bg-white px-4 text-sm text-primary outline-none focus:border-accent"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="h-11 flex-none rounded-full bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent/90 disabled:opacity-40"
        >
          Send
        </button>
      </form>

      <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
        <span>Voice: Adam (ElevenLabs)</span>
        <button
          type="button"
          onClick={() => setMessages([])}
          className="underline hover:text-primary"
        >
          Clear conversation
        </button>
      </div>

      {/* Hidden player — plays Adam's spoken reply automatically. */}
      <audio ref={audioRef} className="hidden" />
    </main>
  );
}
