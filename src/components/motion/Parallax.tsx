"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

// Scroll parallax: the child drifts vertically as the container crosses the
// viewport. The child is scaled up just enough that its edges never show.
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Percent of drift in each direction, e.g. 8 → -8% to 8%. */
  amount?: number;
}

export default function Parallax({
  children,
  className,
  amount = 8,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        style={{ y, scale: 1 + amount / 45 }}
        className="h-full w-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
