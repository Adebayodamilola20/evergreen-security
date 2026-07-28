// Single source of truth for every piece of client-supplied copy.
//
// Content is transcribed from the client's "WEBSITE FLOWCHART2.doc" — the later
// of the two documents supplied, and the one that supersedes FLOWCHART1 (it
// carries the expanded services list, the fuller Training Academy narrative and
// the corrected VA DCJS school number). Wording is kept as the client wrote it;
// only obvious typos have been left alone rather than silently rewritten, so
// they can approve any change themselves.

export const COMPANY = {
  name: "PGS, Inc.",
  shortName: "PGS",
  legalName: "Police Guard Services, Inc.",
  tagline: "Protecting life, assets and facilities.",
  description:
    "PGS, Inc. provides a spectrum of custom security solutions — armed and unarmed officers, security consulting, executive protection, patrol and surveillance, and an A-rated training academy — across the DMV area.",
} as const;

export const HQ = {
  label: "Corporate Headquarters",
  lines: ["5900 Princess Garden Parkway", "Suite 410", "Lanham, MD 20706"],
  phone: "301 459 4000",
  fax: "301 459 3000",
  email: "info@policeguardservices.com",
} as const;

// ---------------------------------------------------------------------------
// Home page
// ---------------------------------------------------------------------------

/** Left-hand rail of the home page. */
export const SERVICES: string[] = [
  "24 hours Armed/Unarmed Security Guards",
  "Security Consulting",
  "Close / Executive Protection",
  "Aviation Security",
  "Corporate Institution Security",
  "Perimeter and Access Control",
  "Mobile Patrol Service",
  "Hotel Security",
  "Maritime Security",
  "Oil & Gas Pipeline Monitoring",
  "Residential Apartment Homes",
  "Concierge",
  "Office Buildings",
  "Hospitals",
  "Construction Sites",
  "Shopping Centers / Plazas",
  "Retail Malls",
  "Schools",
  "Security Patrol (Foot / Vehicle / Bicycle)",
  "Security Surveillance / CCTV Monitoring",
  "Vulnerability Assessment",
  "Event Security",
  "Private Investigation",
  "Background Investigation",
  "Crises Management Planning & Response",
  "Emergency Preparedness",
  "Loss Prevention",
];

/** Centre of the home page — the summed-up representation of the company. */
export const HOME_INTRO = {
  lead: "PGS provide a spectrum of custom solutions to match clients dynamic and peculiar security needs as today's unique challenges require a partner with vast experience and capabilities to work with diverse cadre of clients creating security solutions with value based and result oriented professional deploying the best of officers (Armed and Unarmed) and technology.",
  partnershipsIntro:
    "PGS has over the years partnered with government agencies, higher Institutions, Corporate bodies with working relationships with the Department of State to the Department of Homeland Security among several others in several capacities that includes but not limited to:",
  capabilities: [
    "Providing PGS Custom Protection Officers® highly qualified security professionals",
    "State-of-the-art security solutions, risk management, incident reporting and facility management technology",
    "Consulting services that include disaster and emergency response planning and safety programs",
    "Security vulnerability assessments",
  ],
  closing: [
    "We equally have a comprehensive feedback mechanism and processing department managed by our Business Development and Quality Assurance departments in order to assure clients satisfaction.",
    "PGS operates an A rated Training academy which serves as a primary feeder academy for our well groomed officers and also serves as a feeder academy for other security companies.",
  ],
} as const;

/** Right-hand rail of the home page. */
export const PILLARS = [
  {
    title: "Mission",
    body: "Our mission at PGS, Inc. is to provide a dynamic solution to the ever-changing needs of our clients in the protection of life, assets and facilities with cognizance of an evolving world. Poised to deliver these in the best professional manner with strict adherence to the ethos of security best practices with un-paralled commitment and enthusiasm.",
  },
  {
    title: "Vision",
    body: "A global knowledge and human resource organization that protects continental, national and corporate assets through the provision of technology & manpower deployment on sites, facilities and public space in furtherance of global peace, at PGS, that's our phenomenon.",
  },
  {
    title: "Core Value",
    body: "An organization thriving on integrity, innovation, accountability and human capital development.",
  },
] as const;

