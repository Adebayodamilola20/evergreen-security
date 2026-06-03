"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      <div className={`w-20 h-1 mt-4 mx-auto ${centered ? "mx-auto" : ""}`} style={{ backgroundColor: "#2d7a3a" }} />
      {subtitle && (
        <p className={`mt-6 text-lg max-w-3xl ${centered ? "mx-auto" : ""} ${light ? "text-gray-300" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
