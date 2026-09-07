export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  link: string;
  features?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Slide {
  image: string;
  eyebrow: string;
  heading: string;
  description: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
}
