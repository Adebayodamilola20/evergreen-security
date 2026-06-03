"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
              Our Gallery
            </h2>
            <div className="w-20 h-1 mt-4 mx-auto" style={{ backgroundColor: "#2d7a3a" }} />
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              A visual journey through our security operations, training, and
              commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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