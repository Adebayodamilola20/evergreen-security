"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import CTASection from "@/components/CTASection";
import { TimelineEvent, CoreValue } from "@/lib/types";
import MaskText from "@/components/motion/MaskText";
import { EASE } from "@/components/motion/ease";

const timelineEvents: TimelineEvent[] = [
  {
    year: "2000",
    title: "Foundation",
    description: "Evergreen Protective Services is founded in Washington, DC, with a mission to provide elite security solutions to government and corporate clients.",
  },
  {
    year: "2005",
    title: "National Expansion",
    description: "Expanded operations across the United States, establishing regional offices in New York, Chicago, and Los Angeles to serve a growing client base.",
  },
  {
    year: "2010",
    title: "International Launch",
    description: "Opened international headquarters in London, UK, marking the beginning of global operations and cross-border security services.",
  },
  {
    year: "2013",
    title: "Nigeria Operations",
    description: "Established operations in Abuja, Nigeria, providing critical security support for oil & gas, diplomatic missions, and corporate clients in West Africa.",
  },
  {
    year: "2016",
    title: "Airport Security Division",
    description: "Launched dedicated Airport Security division, securing major international airports with comprehensive screening, patrol, and emergency response services.",
  },
  {
    year: "2019",
    title: "Executive Protection Division",
    description: "Formed specialized Executive Protection division, providing close protection services for high-profile individuals, corporate executives, and diplomatic personnel.",
  },
  {
    year: "2022",
    title: "Technology Integration",
    description: "Invested in advanced security technology including AI-powered surveillance systems, biometric access control, and real-time threat detection platforms.",
  },
  {
    year: "2025",
    title: "Global Leadership",
    description: "Recognized as a leading international security provider with operations across 15+ countries, serving Fortune 500 companies, government agencies, and international organizations.",
  },
];

const coreValues: CoreValue[] = [
  {
    title: "Integrity",
    description: "We operate with unwavering ethical standards, transparency, and honesty in every aspect of our operations.",
  },
  {
    title: "Excellence",
    description: "We pursue the highest standards of service quality, continuously improving our capabilities and performance.",
  },
  {
    title: "Professionalism",
    description: "Our team embodies the highest level of conduct, appearance, and competence in the security industry.",
  },
  {
    title: "Innovation",
    description: "We leverage cutting-edge technology and forward-thinking strategies to stay ahead of emerging threats.",
  },
  {
    title: "Teamwork",
    description: "Collaboration and communication drive our success, both within our organization and with our clients.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-evergreen rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            <MaskText text="About Us" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A legacy of trust, professionalism, and excellence in global security services since 2000.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -56 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: EASE }}
            >
              <h2 className="text-4xl font-bold text-navy tracking-tight mb-6">Our Story</h2>
              <div className="w-20 h-1 mb-6" style={{ backgroundColor: "#2d7a3a" }} />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Evergreen Protective Services International was established in 2000 with a clear vision: to provide the highest standard of security services to clients who demand nothing less than excellence. What began as a regional security provider has grown into an international organization with operations spanning North America, Europe, and Africa.
                </p>
                <p>
                  Over the past two decades, we have built a reputation for reliability, professionalism, and innovation. Our team comprises former military personnel, law enforcement veterans, and security specialists who bring unparalleled expertise to every assignment.
                </p>
                <p>
                  Today, Evergreen serves Fortune 500 companies, government agencies, airports, and diplomatic missions, protecting assets and personnel across the globe. Our commitment to continuous improvement and client satisfaction remains the cornerstone of our success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 56 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: EASE }}
              className="bg-gray-50 rounded-2xl p-10 border border-gray-100"
            >
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-3">Our Mission</h3>
                  <p className="text-gray-600">
                    To deliver exceptional security solutions that protect our clients&apos; people, assets, and reputation through professional service, innovative technology, and unwavering commitment to excellence.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-3">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the global benchmark for security services, recognized for our integrity, professionalism, and ability to adapt to the evolving security landscape while maintaining the highest standards of service delivery.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide every decision and action we take."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 56 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: index * 0.1, ease: EASE }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-evergreen mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Company Timeline"
            subtitle="Our journey from a regional security provider to an international leader."
          />
          <Timeline events={timelineEvents} />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Commitment to Safety & Clients"
            subtitle="Every engagement is built on a foundation of safety, trust, and client-centric service."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: EASE }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-navy mb-4">Commitment to Safety</h3>
              <p className="text-gray-600 leading-relaxed">
                Safety is at the core of everything we do. Our comprehensive safety protocols, regular training programs, and rigorous operational procedures ensure that every assignment is executed with the highest regard for the well-being of our personnel, clients, and the public. We maintain strict adherence to OSHA standards, industry best practices, and regulatory requirements across all jurisdictions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-navy mb-4">Commitment to Clients</h3>
              <p className="text-gray-600 leading-relaxed">
                Our clients are our partners. We invest time in understanding their unique security challenges, organizational culture, and operational requirements. This client-first approach enables us to deliver tailored solutions that align with specific needs and budgets. Regular communication, performance reporting, and strategic reviews ensure that our services consistently exceed expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Partner with a Trusted Security Leader"
        subtitle="Discover how Evergreen Protective Services can safeguard your organization with professional security solutions."
        buttonText="Contact Us Today"
        buttonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/services"
      />
    </>
  );
}
