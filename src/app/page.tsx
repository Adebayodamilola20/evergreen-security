"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import MaskText from "@/components/motion/MaskText";
import Reveal from "@/components/motion/Reveal";
import ChatAssistant from "@/components/ChatAssistant";
import SwipeRow, { SwipeHint } from "@/components/SwipeRow";
import Icon, { type IconName } from "@/components/Icons";
import { EASE } from "@/components/motion/ease";
import {
  COMPANY,
  HOME_INTRO,
  SERVICES,
  PILLARS,
  MENU_ICONS,
  HQ,
  CAPABILITIES,
  DIFFERENTIATORS,
  DEPLOYMENT_SECTORS,
  ASSURANCE,
  ACADEMY,
} from "@/lib/company";

const HERO_LINES = ["Protecting life,", "assets and facilities", "in an evolving world."];

// Short, all doc-supported, and the only thing on the hero that survives at
// phone width once the headline has had its say.
const HERO_CHIPS = ["Armed & unarmed officers", "A-rated training academy", "24/7 response", "DMV area"];

// Cards led with "01 / 02 / 03" before, which is invisible design on a phone.
const CAPABILITY_ICONS: IconName[] = ["officer", "camera", "clipboard", "scan"];
const DIFFERENTIATOR_ICONS: IconName[] = ["layers", "shieldCheck", "scale", "spark"];
const SECTOR_ICONS: IconName[] = ["building", "home", "landmark", "flag"];
const ASSURANCE_ICONS: IconName[] = ["clock", "checkCircle", "signal", "refresh"];
const MENU_ICON_NAMES: IconName[] = ["users", "graduation", "briefcase", "mail"];
const PILLAR_ICONS: IconName[] = ["target", "eye", "compass"];

// Two counter-drifting rows beat one 27-item bullet list on a 390px screen.
const SERVICES_ROW_A = SERVICES.filter((_, i) => i % 2 === 0);
const SERVICES_ROW_B = SERVICES.filter((_, i) => i % 2 === 1);

