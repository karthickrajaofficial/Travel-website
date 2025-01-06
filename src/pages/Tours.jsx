import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import allPackages from '../data/packages';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.5, 
      staggerChildren: 0.2 
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const PackageCard = ({ item, onClick }) => (
  <motion.div
    variants={itemVariants}
    className="group relative bg-gradient-to-br from-slate-800 to-slate-900 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
    onClick={onClick}
  >
    <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    
    <div className="relative h-56 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
      <img
        src={`/images/${item.image}`}
        alt={item.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute bottom-4 left-6 z-20">
        <span className="inline-block px-4 py-1 bg-yellow-500/90 text-white text-sm">
          {item.price}
        </span>
      </div>
    </div>

    <div className="p-8">
      <h3 className="text-xl font-light text-white tracking-wide mb-2 group-hover:text-yellow-400 transition-colors">
        {item.name}
      </h3>
      <p className="text-sm text-gray-400 mb-6">{item.description || item.title}</p>

      <div className="mt-6 pt-6 border-t border-slate-700/50">
        <span className="text-sm text-yellow-400 hover:text-yellow-300 tracking-wider transition-colors">
          EXPLORE DESTINATION →
        </span>
      </div>
    </div>
  </motion.div>
);

const TourCategory = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-950 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto space-y-20"
      >
        {/* Main Packages Section */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-16">
            <div className="h-px w-12 bg-yellow-400/50"></div>
            <h2 className="text-3xl font-light text-white tracking-wider">
              Tour Packages
            </h2>
            <div className="h-px w-12 bg-yellow-400/50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPackages.map((category, index) => (
              <PackageCard 
                key={index}
                item={category}
                onClick={() => handleCategoryClick(category.path)}
              />
            ))}
          </div>
        </div>

        {/* Sub Destinations Sections */}
        {allPackages.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="flex items-center justify-center gap-3 mb-16">
              <div className="h-px w-12 bg-yellow-400/50"></div>
              <h2 className="text-3xl font-light text-white tracking-wider">
                {category.name} Destinations
              </h2>
              <div className="h-px w-12 bg-yellow-400/50"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.subPlaces.map((subPlace, subIndex) => (
                <PackageCard 
                  key={subIndex}
                  item={subPlace}
                  onClick={() => handleCategoryClick(subPlace.path)}
                />
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Tours = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-950">
      {/* <Banner /> */}
      <TourCategory />
    </div>
  );
};

export default Tours;