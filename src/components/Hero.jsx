import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // Change slide every 3 seconds (4 slides)
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Image container to scroll vertically */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateY(-${currentIndex * 100}%)`, // Scroll one image at a time
        }}
      >
        {/* Slide 1 */}
        <div className="w-full h-screen bg-[url('/paris1.jpg')] bg-no-repeat bg-cover bg-center"></div>
        {/* Slide 2 */}
        <div className="w-full h-screen bg-[url('/paris2.jpg')] bg-no-repeat bg-cover bg-center"></div>
        {/* Slide 3 */}
        <div className="w-full h-screen bg-[url('/pariss3.jpg')] bg-no-repeat bg-cover bg-center"></div>
        {/* Slide 4 */}
        <div className="w-full h-screen bg-[url('/paris4.jpg')] bg-no-repeat bg-cover bg-center"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content Section */}
      <div className="relative z-20 h-full flex items-center max-w-[1400px] mx-auto px-6">
        {/* Left Section - Text */}
        <div className="lg:w-2/5">
          <h2 className="xl:text-[4rem] lg:text-5xl text-4xl lg:text-left text-center font-bold leading-snug mb-5 text-white">
            It's a Big World Out There, Go Explore
          </h2>
          <p className="text-white leading-normal mb-8 text-center lg:text-left">
            Conveniently customize proactive web services for leveraged without
            continually aggregate frictionless solutions.
          </p>
          <div className="flex flex-1 gap-5 justify-center lg:justify-start">
            <button className="bg-primary rounded transition-bg shadow h-16 lg:px-10 lg:w-auto w-full outline-none text-white hover:bg-white hover:text-primary">
              Get Exploration
            </button>
            <button className="bg-white rounded transition-bg shadow h-16 lg:px-10 lg:w-auto w-full outline-none text-primary hover:bg-primary hover:text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
