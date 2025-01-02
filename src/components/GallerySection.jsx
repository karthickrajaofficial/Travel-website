import React from "react";
import { motion } from "framer-motion";

const GallerySection = () => {
  const galleryItems = [
    {
      image: "/gallery/01.jpg",
      authorImage: "/gallery/author/01.jpg",
      title: "Northern Lights in Finland",
      author: "Sahjahan Sagor",
      category: "Nature",
    },
    {
      image: "/gallery/05.jpg",
      authorImage: "/gallery/author/01.jpg",
      title: "Helsinki Harbor",
      author: "Sahjahan Sagor",
      category: "City",
    },
    {
      image: "/gallery/06.jpg",
      authorImage: "/gallery/author/01.jpg",
      title: "Finnish Lakeside",
      author: "Sahjahan Sagor",
      category: "Landscape",
    },
    {
      image: "/gallery/01.jpg",
      authorImage: "/gallery/author/01.jpg",
      title: "Lapland Winter",
      author: "Sahjahan Sagor",
      category: "Adventure",
    },
    {
      image: "/gallery/05.jpg",
      authorImage: "/gallery/author/01.jpg",
      title: "Traditional Finnish Sauna",
      author: "Sahjahan Sagor",
      category: "Culture",
    },
    {
      image: "/gallery/06.jpg",
      authorImage: "/gallery/author/01.jpg",
      title: "Finnish Forest",
      author: "Sahjahan Sagor",
      category: "Nature",
    },
  ];

  // Duplicate items for infinite scrolling
  const duplicatedItems = [...galleryItems, ...galleryItems];

  return (
    <div className="bg-blue-950 py-24 relative overflow-hidden">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-yellow-400 tracking-widest">
            DISCOVER EUROPE
          </span>
          <h2 className="text-4xl font-light text-white mt-4 mb-6 tracking-wider">
            Finnish Travel Gallery
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Experience the stunning beauty of Finland through the lens of our talented photographers
          </p>
        </motion.div>

        {/* Auto-scrolling Gallery */}
        <div className="overflow-hidden py-8">
          <motion.div
            className="flex gap-6"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              x: {
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div
                key={index}
                className="relative group min-w-[200px] sm:min-w-[300px] md:min-w-[400px] h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden flex-shrink-0"
              >
                {/* Main Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Category Tag */}
                <div className="absolute top-4 right-4 bg-blue-900/50 backdrop-blur-sm px-4 py-1 rounded-full border border-yellow-400/20">
                  <span className="text-yellow-400 text-sm tracking-wide">
                    {item.category}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-blue-900/50 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/20">
                      <h3 className="text-lg font-light text-white mb-4 tracking-wider">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full border border-yellow-400/20">
                          <img
                            src={item.authorImage}
                            alt={item.author}
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h5 className="text-sm text-white tracking-wider mb-1">
                            {item.author}
                          </h5>
                          <p className="text-sm text-yellow-400 tracking-wide">
                            Photographer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="inline-block text-yellow-400 text-sm tracking-widest px-6 py-2 rounded-full border border-yellow-400/20 hover:bg-yellow-400 hover:text-blue-950 transition-all duration-300">
            Discover More Finish Adventures
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default GallerySection;
