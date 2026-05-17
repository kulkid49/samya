import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
];

export default function FooterSection() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black">
      {/* Top gradient accent */}
      <div className="border-t border-white/[0.06]">
        <div
          className="h-px w-[200px] mx-auto"
          style={{
            background: 'linear-gradient(90deg, transparent, #3B5DFF, #1CC389, #FA900E, #7E43FF, transparent)',
          }}
        />
      </div>

      <div className="max-w-container mx-auto px-6 lg:px-8 py-14 pb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* Logo & Tagline */}
          <div>
            <p className="font-grotesk text-xl font-medium text-white">SAMYA SOREN</p>
            <p className="font-grotesk text-sm text-[#7F7F7F] mt-2">
              Senior Consultant — Agentic AI & Enterprise Transformation
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap lg:flex-col gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-grotesk text-sm text-[#7F7F7F] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <a
              href="mailto:samyasoren1991@gmail.com"
              className="flex items-center gap-2 font-grotesk text-sm text-[#7F7F7F] hover:text-white transition-colors duration-200"
            >
              <Mail size={14} className="text-brand-blue" />
              samyasoren1991@gmail.com
            </a>
            <a
              href="tel:+919681517142"
              className="flex items-center gap-2 font-grotesk text-sm text-[#7F7F7F] hover:text-white transition-colors duration-200"
            >
              <Phone size={14} className="text-brand-blue" />
              +91 9681517142
            </a>
            <a
              href="https://linkedin.com/in/samyasoren"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-grotesk text-sm text-[#7F7F7F] hover:text-white transition-colors duration-200"
            >
              <Linkedin size={14} className="text-brand-blue" />
              linkedin.com/in/samyasoren
            </a>
            <a
              href="https://github.com/kulkid49"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-grotesk text-sm text-[#7F7F7F] hover:text-white transition-colors duration-200"
            >
              <Github size={14} className="text-brand-blue" />
              github.com/kulkid49
            </a>
          </div>
        </div>

        <div className="h-px bg-white/[0.06] my-8" />

        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <p className="font-grotesk text-[13px] text-[#7F7F7F]">
            © 2025 Samya Soren. All rights reserved.
          </p>
          <p className="font-grotesk text-[13px] text-[#7F7F7F]">
            Crafted with passion for enterprise excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
