import { useRef, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '6+', label: 'Key Projects' },
  { value: '5', label: 'Companies' },
  { value: '10+', label: 'Certifications' },
];

export default function AboutSection() {
  const headingRef = useScrollAnimation<HTMLParagraphElement>();
  const headlineRef = useScrollAnimation<HTMLHeadingElement>();
  const cardRef = useScrollAnimation<HTMLDivElement>();
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = el.querySelectorAll('.stat-item');
          children.forEach((child, i) => {
            setTimeout(() => {
              child.classList.add('scroll-visible');
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
    <section id="about" className="bg-black py-24 px-6 lg:px-8">
      <div className="max-w-container mx-auto">
        <p
          ref={headingRef}
          className="scroll-hidden font-grotesk text-base font-medium text-[#7F7F7F] tracking-[2px] uppercase text-center"
        >
          About Me
        </p>

        <h2
          ref={headlineRef}
          className="scroll-hidden font-grotesk text-3xl sm:text-4xl lg:text-5xl font-semibold gradient-text text-center mt-4"
        >
          Building the future with AI
        </h2>

        <div
          ref={cardRef}
          className="scroll-hidden bg-[#1A1A1A] rounded-xl p-6 sm:p-12 mt-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
              <img
                src="/samya-portrait.jpg"
                alt="Samya Soren"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-grotesk text-base text-[#7F7F7F] leading-[1.7] mb-5">
                A senior technology consultant with 10+ years of experience across Agentic AI, enterprise applications, digital transformation, business analysis, PMO governance, delivery leadership, and solution consulting. I specialize in translating complex business needs into scalable enterprise solutions.
              </p>
              <p className="font-grotesk text-base text-[#7F7F7F] leading-[1.7]">
                Known for bridging business, operations, finance, procurement, and technical teams — aligning stakeholder expectations, defining solution scope, and driving successful implementation across global engagements.
              </p>
            </div>
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-0 mt-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-item scroll-hidden flex flex-col items-center py-6 relative"
            >
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/4 bottom-1/4 w-px bg-white/10" />
              )}
              {i > 0 && i % 2 === 0 && (
                <div className="lg:hidden absolute left-0 top-1/4 bottom-1/4 w-px bg-white/10" />
              )}
              <span className="font-grotesk text-3xl lg:text-4xl font-semibold text-white">
                {stat.value}
              </span>
              <span className="font-grotesk text-sm text-[#7F7F7F] uppercase tracking-wide mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
