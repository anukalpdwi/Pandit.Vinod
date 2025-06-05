import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://www.fiyopa.in/wp-content/uploads/2024/08/Kaal-Sarp-Dosh-Puja-In-TrimbaKeshwar-1024x576.jpg')",
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/70 to-[#990000]/50"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative Element */}
          <div className="inline-block p-4 mb-2">
            <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-2"></div>
            <div className="w-16 h-1 bg-[#FFD700] mx-auto"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('hero.headline')}
          </h1>
          
          <p className="text-xl md:text-2xl text-[#FFF9E6] mb-8">
            {t('hero.subheading')}
          </p>
          
          <div className="mt-8 mb-4 animate-pulse">
            <a 
              href="https://wa.me/919171029981" 
              className="inline-block bg-[#FFD700] hover:bg-[#E6C300] text-[#990000] font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
            >
              {t('hero.cta')}
            </a>

            <a 
              href="https://wa.me/919171029981" 
              className="inline-block bg-[#ffffff] hover:bg-[#E6C300] text-[#990000] font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
            >
              {t('hero.cta2')}
            </a>
          </div>
          
          
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-12"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;