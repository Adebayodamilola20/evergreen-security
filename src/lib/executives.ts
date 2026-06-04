export interface Executive {
  slug: string;
  name: string;
  role: string;
  bio: string;
  fullBio: string;
  credentials: string[];
  affiliations: string[];
  certifications: string[];
  images: string[];
  social: {
    tiktok?: string;
    instagram?: string;
    facebook?: string;
  };
}

export const executives: Executive[] = [
  {
    slug: "john-smith",
    name: "Prince Adekunmi Odebunmi",
    role: "Managing Director",
    bio: "Prince Adekunmi Odebunmi is a seasoned professional with an extensive career spanning the public and private sectors, marked by excellence, integrity, and impact. He commenced his professional journey in 1996 with a distinguished enlistment into the Nigerian Air Force, where he served honorably for a decade.",
    fullBio: "He is a seasoned professional with an extensive career spanning the public and private sectors, marked by excellence, integrity, and impact. He commenced his professional journey in 1996 with a distinguished enlistment into the Nigerian Air Force, where he served honorably for a decade. During his meritorious service, he participated in several national campaigns, earning recognition for his dedication and commitment to the nation. Upon his transition to the private sector, Prince Odebunmi began his career with an Enterprise Security Risks Solutions Organization as an Operations Officer. His outstanding performance soon propelled him into greater responsibilities, leading him to join General Electrics as Security Manager for the General Electric Aero Energy Project in Obajana, Kogi State. Subsequently, he worked with Control Risks, a London-based Risk Mitigation firm, as Team Lead for Security Operations on a Schlumberger project in Port Harcourt. In 2010, he came back to the Halogen Group as Regional Manager for the South-South and South-East regions, where he spearheaded significant business growth, strengthened operational stability, and positioned the company ahead of competition in those regions. His success led to his appointment as Head of Lagos and Western Regional Business Operations, where he further distinguished himself in business growth, client satisfaction, and operational excellence. Prince Odebunmi played a pivotal role in driving the digitization program of Halogen Group’s Physical Security and Mobility Division. His exceptional contributions and leadership capacity earned him steady career advancement, culminating in his appointment as General Manager of Halogen Group.",
    credentials: [
      "Former General Manager, Physical Security & Mobility Division at Halogen Group",
      "Over 20 years of leadership in security risk management and operations across Africa",
      "Expert in digital transformation and security systems modernization",
      "Executive Director (Operations & Business Development) at Arksego Nigeria Limited",
      "Alumnus of Lagos Business School, Senior Management Program (SMP 46)"
    ],
    affiliations: [],
    certifications: [],
    images: ["/assets/new-DAD3V1vc.png"],
    social: {
      tiktok: "https://tiktok.com/@johnsmith",
      instagram: "https://instagram.com/johnsmith",
      facebook: "https://facebook.com/johnsmith"
    }
  },
  {
    slug: "sarah-john",
    name: "Dr Olumide Olayinka",
    role: "Director of Admin, Finance and Quality Control",
    bio: "Dr. Olumide Olayinka is a seasoned legal practitioner with over thirty-two years of experience, having been called to the Nigerian Bar in 1992.",
    fullBio: "Dr. Olumide Olayinka is a seasoned legal practitioner with over thirty-two years of experience, having been called to the Nigerian Bar in 1992. A graduate of Ogun State University, he obtained both the Master of Industrial and Labour Relations (MILR) and Master of Laws (LLM) degrees from the University of Lagos. Further, he earned a PhD in Law from Leeds Beckett University, Leeds, United Kingdom. He was at various times, inter alia, Senior State Counsel in the Ministry of Justice, Ogun State; as well as General Counsel at the Troyka Group in Lagos State.",
    credentials: [
      "Called to the Nigerian Bar in 1992",
      "Over 32 years of legal practitioner experience",
      "PhD in Law from Leeds Beckett University, UK",
      "Former General Counsel at Troyka Group in Lagos State",
      "Former Senior State Counsel in the Ministry of Justice, Ogun State"
    ],
    affiliations: [],
    certifications: [],
    images: ["/assets/amoug-CFbDgn12.jpg"],
    social: {
      instagram: "https://instagram.com/sarahjohnson",
      facebook: "https://facebook.com/sarahjohnson"
    }
  },
  {
    slug: "michael-chen",
    name: "Olabisi Familusi",
    role: "Director of Business Development and Strategy",
    bio: "A dynamic, results-driven, and innovative business strategist with nearly 18 years of progressive experience in Sales, Marketing, and Revenue Optimization.",
    fullBio: "A dynamic, results-driven, and innovative business strategist with nearly 18 years of progressive experience in Sales, Marketing, and Revenue Optimization. Recognized for driving sustainable growth, improving brand visibility, and developing high-performing teams across diverse markets and industries.",
    credentials: [
      "Drove 40% regional revenue growth through strategic business expansion.",
      "Built and maintained high-value relationships with multinational clients.",
      "Led digital transformation initiatives improving operational efficiency.",
      "Directed cross-functional teams to exceed performance targets.",
      "Launched new services that boosted market visibility and client retention."
    ],
    affiliations: [],
    certifications: [],
    images: ["/assets/IMG_2174 2-SIinR7ve.jpg", "/assets/IMG_2172 2-CHhyatiJ.jpg"],
    social: {
      tiktok: "https://tiktok.com/@michaelchen",
      instagram: "https://instagram.com/michaelchen"
    }
  },
  {
    slug: "kayode-bamgbose",
    name: "Kayode Felix Bamgbose",
    role: "Operational Manager",
    bio: "Kayode Felix Bamgbose is a dedicated Operational Manager at Evergreen Security, overseeing the day-to-day security operations.",
    fullBio: "Kayode Felix Bamgbose is a dedicated Operational Manager at Evergreen Security, overseeing the day-to-day security operations and ensuring the highest standards of safety and efficiency. With his extensive background in operational management, he leads our field teams with precision and strategic focus.",
    credentials: [
      "Expert in operational security management",
      "Lead coordinator for large-scale security deployments",
      "Specialist in tactical planning and execution",
      "Over 15 years of experience in security operations"
    ],
    affiliations: [],
    certifications: [],
    images: ["/assets/IMG_2192-DwePMzJV.jpg", "/assets/IMG_2193-DHWupqjw.jpg"],
    social: {
      instagram: "https://instagram.com/kayodebamgbose",
      facebook: "https://facebook.com/kayodebamgbose"
    }
  }
];

export function getExecutiveBySlug(slug: string): Executive | undefined {
  return executives.find((e) => e.slug === slug);
}
