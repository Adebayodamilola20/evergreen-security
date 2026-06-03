"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { Service } from "@/lib/types";

const services: Service[] = [
  {
    title: "Security Guard Services",
    description:
      "Professional uniformed security officers trained to protect your premises, assets, and personnel. Our officers are carefully vetted, trained, and equipped to handle a wide range of security scenarios with professionalism and discretion.",
    benefits: [
      "24/7 professional security presence",
      "Deterrence against theft and vandalism",
      "Immediate incident response",
      "Regular security patrols",
      "Professional customer service interaction",
    ],
    useCases: ["Corporate Offices", "Retail Centers", "Residential Communities", "Industrial Facilities"],
  },
  {
    title: "Armed Security Services",
    description:
      "Highly trained armed security personnel for high-risk environments requiring enhanced protection. Our armed officers undergo rigorous training, certification, and continuous assessment to ensure the highest standards of safety and professionalism.",
    benefits: [
      "Enhanced threat deterrence",
      "Qualified and licensed personnel",
      "Rapid response capability",
      "High-risk environment expertise",
      "Strict compliance with regulations",
    ],
    useCases: ["Government Facilities", "Financial Institutions", "High-Value Assets", "Executive Protection"],
  },
  {
    title: "Corporate Security",
    description:
      "Comprehensive security solutions tailored to corporate environments, protecting your business operations, employees, and assets while maintaining a professional and welcoming atmosphere.",
    benefits: [
      "Customized security protocols",
      "Employee and visitor safety",
      "Asset protection",
      "Business continuity support",
      "Professional corporate image",
    ],
    useCases: ["Corporate Headquarters", "Office Parks", "Business Centers", "Tech Campuses"],
  },
  {
    title: "Executive Protection",
    description:
      "Elite close protection services for high-profile individuals, corporate executives, and VIPs. Our executive protection specialists are former military and law enforcement professionals trained in advanced protective operations.",
    benefits: [
      "Personal security detail",
      "Advance route planning",
      "Secure transportation",
      "Residence security",
      "Travel security coordination",
    ],
    useCases: ["CEOs & Executives", "High-Net-Worth Individuals", "Diplomatic Personnel", "Public Figures"],
  },
  {
    title: "Airport Security",
    description:
      "Comprehensive airport security solutions including perimeter patrol, terminal security, baggage screening, access control, and emergency response coordination for commercial and private aviation facilities.",
    benefits: [
      "TSA compliance support",
      "Perimeter and terminal security",
      "Passenger and baggage screening",
      "Emergency response protocols",
      "24/7 surveillance integration",
    ],
    useCases: ["International Airports", "Regional Airports", "Private Airfields", "Cargo Facilities"],
  },
  {
    title: "Patrol & Response Services",
    description:
      "Visible security patrol presence that deters criminal activity and provides rapid response to security incidents. Our patrol units are equipped with advanced communication systems and vehicles for maximum coverage.",
    benefits: [
      "Visible deterrent presence",
      "Rapid incident response",
      "Regular security assessments",
      "GPS-tracked patrol routes",
      "Real-time reporting",
    ],
    useCases: ["Business Districts", "Industrial Parks", "Residential Areas", "Construction Sites"],
  },
  {
    title: "Mobile Patrol",
    description:
      "Dynamic mobile patrol services providing flexible security coverage across multiple sites. Our mobile units conduct random and scheduled patrols to maximize security effectiveness and response capabilities.",
    benefits: [
      "Flexible coverage area",
      "Randomized patrol patterns",
      "Quick deployment",
      "Multi-site coverage",
      "Cost-effective solution",
    ],
    useCases: ["Multiple Business Locations", "Warehouse Districts", "Parking Facilities", "Remote Sites"],
  },
  {
    title: "CCTV Monitoring",
    description:
      "State-of-the-art video surveillance monitoring services with real-time threat detection, incident recording, and proactive security response coordination from our centralized operations center.",
    benefits: [
      "24/7 real-time monitoring",
      "Advanced threat detection",
      "Incident documentation",
      "Remote site visibility",
      "Integration with on-site security",
    ],
    useCases: ["Retail Chains", "Corporate Campuses", "Critical Infrastructure", "Public Spaces"],
  },
  {
    title: "Access Control",
    description:
      "Comprehensive access control solutions including biometric systems, key card management, visitor management, and integrated security checkpoints to regulate and monitor facility entry.",
    benefits: [
      "Controlled facility access",
      "Visitor tracking and management",
      "Integration with security systems",
      "Audit trail documentation",
      "Enhanced perimeter security",
    ],
    useCases: ["Office Buildings", "Government Facilities", "Research Centers", "Data Centers"],
  },
  {
    title: "Event Security",
    description:
      "Professional security services for events of all sizes, from corporate gatherings to large-scale public events. Our team manages crowd control, access screening, and emergency response planning.",
    benefits: [
      "Comprehensive event planning",
      "Crowd management expertise",
      "VIP protection integration",
      "Emergency medical support",
      "Post-event security review",
    ],
    useCases: ["Corporate Events", "Public Gatherings", "Sporting Events", "Conferences & Galas"],
  },
  {
    title: "Risk Assessment",
    description:
      "Thorough security risk assessments that identify vulnerabilities, evaluate threats, and provide actionable recommendations to enhance your security posture and resilience.",
    benefits: [
      "Comprehensive vulnerability analysis",
      "Threat identification and prioritization",
      "Customized mitigation strategies",
      "Compliance gap analysis",
      "Cost-effective security planning",
    ],
    useCases: ["New Facility Setup", "Security Audit", "Expansion Planning", "Insurance Requirements"],
  },
  {
    title: "Security Consulting",
    description:
      "Expert security consulting services providing strategic guidance on security program development, implementation, and optimization for organizations of all sizes and industries.",
    benefits: [
      "Strategic security planning",
      "Program development and implementation",
      "Policy and procedure development",
      "Security technology advisory",
      "Training program design",
    ],
    useCases: ["Organizational Security Review", "New Program Development", "Regulatory Compliance", "Crisis Preparedness"],
  },
  {
    title: "Counter Terrorism Support",
    description:
      "Specialized counter terrorism services including threat assessment, vulnerability analysis, preventive measures, and response planning for organizations facing elevated security risks.",
    benefits: [
      "Advanced threat assessment",
      "Preventive security measures",
      "Emergency response planning",
      "Staff awareness training",
      "Coordination with authorities",
    ],
    useCases: ["Government Buildings", "Critical Infrastructure", "High-Profile Events", "Transportation Hubs"],
  },
  {
    title: "Security Training",
    description:
      "Comprehensive security training programs designed to enhance the capabilities of security personnel and prepare organizations to handle security challenges effectively.",
    benefits: [
      "Professional skill development",
      "Certification programs",
      "Scenario-based training",
      "Continuous learning culture",
      "Industry-recognized credentials",
    ],
    useCases: ["Security Officer Development", "Corporate Security Teams", "Management Training", "Specialized Skills"],
  },
  {
    title: "Emergency Response Services",
    description:
      "Rapid emergency response services including crisis management, evacuation coordination, medical emergency response, and disaster recovery support to ensure business continuity.",
    benefits: [
      "Immediate emergency response",
      "Crisis management expertise",
      "Evacuation coordination",
      "Medical emergency support",
      "Business continuity planning",
    ],
    useCases: ["Medical Emergencies", "Natural Disasters", "Security Incidents", "Facility Emergencies"],
  },
];

export default function ServicesPage() {
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive security solutions designed to protect your people, assets, and operations.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What We Offer"
            subtitle="From manned guarding to advanced surveillance, our services cover every aspect of professional security."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Custom Security Solution?"
        subtitle="Contact our security consultants to discuss your specific requirements and receive a tailored security proposal."
        buttonText="Request Consultation"
        buttonLink="/contact"
        secondaryButtonText="Learn About Training"
        secondaryButtonLink="/training"
      />
    </>
  );
}
