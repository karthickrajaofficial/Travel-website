import React from 'react';
import { useParams } from 'react-router-dom';
import { tourPackages, packageDescriptions } from '../data/packages';  // Update the path to match your project structure
import Banner from '../components/Banner';

const TourDetail = () => {
  const { tourId } = useParams();  // Assuming you're using react-router to get the tour ID
  const tour = tourPackages
    .flatMap(tourPackage => tourPackage.tours)  // Renamed 'package' to 'tourPackage'
    .find(tour => tour.id === parseInt(tourId)); // Find the tour by ID

  // If tour is undefined, handle gracefully
  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
   <>
   {/* <Banner/> */}
   <div>
      <h2>{tour.name}</h2>
      <p>{tour.description}</p>
      <p>Price: {tour.price}</p>
      <p>Duration: {tour.duration}</p>
      <img src={tour.image} alt={tour.name} />
    </div>
   </>
  );
};

export default TourDetail;
