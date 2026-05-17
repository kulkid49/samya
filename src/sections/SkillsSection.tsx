import { useRef, useEffect } from 'react';
import { Cpu, Briefcase, Users, Server, Star } from 'lucide-react';
import SkillTag from '@/components/SkillTag';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    icon: Cpu,
    iconColor: '#3B5DFF',
    title: 'Agentic AI & Enterprise Transformation',
    skills: [
      { name: 'Agentic AI', color: '#3B5DFF' },
      { name: 'Multi-Agent Systems', color: '#3B5DFF' },
      { name: 'AI Workflow Automation', color: '#3B5DFF' },
      { name: 'Enterprise AI Solutions', color: '#3B5DFF' },
      { name: 'AI-Driven Process Optimization', color: '#1CC389' },
      { name: 'AI Validation Systems', color: '#1CC389' },
      { name: 'Generative AI', color: '#1CC389' },
      { name: 'Enterprise Automation', color: '#FA900E' },
      { name: 'LLM Workflow Strategy', color: '#FA900E' },
      { name: 'AI Integration Strategy', color: '#7E43FF' },
    ],
  },
  {
    icon: Briefcase,
    iconColor: '#1CC389',
    title: 'Business Analysis & Consulting',
    skills: [
      { name: 'Business Analysis', color: '#1CC389' },
      { name: 'Requirement Engineering', color: '#3B5DFF' },
      { name: 'Functional Analysis', color: '#1CC389' },
      { name: 'Gap Analysis', color: '#3B5DFF' },
      { name: 'Stakeholder Management', color: '#1CC389' },
      { name: 'Process Consulting', color: '#3B5DFF' },
      { name: 'Solution Consulting', color: '#1CC389' },
      { name: 'Pre-Sales Consulting', color: '#3B5DFF' },
      { name: 'Business Process Optimization', color: '#1CC389' },
      { name: 'Client Engagement', color: '#3B5DFF' },
      { name: 'Enterprise Consulting', color: '#1CC389' },
      { name: 'Requirement Gathering', color: '#3B5DFF' },
      { name: 'Functional Documentation', color: '#1CC389' },
      { name: 'Change Management', color: '#3B5DFF' },
    ],
  },
  {
    icon: Users,
    iconColor: '#FA900E',
    title: 'PMO, Delivery & Leadership',
    skills: [
      { name: 'PMO Governance', color: '#FA900E' },
      { name: 'Agile Delivery', color: '#7E43FF' },
      { name: 'Scrum Methodology', color: '#FA900E' },
      { name: 'Delivery Management', color: '#7E43FF' },
      { name: 'Risk Management', color: '#FA900E' },
      { name: 'Resource Planning', color: '#7E43FF' },
      { name: 'Program Management', color: '#FA900E' },
      { name: 'Client Relationship Management', color: '#7E43FF' },
      { name: 'UAT Coordination', color: '#FA900E' },
      { name: 'Project Planning', color: '#7E43FF' },
      { name: 'Strategic Planning', color: '#FA900E' },
      { name: 'Cross-Functional Team Leadership', color: '#7E43FF' },
    ],
  },
  {
    icon: Server,
    iconColor: '#7E43FF',
    title: 'Enterprise & Technical Solutions',
    skills: [
      { name: 'SAP S/4HANA', color: '#7E43FF' },
      { name: 'Enterprise Applications', color: '#1CC389' },
      { name: 'API Integration', color: '#7E43FF' },
      { name: 'SaaS Platforms', color: '#1CC389' },
      { name: 'IoT Integration', color: '#7E43FF' },
      { name: 'Web Applications', color: '#1CC389' },
      { name: 'Mobile Applications', color: '#7E43FF' },
      { name: 'Cloud-Based Solutions', color: '#1CC389' },
      { name: 'System Integration', color: '#7E43FF' },
      { name: 'Product Lifecycle Management', color: '#1CC389' },
      { name: 'Enterprise Workflow Design', color: '#7E43FF' },
      { name: 'Platform Strategy', color: '#1CC389' },
      { name: 'Solution Architecture', color: '#7E43FF' },
    ],
  },
];

const proficiencies = [
  { label: 'Agentic AI & Automation', percent: 80, color: '#3B5DFF' },
  { label: 'Business Analysis', percent: 90, color: '#1CC389' },
  { label: 'PMO & Delivery', percent: 85, color: '#FA900E' },
  { label: 'Enterprise Solutions', percent: 80, color: '#7E43FF' },
];

function ProficiencyBar({ label, percent, color, delay }: { label: string; percent: number; color: string; delay: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && fillRef.current) {
          setTimeout(() => {
            fillRef.current!.style.width = `${percent}%`;
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [percent, delay]);

  return (
    <div ref={barRef}>
      <div className="flex justify-between mb-2">
        <span className="font-grotesk text-sm text-white">{label}</span>
        <span className="font-grotesk text-sm text-[#7F7F7F]">{percent}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.08]">
        <div
          ref={fillRef}
          className="h-full rounded-full transition-all duration-[1200ms] ease-out"
          style={{
            width: '0%',
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const headingRef = useScrollAnimation<HTMLParagraphElement>();
  const titleRef = useScrollAnimation<HTMLHeadingElement>();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = el.querySelectorAll<HTMLElement>('.skills-animate-item');
          items.forEach((item, i) => {
            setTimeout(() => {
              item.classList.add('scroll-visible');
            }, i * 100);
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="bg-black py-24 px-6 lg:px-8">
      <div className="max-w-container mx-auto">
        <p
          ref={headingRef}
          className="scroll-hidden font-grotesk text-base font-medium text-[#7F7F7F] tracking-[2px] uppercase text-center"
        >
          Core Competencies
        </p>
        <h2
          ref={titleRef}
          className="scroll-hidden font-grotesk text-3xl sm:text-[44px] font-medium text-white text-center mt-3"
        >
          Expertise Across the Spectrum
        </h2>

        <div ref={contentRef} className="mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                className="skills-animate-item scroll-hidden bg-[#1A1A1A] rounded-xl p-8"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <Icon size={24} style={{ color: cat.iconColor }} />
                  <h3 className="font-grotesk text-lg font-medium text-white">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <SkillTag key={si} skill={skill.name} color={skill.color} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Competencies Summary */}
        <div className="skills-animate-item scroll-hidden mt-6 p-8 rounded-xl border border-white/[0.06]" style={{
          background: 'linear-gradient(135deg, rgba(59,93,255,0.08) 0%, rgba(28,195,137,0.08) 50%, rgba(126,67,255,0.08) 100%)',
        }}>
          <div className="flex items-center gap-3 mb-6">
            <Star size={24} className="text-brand-orange" />
            <h3 className="font-grotesk text-lg font-medium text-white">
              Core Competencies at a Glance
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {proficiencies.map((p, i) => (
              <ProficiencyBar key={i} {...p} delay={i * 200} />
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
