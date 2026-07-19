"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { EASE } from "./ease";

// Image/panel reveal: the content is unclipped from the bottom while it
// settles from a slight zoom — the signature "curtain lift" image entrance.
interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ClipReveal({
  children,
  className,
  delay = 0,
}: ClipRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      style={{ willChange: "clip-path" }}
    >
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.2, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
