import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FloatingButtons: React.FC = () => {
  const { t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  useEffect(() => {
    const checkScrollTop = () => {https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZL6w7TAqEIltAC4pyv7xHW9Rk-AGxP7jtbynEwNAir1QPq4LWViE-CjtAy-x_CrBNww&usqp=CAU
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);
  
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919171029981"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
        aria-label={t('contact.whatsapp')}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      
      {/* Call Button */}
      <a
        href="tel:+919171029981"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#990000] text-white shadow-lg hover:bg-[#7D0000] transition-colors"
        aria-label={t('contact.call')}
      >
        <Phone className="h-6 w-6" />
      </a>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFD700] text-[#990000] shadow-lg hover:bg-[#E6C300] transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;