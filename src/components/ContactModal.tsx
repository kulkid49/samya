import { useEffect, useRef } from 'react';
import { X, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useModal } from '@/App';

const contacts = [
  {
    icon: Mail,
    label: 'samyasoren1991@gmail.com',
    href: 'mailto:samyasoren1991@gmail.com',
    color: '#3B5DFF',
  },
  {
    icon: Phone,
    label: '+91 9681517142',
    href: 'tel:+919681517142',
    color: '#1CC389',
  },
  {
    icon: Linkedin,
    label: 'linkedin.com/in/samyasoren',
    href: 'https://linkedin.com/in/samyasoren',
    color: '#3B5DFF',
    external: true,
  },
  {
    icon: Github,
    label: 'github.com/kulkid49',
    href: 'https://github.com/kulkid49',
    color: '#7F7F7F',
    external: true,
  },
];

export default function ContactModal() {
  const { isModalOpen, closeModal } = useModal();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[6666]" onClick={closeModal}>
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      />
      <div
        ref={panelRef}
        className="absolute bottom-0 left-0 right-0 md:left-1/2 md:-translate-x-1/2 md:max-w-[600px] md:w-full bg-black rounded-t-2xl px-8 pt-10 pb-8"
        style={{
          animation: 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          boxShadow: '0px -8px 40px rgba(0, 0, 0, 0.4)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 text-[#7F7F7F] hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="font-grotesk text-[28px] font-medium text-white">
          Let&apos;s Connect
        </h3>
        <p className="font-grotesk text-base text-[#7F7F7F] mt-2">
          Reach out for collaboration, consulting, or just to say hello.
        </p>

        <div className="mt-8">
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <a
                key={i}
                href={contact.href}
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 py-3.5 border-b border-white/[0.08] group transition-colors"
              >
                <Icon size={20} style={{ color: contact.color }} />
                <span className="font-grotesk text-base text-white group-hover:text-brand-blue transition-colors duration-200">
                  {contact.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
      `}</style>
    </div>
  );
}
