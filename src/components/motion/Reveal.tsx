"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { EASE } from "./ease";

// Generic in-view reveal: content glides up and fades in with the signature
// easing curve. Use for paragraphs, buttons, and cards.
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
  duration = 0.9,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
