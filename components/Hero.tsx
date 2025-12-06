import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/travelsoul-hero/1920/1080" 
          alt="Golden hour mountain valley" 
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay Gradient: Deep Red/Brown to transparent to match Logo warmth */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep-900/90 via-deep-900/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white pt-20">
          <div className="inline-block px-4 py-1.5 mb-6 border border-travel-300/30 rounded-full bg-white/10 backdrop-blur-md text-travel-100 text-sm font-medium tracking-wide">
            ✨ Discover the extraordinary
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
            Yatra Soul — <br/>
            Travel to <span className="text-brand-orange italic">peace</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
            Handcrafted itineraries designed for the modern adventurer. Create unforgettable memories with our premium curated packages.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#packages" 
              className="px-8 py-4 bg-travel-600 hover:bg-travel-700 text-white text-lg font-semibold rounded-full transition-all shadow-lg shadow-travel-900/20 hover:shadow-travel-600/40 flex items-center justify-center gap-2 group"
            >
              Explore Packages
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-lg font-semibold rounded-full transition-all flex items-center justify-center"
            >
              Request Quote
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
};