export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface SubjectOption {
  value: string;
  label: string;
}
