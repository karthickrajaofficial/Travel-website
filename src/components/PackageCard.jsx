import React from 'react';
import { ChevronRight } from "lucide-react";

const PackageCard = ({ pkg, onClick, isDragging }) => {
  const Icon = pkg.icon;
  
  const handleClick = () => {
    if (!isDragging) {
      onClick(pkg.slug);
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="min-w-[300px] h-[400px] relative group cursor-grab active:cursor-grabbing"
    >
      <div className="absolute inset-0 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl overflow-hidden">
        {/* Card content as before */}
        <div className="absolute inset-0">
          {pkg.image ? (
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-full object-cover"
              draggable="false"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${pkg.colors}`}
                 style={{ backgroundImage: pkg.pattern }}>
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Icon className="w-40 h-40" />
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        {/* Card content */}
        <div className="relative h-full p-6 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${pkg.colors} flex items-center justify-center`}>
                <Icon className="w-5 h-5 text-gray-800" />
              </div>
              <div className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm">
                <span className="text-sm text-gray-100">Explore</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className={`h-0.5 w-12 rounded-full bg-gradient-to-r ${pkg.colors}`} />
              <div className={`h-0.5 w-2 rounded-full bg-gradient-to-r ${pkg.colors} opacity-50`} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                {pkg.name}
              </h3>
              <p className="text-sm text-gray-200">
                {pkg.description}
              </p>
            </div>

            <div className="group/btn flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-sm font-medium text-gray-200">
                View Details
              </span>
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${pkg.colors} flex items-center justify-center transform transition-all duration-300 group-hover/btn:scale-110`}>
                <ChevronRight className="w-4 h-4 text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;