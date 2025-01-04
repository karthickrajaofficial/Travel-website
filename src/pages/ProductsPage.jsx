// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { packages } from '../data/packages';
// // import bgImage from '../assets/paris.jpg'; // Replace with the correct image path

// const ProductsPage = () => {
//   const { type } = useParams();
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Normalize the type URL
//   const normalizedUrlType = useMemo(() => {
//     return type ? type.toLowerCase().replace(/[-\s]+/g, ' ').trim() : '';
//   }, [type]);

//   // Compute filtered packages using useMemo
//   const filteredPackages = useMemo(() => {
//     if (!normalizedUrlType) return [];
//     let filtered = packages.filter(pkg => {
//       const normalizedPackageType = pkg.type.toLowerCase().replace(/[-\s]+/g, ' ').trim();
//       return normalizedPackageType === normalizedUrlType;
//     });

//     if (filtered.length === 0) {
//       filtered = packages.reduce((acc, mainPackage) => {
//         const subPlaceMatches = (mainPackage.subPlaces || []).filter(subPlace => 
//           subPlace.type?.toLowerCase().replace(/[-\s]+/g, ' ').trim() === normalizedUrlType
//         ).map(subPlace => ({
//           ...subPlace,
//           parentName: mainPackage.name,
//           parentPath: mainPackage.path,
//           categories: subPlace.categories || [],
//           price: subPlace.price || 'Contact for price',
//           description: subPlace.description || '',
//           path: subPlace.path || `${mainPackage.path}/${subPlace.name.toLowerCase().replace(/\s+/g, '-')}`
//         }));
//         return [...acc, ...subPlaceMatches];
//       }, []);
//     }
//     return filtered.length > 0 ? filtered : [{ 
//       name: 'No Package', 
//       price: 'Contact for price', 
//       description: 'No description available.', 
//       path: '/default-package',
//       highlights: ['N/A'],
   
//     }];
//   }, [normalizedUrlType]);

//   useEffect(() => {
//     setIsLoading(true);
//     if (!type) {
//       setError('No package type specified');
//       setIsLoading(false);
//       return;
//     }

//     const timeout = setTimeout(() => {
//       if (filteredPackages.length === 0) {
//         setError(`No packages found for type: ${type}`);
//       } else {
//         setError(null);
//       }
//       setIsLoading(false);
//     }, 300);
//     return () => clearTimeout(timeout);
//   }, [type, filteredPackages.length]);

//   const handlePackageClick = useCallback((path) => {
//     navigate(path);
//   }, [navigate]);

//   const formatDisplayText = useCallback((text) => {
//     if (!text) return '';
//     return text
//       .split('-')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading packages...</p>
//         </div>
//       </div>
//     );
//   }

//   const formattedType = formatDisplayText(type);

//   return (
//     <div className="py-12 px-4 md:px-8 lg:px-16">
//       {/* Hero Section */}
//       <div className="relative h-[40vh] rounded-xl overflow-hidden mb-12">
//         <img
//           src="/bgimg.jpg" // Use the imported background image
//           alt={formattedType}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <div className="text-center text-white">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
//               {formattedType}
//             </h1>
//             <p className="text-xl md:text-2xl">
//               Discover Amazing {formattedType} Packages
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Packages Grid */}
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8">
//           Available {formattedType} Packages
//         </h2>

