import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const hoverStyles = hover
    ? 'hover:scale-105 hover:shadow-2xl hover:border-blue-500/50 dark:hover:border-purple-500/50'
    : '';

  return (
    <div
      className={`
        bg-white dark:bg-zinc-900
        border border-zinc-200 dark:border-zinc-800
        rounded-xl p-6
        shadow-lg
        transition-all duration-300 ease-in-out
        ${hoverStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
