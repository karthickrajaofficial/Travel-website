// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';

// const GallerySection = () => {
//   const galleryItems = [
//     { image: "/gallery/01.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" },
//     { image: "/gallery/05.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" },
//     { image: "/gallery/06.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" },
//     { image: "/gallery/01.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" },
//     { image: "/gallery/05.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" },
//     { image: "/gallery/06.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" },
//     { image: "/gallery/01.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" },
//     { image: "/gallery/05.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" },
//     { image: "/gallery/06.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" },
//     { image: "/gallery/01.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" },
//     { image: "/gallery/05.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" },
//     { image: "/gallery/06.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" }
//   ];

//   return (
//     <div className="gallery py-20 px-4 sm:px-8 lg:px-20">
//       <div className="text-center mb-12">
//         <span className="text-lg font-semibold text-gray-700">Our Gallery</span>
//         <h2 className="text-4xl font-bold mt-2 text-primary">Best Traveler Share A Photo</h2>
//       </div>
//       <div className="gallery__slider" style={{ height: '400px' }}> {/* Make sure container height is set */}
//         <Swiper
//           spaceBetween={16}
//           slidesPerView={1}
//           loop={true}  // Infinite loop enabled
//           autoplay={{
//             delay: 2500,  // Autoplay delay in ms
//             disableOnInteraction: false,  // Allows autoplay to continue after interaction
//           }}
//           grabCursor={true}
//           speed={1000}  // Speed of the transition effect
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//             1280: { slidesPerView: 5 },
//             1536: { slidesPerView: 6 }
//           }}
//           loopAdditionalSlides={2}  // Ensuring that the loop works with additional slides
//         >
//           {galleryItems.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="gallery__item">
//                 <div className="gallery__thumb relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
//                   <img
//                     src={item.image}
//                     alt={`Travel photo of ${item.title}`}
//                     className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
//                     loading="lazy"
//                   />
//                   <div className="absolute bottom-4 left-4 p-4 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md">
//                     <h3 className="text-lg font-semibold">{item.title}</h3>
//                     <p className="flex items-center text-sm mt-2">
//                       <img
//                         src={item.authorImage}
//                         alt={`${item.author}'s profile`}
//                         className="w-8 h-8 rounded-full mr-2"
//                       />
//                       {item.author}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default GallerySection;
//  old code 
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";

const GallerySection = () => {
  const galleryItems = [
    { image: "/gallery/01.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" },
    { image: "/gallery/05.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" },
    { image: "/gallery/06.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" },
    { image: "/gallery/01.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" },
    { image: "/gallery/05.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" },
    { image: "/gallery/06.jpg", authorImage: "/gallery/author/01.jpg", title: "Finland", author: "Sahjahan Sagor" },
  ];

  // Duplicate array for seamless looping
  const loopedGalleryItems = [...galleryItems, ...galleryItems];

  return (
    <div className="gallery py-20 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-12">
        <span className="text-lg font-semibold text-gray-700">Our Gallery</span>
        <h2 className="text-4xl font-bold mt-2 text-primary">Best Traveler Share A Photo</h2>
      </div>

      {/* Framer Motion Infinite Scroll */}
      <motion.div
        className="flex gap-6"
        initial={{ x: 0 }}
        animate={{
          x: "-100%", // Move content to the left
          transition: {
            ease: "linear",
            duration: 20, // Adjust scroll speed
            repeat: Infinity, // Infinite scroll
          },
        }}
      >
        {loopedGalleryItems.map((item, index) => (
          <div key={index} className="min-w-[300px] h-[400px] relative rounded-lg overflow-hidden shadow-lg group">
            {/* Image */}
            <img
              src={item.image}
              alt={`Travel photo of ${item.title}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />

            {/* Content Overlay */}
            <div className="absolute bottom-4 left-4 p-4 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="flex items-center text-sm mt-2">
                <img
                  src={item.authorImage}
                  alt={`${item.author}'s profile`}
                  className="w-8 h-8 rounded-full mr-2"
                />
                {item.author}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default GallerySection;
