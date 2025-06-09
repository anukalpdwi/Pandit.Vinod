import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  // Set document title
  React.useEffect(() => {
    document.title = 'Pandit Shivraj Guruji - Trimbakeshwar Puja Services';
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <Gallery />
        <ContactForm />
        <Footer />
        <FloatingButtons />
      </div>
    </LanguageProvider>
  );
}

export default App;