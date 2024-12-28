import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Packages from '../data/packages'


const PackageDetail = () => {
  const { category, subPackage } = useParams()

  const packageDetails = useMemo(() => {
    // Find the main category
    const mainCategory = Packages.find(pkg => 
      pkg.path.slice(1) === category
    )

    // If category found, find the specific sub-package
    if (mainCategory) {
      const selectedSubPackage = mainCategory.subPlaces.find(sub => 
        sub.path === `/${category}/${subPackage}`
      )

      return {
        category: mainCategory,
        subPackageDetails: selectedSubPackage
      }
    }

    return null
  }, [category, subPackage])

  if (!packageDetails) {
    return <div className="container mx-auto p-6">Package not found</div>
  }

  const { category: mainCategory, subPackageDetails } = packageDetails

  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div>
          <img 
            src={`/images/${subPackageDetails.image}`} 
            alt={subPackageDetails.name} 
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{subPackageDetails.name}</h1>
          <h2 className="text-xl text-gray-600 mb-4">{subPackageDetails.title}</h2>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="text-lg font-semibold">
              <span className="text-gray-600">Price:</span> {subPackageDetails.price}
            </p>
            <p className="text-lg">
              <span className="text-gray-600">Duration:</span> {subPackageDetails.description}
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Highlights</h3>
            <ul className="list-disc list-inside space-y-2">
              {subPackageDetails.highlights.map((highlight, index) => (
                <li key={index} className="text-gray-700">{highlight}</li>
              ))}
            </ul>
          </div>

          {/* <div className="mt-6">
            <button 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Now
            </button>
          </div> */}
        </div>
      </div>

      {/* Additional Category Context */}
      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">About {mainCategory.name}</h3>
        <p className="text-gray-700">{mainCategory.title}</p>
        <p className="text-gray-600 mt-2">{mainCategory.description}</p>
      </div>
    </div>
  )
}

export default PackageDetail