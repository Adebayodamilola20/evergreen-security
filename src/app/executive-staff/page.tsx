"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { executives } from "@/lib/executives";

// Board of Directors names from Evergreen Security
const boardOfDirectors = [
  "AYODEJI BAMGBOSE (Chairman)",
  "IBRAHIM MUUTA",
  "OTOTO LAMBERT",
  "BENEDICT OBASA",
  "PAUL BAMGBOSE",
  "ADEKUNMI ODEBUNMI (Managing)"
];

// Helper to format Board name card
function formatBoardMember(name: string) {
  const match = name.match(/(.*?)(\(.*?\))/);
  if (match) {
    const mainName = match[1].trim().toUpperCase();
    const roleText = match[2].trim();
    // Convert (Managing) -> (Managing) or (Chairman) -> (Chairman)
    const formattedRole = roleText.charAt(0) + roleText.charAt(1).toUpperCase() + roleText.slice(2).toLowerCase();
    return { name: mainName, role: formattedRole };
  }
  return { name: name.toUpperCase(), role: "" };
}

export default function ExecutiveStaffPage() {
  // Split our executives array: first 3 are management, remainder are managers
  const management = executives.slice(0, 3);
  const managers = executives.slice(3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-highlight rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tight"
          >
            Board & Executive Staff
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Our board comprises distinguished professionals with decades of combined experience in security, military operations, corporate leadership, and strategic management. Each member brings unique expertise that shapes our commitment to excellence.
          </motion.p>
        </div>
      </section>

      {/* Board & Staff Lists */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Board of Directors */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-left mb-16"
            >
              <h2 className="text-4xl font-extrabold text-primary mb-2 tracking-tight">
                Board of Directors
              </h2>
              <div className="w-24 h-2 bg-gradient-to-r from-highlight to-cyan-800 rounded-full mt-2" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {boardOfDirectors.map((item, index) => {
                const formatted = formatBoardMember(item);
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="text-center p-8 bg-gray-50/50 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                  >
                    <p className="text-lg font-bold text-primary tracking-wide group-hover:text-accent transition-colors duration-300">
                      <span>{formatted.name}</span>
                      {formatted.role && (
                        <span className="block mt-2 text-sm font-medium text-gray-500">
                          {formatted.role}
                        </span>
                      )}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Director of Management */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-left mb-16"
            >
              <h2 className="text-4xl font-extrabold text-primary mb-2 tracking-tight">
                Director of Management
              </h2>
              <div className="w-24 h-2 bg-gradient-to-r from-highlight to-cyan-800 rounded-full mt-2" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {management.map((director, index) => (
                <motion.div
                  key={director.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/executive-staff/${director.slug}`} className="group block">
                    <div className="relative rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:scale-105 h-96 flex items-center justify-center bg-navy">
                      <span className="text-8xl font-bold text-white/10 select-none">
                        {director.name.split(" ").map((n: string) => n[0]).filter(Boolean).join("")}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-1 group-hover:text-highlight transition-colors duration-300">
                          {director.name}
                        </h3>
                        <p className="text-sm font-semibold text-highlight">
                          {director.role}
                        </p>
                        <p className="mt-3 text-xs text-gray-300 line-clamp-2">
                          {director.bio}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section 3: Managers */}
          {managers.length > 0 && (
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-left mb-16"
              >
                <h2 className="text-4xl font-extrabold text-primary mb-2 tracking-tight">
                  Managers
                </h2>
                <div className="w-24 h-2 bg-gradient-to-r from-highlight to-cyan-800 rounded-full mt-2" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {managers.map((manager, index) => (
                  <motion.div
                    key={manager.slug}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link href={`/executive-staff/${manager.slug}`} className="group block">
                      <div className="relative rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:scale-105 h-96 flex items-center justify-center bg-navy">
                        <span className="text-8xl font-bold text-white/10 select-none">
                          {manager.name.split(" ").map((n: string) => n[0]).filter(Boolean).join("")}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-2xl font-bold mb-1 group-hover:text-highlight transition-colors duration-300">
                            {manager.name}
                          </h3>
                          <p className="text-sm font-semibold text-highlight">
                            {manager.role}
                          </p>
                          <p className="mt-3 text-xs text-gray-300 line-clamp-2">
                            {manager.bio}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