// The four capability areas the document lists as bullets, developed into full
// sections. Each expands only on themes the client's document already states —
// the officer reporting app, custom per-location procedures, the academy, the
// 24/7 escalation team. No figures, licence numbers or accreditations have been
// added that the document does not contain.
export const CAPABILITIES = [
  {
    title: "Custom Protection Officers",
    lead: "Highly qualified security professionals, matched to the post.",
    body: "Every officer we deploy is screened, licensed and trained to the standard the contract demands — armed or unarmed, static or mobile. Because our own academy feeds the roster, we control the quality of an officer's instruction rather than inheriting it. Officers are placed against the specific demands of a site, not drawn at random from a pool, and the same officers return to the same posts so they learn the building, the people and the routine.",
  },
  {
    title: "Security Technology",
    lead: "State-of-the-art solutions, risk management, incident reporting and facility management technology.",
    body: "Our officers are mobile but always connected, communicating in a triad through a Security Officer Reporting App. Tour verification confirms an officer is on site as scheduled; incident reports and daily activity reports are filed from the post as events happen. Management and clients reach those reports directly, whenever and wherever they need them — so you are never waiting on a shift to end to learn what happened on it.",
  },
  {
    title: "Consulting & Emergency Planning",
    lead: "Disaster and emergency response planning, and safety programs.",
    body: "We work with clients to build custom security procedures for each location entrusted to us, rather than imposing one template across every site. Procedures are drawn up inclusively and guided by our experts before implementation, so the people who will operate a plan have shaped it. That extends to disaster and emergency response planning and to the safety programs that sit alongside day-to-day security.",
  },
  {
    title: "Vulnerability Assessment",
    lead: "Seeing the gap before someone else does.",
    body: "We assess facilities, perimeters and access points to establish where exposure actually sits, then translate the findings into a deployment plan — manpower, technology, or both. Assessment is not a one-off exercise: our escalation team maintains a continuous, hydra-headed view of each site and a real-time communication bridge with the client, so a change in risk changes the response.",
  },
] as const;

// Elaborates the four adjectives the document uses to describe the company:
// "experience-based, low-risk, best-value and innovative".
export const DIFFERENTIATORS = [
  {
    title: "Experience-based",
    body: "Our management team is comprised of veterans and seasoned security technocrats, business and administrative professionals, with many combined years across military, law enforcement and security services — in government agencies and corporate organizations alike.",
  },
  {
    title: "Low-risk",
    body: "We pride ourselves on compliance and strict adherence to security best practices. Quality Control mandates documentation and reporting at every level, and where a contract deficiency is detected the client is notified promptly with corrective actions attached.",
  },
  {
    title: "Best-value",
    body: "Cost containment is an operating ethic, not a campaign. Expenditure is tracked against periodic budget models with variance analysis, and a corporate audit group conducts semi-annual audits of contract cost records. Clients rate us highly on enhancing service without jeopardizing cost savings.",
  },
  {
    title: "Innovative",
    body: "Technology and software keep our officers mobile but connected, and give management and clients instant access to officer reports. It is how we maintain real-time assessment across sites rather than reconstructing events after the fact.",
  },
] as const;

// The site types named in the services list, grouped so a prospective client
// can find themselves quickly.
export const DEPLOYMENT_SECTORS = [
  {
    title: "Corporate & Commercial",
    sites: ["Office Buildings", "Corporate Institutions", "Retail Malls", "Shopping Centers / Plazas"],
  },
  {
    title: "Residential & Hospitality",
    sites: ["Residential Apartment Homes", "Concierge", "Hotel Security"],
  },
  {
    title: "Critical & Public",
    sites: ["Hospitals", "Schools", "Aviation Security", "Maritime Security", "Oil & Gas Pipeline Monitoring"],
  },
  {
    title: "Projects & Events",
    sites: ["Construction Sites", "Event Security", "Close / Executive Protection", "Mobile Patrol Service"],
  },
] as const;

// Draws together the assurance themes stated across the document.
export const ASSURANCE = [
  {
    title: "Available 24 / 7",
    body: "Our response and escalation team is on call 24 hours a day, 7 days a week to answer questions or concerns — a live issue on your site never waits for office hours.",
  },
  {
    title: "100% contract compliance",
    body: "Quality Control provides independent corporate assessment, on-site management evaluation and consistent ongoing inspection, with inspection results documented and reported at every level.",
  },
  {
    title: "Reports in real time",
    body: "Officer presence on site, incident reports and daily activity reports are all accessible to our Quality Assurance team and to clients as they are filed.",
  },
  {
    title: "A feedback loop that closes",
    body: "A comprehensive feedback mechanism and processing department, managed by Business Development and Quality Assurance, exists specifically to assure client satisfaction.",
  },
] as const;

