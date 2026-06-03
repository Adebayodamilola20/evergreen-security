export interface Position {
  value: string;
  label: string;
}

export interface Stat {
  end: number;
  label: string;
  suffix: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  benefits: string[];
  useCases: string[];
}

export interface SubjectOption {
  value: string;
  label: string;
}

export interface Industry {
  name: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialMediaPlatform {
  name: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface TrainingProgram {
  title: string;
  description: string;
  modules: string[];
  duration: string;
}

export interface TrainingMethodology {
  title: string;
  description: string;
}

export interface OverseasService {
  title: string;
  description: string;
  features: string[];
}

export interface OverseasLocation {
  country: string;
  flag: string;
  headquarters: string;
  description: string;
  services: string[];
}

export interface QualityStandard {
  title: string;
  description: string;
  metrics: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface CareerBenefit {
  title: string;
  description: string;
}

export interface CareerPosition {
  title: string;
  location: string;
  type: string;
  description: string;
}