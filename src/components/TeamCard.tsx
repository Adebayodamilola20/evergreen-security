"use client";

import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  index?: number;
}

export default function TeamCard({ name, role, bio, index = 0 }: TeamCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
    >
      <div className="h-64 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-evergreen rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-evergreen rounded-full blur-3xl" />
        </div>
        {initials ? (
          <span className="text-6xl font-bold text-white/80 z-10">{initials}</span>
        ) : (
          <svg className="w-24 h-24 text-white/40 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy">{name}</h3>
        <p className="text-evergreen font-medium text-sm mt-1">{role}</p>
        <div className="w-12 h-0.5 bg-evergreen mt-3 mb-4" />
        <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
      </div>
    </motion.div>
  );
}
