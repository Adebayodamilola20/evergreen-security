"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "@/lib/types";
import { COMPANY, guardCourses, firearmCourses } from "@/lib/company";

// The menu icons specified in the client's flowchart, in the order given.
// "Who We Are" carries the Management drop-down; the Training Academy runs as
// its own sub-site, so its own menu boxes are mirrored here as a drop-down.
const navLinks: NavLink[] = [
  {
    label: "Who We Are",
    href: "/who-we-are",
    children: [
      { label: "Leadership", href: "/who-we-are/leadership" },
      { label: "Management", href: "/who-we-are/management" },
    ],
  },
  {
    label: "Training Academy",
    href: "/training-academy",
    children: [
      { label: "Guard Training", href: "/training-academy/guard-training" },
      { label: "Firearm Training", href: "/training-academy/firearm-training" },
      { label: "Sign Up For Training", href: "/training-academy/signup" },
      { label: "Contact Us", href: "/training-academy/contact" },
    ],
  },
  { label: "Career", href: "/career" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

// Course lists hang off the two training menu boxes as a second tier, matching
// the drop-downs the flowchart specifies under Guard and Firearm Training.
const courseSubmenus: Record<string, { label: string; href: string }[]> = {
  "/training-academy/guard-training": guardCourses.map((c) => ({
    label: c.title,
    href: `/training-academy/guard-training/${c.slug}`,
  })),
  "/training-academy/firearm-training": firearmCourses.map((c) => ({
    label: c.title,
    href: `/training-academy/firearm-training/${c.slug}`,
  })),
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (link: NavLink) =>
    pathname === link.href ||
    pathname.startsWith(`${link.href}/`) ||
    link.children?.some((child) => pathname.startsWith(child.href));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm tracking-tight">PGS</span>
            </span>
            <span className="hidden sm:block leading-tight">
              <span className={`block text-lg font-bold tracking-tight ${scrolled ? "text-navy" : "text-white"}`}>
                {COMPANY.name}
              </span>
              <span className={`block text-[11px] font-medium ${scrolled ? "text-gray-500" : "text-white/70"}`}>
                {COMPANY.legalName}
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const active = isActive(link);
              const linkClassName = `px-2.5 py-1.5 text-xs font-medium rounded-md transition-all duration-200 whitespace-nowrap ${
                active
                  ? scrolled
                    ? "text-brand bg-brand/10"
                    : "text-white bg-white/20"
                  : scrolled
                  ? "text-gray-600 hover:text-brand hover:bg-brand/5"
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
                  <div className="invisible absolute left-0 top-full z-50 mt-2 w-56 rounded-lg border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {link.children.map((child) => {
                      const courses = courseSubmenus[child.href];
                      const childActive = pathname.startsWith(child.href);
                      const childClass = `flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        childActive ? "bg-brand/10 text-brand" : "text-gray-700 hover:bg-brand/5 hover:text-brand"
                      }`;

                      if (!courses) {
                        return (
                          <Link key={child.href} href={child.href} className={childClass}>
                            {child.label}
                          </Link>
                        );
                      }

                      return (
                        <div key={child.href} className="relative group/sub">
                          <Link href={child.href} className={childClass}>
                            {child.label}
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 6 6 6-6 6" />
                            </svg>
                          </Link>
                          <div className="invisible absolute left-full top-0 z-50 ml-1 w-52 rounded-lg border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover/sub:visible group-hover/sub:opacity-100 group-focus-within/sub:visible group-focus-within/sub:opacity-100">
                            {courses.map((course) => (
                              <Link
                                key={course.href}
                                href={course.href}
                                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                                  pathname === course.href
                                    ? "bg-brand/10 text-brand"
                                    : "text-gray-700 hover:bg-brand/5 hover:text-brand"
                                }`}
                              >
                                {course.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
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
            aria-expanded={mobileOpen}
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
            className="lg:hidden bg-white border-t border-gray-100 shadow-2xl overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                      isActive(link) ? "text-brand bg-brand/10" : "text-gray-700 hover:text-brand hover:bg-brand/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="mt-1 space-y-1 pl-4">
                      {link.children.map((child) => (
                        <div key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                              pathname.startsWith(child.href)
                                ? "text-brand bg-brand/10"
                                : "text-gray-600 hover:text-brand hover:bg-brand/5"
                            }`}
                          >
                            {child.label}
                          </Link>
                          {courseSubmenus[child.href] && (
                            <div className="pl-4">
                              {courseSubmenus[child.href].map((course) => (
                                <Link
                                  key={course.href}
                                  href={course.href}
                                  onClick={() => setMobileOpen(false)}
                                  className={`block rounded-lg px-4 py-1.5 text-xs font-medium transition-all ${
                                    pathname === course.href
                                      ? "text-brand"
                                      : "text-gray-500 hover:text-brand"
                                  }`}
                                >
                                  {course.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
