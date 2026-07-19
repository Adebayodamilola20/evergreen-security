"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { ReactNode, useRef } from "react";

// Infinite marquee that reacts to scroll velocity: it drifts on its own and
// speeds up (or reverses) with the user's scrolling, like the elementis strip.
interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** Base drift speed in percent per second. */
  speed?: number;
}

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return min + (((v - min) % range) + range) % range;
};

export default function Marquee({
  children,
  className,
  speed = 4,
}: MarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const velocityFactor = useTransform(
    useSpring(scrollVelocity, { mass: 1, damping: 50, stiffness: 600 }),
    [0, 1000],
    [0, 4],
    { clamp: false },
  );
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * speed * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() - moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  return (
    <div className="overflow-hidden">
      <motion.div
        style={{ x }}
        className={`flex w-max whitespace-nowrap will-change-transform ${className ?? ""}`}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
