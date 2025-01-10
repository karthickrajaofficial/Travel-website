import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full h-96 md:h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/paris.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
      </div>

    
    </div>
  );
};

export default Hero;