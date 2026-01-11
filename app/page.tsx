import HeroSection from '@/app/components/sections/HeroSection';
import AboutSection from '@/app/components/sections/AboutSection';
import SkillsSection from '@/app/components/sections/SkillsSection';
import ProjectsSection from '@/app/components/sections/ProjectsSection';
import ExperienceSection from '@/app/components/sections/ExperienceSection';
import CertificationsSection from '@/app/components/sections/CertificationsSection';
import ContactSection from '@/app/components/sections/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
}
