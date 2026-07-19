"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { executives } from "@/lib/executives";
import MaskText from "@/components/motion/MaskText";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import ClipReveal from "@/components/motion/ClipReveal";
import Marquee from "@/components/motion/Marquee";
import { EASE } from "@/components/motion/ease";

// Service list from Evergreen Security
const servicesData = [
  {
    id: "corporate-security",
    title: "Corporate Security Solutions",
    description: "Comprehensive security programs tailored for corporate environments, protection of assets and personnel.",
    features: ["24/7 Security Monitoring", "Access Control Systems", "Executive Protection", "Security Risk Assessments", "Emergency Response Planning"]
  },
  {
    id: "training-development",
    title: "Security Training & Development",
    description: "World-class training programs designed to develop highly skilled security professionals for diverse operational environments.",
    features: ["Basic Security Training", "Advanced Tactical Operations", "Crisis Management", "First Responder Training", "Specialized Certifications"]
  },
  {
    id: "physical-security",
    title: "Physical Security Services",
    description: "Professional security personnel deployment for events, facilities, and high-value asset protection.",
    features: ["Event Security Management", "Facility Protection", "VIP & Executive Protection", "Armed & Unarmed Guards", "Mobile Patrol Services"]
  },
  {
    id: "surveillance",
    title: "Surveillance & Monitoring",
    description: "State-of-the-art surveillance systems and monitoring services for comprehensive situational awareness.",
    features: ["CCTV System Installation", "Remote Monitoring Services", "Alarm System Integration", "Analytics & Reporting", "24/7 Control Room Operations"]
  },
  {
    id: "consulting",
    title: "Security Consulting",
    description: "Expert advisory services to develop and optimize your organization's security strategy and operations.",
    features: ["Security Assessments", "Policy Development", "Compliance Audits", "Strategic Planning", "Vendor Management"]
  }
];

// Testimonials data
const testimonials = [
  {
    author: "CHI Limited",
    initials: "JM",
    quote: "Evergreen Security transformed our corporate security infrastructure. Their professionalism and expertise are unmatched. Highly recommended!"
  },
  {
    author: "MTN Nigeria",
    initials: "SA",
    quote: "The training programs are world-class. Our security team is now more confident and capable than ever before. Excellent investment!"
  },
  {
    author: "Ardova PLC",
    initials: "DW",
    quote: "Outstanding service! Their event security management for our annual conference was flawless. Professional team, highly efficient."
  },
  {
    author: "Cumming West Africa",
    initials: "ER",
    quote: "Best security partner we've ever worked with. Their attention to detail and rapid response capabilities are exceptional. Five stars!"
  }
];

// Number that counts up from 0 when it scrolls into view
function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const steps = 60;
    const increment = end / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const HERO_LINES = [
  "Your Safety Isn't",
  "Just a Priority—",
  "It's Our Legacy in Motion.",
];

