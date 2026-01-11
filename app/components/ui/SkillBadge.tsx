import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface SkillBadgeProps {
  name: string;
  category: string;
  icon?: string;
}

const categoryColors = {
  Cloud: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700',
  'CI/CD': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700',
  IaC: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700',
  Containers: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-700',
  Monitoring: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700',
  Scripting: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border-pink-300 dark:border-pink-700'
};

export default function SkillBadge({ name, category, icon }: SkillBadgeProps) {
  const Icon = icon ? (Icons[icon as keyof typeof Icons] as LucideIcon) : Icons.Code;
  const colorClass = categoryColors[category as keyof typeof categoryColors] || categoryColors.Cloud;

  return (
    <div
      className={`
        inline-flex items-center gap-2 px-4 py-2
        rounded-full border
        font-medium text-sm
        transition-all duration-300
        hover:scale-110 hover:shadow-md
        ${colorClass}
      `}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{name}</span>
    </div>
  );
}
