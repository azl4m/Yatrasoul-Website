import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PackageCard } from './components/PackageCard';
import { PackageDetailDrawer } from './components/PackageDetailDrawer';
import { ContactForm } from './components/ContactForm';
import { Testimonials } from './components/Testimonials';
import { SocialFeed } from './components/SocialFeed';
import { Footer } from './components/Footer';
import { packages } from './data/packages';
import { Package } from './types';
import { generateQuotePDF } from './utils/pdf';

function App() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleViewDetails = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleDownloadQuote = (pkg: Package) => {
    // Basic prompt for name to personalize PDF
    const name = window.prompt("Please enter your name for the quotation:", "Guest Traveler");
    if (name) {
      generateQuotePDF(pkg, name);
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        
        {/* Packages Grid Section */}
        <section id="packages" className="py-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Curated Experiences</h2>
              <p className="text-xl text-gray-500 dark:text-gray-400">
                Choose from our most popular hand-picked itineraries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <PackageCard 
                  key={pkg.id} 
                  pkg={pkg} 
                  onViewDetails={handleViewDetails} 
                  onDownload={handleDownloadQuote}
                />
              ))}
            </div>
          </div>
        </section>

        <ContactForm packages={packages} />
        
        <Testimonials />
        
        <SocialFeed />
      </main>

      <Footer />

      <PackageDetailDrawer 
        pkg={selectedPackage} 
        isOpen={isDrawerOpen} 
        onClose={handleCloseDrawer}
        onDownload={handleDownloadQuote}
      />
    </div>
  );
}

export default App;