//         {error ? (
//           <div className="min-h-[40vh] flex items-center justify-center">
//             <div className="text-center">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops!</h2>
//               <p className="text-gray-600 mb-4">{error}</p>
//               <button
//                 onClick={() => navigate('/')}
//                 className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
//               >
//                 Return Home
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredPackages.map((pkg, index) => (
//               <div
//                 key={`${pkg.path}-${index}`}
//                 className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
//                 onClick={() => handlePackageClick(pkg.path)}
//               >
//                 <div className="relative h-48">
//                   <img
//                     src={pkg.image || 'No package.jpg'} // Placeholder image for each package
//                     alt={pkg.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
//                   {pkg.parentName && (
//                     <p className="text-sm text-gray-500 mb-2">Part of {pkg.parentName} Tour</p>
//                   )}
                  
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="text-sm text-gray-500">Starting from</span>
//                     <span className="text-lg font-bold text-purple-600">{pkg.price}</span>
//                   </div>

//                   {/* Highlights or Categories */}
//                   <div className="space-y-2">
//                     {pkg.highlights ? (
//                       <>
//                         <h4 className="font-semibold text-gray-800">Highlights:</h4>
//                         <ul className="space-y-1">
//                           {pkg.highlights.map((highlight, idx) => (
//                             <li key={idx} className="text-sm text-gray-600 flex items-center">
//                               <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
//                               {highlight}
//                             </li>
//                           ))}
//                         </ul>
//                       </>
//                     ) : pkg.categories?.length > 0 && (
//                       <div className="flex flex-wrap gap-2">
//                         {pkg.categories.map((cat, idx) => (
//                           <span
//                             key={idx}
//                             className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full"
//                           >
//                             {cat.charAt(0).toUpperCase() + cat.slice(1)}
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;

// ==================stylish cards2 ==============
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { packages } from '../data/packages';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProductsPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const normalizedUrlType = useMemo(() => {
    return type ? type.toLowerCase().replace(/[-\s]+/g, ' ').trim() : '';
  }, [type]);

  const filteredPackages = useMemo(() => {
    if (!normalizedUrlType) return [];
    let filtered = packages.filter(pkg => {
      const normalizedPackageType = pkg.type.toLowerCase().replace(/[-\s]+/g, ' ').trim();
      return normalizedPackageType === normalizedUrlType;
    });

    if (filtered.length === 0) {
      filtered = packages.reduce((acc, mainPackage) => {
        const subPlaceMatches = (mainPackage.subPlaces || []).filter(subPlace => 
          subPlace.type?.toLowerCase().replace(/[-\s]+/g, ' ').trim() === normalizedUrlType
        ).map(subPlace => ({
          ...subPlace,
          parentName: mainPackage.name,
          parentPath: mainPackage.path,
          categories: subPlace.categories || [],
          price: subPlace.price || 'Contact for price',
          description: subPlace.description || '',
          path: subPlace.path || `${mainPackage.path}/${subPlace.name.toLowerCase().replace(/\s+/g, '-')}`
        }));
        return [...acc, ...subPlaceMatches];
      }, []);
    }
    return filtered.length > 0 ? filtered : [{ 
      name: 'No Package', 
      price: 'Contact for price', 
      description: 'No description available.', 
      path: '/default-package',
      highlights: ['N/A'],
    }];
  }, [normalizedUrlType]);

  useEffect(() => {
    setIsLoading(true);
    if (!type) {
      setError('No package type specified');
      setIsLoading(false);
      return;
    }

    const timeout = setTimeout(() => {
      if (filteredPackages.length === 0) {
        setError(`No packages found for type: ${type}`);
      } else {
        setError(null);
      }
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [type, filteredPackages.length]);

  const handlePackageClick = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  const formatDisplayText = useCallback((text) => {
    if (!text) return '';
    return text
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-blue-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading packages...</p>
        </div>
      </div>
    );
  }

  const formattedType = formatDisplayText(type);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-950">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] mb-12 sm:mb-16 lg:mb-24">
        <img
          src="/bgimg.jpg"
          alt={formattedType}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/90">
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="h-px w-8 sm:w-12 bg-yellow-400"></div>
                <span className="text-yellow-400 tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm">
                  EXPLORE
                </span>
                <div className="h-px w-8 sm:w-12 bg-yellow-400"></div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light text-white tracking-wider mb-4">
                {formattedType}
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl">
                Experience the finest curated {formattedType.toLowerCase()} packages, 
                crafted for the most discerning travelers.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        {error ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[40vh] flex items-center justify-center"
          >
            <div className="text-center">
              <h2 className="text-2xl font-light text-white mb-4">Package Not Found</h2>
              <p className="text-gray-400 mb-8">{error}</p>
              <button
                onClick={() => navigate('/')}
                className="bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors tracking-wider text-sm"
              >
                RETURN HOME
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={`${pkg.path}-${index}`}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => handlePackageClick(pkg.path)}
              >
                <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                  <img
                    src={pkg.image || '/placeholder.jpg'}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-6 z-20">
                    <span className="inline-block px-4 py-1 bg-yellow-500/90 text-white text-sm rounded-full">
                      {pkg.price}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-medium text-white tracking-wide mb-2 group-hover:text-yellow-400 transition-colors">
                    {pkg.name}
                  </h3>
                  {pkg.parentName && (
                    <p className="text-sm text-slate-400 mb-4">
                      Part of {pkg.parentName} Tour
                    </p>
                  )}

                  <div className="space-y-4">
                    {pkg.highlights ? (
                      <>
                        <h4 className="font-medium text-slate-300 tracking-wide">Experience Includes</h4>
                        <ul className="space-y-2">
                          {pkg.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-slate-400 flex items-start group/item">
                              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 mt-2 group-hover/item:scale-125 transition-transform"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : pkg.categories?.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {pkg.categories.map((cat, idx) => (
                          <span
                            key={idx}
                            className="text-xs tracking-wider text-yellow-300 bg-yellow-900/30 px-3 py-1 rounded-full"
                          >
                            {cat.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-slate-700/50">
                    <button className="w-full text-sm text-yellow-400 hover:text-yellow-300 tracking-wider transition-colors">
                      EXPLORE PACKAGE →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;