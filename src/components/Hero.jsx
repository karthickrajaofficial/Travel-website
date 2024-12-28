// import React, { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const slides = [
//   {
//     id: 1,
//     image: "/paris1.jpg",
//     title: "Enchanting Europe",
//     subtitle: "Launching Europe 2025 tours - A journey of timeless charm and wonders",
//   },
//   {
//     id: 2,
//     image: "/paris2.jpg",
//     title: "Discover Paris",
//     subtitle: "Experience the magic of the City of Light",
//   },
//   {
//     id: 3,
//     image: "/paris3.jpg",
//     title: "Swiss Alps Adventure",
//     subtitle: "Breathtaking mountain views and exciting adventures await",
//   },
//   {
//     id: 4,
//     image: "/paris4.jpg",
//     title: "Italian Dreams",
//     subtitle: "From historic Rome to romantic Venice",
//   },
// ];

// const categories = [
//   {
//     id: "adventure",
//     title: "ADVENTURE",
//     image: "/category/adventure.jpg",
//     icon: "🏃‍♂️",
//   },
//   {
//     id: "beach",
//     title: "BEACH",
//     image: "/category/beach.jpg",
//     icon: "🏖️",
//   },
//   {
//     id: "bicycle",
//     title: "BICYCLE",
//     image: "/category/cycle.jpg",
//     icon: "🚴‍♂️",
//   },
//   {
//     id: "cultural",
//     title: "CULTURAL",
//     image: "/category/cultural.jpg",
//     icon: "🎭",
//   },
//   {
//     id: "desert",
//     title: "DESERT",
//     image: "/category/desert.jpg",
//     icon: "🐪",
//   },
//   {
//     id: "explorer",
//     title: "EXPLORER",
//     image: "/category/explorer.jpg",
//     icon: "🗺️",
//   },
// ];

// const CategoryCard = ({ title, image, icon, onClick }) => (
//   <div
//     className="min-w-[calc(33.333%-8px)] lg:min-w-[calc(25%-12px)] p-1 lg:p-2 cursor-pointer group"
//     onClick={onClick}
//     role="button"
//   >
//     <div className="relative w-full aspect-[4/5] bg-gray-200 rounded-lg lg:rounded-2xl shadow-lg overflow-hidden">
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//       />
//       <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
//         <div className="text-center">
//           <span className="text-sm lg:text-xl font-bold text-white">
//             {title}
//           </span>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const ScrollButton = ({ direction, onClick }) => (
//   <button
//     onClick={onClick}
//     className="absolute top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full p-1.5 lg:p-3 shadow-lg hover:bg-gray-50 transition-colors"
//     style={{ 
//       [direction === "left" ? "left" : "right"]: "4px",
//     }}
//   >
//     {direction === "left" ? (
//       <ChevronLeft className="w-4 h-4 lg:w-6 lg:h-6" />
//     ) : (
//       <ChevronRight className="w-4 h-4 lg:w-6 lg:h-6" />
//     )}
//   </button>
// );

// const ExperienceCategories = () => {
//   const scrollContainerRef = useRef(null);
//   const navigate = useNavigate();

//   const scroll = (direction) => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const scrollAmount = direction === "left" ? 
//         -(container.offsetWidth) : 
//         container.offsetWidth;
//       container.scrollBy({
//         left: scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   const handleCategoryClick = (title) => {
//     navigate(`/${title.toLowerCase()}`);
//   };

//   return (
//     <motion.div
//       initial={{ y: 50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ delay: 0.5, duration: 0.8 }}
//       className="absolute bottom-4 left-0 right-0 z-30"
//     >
//       <div className="max-w-7xl mx-auto px-2 lg:px-4">
//         <div className="rounded-xl p-2 lg:p-4">
//           <div className="relative">
//             <ScrollButton direction="left" onClick={() => scroll("left")} />
//             <div
//               ref={scrollContainerRef}
//               className="flex overflow-x-auto gap-3 lg:gap-4 scroll-smooth no-scrollbar py-2 px-2"
//               style={{
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//                 scrollSnapType: "x mandatory",
//               }}
//             >
//               {categories.map((category) => (
//                 <CategoryCard
//                   key={category.id}
//                   title={category.title}
//                   image={category.image}
//                   icon={category.icon}
//                   onClick={() => handleCategoryClick(category.title)}
//                 />
//               ))}
//             </div>
//             <ScrollButton direction="right" onClick={() => scroll("right")} />
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-[85vh] lg:h-screen overflow-hidden">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
//       </div>

