"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import { EASE } from "@/components/motion/ease";
import MaskText from "@/components/motion/MaskText";
import Reveal from "@/components/motion/Reveal";

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "/assets/binji2.jpg",
      alt: "Security team in action",
    },
    {
      src: "/assets/bing4.jpg",
      alt: "Executive protection detail",
    },
    {
      src: "/assets/bingi.jpg",
      alt: "Airport security operations",
    },
    {
      src: "/assets/bingi5.jpg",
      alt: "Corporate security patrol",
    },
    {
      src: "/assets/bingo.jpg",
      alt: "CCTV monitoring center",
    },
    {
      src: "/assets/bingo2.jpg",
      alt: "Access control system",
    },
    {
      src: "/assets/bingo3.jpg",
      alt: "Security training exercise",
    },
  ];

  return (
    <>
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
              <MaskText text="Our Gallery" />
            </h2>
            <motion.div
              className="w-20 h-1 mt-4 mx-auto"
              style={{ backgroundColor: "#2d7a3a" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            />
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                A visual journey through our security operations, training, and
                commitment to excellence.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.12 }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, delay: (index % 3) * 0.12, ease: EASE }}
                className="group relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Security Operations
                  </h3>
                  <p className="text-white/90 text-sm">
                    Professional security services in action
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="See Our Security Excellence in Action"
        subtitle="Contact us to learn more about our comprehensive security solutions and how we can protect your organization."
        buttonText="Request Consultation"
        buttonLink="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
      />
    </>
  );
}