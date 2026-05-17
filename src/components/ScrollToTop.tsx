import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-[7777] w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center text-white hover:bg-[#5B7AFF] transition-colors duration-300 shadow-lg"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
