// import React from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import packages from '../data/packages'

// const PackageDetails = () => {
//   const { packageId } = useParams()
//   const navigate = useNavigate()

//   // Find the selected package
//   const selectedPackage = packages.find(pkg => 
//     pkg.path === `/${packageId}` || pkg.name.toLowerCase() === packageId.toLowerCase()
//   )

//   if (!selectedPackage) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Not Found</h2>
//           <p className="text-gray-600">The package you're looking for doesn't exist.</p>
//         </div>
//       </div>
//     )
//   }

//   // Handle sub-place click
//   const handleSubPlaceClick = (subPlacePath) => {
//     navigate(subPlacePath)
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   }

//   return (
//     <div className="py-12 px-4 md:px-8 lg:px-16">
//       {/* Hero Section */}
//       <div className="relative h-[50vh] rounded-xl overflow-hidden mb-12">
//         <img
//           src={`/package/${selectedPackage.image}`}
//           alt={selectedPackage.name}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <div className="text-center text-white">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">{selectedPackage.name}</h1>
//             <p className="text-xl md:text-2xl">{selectedPackage.title}</p>
//           </div>
//         </div>
//       </div>

//       {/* Sub Places Grid */}
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Places in {selectedPackage.name}</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {selectedPackage.subPlaces.map((subPlace, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
//               onClick={() => handleSubPlaceClick(subPlace.path)}
//             >
//               <div className="relative h-48">
//                 <img
//                   src={`/${subPlace.image}`}
//                   alt={subPlace.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{subPlace.name}</h3>
//                 <p className="text-gray-600 mb-4">{subPlace.title}</p>

//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-sm text-gray-500">{subPlace.description}</span>
//                   <span className="text-lg font-bold text-purple-600">{subPlace.price}</span>
//                 </div>

//                 <div className="space-y-2">
//                   <h4 className="font-semibold text-gray-800">Highlights:</h4>
//                   <ul className="space-y-1">
//                     {subPlace.highlights.map((highlight, idx) => (
//                       <li key={idx} className="text-sm text-gray-600 flex items-center">
//                         <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
//                         {highlight}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PackageDetails
// // ===================style 2===============
// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import packages from '../data/packages';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const PackageDetails = () => {
//   const { packageId } = useParams();
//   const navigate = useNavigate();

//   const selectedPackage = packages.find(pkg =>
//     pkg.path === `/${packageId}` || pkg.name.toLowerCase() === packageId.toLowerCase()
//   );

//   if (!selectedPackage) {
//     return (
//       <div className="min-h-screen bg-blue-950 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-light text-white mb-4">Page Not Found</h2>
//           <p className="text-gray-400 mb-8">The Page you're looking for doesn't exist.</p>
//           <button
//             onClick={() => navigate('/')}
//             className="bg-yellow-400 text-blue-950 px-8 py-3 hover:bg-yellow-300 transition-colors tracking-wider text-sm"
//           >
//             RETURN HOME
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const handleSubPlaceClick = (subPlacePath) => {
//     navigate(subPlacePath);
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-950">
//       {/* Hero Section */}
//       <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] mb-12 sm:mb-16 lg:mb-24">
//         <img
//           src={`/package/${selectedPackage.image}`}
//           alt={selectedPackage.name}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/50">
//           <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="text-center"
//             >
//               <div className="flex items-center justify-center gap-3 mb-6">
//                 <div className="h-px w-8 sm:w-12 bg-yellow-400"></div>
//                 <span className="text-yellow-400 tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm">
//                   DESTINATION
//                 </span>
//                 <div className="h-px w-8 sm:w-12 bg-yellow-400"></div>
//               </div>
//               <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light text-white tracking-wider mb-4">
//                 {selectedPackage.name}
//               </h1>
//               <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
//                 {selectedPackage.title}
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Sub Places Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="mb-12"
//         >
//           <div className="flex items-center justify-center gap-3 mb-6">
//             <div className="h-px w-8 sm:w-12 bg-yellow-400/50"></div>
//             <h2 className="text-2xl sm:text-3xl font-light text-white tracking-wider">
//               Popular Destinations
//             </h2>
//             <div className="h-px w-8 sm:w-12 bg-yellow-400/50"></div>
//           </div>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {selectedPackage.subPlaces.map((subPlace, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="group relative bg-gradient-to-br from-slate-800 to-slate-900 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
//               onClick={() => handleSubPlaceClick(subPlace.path)}
//             >
//               <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

//               <div className="relative h-48 sm:h-56 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
//                 <img
//                   src={`/${subPlace.image}`}
//                   alt={subPlace.name}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute bottom-4 left-6 z-20">
//                   <span className="inline-block px-4 py-1 bg-yellow-500/90 text-white text-sm">
//                     {subPlace.price}
//                   </span>
//                 </div>
//               </div>

//               <div className="p-6 sm:p-8">
//                 <h3 className="text-xl font-light text-white tracking-wide mb-2 group-hover:text-yellow-400 transition-colors">
//                   {subPlace.name}
//                 </h3>
//                 <p className="text-sm text-gray-400 mb-6">{subPlace.title}</p>

//                 <div className="space-y-4">
//                   <h4 className="font-light text-white tracking-wide">Highlights</h4>
//                   <ul className="space-y-2">
//                     {subPlace.highlights.map((highlight, idx) => (
//                       <li key={idx} className="text-sm text-gray-400 flex items-start group/item">
//                         <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 mt-2 group-hover/item:scale-125 transition-transform"></span>
//                         {highlight}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="mt-6 pt-6 border-t border-slate-700/50">
//                   <span className="text-sm text-yellow-400 hover:text-yellow-300 tracking-wider transition-colors">
//                     EXPLORE DESTINATION →
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default PackageDetails;

// ==============style2===========
// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ChevronRight, MapPin, Calendar, Tag } from 'lucide-react';
// import packages from '../data/packages';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { 
//     opacity: 1, 
//     transition: { 
//       duration: 0.7,
//       staggerChildren: 0.2 
//     } 
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, x: 20 },
//   visible: { 
//     opacity: 1, 
//     x: 0, 
//     transition: { 
//       duration: 0.5,
//       ease: "easeOut"
//     } 
//   },
// };

// const PackageDetails = () => {
//   const { packageId } = useParams();
//   const navigate = useNavigate();

//   const selectedPackage = packages.find(pkg =>
//     pkg.path === `/${packageId}` || pkg.name.toLowerCase() === packageId.toLowerCase()
//   );

//   if (!selectedPackage) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-950 to-indigo-900 flex items-center justify-center">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center px-4"
//         >
//           <h2 className="text-3xl font-light text-white mb-4">Page Not Found</h2>
//           <p className="text-gray-300 mb-8 max-w-md mx-auto">The destination you're looking for seems to have wandered off the map.</p>
//           <button
//             onClick={() => navigate('/')}
//             className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-950 px-8 py-3 rounded-full 
//                      hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 
//                      transform hover:scale-105 font-medium tracking-wide shadow-lg"
//           >
//             Return to Homepage
//           </button>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-white">
//       {/* Hero Section */}
//       <div className="relative h-[70vh] lg:h-[80vh]">
//         <div className="absolute inset-0 overflow-hidden">
//           <img
//             src={`/package/${selectedPackage.image}`}
//             alt={selectedPackage.name}
//             className="w-full h-full object-cover transform scale-110 animate-slow-zoom"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"/>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
//         >
//           <div className="text-center lg:text-left max-w-3xl">
//             <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
//               <Tag className="w-5 h-5 text-yellow-400" />
//               <span className="text-yellow-400 tracking-widest text-sm uppercase">
//                 {selectedPackage.type}
//               </span>
//             </div>
            
//             <h1 className="text-4xl lg:text-6xl font-light text-white mb-6 tracking-wide">
//               {selectedPackage.name}
//             </h1>
            
//             <p className="text-lg text-gray-200 mb-8 leading-relaxed">
//               {selectedPackage.title}
//             </p>
            
//             <div className="flex items-center justify-center lg:justify-start gap-6 text-white/90">
//               <div className="flex items-center gap-2">
//                 <Calendar className="w-5 h-5 text-yellow-400" />
//                 <span>{selectedPackage.description}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <MapPin className="w-5 h-5 text-yellow-400" />
//                 <span>{selectedPackage.categories.join(', ')}</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Description Section */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20"
//       >
//         <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 backdrop-blur-lg">
//           <div className="grid lg:grid-cols-3 gap-12">
//             <div className="lg:col-span-2">
//               <h2 className="text-3xl font-light mb-6 text-gray-800">About The Experience</h2>
//               <p className="text-gray-600 leading-relaxed whitespace-pre-line mb-8">
//                 {selectedPackage.longDescription}
//               </p>
//             </div>
            
//             <div className="bg-gray-50 rounded-xl p-6">
//               <h3 className="text-xl font-medium mb-6 text-gray-800">Trip Highlights</h3>
//               <ul className="space-y-4">
//                 {selectedPackage.highlights.map((highlight, idx) => (
//                   <li key={idx} className="flex items-start gap-3 text-gray-600">
//                     <div className="mt-1">
//                       <div className="w-2 h-2 rounded-full bg-yellow-400"/>
//                     </div>
//                     {highlight}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Sub Places Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="mb-12"
//         >
//           <div className="text-center">
//             <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-4">
//               Popular Destinations
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Explore the most iconic locations in {selectedPackage.name}
//             </p>
//           </div>
//         </motion.div>

//         {/* Horizontally Scrollable Container */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="relative -mx-4 px-4"
//         >
//           <div className="overflow-x-auto pb-4 scrollbar-hide">
//             <div className="inline-flex gap-6 min-w-full px-4">
//               {selectedPackage.subPlaces.map((subPlace, index) => (
//                 <motion.div
//                   key={index}
//                   variants={itemVariants}
//                   className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 
//                            min-w-[300px] sm:min-w-[380px] overflow-hidden cursor-pointer"
//                   onClick={() => handleSubPlaceClick(subPlace.path)}
//                 >
//                   <div className="relative h-56 overflow-hidden">
//                     <img
//                       src={`/${subPlace.image}`}
//                       alt={subPlace.name}
//                       className="w-full h-full object-cover transition-transform duration-700 
//                                group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
//                     <div className="absolute bottom-4 left-4 right-4">
//                       <h3 className="text-xl text-white font-medium mb-2">{subPlace.name}</h3>
//                       <p className="text-white/80 text-sm">{subPlace.title}</p>
//                     </div>
//                   </div>

//                   <div className="p-6">
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {subPlace.categories.map((category, idx) => (
//                         <span 
//                           key={idx}
//                           className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
//                         >
//                           {category}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
//                       <span className="text-sm text-gray-400">{subPlace.type}</span>
//                       <div className="flex items-center gap-2 text-yellow-500 group-hover:text-yellow-600 transition-colors">
//                         <span className="text-sm font-medium">Explore</span>
//                         <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"/>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default PackageDetails;

// ==============style 3 ===========
// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Globe, Clock, ArrowRight, MapPin } from 'lucide-react';
// import packages from '../data/packages';

// const PackageDetails = () => {
//   const { packageId } = useParams();
//   const navigate = useNavigate();

//   const selectedPackage = packages.find(pkg =>
//     pkg.path === `/${packageId}` || pkg.name.toLowerCase() === packageId.toLowerCase()
//   );

//   if (!selectedPackage) {
//     return (
//       <div className="min-h-screen bg-stone-100 flex items-center justify-center">
//         <div className="text-center px-4">
//           <h2 className="text-3xl font-serif text-stone-800 mb-4">Destination Not Found</h2>
//           <p className="text-stone-600 mb-8">Let's guide you back to our featured destinations.</p>
//           <button
//             onClick={() => navigate('/')}
//             className="bg-stone-900 text-stone-200 px-8 py-3 hover:bg-stone-800 
//                      transition-colors duration-300"
//           >
//             Return Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-stone-100 min-h-screen">
//       {/* Hero Section */}
//       <div className="relative h-screen">
//         <div className="absolute inset-0">
//           <img
//             src={`/package/${selectedPackage.image}`}
//             alt={selectedPackage.name}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40" />
//         </div>

//         <div className="relative h-full flex items-center">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="max-w-7xl mx-auto px-4 w-full"
//           >
//             <div className="max-w-3xl">
//               <span className="inline-block text-stone-300 mb-4 tracking-widest text-sm">
//                 {selectedPackage.type}
//               </span>
//               <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
//                 {selectedPackage.name}
//               </h1>
//               <p className="text-xl text-stone-200 mb-8 leading-relaxed">
//                 {selectedPackage.title}
//               </p>
//               <div className="flex flex-wrap gap-6 text-stone-200">
//                 <div className="flex items-center gap-2">
//                   <Clock className="w-5 h-5" />
//                   <span>{selectedPackage.description}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Globe className="w-5 h-5" />
//                   <span>{selectedPackage.categories.join(' • ')}</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-100 to-transparent" />
//       </div>

//       {/* Description Section */}
//       <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="bg-white p-12 border border-stone-200"
//         >
//           <div className="grid lg:grid-cols-5 gap-12">
//             <div className="lg:col-span-3">
//               <h2 className="text-3xl font-serif text-stone-800 mb-8">The Experience</h2>
//               <p className="text-stone-600 leading-relaxed whitespace-pre-line">
//                 {selectedPackage.longDescription}
//               </p>
//             </div>
//             <div className="lg:col-span-2">
//               <div className="bg-stone-50 p-8 border border-stone-200">
//                 <h3 className="text-xl font-serif text-stone-800 mb-6">Journey Highlights</h3>
//                 <ul className="space-y-4">
//                   {selectedPackage.highlights.map((highlight, idx) => (
//                     <li key={idx} className="flex gap-4 items-start">
//                       <span className="text-stone-400 font-serif">0{idx + 1}</span>
//                       <span className="text-stone-600">{highlight}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Sub Places Section */}
//       <div className="max-w-7xl mx-auto px-4 py-24">
//         <div className="flex justify-between items-end mb-12">
//           <div>
//             <span className="text-stone-500 tracking-widest text-sm uppercase">Explore</span>
//             <h2 className="text-3xl font-serif text-stone-800 mt-2">Featured Destinations</h2>
//           </div>
//           <button className="text-stone-500 hover:text-stone-800 transition-colors">
//             View All Destinations
//           </button>
//         </div>

//         <div className="overflow-x-auto pb-4">
//           <div className="inline-flex gap-8">
//             {selectedPackage.subPlaces.map((subPlace, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="group relative bg-white border border-stone-200 min-w-[400px] cursor-pointer"
//                 onClick={() => navigate(subPlace.path)}
//               >
//                 <div className="relative h-64 overflow-hidden">
//                   <img
//                     src={`/${subPlace.image}`}
//                     alt={subPlace.name}
//                     className="w-full h-full object-cover transition-transform duration-700 
//                              group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
//                   <div className="absolute top-4 left-4">
//                     <div className="bg-white px-3 py-1">
//                       <span className="text-stone-800 text-sm font-medium">{subPlace.type}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-8">
//                   <h3 className="text-2xl font-serif text-stone-800 mb-3">{subPlace.name}</h3>
//                   <p className="text-stone-600 mb-6">{subPlace.title}</p>

//                   <div className="flex items-center justify-between pt-6 border-t border-stone-200">
//                     <div className="flex items-center gap-2 text-stone-500">
//                       <MapPin className="w-4 h-4" />
//                       <span className="text-sm">{subPlace.categories[0]}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-stone-800 group-hover:text-stone-600 transition-colors">
//                       <span className="text-sm font-medium">Discover</span>
//                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PackageDetails;

// =============4===========
// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Globe, Clock, ArrowRight, MapPin, Star } from 'lucide-react';
// import TopAttractions from './TopAttractions';
// import packages from '../data/packages';

// const PackageDetails = () => {
//   const { packageId } = useParams();
//   const navigate = useNavigate();

//   const selectedPackage = packages.find(pkg =>
//     pkg.path === `/${packageId}` || pkg.name.toLowerCase() === packageId.toLowerCase()
//   ) || null;

//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.8, ease: 'easeOut' }
//   };

//   // Not Found State
//   if (!selectedPackage) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
//         <div className="text-center px-8">
//           <h2 className="text-4xl font-serif text-blue-900 mb-6">Destination Not Found</h2>
//           <p className="text-blue-700 mb-8 text-lg">Allow us to guide you back to our curated collection.</p>
//           <button
//             onClick={() => navigate('/')}
//             className="bg-blue-900 text-white px-10 py-4 rounded-full hover:bg-blue-800 
//                      transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             Return to Homepage
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const {
//     image = '',
//     name = '',
//     type = '',
//     title = '',
//     description = '',
//     categories = [],
//     longDescription = '',
//     highlights = [],
//     topAttractions = null,
//     subPlaces = []
//   } = selectedPackage;

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Hero Section */}
//       <div className="relative h-screen">
//         <div className="absolute inset-0">
//           <img
//             src={`/package/${image}`}
//             alt={name}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
//         </div>

//         <motion.div 
//           {...fadeInUp}
//           className="relative h-full flex items-center"
//         >
//           <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
//             <div className="max-w-3xl">
//               <div className="flex items-center gap-2 mb-6">
//                 <Star className="w-5 h-5 text-yellow-400" />
//                 <span className="text-yellow-400 tracking-wider text-sm uppercase font-medium">
//                   {type}
//                 </span>
//               </div>
//               <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
//                 {name}
//               </h1>
//               <p className="text-2xl text-white/90 mb-10 leading-relaxed font-light">
//                 {title}
//               </p>
//               <div className="flex flex-wrap gap-8 text-white/80">
//                 <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
//                   <Clock className="w-5 h-5" />
//                   <span className="font-light">{description}</span>
//                 </div>
//                 <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
//                   <Globe className="w-5 h-5" />
//                   <span className="font-light">{categories.join(' • ')}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Description Section */}
//       <div className="max-w-7xl mx-auto px-6 md:px-8 -mt-32 relative z-10">
//         <motion.div
//           {...fadeInUp}
//           className="bg-white/80 backdrop-blur-lg p-12 rounded-xl shadow-2xl"
//         >
//           <div className="grid lg:grid-cols-5 gap-16">
//             <div className="lg:col-span-3">
//               <h2 className="text-4xl font-serif text-blue-900 mb-8">The Experience</h2>
//               <p className="text-blue-800/80 leading-relaxed text-lg whitespace-pre-line">
//                 {longDescription}
//               </p>
//             </div>
//             <div className="lg:col-span-2">
//               <div className="bg-blue-50/50 p-10 rounded-lg border border-blue-100">
//                 <h3 className="text-2xl font-serif text-blue-900 mb-8">Journey Highlights</h3>
//                 <ul className="space-y-6">
//                   {highlights.map((highlight, idx) => (
//                     <li key={idx} className="flex gap-6 items-start group">
//                       <span className="text-blue-400 font-serif text-lg">0{idx + 1}</span>
//                       <span className="text-blue-800/80 group-hover:text-blue-900 transition-colors">
//                         {highlight}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Top Attractions Section */}
//       {topAttractions && (
//         <div className="max-w-7xl mx-auto px-6 md:px-8 py-24">
//           <TopAttractions attractions={topAttractions} />
//         </div>
//       )}

//       {/* Featured Destinations */}
//       {subPlaces.length > 0 && (
//         <div className="max-w-7xl mx-auto px-6 md:px-8 py-32">
//           <div className="flex justify-between items-end mb-16">
//             <div>
//               <span className="text-blue-600 tracking-wider text-sm uppercase font-medium">
//                 Discover More
//               </span>
//               <h2 className="text-4xl font-serif text-blue-900 mt-3">
//                 Featured Destinations
//               </h2>
//             </div>
//             <button className="text-blue-600 hover:text-blue-800 transition-colors text-lg">
//               View All Destinations
//             </button>
//           </div>

//           <div className="overflow-x-auto pb-4">
//             <div className="inline-flex gap-8">
//               {subPlaces.map((subPlace, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.2 }}
//                   className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl 
//                             transition-all duration-500 min-w-[400px] cursor-pointer overflow-hidden"
//                   onClick={() => navigate(subPlace.path)}
//                 >
//                   <div className="relative h-72 overflow-hidden">
//                     <img
//                       src={`/${subPlace.image}`}
//                       alt={subPlace.name}
//                       className="w-full h-full object-cover transition-transform duration-700 
//                                group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
//                                   opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                     <div className="absolute top-6 left-6">
//                       <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
//                         <span className="text-blue-900 text-sm font-medium">{subPlace.type}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="p-10">
//                     <h3 className="text-2xl font-serif text-blue-900 mb-4">{subPlace.name}</h3>
//                     <p className="text-blue-800/70 mb-8">{subPlace.title}</p>

//                     <div className="flex items-center justify-between pt-6 border-t border-blue-100">
//                       <div className="flex items-center gap-3 text-blue-600">
//                         <MapPin className="w-5 h-5" />
//                         <span>{subPlace.categories?.[0] || ''}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-blue-900 group-hover:text-blue-600 
//                                     transition-colors">
//                         <span className="font-medium">Explore</span>
//                         <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PackageDetails;

// ==========5=======
// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Globe, Clock, ArrowRight, MapPin, Star, X } from 'lucide-react';
// import TopAttractions from './TopAttractions';
// import packages from '../data/packages';

// const PackageDetails = () => {
//   const { packageId } = useParams();
//   const navigate = useNavigate();
//   const [showDetails, setShowDetails] = useState(false);

//   const selectedPackage = packages.find(pkg =>
//     pkg.path === `/${packageId}` || pkg.name.toLowerCase() === packageId.toLowerCase()
//   ) || null;

//   if (!selectedPackage) {
//     return (
//       <div className="min-h-screen bg-black flex items-center justify-center">
//         <div className="text-center px-8">
//           <h2 className="text-4xl text-white mb-6">Destination Not Found</h2>
//           <button onClick={() => navigate('/')} 
//                   className="text-white/80 border border-white/20 px-8 py-3 hover:bg-white/10">
//             Return Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const {
//     image = '',
//     name = '',
//     type = '',
//     title = '',
//     description = '',
//     categories = [],
//     longDescription = '',
//     highlights = [],
//     topAttractions = null,
//     subPlaces = []
//   } = selectedPackage;

//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* Fullscreen Hero */}
//       <div className="relative h-screen">
//         <div className="absolute inset-0">
//           <img
//             src={`/package/${image}`}
//             alt={name}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40" />
//         </div>

//         <div className="relative h-full flex items-center justify-center text-center px-6">
//           <div className="max-w-4xl">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               <span className="inline-block text-white/80 mb-6 tracking-widest text-sm uppercase">
//                 {type}
//               </span>
//               <h1 className="text-6xl md:text-8xl mb-8">{name}</h1>
//               <p className="text-2xl text-white/90 mb-12 leading-relaxed">
//                 {title}
//               </p>
//               <button
//                 onClick={() => setShowDetails(true)}
//                 className="text-white border border-white/30 px-12 py-4 hover:bg-white hover:text-black
//                          transition-all duration-300"
//               >
//                 Explore Details
//               </button>
//             </motion.div>
//           </div>
//         </div>
//         {/* Top Attractions */}
//         {topAttractions && (
//           <div className="mb-24">
//             <TopAttractions attractions={topAttractions} />
//           </div>
//         )}

//         <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between text-white/60">
//           {/* <div className="flex items-center gap-3">
//             <Clock className="w-5 h-5" />
//             <span>{description}</span>
//           </div> */}
//           <div className="flex items-center gap-3">
//             <Globe className="w-5 h-5" />
//             <span>{categories.join(' • ')}</span>
//           </div>
//         </div>
//       </div>

//       {/* Slide-in Details Panel */}
//       <AnimatePresence>
//         {showDetails && (
//           <motion.div
//             initial={{ x: '100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '100%' }}
//             transition={{ type: 'tween', duration: 0.5 }}
//             className="fixed inset-0 bg-black/95 overflow-y-auto z-50"
//           >
//             <button
//               onClick={() => setShowDetails(false)}
//               className="fixed top-8 right-8 text-white/60 hover:text-white"
//             >
//               <X className="w-8 h-8" />
//             </button>

//             <div className="max-w-7xl mx-auto px-6 py-24">
//               {/* Experience Section */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
//                 <div>
//                   <h2 className="text-4xl mb-8">The Experience</h2>
//                   <p className="text-white/80 leading-relaxed whitespace-pre-line text-lg">
//                     {longDescription}
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-2xl mb-8">Journey Highlights</h3>
//                   <ul className="space-y-8">
//                     {highlights.map((highlight, idx) => (
//                       <li key={idx} className="flex gap-6 items-start group">
//                         <span className="text-white/40">{String(idx + 1).padStart(2, '0')}</span>
//                         <span className="text-white/80 group-hover:text-white transition-colors">
//                           {highlight}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>


//               {/* Featured Destinations Grid */}
//               {subPlaces.length > 0 && (
//                 <div>
//                   <h2 className="text-4xl mb-16">Featured Destinations</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {subPlaces.map((subPlace, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="group cursor-pointer"
//                         onClick={() => navigate(subPlace.path)}
//                       >
//                         <div className="relative aspect-[3/2] mb-6 overflow-hidden">
//                           <img
//                             src={`/${subPlace.image}`}
//                             alt={subPlace.name}
//                             className="w-full h-full object-cover transition-transform duration-700 
//                                      group-hover:scale-105"
//                           />
//                           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 
//                                         transition-colors duration-300" />
//                         </div>
//                         <span className="text-white/60 text-sm uppercase tracking-wider">
//                           {subPlace.type}
//                         </span>
//                         <h3 className="text-2xl mt-2 mb-3">{subPlace.name}</h3>
//                         <p className="text-white/80 mb-6">{subPlace.title}</p>
//                         <div className="flex items-center gap-2 text-white/60 group-hover:text-white 
//                                       transition-colors">
//                           <span>Discover</span>
//                           <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default PackageDetails;

// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowRight, Globe, MapPin } from 'lucide-react';
// import packages from '../data/packages';

// const PackageDetails = () => {
//   const { packageId } = useParams();
//   const navigate = useNavigate();

//   const selectedPackage = packages.find(pkg =>
//     pkg.path === `/${packageId}` || pkg.name.toLowerCase() === packageId.toLowerCase()
//   );

//   // Default package object to prevent undefined errors
//   const safePackage = selectedPackage || {
//     name: 'Destination Not Found',
//     image: '',
//     type: '',
//     title: '',
//     description: '',
//     categories: [],
//     longDescription: '',
//     highlights: [],
//     subPlaces: []
//   };

//   if (!selectedPackage) {
//     return (
//       <div className="min-h-screen bg-stone-100 flex items-center justify-center">
//         <div className="text-center px-4">
//           <h2 className="text-3xl font-serif text-stone-800 mb-4">Destination Not Found</h2>
//           <p className="text-stone-600 mb-8">Let's guide you back to our featured destinations.</p>
//           <button
//             onClick={() => navigate('/')}
//             className="bg-stone-900 text-stone-200 px-8 py-3 hover:bg-stone-800 
//                      transition-colors duration-300"
//           >
//             Return Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const handleSubPlaceClick = (subPlacePath) => {
//     navigate(subPlacePath);
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <div className="bg-white min-h-screen mt-20">
//       {/* Compact Hero Section */}
//       <div className="relative bg-blue-950 py-16">
//         <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
//           <div className="relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//             >
             
//               <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
//                 {safePackage.name}
//               </h1>
//               <p className="text-lg text-white mb-8 leading-relaxed">
//                 {safePackage.title}
//               </p>
//               <div className="flex flex-wrap gap-4 items-center">
//                 <div className="flex items-center gap-2 text-gray-100">
//                   <Globe className="w-5 h-5 text-gray-200" />
//                   <span className="text-sm">{safePackage.categories.join(' • ')}</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
          
//           <div className="relative">
//             <div className="rounded-xl overflow-hidden shadow-lg">
//               <img
//                 src={`/package/${safePackage.image}`}
//                 alt={safePackage.name}
//                 className="w-full h-[400px] object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Description Section */}
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid lg:grid-cols-5 gap-12">
//           <div className="lg:col-span-3">
//             <h2 className="text-3xl font-serif text-stone-800 mb-8">The Experience</h2>
//             <p className="text-stone-600 leading-relaxed whitespace-pre-line">
//               {safePackage.longDescription}
//             </p>
//           </div>
//           <div className="lg:col-span-2">
//             <div className="bg-stone-50 p-8 border border-stone-200">
//               <h3 className="text-xl font-serif text-stone-800 mb-6">Journey Highlights</h3>
//               <ul className="space-y-4">
//                 {safePackage.highlights.map((highlight, idx) => (
//                   <li key={idx} className="flex gap-4 items-start">
//                     <span className="text-stone-400 font-serif">0{idx + 1}</span>
//                     <span className="text-stone-600">{highlight}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Featured Destinations */}
//       {safePackage.subPlaces && safePackage.subPlaces.length > 0 && (
//         <div className="max-w-7xl mx-auto px-4 py-16">
//           <h2 className="text-3xl font-serif text-stone-800 mb-12">Featured Destinations</h2>
//           <div className="overflow-x-auto pb-4">
//             <div className="inline-flex gap-8">
//               {safePackage.subPlaces.map((subPlace, index) => (
//                 <div
//                   key={index}
//                   className="group relative bg-white border border-stone-200 min-w-[400px] cursor-pointer"
//                   onClick={() => handleSubPlaceClick(subPlace.path)}
//                 >
//                   <div className="relative h-64 overflow-hidden">
//                     <img
//                       src={`/${subPlace.image}`}
//                       alt={subPlace.name}
//                       className="w-full h-full object-cover transition-transform duration-700 
//                                group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
//                     <div className="absolute top-4 left-4">
//                       <div className="bg-white px-3 py-1">
//                         <span className="text-stone-800 text-sm font-medium">{subPlace.type}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="p-8">
//                     <h3 className="text-2xl font-serif text-stone-800 mb-3">{subPlace.name}</h3>
//                     <p className="text-stone-600 mb-6">{subPlace.title}</p>

//                     <div className="flex items-center justify-between pt-6 border-t border-stone-200">
//                       <div className="flex items-center gap-2 text-stone-500">
//                         <MapPin className="w-4 h-4" />
//                         <span className="text-sm">
//                           {subPlace.categories && subPlace.categories.length > 0 
//                             ? subPlace.categories[0] 
//                             : 'Destination'}
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-2 text-stone-800 group-hover:text-stone-600 transition-colors">
//                         <span className="text-sm font-medium">Discover</span>
//                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PackageDetails;
// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowRight, Globe, MapPin } from 'lucide-react';
// import packages from '../data/packages';
// import FeaturedDestinations from './FeaturedDestinations';
// import TopAttractions from './TopAttractions';
// const PackageDetails = () => {
//   const { packageId } = useParams();
//   const navigate = useNavigate();

//   const selectedPackage = packages.find(pkg =>
//     pkg.path === `/${packageId}` || pkg.name.toLowerCase() === packageId.toLowerCase()
//   );

//   // Default package object to prevent undefined errors
//   const safePackage = selectedPackage || {
//     name: 'Destination Not Found',
//     image: '',
//     type: '',
//     title: '',
//     description: '',
//     categories: [],
//     longDescription: '',
//     topAttractions: null,
//     highlights: [],
//     subPlaces: []
//   };

//   if (!selectedPackage) {
//     return (
//       <div className="min-h-screen bg-stone-100 flex items-center justify-center">
//         <div className="text-center px-4">
//           <h2 className="text-3xl font-serif text-stone-800 mb-4">Destination Not Found</h2>
//           <p className="text-stone-600 mb-8">Let's guide you back to our featured destinations.</p>
//           <button
//             onClick={() => navigate('/')}
//             className="bg-stone-900 text-stone-200 px-8 py-3 hover:bg-stone-800 
//                      transition-colors duration-300"
//           >
//             Return Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const handleSubPlaceClick = (subPlacePath) => {
//     navigate(subPlacePath);
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <div className="bg-white min-h-screen mt-20">
//       {/* Full Hero Section */}
//       <div className="relative h-[70vh]">
//         <div className="absolute inset-0">
//           <img
//             src={`/package/${safePackage.image}`}
//             alt={safePackage.name}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//         </div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-center"
//           >
//             <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
//               {safePackage.name}
//             </h1>
//             <p className="text-xl text-white/90 mb-8">{safePackage.title}</p>
//             <div className="flex justify-center gap-4">
//               <div className="flex items-center gap-2 text-white/80">
//                 <Globe className="w-5 h-5" />
//                 <span>{safePackage.categories.join(' • ')}</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Description Section */}
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid lg:grid-cols-5 gap-12">
//           <div className="lg:col-span-3">
//             <h2 className="text-3xl font-serif text-stone-800 mb-8">The Experience</h2>
//             <p className="text-stone-600 leading-relaxed whitespace-pre-line">
//               {safePackage.Experience}
//             </p>
//           </div>
//           <div className="lg:col-span-2">
//             <div className="bg-stone-50 p-8 border border-stone-200">
//               <h3 className="text-xl font-serif text-stone-800 mb-6">Journey Highlights</h3>
//               <ul className="space-y-4">
//                 {safePackage.highlights.map((highlight, idx) => (
//                   <li key={idx} className="flex gap-4 items-start">
//                     <span className="text-stone-400 font-serif">0{idx + 1}</span>
//                     <span className="text-stone-600">{highlight}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//  {/* Top Attractions */}
//  {topAttractions && (
//           <div className="mb-24">
//             <TopAttractions attractions={topAttractions} />
//           </div>
//         )}
//       <FeaturedDestinations subPlaces={safePackage.subPlaces} />
//     </div>
//   );
// };

// export default PackageDetails;
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import packages from '../data/packages';
import FeaturedDestinations from './FeaturedDestinations';
import TopAttractions from './TopAttractions';
import RollingGallery from './animations/RollingGallery';

const PackageDetails = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();

  const selectedPackage = packages.find(
    (pkg) =>
      pkg.path === `/${packageId}` || pkg.name.toLowerCase() === packageId.toLowerCase()
  );

  // Default package object to prevent undefined errors
  const safePackage = selectedPackage || {
    name: 'Destination Not Found',
    image: '',
    type: '',
    title: '',
    description: '',
    categories: [],
    longDescription: '',
    topAttractions: [],
    highlights: [],
    subPlaces: [],
  };

  if (!selectedPackage) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-3xl font-serif text-stone-800 mb-4">Destination Not Found</h2>
          <p className="text-stone-600 mb-8">Let's guide you back to our featured destinations.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-stone-900 text-stone-200 px-8 py-3 hover:bg-stone-800 transition-colors duration-300"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const handleSubPlaceClick = (subPlacePath) => {
    navigate(subPlacePath);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-white min-h-screen mt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[70vh]">
  <div className="absolute inset-0">
    <img
      src={`/package/${safePackage.image}`}
      alt={safePackage.name}
      className="w-full h-full object-cover"
    />
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent" />
  </div>
  <div className="absolute inset-0 flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
        {safePackage.name}
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8">
        {safePackage.title}
      </p>
      <div className="flex justify-center gap-4">
        <div className="flex items-center gap-2 text-white/80">
          <Globe className="w-5 h-5" />
          <span>{safePackage.categories.join(' • ')}</span>
        </div>
      </div>
    </motion.div>
  </div>
</div>


      {/* Description Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-serif text-stone-800 mb-8">The Experience</h2>
            <p className="text-stone-600 leading-relaxed whitespace-pre-line">
              {safePackage.experience || safePackage.description}
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-stone-50 p-8 border border-stone-200">
              <h3 className="text-xl font-serif text-stone-800 mb-6">Journey Highlights</h3>
              <ul className="space-y-4">
                {safePackage.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <span className="text-stone-400 font-serif">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-stone-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-5">
  <div className="grid gap-12">
    <div className="lg:col-span-3">
      <h2 className="text-3xl font-serif text-stone-800 mb-8">The Reasons</h2>
      <div className="text-stone-600 leading-relaxed">
        {safePackage.reasons.map((reason, index) => (
          <div key={index} className="mb-4">
            <strong className="text-lg">{reason.title}</strong>
            <p className="whitespace-pre-line">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>



      {/* Top Attractions */}
      {safePackage.topAttractions && safePackage.topAttractions.length > 0 && (
        <div >
          <TopAttractions attractions={safePackage.topAttractions} />
        </div>
      )}

      {/* Featured Destinations */}
      <FeaturedDestinations subPlaces={safePackage.subPlaces} />
      {/* <RollingGallery 
  attractions={safePackage.topAttractions}
  // cityName="Paris"
  autoplay={true}
  pauseOnHover={true}
/> */}

    </div>
  );
};

export default PackageDetails;
