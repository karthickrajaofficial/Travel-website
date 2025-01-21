

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
// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import packages from '../data/packages';

// // Add CSS for hiding scrollbar
// const scrollbarHideStyles = `
//   .scrollbar-hide::-webkit-scrollbar {
//     display: none;
//   }
//   .scrollbar-hide {
//     -ms-overflow-style: none;
//     scrollbar-width: none;
//   }
// `;

// const PackageSection = () => {
//   const navigate = useNavigate();
//   const scrollContainerRef = useRef(null);

//   const scroll = (direction) => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const cardWidth = 300; // Width of a single card
//       const gap = 32; // Gap between cards (8 * 4px = 32px)
//       const scrollAmount = cardWidth + gap;
      
//       const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
//       container.scrollTo({
//         left: targetScroll,
//         behavior: 'smooth'
//       });
//     }
//   };

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
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-400  to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>

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
//         {/* <div className="flex justify-between items-center mt-3">
//           <div className="flex flex-col">
//             <span className="text-sm text-gray-500">Starting From</span>
//             <span className="text-lg font-extrabold text-purple-600">{pkg.price}</span>
//           </div>
//         </div> */}
//       </div>
//     </motion.div>
//   );

//   return (
//     <>
//       <style>{scrollbarHideStyles}</style>
//       <div className="relative bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 overflow-hidden py-12">
//         {/* Section Header */}
//         <div className="text-center mb-8">
//           <h2 className="text-4xl font-bold text-gray-800">
//             <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
//               Discover Your Next Destination
//             </span>
//           </h2>
//         </div>

//         {/* Manual Scroll Container with Hidden Scrollbar and Navigation Arrows */}
//         <div className="relative group px-12"> {/* Added padding for arrow space */}
//           {/* Left Arrow */}
//           <button 
//             onClick={() => scroll('left')}
//             className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white/50 to-transparent flex items-center justify-start z-20"
//           >
//             <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100">
//               <ChevronLeft className="w-5 h-5 text-gray-700" />
//             </div>
//           </button>

//           {/* Right Arrow */}
//           <button 
//             onClick={() => scroll('right')}
//             className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white/50 to-transparent flex items-center justify-end z-20"
//           >
//             <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100">
//               <ChevronRight className="w-5 h-5 text-gray-700" />
//             </div>
//           </button>

//           {/* Scroll Container */}
//           <div ref={scrollContainerRef} className="w-full overflow-x-auto scrollbar-hide">
//             <div className="flex gap-8 py-4">
//               {packages.map((pkg, index) => (
//                 <PackageCard key={index} pkg={pkg} index={index} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PackageSection;

// import React, { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const PackagesSection = () => {
//   const navigate = useNavigate();
//   const scrollContainerRef = useRef(null);

//   // Tour packages data with images and slugs
//   const tourPackages = [
//     {
//       name: "Group Tours",
//       description: "Travel together, create memories together",
//       image: "/hero/group.jpg",
//       slug: "group-tours"
//     },
//     {
//       name: "FIT Tours",
//       description: "Personalized travel experiences",
//       image: "/hero/fit.jpg",
//       slug: "fit-tours"
//     },
//     {
//       name: "MICE Tours",
//       description: "Business meets leisure",
//       image: "/hero/mice.jpg",
//       slug: "mice-tours"
//     },
//     {
//       name: "Honeymoon Tours",
//       description: "Begin your journey together",
//       image: "/hero/honeymoon.jpg",
//       slug: "honeymoon-tours"
//     },
//     {
//       name: "Luxury Tours",
//       description: "Experience ultimate comfort",
//       image: "/hero/lux.jpg",
//       slug: "luxury-tours"
//     },
//     {
//       name: "Senior Citizen Tours",
//       description: "Travel at your own pace",
//       image: "/hero/senior.jpg",
//       slug: "senior-citizen-tours"
//     },
//     {
//       name: "City Breaks",
//       description: "Short urban adventures",
//       image: "/hero/city.jpg",
//       slug: "city-breaks"
//     },
//     {
//       name: "Multi City Packages",
//       description: "Experience multiple destinations",
//       image: "/hero/multi.jpg",
//       slug: "multi-city-packages"
//     },
//     {
//       name: "Escorted Tours",
//       description: "Travel with expert guidance",
//       image: "/hero/escort.jpg",
//       slug: "escorted-tours"
//     },
//     {
//       name: "Rail Tours",
//       description: "Journey through scenic routes",
//       image: "/hero/rail.jpg",
//       slug: "rail-tours"
//     },
//     {
//       name: "Self Drive Holidays",
//       description: "Freedom to explore",
//       image: "/hero/self.jpg",
//       slug: "self-drive-holidays"
//     },
//     {
//       name: "Chauffeur Driven Tours",
//       description: "Travel in style and comfort",
//       image: "/hero/chauffeur.jpg",
//       slug: "chauffeur-driven-tours"
//     }
//   ];

