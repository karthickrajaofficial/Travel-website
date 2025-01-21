// animations.js
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.5, staggerChildren: 0.2 } 
    }
  };
  
  export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  export const headingVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { 
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  export const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };