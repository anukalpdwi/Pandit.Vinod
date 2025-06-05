import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ServiceCardProps {
  title: string;
  description: string;
  duration: string;
  requirements: string;
  benefits: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, description, duration, requirements, benefits, icon 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-[#990000]">
      <div className="p-6">
        <div className="w-16 h-16 rounded-full bg-[#FFF9E6] flex items-center justify-center mb-4 mx-auto">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#990000] mb-3 text-center">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="bg-[#FFF9E6] p-4 rounded-lg">
          <p className="text-sm text-gray-800 mb-1"><strong>{duration}</strong></p>
          <p className="text-sm text-gray-800 mb-1"><strong>{requirements}</strong></p>
          <p className="text-sm text-gray-800"><strong>{benefits}</strong></p>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('service.kaalsarp.title'),
      description: t('service.kaalsarp.description'),
      duration: t('service.kaalsarp.duration'),
      requirements: t('service.kaalsarp.requirements'),
      benefits: t('service.kaalsarp.benefits'),
      icon: <span className="text-3xl">🐍</span>
    },
    {
      title: t('service.nagbali.title'),
      description: t('service.nagbali.description'),
      duration: t('service.nagbali.duration'),
      requirements: t('service.nagbali.requirements'),
      benefits: t('service.nagbali.benefits'),
      icon: <span className="text-3xl">🔱</span>
    },
    {
      title: t('service.rudra.title'),
      description: t('service.rudra.description'),
      duration: t('service.rudra.duration'),
      requirements: t('service.rudra.requirements'),
      benefits: t('service.rudra.benefits'),
      icon: <span className="text-3xl">🕉️</span>
    },
    {
      title: t('service.pitra.title'),
      description: t('service.pitra.description'),
      duration: t('service.pitra.duration'),
      requirements: t('service.pitra.requirements'),
      benefits: t('service.pitra.benefits'),
      icon: <span className="text-3xl">🙏</span>
    },
    {
      title: t('service.mrityunjay.title'),
      description: t('service.mrityunjay.description'),
      duration: t('service.mrityunjay.duration'),
      requirements: t('service.mrityunjay.requirements'),
      benefits: t('service.mrityunjay.benefits'),
      icon: <span className="text-3xl">✨</span>
    },
    {
      title: t('service.rahuketu.title'),
      description: t('service.rahuketu.description'),
      duration: t('service.rahuketu.duration'),
      requirements: t('service.rahuketu.requirements'),
      benefits: t('service.rahuketu.benefits'),
      icon: <span className="text-3xl">☯️</span>
    },
  ];
  
  return (
    <section id="services" className="py-20 bg-[#FFF9E6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-1 bg-[#990000] mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#990000] mb-4">
            {t('services.title')}
          </h2>
          <p className="text-gray-700">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              duration={service.duration}
              requirements={service.requirements}
              benefits={service.benefits}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;