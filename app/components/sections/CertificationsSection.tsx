import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { certifications } from '@/app/lib/data';
import SectionContainer from '@/app/components/ui/SectionContainer';
import GradientText from '@/app/components/ui/GradientText';
import AnimatedSection from '@/app/components/animation/AnimatedSection';
import Card from '@/app/components/ui/Card';

export default function CertificationsSection() {
  return (
    <SectionContainer id="certifications" className="bg-zinc-50 dark:bg-zinc-900/50">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText>Certifications</GradientText>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Professional certifications and credentials
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedSection key={cert.id} animation="fade-up" delay={index * 50}>
              <Card className="h-full flex flex-col">
                {/* Certificate Badge */}
                <div className="w-16 h-16 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center mb-4 p-2">
                  {cert.badgeImage ? (
                    <Image
                      src={cert.badgeImage}
                      alt={`${cert.name} badge`}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-500 to-purple-500" />
                  )}
                </div>

                {/* Certificate Name */}
                <h3 className="text-lg font-bold mb-2 text-zinc-800 dark:text-zinc-200">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                  {cert.issuer}
                </p>

                {/* Date */}
                <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-4 flex-grow">
                  Issued: {cert.date}
                </p>

                {/* Credential Link */}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Credential</span>
                  </a>
                )}
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}
