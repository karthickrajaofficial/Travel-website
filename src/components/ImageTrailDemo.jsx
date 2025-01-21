
import { ImageTrail } from './ImageTrail';
import React, { useEffect, useState, useRef } from "react";

const ImageTrailDemo = () => {
    const ref = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
//   const images = [
//     "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
//     "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
//     "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
//     "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
//     "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
//     "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
//   ].map(url => `${url}?auto=format&fit=crop&w=300&q=80`);
const images = [
    "/paris1.jpg",
    "/paris2.jpg",
    "/paris3.jpg",
    "/paris4.jpg",
    "/pariss3.jpg",
    
];

// No need for the .map() transformation since we're using local images

  const customAnimation = [
    [{ scale: 1.5, rotate: 0 }, { duration: 0.2, ease: "circOut" }],
    [{ scale: 0, rotate: 180 }, { duration: 0.8, ease: "circIn" }],
  ];

  const handleImagesLoaded = () => {
    setImagesLoaded(true);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center relative overflow-hidden">
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent z-50">
          <div className="text-2xl font-semibold text-gray-700">Loading...</div>
        </div>
      )}
      <div className="absolute inset-0 z-0" ref={ref}>
        <ImageTrail 
          containerRef={ref}
          animationSequence={customAnimation}
          interval={150}
          rotationRange={20}
          newOnTop={true}
        >
          {images.map((url, index) => (
            <div
              key={index}
              className="flex relative w-24 h-24 rounded-lg shadow-lg"
            >
              <img
                src={url}
                alt={`Trail image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
                onLoad={index === images.length - 1 ? handleImagesLoaded : undefined}
              />
            </div>
          ))}
        </ImageTrail>
      </div>
      <div className="flex flex-col items-center gap-4 z-10">
        <h1 className="text-7xl md:text-9xl font-bold select-none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
         EXPLORE EUROPE
        </h1>
        <p className="text-white text-lg">Move your cursor to create magic</p>
      </div>
    </div>
  ); 
}

export default ImageTrailDemo