//   const scroll = (direction) => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const scrollAmount = 332; // Card width + gap
//       const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
//       container.scrollTo({
//         left: targetScroll,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const handlePackageClick = (slug) => {
//     navigate(`/packages/${slug}`);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const PackageCard = ({ pkg }) => (
//     <div 
//       onClick={() => handlePackageClick(pkg.slug)}
//       className="min-w-[300px] h-[400px] bg-white rounded-xl shadow-lg overflow-hidden relative group cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
//     >
//       {/* Animated gradient border */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl p-0.5">
//         <div className="absolute inset-0 bg-white rounded-xl" />
//       </div>
      
//       {/* Content container */}
//       <div className="relative h-full">
//         {/* Image section */}
//         <div className="h-3/5 overflow-hidden">
//           <img
//             src={pkg.image}
//             alt={pkg.name}
//             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//           />
//           {/* Hover overlay */}
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
//             <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//               <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
//                 Explore Now →
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Text content */}
//         <div className="p-6">
//           <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
//             {pkg.name}
//           </h3>
//           <p className="text-gray-600 text-sm">{pkg.description}</p>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
//       {/* Section Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold mb-4">
//           <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Explore Our Tour Packages
//           </span>
//         </h2>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Discover our diverse range of travel experiences tailored to your preferences
//         </p>
//       </div>

//       {/* Package Cards Container */}
//       <div className="relative max-w-7xl mx-auto">
//         {/* Navigation Arrows */}
//         <button 
//           onClick={() => scroll('left')}
//           className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10 group/button"
//         >
//           <ChevronLeft className="w-6 h-6 text-gray-400 group-hover/button:text-blue-600 transition-colors duration-200" />
//         </button>

//         <button 
//           onClick={() => scroll('right')}
//           className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10 group/button"
//         >
//           <ChevronRight className="w-6 h-6 text-gray-400 group-hover/button:text-blue-600 transition-colors duration-200" />
//         </button>

//         {/* Scrollable Container */}
//         <div 
//           ref={scrollContainerRef}
//           className="overflow-x-auto hide-scrollbar"
//           style={{
//             scrollbarWidth: 'none',
//             msOverflowStyle: 'none',
//             WebkitOverflowScrolling: 'touch'
//           }}
//         >
//           <div className="flex gap-8 py-4 px-2">
//             {tourPackages.map((pkg, index) => (
//               <PackageCard key={index} pkg={pkg} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PackagesSection;

// ================
// import React, { useRef, useState } from "react";
// import {  ChevronLeft, 
//   ChevronRight, 
//   Compass, 
//   Navigation, 
//   Building2, 
//   Palmtree,
//   Hotel,
//   Train,
//   Car,
//   Plane,
//   Heart,
//   Building,
//   Shield,
//   CarFront } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Card3DDemo from "./Card3DDemo";

// const PackagesSection = () => {
//   const navigate = useNavigate();
//   const scrollContainerRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   // Define decorative patterns for fallback backgrounds
//   const patterns = {
//     pattern1: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//     pattern2: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//     pattern3: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//   };

