"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "@/lib/types";

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", children: [{ label: "Our Blog", href: "/blog" }] },
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
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                link.children?.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`));
              const linkClassName = `px-2 py-1.5 text-xs font-medium rounded-md transition-all duration-200 whitespace-nowrap ${
                active
                  ? scrolled
                    ? "text-evergreen bg-evergreen/10"
                    : "text-white bg-white/20"
                  : scrolled
                  ? "text-gray-600 hover:text-evergreen hover:bg-evergreen/5"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`;

              if (!link.children) {
                return (
                  <Link key={link.href} href={link.href} className={linkClassName}>
                    {link.label}
                  </Link>
                );
              }

              return (
                <div key={link.href} className="relative group">
                  <Link href={link.href} className={`${linkClassName} inline-flex items-center gap-1`}>
                    {link.label}
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
                    </svg>
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 mt-2 w-44 rounded-lg border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                          pathname === child.href || pathname.startsWith(`${child.href}/`)
                            ? "bg-evergreen/10 text-evergreen"
                            : "text-gray-700 hover:bg-evergreen/5 hover:text-evergreen"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
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
              {navLinks.map((link) => {
                const active =
                  pathname === link.href ||
                  link.children?.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`));

                return (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        active ? "text-evergreen bg-evergreen/10" : "text-gray-700 hover:text-evergreen hover:bg-evergreen/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="mt-1 space-y-1 pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                              pathname === child.href || pathname.startsWith(`${child.href}/`)
                                ? "text-evergreen bg-evergreen/10"
                                : "text-gray-600 hover:text-evergreen hover:bg-evergreen/5"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
