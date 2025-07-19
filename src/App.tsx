import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from './hooks/useTranslation';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SocialSection from './components/SocialSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import BikesSection from './components/BikesSection';
import AdminSection from './components/AdminSection';
import Footer from './components/Footer';

function App() {
  const { currentLanguage, changeLanguage } = useTranslation();

  // Forcer le scroll en haut au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    changeLanguage(langCode as any);
  };

  return (
    <div className="bg-gray-900 text-white">
      <Navigation 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />
      
      <HeroSection />
      <SocialSection />
      <AboutSection />
      <ProjectSection />
      <BikesSection />
      <AdminSection />
      <Footer />
    </div>
  );
}

export default App;