import React from 'react';
import { useParams } from 'react-router-dom';

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
  // Add more hotel details
];

const Details = () => {
  const { id } = useParams();
  const hotel = hotels.find((hotel) => hotel.id === parseInt(id));

  if (!hotel) {
    return <p>Hotel not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-4">{hotel.title}</h1>
      <img src={hotel.image} alt={hotel.title} className="w-full rounded-lg mb-4" />
      <p className="text-gray-700 mb-4">{hotel.description}</p>
      <p>
        <strong>Location:</strong> {hotel.location}
      </p>
      <p>
        <strong>Price:</strong> {hotel.price}
      </p>
      <p>
        <strong>Rating:</strong> {hotel.rating}
      </p>
    </div>
  );
};

export default Details;
