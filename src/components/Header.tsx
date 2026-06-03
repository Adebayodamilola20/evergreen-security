"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "@/lib/types";

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Gallery", href: "/gallery" },
  { label: "Executive Staff", href: "/executive-staff" },
  { label: "Careers", href: "/careers" },
  { label: "Employment", href: "/employment" },
  { label: "Quality Assurance", href: "/quality-assurance" },
  { label: "Overseas Services", href: "/overseas-services" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#2d7a3a" }}>
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div className="hidden sm:block">
              <span className={`text-xl font-bold tracking-tight ${scrolled ? "text-navy" : "text-white"}`}>
                Evergreen
              </span>
              <span className={`text-lg ml-1 font-semibold ${scrolled ? "text-navy" : "text-white"}`}>
                Protective
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-1.5 text-xs font-medium rounded-md transition-all duration-200 whitespace-nowrap ${
                  pathname === link.href
                    ? scrolled
                      ? "text-evergreen bg-evergreen/10"
                      : "text-white bg-white/20"
                    : scrolled
                    ? "text-gray-600 hover:text-evergreen hover:bg-evergreen/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-navy hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-2xl overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    pathname === link.href
                      ? "text-evergreen bg-evergreen/10"
                      : "text-gray-700 hover:text-evergreen hover:bg-evergreen/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