//       <div className="relative z-20 h-full flex items-center justify-center">
//         <div className="text-center text-white px-4 max-w-4xl">
//           <h1 className="text-2xl lg:text-6xl font-bold mb-2 lg:mb-6">
//             {slides[currentIndex].title}
//           </h1>
//           <p className="text-sm lg:text-2xl">
//             {slides[currentIndex].subtitle}
//           </p>
//         </div>
//       </div>

//       <ExperienceCategories />
//     </div>
//   );
// };

// export default Hero;
// ===============updated category 
// import React, { useEffect, useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const slides = [
//   {
//     id: 1,
//     image: "/paris1.jpg",
//     title: "Enchanting Europe",
//     subtitle: "Launching Europe 2025 tours - A journey of timeless charm and wonders",
//   },
//   {
//     id: 2,
//     image: "/paris2.jpg",
//     title: "Discover Paris",
//     subtitle: "Experience the magic of the City of Light",
//   },
//   {
//     id: 3,
//     image: "/paris3.jpg",
//     title: "Swiss Alps Adventure",
//     subtitle: "Breathtaking mountain views and exciting adventures await",
//   },
//   {
//     id: 4,
//     image: "/paris4.jpg",
//     title: "Italian Dreams",
//     subtitle: "From historic Rome to romantic Venice",
//   },
// ];

// const categories = [
//   {
//     id: "adventure",
//     title: "ADVENTURE",
//     image: "/category/adventure.jpg",
//     icon: "🏃‍♂️",
//   },
//   {
//     id: "beach",
//     title: "BEACH",
//     image: "/category/beach.jpg",
//     icon: "🏖️",
//   },
//   {
//     id: "bicycle",
//     title: "BICYCLE",
//     image: "/category/cycle.jpg",
//     icon: "🚴‍♂️",
//   },
//   {
//     id: "cultural",
//     title: "CULTURAL",
//     image: "/category/cultural.jpg",
//     icon: "🎭",
//   },
//   {
//     id: "desert",
//     title: "DESERT",
//     image: "/category/desert.jpg",
//     icon: "🐪",
//   },
//   {
//     id: "explorer",
//     title: "EXPLORER",
//     image: "/category/explorer.jpg",
//     icon: "🗺️",
//   },
// ];

// const CategoryCard = ({ title, image, icon, onClick }) => (
//   <motion.div
//     whileHover={{ scale: 1.02 }}
//     whileTap={{ scale: 0.98 }}
//     className="min-w-[calc(33.333%-8px)] lg:min-w-[calc(25%-12px)] p-1 lg:p-2 cursor-pointer"
//     onClick={onClick}
//     role="button"
//   >
//     <div className="relative w-full aspect-[4/5] rounded-xl lg:rounded-2xl shadow-lg overflow-hidden group">
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10" />
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//       />
//       <div className="absolute inset-0 z-20 flex flex-col items-center justify-end p-4 lg:p-6">
//         <span className="text-2xl mb-2">{icon}</span>
//         <span className="text-sm lg:text-lg font-bold text-white tracking-wider">
//           {title}
//         </span>
//       </div>
//     </div>
//   </motion.div>
// );

// const ScrollButton = ({ direction, onClick }) => (
//   <motion.button
//     whileHover={{ scale: 1.1 }}
//     whileTap={{ scale: 0.9 }}
//     onClick={onClick}
//     className="absolute top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 lg:p-3 shadow-lg hover:bg-white transition-all duration-300"
//     style={{ 
//       [direction === "left" ? "left" : "right"]: "8px",
//     }}
//   >
//     {direction === "left" ? (
//       <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-gray-800" />
//     ) : (
//       <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-gray-800" />
//     )}
//   </motion.button>
// );

// const ExperienceCategories = () => {
//   const scrollContainerRef = useRef(null);
//   const navigate = useNavigate();

//   const scroll = (direction) => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const scrollAmount = direction === "left" ? 
//         -(container.offsetWidth) : 
//         container.offsetWidth;
//       container.scrollBy({
//         left: scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   const handleCategoryClick = (title) => {
//     navigate(`/${title.toLowerCase()}`);
//   };

