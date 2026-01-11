import { Project, Experience, Certification, Skill } from '@/app/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Kubernetes Multi-Cluster Setup',
    description: 'Designed and deployed a multi-region Kubernetes infrastructure using Terraform and ArgoCD for GitOps deployment. Implemented auto-scaling, monitoring, and disaster recovery strategies.',
    technologies: ['Kubernetes', 'Terraform', 'ArgoCD', 'AWS', 'Helm', 'Prometheus'],
    githubUrl: 'https://github.com/johndoe/k8s-multi-cluster',
    image: '/images/k8s-project.jpg'
  },
  {
    id: '2',
    title: 'CI/CD Pipeline Optimization',
    description: 'Redesigned CI/CD pipelines using GitHub Actions and Docker, reducing deployment time by 60% through parallel job execution, intelligent caching, and optimized build strategies.',
    technologies: ['GitHub Actions', 'Docker', 'Node.js', 'Jest', 'SonarQube'],
    githubUrl: 'https://github.com/johndoe/cicd-optimization',
    liveUrl: 'https://pipeline-metrics.example.com'
  },
  {
    id: '3',
    title: 'Infrastructure Monitoring Dashboard',
    description: 'Built comprehensive monitoring solution using Prometheus, Grafana, and ELK stack. Created custom dashboards for real-time infrastructure observability and alerting.',
    technologies: ['Prometheus', 'Grafana', 'Elasticsearch', 'Kibana', 'Logstash', 'AlertManager'],
    githubUrl: 'https://github.com/johndoe/monitoring-dashboard',
    liveUrl: 'https://monitoring-demo.example.com'
  },
  {
    id: '4',
    title: 'Infrastructure as Code Framework',
    description: 'Developed reusable Terraform modules and Ansible playbooks for standardized infrastructure provisioning across multiple environments and cloud providers.',
    technologies: ['Terraform', 'Ansible', 'AWS', 'Azure', 'Python', 'Bash'],
    githubUrl: 'https://github.com/johndoe/iac-framework'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechCorp',
    role: 'Senior DevOps Engineer',
    duration: '2021 - Present',
    achievements: [
      'Led migration of monolithic applications to microservices architecture on Kubernetes, improving scalability and reducing deployment time by 70%',
      'Implemented comprehensive monitoring and alerting system using Prometheus and Grafana, reducing MTTR by 50%',
      'Designed and deployed multi-region disaster recovery solution with RTO < 15 minutes',
      'Mentored team of 5 junior DevOps engineers and established best practices for infrastructure as code'
    ]
  },
  {
    id: '2',
    company: 'StartupXYZ',
    role: 'DevOps Engineer',
    duration: '2019 - 2021',
    achievements: [
      'Built CI/CD pipelines from scratch using GitLab CI, reducing release cycles from weekly to daily',
      'Automated infrastructure provisioning using Terraform, managing 100+ AWS resources',
      'Implemented container orchestration with Docker Swarm, later migrated to Kubernetes',
      'Reduced cloud costs by 35% through resource optimization and auto-scaling policies'
    ]
  },
  {
    id: '3',
    company: 'CloudSolutions Inc',
    role: 'Junior DevOps Engineer',
    duration: '2018 - 2019',
    achievements: [
      'Maintained and monitored production infrastructure serving 1M+ users',
      'Automated deployment processes using Jenkins and Ansible',
      'Implemented backup and disaster recovery procedures',
      'Collaborated with development teams to optimize application performance'
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialUrl: 'https://www.credly.com/earner/earned/badge/17dab03f-bbfd-4621-b5eb-6714ba4acd9d'
  },
  {
    id: '2',
    name: 'Cloud Digital Leader Certification',
    issuer: 'Google Cloud',
    date: '2024',
    credentialUrl: 'https://www.credly.com/earner/earned/badge/9509b54c-43ff-4333-825a-508dbd13fc17'
  },
  {
    id: '3',
    name: 'MongoDB Associate Database Administrator',
    issuer: 'MongoDB',
    date: '2024',
    credentialUrl: 'https://www.credly.com/earner/earned/badge/7e70cbba-78c2-4395-9e6c-2c7e8b36282a'
  },
  {
    id: '4',
    name: 'Prometheus Certified Associate',
    issuer: 'Cloud Native Computing Foundation',
    date: '2025',
    credentialUrl: 'https://www.credly.com/earner/earned/badge/e6a5326e-0bda-4bdc-b803-8188ec0ae4c2'
  },
  {
    id: '5',
    name: 'Linux Foundation Certified Systems Administrator',
    issuer: 'Cloud Native Computing Foundation',
    date: '2025',
    credentialUrl: 'https://www.credly.com/earner/earned/badge/c73eb29a-7710-4df8-97af-71ce040048b1'
  },
];

export const skills: Skill[] = [
  // Cloud
  { name: 'AWS', category: 'Cloud', icon: 'Cloud' },
  { name: 'Google Cloud', category: 'Cloud', icon: 'Cloud' },
  { name: 'DigitalOcean', category: 'Cloud', icon: 'Cloud' },

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
