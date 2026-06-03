"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { TrainingProgram, TrainingMethodology } from "@/lib/types";

const programs: TrainingProgram[] = [
  {
    title: "Officer Training Programs",
    description:
      "Comprehensive foundational training for security officers covering essential skills, protocols, and professional standards required for effective security operations.",
    modules: [
      "Security fundamentals and legal authority",
      "Patrol techniques and observation skills",
      "Report writing and documentation",
      "Communication and de-escalation",
      "Emergency response procedures",
      "Customer service excellence",
    ],
    duration: "2-4 Weeks",
  },
  {
    title: "Security Certification Programs",
    description:
      "Industry-recognized certification programs that validate expertise and professional competence in various security disciplines.",
    modules: [
      "Certified Security Officer (CSO)",
      "Certified Protection Professional (CPP)",
      "Physical Security Professional (PSP)",
      "Armed Security Certification",
      "First Aid and CPR Certification",
      "Handcuffing and Defensive Tactics",
    ],
    duration: "1-8 Weeks",
  },
  {
    title: "Emergency Response Training",
    description:
      "Specialized training for responding to security emergencies including active threats, medical emergencies, fires, and natural disasters.",
    modules: [
      "Active threat response protocols",
      "Emergency evacuation procedures",
      "Fire safety and suppression",
      "Medical emergency response",
      "Crisis communication",
      "Incident command system",
    ],
    duration: "1-2 Weeks",
  },
  {
    title: "Risk Management Training",
    description:
      "Training focused on identifying, assessing, and mitigating security risks to protect organizational assets and operations.",
    modules: [
      "Risk assessment methodologies",
      "Threat identification and analysis",
      "Vulnerability assessment techniques",
      "Security survey procedures",
      "Risk mitigation strategies",
      "Business continuity planning",
    ],
    duration: "1-3 Weeks",
  },
  {
    title: "Corporate Security Training",
    description:
      "Tailored training programs for corporate security teams addressing the unique challenges of protecting business environments.",
    modules: [
      "Corporate security protocols",
      "Visitor management systems",
      "Access control procedures",
      "Executive protection basics",
      "Workplace violence prevention",
      "Confidentiality and data protection",
    ],
    duration: "1-2 Weeks",
  },
  {
    title: "Physical Security Training",
    description:
      "Hands-on training in physical security measures including perimeter protection, access control systems, and surveillance operations.",
    modules: [
      "Perimeter security assessment",
      "Access control system operation",
      "CCTV monitoring techniques",
      "Security lighting and barriers",
      "Alarm system management",
      "Security technology integration",
    ],
    duration: "1-2 Weeks",
  },
  {
    title: "Crisis Management Training",
    description:
      "Advanced training for leadership and security teams on managing critical incidents and maintaining organizational resilience.",
    modules: [
      "Crisis leadership and decision-making",
      "Emergency operations center management",
      "Media and stakeholder communication",
      "Business continuity execution",
      "Post-incident analysis",
      "Psychological first aid",
    ],
    duration: "1 Week",
  },
];

const methodology: TrainingMethodology[] = [
  {
    title: "Classroom Instruction",
    description: "Expert-led theoretical training covering security principles, legal frameworks, and operational procedures in a structured learning environment.",
  },
  {
    title: "Scenario-Based Training",
    description: "Realistic simulations and role-playing exercises that prepare officers for actual security situations they will encounter in the field.",
  },
  {
    title: "On-the-Job Training",
    description: "Supervised field experience with experienced officers to apply learned skills in real-world settings under professional guidance.",
  },
  {
    title: "Continuous Assessment",
    description: "Regular evaluations, testing, and performance reviews to ensure competency and identify areas for additional development.",
  },
];

export default function TrainingPage() {
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
            Security Training
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Developing the next generation of security professionals through comprehensive, hands-on training programs.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Training Programs"
            subtitle="Our training curriculum is designed to produce security professionals who are competent, confident, and ready to handle any situation."
          />
          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-navy">{program.title}</h3>
                    <p className="text-evergreen font-medium text-sm mt-1">Duration: {program.duration}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {program.modules.map((module) => (
                    <div key={module} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-evergreen flex-shrink-0" />
                      <span className="text-sm">{module}</span>
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
            title="Training Methodology"
            subtitle="Our approach to security training combines theoretical knowledge with practical experience for maximum effectiveness."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#2d7a3a" }}>
                  <span className="text-white font-bold">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{method.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy rounded-2xl p-10 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Certification Process</h3>
              <div className="w-16 h-1 bg-evergreen mb-6" />
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our certification process ensures that every security professional meets the highest standards of competence and professionalism before being deployed.
              </p>
              <ol className="space-y-4">
                {[
                  "Initial screening and background verification",
                  "Complete training program attendance",
                  "Written and practical examinations",
                  "Scenario-based competency assessment",
                  "Final review and certification approval",
                  "Ongoing performance monitoring",
                ].map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-evergreen flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </span>
                    <span className="text-gray-300 text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-10 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-navy mb-4">Continuous Development Program</h3>
              <div className="w-16 h-1 bg-evergreen mb-6" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Learning never stops at Evergreen. Our Continuous Development Program ensures that all personnel stay current with the latest security practices, technologies, and industry standards.
              </p>
              <ul className="space-y-4">
                {[
                  "Quarterly refresher training sessions",
                  "Annual recertification requirements",
                  "New technology and equipment training",
                  "Specialized skill advancement courses",
                  "Leadership and management development",
                  "Industry conference and seminar attendance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-evergreen/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-evergreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Invest in Professional Security Training"
        subtitle="Contact us to learn more about our training programs and how we can develop your security team's capabilities."
        buttonText="Request Training Information"
        buttonLink="/contact"
        secondaryButtonText="View Executive Staff"
        secondaryButtonLink="/executive-staff"
      />
    </>
  );
}
