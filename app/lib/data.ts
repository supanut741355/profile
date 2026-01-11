import { Project, Experience, Certification, Skill } from '@/app/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Kubernetes Multi-Cluster Setup',
    description: 'Designed and manage Kubernetes infrastructure using Helm and ArgoCD for GitOps deployment.',
    technologies: ['GKE', 'ArgoCD', 'Helm'],
    image: '/images/kubernetes-cluster.svg'
  },
  {
    id: '2',
    title: 'CI/CD Pipeline',
    description: 'Build CI/CD pipelines using GitHub Actions and GitOps(ArgoCD) for frontend, backend, ai project.',
    technologies: ['GitHub Actions', 'GitlabCI','Docker', 'GitOps', 'ArgoCD'],
    image: '/images/cicd-pipeline.svg'
  },
  {
    id: '3',
    title: 'Infrastructure Monitoring Dashboard',
    description: 'Built monitoring micro service in GKE by using Prometheus, Grafana. Created custom dashboards for real-time infrastructure observability and alerting.',
    technologies: ['Prometheus', 'Grafana', 'AlertManager'],
    image: '/images/monitoring-dashboard.svg'
  },
  {
    id: '4',
    title: 'Config DNS and network',
    description: 'Set up a domain name, configure custom security rules, and use Zero Trust to create internal access.',
    technologies: ['Cloudfalre', 'Zero trust', 'CDN'],
    image: '/images/dns-network.svg'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'iOS developer',
    role: 'Junior ios developer ',
    duration: '2020',
    achievements: [
      'Build mobile application with VIPER design',
      'Build internal organization mobile application'
    ]
  },
  {
    id: '2',
    company: 'Open Source Technology ltd.',
    role: 'Backend developer',
    duration: '2020-2021',
    achievements: [
      'Build backend application to serve frontend team',
      'Build leave management application',
      'Design micro service architecture'
    ]
  },
  {
    id: '3',
    company: 'Finstable co, ltd.',
    role: 'Fullstack developer & Blockchain developer',
    duration: '2021 - 2023',
    achievements: [
      'Build web application',
      'Build web3 application',
      'Build github action CI/CD',
      'Deploy application to AWS EC2, ECS',
      'Config VPC network',
      'Manage Database'
    ]
  },
  {
    id: '4',
    company: 'Myorder Marketing Co., Ltd.',
    role: 'DevOps engineer, Platform engineer',
    duration: '2023 - present',
    achievements: [
      'Manage multiple Google cloud project and resource.',
      'Manage multi cluster.',
      'Manage GKE',
      'Manage mongoDB',
      'Create helm-template',
      'Config Linux server',
      'Config argoCD',
      'Build CI/CD gitlab ',
      'Build CI/CD github action ',
      'Config observability',
      'Config alert',
      'Config DNS and rule at Cloudflare'
    ]
  },
];

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialUrl: 'https://www.credly.com/earner/earned/badge/17dab03f-bbfd-4621-b5eb-6714ba4acd9d',
    badgeImage: '/badges/aws.png'
  },
  {
    id: '2',
    name: 'Cloud Digital Leader Certification',
    issuer: 'Google Cloud',
    date: '2024',
    credentialUrl: 'https://www.credly.com/earner/earned/badge/9509b54c-43ff-4333-825a-508dbd13fc17',
    badgeImage: '/badges/google_cloud.png'
  },
  {
    id: '3',
    name: 'MongoDB Associate Database Administrator',
    issuer: 'MongoDB',
    date: '2024',
    credentialUrl: 'https://www.credly.com/earner/earned/badge/7e70cbba-78c2-4395-9e6c-2c7e8b36282a',
    badgeImage: '/badges/mongo.png'
  },
  {
    id: '4',
    name: 'Prometheus Certified Associate',
    issuer: 'Cloud Native Computing Foundation',
    date: '2025',
    credentialUrl: 'https://www.credly.com/earner/earned/badge/e6a5326e-0bda-4bdc-b803-8188ec0ae4c2',
    badgeImage: '/badges/prometheus.png'
  },
  {
    id: '5',
    name: 'Linux Foundation Certified Systems Administrator',
    issuer: 'Cloud Native Computing Foundation',
    date: '2025',
    credentialUrl: 'https://www.credly.com/earner/earned/badge/c73eb29a-7710-4df8-97af-71ce040048b1',
    badgeImage: '/badges/linux.png'
  },
];

export const skills: Skill[] = [
  // Cloud
  { name: 'AWS', category: 'Cloud', icon: 'Cloud' },
  { name: 'Google Cloud', category: 'Cloud', icon: 'Cloud' },
  { name: 'DigitalOcean', category: 'Cloud', icon: 'Cloud' },
  { name: 'Cloudflare', category: 'Cloud', icon: 'Cloud' },

  // CI/CD
  { name: 'GitLab CI', category: 'CI/CD', icon: 'GitBranch' },
  { name: 'GitHub Actions', category: 'CI/CD', icon: 'Github' },
  { name: 'ArgoCD', category: 'CI/CD', icon: 'GitMerge' },

  // IaC
  { name: 'Terraform', category: 'IaC', icon: 'FileCode' },

  // Containers
  { name: 'Docker', category: 'Containers', icon: 'Container' },
  { name: 'Kubernetes', category: 'Containers', icon: 'Boxes' },
  { name: 'Helm', category: 'Containers', icon: 'Package' },
  { name: 'Docker Compose', category: 'Containers', icon: 'Layers' },

  // Monitoring
  { name: 'Prometheus', category: 'Monitoring', icon: 'Activity' },
  { name: 'Grafana', category: 'Monitoring', icon: 'BarChart' },

  // Scripting
  { name: 'Bash', category: 'Scripting', icon: 'Terminal' },
  { name: 'Python', category: 'Scripting', icon: 'Code2' },
  { name: 'Go', category: 'Scripting', icon: 'Zap' },
  { name: 'PowerShell', category: 'Scripting', icon: 'Terminal' }
];
