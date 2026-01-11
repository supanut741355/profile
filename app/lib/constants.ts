import { SiteConfig, NavItem, SocialLink } from '@/app/types';

export const siteConfig: SiteConfig = {
  name: 'Supanut Laddayam',
  title: 'DevOps Engineer / Platform engineer',
  tagline: 'Automating infrastructure, optimizing pipelines, and building resilient cloud-native systems.',
  email: 'supanut.wizard@gmail.com',
  about: `DevOps engineer with 2+ years of experience designing and implementing CI/CD pipelines, managing cloud infrastructure, and championing DevOps culture. Passionate about automation, infrastructure as code, and continuous improvement.`,
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
    url: 'https://github.com/supanut741355',
    icon: 'Github'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/supanut-laddayam-a9b29a1b0/',
    icon: 'Linkedin'
  },
  {
    platform: 'Medium',
    url: 'https://medium.com/@astronut1911',
    icon: 'Medium'
  }
];

export const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects Deployed', value: '10+' },
  { label: 'Certifications', value: '5' },
  { label: 'Cloud Platforms', value: '2' }
];
