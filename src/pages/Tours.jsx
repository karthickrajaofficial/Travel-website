import React from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../components/Banner'
import HotelSection from '../components/HotelSection'
import allPackages from '../data/packages' // Adjust the import path as needed

const TourCategory = () => {
  const navigate = useNavigate()

  const handleCategoryClick = (path) => {
    navigate(path)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const handleSubPlaceClick = (path) => {
    navigate(path)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPackages.map((category, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => handleCategoryClick(category.path)}
          >
            <img 
              src={`/images/${category.image}`} 
              alt={category.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h2>
              <p className="text-gray-600 mb-2">{category.description}</p>
              <p className="text-gray-700 font-semibold">Starting from {category.price}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Sub Destinations:</h3>
                <div className="grid grid-cols-1 gap-2">
                  {category.subPlaces.map((subPlace, subIndex) => (
                    <div 
                      key={subIndex} 
                      className="bg-gray-100 p-2 rounded hover:bg-gray-200 transition-colors cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation() // Prevent parent click when clicking sub-place
                        handleSubPlaceClick(subPlace.path)
                      }}
                    >
                      <p className="text-sm font-medium">{subPlace.name}</p>
                      <p className="text-xs text-gray-600">{subPlace.description}</p>
                      <p className="text-xs font-semibold">{subPlace.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Tours = () => {
  return (
    <div>
      <Banner/>
      {/* <HotelSection/> */}
      <TourCategory/>
    </div>
  )
}

export default Tours