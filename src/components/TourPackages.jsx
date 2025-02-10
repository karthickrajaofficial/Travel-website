import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import tourPackages from "../data/tourPackages";

const TourPackages = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Tour Packages</h2>
        {tourPackages.map((category) => (
          <div key={category.id} className="mb-10">
            <h3 className="text-xl font-semibold mb-4">
              <ScrollToTopLink to={`/${category.name.toLowerCase().replace(" ", "-")}`}>{category.name}</Link>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tours.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-2">{tour.name}</h4>
                    <p className="text-gray-600 text-sm mb-4">{tour.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-green-500">{tour.price}</span>
                      <span className="text-gray-500 text-sm">{tour.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourPackages;
