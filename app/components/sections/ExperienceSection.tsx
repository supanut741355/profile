import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '@/app/lib/data';
import SectionContainer from '@/app/components/ui/SectionContainer';
import GradientText from '@/app/components/ui/GradientText';
import AnimatedSection from '@/app/components/animation/AnimatedSection';
import Card from '@/app/components/ui/Card';

export default function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <GradientText>Experience</GradientText>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            My professional journey in DevOps and infrastructure engineering
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimatedSection
                key={exp.id}
                animation={index % 2 === 0 ? 'slide-right' : 'slide-left'}
                delay={index * 100}
              >
                <div
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-white dark:border-zinc-900 z-10" />

                  {/* Content */}
                  <div className="md:w-1/2">
                    <Card>
                      {/* Company Logo Placeholder */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
                            {exp.role}
                          </h3>
                          <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed flex gap-2"
                          >
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}
