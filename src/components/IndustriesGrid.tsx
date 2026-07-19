"use client";

import { motion } from "framer-motion";
import { Industry } from "@/lib/types";
import MaskText from "@/components/motion/MaskText";
import Reveal from "@/components/motion/Reveal";
import { EASE } from "@/components/motion/ease";

const industries: Industry[] = [
  { name: "Corporate Offices", icon: "🏢" },
  { name: "Airports", icon: "✈️" },
  { name: "Government Facilities", icon: "🏛️" },
  { name: "Residential Estates", icon: "🏘️" },
  { name: "Oil & Gas", icon: "⛽" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Retail", icon: "🛍️" },
  { name: "Construction", icon: "🔨" },
];

export default function IndustriesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
            <MaskText text="Industries We Serve" />
          </h2>
          <motion.div
            className="w-20 h-1 mt-4 mx-auto"
            style={{ backgroundColor: "#2d7a3a" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          />
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              From government facilities to corporate headquarters, we provide comprehensive security solutions tailored to each industry.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.85, delay: (index % 4) * 0.1, ease: EASE }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-default"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
              <h3 className="text-lg font-semibold text-navy">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
