"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function IntroExperience({
  children,
}: {
  children: React.ReactNode;
}) {
  // Show the intro on every load / reload.
  const [showIntro, setShowIntro] = useState(true);
  // Video hasn't been started yet — show the poster + play button.
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lock body scroll while the intro is on screen.
  useEffect(() => {
    if (showIntro) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [showIntro]);

  const dismiss = () => {
    videoRef.current?.pause();
    setShowIntro(false);
  };

  // Single tap → play from the start WITH sound. A user gesture satisfies every
  // browser's autoplay policy, so audio is allowed immediately (no separate
  // "tap for sound" step).
  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.currentTime = 0;
    setStarted(true);
    void video.play().catch(() => {});
  };

  return (
    <>
      {/* The live website sits behind the intro, blurred, then animates in. */}
      <motion.div
        className="flex min-h-screen flex-col"
        initial={false}
        animate={
          showIntro
            ? { filter: "blur(14px)", scale: 1.04, opacity: 0.75 }
            : { filter: "blur(0px)", scale: 1, opacity: 1 }
        }
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "center top" }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Evergreen Protective Services introduction video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <video
                ref={videoRef}
                className="max-h-[78vh] w-full bg-black object-contain"
                src="/media/evergreen_commercial_v2.mp4"
                poster="/media/evergreen_commercial_poster.jpg"
                playsInline
                controls
                preload="auto"
                onEnded={dismiss}
              />

              {/* One tap over the poster starts the video from the beginning
                  with sound. Hidden once playback has begun. */}
              {!started && (
                <button
                  type="button"
                  onClick={play}
                  aria-label="Play introduction video with sound"
                  className="absolute inset-0 flex items-center justify-center bg-black/30 focus:outline-none"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-black shadow-2xl transition hover:bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <polygon points="6 4 20 12 6 20 6 4" />
                    </svg>
                  </span>
                </button>
              )}

              <button
                type="button"
                onClick={dismiss}
                aria-label="Close video and enter site"
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
