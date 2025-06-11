import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import OmSymbol from './icons/OmSymbol';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#990000] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <OmSymbol className="h-8 w-8 text-[#FFD700]" />
              <span className="ml-2 text-xl font-semibold">Pandit Shivraj Shastri</span>
            </div>
            <p className="text-gray-300 mb-4">
              {t('footer.address')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.youtube.com/@trimbakeshwar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFD700] transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              {/* <a 
                href="https://www.instagram.com/trimbakeshwar_click" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFD700] transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a> */}
              <a 
                href={`https://wa.me/919171029981`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFD700] transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M20.8 13.6c-0.2-1.1-1.2-1.9-2.2-2.3l-1.7-0.5c-0.8-0.2-1.6 0-2.2 0.6l-0.5 0.5c-0.3 0.3-0.8 0.3-1.1 0.1C12.3 11.3 11.5 10.4 11 9.5c-0.2-0.3-0.1-0.8 0.2-1.1l0.5-0.5c0.6-0.6 0.8-1.4 0.6-2.2l-0.5-1.7c-0.4-1.1-1.2-2.1-2.3-2.2C9.1 1.7 8.6 1.8 8.2 2.1C5.9 4 4 6.7 4 9.5c0 5.6 4.4 10 10 10c2.9 0 5.6-1.9 7.4-4.2c0.3-0.4 0.4-0.9 0.3-1.4l-0.9-0.3zm-9.3 6.9C6.4 20.5 2.5 16.6 2.5 11.5c0-2.9 1.7-5.6 4.3-7.3c0.2-0.1 0.4-0.1 0.6-0.1c0.5 0.1 0.9 0.5 1.1 1l0.5 1.7c0.1 0.4 0 0.8-0.3 1.1l-0.5 0.5c-0.8 0.8-1 2.1-0.4 3.1c0.8 1.5 1.9 2.8 3.3 3.9c1 0.6 2.3 0.4 3.1-0.4l0.5-0.5c0.3-0.3 0.7-0.4 1.1-0.3l1.7 0.5c0.5 0.1 0.9 0.6 1 1.1c0.1 0.2 0 0.4-0.1 0.6C17.1 18.8 14.4 20.5 11.5 20.5" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#FFD700] pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  {t('nav.gallery')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#FFD700] pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">{t('service.kaalsarp.title')}</li>
              <li className="text-gray-300">{t('service.nagbali.title')}</li>
              <li className="text-gray-300">{t('service.rudra.title')}</li>
              <li className="text-gray-300">{t('service.pitra.title')}</li>
              <li className="text-gray-300">{t('service.mrityunjay.title')}</li>
              <li className="text-gray-300">{t('service.rahuketu.title')}</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#FFD700] pb-2">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <span className="mr-3">📞</span>
                <a href="tel:+919171029981" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  +91 9171029981
                </a>
              </p>
              <p className="flex items-start">
                <span className="mr-3">📱</span>
                <a 
                  href="https://wa.me/919171029981" 
                  className="text-gray-300 hover:text-[#FFD700] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </p>
              <p className="flex items-start">
                <span className="mr-3">📧</span>
                <a 
                  href="mailto:info@trimbakeshwarpuja.com" 
                  className="text-gray-300 hover:text-[#FFD700] transition-colors"
                >
                  info@trimbakeshwarpuja.com
                </a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} Pandit Shivraj Shastri. {t('footer.rights')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-400 hover:text-[#FFD700] transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#FFD700] transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;