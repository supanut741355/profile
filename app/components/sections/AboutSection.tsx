import { User } from 'lucide-react';
import { siteConfig, stats } from '@/app/lib/constants';
import SectionContainer from '@/app/components/ui/SectionContainer';
import GradientText from '@/app/components/ui/GradientText';
import AnimatedSection from '@/app/components/animation/AnimatedSection';
import Card from '@/app/components/ui/Card';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <SectionContainer id="about" className="bg-zinc-50 dark:bg-zinc-900/50">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <GradientText>Me</GradientText>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Building reliable systems through automation and continuous improvement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Profile Image Placeholder */}
          <AnimatedSection animation="slide-right">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                  <div className="relative w-full h-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                    <Image
                      src="/assets/hero.jpeg"
                      alt="yoyo"
                      fill
                      className="object-cover rounded-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          {/* About Text */}
          <AnimatedSection animation="slide-left" delay={200}>
            <div className="space-y-4">
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {siteConfig.about}
              </p>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {siteConfig.philosophy}
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <AnimatedSection delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center" hover={false}>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <GradientText>{stat.value}</GradientText>
                </div>
                <div className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </AnimatedSection>
    </SectionContainer>
  );
}