//   const tourPackages = [
//     {
//       name: "Group Tours",
//       description: "Travel together, create memories together",
//       image: "/hero/group.jpg",
//       slug: "group-tours",
//       colors: "from-rose-100 to-pink-200",
//       icon: Compass,
//       pattern: patterns.pattern1
//     },
//     {
//       name: "FIT Tours",
//       description: "Personalized travel experiences",
//       image: "/hero/fit.jpg",
//       slug: "fit-tours",
//       colors: "from-sky-100 to-blue-200",
//       icon: Navigation,
//       pattern: patterns.pattern2
//     },
//     {
//       name: "MICE Tours",
//       description: "Business meets leisure",
//       image: "/hero/mice.jpg",
//       slug: "mice-tours",
//       colors: "from-amber-100 to-yellow-200",
//       icon: Building2,
//       pattern: patterns.pattern3
//     },
//     {
//       name: "Honeymoon Tours",
//       description: "Begin your journey together",
//       image: "/hero/honeymoon.jpg",
//       slug: "honeymoon-tours",
//       colors: "from-purple-100 to-violet-200",
//       icon: Palmtree,
//       pattern: patterns.pattern1
//     },
//     {
//       name: "Luxury Tours",
//       description: "Experience ultimate comfort",
//       image: "/hero/lux.jpg",
//       slug: "luxury-tours",
//       colors: "from-emerald-100 to-teal-200",
//       icon: Hotel,
//       pattern: patterns.pattern2
//     },
//     {
//       name: "Senior Citizen Tours",
//       description: "Travel at your own pace",
//       image: "/hero/senior.jpg",
//       slug: "senior-citizen-tours",
//       colors: "from-cyan-100 to-sky-200",
//       icon: Heart,
//       pattern: patterns.pattern2
//     },
//     {
//       name: "City Breaks",
//       description: "Short urban adventures",
//       image: "/hero/city.jpg",
//       slug: "city-breaks",
//       colors: "from-slate-100 to-gray-200",
//       icon: Building,
//       pattern: patterns.pattern1
//     },
//     {
//       name: "Multi City Packages",
//       description: "Experience multiple destinations",
//       image: "/hero/multi.jpg",
//       slug: "multi-city-packages",
//       colors: "from-violet-100 to-purple-200",
//       icon: Plane,
//       pattern: patterns.pattern2
//     },
//     {
//       name: "Escorted Tours",
//       description: "Travel with expert guidance",
//       image: "/hero/escort.jpg",
//       slug: "escorted-tours",
//       colors: "from-rose-100 to-red-200",
//       icon: Shield,
//       pattern: patterns.pattern3
//     },
//     {
//       name: "Rail Tours",
//       description: "Journey through scenic routes",
//       image: "/hero/rail.jpg",
//       slug: "rail-tours",
//       colors: "from-blue-100 to-indigo-200",
//       icon: Train,
//       pattern: patterns.pattern3
//     },
//     {
//       name: "Self Drive Holidays",
//       description: "Freedom to explore",
//       image: "/hero/self.jpg",
//       slug: "self-drive-holidays",
//       colors: "from-orange-100 to-amber-200",
//       icon: Car,
//       pattern: patterns.pattern1
//     },
//     {
//       name: "Chauffeur Driven Tours",
//       description: "Travel in style and comfort",
//       image: "/hero/chauffeur.jpg",
//       slug: "chauffeur-driven-tours",
//       colors: "from-zinc-100 to-neutral-200",
//       icon: CarFront,
//       pattern: patterns.pattern2
//     }
//   ];

//   // Mouse drag scroll handlers
//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
//     setScrollLeft(scrollContainerRef.current.scrollLeft);
//     scrollContainerRef.current.style.cursor = 'grabbing';
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     scrollContainerRef.current.style.cursor = 'grab';
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - scrollContainerRef.current.offsetLeft;
//     const walk = (x - startX);
//     scrollContainerRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleMouseLeave = () => {
//     setIsDragging(false);
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.style.cursor = 'grab';
//     }
//   };

