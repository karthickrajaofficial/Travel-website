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
    ${direction === 'left' ? 'left-0 md:left-2' : 'right-0 md:right-2'}`}
  >
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 md:p-3 
        shadow-lg hover:bg-white transition-all duration-300"
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-3 h-3 md:w-5 md:h-5 text-gray-800" />
      ) : (
        <ChevronRight className="w-3 h-3 md:w-5 md:h-5 text-gray-800" />
      )}
    </motion.button>
  </div>
);

const CategoryCard = ({ title, image, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="cursor-pointer w-32 sm:w-40 md:w-56 lg:w-64 flex-shrink-0"
    onClick={onClick}
  >
    <div className="relative aspect-[4/3] rounded-lg md:rounded-xl shadow-md overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-1.5 md:p-4 text-center">
        <span className="text-sm md:text-lg lg:text-xl font-bold text-white tracking-wide md:tracking-wider drop-shadow-lg">
          {title}
        </span>
      </div>
    </div>
  </motion.div>
);

const MobileCategories = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.mainCategory}`);
  };

  const scroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? 
        -140 : // Smaller scroll amount for mobile
        140;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="absolute top-48 sm:top-56 md:top-72 lg:top-80 left-0 right-0 z-30 px-2 md:px-4"
    >
      <div className="max-w-7xl mx-auto relative px-2 md:px-6">
        <ScrollButton direction="left" onClick={() => scroll('left')} />
        <ScrollButton direction="right" onClick={() => scroll('right')} />
        
        <div 
          ref={containerRef}
          className="overflow-x-auto hide-scrollbar"
        >
          <div className="flex gap-2 md:gap-4 pb-4">
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

export default MobileCategories;