"use client";

import { motion } from "framer-motion";
import { EASE } from "./ease";

// Word-by-word masked text reveal: each word rises out of a clip mask with a
// stagger, so headings "unfold" instead of fading in as a block.
interface MaskTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export default function MaskText({
  text,
  className,
  delay = 0,
  stagger = 0.05,
}: MaskTextProps) {
  const words = text.split(" ");

  const container = {
    inView: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const word = {
    initial: { y: "110%", clipPath: "inset(0% 0% 100% 0%)" },
    inView: {
      y: "0%",
      clipPath: "inset(-10% -5% -25% -5%)",
      transition: { ease: EASE, duration: 0.8 },
    },
  };

  return (
    <motion.span
      className={className}
      initial="initial"
      whileInView="inView"
      variants={container}
      viewport={{ once: true, margin: "-10%" }}
    >
      {words.map((w, i) => (
        <span key={i}>
          <motion.span
            className="inline-block will-change-transform"
            variants={word}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </motion.span>
  );
}
