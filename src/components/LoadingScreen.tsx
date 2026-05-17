import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useTheme } from 'next-themes';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && (resolvedTheme ?? theme) === 'light';

  useEffect(() => {
    const letters = lettersRef.current.filter(Boolean);
    if (letters.length === 0) return;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          onComplete: () => {
            onComplete();
          },
        });
      },
    });

    tl.set(letters, { y: '-550%', opacity: 0 });

    letters.forEach((letter, i) => {
      tl.to(
        letter,
        {
          y: '0%',
          opacity: 1,
          duration: 1.2,
          ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        i * 0.12
      );
    });

    tl.to({}, { duration: 0.5 });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  const text = 'Samya Soren';

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center"
      style={{ backgroundColor: isLight ? '#ffffff' : '#000000' }}
    >
      <div className="flex gap-[0.5vw]">
        {text.split('').map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) lettersRef.current[i] = el;
            }}
            className="font-grotesk font-semibold"
            style={{ color: isLight ? '#000000' : '#ffffff', fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
}
