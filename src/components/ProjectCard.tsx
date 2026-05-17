import type { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ProjectCardProps {
  gradient: string;
  icon: ReactNode;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  tags: string;
  delay?: number;
}

export default function ProjectCard({
  gradient,
  icon,
  badge,
  badgeColor,
  title,
  description,
  tags,
  delay = 0,
}: ProjectCardProps) {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="scroll-hidden bg-[#1A1A1A] rounded-xl overflow-hidden flex flex-col group hover:-translate-y-2 hover:shadow-lg transition-all duration-400"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="h-[180px] flex items-center justify-center rounded-t-xl transition-transform duration-600 group-hover:scale-105"
        style={{ background: gradient }}
      >
        <div className="text-white/60 transition-transform duration-600 group-hover:scale-110">
          {icon}
        </div>
      </div>
      <div className="p-7 flex flex-col flex-1">
        <span
          className="inline-block self-start font-grotesk text-xs font-medium px-3 py-1 rounded"
          style={{
            backgroundColor: `${badgeColor}26`,
            color: badgeColor,
          }}
        >
          {badge}
        </span>
        <h4 className="font-grotesk text-lg font-medium text-white mt-3">
          {title}
        </h4>
        <p className="font-grotesk text-sm text-[#7F7F7F] leading-relaxed mt-3 flex-1">
          {description}
        </p>
        <p className="font-grotesk text-xs text-[#7F7F7F] mt-4">{tags}</p>
      </div>
    </div>
  );
}
