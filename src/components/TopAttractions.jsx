import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TopAttractions = ({ attractions, cityName = "this destination" }) => {
  const [screenSize, setScreenSize] = useState('desktop');
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1280) {
        setScreenSize('medium');
      } else {
        setScreenSize('desktop');
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const getDescription = (cityName) => {
    return `Embark on an unforgettable journey through ${cityName}'s most cherished landmarks and hidden gems. From timeless architectural marvels to vibrant cultural hotspots, discover what makes ${cityName} one of the world's most captivating destinations.`;
  };

  return (
    <div className="bg-gradient-to-b from-white via-stone-50 to-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-8 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-yellow-400"></div>
            <span className="text-yellow-600 font-medium tracking-wider text-sm uppercase">
              Explore & Discover
            </span>
            <div className="h-px w-12 bg-yellow-400"></div>
          </div>
          <h2 className="text-2xl md:text-4xl font-serif text-stone-800 mb-4 md:mb-6">
            Must-Visit Attractions
          </h2>
          <p className="text-stone-600 leading-relaxed text-sm md:text-base">
            {getDescription(cityName)}
          </p>
        </motion.div>

        <div className="relative group">
          <button
            onClick={handlePrev}
            className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full 
                     p-2 md:p-3 shadow-lg opacity-50 md:opacity-0 md:group-hover:opacity-100 
                     transition-all duration-300 hover:bg-yellow-50 hover:scale-110"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-stone-800" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full 
                     p-2 md:p-3 shadow-lg opacity-50 md:opacity-0 md:group-hover:opacity-100 
                     transition-all duration-300 hover:bg-yellow-50 hover:scale-110"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-stone-800" />
          </button>

          <div 
            ref={sliderRef}
            className="overflow-x-auto hide-scrollbar"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none'
            }}
          >
            <div className="flex gap-4 md:gap-6">
              {attractions.map((attraction) => (
                <motion.div
                  key={attraction.id}
                  whileHover={{ y: isDragging ? 0 : -8 }}
                  className={`relative flex-none 
                    ${screenSize === 'mobile' 
                      ? 'w-[calc(33.333%-16px)]' 
                      : screenSize === 'medium'
                        ? 'w-[calc(33.333%-16px)]'
                        : 'w-[calc(20%-16px)]'
                    } bg-white rounded-2xl overflow-hidden 
                    shadow-lg hover:shadow-2xl transition-all duration-300 group/card`}
                >
                  <div className="relative aspect-[3/4]">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover transform transition-transform duration-700
                               group-hover/card:scale-110"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform transition-transform duration-300">
                      <h3 className="text-xl hidden lg:block md:text-2xl font-medium text-white mb-2 transform transition-all duration-300">
                        {attraction.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <style>
          {`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default TopAttractions;