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
          controls={false}
          className="w-full h-full object-cover pointer-events-none"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate"
        >
          <source src="/paris.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

    </div>
  );
};

export default Hero;