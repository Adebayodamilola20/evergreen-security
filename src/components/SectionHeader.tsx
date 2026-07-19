"use client";

import { motion } from "framer-motion";
import MaskText from "@/components/motion/MaskText";
import Reveal from "@/components/motion/Reveal";
import { EASE } from "@/components/motion/ease";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${light ? "text-white" : "text-navy"}`}>
        <MaskText text={title} />
      </h2>
      <motion.div
        className={`w-20 h-1 mt-4 origin-left ${centered ? "mx-auto origin-center" : ""}`}
        style={{ backgroundColor: "#2d7a3a" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
      />
      {subtitle && (
        <Reveal delay={0.2} className="mt-6">
          <p className={`text-lg max-w-3xl ${centered ? "mx-auto" : ""} ${light ? "text-gray-300" : "text-gray-600"}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
