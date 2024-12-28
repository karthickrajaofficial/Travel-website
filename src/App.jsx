import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Components
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Contact from "./pages/Contact";
import Details from "./components/Details";
import AboutSection from "./pages/AboutSection";
// import TestimonialsSection from './pages/TestimonialsSection';
// import TourSection from './components/TourSection';
// import Tour from './components/Tour';
// import TourPackages from './components/TourPackages';
// import TourDetails from './components/TourCategory';
// import TourCategory from './components/TourCategory';
import TourDetail from "./pages/TourDetail";
import GallerySection from "./components/GallerySection";
import TopBar from "./components/TopBar";
import PackageDetails from "./components/PackageDetails";
import PackageDetail from "./components/PackageDetail";

const App = () => {
  return (
    <Router>
      <TopBar />
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<GallerySection />} />
        {/* <Route path="/tour/:tourId" element={<TourDetail />} /> */}
        {/* <Route path="/details/:id" element={<Details />} /> */}
        <Route path="/:packageId" element={<PackageDetails />} />
        <Route path="/:category/:subPackage" element={<PackageDetail />} />
        <Route path="/about" element={<AboutSection />} />
        {/* <Route path="/" element={<TourPackages />} /> */}
        {/* <Route path="/:categoryName" element={<TourCategory />} /> */}
        {/* <Route path="/tours/:categoryName" element={<TourCategory />} />   */}
        {/* <Route path="/TourSection" element={<TourSection />} /> */}
        {/* <Route path="/tours/:packageName" element={<TourSection />} /> */}
        {/* <Route path="/TourSection" element={<Tour/>} /> */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
