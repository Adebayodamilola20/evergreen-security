import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TrainingSignupForm from "@/components/TrainingSignupForm";
import { SESSIONS, formatSessionDate } from "@/lib/schedule";

export const metadata: Metadata = {
  title: "Sign Up For Training",
  description:
    "Register online for a session at PGS Training Academy. Dates, times and subjects are updated as the academy schedule changes.",
};

export default function SignupPage() {
  return (
    <>
      <PageHero
        eyebrow="Training Academy"
        title="Sign Up For Training"
        intro="Pick a scheduled session and register online. Schedules are updated as dates, times and subjects change."
        crumbs={[{ label: "Training Academy", href: "/training-academy" }]}
      />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <TrainingSignupForm />
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-2xl bg-navy p-7 text-white lg:sticky lg:top-28">
                <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                  Upcoming Schedule
                </h2>
                <ul className="space-y-5">
                  {SESSIONS.map((session) => (
                    <li key={session.id} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                      <p className="font-semibold">{session.subject}</p>
                      <p className="text-sm text-white/70">{formatSessionDate(session.date)}</p>
                      <p className="text-sm text-white/50">{session.time}</p>
                      {!session.open && (
                        <p className="mt-1.5 inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/70">
                          Registration closed
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
