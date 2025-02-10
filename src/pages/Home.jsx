import React from 'react';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import PackageSection from '../components/PackageSection';
import GallerySection from '../components/GallerySection';
import OfferSection from '../components/OfferSection';
import ExperienceCategories from './Categories';
import OverlayCategories from '../components/OverlayCategories';
import { ThreeDPhotoCarouselDemo } from '../components/ThreeDPhotoCarouselDemo';
import ImageTrailDemo from '../components/ImageTrailDemo';
import RollingGallery from '../components/animations/RollingGallery';

const Home = () => {
  return (
    <div>
      
      <Hero />
      <OverlayCategories/>
      <ThreeDPhotoCarouselDemo/>
      <FeatureSection />
      <PackageSection />

      {/* Uncomment if you want to display these sections */}
      {/* <TravelSection /> */}
      {/* <PackageSection /> */}
      <GallerySection />
      {/* <ImageTrailDemo/> */}
      <OfferSection />
      {/* <Testimonial /> */}
    </div>
  );
};

export default Home;
