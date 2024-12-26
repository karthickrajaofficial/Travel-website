// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const PackageSection = () => {
//   const navigate = useNavigate(); // React Router's navigate function

//   const packages = [
//     { name: 'Greece', image: '01.jpg', description: '4 Day’s 3 Night', title: 'Enjoy the Beauty place in Greece City', price: '$1200' },
//     { name: 'Finland', image: '02.jpg', description: '4 Day’s 3 Night', title: 'Enjoy the Beauty place in Finland Beach', price: '$1200' },
//     { name: 'Bhutan', image: '03.jpg', description: '4 Day’s 3 Night', title: 'Enjoy the Beauty place in Bhutan City', price: '$1200' },
//     { name: 'Paris', image: '04.jpg', description: '4 Day’s 3 Night', title: 'Enjoy the Beauty place in Paris City', price: '$1200' },
//   ];

//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.3 },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
//   };

//   return (
//     <div className="relative pt-20 pb-20 bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 overflow-hidden">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="text-xl text-gray-600 block mb-2">✨ Popular Packages ✨</span>
//           <h2 className="text-4xl font-extrabold text-gray-800">
//             <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
//               Discover Your Next Destination
//             </span>
//           </h2>
//         </motion.div>

//         {/* Package Cards */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {packages.map((pkg, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-lg shadow-lg overflow-hidden relative transform transition-transform hover:scale-105 group hover:shadow-2xl hover:z-10"
//               variants={cardVariants}
//             >
//               {/* Glow Effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>

//               {/* Image Section */}
//               <div className="relative">
//                 <Link to={`/tour/${pkg.name.toLowerCase()}`}>
//                   <motion.img
//                     src={`package/${pkg.image}`}
//                     alt={pkg.name}
//                     className="w-full h-64 object-cover rounded-t-lg"
//                     whileHover={{ scale: 1.05 }}
//                   />
//                 </Link>
//                 <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <h3 className="text-lg font-bold">{pkg.name}</h3>
//                   <p className="text-sm">{pkg.description}</p>
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="p-4">
//                 <Link to={`/tour/${pkg.name.toLowerCase()}`}>
//                   <h5 className="text-xl font-bold text-gray-700 hover:text-purple-500">{pkg.title}</h5>
//                 </Link>
//                 <div className="flex justify-between items-center mt-3">
//                   <div className="flex items-center">
//                     <span className="text-sm text-gray-500">Starting From //</span>
//                   </div>
//                   <span className="text-lg font-extrabold text-purple-600">{pkg.price}</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Call to Action Button */}
//         <motion.div
//           className="flex justify-center mt-12"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.button
//             className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-transform"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             // onClick={() => navigate('/tours')} // Navigate to "/tours"
//           >
//             Explore All Packages
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default PackageSection;
// old code 

import React, { useState } from "react";
import { motion } from "framer-motion";

const PackageSection = () => {
  const [isPaused, setIsPaused] = useState(false); // Control animation pause

  const packages = [
    { name: "Greece", image: "01.jpg", description: "4 Day’s 3 Night", title: "Enjoy the Beauty place in Greece City", price: "$1200" },
    { name: "Finland", image: "02.jpg", description: "4 Day’s 3 Night", title: "Enjoy the Beauty place in Finland Beach", price: "$1200" },
    { name: "Bhutan", image: "03.jpg", description: "4 Day’s 3 Night", title: "Enjoy the Beauty place in Bhutan City", price: "$1200" },
    { name: "Paris", image: "04.jpg", description: "4 Day’s 3 Night", title: "Enjoy the Beauty place in Paris City", price: "$1200" },
    { name: "Greeceee", image: "01.jpg", description: "4 Day’s 3 Night", title: "Enjoy the Beauty place in Greece City", price: "$1200" },
    { name: "Maldiveees", image: "02.jpg", description: "4 Day’s 3 Night", title: "Enjoy the Beauty place in Finland Beach", price: "$1200" },
    { name: "Bhutaneee", image: "03.jpg", description: "4 Day’s 3 Night", title: "Enjoy the Beauty place in Bhutan City", price: "$1200" },
    { name: "Pariseee", image: "04.jpg", description: "4 Day’s 3 Night", title: "Enjoy the Beauty place in Paris City", price: "$1200" },
  ];

  // Combine packages twice to make the scroll seamless
  const loopedPackages = [...packages, ...packages];

  // Animation Variants
  const marqueeVariants = {
    animate: {
      x: isPaused ? 0 : "-100%", // Scroll to the left
      transition: {
        ease: "linear",
        duration: 15, // Speed of the scroll
        repeat: Infinity, // Infinite loop
      },
    },
  };

  // Pause/Resume scroll
  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  return (
    <div className="relative bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 overflow-hidden py-12">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Discover Your Next Destination
          </span>
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="w-full overflow-hidden" onMouseEnter={handlePause} onMouseLeave={handleResume}>
        <motion.div
          className="flex gap-8"
          variants={marqueeVariants}
          animate="animate"
        >
          {loopedPackages.map((pkg, index) => (
            <div
              key={index}
              className="min-w-[300px] h-[450px] bg-white rounded-lg shadow-lg overflow-hidden relative group hover:scale-105 transition-transform transform hover:z-10"
            >
              {/* Gradient Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>

              {/* Package Image */}
              <div className="relative h-2/3">
                <img
                  src={`package/${pkg.image}`}
                  alt={pkg.name}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-lg font-bold">{pkg.name}</h3>
                  <p className="text-sm">{pkg.description}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h5 className="text-xl font-bold text-gray-800">{pkg.title}</h5>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-sm text-gray-500">Starting From //</span>
                  <span className="text-lg font-extrabold text-purple-600">{pkg.price}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PackageSection;
