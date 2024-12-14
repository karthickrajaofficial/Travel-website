import React from "react";
import { Link, useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();
  const currentPage = location.pathname === "/" ? "Home" : location.pathname.replace("/", "");

  return (
    <div
      className="relative bg-cover bg-center h-96 flex items-center justify-center"
      style={{
        backgroundImage: "url('bg-img/01.jpg')",
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