/** The menu icons specified in the flowchart. */
export const MENU_ICONS = [
  {
    label: "Who We Are",
    href: "/who-we-are",
    blurb:
      "An experience-based, low-risk, best-value custom security solution organization — led by veterans and seasoned security technocrats.",
  },
  {
    label: "Training Academy",
    href: "/training-academy",
    blurb:
      "An A-rated academy delivering guard and firearm certification across Maryland, DC and Virginia — for our officers and for the wider industry.",
  },
  {
    label: "Career",
    href: "/career",
    blurb:
      "Rewarding full-time and part-time opportunities with an equal opportunity employer that promotes from within.",
  },
  {
    label: "Contact Us",
    href: "/contact",
    blurb:
      "Reach the corporate headquarters in Lanham, Maryland — with a response and escalation team on call 24/7.",
  },
] as const;

// ---------------------------------------------------------------------------
// Who We Are
// ---------------------------------------------------------------------------

export const WHO_WE_ARE: string[] = [
  "PGS is an experience-based, low-risk, best-value and innovative custom security solution organization. Over the years as a full service security company we have demonstrated our competence in providing security solutions to several clients.",
  "PGS's management team is comprised of veterans and other highly seasoned security technocrat, business and Administrative professionals with many years of combined years of experience with military, law enforcement and security services with government agencies and corporate organizations.",
  "At PGS, we are client focused as our team work with clients to create custom security procedures/program specifically for each location where we are entrusted with security operations. Procedure are inclusive and well guided by experts (PGS) advice prior implementation.",
  "Our response and escalation team are available 24 hours a day, 7 days a week to respond to questions or concerns of clients as this enables us to continually observe and maintain hydra headed assessment and real time Communication Bridge with our clients.",
  "We pride ourselves in compliance and strict adherence to security best practices in enhancing the protection and safety of our client's facilities, to this extent we employ the use of technology and software in ensuring that our security officers are mobile but always connected and communicating in a triad using Security Officer Reporting App, which enables our management and clients to have instant access to the officer's reports whenever and wherever they need them.",
];

export const QUALITY_CONTROL: string[] = [
  "PGS's Quality Control (QC) ensures 100% contract compliance, provides independent corporate assessment and on-site management evaluation, and consistent and on-going inspection of security operations in order foster innovation and excellence in contract management and performance. At every level of the quality control process, the QC mandates the documentation and reporting of inspection results. In the event a contract deficiency is detected, the QC provides for timely notification of such deficiency to our client, a list of corrective action(s) to eradicate the deficiency, and the swift and precise execution of such corrective action.",
  "As part of our value addition to enhance optimization of client's experience, we employ the use of Officer Report app to ensure officers presence on site as scheduled, incident report, daily activity report, all of which are accessible to our Quality Assurance team and clients in real-time.",
];

export const FINANCIAL_STABILITY: string[] = [
  "We have an outstanding experience and performance record at PGS which is as the result of long term financial and management commitment to quality and responsiveness. This commitment has overtime been sustained by the outstanding performance of our employees. Our success is attributed to our ability to develop long term partnerships with our clients, and to treat our clients with utmost integrity.",
  "PGS is able to consistently attract and retain high quality personnel at every level by offering attractive remuneration, benefits and meeting with our financial obligations. Most importantly, we treat our employees fairly and with respect. This in-turn leads to high retention within our organization, better service to our customers, and a company culture fostering higher efficiency and effectiveness.",
  "Over the years, PGS has met all financial obligations without compromising our books. Our financial-cost containment has been and will continue to be a PGS operating ethic. PGS adheres to a comprehensive, rigorous system controlled by performance indicators. Contract activities are be led, performed, documented, evaluated, and reported in a manner that provides the client with assurance that functions are effectively and efficiently accomplished.",
  "PGS fully recognizes the first step to ensuring stability is to provide its officers with wages and benefits which are market competitive. Our track record of maintaining low employee turnover, across projects similar in size/scope/complexity is an indication that our approach to officer retention is having a measurable positive impact.",
  "PGS maintains cost effectiveness and efficiencies by detailed tracking and analysis of expenditures against periodic budget models. Variance analysis allows the model projections to be adjusted based upon actual cost experience. This process facilitates management of contract costs. Furthermore, we employ PGS' corporate audit group to conduct semi-annual audits of all contract cost records. Our customers have rated us very highly in our ability to enhance service without jeopardizing cost savings.",
  "We invite and encourage you to validate our business performance by checking with our current clients.",
];

