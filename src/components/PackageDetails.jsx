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
// ===================style 2===============
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import packages from '../data/packages';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PackageDetails = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();

  const selectedPackage = packages.find(pkg =>
    pkg.path === `/${packageId}` || pkg.name.toLowerCase() === packageId.toLowerCase()
  );

  if (!selectedPackage) {
    return (
      <div className="min-h-screen bg-blue-950 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light text-white mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8">The Page you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-yellow-400 text-blue-950 px-8 py-3 hover:bg-yellow-300 transition-colors tracking-wider text-sm"
          >
            RETURN HOME
          </button>
        </div>
      </div>
    );
  }

  const handleSubPlaceClick = (subPlacePath) => {
    navigate(subPlacePath);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-950">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] mb-12 sm:mb-16 lg:mb-24">
        <img
          src={`/package/${selectedPackage.image}`}
          alt={selectedPackage.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/50">
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 sm:w-12 bg-yellow-400"></div>
                <span className="text-yellow-400 tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm">
                  DESTINATION
                </span>
                <div className="h-px w-8 sm:w-12 bg-yellow-400"></div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light text-white tracking-wider mb-4">
                {selectedPackage.name}
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                {selectedPackage.title}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sub Places Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 sm:w-12 bg-yellow-400/50"></div>
            <h2 className="text-2xl sm:text-3xl font-light text-white tracking-wider">
              Popular Destinations
            </h2>
            <div className="h-px w-8 sm:w-12 bg-yellow-400/50"></div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {selectedPackage.subPlaces.map((subPlace, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => handleSubPlaceClick(subPlace.path)}
            >
              <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="relative h-48 sm:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                <img
                  src={`/${subPlace.image}`}
                  alt={subPlace.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-6 z-20">
                  <span className="inline-block px-4 py-1 bg-yellow-500/90 text-white text-sm">
                    {subPlace.price}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-light text-white tracking-wide mb-2 group-hover:text-yellow-400 transition-colors">
                  {subPlace.name}
                </h3>
                <p className="text-sm text-gray-400 mb-6">{subPlace.title}</p>

                <div className="space-y-4">
                  <h4 className="font-light text-white tracking-wide">Highlights</h4>
                  <ul className="space-y-2">
                    {subPlace.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start group/item">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 mt-2 group-hover/item:scale-125 transition-transform"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <span className="text-sm text-yellow-400 hover:text-yellow-300 tracking-wider transition-colors">
                    EXPLORE DESTINATION →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PackageDetails;