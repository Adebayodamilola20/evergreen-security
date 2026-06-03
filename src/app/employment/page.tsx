"use client";

import { useState } from "react";
import { motion } from "framer-motion";

  const states: string[] = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming",
  ];

export default function EmploymentPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
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
              Employment Application
            </motion.h1>
          </div>
        </section>
        <section className="py-20 bg-gray-50 min-h-[60vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-lg mx-auto px-4"
          >
            <div className="w-20 h-20 bg-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-evergreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-navy mb-4">Application Submitted!</h2>
            <p className="text-gray-600 text-lg">
              Thank you for your interest in joining Evergreen Protective Services. Our recruitment team will review your application and contact you within 5-7 business days.
            </p>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-evergreen rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tight"
          >
            Employment Application
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Evergreen Online Application for Employment
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            Please fill out our Employment Application Form below. Areas marked with * are required.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* SECTION 1: General Information */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: "#2d7a3a" }}>
                  01
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy">General Information</h2>
                  <p className="text-gray-500 text-sm">Please provide us with the following information</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Middle Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Gender *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">SSN * <span className="text-gray-400 font-normal">(000-00-0000)</span></label>
                  <input type="text" required placeholder="000-00-0000" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Home Phone *</label>
                  <input type="tel" required placeholder="(000) 000-0000" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Cell Phone *</label>
                  <input type="tel" required placeholder="(000) 000-0000" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Work Phone</label>
                  <input type="tel" placeholder="(000) 000-0000" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input type="email" required placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Home Address *</label>
                <input type="text" required placeholder="123 Main Street" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">County *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900">
                    <option value="">Select a State</option>
                    {states.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Zip Code *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
              </div>

              <hr className="my-8 border-gray-200" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Position Desired *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Do you have a DOD Clearance? *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900">
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">If so, what level?</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Are you currently GSA Certified? *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900">
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Certification?</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Guard Years *</label>
                  <input type="number" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Salary Required ($)</label>
                  <input type="text" placeholder="e.g. 45000" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Attach Resume or Profile Here</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-evergreen transition-colors cursor-pointer">
                    <input type="file" className="hidden" id="resume" accept=".pdf,.doc,.docx" />
                    <label htmlFor="resume" className="cursor-pointer">
                      <svg className="w-8 h-8 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-gray-500 text-sm font-medium">Click to upload</p>
                      <p className="text-gray-400 text-xs mt-1">PDF, DOC, DOCX</p>
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Military Service *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900">
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Application</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date Available to Work</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Type of Employment *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900">
                    <option value="">Select Type</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Temporary">Temporary</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Shift Available to Work</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900">
                    <option value="">Select Shift</option>
                    <option value="Day">Day</option>
                    <option value="Night">Night</option>
                    <option value="Rotating">Rotating</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Days/Hours Available:</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900 resize-none" placeholder="List your availability..." />
              </div>
            </div>

            {/* SECTION 2: Certifications */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: "#2d7a3a" }}>
                  02
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy">Certifications & Licenses</h2>
                  <p className="text-gray-500 text-sm">List all current certifications and licenses</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  List all Current Certifications & Licenses:
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900 resize-none"
                  placeholder="i.e. VA Armed, MD Handgun Permit, DC SPO, 1st Aid & CPR, Unarmed licenses, Baton, OC Spray and any other pertinent licenses..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Do you have a Valid Driver's License? *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900">
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Issuing State</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900">
                    <option value="">Select State</option>
                    {states.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* SECTION 3: Eligibility */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: "#2d7a3a" }}>
                  03
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy">Eligibility & Background</h2>
                  <p className="text-gray-500 text-sm">Please answer the following questions</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-700">Are you 18 years or older? *</p>
                  </div>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="age" value="Yes" required className="w-5 h-5 text-evergreen" />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="age" value="No" className="w-5 h-5 text-evergreen" />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-700">Are you authorized to work in the United States? *</p>
                    <p className="text-xs text-gray-400">Proof of eligibility is required</p>
                  </div>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="workAuth" value="Yes" required className="w-5 h-5 text-evergreen" />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="workAuth" value="No" className="w-5 h-5 text-evergreen" />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-700">Have you ever applied to EPS before? *</p>
                    <p className="text-xs text-gray-400">If Yes, provide date</p>
                  </div>
                  <div className="flex gap-6 items-center">
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="appliedBefore" value="Yes" required className="w-5 h-5 text-evergreen" />
                        <span className="text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="appliedBefore" value="No" className="w-5 h-5 text-evergreen" />
                        <span className="text-gray-700">No</span>
                      </label>
                    </div>
                    <input type="date" className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-700">Have you ever worked for EPS before? *</p>
                    <p className="text-xs text-gray-400">If Yes, provide date</p>
                  </div>
                  <div className="flex gap-6 items-center">
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="workedBefore" value="Yes" required className="w-5 h-5 text-evergreen" />
                        <span className="text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="workedBefore" value="No" className="w-5 h-5 text-evergreen" />
                        <span className="text-gray-700">No</span>
                      </label>
                    </div>
                    <input type="date" className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900" />
                  </div>
                </div>

                <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-700">Have you ever been convicted of a crime? *</p>
                      <p className="text-xs text-red-500">If yes, give details below</p>
                    </div>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="convicted" value="Yes" required className="w-5 h-5 text-evergreen" />
                        <span className="text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="convicted" value="No" className="w-5 h-5 text-evergreen" />
                        <span className="text-gray-700">No</span>
                      </label>
                    </div>
                  </div>
                  <textarea rows={2} className="w-full mt-4 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900 resize-none" placeholder="Provide details if applicable..." />
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-700">Are you willing to participate in a thorough background and drug screen? *</p>
                  </div>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="background" value="Yes" required className="w-5 h-5 text-evergreen" />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="background" value="No" className="w-5 h-5 text-evergreen" />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 4: Employment History */}
            {[1, 2, 3].map((num) => (
              <div key={num} className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: "#2d7a3a" }}>
                    {String(num + 3).padStart(2, "0")}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-navy">Employment History — Employer {num}</h2>
                    <p className="text-gray-500 text-sm">List your last 3 employers, starting with the most recent</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Employer *</label>
                    <input type="text" required={num === 1} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Address *</label>
                    <input type="text" required={num === 1} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                    <input type="text" required={num === 1} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
                    <select required={num === 1} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900">
                      <option value="">Select State</option>
                      {states.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Zip *</label>
                    <input type="text" required={num === 1} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input type="tel" required={num === 1} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Job Title *</label>
                    <input type="text" required={num === 1} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Supervisor's Name *</label>
                    <input type="text" required={num === 1} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Salary *</label>
                    <input type="text" required={num === 1} placeholder="e.g. 40000" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-700">May we contact them? *</p>
                    </div>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name={`contact-${num}`} value="Yes" required={num === 1} className="w-5 h-5 text-evergreen" />
                        <span className="text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name={`contact-${num}`} value="No" className="w-5 h-5 text-evergreen" />
                        <span className="text-gray-700">No</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Employment Dates: From</label>
                    <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Employment Dates: To</label>
                    <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Reason for leaving *</label>
                  <input type="text" required={num === 1} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Summary of responsibilities/duties:</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900 resize-none" />
                </div>
              </div>
            ))}

            {/* SECTION 7: Educational Background */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: "#2d7a3a" }}>
                  07
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy">Educational Background</h2>
                  <p className="text-gray-500 text-sm">Please list the last 3 schools attended, starting with the most recent</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Name of School</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Address</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700"># of Years</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700">Completed</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Major</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700">Graduated?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3].map((row) => (
                      <tr key={row} className="border-t border-gray-200">
                        <td className="px-4 py-3"><input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900" /></td>
                        <td className="px-4 py-3"><input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900" /></td>
                        <td className="px-4 py-3"><input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center text-gray-900" /></td>
                        <td className="px-4 py-3 text-center">
                          <select className="px-3 py-2 border border-gray-300 rounded-lg text-gray-900">
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </td>
                        <td className="px-4 py-3"><input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900" /></td>
                        <td className="px-4 py-3 text-center">
                          <select className="px-3 py-2 border border-gray-300 rounded-lg text-gray-900">
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SECTION 8: Personal References */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: "#2d7a3a" }}>
                  08
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy">Personal References</h2>
                  <p className="text-gray-500 text-sm">Please give at least 3 references who are NOT related to you</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Name</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Address</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Telephone</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Relationship</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700">Years Known</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3].map((row) => (
                      <tr key={row} className="border-t border-gray-200">
                        <td className="px-4 py-3"><input type="text" required={row <= 3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900" /></td>
                        <td className="px-4 py-3"><input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900" /></td>
                        <td className="px-4 py-3"><input type="tel" required={row <= 3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900" /></td>
                        <td className="px-4 py-3"><input type="text" required={row <= 3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900" /></td>
                        <td className="px-4 py-3"><input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center text-gray-900" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SECTION 9: Additional Information */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: "#2d7a3a" }}>
                  09
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy">Additional Information</h2>
                  <p className="text-gray-500 text-sm">Please provide any additional information useful to your application</p>
                </div>
              </div>

              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900 resize-none"
                placeholder="Any additional information you would like us to consider..."
              />
            </div>

            {/* SECTION 10: Affirmation */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border-2 border-evergreen/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: "#2d7a3a" }}>
                  10
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy">Certification & Affirmation</h2>
                  <p className="text-gray-500 text-sm">Please read and confirm the following</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold">Certification:</span> I certify that all answers above are truthful. I hereby certify that the above information is correct and I authorize Evergreen Protective Services to check any records which they may need to verify my employment, credit, driving, medical treatment, or any other records relating to my employment suitability.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-700">I agree to the above affirmation *</p>
                  </div>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="affirmation" value="Yes" required className="w-5 h-5 text-evergreen" />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="affirmation" value="No" className="w-5 h-5 text-evergreen" />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date *</label>
                  <input type="date" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-evergreen focus:border-evergreen outline-none transition-all text-gray-900" />
                </div>
              </div>

              <div className="mt-8 p-6 bg-evergreen/5 rounded-xl border border-evergreen/20">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-evergreen flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-gray-600">
                    By submitting this application, you confirm that all information provided is true and complete to the best of your knowledge. Falsification of any information may result in disqualification from consideration or termination of employment.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <button
                type="submit"
                className="px-16 py-5 text-lg font-bold text-white rounded-xl transition-all duration-300 hover:opacity-90 transform hover:scale-105 shadow-xl"
                style={{ backgroundColor: "#2d7a3a" }}
              >
                Submit Employment Application
              </button>
              <p className="text-gray-500 text-sm mt-4">All fields marked with * are required</p>
            </motion.div>
          </motion.form>
        </div>
      </section>
    </>
  );
}
