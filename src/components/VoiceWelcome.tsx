"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * The flowchart requires a voice note that welcomes users to the site and
 * introduces the services the company renders.
 *
 * Drop the recording at `public/media/welcome.mp3` and this player appears on
 * its own. Until that file exists the <audio> element errors on load and the
 * whole player unmounts, so nothing broken is ever shown to a visitor.
 *
 * Playback is never auto-started — browsers block unmuted autoplay, and a
 * surprise voice is hostile besides. The visitor taps to listen.
 */
const AUDIO_SRC = "/media/welcome.mp3";
const DISMISS_KEY = "pgs-welcome-dismissed";

export default function VoiceWelcome() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [available, setAvailable] = useState(true);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    audioRef.current?.pause();
    setPlaying(false);
    setVisible(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play().then(() => setPlaying(true)).catch(() => setAvailable(false));
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  if (!available) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        preload="metadata"
        onEnded={() => setPlaying(false)}
        onError={() => setAvailable(false)}
      />

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 left-6 z-50 flex max-w-[calc(100vw-3rem)] items-center gap-3 rounded-full border border-white/10 bg-navy/95 py-2.5 pl-2.5 pr-4 text-white shadow-2xl backdrop-blur-md sm:max-w-sm"
          >
            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? "Pause the welcome message" : "Play the welcome message"}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent transition hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {playing ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <polygon points="7 4 20 12 7 20 7 4" />
                </svg>
              )}
            </button>

            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-semibold">Welcome to PGS, Inc.</p>
              <p className="truncate text-xs text-white/60">
                {playing ? "Playing introduction…" : "Listen to a short introduction"}
              </p>
            </div>

            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss the welcome message"
              className="ml-1 shrink-0 rounded-full p-1.5 text-white/50 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
