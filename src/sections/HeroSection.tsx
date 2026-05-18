import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown, Linkedin, Github, MapPin } from 'lucide-react';
import { useModal } from '@/App';

interface HeroSectionProps {
  isLoading: boolean;
}

export default function HeroSection({ isLoading }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isLoading || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.1 });

    const words = headlineRef.current?.querySelectorAll('.hero-word');
    if (words) {
      tl.fromTo(
        words,
        { y: '100%', opacity: 0, rotateZ: 10, filter: 'blur(10px)' },
        {
          y: '0%',
          opacity: 1,
          rotateZ: 0,
          filter: 'blur(0px)',
          duration: 1,
          stagger: 0.15,
          ease: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        }
      );
    }

    tl.fromTo(
      subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );

    tl.fromTo(
      locationRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      '-=0.3'
    );

    tl.fromTo(
      ctaRef.current?.children || [],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out' },
      '-=0.2'
    );

    tl.fromTo(
      socialRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      '-=0.2'
    );

    tl.fromTo(
      scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      '-=0.2'
    );

    return () => { tl.kill(); };
  }, [isLoading]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 hero-ai-bg" aria-hidden="true" />
        <video
          className="absolute inset-0 h-full w-full object-cover hero-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="https://www.pexels.com/download/video/3130182/" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(5,5,5,0.14) 0%, rgba(5,5,5,0.55) 100%)',
          }}
        />
      </div>

      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 50% 35%, rgba(255,255,255,0.12) 0%, transparent 42%),
              radial-gradient(circle at 50% 70%, rgba(0,0,0,0.28) 0%, transparent 55%),
              linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.32) 100%)
            `,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-[3] max-w-container mx-auto px-6 lg:px-8 pt-32 pb-16 min-h-[100dvh] flex flex-col justify-center">
        <div ref={headlineRef} className="overflow-hidden">
          <h1 className="font-grotesk text-4xl sm:text-5xl lg:text-[60px] font-semibold text-white leading-[1.1] tracking-tight">
            <span className="hero-word inline-block">Samya</span>{' '}
            <span className="hero-word inline-block">Soren</span>
          </h1>
        </div>

        <p
          ref={subtitleRef}
          className="font-grotesk text-base sm:text-lg lg:text-xl font-normal text-white/80 leading-relaxed mt-4 max-w-[600px] opacity-0"
        >
          Senior Consultant — Agentic AI, Enterprise Transformation & PMO Governance
        </p>

        <div ref={locationRef} className="flex items-center gap-2 mt-6 opacity-0">
          <MapPin size={16} className="text-[#7F7F7F]" />
          <span className="font-grotesk text-base text-[#7F7F7F]">
            Kolkata, West Bengal, India
          </span>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="#projects"
            className="font-grotesk text-lg font-medium bg-[#D4AF37] text-black rounded-full px-8 py-3.5 hover:bg-[#E2C35A] transition-all duration-300 text-center shadow-[0_6px_0_#7D5A12,0_14px_24px_rgba(0,0,0,0.28)] hover:translate-y-[-1px] hover:shadow-[0_7px_0_#7D5A12,0_16px_26px_rgba(0,0,0,0.3)]"
          >
            View My Work
          </a>
          <button
            onClick={openModal}
            className="font-grotesk text-lg font-medium border-[1.5px] border-white text-white rounded-full px-8 py-3.5 hover:bg-white hover:text-black transition-all duration-300"
          >
            Let&apos;s Talk
          </button>
        </div>

        <div ref={socialRef} className="flex gap-5 mt-8 opacity-0">
          <a
            href="https://linkedin.com/in/samyasoren"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-brand-blue transition-colors duration-200"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/kulkid49"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            <Github size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] opacity-0"
      >
        <ChevronDown
          size={20}
          className="text-white/40 scroll-indicator-bounce"
        />
      </div>
    </section>
  );
}
