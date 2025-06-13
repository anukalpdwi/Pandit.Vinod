import React from 'react';
import { Users, Award, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      label: t('about.experience'),
      icon: <Calendar className="h-6 w-6 text-[#990000]" />,
    },
    {
      label: t('about.clients'),
      icon: <Users className="h-6 w-6 text-[#990000]" />,
    },
    {
      label: t('about.ceremonies'),
      icon: <Award className="h-6 w-6 text-[#990000]" />,
    },
  ];
  
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-[#FFF9E6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-12">
          {/* Image Column */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-40 h-40 border-8 border-[#FFD700] rounded-full opacity-20 z-0"></div>
              <img 
                src="https://apnayatra.com/wp-content/uploads/2023/07/Trimbakeshwar-Jyotirling1.jpg" 
                alt="Pandit Vinod Guruji" 
                className="rounded-lg shadow-xl relative z-10 w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-40 h-40 border-8 border-[#FFD700] rounded-full opacity-20 z-0"></div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:w-1/2">
            <div className="w-16 h-1 bg-[#990000] mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#990000] mb-4">{t('about.title')}</h2>
            <p className="text-lg text-gray-700 mb-6">{t('about.subtitle')}</p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              {t('about.bio')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="mb-3">
                    {stat.icon}
                  </div>
                  <span className="block text-gray-800 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        {/* <div className="mt-24">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-[#990000] mx-auto mb-4"></div>
            <h2 className="text-3xl font-bold text-[#990000]">{t('testimonials.title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 relative">
                <div className="text-[#FFD700] text-6xl opacity-20 absolute top-2 left-4">"</div>
                <p className="text-gray-700 mb-6 relative z-10">
                  {t(`testimonial.${index}.text`)}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#990000]/10 rounded-full flex items-center justify-center text-[#990000] font-bold">
                    {t(`testimonial.${index}.name`).charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">{t(`testimonial.${index}.name`)}</p>
                    <p className="text-sm text-gray-500">{t(`testimonial.${index}.location`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;