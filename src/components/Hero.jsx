import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "/paris1.jpg",
    title: "Enchanting Europe",
    subtitle: "Launching Europe 2025 tours - A journey of timeless charm and wonders",
  },
  {
    id: 2,
    image: "/paris2.jpg",
    title: "Discover Paris",
    subtitle: "Experience the magic of the City of Light",
  },
  {
    id: 3,
    image: "/paris3.jpg",
    title: "Swiss Alps Adventure",
    subtitle: "Breathtaking mountain views and exciting adventures await",
  },
  {
    id: 4,
    image: "/paris4.jpg",
    title: "Italian Dreams",
    subtitle: "From historic Rome to romantic Venice",
  },
];

const categories = [
  {
    id: "adventure",
    title: "Adventure",
    image: "package/category/adventure.jpg",
    mainCategory: "adventure"  // This matches exactly with your package data
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

const CategoryCard = ({ title, image, categories, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="min-w-[calc(30%-6px)] sm:min-w-[calc(33.333%-8px)] lg:min-w-[calc(25%-12px)] p-1 lg:p-2 cursor-pointer"
    onClick={onClick}
    role="button"
  >
    <div className="relative w-full aspect-[4/5] rounded-xl lg:rounded-2xl shadow-lg overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center z-20">
        <span className="text-base sm:text-lg font-bold text-white tracking-wider drop-shadow-lg">
          {title}
        </span>
      </div>
    </div>
  </motion.div>
);

const ScrollButton = ({ direction, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 lg:p-3 shadow-lg hover:bg-white transition-all duration-300"
    style={{ 
      [direction === "left" ? "left" : "right"]: "4px",
    }}
  >
    {direction === "left" ? (
      <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-800" />
    ) : (
      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-800" />
    )}
  </motion.button>
);

const ExperienceCategories = () => {
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? 
        -(container.offsetWidth) : 
        container.offsetWidth;
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCategoryClick = (category) => {
    // console.log('Clicked category:', category.mainCategory); // For debugging
    navigate(`/category/${category.mainCategory}`);
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8, type: "spring", damping: 20 }}
      className="absolute bottom-[10%] sm:bottom-[15%] lg:-bottom-24 left-0 right-0 z-30"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-6">
        <div className="rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-5">
          <div className="relative">
            <ScrollButton direction="left" onClick={() => scroll("left")} />
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-3 scroll-smooth no-scrollbar py-1 sm:py-2 px-1 sm:px-2"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                scrollSnapType: "x mandatory",
              }}
            >
            {categories.map((category) => (
  <CategoryCard
    key={category.id}
    {...category}
    onClick={() => handleCategoryClick(category)}  // Pass the whole category object
  />
))}
            </div>
            <ScrollButton direction="right" onClick={() => scroll("right")} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${slides[currentIndex].image})`,
            height: '100%'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-20 h-full flex items-center justify-center"
      >
        <div className="text-center text-white px-4 max-w-4xl mt-[-10vh] sm:mt-0">
          <motion.h1
            key={slides[currentIndex].title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 lg:mb-8 leading-tight"
          >
            {slides[currentIndex].title}
          </motion.h1>
          <motion.p
            key={slides[currentIndex].subtitle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200"
          >
            {slides[currentIndex].subtitle}
          </motion.p>
        </div>
      </motion.div>

      <ExperienceCategories />
    </div>
  );
};

export default Hero;