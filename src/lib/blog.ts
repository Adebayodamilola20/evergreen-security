import { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "event-security-planning",
    title: "Event Security Planning for High-Profile Gatherings",
    date: "June 3, 2026",
    category: "Event Security",
    excerpt:
      "A practical look at how professional teams plan access control, crowd flow, emergency response, and visible protection before an event begins.",
    image: "/assets/IMG_2208-4pFdTGct.jpg",
    imageAlt: "Evergreen security team coordinating field operations",
    content: [
      "Strong event security starts before the first guest arrives. The team should understand the venue, expected attendance, entry points, emergency exits, parking flow, and the profile of people attending.",
      "Access control is one of the most important parts of the plan. Clear checkpoints, trained personnel, and visible communication help prevent confusion while keeping guests moving.",
      "A complete plan should include response procedures for medical incidents, crowd pressure, unauthorized access, and severe weather. When every officer knows the escalation path, the event feels calm and controlled.",
    ],
  },
  {
    slug: "training-professional-guards",
    title: "Why Continuous Training Builds Better Security Teams",
    date: "May 27, 2026",
    category: "Training",
    excerpt:
      "Professional guards need more than uniforms. Continuous training improves awareness, discipline, communication, and response under pressure.",
    image: "/assets/IMG_2171-Dy9n0K0G.jpg",
    imageAlt: "Security personnel during professional training",
    content: [
      "Security work changes constantly. New risks, new technologies, and new client expectations mean teams need regular training instead of one-time orientation.",
      "The strongest training programs combine physical readiness, observation skills, report writing, conflict de-escalation, and customer-facing professionalism.",
      "When guards train consistently, they make better decisions on site. That improves client trust and helps the entire operation respond faster when a real incident happens.",
    ],
  },
  {
    slug: "corporate-security-risk-review",
    title: "What Companies Should Review Before Hiring Security",
    date: "May 18, 2026",
    category: "Corporate Security",
    excerpt:
      "Before hiring a security provider, organizations should review risk exposure, site layout, visitor flow, asset value, and reporting expectations.",
    image: "/assets/IMG_2232-D8S3-a-x.jpg",
    imageAlt: "Corporate security operations team",
    content: [
      "Every organization has a different security need. A warehouse, school, office, and executive residence should never receive the same generic protection plan.",
      "Before deployment, the security provider should review entry points, lighting, CCTV coverage, visitor movement, emergency routes, and the client’s reporting requirements.",
      "The best result comes from a clear operating procedure. Everyone should know who is responsible for patrols, incident reports, access logs, and emergency communication.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
