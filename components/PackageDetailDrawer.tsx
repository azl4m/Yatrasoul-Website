import React from 'react';
import { Package } from '../types';
import { X, CheckCircle2, XCircle, Download, Calendar } from 'lucide-react';

interface PackageDetailDrawerProps {
  pkg: Package | null;
  isOpen: boolean;
  onClose: () => void;
  onDownload: (pkg: Package) => void;
}

export const PackageDetailDrawer: React.FC<PackageDetailDrawerProps> = ({ pkg, isOpen, onClose, onDownload }) => {
  if (!pkg) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 w-full md:w-[600px] bg-white dark:bg-slate-900 z-50 shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="relative">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-md text-white hover:bg-white/30 rounded-full transition-colors"
          >
            <X size={24} />
          </button>

          {/* Header Image */}
          <div className="h-64 md:h-80 w-full relative">
            <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <span className="bg-travel-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3 inline-block">
                  {pkg.duration}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{pkg.name}</h2>
                <div className="flex items-center gap-2 text-white/90">
                  <span className="text-2xl font-semibold">${pkg.priceFrom}</span>
                  <span className="text-sm opacity-80">per person</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed border-l-4 border-travel-500 pl-4 bg-gray-50 dark:bg-slate-800 py-4 pr-4 rounded-r-lg">
              {pkg.shortDescription}
            </p>

            {/* Itinerary */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Calendar className="text-travel-600 dark:text-travel-400" />
                Itinerary
              </h3>
              <div className="space-y-4">
                {pkg.itinerary.map((day, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-travel-100 dark:bg-travel-900 text-travel-700 dark:text-travel-300 flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-travel-600 group-hover:text-white transition-colors">
                        {idx + 1}
                      </div>
                      {idx !== pkg.itinerary.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-100 dark:bg-slate-700 my-1 group-hover:bg-travel-100 dark:group-hover:bg-travel-900 transition-colors"></div>
                      )}
                    </div>
                    <div className="pb-6 pt-1">
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{day}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions / Exclusions */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50/50 dark:bg-green-900/20 p-6 rounded-2xl">
                <h4 className="font-bold text-green-800 dark:text-green-400 mb-4 flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  Included
                </h4>
                <ul className="space-y-2">
                  {pkg.inclusions.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50/50 dark:bg-red-900/20 p-6 rounded-2xl">
                <h4 className="font-bold text-red-800 dark:text-red-400 mb-4 flex items-center gap-2">
                  <XCircle size={18} />
                  Excluded
                </h4>
                <ul className="space-y-2">
                  {pkg.exclusions.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-gray-100 dark:border-slate-800 flex flex-col gap-3">
              <button 
                onClick={() => onDownload(pkg)}
                className="w-full py-4 bg-travel-600 hover:bg-travel-700 text-white font-bold rounded-xl shadow-lg shadow-travel-600/20 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Official Quote (PDF)
              </button>
              <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                *Prices are subject to availability. {pkg.terms}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};