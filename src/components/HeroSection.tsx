import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const images = [
  "bg1.jpeg",
  "bg2.jpeg",
  "bg3.jpeg",
];

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Slideshow Background */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
            style={{ backgroundImage: `url('${img}')` }}
            aria-hidden={idx !== current}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/70 to-[#291812]/50"></div>
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
              className="inline-block bg-[#ffffff] hover:bg-[#E6C300] text-[#990000] font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl ml-4"
            >
              {t('hero.cta2')}
            </a>

             <a 
              href="https://www.youtube.com/@Trimbakeshwar" 
              className="inline-block bg-[#ffffff] hover:bg-[#E6C300] text-[#990000] font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl ml-4"
            >
              {t('hero.cta3')}
            </a>

          </div>
          
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-12"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;