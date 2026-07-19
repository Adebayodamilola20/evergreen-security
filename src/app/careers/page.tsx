"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ApplicationForm from "@/components/ApplicationForm";
import CTASection from "@/components/CTASection";
import { CareerBenefit, CareerPosition } from "@/lib/types";
import MaskText from "@/components/motion/MaskText";
import { EASE } from "@/components/motion/ease";

const benefits: CareerBenefit[] = [
  {
    title: "Competitive Compensation",
    description: "Industry-leading salaries with regular performance reviews and merit-based increases.",
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision insurance plans for you and your family.",
  },
  {
    title: "Retirement Planning",
    description: "401(k) matching program with company contributions to secure your financial future.",
  },
  {
    title: "Paid Time Off",
    description: "Generous vacation, sick leave, and holiday pay to support work-life balance.",
  },
  {
    title: "Training & Development",
    description: "Continuous professional development with paid training, certifications, and advancement opportunities.",
  },
  {
    title: "Career Advancement",
    description: "Clear career progression paths with opportunities to advance through the organization.",
  },
];

const requirements: string[] = [
  "Must be at least 21 years of age",
  "High school diploma or equivalent (college degree preferred)",
  "U.S. citizenship or permanent residency",
  "Valid state-issued driver's license",
  "Clean criminal record - no felony convictions",
  "Ability to pass comprehensive background investigation",
  "Drug screening and medical examination clearance",
  "Excellent communication and interpersonal skills",
  "Physical fitness and ability to stand for extended periods",
  "Availability to work flexible shifts including nights, weekends, and holidays",
];

const positions: CareerPosition[] = [
  {
    title: "Security Officer",
    location: "Washington, DC",
    type: "Full-Time",
    description: "Provide professional security services at corporate and government facilities. Responsibilities include access control, patrol, visitor management, and incident response.",
  },
  {
    title: "Armed Security Officer",
    location: "Washington, DC",
    type: "Full-Time",
    description: "Armed security positions requiring firearm certification and advanced training. Protect high-value assets and personnel at sensitive locations.",
  },
  {
    title: "Executive Protection Agent",
    location: "Multiple Locations",
    type: "Full-Time",
    description: "Provide close protection services for corporate executives and VIPs. Requires advanced training in protective operations and threat assessment.",
  },
  {
    title: "Security Supervisor",
    location: "New York, NY",
    type: "Full-Time",
    description: "Supervise security teams across multiple sites. Manage scheduling, training, performance, and client relations for assigned accounts.",
  },
  {
    title: "CCTV Operator",
    location: "Washington, DC",
    type: "Full-Time",
    description: "Monitor surveillance systems, detect security threats, and coordinate response from our centralized operations center. Must have CCTV certification.",
  },
  {
    title: "Risk Assessment Specialist",
    location: "London, UK",
    type: "Full-Time",
    description: "Conduct security risk assessments, vulnerability analyses, and develop mitigation strategies for international clients.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-evergreen rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            <MaskText text="Careers" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Join a team of dedicated security professionals committed to excellence and service.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Work With Evergreen?"
            subtitle="Build a rewarding career with a company that values your skills, invests in your development, and recognizes your contributions."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 56 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: index * 0.1, ease: EASE }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-navy mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Current Opportunities"
            subtitle="Explore our open positions and take the next step in your security career."
          />
          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: index * 0.1, ease: EASE }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-navy">{position.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#application"
                    className="px-6 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-300 hover:opacity-90 text-center whitespace-nowrap"
                    style={{ backgroundColor: "#2d7a3a" }}
                  >
                    Apply Now
                  </a>
                </div>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">{position.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: EASE }}
            >
              <SectionHeader
                title="Minimum Requirements"
                subtitle="All candidates must meet the following minimum qualifications."
                centered={false}
              />
              <ul className="space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-evergreen/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-evergreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: EASE }}
            >
              <SectionHeader
                title="Recruitment Process"
                subtitle="Our thorough selection process ensures we hire only the best."
                centered={false}
              />
              <ol className="space-y-4">
                {[
                  { step: "Online Application", desc: "Submit your application and resume through our careers portal." },
                  { step: "Application Review", desc: "Our HR team reviews your qualifications and experience." },
                  { step: "Phone Screening", desc: "Initial phone interview to discuss your background and interest." },
                  { step: "In-Person Interview", desc: "Comprehensive interview with our hiring team." },
                  { step: "Background Check", desc: "Thorough background investigation including criminal records." },
                  { step: "Medical & Drug Screening", desc: "Physical examination and drug screening." },
                  { step: "Training Enrollment", desc: "Successful candidates begin our training program." },
                ].map((item, index) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-navy">{item.step}</p>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="application" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Apply Today"
            subtitle="Ready to join the Evergreen team? Submit your application below."
          />
          <ApplicationForm />
        </div>
      </section>

      <CTASection
        title="Questions About Your Career?"
        subtitle="Contact our recruitment team for more information about opportunities at Evergreen."
        buttonText="Contact Recruitment"
        buttonLink="/contact"
      />
    </>
  );
}
