import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';

export const SocialFeed: React.FC = () => {
  const images = [
    'https://picsum.photos/seed/travel1/300/300',
    'https://picsum.photos/seed/travel2/300/300',
    'https://picsum.photos/seed/travel3/300/300',
    'https://picsum.photos/seed/travel4/300/300',
    'https://picsum.photos/seed/travel5/300/300',
    'https://picsum.photos/seed/travel6/300/300',
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
              <Instagram className="text-travel-600" />
              @yatrasoul_official
            </h2>
            <p className="text-gray-500 dark:text-gray-400">Follow us for live trip stories and daily inspiration.</p>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-1 text-travel-600 dark:text-travel-400 font-semibold hover:text-travel-700 dark:hover:text-travel-300">
            View Profile <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {images.map((img, idx) => (
            <a key={idx} href="#" className="group relative overflow-hidden rounded-xl aspect-square block">
              <img 
                src={img} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Instagram size={24} />
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <a href="#" className="inline-flex items-center gap-1 text-travel-600 dark:text-travel-400 font-semibold hover:text-travel-700 dark:hover:text-travel-300">
            View Profile <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};