// ---------------------------------------------------------------------------
// Training Academy
// ---------------------------------------------------------------------------

export const ACADEMY = {
  name: "PGS Training Academy",
  abbreviation: "PGSTA",
  vaSchoolNumber: "88-2042",
  intro: [
    "Police guard training academy (PGSTA) is established to provide a flagship of value based resource and knowledge / field base training for aspiring security officers. We also provide continuous training for security officers in DMV area. Each instructor is certified in the area in which they are instructing. Our entire staff of security officers/guards have applicable licenses and are in compliance with all state and local government laws and policies. Our instructors are highly qualified with years of experience on the field as they bring their experience to bear in the devolution of knowledge to aspiring officers. Our training facility is equipped with audio visual equipment's for improved and enhanced learning within a comfortable ambience. Join us today and let's help you build an exciting career in security service delivery.",
    "Our team of trained officers have completed an intensive 40 hour guard training program. All officers receive mandatory instruction in emergency response, evacuation procedures, access control procedures, and security patrolling. Officers also receive an additional 16 hours of instruction in customer relations. Each Officer receives baton training and must have a baton certification card, which is renewed annually. Armed officers receive 40 additional hours of weapons training and they must renew annually. Officers are trained on both semi-automatic weapons as well as revolvers. All armed officers are trained on the proper way of exchanging weapons and the use of a Bullet Trap. All armed officers are required to carry a Company Firearms Safety Card while on duty. Each officer must be certified by the American Red Cross in Adult, Child and Infant CPR as well as complete the American Red Cross 1st Aid Course.",
  ],
} as const;

// What sets the academy apart, developed from the document's account of its
// instructors, staff licensing, facility and role as a feeder academy.
export const ACADEMY_PILLARS = [
  {
    title: "Instructors certified in what they teach",
    body: "Each instructor is certified in the area in which they are instructing — no one teaches outside their own credential. They arrive with years of experience on the field and bring it to bear in the devolution of knowledge to aspiring officers, so instruction reflects how a post actually behaves rather than how a manual describes it.",
  },
  {
    title: "Licensed and compliant throughout",
    body: "Our entire staff of security officers and guards hold applicable licenses and are in compliance with all state and local government laws and policies. That compliance is the reason a certificate from this academy stands up when a client, a contract or a regulator asks to see it.",
  },
  {
    title: "A facility built for learning",
    body: "The training facility is equipped with audio-visual equipment for improved and enhanced learning, within a comfortable ambience. Classroom instruction is paired with field-based work, so trainees practise what they have been taught before they are certified on it.",
  },
  {
    title: "An A-rated feeder academy",
    body: "PGSTA is the primary feeder academy for our own well-groomed officers, and also serves as a feeder academy for other security companies across the DMV. Officers who train here go on to work here — or to work for the wider industry to the same standard.",
  },
] as const;

// The 40-hour programme and renewal requirements, broken out of the document's
// single dense paragraph into the structure a prospective trainee needs.
export const TRAINING_STANDARDS = [
  {
    title: "40-hour guard training program",
    detail:
      "Every officer completes an intensive 40-hour program with mandatory instruction in emergency response, evacuation procedures, access control procedures and security patrolling.",
  },
  {
    title: "16 additional hours in customer relations",
    detail:
      "Officers receive a further 16 hours of instruction in customer relations — because most of what an officer does on a post is talk to people, not confront them.",
  },
  {
    title: "Baton certification, renewed annually",
    detail:
      "Each officer receives baton training and must hold a baton certification card. The card is renewed every year; it does not carry over indefinitely.",
  },
  {
    title: "40 additional hours of weapons training for armed officers",
    detail:
      "Armed officers complete 40 further hours of weapons training and renew annually. Training covers both semi-automatic weapons and revolvers, and every armed officer is trained in the proper way of exchanging weapons and in the use of a Bullet Trap.",
  },
  {
    title: "Company Firearms Safety Card carried on duty",
    detail:
      "All armed officers are required to carry a Company Firearms Safety Card while on duty — a standing check that certification is current, not merely once obtained.",
  },
  {
    title: "American Red Cross CPR and First Aid",
    detail:
      "Each officer must be certified by the American Red Cross in Adult, Child and Infant CPR, and must complete the American Red Cross 1st Aid Course.",
  },
] as const;

