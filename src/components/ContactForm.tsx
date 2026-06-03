"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SubjectOption } from "@/lib/types";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const subjectOptions: SubjectOption[] = [
    { value: "General Inquiry", label: "General Inquiry" },
    { value: "Security Consultation", label: "Security Consultation" },
    { value: "Partnership", label: "Partnership" },
    { value: "Employment", label: "Employment" },
    { value: "Emergency", label: "Emergency" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
    >
      {submitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-evergreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-navy mb-2">Thank You!</h3>
          <p className="text-gray-600">Your message has been received. Our team will respond within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-colors text-gray-900"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-colors text-gray-900"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-colors text-gray-900"
              placeholder="+1 (202) 555-0199"
            />
          </div>

           <div>
             <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
               Subject *
             </label>
             <select
               id="subject"
               required
               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-colors text-gray-900"
             >
               <option value="">Select a subject</option>
               {subjectOptions.map((option) => (
                 <option key={option.value} value={option.value}>
                   {option.label}
                 </option>
               ))}
             </select>
           </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-colors text-gray-900 resize-none"
              placeholder="Tell us about your security needs..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 text-white font-semibold rounded-lg transition-all duration-300 hover:opacity-90 transform hover:scale-[1.02]"
            style={{ backgroundColor: "#2d7a3a" }}
          >
            Send Message
          </button>
        </form>
      )}
    </motion.div>
  );
}
