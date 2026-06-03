"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Position } from "@/lib/types";

const positions: Position[] = [
  { value: "Security Officer", label: "Security Officer" },
  { value: "Armed Security Officer", label: "Armed Security Officer" },
  { value: "Executive Protection Agent", label: "Executive Protection Agent" },
  { value: "CCTV Operator", label: "CCTV Operator" },
  { value: "Security Supervisor", label: "Security Supervisor" },
  { value: "Risk Assessment Specialist", label: "Risk Assessment Specialist" },
  { value: "Security Consultant", label: "Security Consultant" },
  { value: "Corporate Security Manager", label: "Corporate Security Manager" },
  { value: "Airport Security Officer", label: "Airport Security Officer" },
  { value: "Patrol Response Officer", label: "Patrol Response Officer" },
];

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

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
          <h3 className="text-2xl font-bold text-navy mb-2">Application Received!</h3>
          <p className="text-gray-600">
            Thank you for your interest in joining Evergreen Protective Services. Our recruitment team will review your application and contact you.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="app-name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="app-name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-colors text-gray-900"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label htmlFor="app-email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="app-email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-colors text-gray-900"
                placeholder="john@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="app-phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="app-phone"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-colors text-gray-900"
              placeholder="+1 (202) 555-0199"
            />
          </div>

          <div>
            <label htmlFor="app-position" className="block text-sm font-medium text-gray-700 mb-2">
              Position Applying For *
            </label>
             <select
               id="app-position"
               required
               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-colors text-gray-900"
             >
               <option value="">Select a position</option>
               {positions.map((pos) => (
                 <option key={pos.value} value={pos.value}>
                   {pos.label}
                 </option>
               ))}
             </select>
          </div>

          <div>
            <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-2">
              Upload CV / Resume *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-evergreen transition-colors cursor-pointer">
              <input type="file" id="cv" required className="hidden" accept=".pdf,.doc,.docx" />
              <label htmlFor="cv" className="cursor-pointer">
                <svg className="w-10 h-10 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="text-gray-600 font-medium">Click to upload or drag and drop</p>
                <p className="text-gray-400 text-sm mt-1">PDF, DOC, DOCX (Max 10MB)</p>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 text-white font-semibold rounded-lg transition-all duration-300 hover:opacity-90 transform hover:scale-[1.02]"
            style={{ backgroundColor: "#2d7a3a" }}
          >
            Submit Application
          </button>
        </form>
      )}
    </motion.div>
  );
}
