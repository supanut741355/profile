import { SiteConfig, NavItem, SocialLink } from '@/app/types';

export const siteConfig: SiteConfig = {
  name: 'John Doe',
  title: 'Senior DevOps Engineer',
  tagline: 'Automating infrastructure, optimizing pipelines, and building resilient cloud-native systems.',
  email: 'john.doe@example.com',
  about: `DevOps engineer with 5+ years of experience designing and implementing CI/CD pipelines, managing cloud infrastructure, and championing DevOps culture. Passionate about automation, infrastructure as code, and continuous improvement.`,
  philosophy: 'Building reliable systems through automation, monitoring, and continuous feedback loops.'
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/johndoe',
    icon: 'Github'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/johndoe',
    icon: 'Linkedin'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/johndoe',
    icon: 'Twitter'
  }
];

export const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Deployed', value: '50+' },
  { label: 'Certifications', value: '6' },
  { label: 'Cloud Platforms', value: '3' }
];
