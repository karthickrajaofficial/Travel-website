import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { packages } from '../data/packages';
// import bgImage from '../assets/paris.jpg'; // Replace with the correct image path

const ProductsPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Normalize the type URL
  const normalizedUrlType = useMemo(() => {
    return type ? type.toLowerCase().replace(/[-\s]+/g, ' ').trim() : '';
  }, [type]);

  // Compute filtered packages using useMemo
  const filteredPackages = useMemo(() => {
    if (!normalizedUrlType) return [];
    let filtered = packages.filter(pkg => {
      const normalizedPackageType = pkg.type.toLowerCase().replace(/[-\s]+/g, ' ').trim();
      return normalizedPackageType === normalizedUrlType;
    });

    if (filtered.length === 0) {
      filtered = packages.reduce((acc, mainPackage) => {
        const subPlaceMatches = (mainPackage.subPlaces || []).filter(subPlace => 
          subPlace.type?.toLowerCase().replace(/[-\s]+/g, ' ').trim() === normalizedUrlType
        ).map(subPlace => ({
          ...subPlace,
          parentName: mainPackage.name,
          parentPath: mainPackage.path,
          categories: subPlace.categories || [],
          price: subPlace.price || 'Contact for price',
          description: subPlace.description || '',
          path: subPlace.path || `${mainPackage.path}/${subPlace.name.toLowerCase().replace(/\s+/g, '-')}`
        }));
        return [...acc, ...subPlaceMatches];
      }, []);
    }
    return filtered.length > 0 ? filtered : [{ 
      name: 'No Package', 
      price: 'Contact for price', 
      description: 'No description available.', 
      path: '/default-package',
      highlights: ['N/A'],
   
    }];
  }, [normalizedUrlType]);

  useEffect(() => {
    setIsLoading(true);
    if (!type) {
      setError('No package type specified');
      setIsLoading(false);
      return;
    }

    const timeout = setTimeout(() => {
      if (filteredPackages.length === 0) {
        setError(`No packages found for type: ${type}`);
      } else {
        setError(null);
      }
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [type, filteredPackages.length]);

  const handlePackageClick = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  const formatDisplayText = useCallback((text) => {
    if (!text) return '';
    return text
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading packages...</p>
        </div>
      </div>
    );
  }

  const formattedType = formatDisplayText(type);

  return (
    <div className="py-12 px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] rounded-xl overflow-hidden mb-12">
        <img
          src="/bgimg.jpg" // Use the imported background image
          alt={formattedType}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
              {formattedType}
            </h1>
            <p className="text-xl md:text-2xl">
              Discover Amazing {formattedType} Packages
            </p>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Available {formattedType} Packages
        </h2>

        {error ? (
          <div className="min-h-[40vh] flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops!</h2>
              <p className="text-gray-600 mb-4">{error}</p>
              <button
                onClick={() => navigate('/')}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Return Home
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
              <div
                key={`${pkg.path}-${index}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handlePackageClick(pkg.path)}
              >
                <div className="relative h-48">
                  <img
                    src={pkg.image || 'No package.jpg'} // Placeholder image for each package
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  {pkg.parentName && (
                    <p className="text-sm text-gray-500 mb-2">Part of {pkg.parentName} Tour</p>
                  )}
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Starting from</span>
                    <span className="text-lg font-bold text-purple-600">{pkg.price}</span>
                  </div>

                  {/* Highlights or Categories */}
                  <div className="space-y-2">
                    {pkg.highlights ? (
                      <>
                        <h4 className="font-semibold text-gray-800">Highlights:</h4>
                        <ul className="space-y-1">
                          {pkg.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : pkg.categories?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {pkg.categories.map((cat, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full"
                          >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