export const WHO_SHOULD_TRAIN = [
  {
    title: "Aspiring security officers",
    body: "Entering the industry with no prior certification. Start with an unarmed guard track and build from there.",
  },
  {
    title: "Serving officers due for renewal",
    body: "Baton certification renews annually, and armed certification renews annually. We run continuous training for officers across the DMV area.",
  },
  {
    title: "Officers from other companies",
    body: "PGSTA serves as a feeder academy for other security companies, not only for our own roster.",
  },
  {
    title: "Veterans and career changers",
    body: "Military, corrections and police backgrounds transfer well. Prior experience is an asset in this field, and we will tell you plainly which certifications you still need.",
  },
] as const;

export const ACADEMY_JOURNEY = [
  {
    step: "01",
    title: "Choose your track",
    body: "Guard Training for unarmed certification and defensive tools, or Firearm Training for armed certification in Maryland, DC or Virginia.",
  },
  {
    step: "02",
    title: "Register for a session",
    body: "Pick a scheduled date and register online. Dates, times and subjects change periodically, and the academy confirms your place before the session runs.",
  },
  {
    step: "03",
    title: "Classroom and field instruction",
    body: "Instruction is delivered by an instructor certified in that subject, using the academy's audio-visual facility and practical range or field exercises where the course requires them.",
  },
  {
    step: "04",
    title: "Certify",
    body: "Complete the course requirements and receive the certification the course carries — the same certification our own officers hold.",
  },
  {
    step: "05",
    title: "Keep it current",
    body: "Baton and armed certifications renew annually. We run continuous training so renewals do not lapse and you stay deployable.",
  },
] as const;

export type CourseTrack = "guard" | "firearm";

export interface Course {
  slug: string;
  title: string;
  track: CourseTrack;
  /** Short line used on listing cards. */
  summary: string;
  /** Narrative shown when the course is opened, per the client's note. */
  body: string[];
  /** Optional syllabus bullets, where the client supplied them. */
  modules?: string[];
  /** Set where the client's document did not supply narrative copy. */
  needsClientCopy?: boolean;
}

export const COURSES: Course[] = [
  // --- Guard Training ------------------------------------------------------
  {
    slug: "md-unarmed",
    title: "MD Unarmed",
    track: "guard",
    summary: "Maryland unarmed security certification.",
    body: ["Trainees will be instructed on the following:"],
    modules: [
      "OC, Baton, and Handcuffing Certifications",
      "Citizen's Arrest",
      "COMAR of MD",
      "Officer Survival",
      "Customer Service",
      "Report Writing",
    ],
  },
  {
    slug: "dc-so",
    title: "DC SO",
    track: "guard",
    summary: "District of Columbia Security Officer certification.",
    body: ["Trainees will be instructed on the following:"],
    modules: [
      "OC, Baton and Handcuffing Certifications",
      "General Orders / Special Orders",
      "Criminal Codes (MPDC)",
      "Use of Force",
      "Report Writing",
      "Role of a Police Officer",
      "Introduction to Terrorism Awareness",
      "Building Evacuation",
      "Customer Service",
    ],
  },
  {
    slug: "va-dcjs-unarmed",
    title: "VA DCJS Unarmed",
    track: "guard",
    summary: `Virginia DCJS unarmed certification — Training School ${ACADEMY.vaSchoolNumber}.`,
    body: [
      `Delivered under Virginia Department of Criminal Justice Services Training School ${ACADEMY.vaSchoolNumber}.`,
    ],
    needsClientCopy: true,
  },
  {
    slug: "handcuff",
    title: "Handcuff",
    track: "guard",
    summary: "Functionality and effective deployment of handcuffs on duty.",
    body: [
      "Officers will receive basic instruction of the functionality of the hand cuffs and expandable baton, as well as techniques on how to deploy and use these tools while on duty effectively.",
    ],
  },
  {
    slug: "oc-spray",
    title: "OC Spray",
    track: "guard",
    summary: "Defensive tactics and field decontamination for Oleoresin Capsicum.",
    body: [
      "This course instructs officer in the defensive tactics and field decontamination techniques to be used when carrying Oleoresin Capsicum “OC”.",
    ],
  },
  {
    slug: "baton",
    title: "Baton",
    track: "guard",
    summary: "Expandable baton certification, renewed annually.",
    body: [
      "Officers will receive basic instruction of the functionality of the hand cuffs and expandable baton, as well as techniques on how to deploy and use these tools while on duty effectively.",
      "Each Officer receives baton training and must have a baton certification card, which is renewed annually.",
    ],
  },
  {
    slug: "cpr-first-aid",
    title: "CPR / First Aid",
    track: "guard",
    summary: "American Red Cross Adult, Child and Infant CPR plus 1st Aid.",
    body: [
      "Each officer must be certified by the American Red Cross in Adult, Child and Infant CPR as well as complete the American Red Cross 1st Aid Course.",
    ],
  },

  // --- Firearm Training ----------------------------------------------------
  {
    slug: "md-armed",
    title: "MD Armed",
    track: "firearm",
    summary: "Maryland armed security certification, including firearms training.",
    body: ["Trainees will be instructed on the following:"],
    modules: [
      "OC, Baton, and Handcuffing Certifications",
      "Citizen's Arrest",
      "COMAR of MD",
      "Firearms Training (for armed certification only)",
      "Officer Survival",
      "Customer Service",
      "Report Writing",
    ],
  },
  {
    slug: "dc-spo",
    title: "DC SPO",
    track: "firearm",
    summary: "District of Columbia Special Police Officer certification.",
    body: ["Trainees will be instructed on the following:"],
    modules: [
      "OC, Baton and Handcuffing Certifications",
      "Firearms Training (for armed officers only)",
      "General Orders / Special Orders",
      "Criminal Codes (MPDC)",
      "Use of Force",
      "Report Writing",
      "Role of a Police Officer",
      "Introduction to Terrorism Awareness",
      "Building Evacuation",
      "Customer Service",
    ],
  },
  {
    slug: "va-dcjs-armed",
    title: "VA DCJS Armed",
    track: "firearm",
    summary: `Virginia DCJS armed certification — Training School ${ACADEMY.vaSchoolNumber}.`,
    body: [
      `Delivered under Virginia Department of Criminal Justice Services Training School ${ACADEMY.vaSchoolNumber}.`,
    ],
    needsClientCopy: true,
  },
];

