"use client";

import { ReactNode, useEffect, useRef } from "react";

/** Drift speed, px per second. Slow enough to read a card as it passes. */
const SPEED = 24;
/** How long a row stays still after the visitor touches it. */
const HOLD_MS = 2600;

/**
 * Card grid on desktop, snap carousel on phones. `cols` is the desktop
 * column count; below md the children always become swipeable cards.
 *
 * On phones the row also drifts right-to-left on its own. It clones its
 * children once so the loop is seamless, and hands control back the moment
 * a finger lands on it.
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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = ref.current;
    if (!row) return;

    const mobile = window.matchMedia("(max-width: 767px)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");

    let clones: HTMLElement[] = [];
    let frame = 0;
    let period = 0;
    let last = 0;
    let resumeAt = 0;
    let visible = false;
    let startTimer = 0;

    // The loop distance is the gap between an original and its copy — not
    // scrollWidth/2, which would include the row's own padding and drift out
    // of sync a little on every lap.
    const measure = () => {
      const first = row.firstElementChild as HTMLElement | null;
      period = first && clones[0] ? clones[0].offsetLeft - first.offsetLeft : 0;
    };

    const step = (now: number) => {
      frame = requestAnimationFrame(step);
      const dt = last ? Math.min(now - last, 64) : 0;
      last = now;
      if (!period || now < resumeAt) return;
      const next = row.scrollLeft + (SPEED * dt) / 1000;
      row.scrollLeft = next >= period ? next - period : next;
    };

    const run = () => {
      if (frame || !clones.length) return;
      last = 0;
      frame = requestAnimationFrame(step);
    };

    const halt = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    };

    const attach = () => {
      if (clones.length || !mobile.matches || still.matches) return;
      const originals = Array.from(row.children) as HTMLElement[];
      if (originals.length < 2) return;

      clones = originals.map((node) => {
        const copy = node.cloneNode(true) as HTMLElement;
        copy.setAttribute("aria-hidden", "true");
        copy.dataset.swipeClone = "true";
        // A copy taken mid-reveal would freeze at whatever opacity/transform
        // framer-motion had written at that instant.
        copy.style.opacity = "1";
        copy.style.transform = "none";
        copy.querySelectorAll<HTMLElement>("[style]").forEach((node) => {
          node.style.opacity = "1";
          node.style.transform = "none";
        });
        copy
          .querySelectorAll("a, button, input, select, textarea")
          .forEach((node) => node.setAttribute("tabindex", "-1"));
        row.appendChild(copy);
        return copy;
      });

      // Snap and a per-frame scrollLeft fight each other; the drift wins only
      // with snap off. Swiping still feels right — it just coasts instead.
      row.dataset.drifting = "true";
      measure();
    };

    const detach = () => {
      halt();
      clones.forEach((clone) => clone.remove());
      clones = [];
      delete row.dataset.drifting;
      row.scrollLeft = 0;
    };

    const hold = () => {
      resumeAt = performance.now() + HOLD_MS;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        window.clearTimeout(startTimer);
        if (!visible) {
          halt();
          return;
        }
        // Let the section's reveal finish before cloning it.
        startTimer = window.setTimeout(() => {
          attach();
          run();
        }, 600);
      },
      { threshold: 0.15 },
    );
    observer.observe(row);

    const onBreakpoint = () => {
      if (mobile.matches && !still.matches) {
        if (visible) {
          attach();
          run();
        }
      } else {
        detach();
      }
    };

    const onResize = () => {
      if (clones.length) measure();
    };

    mobile.addEventListener("change", onBreakpoint);
    still.addEventListener("change", onBreakpoint);
    window.addEventListener("resize", onResize);
    row.addEventListener("pointerdown", hold, { passive: true });
    row.addEventListener("touchstart", hold, { passive: true });
    row.addEventListener("touchend", hold, { passive: true });
    row.addEventListener("wheel", hold, { passive: true });

    return () => {
      window.clearTimeout(startTimer);
      observer.disconnect();
      mobile.removeEventListener("change", onBreakpoint);
      still.removeEventListener("change", onBreakpoint);
      window.removeEventListener("resize", onResize);
      row.removeEventListener("pointerdown", hold);
      row.removeEventListener("touchstart", hold);
      row.removeEventListener("touchend", hold);
      row.removeEventListener("wheel", hold);
      detach();
    };
  }, []);

  return (
    <div ref={ref} className={`swipe-row swipe-row-${cols} ${className}`}>
      {children}
    </div>
  );
}

/** "Swipe →" affordance. Renders on mobile only (see .swipe-hint in CSS). */
export function SwipeHint({ className = "" }: { className?: string }) {
  return (
    <p className={`swipe-hint ${className}`}>
      Swipe
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-5-5m5 5l-5 5" />
      </svg>
    </p>
  );
}
