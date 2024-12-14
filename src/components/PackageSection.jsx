import React from 'react';
import { Link } from 'react-router-dom';

const PackageSection = () => {
  const packages = [
    { name: 'Greece', image: '01.jpg', description: '4 Day’s 3 Night', title: 'Enjoy the Beauty place in Greece City', price: '$1200' },
    { name: 'Maldivs', image: '02.jpg', description: '4 Day’s 3 Night', title: 'Enjoy the Beauty place in Maldivs Beach', price: '$1200' },
    { name: 'Bhutan', image: '03.jpg', description: '4 Day’s 3 Night', title: 'Enjoy the Beauty place in Bhutan City', price: '$1200' },
    { name: 'Paris', image: '04.jpg', description: '4 Day’s 3 Night', title: 'Enjoy the Beauty place in Paris City', price: '$1200' },
  ];

  return (
    <div className="relative pt-20 pb-20 bg-purple-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-xl text-gray-500 block mb-2">Popular Packages</span>
          <h2 className="text-3xl font-semibold text-gray-800">Checkout Our Packages</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-transparent p-2 rounded-lg shadow-lg group relative">
              <div className="relative overflow-hidden">
                <Link to={`/tour/${pkg.name.toLowerCase()}`}>
                  <img
                    src={`package/${pkg.image}`}
                    alt={pkg.name}
                    className="w-full h-64 object-cover rounded-md transition-transform transform group-hover:scale-110"
                  />
                </Link>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <h2 className="text-xl font-bold">{pkg.name}</h2>
                  <p className="text-sm">{pkg.description}</p>
                </div>
              </div>
              <div className="mt-4">
                <Link to={`/tour/${pkg.name.toLowerCase()}`}>
                  <h5 className="text-xl font-semibold text-gray-700">{pkg.title}</h5>
                </Link>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 ml-2">Starting From //</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">{pkg.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageSection;
