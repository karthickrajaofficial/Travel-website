import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedDestinations = ({ subPlaces }) => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const handleSubPlaceClick = (subPlacePath) => {
    navigate(subPlacePath);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -400,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 400,
      behavior: 'smooth'
    });
  };

  if (!subPlaces || subPlaces.length === 0) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 relative">
      <h2 className="text-3xl font-serif text-stone-800 mb-12">Featured Destinations</h2>
      <div className="relative">
        <div className="flex overflow-x-scroll no-scrollbar" ref={containerRef}>
          {subPlaces.map((subPlace, index) => (
            <div
              key={index}
              className="group relative bg-white border border-stone-200 min-w-[400px] cursor-pointer mr-8 last:mr-0"
              onClick={() => handleSubPlaceClick(subPlace.path)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`package/${subPlace.image}`}
                  alt={subPlace.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute top-4 left-4">
                  <div className="bg-white px-3 py-1">
                    <span className="text-stone-800 text-sm font-medium">{subPlace.type}</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-stone-800 mb-3">{subPlace.name}</h3>
                <p className="text-stone-600 mb-6">{subPlace.title}</p>
                <div className="flex items-center justify-between pt-6 border-t border-stone-200">
                  <div className="flex items-center gap-2 text-stone-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">
                      {subPlace.categories && subPlace.categories.length > 0
                        ? subPlace.categories[0]
                        : 'Destination'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-800 group-hover:text-stone-600 transition-colors">
                    <span className="text-sm font-medium">Discover</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          onClick={scrollLeft}
        >
          <ChevronLeft className="w-6 h-6 text-stone-800" />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          onClick={scrollRight}
        >
          <ChevronRight className="w-6 h-6 text-stone-800" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedDestinations;