// PackageCard.jsx
import { motion } from 'framer-motion';
import { itemVariants } from './animations';

const PackageCard = ({ item, onClick }) => {
  if (!item?.name || !item?.image || !item?.path) return null;

  return (
    <motion.div
      variants={itemVariants}
      className="group relative bg-gradient-to-br from-white to-blue-50 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden mt-20"
      onClick={onClick}
    >
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10" />
        <img
          src={`/package/${item.image}`}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-8">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-medium text-blue-900 tracking-wide mb-2 group-hover:text-blue-600 transition-colors"
        >
          {item.name}
        </motion.h3>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <motion.span 
            className="text-sm text-blue-600 hover:text-blue-800 tracking-wider transition-colors font-medium inline-block"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            EXPLORE DESTINATION →
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;