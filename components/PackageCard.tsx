import React from 'react';
import { Package } from '../types';
import { Clock, Star, MapPin } from 'lucide-react';

interface PackageCardProps {
  pkg: Package;
  onViewDetails: (pkg: Package) => void;
  onDownload: (pkg: Package) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, onViewDetails, onDownload }) => {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 flex flex-col h-full transform hover:-translate-y-1">
      {/* Image Area */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur shadow-lg px-4 py-2 rounded-xl text-center z-10">
          {/* <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">From</p> */}
<p className="text-travel-700 dark:text-travel-400 font-bold text-lg leading-none">
  {pkg.priceFrom === 0 ? "Price on Request" : `$${pkg.priceFrom}`}
</p>
        </div>
        
        {/* Category Tag */}
        {/* <div className="absolute bottom-4 left-4 bg-deep-900/80 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <MapPin size={12} /> {pkg.category}
        </div> */}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">{pkg.name}</h3>
          <div className="flex items-center gap-1 text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded-full">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-bold text-amber-700 dark:text-amber-500">{pkg.rating}</span>
          </div>
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">{pkg.shortDescription}</p>

        <div className="flex items-center gap-4 mb-6 text-sm text-gray-400 dark:text-gray-500">
          <div className="flex items-center gap-1.5">
            <Clock size={16} />
            <span>{pkg.duration}</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          <span>{pkg.reviews} reviews</span>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3">
          <button 
            onClick={() => onViewDetails(pkg)}
            className="px-4 py-2.5 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-200 font-semibold rounded-lg text-sm transition-colors"
          >
            View Details
          </button>
          <button 
            onClick={() => onDownload(pkg)}
            className="px-4 py-2.5 bg-travel-50 dark:bg-travel-900/20 text-travel-700 dark:text-travel-300 hover:bg-travel-100 dark:hover:bg-travel-900/40 border border-travel-100 dark:border-travel-800 font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};