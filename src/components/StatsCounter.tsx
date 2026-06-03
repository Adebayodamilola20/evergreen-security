"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Stat } from "@/lib/types";

interface StatsCounterProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, suffix = "", prefix = "", label }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center p-8">
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-bold text-evergreen"
      >
        {prefix}{count}{suffix}
      </motion.p>
      <p className="text-gray-600 mt-2 text-lg font-medium">{label}</p>
    </div>
  );
}

export default function StatsCounter({ stats }: { stats: Stat[] }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
