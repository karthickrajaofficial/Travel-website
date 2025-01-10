// import React, { useMemo } from 'react'
// import { useParams } from 'react-router-dom'
// import Packages from '../data/packages'


// const PackageDetail = () => {
//   const { category, subPackage } = useParams()

//   const packageDetails = useMemo(() => {
//     // Find the main category
//     const mainCategory = Packages.find(pkg => 
//       pkg.path.slice(1) === category
//     )

//     // If category found, find the specific sub-package
//     if (mainCategory) {
//       const selectedSubPackage = mainCategory.subPlaces.find(sub => 
//         sub.path === `/${category}/${subPackage}`
//       )

//       return {
//         category: mainCategory,
//         subPackageDetails: selectedSubPackage
//       }
//     }

//     return null
//   }, [category, subPackage])

//   if (!packageDetails) {
//     return <div className="container mx-auto p-6">Package not found</div>
//   }

//   const { category: mainCategory, subPackageDetails } = packageDetails

//   return (
//     <div className="container mx-auto p-6">
//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Image Section */}
//         <div>
//           <img 
//             src={`/images/${subPackageDetails.image}`} 
//             alt={subPackageDetails.name} 
//             className="w-full h-96 object-cover rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Details Section */}
//         <div>
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">{subPackageDetails.name}</h1>
//           <h2 className="text-xl text-gray-600 mb-4">{subPackageDetails.title}</h2>
          
//           <div className="bg-gray-100 p-4 rounded-lg mb-4">
//             <p className="text-lg font-semibold">
//               <span className="text-gray-600">Price:</span> {subPackageDetails.price}
//             </p>
//             <p className="text-lg">
//               <span className="text-gray-600">Duration:</span> {subPackageDetails.description}
//             </p>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-xl font-semibold mb-2">Highlights</h3>
//             <ul className="list-disc list-inside space-y-2">
//               {subPackageDetails.highlights.map((highlight, index) => (
//                 <li key={index} className="text-gray-700">{highlight}</li>
//               ))}
//             </ul>
//           </div>

//           {/* <div className="mt-6">
//             <button 
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               Book Now
//             </button>
//           </div> */}
//         </div>
//       </div>

//       {/* Additional Category Context */}
//       <div className="mt-12 bg-gray-50 p-6 rounded-lg">
//         <h3 className="text-2xl font-bold mb-4">About {mainCategory.name}</h3>
//         <p className="text-gray-700">{mainCategory.title}</p>
//         <p className="text-gray-600 mt-2">{mainCategory.description}</p>
//       </div>
//     </div>
//   )
// }

// export default PackageDetail

// import React, { useMemo } from 'react';
// import { useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Packages from '../data/packages';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const PackageDetail = () => {
//   const { category, subPackage } = useParams();

//   const packageDetails = useMemo(() => {
//     const mainCategory = Packages.find(pkg => 
//       pkg.path.slice(1) === category
//     );

//     if (mainCategory) {
//       const selectedSubPackage = mainCategory.subPlaces.find(sub => 
//         sub.path === `/${category}/${subPackage}`
//       );

//       return {
//         category: mainCategory,
//         subPackageDetails: selectedSubPackage
//       };
//     }

//     return null;
//   }, [category, subPackage]);

//   if (!packageDetails) {
//     return (
//       <div className="min-h-screen bg-blue-950 flex items-center justify-center">
//         <div className="text-center text-white">
//           <h2 className="text-2xl font-light tracking-wider mb-4">Package Not Found</h2>
//           <p className="text-gray-400">The package you're looking for doesn't exist.</p>
//         </div>
//       </div>
//     );
//   }

//   const { category: mainCategory, subPackageDetails } = packageDetails;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
//     {/* Hero Section */}
//     <div className="relative h-[60vh] lg:h-[70vh]">
//       <div className="absolute inset-0">
//         <img 
//           src={`/images/${subPackageDetails.image}`} 
//           alt={subPackageDetails.name} 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-950/40 to-blue-950"></div>
//       </div>
      
//       <div className="absolute inset-0 flex items-center">
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
//         >
//           <div className="flex items-center gap-3 mb-6">
//             <div className="h-px w-12 bg-yellow-400"></div>
//             <span className="text-yellow-400 tracking-[0.3em] text-sm">
//               EXCLUSIVE PACKAGE
//             </span>
//           </div>
//           <h1 className="text-4xl lg:text-6xl font-light text-white tracking-wider mb-4 max-w-4xl">
//             {subPackageDetails.name}
//           </h1>
//           <p className="text-xl text-gray-300 font-light max-w-2xl">
//             {subPackageDetails.title}
//           </p>
//         </motion.div>
//       </div>
//     </div>

