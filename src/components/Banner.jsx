import React from "react";
import { Link, useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();
  const currentPage = location.pathname === "/" ? "Home" : location.pathname.replace("/", "");

  // Map of paths to specific background images
  const backgroundImages = {
    home: "bg-img/home.jpg",
    shop: "bg-img/shop.jpg",
    about: "bg-img/02.jpg",
    // Add more paths and their corresponding images here
  };

  // Default background image
  const defaultImage = "bg-img/01.jpg";

  // Determine the background image based on the current path
  const backgroundImage = backgroundImages[currentPage.toLowerCase()] || defaultImage;

  return (
    <div
      className="relative bg-cover bg-center h-96 flex items-center justify-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-black text-4xl font-bold mb-4">{currentPage}</h2>
        <nav aria-label="breadcrumb">
          <ol className="inline-flex items-center space-x-2 text-black text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 underline transition"
              >
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="font-medium text-gray-300 capitalize">
              {currentPage}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Banner;
