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
// import TourSection from './componentsection';
// import Tour from './components/Tour';
// import TourPackages from './components/TourPackages';
// import TourDetails from './components/TourCategory';
// import TourCategory from './components/TourCategory';
import TourDetail from "./pages/TourDetail";
import GallerySection from "./components/GallerySection";
import TopBar from "./components/TopBar";
import PackageDetails from "./components/PackageDetails";
import PackageDetail from "./components/PackageDetail";
import CategoryPage from "./pages/CategoryPage";
import ProductsPage from "./pages/ProductsPage";
import Accreditations from "./pages/Accreditations";
import Work from "./pages/Work";
import TestimonialsSection from "./pages/TestimonialsSection";

const App = () => {
  return (
    <Router>
        {/* <div className="min-h-screen bg-blue-50"> */}
      {/* <TopBar /> */}
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/testimonials" element={<GallerySection />} /> */}
        <Route path="/testimonials" element={<TestimonialsSection/>} />
        {/* <Route path="/tour/:tourId" element={<TourDetail />} /> */}
        {/* <Route path="/details/:id" element={<Details />} /> */}
        <Route path="/:packageId" element={<PackageDetails />} />
        <Route path="/:category/:subPackage" element={<PackageDetail />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/packages/:type" element={<ProductsPage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/accreditations-&-awards" element={<Accreditations />} />
        <Route path="/work" element={<Work />} />
        {/* <Route path="/" element={<TourPackages />} /> */}
        {/* <Route path="/:categoryName" element={<TourCategory />} /> */}
        {/* <Route path="/:categoryName" element={<TourCategory />} />   */}
        {/* <Route path="ection" element={<TourSection />} /> */}
        {/* <Route path="/:packageName" element={<TourSection />} /> */}
        {/* <Route path="ection" element={<Tour/>} /> */}
      </Routes>

      <Footer />
      {/* </div> */}
    </Router>
  );
};

export default App;
