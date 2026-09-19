/* Hallmark · macrostructures: [1] Split Editorial Hero  [2] Clean Photo Split
 * tone: authoritative/trusted · anchor hue: navy+accent
 * Pre-emit critique: P5 H5 E4 S5 R4 V5
 * Scope: HOMEPAGE HERO redesign samples, previewed in isolation with a tab
 * switcher so each sample shows one-at-a-time (no scrolling to compare). Reuses
 * the existing PGS brand system (navy/accent/brand tokens, Geist, framer-motion)
 * — nothing here changes the live homepage. Copy from company.ts; no invented
 * metrics.
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/components/motion/ease";
import { COMPANY } from "@/lib/company";

const HEADLINE = ["Security the DMV trusts", "with its people and property."];

// Every proof is supported by the client's flowchart document (company.ts).
const PROOF = [
  "Veteran-led leadership — military, law enforcement & security",
  "Custom Protection Officers® — armed & unarmed, matched to your site",
  "An A-rated academy trains every officer we deploy",
  "24/7 escalation & response team, reachable in real time",
  "Working relationships with agencies from the Dept. of State to Homeland Security",
];

const SAMPLE2_CHIPS = ["Veteran-led", "A-rated academy", "24/7 response", "DMV area"];

const TABS = [
  { n: 1, title: "Dark & bold" },
  { n: 2, title: "Light & clean" },
  { n: 3, title: "Coming next" },
];

function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/20 text-brand-light">
      <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3" aria-hidden="true">
        <path
          d="M4 10.5l4 4 8-9"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* ===== SAMPLE 1: Split Editorial Hero (photo background + navy wash) ===== */
function Sample1() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden py-24">
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/assets/jonney .jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-brand-dark/95" />
        <div className="mesh-navy absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent" />
      </div>

      <div className="container-custom relative z-10 px-4 text-white sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-sm">
              <span className="flex items-center gap-2.5">
                <span className="h-px w-8 bg-accent" />
                {COMPANY.legalName}
              </span>
              <span className="text-white/50">DC · Maryland · Virginia</span>
            </div>

            <h1 className="mb-6 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              {HEADLINE.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.25 + i * 0.12, ease: EASE }}
                  >
                    {i === 1 ? (
                      <>
                        with its <span className="text-brand-light">people and property.</span>
                      </>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
              className="mb-8 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl"
            >
              {COMPANY.shortName}, Inc. is a veteran-led security company protecting life, assets and
              facilities across the DMV — hand-picked armed and unarmed officers, backed by our own
              A-rated academy and a team that never stops watching.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
              className="flex flex-col gap-3.5 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-navy transition-all duration-300 hover:scale-105 hover:bg-white/90"
              >
                Request a security assessment
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white hover:text-navy sm:text-lg"
              >
                Explore our services
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            className="rounded-2xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-md sm:p-8"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-light">
              Why organizations choose PGS
            </p>
            <ul className="space-y-4">
              {PROOF.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: EASE }}
                  className="flex items-start gap-3 text-[0.95rem] leading-snug text-white/90"
                >
                  <Check />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-7 border-t border-white/10 pt-5">
              <p className="text-sm text-white/60">
                Corporate HQ in Lanham, MD · Response &amp; escalation available 24/7.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===== SAMPLE 2: Light & Clean (WHITE background, photo is the star, no overlay) ===== */
function Sample2() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white py-20">
      {/* barely-there brand tint in one corner so pure white isn't clinical */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* TEXT — dark on white */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="order-2 lg:order-1"
          >
            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.2em] text-navy/60 sm:text-sm">
              <span className="flex items-center gap-2.5">
                <span className="h-px w-8 bg-accent" />
                {COMPANY.legalName}
              </span>
              <span className="text-navy/40">DC · Maryland · Virginia</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl md:text-6xl">
              No two sites are the same.
              <br />
              <span className="text-brand">Neither is our security.</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
              From a single officer to a full protective detail, {COMPANY.shortName} designs
              security around your site — vetted armed and unarmed officers, live reporting
              technology, and a 24/7 response team, right across DC, Maryland and Virginia.
            </p>

            <div className="mb-9 flex flex-wrap gap-2">
              {SAMPLE2_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-navy/[0.03] px-3.5 py-1.5 text-xs font-medium text-navy/80 sm:text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3.5 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-brand-dark"
              >
                Request a security assessment
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center rounded-full border-2 border-navy/20 px-8 py-4 text-base font-semibold text-navy transition-all duration-300 hover:scale-105 hover:border-navy hover:bg-navy hover:text-white sm:text-lg"
              >
                Explore our services
              </Link>
            </div>
          </motion.div>

          {/* PHOTO — clean, no overlay, the visual anchor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="order-1 lg:order-2"
          >
            <img
              src="/assets/jonney .jpg"
              alt="PGS security officers on duty"
              className="h-[42vh] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-black/5 sm:h-[52vh] lg:h-[76vh]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===== SAMPLE 3: placeholder until the direction is chosen ===== */
function Sample3() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-100 px-6 text-center">
      <div className="max-w-md">
        <p className="text-2xl font-bold text-gray-800">Sample 3 is up next.</p>
        <p className="mt-3 text-gray-500">
          Tell me what you think of Samples 1 &amp; 2 and I&apos;ll build the third to match
          whatever you liked best.
        </p>
      </div>
    </section>
  );
}

export default function HeroSamples() {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-gray-50">
      {/* Tab switcher — click to flip between samples instantly (preview only) */}
      <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-2 border-b border-white/10 bg-brand-dark px-4 py-2.5">
        <span className="mr-1 hidden text-xs text-white/55 sm:inline">PGS hero redesign:</span>
        {TABS.map((t) => (
          <button
            key={t.n}
            type="button"
            onClick={() => setActive(t.n)}
            className={
              active === t.n
                ? "rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-navy sm:text-sm"
                : "rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold text-white/75 transition-colors hover:bg-white/10 hover:text-white sm:text-sm"
            }
          >
            Sample {t.n}
            <span className="hidden opacity-60 md:inline"> · {t.title}</span>
          </button>
        ))}
      </nav>

      {active === 1 && <Sample1 />}
      {active === 2 && <Sample2 />}
      {active === 3 && <Sample3 />}
    </div>
  );
}
