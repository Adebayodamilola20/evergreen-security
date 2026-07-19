"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Inertia smooth scrolling for the whole site (same feel as a lerp-based
// scroll: the page glides and settles instead of stopping dead).
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
