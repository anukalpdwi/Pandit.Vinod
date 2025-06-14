import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.headline': 'Authentic Trimbakeshwar Temple Puja Services',
    'hero.subheading': '30+ Years of Experience in Traditional Vedic Rituals',
    'hero.cta': 'Book Now',
    'hero.cta2': '📞 Call Now',
    'hero.cta3': 'Our Youtube',
    
    // Services Section
    'services.title': 'Our Specialized Puja Services',
    'services.subtitle': 'Traditional rituals performed with authentic Vedic methods',
    'service.kaalsarp.title': 'Kaal Sarp Dosh Nivaran Puja',
    'service.kaalsarp.description': 'Remedy for Kaal Sarp Yoga in horoscope that may cause obstacles in life journey.',
    'service.kaalsarp.duration': 'Duration: 3-4 hours',
    'service.kaalsarp.requirements': 'Requirements: Horoscope, Specific offerings',
    'service.kaalsarp.benefits': 'Benefits: Removes obstacles, brings peace and prosperity',
    
    'service.nagbali.title': 'Narayan Nagbali Puja',
    'service.nagbali.description': 'Powerful ritual to appease ancestors and remove generational curses.',
    'service.nagbali.duration': 'Duration: Full day ceremony',
    'service.nagbali.requirements': 'Requirements: Family details, Specific offerings',
    'service.nagbali.benefits': 'Benefits: Ancestral peace, family prosperity',
    
    'service.rudra.title': 'Rudra Abhishek Puja',
    'service.rudra.description': 'Sacred ritual honoring Lord Shiva for divine blessings and protection.',
    'service.rudra.duration': 'Duration: 2-3 hours',
    'service.rudra.requirements': 'Requirements: Milk, honey, specific offerings',
    'service.rudra.benefits': 'Benefits: Divine protection, health, prosperity',
    
    'service.pitra.title': 'Pitra Shanti Puja',
    'service.pitra.description': 'Ritual to bring peace to ancestors and remove ancestral obstacles.',
    'service.pitra.duration': 'Duration: 2 hours',
    'service.pitra.requirements': 'Requirements: Family ancestral details',
    'service.pitra.benefits': 'Benefits: Ancestral blessings, removal of obstacles',
    
    'service.mrityunjay.title': 'Maha Mrityunjay Jaap',
    'service.mrityunjay.description': 'Powerful mantra ritual for health, longevity and protection.',
    'service.mrityunjay.duration': 'Duration: 6-7 hours',
    'service.mrityunjay.requirements': 'Requirements: Personal details',
    'service.mrityunjay.benefits': 'Benefits: Health, longevity, protection from accidents',
    
    'service.rahuketu.title': 'Rahu Ketu Jaap',
    'service.rahuketu.description': 'Special ritual to mitigate the negative effects of Rahu and Ketu.',
    'service.rahuketu.duration': 'Duration: 5 hours',
    'service.rahuketu.requirements': 'Requirements: Horoscope',
    'service.rahuketu.benefits': 'Benefits: Reduces negative planetary effects',
    
    // About Section
    'about.title': 'About Pandit Shivraj Shastri',
    'about.subtitle': 'A Life Dedicated to Vedic Traditions',
    'about.bio': 'Pandit Shivraj Shastri has been serving at the sacred Trimbakeshwar Temple for over 30 years. With profound knowledge of Vedic scriptures and rituals, he has guided thousands of devotees through spiritual ceremonies. His expertise in traditional pujas, especially for resolving planetary doshas and ancestral issues, has earned him respect across India and internationally.',
    'about.experience': '30+ Years Experience',
    'about.clients': '10,000+ Satisfied Clients',
    'about.ceremonies': '5,000+ Ceremonies Performed',
    
    // Testimonials
    'testimonials.title': 'Client Testimonials',
    'testimonial.1.name': 'Rajesh Sharma',
    'testimonial.1.location': 'Mumbai',
    'testimonial.1.text': 'After performing Kaal Sarp Dosh Nivaran Puja with Pandit Shivraj Shastri, many obstacles in my business and personal life were resolved. His authentic approach and deep knowledge make all the difference.',
    
    'testimonial.2.name': 'Priya Patel',
    'testimonial.2.location': 'Ahmedabad',
    'testimonial.2.text': 'The Pitra Shanti Puja performed by Guruji brought immense peace to our family. His guidance through the entire process was extremely valuable.',
    
    'testimonial.3.name': 'Vikram Singh',
    'testimonial.3.location': 'Delhi',
    'testimonial.3.text': "Pandit Shivraj Shastri's Rudra Abhishek ceremony was conducted with utmost devotion and authenticity. We felt the positive energy immediately afterward.",
    
    // Gallery Section
    'gallery.title': 'Media Gallery',
    'gallery.videos': 'Ceremony Videos',
    'gallery.photos': 'Photo Gallery',
    
    // Contact Section
    'contact.title': 'Contact For Puja Services',
    'contact.subtitle': 'Reach out for consultations and bookings',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Inquiry',
    'contact.whatsapp': 'Chat on WhatsApp',
    'contact.call': 'Call Now',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.address': 'Trimbakeshwar Temple, Nashik, Maharashtra, India',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.services': 'सेवाएं',
    'nav.about': 'परिचय',
    'nav.gallery': 'गैलरी',
    'nav.contact': 'संपर्क',
    
    // Hero Section
    'hero.headline': 'प्रामाणिक त्र्यंबकेश्वर मंदिर पूजा सेवाएं',
    'hero.subheading': 'पारंपरिक वैदिक अनुष्ठानों में 30+ वर्षों का अनुभव',
    'hero.cta': 'पूजा परामर्श बुक करें',
    'hero.cta2': '📞 कॉल करें',
    'hero.cta3': 'Our Youtube',
    
    // Services Section
    'services.title': 'हमारी विशेष पूजा सेवाएं',
    'services.subtitle': 'प्रामाणिक वैदिक विधियों से किए गए पारंपरिक अनुष्ठान',
    'service.kaalsarp.title': 'काल सर्प दोष निवारण पूजा',
    'service.kaalsarp.description': 'जन्मपत्रिका में काल सर्प योग का उपाय जो जीवन यात्रा में बाधाएं पैदा कर सकता है।',
    'service.kaalsarp.duration': 'अवधि: 3-4 घंटे',
    'service.kaalsarp.requirements': 'आवश्यकताएं: जन्मपत्रिका, विशिष्ट सामग्री',
    'service.kaalsarp.benefits': 'लाभ: बाधाओं को दूर करता है, शांति और समृद्धि लाता है',
    
    'service.nagbali.title': 'नारायण नागबलि पूजा',
    'service.nagbali.description': 'पूर्वजों को शांत करने और वंशानुगत अभिशापों को दूर करने के लिए शक्तिशाली अनुष्ठान।',
    'service.nagbali.duration': 'अवधि: पूरे दिन का समारोह',
    'service.nagbali.requirements': 'आवश्यकताएं: परिवार का विवरण, विशिष्ट सामग्री',
    'service.nagbali.benefits': 'लाभ: पूर्वजों की शांति, परिवार की समृद्धि',
    
    'service.rudra.title': 'रुद्र अभिषेक पूजा',
    'service.rudra.description': 'भगवान शिव को सम्मानित करने वाला पवित्र अनुष्ठान जो दिव्य आशीर्वाद और सुरक्षा प्रदान करता है।',
    'service.rudra.duration': 'अवधि: 2-3 घंटे',
    'service.rudra.requirements': 'आवश्यकताएं: दूध, शहद, विशिष्ट सामग्री',
    'service.rudra.benefits': 'लाभ: दिव्य सुरक्षा, स्वास्थ्य, समृद्धि',
    
    'service.pitra.title': 'पितृ शांति पूजा',
    'service.pitra.description': 'पूर्वजों को शांति प्रदान करने और पूर्वजों की बाधाओं को दूर करने का अनुष्ठान।',
    'service.pitra.duration': 'अवधि: 2 घंटे',
    'service.pitra.requirements': 'आवश्यकताएं: परिवार के पूर्वजों का विवरण',
    'service.pitra.benefits': 'लाभ: पूर्वजों का आशीर्वाद, बाधाओं का निवारण',
    
    'service.mrityunjay.title': 'महा मृत्युंजय जाप',
    'service.mrityunjay.description': 'स्वास्थ्य, दीर्घायु और सुरक्षा के लिए शक्तिशाली मंत्र अनुष्ठान।',
    'service.mrityunjay.duration': 'अवधि: 6-7 घंटे',
    'service.mrityunjay.requirements': 'आवश्यकताएं: व्यक्तिगत विवरण',
    'service.mrityunjay.benefits': 'लाभ: स्वास्थ्य, दीर्घायु, दुर्घटनाओं से सुरक्षा',
    
    'service.rahuketu.title': 'राहु केतु जाप',
    'service.rahuketu.description': 'राहु और केतु के नकारात्मक प्रभावों को कम करने के लिए विशेष अनुष्ठान।',
    'service.rahuketu.duration': 'अवधि: 5 घंटे',
    'service.rahuketu.requirements': 'आवश्यकताएं: जन्मपत्रिका',
    'service.rahuketu.benefits': 'लाभ: नकारात्मक ग्रहीय प्रभावों को कम करता है',
    
    // About Section
    'about.title': 'पंडित शिवराज शास्त्री के बारे में',
    'about.subtitle': 'वैदिक परंपराओं के प्रति समर्पित एक जीवन',
    'about.bio': 'पंडित शिवराज शास्त्री पिछले 30 वर्षों से पवित्र त्र्यंबकेश्वर मंदिर में सेवारत हैं। वैदिक शास्त्रों और अनुष्ठानों के गहन ज्ञान के साथ, उन्होंने हजारों भक्तों को आध्यात्मिक समारोहों के माध्यम से मार्गदर्शन किया है। पारंपरिक पूजाओं में उनकी विशेषज्ञता, विशेष रूप से ग्रहीय दोषों और पूर्वजों के मुद्दों को हल करने के लिए, उन्हें भारत और अंतरराष्ट्रीय स्तर पर सम्मान दिलाया है।',
    'about.experience': '30+ वर्षों का अनुभव',
    'about.clients': '10,000+ संतुष्ट ग्राहक',
    'about.ceremonies': '5,000+ समारोह किए गए',
    
    // Testimonials
    'testimonials.title': 'ग्राहक प्रशंसापत्र',
    'testimonial.1.name': 'राजेश शर्मा',
    'testimonial.1.location': 'मुंबई',
    'testimonial.1.text': 'पंडित शिवराज शास्त्री के साथ काल सर्प दोष निवारण पूजा करने के बाद, मेरे व्यापार और व्यक्तिगत जीवन में कई बाधाएं दूर हो गईं। उनका प्रामाणिक दृष्टिकोण और गहन ज्ञान सभी अंतर बनाता है।',
    
    'testimonial.2.name': 'प्रिया पटेल',
    'testimonial.2.location': 'अहमदाबाद',
    'testimonial.2.text': 'गुरुजी द्वारा की गई पितृ शांति पूजा ने हमारे परिवार को अत्यधिक शांति प्रदान की। पूरी प्रक्रिया में उनका मार्गदर्शन बेहद मूल्यवान था।',
    
    'testimonial.3.name': 'विक्रम सिंह',
    'testimonial.3.location': 'दिल्ली',
    'testimonial.3.text': 'पंडित शिवराज शास्त्री का रुद्र अभिषेक समारोह अत्यंत भक्ति और प्रामाणिकता के साथ आयोजित किया गया था। हमने तुरंत बाद सकारात्मक ऊर्जा महसूस की।',
    
    // Gallery Section
    'gallery.title': 'मीडिया गैलरी',
    'gallery.videos': 'समारोह वीडियो',
    'gallery.photos': 'फोटो गैलरी',
    
    // Contact Section
    'contact.title': 'पूजा सेवाओं के लिए संपर्क करें',
    'contact.subtitle': 'परामर्श और बुकिंग के लिए संपर्क करें',
    'contact.form.name': 'आपका नाम',
    'contact.form.email': 'ईमेल पता',
    'contact.form.phone': 'फोन नंबर',
    'contact.form.message': 'आपका संदेश',
    'contact.form.submit': 'पूछताछ भेजें',
    'contact.whatsapp': 'व्हाट्सएप पर चैट करें',
    'contact.call': 'अभी कॉल करें',
    
    // Footer
    'footer.rights': 'सर्वाधिकार सुरक्षित',
    'footer.address': 'त्र्यंबकेश्वर मंदिर, नाशिक, महाराष्ट्र, भारत',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.terms': 'सेवा की शर्तें',
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};