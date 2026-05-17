import { useState, createContext, useContext } from 'react';
import Navigation from '@/components/Navigation';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollToTop from '@/components/ScrollToTop';
import ContactModal from '@/components/ContactModal';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ExperienceSection from '@/sections/ExperienceSection';
import ProjectsSection from '@/sections/ProjectsSection';
import EducationSection from '@/sections/EducationSection';
import SkillsSection from '@/sections/SkillsSection';
import CTASection from '@/sections/CTASection';
import FooterSection from '@/sections/FooterSection';

interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const useModal = () => useContext(ModalContext);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Navigation />
      <main>
        <HeroSection isLoading={isLoading} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <CTASection />
        <FooterSection />
      </main>
      <ContactModal />
      <ScrollToTop />
    </ModalContext.Provider>
  );
}

export default App;
