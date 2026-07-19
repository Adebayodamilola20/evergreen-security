"use client";

import { motion } from "framer-motion";
import { EASE } from "@/components/motion/ease";

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  useCases: string[];
  index?: number;
}

export default function ServiceCard({ title, description, benefits, useCases, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.85, delay: (index % 3) * 0.12, ease: EASE }}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
          style={{ backgroundColor: "#2d7a3a" }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
        <h3 className="text-xl font-bold text-navy group-hover:text-evergreen transition-colors duration-300">{title}</h3>
      </div>

      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-2">Key Benefits</h4>
          <ul className="space-y-1">
            {benefits.map((benefit) => (
              <li key={benefit} className="text-gray-600 text-sm flex items-start gap-2">
                <span className="text-evergreen mt-1 flex-shrink-0">●</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-2">Typical Use Cases</h4>
          <div className="flex flex-wrap gap-2">
            {useCases.map((useCase) => (
              <span
                key={useCase}
                className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full border border-gray-200"
              >
                {useCase}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
