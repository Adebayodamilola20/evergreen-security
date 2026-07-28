// Training schedule.
//
// The flowchart asks that the sign-up dialogue be built "in such a way that we
// can upload information on to it as schedules such as date, time, and subject
// are sometimes subject to periodic changes". This file is that upload point:
// edit the list below and the sign-up page, the date picker and the subject
// picker all update together. Nothing else needs touching.
//
// `date` is an ISO date (YYYY-MM-DD) so sessions sort and format correctly.

export interface ScheduledSession {
  id: string;
  subject: string;
  date: string;
  time: string;
  /** Where the session runs — leave as the academy address unless it differs. */
  location: string;
  /** Set false to keep a session listed but closed to new registrations. */
  open: boolean;
}

// PLACEHOLDER DATES — replace with the academy's live calendar before launch.
export const SESSIONS: ScheduledSession[] = [
  {
    id: "md-unarmed-2026-08-10",
    subject: "MD Unarmed",
    date: "2026-08-10",
    time: "9:00 AM – 5:00 PM",
    location: "PGS Training Academy, Lanham, MD",
    open: true,
  },
  {
    id: "md-armed-2026-08-17",
    subject: "MD Armed",
    date: "2026-08-17",
    time: "9:00 AM – 5:00 PM",
    location: "PGS Training Academy, Lanham, MD",
    open: true,
  },
  {
    id: "dc-spo-2026-08-24",
    subject: "DC SPO",
    date: "2026-08-24",
    time: "9:00 AM – 5:00 PM",
    location: "PGS Training Academy, Lanham, MD",
    open: true,
  },
  {
    id: "cpr-first-aid-2026-09-05",
    subject: "CPR / First Aid",
    date: "2026-09-05",
    time: "10:00 AM – 3:00 PM",
    location: "PGS Training Academy, Lanham, MD",
    open: true,
  },
  {
    id: "oc-baton-handcuff-2026-09-12",
    subject: "OC Spray, Baton & Handcuff",
    date: "2026-09-12",
    time: "10:00 AM – 4:00 PM",
    location: "PGS Training Academy, Lanham, MD",
    open: true,
  },
];

export function formatSessionDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
