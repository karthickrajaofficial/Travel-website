// AnimatedHeading.jsx
import { motion } from 'framer-motion';

const headingVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  visible: { 
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

export const AnimatedHeading = ({ text }) => (
  <div className="flex items-center justify-center gap-3 mb-16">
    <motion.div className="h-px w-12 bg-blue-300 origin-left" variants={lineVariants} />
    <motion.h2 variants={headingVariants} className="text-3xl font-light text-blue-900 tracking-wider relative">
      <span className="relative">
        {text}
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-300/30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </span>
    </motion.h2>
    <motion.div className="h-px w-12 bg-blue-300 origin-right" variants={lineVariants} />
  </div>
);

export default AnimatedHeading;