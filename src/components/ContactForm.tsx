import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you'd handle the form submission to a backend service
    
    // Simulate successful form submission
    setFormStatus({
      success: true,
      message: 'Thank you for your inquiry. We will contact you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };
  
  return (
    <section id="contact" className="py-20 bg-[#FFF9E6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-1 bg-[#990000] mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#990000] mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-gray-700">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Contact Information */}
            <div className="md:w-1/3 bg-[#990000] text-white p-8">
              <h3 className="text-2xl font-semibold mb-6">Pandit Shivraj Shastri</h3>
              <div className="mb-6">
                <p className="mb-2">Trimbakeshwar Temple,</p>
                <p className="mb-2">Nashik, Maharashtra</p>
                <p>India</p>
              </div>
              <div className="mb-6">
                <p className="mb-2">+91 91701029981</p>
                <p>
                  <a
                    href="mailto:shivrajshastri09@gmail.com"
                    className="underline hover:text-[#FFD700] transition-colors"
                  >
                    shivrajshastri09@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <a 
                  href="https://www.youtube.com/@trimbakeshwar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-white hover:text-[#FFD700] mr-4 transition-colors"
                >
                  YouTube
                </a>
                {/* <a 
                  href="https://www.instagram.com/trimbakeshwar_click" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-white hover:text-[#FFD700] transition-colors"
                >
                  Instagram
                </a> */}
              </div>
            </div>
            
            {/* Contact Form */}
            {/* <div className="md:w-2/3 p-8">
              {formStatus && (
                <div className={`mb-6 p-4 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-[#990000] hover:bg-[#7D0000] text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;