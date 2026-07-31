"use client";

import { ReactNode, useEffect, useRef } from "react";

/** Auto-drift speed on phones, px per second. Slow enough to read a card. */
const SPEED = 24;

/**
 * Card grid on desktop; on phones the same cards become a slow, self-driving
 * marquee that drifts right-to-left. The motion is a GPU transform on a track
 * that carries two identical copies of the cards, so translating it by -50%
 * loops seamlessly. Because the outer element uses `overflow: hidden` (not a
 * native side-scroll) it never jitters and never traps the page's vertical
 * scroll. `cols` is the desktop column count.
 */
export default function SwipeRow({
  children,
  cols = 4,
  className = "",
}: {
  children: ReactNode;
  cols?: 2 | 3 | 4;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const set = setRef.current;
    if (!track || !set) return;

    const mobile = window.matchMedia("(max-width: 767px)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Keep a constant px/second speed no matter how many cards a row has, by
    // deriving the animation duration from one copy's rendered width.
    const tune = () => {
      if (!mobile.matches || still.matches) {
        track.style.removeProperty("--drift-duration");
        return;
      }
      const width = set.scrollWidth; // width of one copy of the cards
      if (!width) return;
      const seconds = Math.max(width / SPEED, 12);
      track.style.setProperty("--drift-duration", `${seconds.toFixed(1)}s`);
    };

    tune();
    const ro = new ResizeObserver(tune);
    ro.observe(set);
    mobile.addEventListener("change", tune);
    still.addEventListener("change", tune);

    return () => {
      ro.disconnect();
      mobile.removeEventListener("change", tune);
      still.removeEventListener("change", tune);
    };
  }, []);

  return (
    <div className={`swipe-row swipe-row-${cols} ${className}`}>
      <div ref={trackRef} className="swipe-row__track">
        <div ref={setRef} className="swipe-row__set">
          {children}
        </div>
        <div className="swipe-row__set swipe-row__clone" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * Small "auto-scrolling" affordance. Renders on mobile only, and only when the
 * visitor has NOT asked to reduce motion (see .swipe-hint in CSS). When motion
 * is reduced the rows fall back to a manual swipe, and the hint reappears.
 */
export function SwipeHint({ className = "" }: { className?: string }) {
  return (
    <p className={`swipe-hint ${className}`}>
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-5-5m5 5l-5 5" />
      </svg>
      Scrolls automatically
    </p>
  );
}
