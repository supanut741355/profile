'use client';

import { ReactNode } from 'react';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  className = ''
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const animations = {
    'fade-up': isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-12',
    'fade-in': isVisible ? 'opacity-100' : 'opacity-0',
    'slide-left': isVisible
      ? 'opacity-100 translate-x-0'
      : 'opacity-0 translate-x-12',
    'slide-right': isVisible
      ? 'opacity-100 translate-x-0'
      : 'opacity-0 -translate-x-12'
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animations[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
