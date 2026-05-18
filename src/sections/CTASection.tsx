import { useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CTASection() {
  const headingRef = useScrollAnimation<HTMLHeadingElement>();
  const subtextRef = useScrollAnimation<HTMLParagraphElement>();
  const buttonsRef = useScrollAnimation<HTMLDivElement>();
  const wordRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          wordRefs.current.forEach((word, i) => {
            if (word) {
              setTimeout(() => {
                word.style.opacity = '1';
              }, i * 80);
            }
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = ['Ready', 'to', 'Build', 'Something', 'Exceptional?'];

  return (
    <section className="relative bg-black py-28 px-6 lg:px-8 overflow-hidden">
      {/* Decorative gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(59,93,255,0.06) 0%, rgba(126,67,255,0.04) 40%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[800px] mx-auto text-center">
        <h2 ref={headingRef} className="font-grotesk text-3xl sm:text-4xl lg:text-[52px] font-semibold text-white leading-tight">
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => { if (el) wordRefs.current[i] = el; }}
              className="inline-block mr-[0.3em] transition-opacity duration-100"
              style={{ opacity: 0 }}
            >
              {word}
            </span>
          ))}
        </h2>

        <p
          ref={subtextRef}
          className="scroll-hidden font-grotesk text-lg text-[#7F7F7F] leading-relaxed mt-5"
        >
          Let&apos;s collaborate on your next enterprise transformation, AI initiative, or digital product. I&apos;m always open to meaningful conversations.
        </p>

        <div
          ref={buttonsRef}
          className="scroll-hidden flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href="mailto:samyasoren1991@gmail.com"
            className="font-grotesk text-lg font-medium bg-[#F03030] text-black rounded-full px-9 py-4 hover:bg-[#ff4d4d] transition-colors duration-300"
          >
            Send an Email
          </a>
          <a
            href="https://linkedin.com/in/samyasoren"
            target="_blank"
            rel="noopener noreferrer"
            className="font-grotesk text-lg font-medium border-[1.5px] border-white text-white rounded-full px-9 py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
