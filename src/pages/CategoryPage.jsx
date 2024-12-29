import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { packages } from '../data/packages';

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [filteredPackages, setFilteredPackages] = useState([]);

  useEffect(() => {
    const searchCategory = category.toLowerCase();
    const filtered = packages.filter(pkg => {
      const hasMainCategory = pkg.categories.some(cat => 
        cat.toLowerCase() === searchCategory
      );
      const hasSubPlaceCategory = pkg.subPlaces.some(subPlace => 
        subPlace.categories && subPlace.categories.some(cat => 
          cat.toLowerCase() === searchCategory
        )
      );
      return hasMainCategory || hasSubPlaceCategory;
    });
    setFilteredPackages(filtered);
  }, [category]);

  const handlePackageClick = (path) => {
    navigate(path);
  };

  return (
    <div className="py-12 px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] rounded-xl overflow-hidden mb-12">
        <img
          src={`/package/category/${category.toLowerCase()}.jpg`}
          alt={category}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
              {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </h1>
            <p className="text-xl md:text-2xl">Discover Amazing Destinations</p>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Available {category.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')} Packages
        </h2>

        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handlePackageClick(pkg.path)}
              >
                <div className="relative h-48">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {pkg.description}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.title}</p>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Starting from</span>
                    <span className="text-lg font-bold text-purple-600">{pkg.price}</span>
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.categories.map((cat, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full"
                      >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </span>
                    ))}
                  </div>

                  {/* Included Destinations */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Included Destinations:</h4>
                    <ul className="space-y-1">
                      {pkg.subPlaces.map((subPlace, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                          {subPlace.name} ({subPlace.description})
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="min-h-[40vh] flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">No Packages Found</h2>
              <p className="text-gray-600">
                We couldn't find any packages for this category. Please try a different category or contact us for custom packages.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;