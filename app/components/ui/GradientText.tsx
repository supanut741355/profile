import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export default function GradientText({
  children,
  className = '',
  from = 'from-blue-600',
  to = 'to-purple-600'
}: GradientTextProps) {
  return (
    <span
      className={`
        bg-gradient-to-r ${from} ${to}
        bg-clip-text text-transparent
        animate-gradient
        ${className}
      `}
    >
      {children}
    </span>
  );
}
