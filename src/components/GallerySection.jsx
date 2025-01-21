// import React from "react";
// import { motion } from "framer-motion";

// const GallerySection = () => {
//   const galleryItems = [
//     {
//       image: "/gallery/01.jpg",
//       authorImage: "/gallery/author/01.jpg",
//       title: "Northern Lights in Finland",
//       author: "Sahjahan Sagor",
//       category: "Nature",
//     },
//     {
//       image: "/gallery/05.jpg",
//       authorImage: "/gallery/author/01.jpg",
//       title: "Helsinki Harbor",
//       author: "Sahjahan Sagor",
//       category: "City",
//     },
//     {
//       image: "/gallery/06.jpg",
//       authorImage: "/gallery/author/01.jpg",
//       title: "Finnish Lakeside",
//       author: "Sahjahan Sagor",
//       category: "Landscape",
//     },
//     {
//       image: "/gallery/01.jpg",
//       authorImage: "/gallery/author/01.jpg",
//       title: "Lapland Winter",
//       author: "Sahjahan Sagor",
//       category: "Adventure",
//     },
//     {
//       image: "/gallery/05.jpg",
//       authorImage: "/gallery/author/01.jpg",
//       title: "Traditional Finnish Sauna",
//       author: "Sahjahan Sagor",
//       category: "Culture",
//     },
//     {
//       image: "/gallery/06.jpg",
//       authorImage: "/gallery/author/01.jpg",
//       title: "Finnish Forest",
//       author: "Sahjahan Sagor",
//       category: "Nature",
//     },
//   ];

//   // Duplicate items for infinite scrolling
//   const duplicatedItems = [...galleryItems, ...galleryItems];

//   return (
//     <div className="bg-blue-950 py-24 relative overflow-hidden">
//       {/* Content Container */}
//       <div className="max-w-7xl mx-auto px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-sm text-yellow-400 tracking-widest">
//             DISCOVER EUROPE
//           </span>
//           <h2 className="text-4xl font-light text-white mt-4 mb-6 tracking-wider">
//             Finnish Travel Gallery
//           </h2>
//           <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
//             Experience the stunning beauty of Finland through the lens of our talented photographers
//           </p>
//         </motion.div>

//         {/* Auto-scrolling Gallery */}
//         <div className="overflow-hidden py-8">
//           <motion.div
//             className="flex gap-6"
//             initial={{ x: 0 }}
//             animate={{ x: "-100%" }}
//             transition={{
//               x: {
//                 duration: 10,
//                 repeat: Infinity,
//                 ease: "linear",
//               },
//             }}
//           >
//             {duplicatedItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative group min-w-[200px] sm:min-w-[300px] md:min-w-[400px] h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden flex-shrink-0"
//               >
//                 {/* Main Image */}
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />

//                 {/* Category Tag */}
//                 <div className="absolute top-4 right-4 bg-blue-900/50 backdrop-blur-sm px-4 py-1 rounded-full border border-yellow-400/20">
//                   <span className="text-yellow-400 text-sm tracking-wide">
//                     {item.category}
//                   </span>
//                 </div>

//                 {/* Content Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
//                   <div className="absolute bottom-0 left-0 right-0 p-6">
//                     <div className="bg-blue-900/50 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/20">
//                       <h3 className="text-lg font-light text-white mb-4 tracking-wider">
//                         {item.title}
//                       </h3>
                      
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Bottom Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-16"
//         >
//           <button className="inline-block text-yellow-400 text-sm tracking-widest px-6 py-2 rounded-full border border-yellow-400/20 hover:bg-yellow-400 hover:text-blue-950 transition-all duration-300">
//             Discover More Finish Adventures
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default GallerySection;
import React from "react";
import { useNavigate } from "react-router-dom";
import Card3DDemo from "./Card3DDemo";
import ImageTrailDemo from "./ImageTrailDemo";

const GallerySection = () => {
  const navigate = useNavigate();
  const galleryItems = [
    {
      image: "/gallery/01.jpg",
      title: "Northern Lights in Finland",
      author: "Sahjahan Sagor",
      category: "Nature",
      description: "Experience the magical aurora borealis"
    },
    {
      image: "/api/placeholder/800/600",
      title: "Helsinki Harbor",
      author: "Sahjahan Sagor",
      category: "City",
      description: "Scenic views of the capital's waterfront"
    },
    {
      image: "/api/placeholder/800/600",
      title: "Finnish Lakeside",
      author: "Sahjahan Sagor",
      category: "Landscape",
      description: "Peaceful moments by serene waters"
    },
    {
      image: "/api/placeholder/800/600",
      title: "Lapland Winter",
      author: "Sahjahan Sagor",
      category: "Adventure",
      description: "Snow-covered wilderness adventures"
    },
    {
      image: "/api/placeholder/800/600",
      title: "Traditional Finnish Sauna",
      author: "Sahjahan Sagor",
      category: "Culture",
      description: "Authentic Finnish wellness experiences"
    },
    {
      image: "/api/placeholder/800/600",
      title: "Finnish Forest",
      author: "Sahjahan Sagor",
      category: "Nature",
      description: "Explore pristine woodland trails"
    }
  ];

  // Duplicate items for infinite scrolling
  const duplicatedItems = [...galleryItems, ...galleryItems];

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-blue-950 py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block text-yellow-400 text-sm tracking-wider mb-4 font-medium">
            DISCOVER EUROPE
          </span>
          <h2 className="text-5xl font-light text-white mb-6 tracking-wide">
            Finnish Travel Gallery
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Experience the stunning beauty of Finland through the lens of our talented photographers
          </p>
        </div>

        {/* Scrolling Gallery */}
        <div className="overflow-hidden py-8">
          <div 
            className="flex gap-6 animate-scroll"
            style={{
              animation: 'scroll 40s linear infinite',
              width: 'fit-content'
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div
                key={index}
                className="relative group min-w-[300px] sm:min-w-[400px] lg:min-w-[380px] h-[400px] lg:h-[475px] rounded-xl overflow-hidden flex-shrink-0 bg-blue-900/20 backdrop-blur-sm border border-white/10 hover:border-yellow-400/30 transition-all duration-500"
              >
                {/* Main Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Category Tag */}
                <div className="absolute top-4 right-4">
                  <span className="inline-block bg-blue-900/70 backdrop-blur-sm text-yellow-400 text-xs px-4 py-1 rounded-full border border-yellow-400/20">
                    {item.category}
                  </span>
                </div>

                {/* Content Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div className="p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-light text-white mb-3 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center">
                        <span className="text-yellow-400 text-xs">AS</span>
                      </div>
                      <span className="text-gray-300 text-sm">{item.author}</span>
                    </div>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
        <Card3DDemo/>
              <ImageTrailDemo/>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => {
              navigate('/tours');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-medium text-sm tracking-wider px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
          >
            Discover More Finnish Adventures
          </button>
        </div>
      </div>

      {/* CSS for scroll animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default GallerySection;