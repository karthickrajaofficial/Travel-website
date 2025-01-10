import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: "adventure",
    title: "Adventure",
    image: "package/category/adventure.jpg",
    mainCategory: "adventure"
  },
  {
    id: "beach",
    title: "Beach & Island",
    image: "package/category/beach.jpg",
    mainCategory: "beach"
  },
  {
    id: "culture",
    title: "Culture",
    image: "package/category/cultural.jpg",
    mainCategory: "culture"
  },
  {
    id: "nature",
    title: "Nature",
    image: "package/category/desert.jpg",
    mainCategory: "nature"
  },
  {
    id: "river",
    title: "River Cruise",
    image: "package/category/adventure.jpg",
    mainCategory: "river"
  },
  {
    id: "hills",
    title: "Hill Stations",
    image: "package/category/beach.jpg",
    mainCategory: "hills"
  },
  {
    id: "city",
    title: "City Tours",
    image: "package/category/explorer.jpg",
    mainCategory: "city"
  },
  {
    id: "romantic",
    title: "Romantic",
    image: "package/category/cycle.jpg",
    mainCategory: "romantic"
  }
];

const ScrollButton = ({ direction, onClick }) => (
  <div className={`absolute top-1/2 -translate-y-1/2 z-40
    ${direction === 'left' ? 'left-0 md:left-2 lg:left-4' : 'right-0 md:right-2 lg:right-4'}`}
  >
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="bg-white/90 backdrop-blur-sm rounded-full p-2 md:p-3 
        shadow-lg hover:bg-white transition-all duration-300"
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
      ) : (
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
      )}
    </motion.button>
  </div>
);

const CategoryCard = ({ title, image, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="cursor-pointer w-48 sm:w-56 md:w-60 lg:w-64 flex-shrink-0"
    onClick={onClick}
  >
    <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl shadow-lg overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-2 md:p-4 text-center">
        <span className="text-base md:text-xl font-bold text-white tracking-wider drop-shadow-lg">
          {title}
        </span>
      </div>
    </div>
  </motion.div>
);

const OverlayCategories = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.mainCategory}`);
  };

  const scroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="absolute top-64 md:top-72 lg:top-80 left-0 right-0 z-30 px-2 md:px-4 pt-16 md:pt-20"
    >
      <div className="max-w-7xl mx-auto relative px-4 md:px-6 lg:px-8">
        <ScrollButton direction="left" onClick={() => scroll('left')} />
        <ScrollButton direction="right" onClick={() => scroll('right')} />
        
        <div 
          ref={containerRef}
          className="overflow-x-auto hide-scrollbar"
        >
          <div className="flex gap-3 md:gap-4 pb-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                {...category}
                onClick={() => handleCategoryClick(category)}
              />
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.div>
  );
};

export default OverlayCategories;