import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Demo data with sample images and descriptions
const categories = [
  {
    id: 'adventure',
    title: 'ADVENTURE',
    image: '/api/placeholder/400/400',
    icon: '🏃‍♂️'
  },
  {
    id: 'beach',
    title: 'BEACH',
    image: '/api/placeholder/400/400',
    icon: '🏖️'
  },
  {
    id: 'bicycle',
    title: 'BICYCLE',
    image: '/api/placeholder/400/400',
    icon: '🚴‍♂️'
  },
  {
    id: 'cultural',
    title: 'CULTURAL',
    image: '/api/placeholder/400/400',
    icon: '🎭'
  },
  {
    id: 'desert',
    title: 'DESERT',
    image: '/api/placeholder/400/400',
    icon: '🐪'
  },
  {
    id: 'food',
    title: 'FOOD AND CULINARY',
    image: '/api/placeholder/400/400',
    icon: '🍳'
  },
  {
    id: 'hiking',
    title: 'HIKING AND TREKKING',
    image: '/api/placeholder/400/400',
    icon: '🏔️'
  },
  {
    id: 'safari',
    title: 'SAFARI',
    image: '/api/placeholder/400/400',
    icon: '🦁'
  }
];

const CategoryCard = ({ title, image, icon }) => (
  <div className="min-w-[280px] p-2 cursor-pointer group">
    <div className="relative w-full aspect-[4/5]">
      {/* Airplane Window Frame */}
      <div className="absolute inset-0 bg-gray-200 rounded-2xl shadow-lg">
        {/* Inner window */}
        <div className="absolute inset-2 bg-white rounded-xl overflow-hidden">
          {/* Content container */}
          <div className="h-full w-full flex flex-col items-center">
            {/* Image container */}
            <div className="w-full h-3/4 relative overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* Text container */}
            <div className="w-full h-1/4 flex items-center justify-center p-4 bg-white">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{icon}</span>
                <span className="text-sm font-semibold text-gray-800">
                  {title}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Window frame details */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gray-300 rounded-b-2xl"></div>
        <div className="absolute inset-y-0 right-0 w-1 bg-gray-300 rounded-r-2xl"></div>
      </div>
    </div>
  </div>
);

const ScrollButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
    style={{ [direction === 'left' ? 'left' : 'right']: '0.5rem' }}
  >
    {direction === 'left' ? (
      <ChevronLeft className="w-6 h-6" />
    ) : (
      <ChevronRight className="w-6 h-6" />
    )}
  </button>
);

const ExperienceCategories = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">EXPERIENCES</h2>
        <p className="text-gray-600 mt-2">
          Experiences are thrilling adventures that will immerse you in nature's most awe-inspiring 
          landscapes, offering an escape from the ordinary. Here are some adventure tour options:
        </p>
      </div>

      <div className="relative">
        <ScrollButton direction="left" onClick={() => scroll('left')} />
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar py-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              icon={category.icon}
            />
          ))}
        </div>

        <ScrollButton direction="right" onClick={() => scroll('right')} />
      </div>

      <div className="mt-6 text-center">
        <button className="text-red-500 font-medium hover:text-red-600 transition-colors">
          View All Experiences
        </button>
      </div>
    </div>
  );
};

export default ExperienceCategories;