//   return (
//     <motion.div
//       initial={{ y: 100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ delay: 0.5, duration: 0.8, type: "spring", damping: 20 }}
//       className="absolute -bottom-20 lg:-bottom-24 left-0 right-0 z-30"
//     >
//       <div className="max-w-7xl mx-auto px-3 lg:px-6">
//         <div className="rounded-2xl p-3 lg:p-5 shadow-2xl">
//           <div className="relative">
//             <ScrollButton direction="left" onClick={() => scroll("left")} />
//             <div
//               ref={scrollContainerRef}
//               className="flex overflow-x-auto gap-3 lg:gap-4 scroll-smooth no-scrollbar py-2 px-2"
//               style={{
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//                 scrollSnapType: "x mandatory",
//               }}
//             >
//               {categories.map((category) => (
//                 <CategoryCard
//                   key={category.id}
//                   title={category.title}
//                   image={category.image}
//                   icon={category.icon}
//                   onClick={() => handleCategoryClick(category.title)}
//                 />
//               ))}
//             </div>
//             <ScrollButton direction="right" onClick={() => scroll("right")} />
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-[90vh] lg:h-screen overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
//         </motion.div>
//       </AnimatePresence>

//       <motion.div
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.8 }}
//         className="relative z-20 h-full flex items-center justify-center"
//       >
//         <div className="text-center text-white px-4 max-w-4xl">
//           <motion.h1
//             key={slides[currentIndex].title}
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-3xl lg:text-7xl font-bold mb-4 lg:mb-8 leading-tight"
//           >
//             {slides[currentIndex].title}
//           </motion.h1>
//           <motion.p
//             key={slides[currentIndex].subtitle}
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-base lg:text-2xl text-gray-200"
//           >
//             {slides[currentIndex].subtitle}
//           </motion.p>
//         </div>
//       </motion.div>

//       <ExperienceCategories />
//     </div>
//   );
// };

// export default Hero; 
// ===========img
// import React, { useEffect, useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const slides = [
//   {
//     id: 1,
//     image: "/paris1.jpg",
//     title: "Enchanting Europe",
//     subtitle: "Launching Europe 2025 tours - A journey of timeless charm and wonders",
//   },
//   {
//     id: 2,
//     image: "/paris2.jpg",
//     title: "Discover Paris",
//     subtitle: "Experience the magic of the City of Light",
//   },
//   {
//     id: 3,
//     image: "/paris3.jpg",
//     title: "Swiss Alps Adventure",
//     subtitle: "Breathtaking mountain views and exciting adventures await",
//   },
//   {
//     id: 4,
//     image: "/paris4.jpg",
//     title: "Italian Dreams",
//     subtitle: "From historic Rome to romantic Venice",
//   },
// ];

// const categories = [
//   {
//     id: "adventure",
//     title: "Adventure",
//     image: "/category/adventure.jpg",
//     icon: "🏃‍♂️",
//     description: "Thrilling outdoor activities"
//   },
//   {
//     id: "beach",
//     title: "Beach",
//     image: "/category/beach.jpg",
//     icon: "🏖️",
//     description: "Relaxing coastal getaways"
//   },
//   {
//     id: "bicycle",
//     title: "Bicycle",
//     image: "/category/cycle.jpg",
//     icon: "🚴‍♂️",
//     description: "Scenic cycling routes"
//   },
//   {
//     id: "cultural",
//     title: "Cultural",
//     image: "/category/cultural.jpg",
//     icon: "🎭",
//     description: "Historical experiences"
//   },
//   // ... keep other categories
// ];

// const CategoryCard = ({ title, image, icon, onClick }) => (
//   <motion.div
//     whileHover={{ scale: 1.02 }}
//     whileTap={{ scale: 0.98 }}
//     className="min-w-[calc(33.333%-8px)] lg:min-w-[calc(25%-12px)] p-1 lg:p-2 cursor-pointer"
//     onClick={onClick}
//     role="button"
//   >
//     <div className="relative w-full aspect-[4/5] rounded-xl lg:rounded-2xl shadow-lg overflow-hidden group">
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//       />
//       {/* Stronger gradient for better text visibility */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
//       <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center z-20">
//         <span className="text-2xl sm:text-3xl mb-2">{icon}</span>
//         <span className="text-base sm:text-lg font-bold text-white tracking-wider drop-shadow-lg">
//           {title}
//         </span>
//       </div>
//     </div>
//   </motion.div>
// );

