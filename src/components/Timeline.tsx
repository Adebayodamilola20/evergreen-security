"use client";

import { motion } from "framer-motion";
import { EASE } from "@/components/motion/ease";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-px" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -64 : 64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: EASE }}
            className={`relative flex flex-col md:flex-row items-start gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="hidden md:block flex-1" />

            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-evergreen border-4 border-white shadow-md transform -translate-x-1/2 mt-1.5 z-10" />

            <div className="flex-1 ml-12 md:ml-0">
              <div
                className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 ${
                  index % 2 === 0 ? "md:text-right md:mr-8" : "md:ml-8"
                }`}
              >
                <span className="inline-block px-3 py-1 text-sm font-bold text-evergreen bg-evergreen/10 rounded-full mb-3">
                  {event.year}
                </span>
                <h3 className="text-xl font-bold text-navy mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
