import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/app/lib/data';
import SectionContainer from '@/app/components/ui/SectionContainer';
import GradientText from '@/app/components/ui/GradientText';
import AnimatedSection from '@/app/components/animation/AnimatedSection';
import Card from '@/app/components/ui/Card';

export default function ProjectsSection() {
  return (
    <SectionContainer id="projects" className="bg-zinc-50 dark:bg-zinc-900/50">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <GradientText>Projects</GradientText>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Recent DevOps projects and infrastructure implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} animation="fade-up" delay={index * 100}>
              <Card className="h-full flex flex-col">
                {/* Project Image */}
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden relative">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold opacity-50">
                        {project.title.substring(0, 2)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 text-zinc-800 dark:text-zinc-200">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}
