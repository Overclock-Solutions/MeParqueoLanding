import React, { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import SolutionSection from '../components/sections/SolutionSection';
import CommunitySection from '../components/sections/CommunitySection';
import TechnologySection from '../components/sections/TechnologySection';
import BenefitsSection from '../components/sections/BenefitsSection';
import ImpactSection from '../components/sections/ImpactSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import DownloadSection from '../components/sections/DownloadSection';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Me Parqueo - Encuentra parqueadero en Montería en tiempo real';
  }, []);

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TechnologySection />
      <BenefitsSection />
      <CommunitySection />
      <ImpactSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <DownloadSection />
    </>
  );
};

export default HomePage;