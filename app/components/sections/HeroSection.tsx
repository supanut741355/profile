'use client';

import { ChevronDown, Briefcase, Mail } from 'lucide-react';
import { siteConfig } from '@/app/lib/constants';
import GradientText from '@/app/components/ui/GradientText';
import Button from '@/app/components/ui/Button';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-zinc-900 dark:via-blue-900/20 dark:to-purple-900/20" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
        {/* Name with animation */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
          <GradientText>{siteConfig.name}</GradientText>
        </h1>

        {/* Title */}
        <p className="text-2xl md:text-3xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4 animate-fadeIn">
          {siteConfig.title}
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-12 animate-fadeIn">
          {siteConfig.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fadeIn">
          <Button
            variant="primary"
            size="lg"
            icon={Briefcase}
            onClick={() => scrollToSection('#projects')}
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            icon={Mail}
            onClick={() => scrollToSection('#contact')}
          >
            Contact Me
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#about')}
          className="inline-flex flex-col items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
