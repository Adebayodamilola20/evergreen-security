"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { QualityStandard } from "@/lib/types";

const standards: QualityStandard[] = [
  {
    title: "Quality Standards",
    description: "Our quality standards define the benchmark for every service we deliver. We adhere to international security management standards including ISO 18788, ASIS PSC.1, and industry best practices. Every aspect of our operations is governed by documented policies, procedures, and performance criteria that ensure consistent, high-quality service delivery across all client engagements.",
    metrics: ["ISO 18788 Compliance", "ASIS PSC.1 Certified", "Regular Third-Party Audits", "Client Satisfaction Surveys", "Performance Benchmarking"],
  },
  {
    title: "Operational Procedures",
    description: "Standardized operational procedures ensure consistency and reliability across all security operations. Our detailed operational manuals cover every aspect of security delivery, from patrol protocols to emergency response. Each procedure is regularly reviewed and updated to reflect evolving threats, technological advancements, and lessons learned from operational experience.",
    metrics: ["Standardized Protocols", "Regular Procedure Reviews", "Technology Integration", "Risk-Based Approach", "Documented Workflows"],
  },
  {
    title: "Performance Monitoring",
    description: "Continuous monitoring of security operations through multiple channels ensures real-time visibility into service quality. Our operations center utilizes advanced reporting systems, GPS tracking, incident management platforms, and client feedback mechanisms to track performance metrics and identify areas for improvement proactively.",
    metrics: ["Real-Time Reporting", "Incident Tracking", "Performance Scorecards", "Client Dashboard Access", "Quarterly Business Reviews"],
  },
  {
    title: "Incident Management",
    description: "A structured incident management framework ensures consistent, effective response to security incidents. Our incident management system covers detection, reporting, response, investigation, and resolution phases. Each incident is documented, analyzed, and used as a learning opportunity to strengthen our security posture and prevent recurrence.",
    metrics: ["Rapid Response Times", "Thorough Investigations", "Root Cause Analysis", "Corrective Action Plans", "Client Communication"],
  },
  {
    title: "Continuous Improvement",
    description: "We are committed to ongoing improvement through systematic evaluation of our performance, client feedback, and industry developments. Our continuous improvement program includes regular audits, training updates, technology upgrades, and process refinements that ensure our services remain at the forefront of the security industry.",
    metrics: ["Quarterly Audits", "Training Enhancements", "Process Optimization", "Technology Upgrades", "Industry Best Practice Adoption"],
  },
  {
    title: "Compliance Framework",
    description: "A comprehensive compliance framework ensures adherence to all applicable laws, regulations, and contractual obligations. Our compliance program covers licensing requirements, insurance mandates, data protection regulations, labor laws, and industry-specific regulations across all jurisdictions where we operate.",
    metrics: ["Regulatory Compliance", "Licensing Management", "Data Protection (GDPR)", "Insurance Compliance", "Contractual Obligations"],
  },
];

export default function QualityAssurancePage() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-evergreen rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tight"
          >
            Quality Assurance Program
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Our commitment to excellence is backed by a robust quality assurance framework that ensures consistent, high-quality service delivery.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How We Maintain Excellence"
            subtitle="A multi-layered quality assurance framework that ensures every service meets our exacting standards."
          />
          <div className="space-y-12">
            {standards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-navy mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                <div className="flex-1 bg-navy rounded-2xl p-8">
                  <h4 className="text-white font-semibold mb-4">Key Metrics</h4>
                  <div className="space-y-3">
                    {item.metrics.map((metric) => (
                      <div key={metric} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-evergreen flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Quality Promise"
            subtitle="Every client engagement is backed by a commitment to excellence."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-10 border border-gray-100"
          >
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              At Evergreen Protective Services International, quality is not just a department - it is a mindset that permeates every level of our organization. Our Quality Assurance Program is designed to ensure that every client receives the highest standard of security service, every time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Verified", desc: "All personnel undergo thorough background checks and verification." },
                { title: "Trained", desc: "Continuous training ensures skills remain current and effective." },
                { title: "Monitored", desc: "Real-time monitoring and reporting provides full transparency." },
              ].map((item) => (
                <div key={item.title} className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-evergreen/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-evergreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-navy font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Experience the Evergreen Difference"
        subtitle="Contact us to learn how our quality assurance program can benefit your organization."
        buttonText="Contact Us"
        buttonLink="/contact"
        secondaryButtonText="Explore Overseas Services"
        secondaryButtonLink="/overseas-services"
      />
    </>
  );
}