/** The firearms narrative, shown alongside every course on the firearm track. */
export const FIREARMS_NARRATIVE =
  "The firearms training course can be as short as ten hours. Officers will get the NRA's The Basics of Pistol Shooting handbook and intensive lessons in safety, gun handling, the various types of pistols (semi-automatic & revolvers), the fundamentals of pistol marksmanship, various pistol firing positions, several practical exercises on the firing range, cleaning, storage, and a summary of pistol sports and activities.";

/** "SECURITY CERT / TRAINING" top-icon catalogue from the document. */
export const CERTIFICATION_CATALOGUE: string[] = [
  "Maryland Armed / Unarmed",
  "DC SPO, SO",
  "VA DCJS",
  "Handcuffing and Baton",
  "OC Spray",
  "CPR",
  "Private Security",
  "Private Investigator",
];

export const guardCourses = COURSES.filter((c) => c.track === "guard");
export const firearmCourses = COURSES.filter((c) => c.track === "firearm");

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

// ---------------------------------------------------------------------------
// Career
// ---------------------------------------------------------------------------

export const CAREER_INTRO: string[] = [
  "PGS offers rewarding and exciting career opportunities to qualified individuals willing to expand their career and views on security. Are you are interested in full-time or part-time positions we encourage you to review our current job opportunities. PGS, Inc. is an equal opportunity employer. We do not discriminate in hiring or employment on the basis of race, sex, age, religion, national origin, sexual orientation, personal appearance, political affiliation, marital status, family responsibilities, disability or status as a veteran.",
  "Our believe is hinged on the fact that a diverse group of employees adds to our success and progress in the service arena, we make special efforts to recruit qualified employees. Our Director of Human Resources works concertedly with the Operations manager, Regional and Area Managers, to ensure that the applications of minority candidates receive a comprehensive and fair review.",
];

export const CAREER_REQUIREMENTS: string[] = [
  "Must be 21 yrs. of age",
  "US citizen or Green Card",
  "Military / security / corrections / police officer experience a plus",
  "High School Diploma or Equivalent. Some contracts require officers who have at least 60 college credit hours (must provide official transcript to work on the contract with training).",
  "Must be able to read and write",
  "Must have command of the English language, and will represent the company well.",
  "Proof of training / certifications — to include: copies of training completion — X-Ray, refresher, DCJS, DC-SPO, MD signed range roster, etc.",
  "Current qualifications and proof of / MEB / First Aid / CPR Cards",
];

/** Path the downloadable application PDF will be served from once supplied. */
export const APPLICATION_PDF = "/forms/pgs-employment-application.pdf";
