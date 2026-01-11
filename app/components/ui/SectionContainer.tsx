'use client';

import { ReactNode } from 'react';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({ id, children, className = '' }: SectionContainerProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={`
        py-16 md:py-24
        transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  );
}
