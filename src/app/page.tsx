"use client";

import { motion, type Variants } from "framer-motion";
const float: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const floatDelayed: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 + 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a1a0f]">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#14532d]/30 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-[#052e16]/40 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#166534]/10 blur-[100px]" />
      </div>

      {/* Floating orbs */}
      <motion.div
        variants={float}
        animate="animate"
        className="pointer-events-none absolute top-16 left-[10%] w-3 h-3 rounded-full bg-emerald-400/40"
      />
      <motion.div
        variants={floatDelayed}
        animate="animate"
        className="pointer-events-none absolute top-32 right-[12%] w-2 h-2 rounded-full bg-green-300/30"
      />
      <motion.div
        variants={float}
        animate="animate"
        className="pointer-events-none absolute bottom-24 left-[15%] w-2 h-2 rounded-full bg-emerald-500/40"
      />
      <motion.div
        variants={floatDelayed}
        animate="animate"
        className="pointer-events-none absolute bottom-16 right-[18%] w-3 h-3 rounded-full bg-green-400/30"
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(134,239,172,1) 1px, transparent 1px), linear-gradient(90deg, rgba(134,239,172,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-4 py-16 w-full max-w-5xl mx-auto">
        {/* Logo / Brand */}
        <motion.div
          custom={0}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mb-10 flex flex-col items-center gap-3"
        >
          {/* Logo mark */}
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl"
            />
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-700 flex items-center justify-center shadow-lg shadow-emerald-900/40">
              <svg viewBox="0 0 32 32" className="w-9 h-9" fill="none">
                <path
                  d="M16 3C16 3 6 9 6 17C6 22.5 10.5 27 16 27C21.5 27 26 22.5 26 17C26 9 16 3 16 3Z"
                  fill="white"
                  opacity="0.9"
                />
                <path
                  d="M16 10C16 10 11 13.5 11 17.5C11 20.5 13.2 23 16 23C18.8 23 21 20.5 21 17.5C21 13.5 16 10 16 10Z"
                  fill="#14532d"
                />
              </svg>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Evergreen
            </h1>
            <p className="text-emerald-400/70 text-sm font-medium tracking-widest uppercase mt-0.5">
              Security &amp; Services
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          custom={1}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mb-8"
        />

        {/* Headline */}
        <motion.h2
          custom={2}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl sm:text-3xl font-semibold text-white text-center mb-3"
        >
          Welcome to Evergreen
        </motion.h2>

        <motion.p
          custom={3}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-slate-400 text-base sm:text-lg text-center max-w-md mb-14"
        >
          Please select your regional branch to continue.
        </motion.p>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
          {/* USA Card */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={float}
              animate="animate"
            >
              <a
                href="/usa"
                className="group relative flex flex-col h-full rounded-2xl overflow-hidden cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                {/* Card glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-green-600/0 group-hover:from-emerald-500/10 group-hover:to-green-600/10 transition-all duration-500" />
                {/* Border */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-emerald-500/40 transition-colors duration-300" />
                {/* Shine line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="relative bg-white/[0.04] backdrop-blur-sm rounded-2xl p-8 flex flex-col gap-5 h-full">
                  {/* Flag */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl select-none group-hover:scale-110 transition-transform duration-300">
                      🇺🇸
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div>
                      <p className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">Branch</p>
                      <h3 className="text-white text-xl font-bold">Evergreen USA</h3>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed flex-1">
                    Access the United States branch information, services, and contact details.
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                    <span>Visit USA Branch</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Nigeria Card */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={floatDelayed}
              animate="animate"
            >
              <a
                href="http://www.evergreenprotectiveservices.com/overseas.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col h-full rounded-2xl overflow-hidden cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-green-600/0 group-hover:from-emerald-500/10 group-hover:to-green-600/10 transition-all duration-500" />
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-emerald-500/40 transition-colors duration-300" />
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="relative bg-white/[0.04] backdrop-blur-sm rounded-2xl p-8 flex flex-col gap-5 h-full">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl select-none group-hover:scale-110 transition-transform duration-300">
                      🇳🇬
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div>
                      <p className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">Branch</p>
                      <h3 className="text-white text-xl font-bold">Evergreen Nigeria</h3>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed flex-1">
                    Access the Nigeria branch information, services, and contact details.
                  </p>

                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                    <span>Visit Nigeria Branch</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.p
          custom={4}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mt-14 text-slate-600 text-xs text-center"
        >
          © {new Date().getFullYear()} Evergreen Security &amp; Services. All rights reserved.
        </motion.p>
      </div>
    </main>
  );
}
