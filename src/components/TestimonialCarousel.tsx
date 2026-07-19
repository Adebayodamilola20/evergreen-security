"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonial } from "@/lib/types";
import MaskText from "@/components/motion/MaskText";
import { EASE } from "@/components/motion/ease";

const testimonials: Testimonial[] = [
  {
    quote:
      "Evergreen Protective Services has been instrumental in securing our corporate headquarters. Their professionalism and attention to detail are unmatched in the industry.",
    author: "James Mitchell",
    role: "CEO, Mitchell Enterprises",
  },
  {
    quote:
      "We contracted Evergreen for our airport security operations and have seen a remarkable improvement in safety protocols and response times. Highly recommended.",
    author: "Sarah Chen",
    role: "Director of Operations, Pacific Airports",
  },
  {
    quote:
      "The executive protection team at Evergreen is world-class. They provided seamless security for our international delegation with utmost professionalism.",
    author: "Ambassador David Okonkwo",
    role: "Nigerian Ministry of Foreign Affairs",
  },
  {
    quote:
      "From risk assessment to implementation, Evergreen delivered comprehensive security solutions for our manufacturing facilities across three continents.",
    author: "Robert van der Berg",
    role: "Chief Security Officer, Global Industries",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-evergreen rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-evergreen rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            <MaskText text="What Our Clients Say" />
          </h2>
          <motion.div
            className="w-20 h-1 mt-4 mx-auto"
            style={{ backgroundColor: "#2d7a3a" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          />
        </div>

        <div className="relative min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 64 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -64 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-center"
            >
              <svg className="w-12 h-12 mx-auto mb-6 text-evergreen opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div className="mt-8">
                <p className="text-white font-semibold text-lg">{testimonials[current].author}</p>
                <p className="text-evergreen-light text-sm">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-evergreen w-8" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
