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
        <svg
          className="absolute inset-0 w-full h-full hero-ai-network"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="heroAiGradient" x1="0" y1="0" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FF2D2D" stopOpacity="1" />
              <stop offset="0.22" stopColor="#21E56A" stopOpacity="1" />
              <stop offset="0.44" stopColor="#1F7BFF" stopOpacity="1" />
              <stop offset="0.68" stopColor="#9B45FF" stopOpacity="1" />
              <stop offset="1" stopColor="#FF9A1F" stopOpacity="1" />
            </linearGradient>
          </defs>
          <g className="hero-ai-lines" stroke="url(#heroAiGradient)" strokeWidth="1.25" strokeLinecap="round">
            <path d="M120 520 C 260 420, 340 380, 520 420 S 820 520, 1040 360" />
            <path d="M180 180 C 340 220, 420 320, 560 300 S 860 240, 1040 140" />
            <path d="M140 340 C 300 300, 420 260, 560 420 S 820 620, 1080 560" />
            <path d="M260 640 C 380 540, 520 520, 660 560 S 920 680, 1120 620" />
            <path d="M260 120 C 360 220, 460 240, 620 220 S 900 140, 1120 260" />
          </g>
          <g className="hero-ai-nodes">
            <circle className="hero-ai-node" cx="160" cy="520" r="4.5" style={{ animationDelay: '0ms' }} />
            <circle className="hero-ai-node" cx="340" cy="410" r="3.8" style={{ animationDelay: '250ms' }} />
            <circle className="hero-ai-node" cx="520" cy="420" r="4.2" style={{ animationDelay: '500ms' }} />
            <circle className="hero-ai-node" cx="740" cy="500" r="3.6" style={{ animationDelay: '750ms' }} />
            <circle className="hero-ai-node" cx="1040" cy="360" r="4.4" style={{ animationDelay: '1000ms' }} />
            <circle className="hero-ai-node" cx="180" cy="180" r="4.2" style={{ animationDelay: '300ms' }} />
            <circle className="hero-ai-node" cx="560" cy="300" r="3.8" style={{ animationDelay: '700ms' }} />
            <circle className="hero-ai-node" cx="1040" cy="140" r="4.4" style={{ animationDelay: '1200ms' }} />
            <circle className="hero-ai-node" cx="140" cy="340" r="3.6" style={{ animationDelay: '200ms' }} />
            <circle className="hero-ai-node" cx="560" cy="420" r="4.6" style={{ animationDelay: '600ms' }} />
            <circle className="hero-ai-node" cx="1080" cy="560" r="4.2" style={{ animationDelay: '900ms' }} />
            <circle className="hero-ai-node" cx="260" cy="640" r="4.4" style={{ animationDelay: '350ms' }} />
            <circle className="hero-ai-node" cx="660" cy="560" r="3.8" style={{ animationDelay: '800ms' }} />
            <circle className="hero-ai-node" cx="1120" cy="620" r="4.6" style={{ animationDelay: '1100ms' }} />
            <circle className="hero-ai-node" cx="260" cy="120" r="4.4" style={{ animationDelay: '150ms' }} />
            <circle className="hero-ai-node" cx="620" cy="220" r="3.8" style={{ animationDelay: '550ms' }} />
            <circle className="hero-ai-node" cx="1120" cy="260" r="4.6" style={{ animationDelay: '950ms' }} />
          </g>
        </svg>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(5,5,5,0.08) 0%, rgba(5,5,5,0.42) 100%)',
          }}
        />
      </div>

      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 18% 28%, rgba(255,45,45,0.32) 0%, transparent 48%),
              radial-gradient(circle at 80% 22%, rgba(33,229,106,0.3) 0%, transparent 48%),
              radial-gradient(circle at 18% 82%, rgba(31,123,255,0.3) 0%, transparent 50%),
              radial-gradient(circle at 82% 78%, rgba(155,69,255,0.3) 0%, transparent 50%),
              radial-gradient(circle at 55% 52%, rgba(255,154,31,0.28) 0%, transparent 52%),
              linear-gradient(135deg, rgba(255,45,45,0.08) 0%, rgba(33,229,106,0.08) 25%, rgba(31,123,255,0.08) 50%, rgba(155,69,255,0.08) 75%, rgba(255,154,31,0.08) 100%)
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
            className="font-grotesk text-lg font-medium bg-white text-black rounded-full px-8 py-3.5 hover:bg-[#CCCCCC] transition-colors duration-300 text-center"
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
