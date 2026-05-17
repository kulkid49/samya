import { useState, useEffect } from 'react';
import { Menu, X, Moon, SunMedium } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useModal } from '@/App';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { openModal } = useModal();
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLight = mounted && (resolvedTheme ?? theme) === 'light';
  const toggleTheme = () => setTheme(isLight ? 'dark' : 'light');

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[8888] h-20 flex items-center transition-all duration-300 ${
          scrolled ? 'bg-black/85 backdrop-blur-xl shadow-nav' : 'bg-transparent'
        }`}
      >
        <div className="max-w-container mx-auto w-full px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-grotesk text-lg font-medium text-white hover:text-[#CCCCCC] transition-colors"
          >
            SAMYA SOREN
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-grotesk text-base font-normal text-white hover:text-[#CCCCCC] transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isLight ? 'Switch to night mode' : 'Switch to day mode'}
              className="inline-flex items-center justify-center rounded-full border-[1.5px] border-white px-3.5 py-2.5 text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              {isLight ? <Moon size={18} /> : <SunMedium size={18} />}
            </button>
            <button
              onClick={openModal}
              className="font-grotesk text-base font-medium text-white border-[1.5px] border-white rounded-full px-7 py-2.5 hover:bg-white hover:text-black transition-all duration-300"
            >
              Let&apos;s Talk
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setMobileOpen(false)}
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-grotesk text-2xl font-medium text-white hover:text-[#CCCCCC] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white px-5 py-2.5 text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            {isLight ? <Moon size={18} /> : <SunMedium size={18} />}
            {isLight ? 'Night Mode' : 'Day Mode'}
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              openModal();
            }}
            className="font-grotesk text-xl font-medium text-white border-[1.5px] border-white rounded-full px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 mt-4"
          >
            Let&apos;s Talk
          </button>
        </div>
      )}
    </>
  );
}
