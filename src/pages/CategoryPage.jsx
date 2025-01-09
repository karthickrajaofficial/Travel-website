import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { packages } from '../data/packages';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [filteredPackages, setFilteredPackages] = useState([]);

  useEffect(() => {
    const searchCategory = category.toLowerCase();
    const filtered = packages.filter(pkg => {
      const hasMainCategory = pkg.categories.some(cat => 
        cat.toLowerCase() === searchCategory
      );
      const hasSubPlaceCategory = pkg.subPlaces.some(subPlace => 
        subPlace.categories && subPlace.categories.some(cat => 
          cat.toLowerCase() === searchCategory
        )
      );
      return hasMainCategory || hasSubPlaceCategory;
    });
    setFilteredPackages(filtered);
  }, [category]);

  const handlePackageClick = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
      {/* Hero Section */}
      <div className="relative h-[50vh] lg:h-[60vh]">
        <div className="absolute inset-0">
          <img
            src={`/package/category/${category.toLowerCase()}.jpg`}
            alt={category}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-950/40 to-blue-950"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 flex items-center justify-center text-center"
        >
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-yellow-400"></div>
              <span className="text-yellow-400 tracking-[0.3em] text-sm">
                EXCLUSIVE DESTINATIONS
              </span>
              <div className="h-px w-12 bg-yellow-400"></div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-light text-white tracking-wider mb-4">
              {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Discover Extraordinary Experiences
            </p>
          </div>
        </motion.div>
      </div>

      {/* Packages Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 -mt-20 pb-24 px-4 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {filteredPackages.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-slate-900/95 to-blue-900/95 backdrop-blur-sm rounded-lg overflow-hidden border border-yellow-400/10 shadow-xl cursor-pointer"
                  onClick={() => handlePackageClick(pkg.path)}
                >
                  <div className="relative h-64">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-between items-end">
                        <h3 className="text-xl font-light text-white tracking-wider">{pkg.name}</h3>
                        <span className="text-yellow-400 font-light">{pkg.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-gray-300 font-light">{pkg.title}</p>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                      {pkg.categories.map((cat, idx) => (
                        <span
                          key={idx}
                          className="text-xs border border-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full"
                        >
                          {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </span>
                      ))}
                    </div>

                    {/* Included Destinations */}
                    <div className="space-y-3">
                      <h4 className="text-sm text-gray-100 tracking-wider">INCLUDED DESTINATIONS</h4>
                      <ul className="space-y-2">
                        {pkg.subPlaces.map((subPlace, idx) => (
                          <li key={idx} className="text-sm text-gray-100 flex items-center group">
                            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                            <span className="font-light">
                              {subPlace.name} <span className="text-gray-100">({subPlace.description})</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="min-h-[40vh] flex items-center justify-center"
            >
              <div className="text-center bg-slate-900/50 p-8 rounded-lg border border-yellow-400/20">
                <h2 className="text-2xl font-light text-white tracking-wider mb-4">No Packages Found</h2>
                <p className="text-gray-400 font-light">
                  We couldn't find any packages for this category. Please explore our other exclusive destinations or contact us for custom packages.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CategoryPage;