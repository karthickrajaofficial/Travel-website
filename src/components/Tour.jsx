import React from 'react';

const Tour = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-3xl font-semibold">Explore</div>
        <div className="flex space-x-4">
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg">Home</button>
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg">Tours</button>
        </div>
      </div>

      {/* Tour Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-4xl font-bold">Enjoy Beauty Place In Bali City.</div>
        <div className="flex space-x-6">
          <div className="flex items-center text-indigo-600">
            <i className="fas fa-map-marker-alt"></i>
            <span className="ml-2">Bali, Indonesia</span>
          </div>
          <div className="flex items-center text-indigo-600">
            <i className="fas fa-clock"></i>
            <span className="ml-2">10 days</span>
          </div>
          <div className="flex items-center text-indigo-600">
            <i className="fas fa-users"></i>
            <span className="ml-2">8 people</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="mb-6">
        <div className="text-2xl font-semibold">Overview</div>
        <p className="mt-4 text-gray-600">
          Aliquam euismod at potenti velit risus erat nulla blandit leo. Sagittis cubil of the rhoncus
          sociosqu Taciti gravida augue Vestibulum Eu augue augue duis rhoncus sociosqu...
        </p>
      </div>

      {/* Included & Excluded Section */}
      <div className="flex space-x-8 mb-6">
        <div className="w-1/2">
          <div className="text-xl font-semibold">Included</div>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="w-1/2">
          <div className="text-xl font-semibold">Exclude</div>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Item A</li>
            <li>Item B</li>
            <li>Item C</li>
          </ul>
        </div>
      </div>

      {/* Tour Image Section */}
      <div className="flex mb-6">
        <div className="w-1/2">
          <img
            src="path_to_image.jpg"
            alt="Tour Image"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 pl-8">
          <div className="text-xl font-semibold">Details</div>
          <p className="mt-4 text-gray-600">
            Aliquam euismod at potenti velit risus erat nulla blandit leo. Sagittis cubil of the rhoncus
            sociosqu Taciti gravida augue Vestibulum Eu augue augue duis rhoncus sociosqu...
          </p>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-600">$250.00</div>
        <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg">Get Exploration</button>
      </div>
    </div>
  );
};

export default Tour;
