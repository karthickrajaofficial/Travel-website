import React from 'react';
import { useNavigate } from 'react-router-dom';

const hotels = [
  {
    id: 1,
    title: 'Enjoy Beauty place in Bali City',
    image: 'package/14.jpg',
    days: '10 Days',
    persons: '8 Person',
    rating: '4.8 (2.5k Review)',
    location: 'Bali, Indonesia',
    price: '$1200',
  },
  {
    id: 2,
    title: 'Enjoy Beauty place in Rom City',
    image: 'package/15.jpg',
    days: '10 Days',
    persons: '8 Person',
    rating: '4.8 (2.5k Review)',
    location: 'Rome, Italy',
    price: '$1200',
  },
  {
    id: 3,
    title: 'Enjoy Beauty place in Japan City',
    image: 'package/16.jpg',
    days: '10 Days',
    persons: '8 Person',
    rating: '4.8 (2.5k Review)',
    location: 'Tokyo, Japan',
    price: '$1200',
  },
  // Add more hotel packages as needed
];

const HotelSection = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/details/${id}`); // Redirect to details page with hotel ID
  };

  return (
    <section className="py-16 bg-gray-100 px-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
              onClick={() => handleNavigate(hotel.id)} // Redirect on click
            >
              <div className="relative">
                <img
                  src={hotel.image}
                  alt={hotel.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2 hover:text-blue-500">
                  {hotel.title}
                </h4>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>
                    <i className="far fa-clock"></i> {hotel.days}
                  </span>
                  <span>
                    <i className="far fa-user"></i> {hotel.persons}
                  </span>
                  <span>
                    <i className="fas fa-star text-yellow-500"></i> {hotel.rating}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    <i className="fas fa-map-marker-alt text-blue-500"></i>{' '}
                    {hotel.location}
                  </p>
                  <span className="text-lg font-bold text-blue-600">
                    {hotel.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelSection;
