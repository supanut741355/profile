import { skills } from '@/app/lib/data';
import SectionContainer from '@/app/components/ui/SectionContainer';
import GradientText from '@/app/components/ui/GradientText';
import AnimatedSection from '@/app/components/animation/AnimatedSection';
import SkillBadge from '@/app/components/ui/SkillBadge';

export default function SkillsSection() {
  const categories = ['Cloud', 'CI/CD', 'IaC', 'Containers', 'Monitoring', 'Scripting'] as const;

  return (
    <SectionContainer id="skills">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <GradientText>Technologies</GradientText>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Tools and platforms I use to build and maintain infrastructure
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category);

            return (
              <AnimatedSection key={category} delay={categoryIndex * 100}>
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-zinc-200">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill, skillIndex) => (
                      <AnimatedSection
                        key={skill.name}
                        animation="fade-in"
                        delay={categoryIndex * 100 + skillIndex * 50}
                      >
                        <SkillBadge
                          name={skill.name}
                          category={skill.category}
                          icon={skill.icon}
                        />
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}
