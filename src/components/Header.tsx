import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import OmSymbol from './icons/OmSymbol';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.gallery', href: '#gallery' },
    { key: 'nav.contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#990000]/95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <OmSymbol className="h-8 w-8 text-[#FFD700]" />
            <span className="ml-2 text-xl font-semibold text-white">Pandit Vinod Guruji</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-white hover:text-[#FFD700] transition-colors font-medium"
                onClick={closeMenu}
              >
                {t(item.key)}
              </a>
            ))}
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-white hover:text-[#FFD700] transition-colors"
            >
              <Globe className="h-5 w-5 mr-1" />
              <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleLanguage}
              className="text-white p-2 mr-2"
            >
              <Globe className="h-6 w-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="text-white p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block text-white hover:text-[#FFD700] py-2 transition-colors"
                onClick={closeMenu}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;