// const ScrollButton = ({ direction, onClick }) => (
//   <motion.button
//     whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.95)" }}
//     whileTap={{ scale: 0.9 }}
//     onClick={onClick}
//     className="absolute top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full p-2 lg:p-3 shadow-lg transition-all duration-300"
//     style={{ 
//       [direction === "left" ? "left" : "right"]: "8px",
//     }}
//   >
//     {direction === "left" ? (
//       <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-gray-800" />
//     ) : (
//       <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-gray-800" />
//     )}
//   </motion.button>
// );

// const ExperienceCategories = () => {
//   const scrollContainerRef = useRef(null);
//   const navigate = useNavigate();

//   const scroll = (direction) => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const scrollAmount = direction === "left" ? 
//         -(container.offsetWidth) : 
//         container.offsetWidth;
//       container.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   const handleCategoryClick = (title) => {
//     navigate(`/${title.toLowerCase()}`);
//   };

//   return (
//     <motion.div
//       initial={{ y: 50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ delay: 0.5, duration: 0.8, type: "spring", damping: 20 }}
//       className="absolute -bottom-20 lg:-bottom-24 left-0 right-0 z-30"
//     >
//       <div className="max-w-7xl mx-auto px-3 lg:px-6">
//         <div className="rounded-2xl p-3 lg:p-5 shadow-2xl">
//           <div className="relative">
//             <ScrollButton direction="left" onClick={() => scroll("left")} />
//             <div
//               ref={scrollContainerRef}
//               className="flex overflow-x-auto gap-3 lg:gap-4 scroll-smooth no-scrollbar py-2 px-2"
//               style={{
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//                 scrollSnapType: "x mandatory",
//               }}
//             >
//               {categories.map((category) => (
//                 <CategoryCard
//                   key={category.id}
//                   {...category}
//                   onClick={() => handleCategoryClick(category.title)}
//                 />
//               ))}
//             </div>
//             <ScrollButton direction="right" onClick={() => scroll("right")} />
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
//         </motion.div>
//       </AnimatePresence>

//       <motion.div
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.8 }}
//         className="relative z-20 h-full flex items-center justify-center"
//       >
//         <div className="text-center text-white px-4 max-w-4xl">
//           <motion.h1
//             key={slides[currentIndex].title}
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 lg:mb-8"
//           >
//             {slides[currentIndex].title}
//           </motion.h1>
//           <motion.p
//             key={slides[currentIndex].subtitle}
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200"
//           >
//             {slides[currentIndex].subtitle}
//           </motion.p>
//         </div>
//       </motion.div>

//       <ExperienceCategories />
//     </div>
//   );
// };

// export default Hero;
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
    title: "ADVENTURE",
    image: "package/category/adventure.jpg",
    icon: "🏃‍♂️",
  },
  {
    id: "beach",
    title: "BEACH",
    image: "package/category/beach.jpg",
    icon: "🏖️",
  },
  {
    id: "bicycle",
    title: "BICYCLE",
    image: "package/category/cycle.jpg",
    icon: "🚴‍♂️",
  },
  {
    id: "cultural",
    title: "CULTURAL",
    image: "package/category/cultural.jpg",
    icon: "🎭",
  },
  {
    id: "desert",
    title: "DESERT",
    image: "package/category/desert.jpg",
    icon: "🐪",
  },
  {
    id: "explorer",
    title: "EXPLORER",
    image: "package/category/explorer.jpg",
    icon: "🗺️",
  },
];

const CategoryCard = ({ title, image, icon, onClick }) => (
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
        {/* <span className="text-2xl sm:text-3xl mb-2">{icon}</span> */}
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

  const handleCategoryClick = (title) => {
    navigate(`/${title.toLowerCase()}`);
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8, type: "spring", damping: 20 }}
      className="absolute bottom-[10%] sm:bottom-[15%] lg:-bottom-24 left-0 right-0 z-30"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-6">
        <div className=" rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-5 ">
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
                  title={category.title}
                  image={category.image}
                  icon={category.icon}
                  onClick={() => handleCategoryClick(category.title)}
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
            className="text-base  sm:text-lg md:text-xl lg:text-2xl text-gray-200"
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