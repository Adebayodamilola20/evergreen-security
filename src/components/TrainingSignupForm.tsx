"use client";

import { useState } from "react";
import { SESSIONS, formatSessionDate } from "@/lib/schedule";
import { CERTIFICATION_CATALOGUE, HQ } from "@/lib/company";

const openSessions = SESSIONS.filter((s) => s.open);

const field =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent";
const label = "mb-2 block text-sm font-medium text-gray-700";

export default function TrainingSignupForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sessionId, setSessionId] = useState("");

  const selected = openSessions.find((s) => s.id === sessionId);

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-xl md:p-14">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <svg className="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mb-3 text-2xl font-bold text-primary">Registration received</h2>
        <p className="mx-auto max-w-md leading-relaxed text-gray-600">
          Thank you for registering. The academy will confirm your place and any outstanding requirements by phone or
          email. For anything urgent, call {HQ.phone}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-8 rounded-2xl bg-white p-8 shadow-xl md:p-10"
    >
      <fieldset>
        <legend className="mb-5 text-xl font-bold text-primary">Choose your session</legend>

        <div className="space-y-3">
          {openSessions.map((session) => (
            <label
              key={session.id}
              className={`flex cursor-pointer items-start gap-4 rounded-xl border-2 p-4 transition-colors ${
                sessionId === session.id ? "border-accent bg-accent/5" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="session"
                value={session.id}
                checked={sessionId === session.id}
                onChange={(e) => setSessionId(e.target.value)}
                required
                className="mt-1 h-4 w-4 accent-[hsl(var(--accent))]"
              />
              <span className="min-w-0">
                <span className="block font-semibold text-primary">{session.subject}</span>
                <span className="block text-sm text-gray-600">
                  {formatSessionDate(session.date)} · {session.time}
                </span>
                <span className="block text-sm text-gray-500">{session.location}</span>
              </span>
            </label>
          ))}
        </div>

        {openSessions.length === 0 && (
          <p className="rounded-xl bg-gray-50 p-5 text-sm text-gray-600">
            No sessions are currently open for registration. Call {HQ.phone} for the next available dates.
          </p>
        )}

        <p className="mt-4 text-xs leading-relaxed text-gray-500">
          Dates, times and subjects are subject to periodic change. The academy will confirm your session before it runs.
        </p>
      </fieldset>

      <fieldset className="border-t border-gray-100 pt-8">
        <legend className="mb-5 text-xl font-bold text-primary">Your details</legend>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="first-name" className={label}>First name *</label>
            <input id="first-name" name="firstName" type="text" required className={field} />
          </div>
          <div>
            <label htmlFor="last-name" className={label}>Last name *</label>
            <input id="last-name" name="lastName" type="text" required className={field} />
          </div>
          <div>
            <label htmlFor="signup-email" className={label}>Email address *</label>
            <input id="signup-email" name="email" type="email" required className={field} />
          </div>
          <div>
            <label htmlFor="signup-phone" className={label}>Phone number *</label>
            <input id="signup-phone" name="phone" type="tel" required className={field} />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="signup-address" className={label}>Street address</label>
            <input id="signup-address" name="address" type="text" className={field} />
          </div>
          <div>
            <label htmlFor="signup-city" className={label}>City</label>
            <input id="signup-city" name="city" type="text" className={field} />
          </div>
          <div>
            <label htmlFor="signup-state" className={label}>State</label>
            <select id="signup-state" name="state" defaultValue="" className={field}>
              <option value="">Select a state</option>
              <option value="MD">Maryland</option>
              <option value="DC">District of Columbia</option>
              <option value="VA">Virginia</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="signup-zip" className={label}>ZIP code</label>
            <input id="signup-zip" name="zip" type="text" inputMode="numeric" className={field} />
          </div>
          <div>
            <label htmlFor="signup-dob" className={label}>Date of birth</label>
            <input id="signup-dob" name="dob" type="date" className={field} />
          </div>
        </div>
      </fieldset>

      <fieldset className="border-t border-gray-100 pt-8">
        <legend className="mb-5 text-xl font-bold text-primary">Certification sought</legend>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {CERTIFICATION_CATALOGUE.map((cert) => (
            <label key={cert} className="flex items-center gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                name="certifications"
                value={cert}
                className="h-4 w-4 rounded border-gray-300 accent-[hsl(var(--accent))]"
              />
              {cert}
            </label>
          ))}
        </div>

        <div className="mt-6">
          <label htmlFor="signup-experience" className={label}>
            Previous security, military or law enforcement experience
          </label>
          <textarea id="signup-experience" name="experience" rows={4} className={`${field} resize-none`} />
        </div>
      </fieldset>

      <div className="border-t border-gray-100 pt-8">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
          <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-gray-300 accent-[hsl(var(--accent))]" />
          <span>
            I confirm the information above is accurate and I meet the prerequisites for
            {selected ? ` the ${selected.subject} session` : " the session"} I have selected.
          </span>
        </label>

        <button type="submit" className="btn-highlight mt-8 w-full rounded-lg py-4 text-lg">
          Submit registration
        </button>
      </div>
    </form>
  );
}
