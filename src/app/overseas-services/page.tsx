"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { OverseasService, OverseasLocation } from "@/lib/types";

const overseasServices: OverseasService[] = [
  {
    title: "International Operations",
    description:
      "Comprehensive security operations across multiple continents, providing consistent protection for multinational organizations, diplomatic missions, and international businesses. Our global infrastructure enables seamless security delivery across borders with standardized protocols and local expertise.",
    features: [
      "Multi-continent operational capability",
      "Standardized security protocols globally",
      "Local expertise in each region",
      "24/7 global operations center",
      "Cross-border coordination",
    ],
  },
  {
    title: "Overseas Security Support",
    description:
      "Dedicated security support for organizations operating in foreign environments, including expatriate protection, facility security, and operational security management for international projects and missions.",
    features: [
      "Expatriate security and evacuation planning",
      "International facility protection",
      "Travel security management",
      "Local security force integration",
      "Emergency response coordination",
    ],
  },
  {
    title: "Global Partnerships",
    description:
      "Strategic partnerships with vetted security providers worldwide, enabling us to deliver local expertise and resources while maintaining Evergreen's quality standards and operational oversight.",
    features: [
      "Vetted local security partners",
      "Quality assurance across all partners",
      "Unified command and control",
      "Shared intelligence networks",
      "Combined response capabilities",
    ],
  },
  {
    title: "Corporate Travel Security",
    description:
      "Comprehensive travel security services ensuring the safety of corporate travelers, including pre-travel intelligence, in-country support, secure transportation, and emergency response capabilities worldwide.",
    features: [
      "Pre-travel risk assessments",
      "Real-time travel intelligence",
      "Secure ground transportation",
      "Hotel and venue security assessments",
      "24/7 traveler support",
    ],
  },
  {
    title: "International Risk Assessments",
    description:
      "In-depth security risk assessments for international operations, evaluating political, environmental, and security risks to inform decision-making and enhance operational resilience in foreign markets.",
    features: [
      "Country-specific risk analysis",
      "Political stability assessments",
      "Security infrastructure evaluation",
      "Threat vulnerability assessments",
      "Mitigation strategy development",
    ],
  },
  {
    title: "Foreign Site Protection",
    description:
      "Comprehensive physical security for international facilities including corporate offices, manufacturing plants, warehouses, and residential compounds in challenging security environments.",
    features: [
      "Perimeter security systems",
      "Access control and screening",
      "Surveillance system installation",
      "Local security force management",
      "Crisis response planning",
    ],
  },
];

const locations: OverseasLocation[] = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    headquarters: "London",
    description:
      "Our UK operations are headquartered in London, providing comprehensive security services across the United Kingdom. We serve corporate clients, government agencies, and diplomatic missions with the full spectrum of security solutions, from manned guarding to executive protection.",
    services: ["Corporate Security", "Executive Protection", "Event Security", "Risk Consulting", "Airport Security"],
  },
  {
    country: "Nigeria",
    flag: "🇳🇬",
    headquarters: "Abuja",
    description:
      "Our Nigeria operations deliver essential security services in one of West Africa's most dynamic markets. We provide critical protection for oil & gas operations, diplomatic missions, corporate facilities, and residential compounds with deep local expertise and international standards.",
    services: ["Armed Security", "Oil & Gas Protection", "Diplomatic Security", "Residential Security", "Risk Assessment"],
  },
  {
    country: "United States",
    flag: "🇺🇸",
    headquarters: "Washington, DC",
    description:
      "Our corporate headquarters in Washington, DC serves as the hub for our global operations. From this strategic location, we coordinate international security operations and deliver services to government agencies, corporations, and institutions across North America.",
    services: ["Government Security", "Corporate Security", "Airport Security", "Executive Protection", "Training"],
  },
];

export default function OverseasServicesPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-evergreen rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tight"
          >
            Overseas Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Global security solutions delivered with local expertise and international standards.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="International Security Solutions"
            subtitle="Protecting your interests across borders with comprehensive overseas security services."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {overseasServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-evergreen/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-evergreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Global Locations"
            subtitle="Strategic offices worldwide enabling local delivery with global standards."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.country}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="text-5xl mb-4">{location.flag}</div>
                <h3 className="text-2xl font-bold text-navy mb-1">{location.country}</h3>
                <p className="text-evergreen font-medium text-sm mb-4">{location.headquarters}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{location.description}</p>
                <div className="flex flex-wrap gap-2">
                  {location.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-evergreen/5 text-evergreen text-xs font-medium rounded-full border border-evergreen/20"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="International Expansion"
            subtitle="Growing our global footprint to serve clients wherever they operate."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-10 border border-gray-100"
          >
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Evergreen Protective Services is committed to strategic international expansion, bringing our proven security solutions to new markets across the globe. Our expansion strategy is driven by client demand, market opportunity, and our commitment to providing seamless security support wherever our clients operate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { region: "North America", status: "Established" },
                { region: "Europe", status: "Established (UK)" },
                { region: "Africa", status: "Established (Nigeria)" },
                { region: "Middle East", status: "Developing" },
              ].map((item) => (
                <div key={item.region} className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="text-navy font-bold mb-2">{item.region}</h4>
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    item.status === "Established" || item.status === "Established (UK)" || item.status === "Established (Nigeria)"
                      ? "bg-evergreen/10 text-evergreen"
                      : "bg-amber-100 text-amber-700"
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Global Security, Local Expertise"
        subtitle="Contact our international team to discuss your overseas security requirements."
        buttonText="Contact International Team"
        buttonLink="/contact"
        secondaryButtonText="View Career Opportunities"
        secondaryButtonLink="/careers"
      />
    </>
  );
}