//     {/* Content Section */}
//     <motion.div 
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       className="relative z-10 -mt-32 pb-24"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           variants={itemVariants}
//           className="bg-gradient-to-br from-slate-900/95 to-blue-900/95 backdrop-blur-sm p-8 lg:p-12 shadow-xl border border-yellow-400/10"
//         >
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
//             {/* Details Column */}
//             <div className="space-y-8">
//               <div className="bg-slate-800/50 p-8 border border-yellow-400/20">
//                 <div className="flex justify-between items-center mb-6">
//                   <span className="text-gray-300 text-lg">Starting from</span>
//                   <span className="text-3xl text-yellow-400 font-light">
//                     {subPackageDetails.price}
//                   </span>
//                 </div>
//                 <p className="text-gray-300 font-light leading-relaxed">
//                   {subPackageDetails.description}
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 <h3 className="text-xl font-light text-white tracking-wider flex items-center gap-3">
//                   <span className="w-8 h-px bg-yellow-400"></span>
//                   Experience Highlights
//                 </h3>
//                 <ul className="grid gap-4">
//                   {subPackageDetails.highlights.map((highlight, index) => (
//                     <motion.li 
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="flex items-start group"
//                     >
//                       <span className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2 group-hover:scale-150 transition-transform"></span>
//                       <span className="text-gray-300 leading-relaxed">{highlight}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Image Gallery Column */}
//             <div className="space-y-6">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="aspect-square overflow-hidden">
//                   <img 
                    // src={`/images/${subPackageDetails.image}`}
//                     alt="Gallery 1"
//                     className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
//                   />
//                 </div>
//                 <div className="aspect-square overflow-hidden">
//                   <img 
//                     src={`/images/${subPackageDetails.image}`}
//                     alt="Gallery 2"
//                     className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Destination Overview */}
//         <motion.div 
//           variants={itemVariants}
//           className="mt-12 lg:mt-16 bg-gradient-to-br from-slate-900/90 to-blue-900/90 p-8 lg:p-12 backdrop-blur-sm border border-yellow-400/10"
//         >
//           <div className="flex items-center gap-3 mb-8">
//             <div className="h-px w-12 bg-yellow-400"></div>
//             <span className="text-yellow-400 tracking-[0.3em] text-sm">
//               DESTINATION OVERVIEW
//             </span>
//           </div>
//           <h3 className="text-2xl lg:text-3xl font-light text-white tracking-wider mb-6">
//             About {mainCategory.name}
//           </h3>
//           <div className="space-y-4">
//             <p className="text-gray-300 leading-relaxed">{mainCategory.title}</p>
//             <p className="text-gray-400 leading-relaxed">{mainCategory.description}</p>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   </div>
// );
// };

// export default PackageDetail;
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Packages from '../data/packages';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const PackageDetail = () => {
  const { category, subPackage } = useParams();

  const packageDetails = useMemo(() => {
    const mainCategory = Packages.find(pkg => pkg.path.slice(1) === category);

    if (mainCategory) {
      const selectedSubPackage = mainCategory.subPlaces.find(sub => 
        sub.path === `/${category}/${subPackage}`
      );

      return {
        category: mainCategory,
        subPackageDetails: selectedSubPackage
      };
    }
    return null;
  }, [category, subPackage]);

  if (!packageDetails) {
    return (
      <div className="min-h-screen bg-blue-950 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-slate-900/50 p-8 rounded-lg border border-yellow-400/20"
        >
          <h2 className="text-2xl font-light text-white tracking-wider mb-4">Package Not Found</h2>
          <p className="text-gray-400">The package you're looking for doesn't exist.</p>
        </motion.div>
      </div>
    );
  }

  const { category: mainCategory, subPackageDetails } = packageDetails;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
      {/* Hero Section */}
      <div className="relative h-[60vh] lg:h-[70vh]">
        <div className="absolute inset-0">
          <img 
            src={`/${subPackageDetails.image}`} 
            alt={subPackageDetails.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-950/40 to-blue-950"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-yellow-400"></div>
              <span className="text-yellow-400 tracking-[0.3em] text-sm">
                EXCLUSIVE PACKAGE
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-light text-white tracking-wider mb-4 max-w-4xl">
              {subPackageDetails.name}
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl">
              {subPackageDetails.title}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 -mt-32 pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-slate-900/95 to-blue-900/95 backdrop-blur-sm p-8 lg:p-12 shadow-xl border border-yellow-400/10"
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Details Column */}
              <div className="space-y-8">
                <div className="bg-slate-800/50 p-8 border border-yellow-400/20">
                  {/* <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-300 text-lg">Starting from</span>
                    <span className="text-3xl text-yellow-400 font-light">
                      {subPackageDetails.price}
                    </span>
                  </div> */}
                  <p className="text-gray-300 font-light leading-relaxed">
                    {subPackageDetails.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-light text-white tracking-wider flex items-center gap-3">
                    <span className="w-8 h-px bg-yellow-400"></span>
                    Experience Highlights
                  </h3>
                  <ul className="grid gap-4">
                    {subPackageDetails.highlights.map((highlight, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start group"
                      >
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2 group-hover:scale-150 transition-transform"></span>
                        <span className="text-gray-300 leading-relaxed">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image Gallery Column */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={`/${subPackageDetails.image}`}
                      alt="Gallery 1"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* <div className="aspect-square overflow-hidden">
                    <img 
                      src={`/${subPackageDetails.image}`}
                      alt="Gallery 2"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Destination Overview */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 lg:mt-16 bg-gradient-to-br from-slate-900/90 to-blue-900/90 p-8 lg:p-12 backdrop-blur-sm border border-yellow-400/10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-yellow-400"></div>
              <span className="text-yellow-400 tracking-[0.3em] text-sm">
                DESTINATION OVERVIEW
              </span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-light text-white tracking-wider mb-6">
              About {mainCategory.name}
            </h3>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">{mainCategory.title}</p>
              <p className="text-gray-400 leading-relaxed">{mainCategory.description}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PackageDetail;