export default function Home() {
  // As the flowchart section rises over the pinned hero, the background drifts
  // down while the copy lifts away — the hero recedes instead of just sitting.
  const { scrollY } = useScroll();
  const heroImgY = useTransform(scrollY, [0, 900], [0, 180]);
  const heroImgScale = useTransform(scrollY, [0, 900], [1, 1.12]);
  const heroContentY = useTransform(scrollY, [0, 700], [0, -110]);
  const heroContentOpacity = useTransform(scrollY, [100, 650], [1, 0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="curtain-flow">
        {/* Hero */}
        <section className="curtain-pin curtain-hero relative flex min-h-[92vh] items-center overflow-hidden py-20 md:min-h-screen md:py-0">
          <div className="absolute inset-0 z-0">
            <motion.div className="absolute inset-0" style={{ y: heroImgY, scale: heroImgScale }}>
              <motion.img
                src="/assets/jonney .jpg"
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 7, ease: "easeOut" }}
              />
            </motion.div>
            {/* Directional wash rather than a flat scrim — keeps the photo
                readable on a small screen while the copy stays legible. */}
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-navy/95 via-navy/75 to-brand-dark/90" />
            <div className="mesh-navy absolute inset-0 z-10" />
            <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-navy to-transparent" />
          </div>

          <motion.div
            className="container-custom relative z-10 mt-16 px-4 text-white sm:px-6 md:mt-24 lg:px-8"
            style={{ y: heroContentY, opacity: heroContentOpacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="max-w-4xl"
            >
              <p className="mb-5 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-sm">
                <span className="h-px w-8 bg-accent" />
                {COMPANY.legalName}
              </p>
              <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
                {HERO_LINES.map((line, i) => (
                  <span key={line} className="block overflow-hidden pb-1">
                    <motion.span
                      className="block"
                      initial={{ y: "110%", clipPath: "inset(0% 0% 100% 0%)" }}
                      animate={{ y: 0, clipPath: "inset(0% 0% -25% 0%)" }}
                      transition={{ duration: 0.9, delay: 0.35 + i * 0.13, ease: EASE }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
                className="mb-8 max-w-2xl text-lg leading-relaxed text-white/90 md:text-2xl"
              >
                A spectrum of custom solutions matched to your dynamic and peculiar security needs — deploying the best
                of officers, armed and unarmed, and the technology behind them.
              </motion.p>

              <div className="mb-9 flex flex-wrap gap-2">
                {HERO_CHIPS.map((chip, i) => (
                  <motion.span
                    key={chip}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + i * 0.08, ease: EASE }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm sm:text-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {chip}
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-col gap-3.5 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-navy transition-all duration-300 hover:scale-105 hover:bg-white/90"
                >
                  Contact Us
                </Link>
                <Link
                  href="/training-academy"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white hover:text-navy sm:text-lg"
                >
                  Training Academy
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll cue — the curtain effect below is easy to miss otherwise. */}
          <motion.div
            aria-hidden="true"
            style={{ opacity: heroContentOpacity }}
            className="absolute inset-x-0 bottom-7 z-10 flex justify-center"
          >
            <span className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-white/30 pt-1.5">
              <span className="scroll-cue-dot h-1.5 w-1.5 rounded-full bg-white/80" />
            </span>
          </motion.div>
        </section>

        {/* The flowchart layout: services rail left, company summary centre,
            mission / vision / core value right. */}
        <section id="services" className="curtain-pin curtain-flowchart section-padding relative bg-white">
          <div className="mesh-light pointer-events-none absolute inset-0" />
          <div className="container-custom relative">
            {/* Mobile: the 27 services as drifting chips instead of a wall of
                bullets. Hidden on lg where the sticky rail takes over. */}
            <div className="mb-12 lg:hidden">
              <h2 className="mb-4 flex items-center gap-2.5 px-1 text-xs font-bold uppercase tracking-[0.18em] text-primary/60">
                <Icon name="shield" className="h-4 w-4 text-accent" />
                {SERVICES.length} services
              </h2>
              <div className="marquee -mx-4 space-y-2.5 py-1">
                {[SERVICES_ROW_A, SERVICES_ROW_B].map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className={`marquee-track ${rowIndex === 1 ? "marquee-track-slow marquee-reverse" : ""}`}
                  >
                    {[...row, ...row].map((service, i) => (
                      <span
                        key={`${service}-${i}`}
                        className="whitespace-nowrap rounded-full bg-rail px-4 py-2 text-sm font-medium text-primary/85"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Left rail — list of services (desktop) */}
              <aside className="hidden lg:col-span-3 lg:block">
                <div className="rounded-2xl bg-rail p-6 lg:sticky lg:top-28">
                  <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-primary/70">
                    List of Services
                  </h2>
                  <ul className="space-y-2.5">
                    {SERVICES.map((service) => (
                      <li key={service} className="flex gap-2.5 text-sm leading-snug text-primary/90">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              {/* Centre — summed-up representation of the company */}
              <div className="lg:col-span-6">
                <Reveal y={20}>
                  <span className="inline-block rounded-full bg-highlight/10 px-4 py-1.5 text-xs font-bold tracking-wide text-primary">
                    WHO WE ARE
                  </span>
                </Reveal>
                <h2 className="mb-6 mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl">
                  <MaskText text="Custom security solutions, value based and result oriented" />
                </h2>

                <Reveal delay={0.15}>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700">{HOME_INTRO.lead}</p>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="mb-4 leading-relaxed text-gray-600">{HOME_INTRO.partnershipsIntro}</p>
                </Reveal>

                <ul className="mb-6 space-y-3 border-l-2 border-accent/30 pl-5">
                  {HOME_INTRO.capabilities.map((item, i) => (
                    <Reveal key={item} delay={0.25 + i * 0.05}>
                      <li className="text-gray-700">{item}</li>
                    </Reveal>
                  ))}
                </ul>

                {HOME_INTRO.closing.map((para, i) => (
                  <Reveal key={para} delay={0.3 + i * 0.05}>
                    <p className="mb-4 leading-relaxed text-gray-600">{para}</p>
                  </Reveal>
                ))}

                <Reveal delay={0.45}>
                  <Link
                    href="/who-we-are"
                    className="btn-highlight mt-4 inline-flex items-center rounded-full px-8 py-3 text-lg"
                  >
                    More About PGS
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </Reveal>
              </div>

              {/* Right rail — mission, vision, core value */}
              <aside className="mt-4 lg:col-span-3 lg:mt-0">
                <div className="space-y-4 lg:sticky lg:top-28">
                  {PILLARS.map((pillar, i) => (
                    <Reveal key={pillar.title} delay={i * 0.08}>
                      <div className="relative overflow-hidden rounded-2xl bg-rail p-6">
                        <Icon
                          name={PILLAR_ICONS[i] ?? "target"}
                          className="absolute -right-3 -top-3 h-20 w-20 text-accent/10"
                        />
                        <h2 className="relative mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary/70">
                          <Icon name={PILLAR_ICONS[i] ?? "target"} className="h-4 w-4 text-accent" />
                          {pillar.title}
                        </h2>
                        <p className="relative text-sm leading-relaxed text-primary/90">{pillar.body}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>

      {/* What we do — the four capability areas, developed */}
      <section className="section-padding border-y border-gray-100 bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Reveal y={20}>
                <span className="inline-block rounded-full bg-highlight/10 px-4 py-1.5 text-xs font-bold tracking-wide text-primary">
                  WHAT WE DO
                </span>
              </Reveal>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-5xl">
                <MaskText text="Four capabilities, deployed together" />
              </h2>
              <Reveal delay={0.2}>
                <p className="mt-5 text-lg leading-relaxed text-gray-600">
                  Officers, technology, planning and assessment are not separate products at PGS — they are four parts
                  of the same engagement, sized to what your site actually needs.
                </p>
              </Reveal>
            </div>
            <SwipeHint className="text-primary" />
          </div>

          <SwipeRow cols={2}>
            {CAPABILITIES.map((cap, index) => (
              <motion.article
                key={cap.title}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: EASE }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10"
              >
                <Icon
                  name={CAPABILITY_ICONS[index] ?? "shield"}
                  className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 text-accent/[0.07] transition-transform duration-500 group-hover:scale-110"
                />
                <span className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={CAPABILITY_ICONS[index] ?? "shield"} className="h-6 w-6" />
                </span>
                <h3 className="relative mb-3 text-2xl font-bold leading-tight text-primary">{cap.title}</h3>
                <p className="relative mb-4 font-medium text-accent">{cap.lead}</p>
                <p className="relative leading-relaxed text-gray-600">{cap.body}</p>
              </motion.article>
            ))}
          </SwipeRow>
        </div>
      </section>

      {/* Why PGS — the four adjectives, developed */}
      <section className="section-padding relative overflow-hidden bg-navy text-white">
        <div className="mesh-navy pointer-events-none absolute inset-0" />
        <div className="dot-grid pointer-events-none absolute inset-0 text-white/[0.06]" />
        <div className="container-custom relative">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Reveal y={20}>
                  <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-white/80">
                    WHY PGS
                  </span>
                </Reveal>
                <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
                  <MaskText text="Experience-based. Low-risk. Best-value." />
                </h2>
                <Reveal delay={0.2}>
                  <p className="mt-5 leading-relaxed text-white/70">
                    Four words the company uses to describe itself — and what each one means in practice on a contract.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <dl className="space-y-3 lg:space-y-0 lg:divide-y lg:divide-white/10">
                {DIFFERENTIATORS.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-8%" }}
                    transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:py-8 lg:first:pt-0 lg:last:pb-0"
                  >
                    <dt className="mb-3 flex items-center gap-3 text-xl font-bold sm:text-2xl">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent">
                        <Icon name={DIFFERENTIATOR_ICONS[index] ?? "spark"} className="h-5 w-5" />
                      </span>
                      {item.title}
                    </dt>
                    <dd className="leading-relaxed text-white/70">{item.body}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Where we deploy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Reveal y={20}>
                <span className="inline-block rounded-full bg-highlight/10 px-4 py-1.5 text-xs font-bold tracking-wide text-primary">
                  WHERE WE DEPLOY
                </span>
              </Reveal>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-5xl">
                <MaskText text="Sites we protect" />
              </h2>
              <Reveal delay={0.2}>
                <p className="mt-5 text-lg leading-relaxed text-gray-600">
                  Each location gets its own security procedures, written for that site rather than lifted from a
                  template — and guided by our experts before anything is implemented.
                </p>
              </Reveal>
            </div>
            <SwipeHint className="text-primary" />
          </div>

          <SwipeRow cols={4}>
            {DEPLOYMENT_SECTORS.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
                className="relative overflow-hidden rounded-2xl bg-rail p-7"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-accent shadow-sm">
                  <Icon name={SECTOR_ICONS[index] ?? "building"} className="h-5 w-5" />
                </span>
                <h3 className="mb-5 text-lg font-bold leading-tight text-primary">{sector.title}</h3>
                <ul className="space-y-2.5">
                  {sector.sites.map((site) => (
                    <li key={site} className="flex gap-2.5 text-sm leading-snug text-primary/85">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {site}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </SwipeRow>
        </div>
      </section>

      {/* Photo band — breaks up a long run of cards, and on a phone it is the
          only thing between two text sections that is not text. */}
      <section className="relative h-[42vh] overflow-hidden sm:h-[52vh]">
        <img
          src="/assets/bingo4.jpg"
          alt="A PGS officer on post"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/10" />
        <div className="container-custom absolute inset-x-0 bottom-0 px-4 pb-10 sm:px-6 lg:px-8">
          <Reveal>
            <p className="max-w-xl text-2xl font-bold leading-snug text-white sm:text-4xl">
              {COMPANY.tagline}
            </p>
            <p className="mt-3 text-sm text-white/70 sm:text-base">
              Officers, technology and planning — matched to the site, not to a template.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Assurance */}
      <section className="section-padding relative border-b border-gray-100 bg-gray-50">
        <div className="mesh-light pointer-events-none absolute inset-0" />
        <div className="container-custom relative">
          <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Reveal y={20}>
                <span className="inline-block rounded-full bg-highlight/10 px-4 py-1.5 text-xs font-bold tracking-wide text-primary">
                  QUALITY ASSURANCE
                </span>
              </Reveal>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-5xl">
                <MaskText text="How we hold the standard" />
              </h2>
            </div>
            <SwipeHint className="text-primary" />
          </div>

          <SwipeRow cols={4}>
            {ASSURANCE.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
                className="rounded-2xl border-t-4 border-t-accent bg-white p-7 shadow-sm"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={ASSURANCE_ICONS[index] ?? "checkCircle"} className="h-5 w-5" />
                </span>
                <h3 className="mb-3 text-lg font-bold leading-tight text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
              </motion.div>
            ))}
          </SwipeRow>

          <Reveal delay={0.3}>
            <p className="mt-12 text-center">
              <Link href="/who-we-are/management" className="font-semibold text-accent hover:underline">
                Read how our management runs quality control and cost containment →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Academy teaser */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/assets/bingi3.jpg"
                alt="Instruction at the PGS Training Academy"
                className="h-[320px] w-full object-cover sm:h-[440px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5 text-white">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                  <Icon name="graduation" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold leading-tight">{ACADEMY.name}</p>
                  <p className="text-xs text-white/70">{ACADEMY.abbreviation}</p>
                </div>
              </div>
            </div>

            <div>
              <Reveal y={20}>
                <span className="inline-block rounded-full bg-highlight/10 px-4 py-1.5 text-xs font-bold tracking-wide text-primary">
                  {ACADEMY.abbreviation}
                </span>
              </Reveal>
              <h2 className="mb-6 mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl">
                <MaskText text="An A-rated academy behind every officer" />
              </h2>
              <Reveal delay={0.15}>
                <p className="mb-5 text-lg leading-relaxed text-gray-700">
                  We do not inherit the quality of an officer&apos;s training — we deliver it. {ACADEMY.name} is the
                  primary feeder academy for our own roster, and a feeder academy for other security companies across
                  the DMV.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="mb-8 leading-relaxed text-gray-600">
                  Every officer completes an intensive 40-hour guard training program plus 16 further hours in customer
                  relations. Armed officers add 40 hours of weapons training and renew annually. Each instructor is
                  certified in the area in which they instruct.
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/training-academy" className="btn-highlight rounded-full px-8 py-3.5 text-center">
                    Visit the academy
                  </Link>
                  <Link
                    href="/training-academy/signup"
                    className="rounded-full border-2 border-gray-200 px-8 py-3.5 text-center font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    Sign up for training
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* The menu icons */}
      <section className="section-padding relative overflow-hidden bg-navy text-white">
        <div className="mesh-navy pointer-events-none absolute inset-0" />
        <div className="container-custom relative">
          <div className="mb-12 text-center md:mb-14">
            <h2 className="text-3xl font-bold sm:text-5xl">
              <MaskText text="Explore PGS" />
            </h2>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
                Four ways into everything we do — from the people behind the company to the academy that trains them.
              </p>
            </Reveal>
            <SwipeHint className="mt-6 justify-center text-white" />
          </div>

          <SwipeRow cols={4}>
            {MENU_ICONS.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.8, delay: index * 0.09, ease: EASE }}
                className="h-full"
              >
                <Link
                  href={item.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:bg-white/10"
                >
                  <div>
                    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent transition-transform duration-300 group-hover:scale-110">
                      <Icon name={MENU_ICON_NAMES[index] ?? "shield"} className="h-6 w-6" />
                    </span>
                    <h3 className="mb-2.5 text-xl font-bold leading-tight">{item.label}</h3>
                    <p className="text-sm leading-relaxed text-white/60">{item.blurb}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                    Open
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </SwipeRow>
        </div>
      </section>

      {/* Contact strip */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl bg-rail p-8 sm:p-10 md:flex-row md:items-center md:p-14">
            <Icon
              name="phone"
              className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 text-accent/[0.08]"
            />
            <div className="relative">
              <h2 className="mb-3 text-3xl font-bold text-primary sm:text-4xl">
                <MaskText text="Let's talk about your site" />
              </h2>
              <p className="max-w-xl leading-relaxed text-primary/70">
                Our response and escalation team is available 24 hours a day, 7 days a week.
              </p>
            </div>
            <div className="relative w-full shrink-0 text-primary md:w-auto">
              <a href={`tel:${HQ.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-2xl font-bold">
                <Icon name="phone" className="h-5 w-5 text-accent" />
                {HQ.phone}
              </a>
              <a href={`mailto:${HQ.email}`} className="mt-1 block text-sm text-accent hover:underline">
                {HQ.email}
              </a>
              <Link href="/contact" className="btn-highlight mt-5 block rounded-full px-8 py-3.5 text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ChatAssistant />
    </div>
  );
}
