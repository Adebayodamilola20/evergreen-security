"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const offices = [
  {
    name: "Corporate Headquarters",
    flag: "🇺🇸",
    address: ["123 Security Drive, Suite 100", "Washington, DC 20001", "United States"],
    phone: "+1 (202) 555-0199",
    email: "info@evergreenprotective.com",
    emergency: "+1 (202) 555-0110",
  },
  {
    name: "UK Office",
    flag: "🇬🇧",
    address: ["45 Victoria Street", "London, SW1E 6DE", "United Kingdom"],
    phone: "+44 (0) 20 7946 0958",
    email: "uk@evergreenprotective.com",
    emergency: "+44 (0) 20 7946 0999",
  },
  {
    name: "Nigeria Office",
    flag: "🇳🇬",
    address: ["Plot 284, Herbert Macaulay Way", "Abuja, FCT", "Nigeria"],
    phone: "+234 (0) 803 456 7890",
    email: "nigeria@evergreenprotective.com",
    emergency: "+234 (0) 803 456 7999",
  },
];

export default function ContactPage() {
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Get in touch with our team for security consultations, inquiries, or emergency support.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-navy tracking-tight mb-4">Send Us a Message</h2>
                <div className="w-20 h-1 mb-8" style={{ backgroundColor: "#2d7a3a" }} />
                <p className="text-gray-600 mb-10">
                  Complete the form below and a member of our team will respond within 24 hours. For immediate security concerns, please use our emergency contact numbers.
                </p>
              </motion.div>
              <ContactForm />
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold text-navy tracking-tight mb-4">Our Offices</h2>
                <div className="w-20 h-1 mb-8" style={{ backgroundColor: "#2d7a3a" }} />
                <p className="text-gray-600 mb-10">
                  Visit or contact any of our international offices for in-person consultations and support.
                </p>
              </motion.div>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <motion.div
                    key={office.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{office.flag}</span>
                      <h3 className="text-lg font-bold text-navy">{office.name}</h3>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-evergreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          {office.address.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-evergreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-evergreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2 pt-2 border-t border-gray-100 mt-3">
                        <svg className="w-4 h-4 flex-shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <span className="text-red-600 font-medium">Emergency: {office.emergency}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 rounded-2xl h-[400px] flex items-center justify-center"
          >
            <div className="text-center text-gray-400">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm mt-1">Washington, DC | London | Abuja</p>
              <p className="text-xs mt-2 text-gray-300">Google Maps integration available with API key</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Emergency Security Support</h2>
            <div className="w-16 h-1 bg-evergreen mx-auto mb-6" />
            <p className="text-gray-300 text-lg mb-8">
              If you are experiencing a security emergency, call our 24/7 emergency response line immediately.
            </p>
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-red-600 rounded-xl">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-white text-2xl font-bold">+1 (202) 555-0110</span>
            </div>
            <p className="text-gray-400 text-sm mt-4">Available 24 hours a day, 7 days a week</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
