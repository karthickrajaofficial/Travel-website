

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import packages from '../data/packages'; // Import the packages data

// const PackageSection = () => {
//   const [isPaused, setIsPaused] = useState(false);
//   const navigate = useNavigate();

//   // Double the array for infinite scroll
//   const loopedPackages = [...packages, ...packages];

//   const marqueeVariants = {
//     animate: {
//       x: isPaused ? 0 : "-100%",
//       transition: {
//         ease: "linear",
//         duration: 15,
//         repeat: Infinity,
//       },
//     },
//   };

//   const handlePause = () => setIsPaused(true);
//   const handleResume = () => setIsPaused(false);

//   const handlePackageClick = (path) => {
//     navigate(path);
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   const PackageCard = ({ pkg, index }) => (
//     <motion.div
//       key={index}
//       onClick={() => handlePackageClick(pkg.path)}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className="min-w-[300px] h-[450px] bg-white rounded-lg shadow-lg overflow-hidden relative group cursor-pointer transform hover:z-10"
//     >
//       {/* Gradient Glow Effect */}
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>

//       {/* Package Image */}
//       <div className="relative h-2/3">
//         <img
//           src={`package/${pkg.image}`}
//           alt={pkg.name}
//           className="w-full h-full object-cover rounded-t-lg"
//         />
//         {/* Hover Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
//           <h3 className="text-lg font-bold mb-2">{pkg.name}</h3>
//           <p className="text-sm mb-2">{pkg.description}</p>
//           <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
//             View Details
//           </span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-4">
//         <h5 className="text-xl font-bold text-gray-800 line-clamp-2 mb-2">
//           {pkg.title}
//         </h5>
//         <div className="flex justify-between items-center mt-3">
//           <div className="flex flex-col">
//             <span className="text-sm text-gray-500">Starting From</span>
//             <span className="text-lg font-extrabold text-purple-600">{pkg.price}</span>
//           </div>
//           {/* <div className="text-sm text-gray-600 font-medium px-3 py-1 bg-gray-100 rounded-full">
//             {pkg.description}
//           </div> */}
//         </div>
//       </div>
//     </motion.div>
//   );

//   return (
//     <div className="relative bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 overflow-hidden py-12">
//       {/* Section Header */}
//       <div className="text-center mb-8">
//         <h2 className="text-4xl font-bold text-gray-800">
//           <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
//             Discover Your Next Destination
//           </span>
//         </h2>
//       </div>

//       {/* Infinite Scroll Container */}
//       <div 
//         className="w-full overflow-hidden" 
//         onMouseEnter={handlePause} 
//         onMouseLeave={handleResume}
//       >
//         <motion.div
//           className="flex gap-8"
//           variants={marqueeVariants}
//           animate="animate"
//         >
//           {loopedPackages.map((pkg, index) => (
//             <PackageCard key={index} pkg={pkg} index={index} />
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default PackageSection;
// ===========manual scroll 
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import packages from '../data/packages';

// Add CSS for hiding scrollbar
const scrollbarHideStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const PackageSection = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = 300; // Width of a single card
      const gap = 32; // Gap between cards (8 * 4px = 32px)
      const scrollAmount = cardWidth + gap;
      
      const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const handlePackageClick = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const PackageCard = ({ pkg, index }) => (
    <motion.div
      key={index}
      onClick={() => handlePackageClick(pkg.path)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="min-w-[300px] h-[450px] bg-white rounded-lg shadow-lg overflow-hidden relative group cursor-pointer transform hover:z-10"
    >
      {/* Gradient Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400  to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>

      {/* Package Image */}
      <div className="relative h-2/3">
        <img
          src={`package/${pkg.image}`}
          alt={pkg.name}
          className="w-full h-full object-cover rounded-t-lg"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <h3 className="text-lg font-bold mb-2">{pkg.name}</h3>
          <p className="text-sm mb-2">{pkg.description}</p>
          <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h5 className="text-xl font-bold text-gray-800 line-clamp-2 mb-2">
          {pkg.title}
        </h5>
        <div className="flex justify-between items-center mt-3">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Starting From</span>
            <span className="text-lg font-extrabold text-purple-600">{pkg.price}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <style>{scrollbarHideStyles}</style>
      <div className="relative bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 overflow-hidden py-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Discover Your Next Destination
            </span>
          </h2>
        </div>

        {/* Manual Scroll Container with Hidden Scrollbar and Navigation Arrows */}
        <div className="relative group px-12"> {/* Added padding for arrow space */}
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white/50 to-transparent flex items-center justify-start z-20"
          >
            <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100">
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </div>
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white/50 to-transparent flex items-center justify-end z-20"
          >
            <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100">
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </div>
          </button>

          {/* Scroll Container */}
          <div ref={scrollContainerRef} className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 py-4">
              {packages.map((pkg, index) => (
                <PackageCard key={index} pkg={pkg} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageSection;