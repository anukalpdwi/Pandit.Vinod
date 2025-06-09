import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const videos = [
    {
      id: 'video1',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1Fclqhpqad12h70kTuzcHtz_khw75WjFd1Jaqhq-iGZXWrUGGSv7M1L6CCYkd6DVb_Y&usqp=CAU',
      title: 'Kaal Sarp Dosh Nivaran Puja',
      youtubeId: 'y7f3xZfrnEo'
    },
    {
      id: 'video2',
      thumbnail: 'https://www.trimbakeshwar.org/assets/images/Navghraha_Puja.webp',
      title: 'Navgraha Shanti Puja',
      youtubeId: '5b6Zs2JmLPk' // Replace with actual YouTube ID
    },
    {
      id: 'video3',
      thumbnail: 'https://www.trimbakeshwar.org/assets/images/rudra-abhishek/HOW%20TO%20PERFORM%20RUDRA%20ABHISHEK%20POOJA.webp',
      title: 'Rudra Abhishek Ceremony',
      youtubeId: 'aVtmsSlUXgU' // Replace with actual YouTube ID
    }
  ];
  
  const photos = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
    '/7.jpg',
    '/8.jpg',
    '/9.jpg',
    '/10.jpg',
    '/11.jpg',
    '/12.jpg',
    '/13.jpg',
    '/14.jpg',
    '/15.jpg'
  ];
  
  const openVideo = (youtubeId: string) => {
    setActiveVideo(youtubeId);
    document.body.style.overflow = 'hidden';
  };
  
  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-1 bg-[#990000] mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#990000] mb-4">
            {t('gallery.title')}
          </h2>
        </div>
        
        {/* Videos Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            {t('gallery.videos')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => openVideo(video.youtubeId)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-64 object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#990000] flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
                  <h4 className="text-white font-medium">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Photos Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            {t('gallery.photos')}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={photo} 
                  alt={`Gallery photo ${index + 1}`} 
                  className="w-full h-64 object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-[#FFD700] transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;