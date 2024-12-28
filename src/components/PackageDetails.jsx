import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import packages from '../data/packages'

const PackageDetails = () => {
  const { packageId } = useParams()
  const navigate = useNavigate()

  // Find the selected package
  const selectedPackage = packages.find(pkg => 
    pkg.path === `/${packageId}` || pkg.name.toLowerCase() === packageId.toLowerCase()
  )

  if (!selectedPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Not Found</h2>
          <p className="text-gray-600">The package you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  // Handle sub-place click
  const handleSubPlaceClick = (subPlacePath) => {
    navigate(subPlacePath)
  }

  return (
    <div className="py-12 px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] rounded-xl overflow-hidden mb-12">
        <img
          src={`/package/${selectedPackage.image}`}
          alt={selectedPackage.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{selectedPackage.name}</h1>
            <p className="text-xl md:text-2xl">{selectedPackage.title}</p>
          </div>
        </div>
      </div>

      {/* Sub Places Grid */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Places in {selectedPackage.name}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedPackage.subPlaces.map((subPlace, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleSubPlaceClick(subPlace.path)}
            >
              <div className="relative h-48">
                <img
                  src={`/${subPlace.image}`}
                  alt={subPlace.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{subPlace.name}</h3>
                <p className="text-gray-600 mb-4">{subPlace.title}</p>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{subPlace.description}</span>
                  <span className="text-lg font-bold text-purple-600">{subPlace.price}</span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Highlights:</h4>
                  <ul className="space-y-1">
                    {subPlace.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PackageDetails