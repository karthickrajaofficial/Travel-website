import React from "react";
import { useParams, Link } from "react-router-dom";
import tourPackages from "../data/tourPackages";
import Banner from "./Banner";

const TourCategory = () => {
  const { categoryName } = useParams();

  // Add null check for categoryName
  if (!categoryName) {
    return (
      <div className="text-center text-red-500 font-bold py-10">
        Invalid category URL
      </div>
    );
  }

  // Log for debugging
  console.log("Category Name from URL:", categoryName);
  console.log("Available Tour Packages:", tourPackages);

  const category = tourPackages.find(
    (category) => {
      const formattedCategoryName = category.name.toLowerCase().replace(/\s+/g, "-");
      const formattedParamName = categoryName.toLowerCase();
      
      // Log for debugging
      console.log("Comparing:", formattedCategoryName, "with", formattedParamName);
      
      return formattedCategoryName === formattedParamName;
    }
  );

  // Log found category
  console.log("Found Category:", category);

  if (!category) {
    return (
      <div className="text-center text-red-500 font-bold py-10">
        Category not found
      </div>
    );
  }

  // Add null check for tours array
  if (!category.tours) {
    return (
      <div className="text-center text-red-500 font-bold py-10">
        Tours data is missing for this category
      </div>
    );
  }

  return (
    <>
      <Banner />
      <section className="py-16 bg-gray-100 px-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">{category.name}</h2>
          {category.tours.length === 0 ? (
            <div className="text-center text-gray-500 font-medium py-10">
              No tours available in this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tours.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-2 hover:text-blue-500">
                      {tour.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {tour.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-green-500">
                        {tour.price}
                      </span>
                      <span className="text-sm text-gray-500">
                        {tour.duration}
                      </span>
                    </div>
                    <Link
                      to={`/tour/${tour.id}`}
                      className="text-blue-500 mt-4 block text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TourCategory;