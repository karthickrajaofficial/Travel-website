import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home'; // Home page (with all sections)
import Tours from './pages/Tours'; 
import Contact from './pages/Contact';
import Details from './components/Details';
import AboutSection from './pages/AboutSection';
import TestimonialsSection from './pages/TestimonialsSection';
import TourSection from './components/TourSection';
import Tour from './components/Tour';

const App = () => {
  return (
    <Router> {/* Wrap the entire app with Router */}
      <Navbar />
      
      <Routes>
     
        <Route path="/home" element={<Home />} /> 
        <Route path="/" element={<Home />} /> 
       <Route path="/tours" element={<Tours />} /> 
       <Route path="/about" element={<AboutSection />} /> 
        <Route path="/contact" element={<Contact />} />  
        <Route path="/Testimonials" element={<TestimonialsSection />} />  
        {/* <Route path="/TourSection" element={<TourSection />} /> */}
        <Route path="/tours/:packageName" element={<TourSection />} />
        {/* <Route path="/TourSection" element={<Tour/>} /> */}
        <Route path="/details/:id" element={<Details />}/>
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;
