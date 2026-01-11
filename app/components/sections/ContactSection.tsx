'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, BookOpen, Check } from 'lucide-react';
import { siteConfig, socialLinks } from '@/app/lib/constants';
import SectionContainer from '@/app/components/ui/SectionContainer';
import GradientText from '@/app/components/ui/GradientText';
import AnimatedSection from '@/app/components/animation/AnimatedSection';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Medium: BookOpen
  };

  return (
    <SectionContainer id="contact">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <GradientText>Touch</GradientText>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Let's connect and discuss how we can work together
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Email */}
          <AnimatedSection animation="fade-up" delay={100}>
            <button
              onClick={copyEmail}
              className="w-full group mb-8 p-6 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  {copied ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <Mail className="w-6 h-6" />
                  )}
                </div>
                <div className="text-left">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                    Email Address
                  </p>
                  <p className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {siteConfig.email}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                    {copied ? 'Copied to clipboard!' : 'Click to copy'}
                  </p>
                </div>
              </div>
            </button>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div>
              <p className="text-center text-zinc-600 dark:text-zinc-400 mb-6">
                Or connect with me on social media
              </p>
              <div className="flex justify-center gap-6">
                {socialLinks.map((link, index) => {
                  const Icon = iconMap[link.icon as keyof typeof iconMap];
                  return (
                    <AnimatedSection
                      key={link.platform}
                      animation="fade-in"
                      delay={300 + index * 100}
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-2"
                      >
                        <div className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-800 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                          {Icon && <Icon className="w-6 h-6" />}
                        </div>
                        <span className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {link.platform}
                        </span>
                      </a>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}
