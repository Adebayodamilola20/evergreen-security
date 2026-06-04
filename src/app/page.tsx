"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { executives } from "@/lib/executives";

// Service list from Proton Security
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
    quote: "Proton Security transformed our corporate security infrastructure. Their professionalism and expertise are unmatched. Highly recommended!"
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

  // Chatbot state
  const [chatOpen, setChatOpen] = useState(false);
  const [chatPulse, setChatPulse] = useState(false);
  const [messages, setMessages] = useState<Array<{ id: number; text: string; sender: "user" | "ai" }>>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 1,
          text: "Hello! I'm the Proton Security AI assistant. How can I help you with our services, training, or staff details today?",
          sender: "ai"
        }
      ]);
    }
  }, [messages.length]);

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

  const handleSendMessage = () => {
    if (!inputValue.trim() || isTyping) return;

    const userMsg = inputValue.trim();
    setMessages((prev) => [...prev, { id: Date.now(), text: userMsg, sender: "user" }]);
    setInputValue("");
    setIsTyping(true);

    // Simulated local AI chatbot logic
    setTimeout(() => {
      const lower = userMsg.toLowerCase();
      let response = "";

      if (lower.includes("address") || lower.includes("location") || lower.includes("where")) {
        response = "🏢 **Our Address**:\n10 Jibowo Street, Yaba, Lagos, Nigeria.";
      } else if (lower.includes("email") || lower.includes("mail") || lower.includes("contact")) {
        response = "✉️ **Email Us**:\ninfo@protonsecurity.com / operations@protonsecurity.com";
      } else if (lower.includes("phone") || lower.includes("call") || lower.includes("number") || lower.includes("phone number")) {
        response = "📞 **Phone Contacts**:\n+234 803 202 3600\n+234 805 120 4500";
      } else if (lower.includes("service") || lower.includes("offer") || lower.includes("what do you do")) {
        response = "🛡️ **Our Premier Services**:\n• **Corporate Security Solutions**\n• **Security Training & Development**\n• **Physical Security Services**\n• **Surveillance & Monitoring**\n• **Security Consulting**";
      } else if (lower.includes("training") || lower.includes("course") || lower.includes("class")) {
        response = "🎓 **Security Training Programs**:\n• **Basic Security Guard Training** (2 weeks)\n• **Advanced Tactical Operations** (4 weeks)\n• **Crisis Management & First Aid** (1 week)\n• **Executive Protection Specialist** (6 weeks)";
      } else if (lower.includes("director") || lower.includes("board") || lower.includes("staff") || lower.includes("manager") || lower.includes("who is")) {
        response = "👥 **Executive Staff & Board**:\nOur Board of Directors is led by **AYODEJI BAMGBOSE (Chairman)**. The operations and management team includes **Prince Adekunmi Odebunmi (Managing Director)**, **Dr. Olumide Olayinka (Director of Admin & Finance)**, and **Olabisi Familusi (Director of Business Development)**. You can view their full profiles on our Executive Staff page!";
      } else {
        response = "Thank you for reaching out to Proton Security support. Our team is dedicated to providing visionary protection and world-class training. Is there anything specific you would like to know about our armed guard deployments or security assessments?";
      }

      setMessages((prev) => [...prev, { id: Date.now() + 1, text: response, sender: "ai" }]);
      setIsTyping(false);
    }, 1200);
  };

  const clearChat = () => {
    setMessages([
      {
        id: Date.now(),
        text: "Hello! I'm the Proton Security AI assistant. How can I help you with our services, training, or staff details today?",
        sender: "ai"
      }
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* 1. Hero Carousel Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-start overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <img
              src="/assets/jonney .jpg"
              alt="Hero background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-white mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl text-left pl-0"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight max-w-3xl">
              Your Safety Isn&apos;t <br />Just a Priority— <br />
              <span className="text-white italic drop-shadow-lg">It&apos;s Our Legacy in Motion.</span>
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-2xl text-white leading-relaxed drop-shadow-md">
              We don&apos;t just protect spaces, we secure futures. Bridging the gap between security, technology, and visionary protection.
            </p>
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
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="section-padding bg-navy text-white py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {[
              { stat: "21+", label: "Years Experience" },
              { stat: "12,000+", label: "Trained Professionals" },
              { stat: "60+", label: "Corporate Clients" },
              { stat: "7+", label: "Countries Served" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4"
              >
                <p className="text-3xl sm:text-5xl font-extrabold text-white mb-2">{item.stat}</p>
                <p className="text-sm sm:text-lg text-white font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Who We Are Section */}
      <section className="section-padding bg-gray-50 border-y border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-highlight/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4">
                WHO WE ARE
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
                Setting the Standard in Security Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Proton Security is a premier provider of comprehensive security solutions, combining cutting-edge technology with decades of expertise to deliver unparalleled protection for businesses and organizations worldwide.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of certified professionals brings together military, law enforcement, and corporate security experience to create customized solutions that address your unique security challenges.
              </p>
              <Link href="/about" className="btn-highlight inline-flex items-center text-lg px-8 py-3 rounded-full">
                Learn More About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                <div
                  key={value.title}
                  className="bg-gradient-to-br from-navy to-navy-light text-white p-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md border border-white/5 flex flex-col items-start gap-4"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold leading-tight">{value.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. What We Offer (Services) Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-highlight/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
              WHAT WE OFFER
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-navy mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From corporate security to specialized training, we provide end-to-end solutions tailored to your unique operational needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 rounded-2xl p-8 flex flex-col justify-between border-t-4 border-t-transparent hover:border-t-accent"
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
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] border border-white/5"
            >
              <img
                src="/assets/bingi3.jpg"
                alt="Security Training"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="inline-block bg-highlight/20 text-highlight px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
                TRAINING & DEVELOPMENT
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
                World-Class Security Training Programs
              </h2>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Our comprehensive training programs are designed to develop highly skilled security professionals capable of handling diverse situations with confidence, discipline, and tactical expertise.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {["Basic Security Training", "Advanced Tactical Operations", "Crisis Management", "Specialized Certifications"].map((program, idx) => (
                  <li key={idx} className="flex items-center text-gray-200 text-sm sm:text-base">
                    <span className="w-2.5 h-2.5 bg-highlight rounded-full mr-3 flex-shrink-0" />
                    {program}
                  </li>
                ))}
              </ul>
              <Link href="/training" className="btn-highlight inline-flex items-center text-lg px-8 py-3.5 rounded-full">
                Explore Training Programs
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Meet Our Directors (Executive Staff) */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-highlight/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              LEADERSHIP TEAM
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-4 leading-tight">
              Meet Our Directors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced leaders driving innovation, integrity, and operational excellence in security solutions worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {executives.slice(0, 3).map((director, index) => (
              <motion.div
                key={director.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/executive-staff/${director.slug}`} className="group block h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100 flex flex-col h-full">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-highlight/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              CLIENT TESTIMONIALS
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-4 leading-tight">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by industry leaders worldwide for exceptional security solutions, reliable rapid response, and client care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((test, index) => (
              <motion.div
                key={test.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 border-l-4 border-l-accent p-6 rounded-r-xl flex flex-col justify-between hover:shadow-lg transition-all duration-300"
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
                    <h4 className="font-bold text-sm">Proton Assistant</h4>
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
