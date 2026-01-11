export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  achievements: string[];
  logo?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeImage?: string;
}

export interface Skill {
  name: string;
  category: 'Cloud' | 'CI/CD' | 'IaC' | 'Containers' | 'Monitoring' | 'Scripting';
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  email: string;
  about: string;
  philosophy: string;
}

export interface NavItem {
  label: string;
  href: string;
}