//   // Button scroll handler
//   const scroll = (direction) => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const scrollAmount = 332;
//       const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
//       container.scrollTo({
//         left: targetScroll,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const handlePackageClick = (slug) => {
//     if (!isDragging) {  // Only navigate if not dragging
//       navigate(`/packages/${slug}`);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   const PackageCard = ({ pkg }) => {
//     const Icon = pkg.icon;
//     return (
//       <div 
//         onClick={() => handlePackageClick(pkg.slug)}
//         className="min-w-[300px] h-[400px] relative group cursor-grab active:cursor-grabbing"
//       >
//         <div className="absolute inset-0 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl overflow-hidden">
//           <div className="absolute inset-0">
//             {pkg.image ? (
//               <img
//                 src={pkg.image}
//                 alt={pkg.name}
//                 className="w-full h-full object-cover"
//                 draggable="false"
//               />
//             ) : (
//               <div className={`w-full h-full bg-gradient-to-br ${pkg.colors}`}
//                    style={{ backgroundImage: pkg.pattern }}>
//                 <div className="absolute inset-0 flex items-center justify-center opacity-10">
//                   <Icon className="w-40 h-40" />
//                 </div>
//               </div>
//             )}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
//           </div>

//           <div className="relative h-full p-6 flex flex-col justify-between">
//             <div className="space-y-2">
//               <div className="flex justify-between items-start">
//                 <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${pkg.colors} flex items-center justify-center`}>
//                   <Icon className="w-5 h-5 text-gray-800" />
//                 </div>
//                 <div className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm">
//                   <span className="text-sm text-gray-100">Explore</span>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div className="flex items-center gap-2">
//                 <div className={`h-0.5 w-12 rounded-full bg-gradient-to-r ${pkg.colors}`} />
//                 <div className={`h-0.5 w-2 rounded-full bg-gradient-to-r ${pkg.colors} opacity-50`} />
//               </div>

//               <div>
//                 <h3 className="text-xl font-semibold text-gray-100 mb-2">
//                   {pkg.name}
//                 </h3>
//                 <p className="text-sm text-gray-200">
//                   {pkg.description}
//                 </p>
//               </div>

//               <div className="group/btn flex items-center justify-between pt-4 border-t border-gray-100">
//                 <span className="text-sm font-medium text-gray-200">
//                   View Details
//                 </span>
//                 <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${pkg.colors} flex items-center justify-center transform transition-all duration-300 group-hover/btn:scale-110`}>
//                   <ChevronRight className="w-4 h-4 text-gray-700" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="relative bg-gradient-to-br from-gray-50 to-white py-20 px-4">
//       <div className="absolute inset-0 opacity-[0.015] pattern-dots pattern-gray-800 pattern-bg-transparent pattern-size-2" />

//       <div className="relative max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-light text-gray-800 mb-4">
//             Discover Your Perfect Journey
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Each package is thoughtfully curated to provide unique and memorable travel experiences
//           </p>
//         </div>

//         <div className="relative">
//           <button 
//             onClick={() => scroll('left')}
//             className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-400" />
//           </button>

//           <button 
//             onClick={() => scroll('right')}
//             className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
//           >
//             <ChevronRight className="w-6 h-6 text-gray-400" />
//           </button>

//           <div 
//             ref={scrollContainerRef}
//             className="overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing"
//             onMouseDown={handleMouseDown}
//             onMouseUp={handleMouseUp}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             style={{
//               scrollbarWidth: 'none',
//               msOverflowStyle: 'none',
//               WebkitOverflowScrolling: 'touch',
//               userSelect: 'none'
//             }}
//           >
//             <div className="flex gap-8 py-4 px-2">
//               {tourPackages.map((pkg, index) => (
//                 <PackageCard key={index} pkg={pkg} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <Card3DDemo />

//       <style>
//         {`
//           .hide-scrollbar::-webkit-scrollbar {
//             display: none;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default PackagesSection;

import React from 'react';
import { useNavigate } from "react-router-dom";
import ScrollableContainer from './ScrollableContainer';
import PackageCard from './PackageCard';
import SectionHeader from './SectionHeader';
import { tourPackages } from '../data/tourPackages';


