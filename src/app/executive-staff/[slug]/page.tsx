"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/components/motion/ease";
import { executives, getExecutiveBySlug } from "@/lib/executives";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("");
}

export default function ExecutiveProfilePage() {
  const params = useParams();
  const slug = params.slug as string;
  const exec = getExecutiveBySlug(slug);

  if (!exec) {
    return (
      <section className="pt-40 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Profile Not Found</h1>
          <p className="text-gray-600 mb-8">The executive profile you are looking for does not exist.</p>
          <Link
            href="/executive-staff"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: "#2d7a3a" }}
          >
            Back to Executive Staff
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative pt-40 pb-20 min-h-screen bg-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 opacity-5" style={{ backgroundColor: "#2d7a3a", borderRadius: "50%", filter: "blur(80px)" }} />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 opacity-5" style={{ backgroundColor: "#2d7a3a", borderRadius: "50%", filter: "blur(80px)" }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-10"
          >
            <Link
              href="/executive-staff"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:gap-3"
              style={{ color: "#2d7a3a" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Executive Staff
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column - Photo / Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -56 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
              className="lg:col-span-2"
            >
              <div className="sticky top-28">
                <div className="aspect-[3/4] rounded-2xl bg-navy flex items-center justify-center relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl" style={{ backgroundColor: "#2d7a3a" }} />
                    <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl" style={{ backgroundColor: "#c9a84c" }} />
                  </div>
                  <span className="text-8xl md:text-9xl font-bold text-white/20 select-none">
                    {getInitials(exec.name)}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
              className="lg:col-span-3"
            >
              <div className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider rounded-full mb-4" style={{ backgroundColor: "#2d7a3a", color: "white" }}>
                EXECUTIVE PROFILE
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight">
                {exec.name}
              </h1>

              <p className="mt-3 text-xl font-semibold" style={{ color: "#c9a84c" }}>
                {exec.role}
              </p>

              <hr className="my-8 border-gray-200" />

              <div>
                <h2 className="text-lg font-bold text-navy tracking-wider uppercase mb-4">Biography</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{exec.fullBio}</p>
              </div>

              <hr className="my-8 border-gray-200" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-lg font-bold text-navy tracking-wider uppercase mb-4">Key Credentials</h2>
                  <ul className="space-y-3">
                    {exec.credentials.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "#2d7a3a" }}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-navy tracking-wider uppercase mb-4">Professional Affiliations</h2>
                  <ul className="space-y-3">
                    {exec.affiliations.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: "#c9a84c" }} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <hr className="my-8 border-gray-200" />

              <div>
                <h2 className="text-lg font-bold text-navy tracking-wider uppercase mb-4">Certifications</h2>
                <div className="flex flex-wrap gap-3">
                  {exec.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-4 py-2 text-sm font-medium rounded-lg border"
                      style={{
                        backgroundColor: "rgba(45, 122, 58, 0.08)",
                        color: "#2d7a3a",
                        borderColor: "rgba(45, 122, 58, 0.2)",
                      }}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
