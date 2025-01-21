// // Tours.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import allPackages from '../data/packages';

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { 
//     opacity: 1, 
//     transition: { 
//       duration: 0.5, 
//       staggerChildren: 0.2 
//     } 
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// };

// const headingVariants = {
//   hidden: { 
//     opacity: 0,
//     y: -20,
//     scale: 0.95
//   },
//   visible: { 
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut"
//     }
//   }
// };

// const lineVariants = {
//   hidden: { scaleX: 0 },
//   visible: { 
//     scaleX: 1,
//     transition: {
//       duration: 0.8,
//       ease: "easeInOut"
//     }
//   }
// };

// // Error Boundary Component
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error('Error caught by boundary:', error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 flex items-center justify-center">
//           <div className="text-center text-gray-600">
//             <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
//             <p>Please try refreshing the page</p>
//           </div>
//         </div>
//       );
//     }

//     return this.props.children;
//   }
// }

// // Animated Heading Component
// const AnimatedHeading = ({ text }) => (
//   <div className="flex items-center justify-center gap-3 mb-16">
//     <motion.div
//       className="h-px w-12 bg-blue-300 origin-left"
//       variants={lineVariants}
//     />
//     <motion.h2
//       variants={headingVariants}
//       className="text-3xl font-light text-blue-900 tracking-wider relative"
//     >
//       <span className="relative">
//         {text}
//         <motion.div
//           className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-300/30"
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         />
//       </span>
//     </motion.h2>
//     <motion.div
//       className="h-px w-12 bg-blue-300 origin-right"
//       variants={lineVariants}
//     />
//   </div>
// );

// // Top Section Component
// const TopSection = () => (
//   <div className="relative overflow-hidden mt-20 bg-gradient-to-b from-blue-100 to-blue-50 py-24">
//     <motion.div 
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
//     >
//       <div className="text-center max-w-3xl mx-auto">
//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           className="text-5xl font-light tracking-tight text-blue-900 mb-6"
//         >
//           Discover Our <span className="text-blue-600 font-normal">Tour Packages</span>
//         </motion.h1>
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//           className="space-y-4"
//         >
//           <p className="text-lg text-gray-600 leading-relaxed">
//             Embark on extraordinary journeys to the world's most captivating destinations. Our carefully curated tour packages offer unique experiences, combining comfort, adventure, and unforgettable moments.
//           </p>
//           <p className="text-gray-500">
//             From serene beaches to majestic mountains, historic cities to hidden gems, find your perfect adventure with our diverse range of tour options.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="mt-8"
//         >
//           <div className="flex gap-4 items-center justify-center text-sm">
//             <div className="flex items-center text-blue-600">
//               <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//               </svg>
//               Rated 4.9/5
//             </div>
//             <span className="h-4 w-px bg-gray-300"></span>
//             <div className="flex items-center text-blue-600">
//               <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//               </svg>
//               100% Satisfaction
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
    
//     {/* Decorative background elements */}
//     <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//     <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//     <div className="absolute -bottom-8 left-20 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//   </div>
// );

// // Package Card Component
// const PackageCard = ({ item, onClick }) => {
//   if (!item || !item.name || !item.image || !item.path) {
//     return null;
//   }

//   return (
//     <motion.div
//       variants={itemVariants}
//       className="group relative bg-gradient-to-br from-white to-blue-50 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden mt-20"
//       onClick={onClick}
//     >
//       <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      
//       <div className="relative h-56 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10"></div>
//         <img
//           src={`/package/${item.image}`}
//           alt={item.name}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//         />
//       </div>

//       <div className="p-8">
//         <motion.h3 
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-xl font-medium text-blue-900 tracking-wide mb-2 group-hover:text-blue-600 transition-colors"
//         >
//           {item.name}
//         </motion.h3>
      
//         <div className="mt-6 pt-6 border-t border-gray-200">
//           <motion.span 
//             className="text-sm text-blue-600 hover:text-blue-800 tracking-wider transition-colors font-medium inline-block"
//             whileHover={{ x: 5 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             EXPLORE DESTINATION →
//           </motion.span>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // Main Tour Category Component
// const TourCategory = () => {
//   const navigate = useNavigate();

//   // Validate allPackages data
//   if (!Array.isArray(allPackages) || allPackages.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 flex items-center justify-center">
//         <div className="text-center text-gray-600">
//           No tour packages available at the moment.
//         </div>
//       </div>
//     );
//   }

//   const handleCategoryClick = (path) => {
//     if (path) {
//       navigate(path);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100">
//       <TopSection />
//       <div className="py-16 px-4 sm:px-6 lg:px-8">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="max-w-7xl mx-auto space-y-20"
//         >
//           {/* Featured Packages Section */}
//           <div>
//             <AnimatedHeading text="Featured Packages" />
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {allPackages.map((category, index) => (
//                 <PackageCard 
//                   key={category.id || `featured-${index}`}
//                   item={category}
//                   onClick={() => handleCategoryClick(category.path)}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Destination Sections */}
//           {allPackages.map((category, categoryIndex) => {
//             // Skip rendering if subPlaces is undefined or empty
//             if (!category.subPlaces || !Array.isArray(category.subPlaces) || category.subPlaces.length === 0) {
//               return null;
//             }

//             return (
//               <div key={category.id || `category-${categoryIndex}`}>
//                 <AnimatedHeading text={`${category.name} Destinations`} />
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {category.subPlaces.map((subPlace, subIndex) => (
//                     <PackageCard 
//                       key={subPlace.id || `${categoryIndex}-${subIndex}`}
//                       item={subPlace}
//                       onClick={() => handleCategoryClick(subPlace.path)}
//                     />
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// // Root Tours Component
// const Tours = () => {
//   return (
//     <ErrorBoundary>
//       <div className="bg-gradient-to-b from-blue-50 to-purple-100">
//         <TourCategory />
//       </div>
//     </ErrorBoundary>
//   );
// };

// // Add these animation classes to your global CSS or Tailwind config
// const styles = `
// @keyframes blob {
//   0% {
//     transform: translate(0px, 0px) scale(1);
//   }
//   33% {
//     transform: translate(30px, -50px) scale(1.1);
//   }
//   66% {
//     transform: translate(-20px, 20px) scale(0.9);
//   }
//   100% {
//     transform: translate(0px, 0px) scale(1);
//   }
// }

// .animate-blob {
//   animation: blob 7s infinite;
// }

// .animation-delay-2000 {
//   animation-delay: 2s;
// }

// .animation-delay-4000 {
//   animation-delay: 4s;
// }
// `;

// export default Tours;
// Tours.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// // import ErrorBoundary from './ErrorBoundary';
// // import TopSection from './TopSection';
// // import PackageCard from './PackageCard';
// // import AnimatedHeading from './AnimatedHeading';
// // import { containerVariants } from '../styles/animations';
// import allPackages from '../data/packages';
// import ErrorBoundary from '../components/Tours/ErrorBoundary';
// import TopSection from '../components/Tours/TopSection';
// import PackageCard from '../components/Tours/PackageCard';

// Tours.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ErrorBoundary from '../components/Tours/ErrorBoundary';
import TopSection from '../components/Tours/TopSection';
import PackageCard from '../components/Tours/PackageCard';
import AnimatedHeading from '../components/Tours/AnimatedHeading';
import allPackages from '../data/packages';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.5, staggerChildren: 0.2 } 
  }
};

// Styles for animations (consider moving to a CSS file)
const styles = `
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
`;

const TourCategory = () => {
  const navigate = useNavigate();

  if (!Array.isArray(allPackages) || !allPackages.length) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 flex items-center justify-center">
        <div className="text-center text-gray-600">No tour packages available.</div>
      </div>
    );
  }

  const handleCategoryClick = (path) => {
    if (path) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100">
      <TopSection />
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto space-y-20"
        >
          {/* Featured Packages Section */}
          <div>
            <AnimatedHeading text="Featured Packages" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPackages.map((category, index) => (
                <PackageCard 
                  key={category.id || `featured-${index}`}
                  item={category}
                  onClick={() => handleCategoryClick(category.path)}
                />
              ))}
            </div>
          </div>

          {/* Destination Sections */}
          {allPackages.map((category, categoryIndex) => {
            if (!category.subPlaces?.length) return null;

            return (
              <div key={category.id || `category-${categoryIndex}`}>
                <AnimatedHeading text={`${category.name} Destinations`} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.subPlaces.map((subPlace, subIndex) => (
                    <PackageCard 
                      key={subPlace.id || `${categoryIndex}-${subIndex}`}
                      item={subPlace}
                      onClick={() => handleCategoryClick(subPlace.path)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

const Tours = () => (
  <ErrorBoundary>
    <div className="bg-gradient-to-b from-blue-50 to-purple-100">
      <TourCategory />
    </div>
  </ErrorBoundary>
);

export default Tours;