const PackageSection = () => {
  const navigate = useNavigate();

  const handlePackageClick = (slug) => {
    navigate(`/packages/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white py-20 px-4">
      <div className="absolute inset-0 opacity-[0.015] pattern-dots pattern-gray-800 pattern-bg-transparent pattern-size-2" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader 
          title="Discover Your Perfect Journey"
          description="Each package is thoughtfully curated to provide unique and memorable travel experiences"
        />

        <ScrollableContainer>
          {tourPackages.map((pkg, index) => (
            <PackageCard 
              key={index} 
              pkg={pkg} 
              onClick={handlePackageClick}
            />
          ))}
        </ScrollableContainer>
        
      </div>

     
    </div>
  );
};

export default PackageSection;
// ================



// import React, { useRef } from "react";
// import {  ChevronLeft, 
//   ChevronRight, 
//   Compass, 
//   Navigation, 
//   Building2, 
//   Palmtree,
//   Hotel,
//   Train,
//   Car,
//   Plane,
//   Heart,
//   Building,
//   Shield,
//   CarFront } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const PackagesSection = () => {
//   const navigate = useNavigate();
//   const scrollContainerRef = useRef(null);

//   // Define decorative patterns for fallback backgrounds
//   const patterns = {
//     pattern1: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//     pattern2: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//     pattern3: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//   };

//   const tourPackages = [
//     {
//       name: "Group Tours",
//       description: "Travel together, create memories together",
//       image: "/hero/group.jpg",
//       slug: "group-tours",
//       colors: "from-rose-100 to-pink-200",
//       icon: Compass,
//       pattern: patterns.pattern1
//     },
//     {
//       name: "FIT Tours",
//       description: "Personalized travel experiences",
//       image: "/hero/fit.jpg",
//       slug: "fit-tours",
//       colors: "from-sky-100 to-blue-200",
//       icon: Navigation,
//       pattern: patterns.pattern2
//     },
//     {
//       name: "MICE Tours",
//       description: "Business meets leisure",
//       image: "/hero/mice.jpg",
//       slug: "mice-tours",
//       colors: "from-amber-100 to-yellow-200",
//       icon: Building2,
//       pattern: patterns.pattern3
//     },
//     {
//       name: "Honeymoon Tours",
//       description: "Begin your journey together",
//       image: "/hero/honeymoon.jpg",
//       slug: "honeymoon-tours",
//       colors: "from-purple-100 to-violet-200",
//       icon: Palmtree,
//       pattern: patterns.pattern1
//     },
//     {
//       name: "Luxury Tours",
//       description: "Experience ultimate comfort",
//       image: "/hero/lux.jpg",
//       slug: "luxury-tours",
//       colors: "from-emerald-100 to-teal-200",
//       icon: Hotel,
//       pattern: patterns.pattern2
//     },
//     {
//       name: "Senior Citizen Tours",
//       description: "Travel at your own pace",
//       image: "/hero/senior.jpg",
//       slug: "senior-citizen-tours",
//       colors: "from-cyan-100 to-sky-200",
//       icon: Heart,
//       pattern: patterns.pattern2
//     },
//     {
//       name: "City Breaks",
//       description: "Short urban adventures",
//       image: "/hero/city.jpg",
//       slug: "city-breaks",
//       colors: "from-slate-100 to-gray-200",
//       icon: Building,
//       pattern: patterns.pattern1
//     },
//     {
//       name: "Multi City Packages",
//       description: "Experience multiple destinations",
//       image: "/hero/multi.jpg",
//       slug: "multi-city-packages",
//       colors: "from-violet-100 to-purple-200",
//       icon: Plane,
//       pattern: patterns.pattern2
//     },
//     {
//       name: "Escorted Tours",
//       description: "Travel with expert guidance",
//       image: "/hero/escort.jpg",
//       slug: "escorted-tours",
//       colors: "from-rose-100 to-red-200",
//       icon: Shield,
//       pattern: patterns.pattern3
//     },
//     {
//       name: "Rail Tours",
//       description: "Journey through scenic routes",
//       image: "/hero/rail.jpg",
//       slug: "rail-tours",
//       colors: "from-blue-100 to-indigo-200",
//       icon: Train,
//       pattern: patterns.pattern3
//     },
//     {
//       name: "Self Drive Holidays",
//       description: "Freedom to explore",
//       image: "/hero/self.jpg",
//       slug: "self-drive-holidays",
//       colors: "from-orange-100 to-amber-200",
//       icon: Car,
//       pattern: patterns.pattern1
//     },
//     {
//       name: "Chauffeur Driven Tours",
//       description: "Travel in style and comfort",
//       image: "/hero/chauffeur.jpg",
//       slug: "chauffeur-driven-tours",
//       colors: "from-zinc-100 to-neutral-200",
//       icon: CarFront,
//       pattern: patterns.pattern2
//     }
//   ];

//   const scroll = (direction) => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const scrollAmount = 332;
//       const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
//       container.scrollTo({
//         left: targetScroll,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const handlePackageClick = (slug) => {
//     navigate(`/packages/${slug}`);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const PackageCard = ({ pkg }) => {
//     const Icon = pkg.icon;
//     return (
//       <div 
//         onClick={() => handlePackageClick(pkg.slug)}
//         className="min-w-[340px] h-[480px] relative group cursor-pointer perspective-1000"
//       >
//         {/* Main Card */}
//         <div className="relative w-full h-full transform-gpu transition-all duration-500 group-hover:-translate-y-2">
//           {/* Content Container */}
//           <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
//             {/* Background & Image */}
//             {pkg.image ? (
//               <>
//                 <img
//                   src={pkg.image}
//                   alt={pkg.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/30" />
//               </>
//             ) : (
//               <div className={`w-full h-full bg-gradient-to-br ${pkg.colors}`} />
//             )}
            
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
//             {/* Content Section - Overlaying the image */}
//             <div className="absolute bottom-0 left-0 right-0 p-8">
//               <h3 className="text-2xl font-bold mb-3 tracking-tight text-white">
//                 {pkg.name}
//               </h3>
//               <p className="text-white/90 text-sm line-clamp-2 mb-4">
//                 {pkg.description}
//               </p>
              
//               {/* Hover reveal button */}
//               <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
//                 <button className="px-4 py-2 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/20 transition-colors">
//                   Explore Package →
//                 </button>
//               </div>
//             </div>
//           </div>
  
//           {/* Card Border and Shadow */}
//           <div className="absolute -inset-[1px] bg-gradient-to-br from-white/30 via-white/10 to-black/30 rounded-[2rem] -z-10" />
//           <div className="absolute -inset-[1px] rounded-[2rem] shadow-xl shadow-black/10 -z-10" />
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="relative bg-gradient-to-br from-gray-50 to-white py-20 px-4">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-[0.015] pattern-dots pattern-gray-800 pattern-bg-transparent pattern-size-2" />

//       {/* Content */}
//       <div className="relative max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           {/* <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm mb-4">
//             Our Packages
//           </span> */}
//           <h2 className="text-4xl font-light text-gray-800 mb-4">
//             Discover Your Perfect Journey
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Each package is thoughtfully curated to provide unique and memorable travel experiences
//           </p>
//         </div>

//         {/* Navigation and Cards */}
//         <div className="relative">
//           {/* Navigation Arrows */}
//           <button 
//             onClick={() => scroll('left')}
//             className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-400" />
//           </button>

//           <button 
//             onClick={() => scroll('right')}
//             className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
//           >
//             <ChevronRight className="w-6 h-6 text-gray-400" />
//           </button>

//           {/* Cards Container */}
//           <div 
//             ref={scrollContainerRef}
//             className="overflow-x-auto hide-scrollbar"
//             style={{
//               scrollbarWidth: 'none',
//               msOverflowStyle: 'none',
//               WebkitOverflowScrolling: 'touch'
//             }}
//           >
//             <div className="flex gap-8 py-4 px-2">
//               {tourPackages.map((pkg, index) => (
//                 <PackageCard key={index} pkg={pkg} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PackagesSection;