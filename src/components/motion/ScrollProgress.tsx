"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// A phone gives no sense of how long a page is — no scrollbar, no peripheral
// vision of the track. This hairline under the header carries that.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-accent via-brand-light to-accent"
    />
  );
}
