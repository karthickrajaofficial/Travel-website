import React from 'react';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import PackageSection from '../components/PackageSection';
import GallerySection from '../components/GallerySection';
import OfferSection from '../components/OfferSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureSection />
      <PackageSection />
      {/* Uncomment if you want to display these sections */}
      {/* <TravelSection /> */}
      {/* <PackageSection /> */}
      <GallerySection />
      <OfferSection />
      {/* <Testimonial /> */}
    </div>
  );
};

export default Home;
