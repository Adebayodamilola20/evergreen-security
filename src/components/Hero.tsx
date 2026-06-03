"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-navy" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%232d7a3a' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-transparent to-navy/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#2d7a3a_0%,_transparent_60%)] opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-evergreen/30 bg-evergreen/10 text-evergreen-light text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-evergreen-light animate-pulse" />
            Trusted International Security Provider
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight max-w-5xl mx-auto"
        >
          Protecting People, Assets & Operations{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-evergreen-light to-green-300">
            Worldwide
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Evergreen Protective Services International delivers professional security solutions, risk management, patrol services, corporate protection, and operational excellence across multiple regions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-lg transition-all duration-300 hover:opacity-90 transform hover:scale-105 shadow-lg shadow-evergreen/30"
            style={{ backgroundColor: "#2d7a3a" }}
          >
            Request Consultation
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg transition-all duration-300 hover:bg-white hover:text-navy hover:border-white"
          >
            Contact Us
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { stat: "500+", label: "Guards Deployed" },
            { stat: "200+", label: "Clients Protected" },
            { stat: "25+", label: "Years Experience" },
            { stat: "300+", label: "Sites Secured" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">{item.stat}</p>
              <p className="text-sm text-gray-400 mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