export default function Home() {
  // Hero Carousel state (commented out — using single static image)
  // const [heroIndex, setHeroIndex] = useState(0);
  // const heroImages = [
  //   "/assets/IMG_2209-DzMGkYV8.jpg",
  //   "/assets/IMG_2208-4pFdTGct.jpg",
  //   "/assets/IMG_2171-Dy9n0K0G.jpg",
  //   "/assets/IMG_2232-D8S3-a-x.jpg"
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setHeroIndex((prev) => (prev + 1) % heroImages.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [heroImages.length]);

  // Scroll-driven hero motion: as the next section rises over the pinned
  // hero, the background drifts down (parallax) while the copy lifts away
  // and fades — the hero feels like it recedes instead of just sitting there.
  const { scrollY } = useScroll();
  const heroImgY = useTransform(scrollY, [0, 900], [0, 180]);
  const heroImgScale = useTransform(scrollY, [0, 900], [1, 1.12]);
  const heroContentY = useTransform(scrollY, [0, 700], [0, -110]);
  const heroContentOpacity = useTransform(scrollY, [100, 650], [1, 0]);

  // Chatbot state
  const [chatOpen, setChatOpen] = useState(false);
  const [chatPulse, setChatPulse] = useState(false);
  const [messages, setMessages] = useState<Array<{ id: number; text: string; sender: "user" | "ai" }>>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Lead capture — the visitor must submit their details before chatting
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadError, setLeadError] = useState("");

  // Scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Trigger chat pulse alert occasionally
  useEffect(() => {
    const interval = setInterval(() => {
      setChatPulse(true);
      const timer = setTimeout(() => setChatPulse(false), 5000);
      return () => clearTimeout(timer);
    }, 15000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMsg = inputValue.trim();
    const userMessage = { id: Date.now(), text: userMsg, sender: "user" as const };
    const history = [...messages, userMessage];
    setMessages(history);
    setInputValue("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead: {
            fullName: leadName.trim(),
            email: leadEmail.trim(),
            phone: leadPhone.trim(),
          },
          messages: history.map((m) => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text,
          })),
        }),
      });
      const data = await res.json();
      const reply =
        data.reply || data.error || "Sorry, something went wrong. Please try again.";
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: reply, sender: "ai" }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "🔌 Connection error. Please check your network and try again.",
          sender: "ai",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    const name = leadName.trim() || "there";
    setMessages([
      {
        id: Date.now(),
        text: `Hello ${name}, good day to you! 👋 How may I help you with our services, training, or staff details today?`,
        sender: "ai"
      }
    ]);
  };

  // Handle the contact form the visitor fills in before chatting
  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    const name = leadName.trim();
    const email = leadEmail.trim();
    const phone = leadPhone.trim();

    if (!name || !email || !phone) {
      setLeadError("Please fill in your full name, email, and phone number.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setLeadError("Please enter a valid email address.");
      return;
    }

    setLeadError("");
    setLeadSubmitted(true);

    // The assistant's first message greets the visitor by the name they entered
    setMessages([
      {
        id: Date.now(),
        text: `Hello ${name}, good day to you! 👋 Welcome to Evergreen Security. How may I be of help today?`,
        sender: "ai"
      }
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50 curtain-flow">
      {/* 1. Hero Carousel Section */}
      <section className="curtain-pin curtain-hero relative min-h-[90vh] md:min-h-screen flex items-center justify-start overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              style={{ y: heroImgY, scale: heroImgScale }}
            >
              <motion.img
                src="/assets/jonney .jpg"
                alt="Hero background"
                className="w-full h-full object-cover"
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 7, ease: "easeOut" }}
              />
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        <motion.div
          className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-white mt-16 md:mt-24"
          style={{ y: heroContentY, opacity: heroContentOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="max-w-4xl text-left pl-0"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight max-w-3xl">
              {HERO_LINES.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    className={`block ${i === 2 ? "text-white italic drop-shadow-lg" : ""}`}
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
              className="text-lg md:text-2xl mb-10 max-w-2xl text-white leading-relaxed drop-shadow-md"
            >
              We don&apos;t just protect spaces, we secure futures. Bridging the gap between security, technology, and visionary protection.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-navy hover:bg-white/90 text-center text-lg font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                Join Our Team
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-white border-2 border-white/30 rounded-full transition-all duration-300 hover:bg-white hover:text-navy hover:border-white hover:scale-105"
              >
                <span className="mr-2 text-xl">▷</span> Gallery
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Stats Section */}
      <section className="curtain-pin curtain-stats section-padding bg-navy text-white py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {[
              { end: 21, suffix: "+", label: "Years Experience" },
              { end: 12000, suffix: "+", label: "Trained Professionals" },
              { end: 60, suffix: "+", label: "Corporate Clients" },
              { end: 7, suffix: "+", label: "Countries Served" }
            ].map((item, index) => (
              <div key={item.label} className="p-4 overflow-hidden">
                <motion.div
                  initial={{ y: "80%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.08, ease: EASE }}
                >
                  <p className="text-3xl sm:text-5xl font-extrabold text-white mb-2">
                    <CountUp end={item.end} suffix={item.suffix} />
                  </p>
                  <p className="text-sm sm:text-lg text-white font-medium">{item.label}</p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Scroll-reactive client marquee — drifts on its own, accelerates
              with the user's scroll */}
          <div className="mt-12 border-t border-white/10 pt-10">
            <Marquee speed={5} className="items-baseline gap-16 pr-16 text-5xl sm:text-7xl font-bold tracking-tight text-white/10 select-none">
              {["CHI Limited", "MTN Nigeria", "Ardova PLC", "Cumming West Africa"].map((client) => (
                <span key={client} className="flex items-baseline gap-16">
                  <span>{client}</span>
                  <span className="text-accent/40 text-3xl">✦</span>
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* 4. Who We Are Section */}
      <section className="curtain-pin curtain-who section-padding bg-gray-50 border-y border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal y={20}>
                <div className="inline-block bg-highlight/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4">
                  WHO WE ARE
                </div>
              </Reveal>
              <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
                <MaskText text="Setting the Standard in Security Excellence" />
              </h2>
              <Reveal delay={0.15}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Evergreen Security is a premier provider of comprehensive security solutions, combining cutting-edge technology with decades of expertise to deliver unparalleled protection for businesses and organizations worldwide.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our team of certified professionals brings together military, law enforcement, and corporate security experience to create customized solutions that address your unique security challenges.
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <Link href="/about" className="btn-highlight inline-flex items-center text-lg px-8 py-3 rounded-full">
                  Learn More About Us
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </Reveal>
            </div>

            <motion.div
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, margin: "-10%" }}
              variants={{ inView: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                {
                  title: "Secured Logistics",
                  desc: "Combines security and technology to move goods efficiently.",
                  icon: (
                    <svg className="w-8 h-8 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V15a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17h14" />
                    </svg>
                  )
                },
                {
                  title: "Award Winning",
                  desc: "Recognized for exceptional service delivery globally.",
                  icon: (
                    <svg className="w-8 h-8 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0L4 9.53a2 2 0 00-1 1.73V17a2 2 0 002 2h14a2 2 0 002-2v-5.74a2 2 0 00-1-1.73L12 8z" />
                    </svg>
                  )
                },
                {
                  title: "Expert Team",
                  desc: "Highly trained security professionals with field experience.",
                  icon: (
                    <svg className="w-8 h-8 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: "Global Reach",
                  desc: "International security standards across global locations.",
                  icon: (
                    <svg className="w-8 h-8 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.945M11 20.955V18a2 2 0 00-2-2v-1a2 2 0 00-2-2v-3a2 2 0 00-2-2V3.055m12.35 15.68a9 9 0 11-12.728 0" />
                    </svg>
                  )
                }
              ].map((value) => (
                <motion.div
                  key={value.title}
                  variants={{
                    initial: { opacity: 0, y: 48 },
                    inView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
                  }}
                  className="bg-gradient-to-br from-navy to-navy-light text-white p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 shadow-md border border-white/5 flex flex-col items-start gap-4"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold leading-tight">{value.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. What We Offer (Services) Section */}
      <section className="curtain-pin curtain-services section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Reveal y={20}>
              <div className="inline-block bg-highlight/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                WHAT WE OFFER
              </div>
            </Reveal>
            <h2 className="text-3xl sm:text-5xl font-bold text-navy mb-4">
              <MaskText text="Comprehensive Security Solutions" />
            </h2>
            <Reveal delay={0.2}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From corporate security to specialized training, we provide end-to-end solutions tailored to your unique operational needs.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 64 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, delay: (index % 3) * 0.12, ease: EASE }}
                className="group h-full bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 rounded-2xl p-8 flex flex-col justify-between border-t-4 border-t-transparent hover:border-t-accent"
              >
                <div>
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-highlight/20 transition-colors duration-300">
                    <svg className="w-7 h-7 text-accent group-hover:text-highlight transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 leading-tight">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
                </div>
                <ul className="space-y-2.5 text-sm text-gray-500 border-t border-gray-100 pt-6">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-highlight rounded-full mr-3 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/services" className="btn-highlight inline-flex items-center text-lg px-8 py-3 rounded-full">
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Training Section */}
      <section className="curtain-pin curtain-training section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ClipReveal className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] border border-white/5">
              <Parallax amount={8} className="h-full w-full">
                <img
                  src="/assets/bingi3.jpg"
                  alt="Security Training"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </Parallax>
            </ClipReveal>

            <div className="space-y-8">
              <Reveal y={20}>
                <div className="inline-block bg-highlight/20 text-highlight px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
                  TRAINING & DEVELOPMENT
                </div>
              </Reveal>
              <h2 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
                <MaskText text="World-Class Security Training Programs" />
              </h2>
              <Reveal delay={0.15}>
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  Our comprehensive training programs are designed to develop highly skilled security professionals capable of handling diverse situations with confidence, discipline, and tactical expertise.
                </p>
              </Reveal>
              <motion.ul
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                initial="initial"
                whileInView="inView"
                viewport={{ once: true, margin: "-10%" }}
                variants={{ inView: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } } }}
              >
                {["Basic Security Training", "Advanced Tactical Operations", "Crisis Management", "Specialized Certifications"].map((program, idx) => (
                  <motion.li
                    key={idx}
                    variants={{
                      initial: { opacity: 0, x: -24 },
                      inView: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
                    }}
                    className="flex items-center text-gray-200 text-sm sm:text-base"
                  >
                    <span className="w-2.5 h-2.5 bg-highlight rounded-full mr-3 flex-shrink-0" />
                    {program}
                  </motion.li>
                ))}
              </motion.ul>
              <Reveal delay={0.4}>
                <Link href="/training" className="btn-highlight inline-flex items-center text-lg px-8 py-3.5 rounded-full">
                  Explore Training Programs
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Meet Our Directors (Executive Staff) */}
      <section className="curtain-pin curtain-directors section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Reveal y={20}>
              <div className="inline-block bg-highlight/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                LEADERSHIP TEAM
              </div>
            </Reveal>
            <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-4 leading-tight">
              <MaskText text="Meet Our Directors" />
            </h2>
            <Reveal delay={0.2}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experienced leaders driving innovation, integrity, and operational excellence in security solutions worldwide.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {executives.slice(0, 3).map((director, index) => (
              <motion.div
                key={director.slug}
                initial={{ opacity: 0, y: 64 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, delay: index * 0.12, ease: EASE }}
              >
                <Link href={`/executive-staff/${director.slug}`} className="group block h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
                    <div className="relative h-64 overflow-hidden bg-navy flex items-center justify-center">
                      <span className="text-7xl font-bold text-white/10 select-none">
                        {director.name.split(" ").map((n: string) => n[0]).filter(Boolean).join("")}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                        <h3 className="text-xl font-bold leading-tight mb-1 group-hover:text-highlight transition-colors">
                          {director.name}
                        </h3>
                        <p className="text-sm text-highlight font-semibold">{director.role}</p>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                        {director.bio}
                      </p>
                      <div className="text-sm font-bold text-accent group-hover:text-highlight flex items-center gap-1.5 transition-colors">
                        View Full Profile
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/executive-staff" className="btn-highlight inline-flex items-center text-lg px-8 py-3 rounded-full">
              See More Directors
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Client Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Reveal y={20}>
              <div className="inline-block bg-highlight/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                CLIENT TESTIMONIALS
              </div>
            </Reveal>
            <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-4 leading-tight">
              <MaskText text="What Our Clients Say" />
            </h2>
            <Reveal delay={0.2}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by industry leaders worldwide for exceptional security solutions, reliable rapid response, and client care.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((test, index) => (
              <motion.div
                key={test.author}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: EASE }}
                className="bg-gray-50 border-l-4 border-l-accent p-6 rounded-r-xl flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-highlight fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed text-sm mb-6">
                    "{test.quote}"
                  </p>
                </div>
                <div className="flex items-center border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    {test.initials}
                  </div>
                  <h4 className="font-bold text-primary text-sm sm:text-base">{test.author}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Floating Chatbot Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Chat window */}
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 w-[92vw] sm:w-[400px] h-[500px] flex flex-col overflow-hidden mb-4"
            >
              {/* Header */}
              <div className="bg-primary text-white p-4 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-highlight flex items-center justify-center text-primary font-bold">
                    🛡️
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Evergreen Assistant</h4>
                    <p className="text-[10px] text-highlight font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      Online • AI Assistant
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={clearChat}
                    title="Clear Conversation"
                    className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/80 hover:text-white"
                  >
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setChatOpen(false)}
                    className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/80 hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {!leadSubmitted ? (
                /* Lead-capture form — the visitor must submit this before chatting */
                <form onSubmit={handleSubmitLead} className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
                  <p className="text-sm text-gray-600">
                    Please share your details to start chatting with our assistant.
                  </p>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="lead-name" className="text-xs font-semibold text-primary">Full name</label>
                    <input
                      id="lead-name"
                      type="text"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="Jane Doe"
                      className="border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="lead-email" className="text-xs font-semibold text-primary">Email</label>
                    <input
                      id="lead-email"
                      type="email"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="lead-phone" className="text-xs font-semibold text-primary">Phone number</label>
                    <input
                      id="lead-phone"
                      type="tel"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      placeholder="+234 803 000 0000"
                      className="border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                    />
                  </div>
                  {leadError && <p className="text-xs text-red-500">{leadError}</p>}
                  <button
                    type="submit"
                    className="mt-1 bg-accent text-white rounded-xl px-4 py-2.5 text-sm font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Submit &amp; start chat
                  </button>
                </form>
              ) : (
                <>
              {/* Message List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={chatEndRef}>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col max-w-[85%] ${
                      msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                    }`}
                  >
                    <div
                      className={`p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-line ${
                        msg.sender === "user"
                          ? "bg-accent text-white rounded-br-none"
                          : "bg-gray-100 text-gray-800 rounded-bl-none border border-gray-200"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="mr-auto items-start max-w-[85%] flex flex-col">
                    <div className="p-3 bg-gray-100 border border-gray-200 rounded-2xl rounded-bl-none flex items-center gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-3 border-t border-gray-200 bg-white flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="Ask about training, services, contact..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage?.()}
                  className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-gray-700 bg-gray-50"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-accent text-white p-2 rounded-xl hover:bg-accent/90 disabled:opacity-50 transition-colors"
                >
                  <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Bubble button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 border border-white/10 ${
            chatOpen ? "bg-primary text-white rotate-90" : "bg-accent hover:bg-accent/90 text-white"
          } ${chatPulse && !chatOpen ? "animate-bounce" : "hover:scale-110"}`}
          aria-label="Toggle Chat assistant"
        >
          {chatOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
