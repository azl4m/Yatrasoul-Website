import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="/assets/logo.png" 
            alt="Yatra Soul Logo" 
            className="h-12 w-auto object-contain drop-shadow-sm"
            onError={(e) => {
              // Fallback if image not found
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          {/* Fallback Text in case logo image is missing */}
          <div className="hidden flex-col">
            <span className={`text-2xl font-bold leading-none ${isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'}`}>
              Yatra<span className="text-travel-600">Soul</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Destinations', 'Packages', 'About Us', 'Blog'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`font-medium hover:text-travel-500 transition-colors ${
                isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/90 shadow-black/10 text-shadow-sm'
              }`}
            >
              {item}
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isScrolled 
                ? 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800' 
                : 'text-white hover:bg-white/20'
            }`}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-travel-600 hover:bg-travel-700 text-white font-medium rounded-full shadow-lg shadow-travel-600/30 transition-all hover:scale-105 active:scale-95"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'
            }`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg ${isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl border-t border-gray-100 dark:border-slate-800 p-4 flex flex-col gap-4 md:hidden">
          {['Destinations', 'Packages', 'About Us', 'Blog'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-gray-600 dark:text-gray-300 font-medium py-2 border-b border-gray-50 dark:border-slate-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact"
            className="text-center px-6 py-3 bg-travel-600 text-white font-bold rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
};