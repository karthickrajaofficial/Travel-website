// import React from 'react'
// // import Banner from '../components/Banner'

// const TestimonialsSection = () => {
//   return (
//     <div>
//         {/* <Banner/> */}
        
//     </div>
//   )
// }

// export default TestimonialsSection
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      rating: 5,
      quote: "A journey that transcended ordinary luxury travel. Each moment was crafted with precision and artistry.",
      author: "Victoria Chen",
      title: "Creative Director",
      location: "Paris, France",
      image: "/api/placeholder/400/300",
      tags: ["Cultural Tours", "Luxury Accommodations"]
    },
    {
      rating: 5,
      quote: "Their attention to detail transformed our European adventure into a masterpiece of experiential travel.",
      author: "Marcus Thompson",
      title: "Tech Entrepreneur",
      location: "San Francisco, USA",
      image: "/api/placeholder/400/300",
      tags: ["Private Jets", "Exclusive Access"]
    },
    {
      rating: 5,
      quote: "An unparalleled blend of sophistication and authentic experiences that exceeded all expectations.",
      author: "Sofia Rodriguez",
      title: "Gallery Curator",
      location: "Madrid, Spain",
      image: "/api/placeholder/400/300",
      tags: ["Art Tours", "Fine Dining"]
    },
    {
      rating: 5,
      quote: "Redefining luxury travel with experiences that speak to both the heart and the sophisticated traveler.",
      author: "Alexander Petrov",
      title: "Investment Director",
      location: "Moscow, Russia",
      image: "/api/placeholder/400/300",
      tags: ["Yacht Charters", "Private Events"]
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-blue-400 text-sm tracking-[0.3em] font-light">
              CLIENT EXPERIENCES
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-light text-white mb-8"
          >
            Testimonials
          </motion.h2>
        </div>

        {/* Main Content */}
        <div className="relative">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg transform group-hover:scale-105 transition-transform duration-500"></div>
              <img
                src={testimonials[activeSlide].image}
                alt="Luxury Experience"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <div className="flex gap-2 mb-3">
                  {testimonials[activeSlide].tags.map((tag, index) => (
                    <span key={index} className="text-xs text-blue-300 bg-blue-950/50 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="relative">
              <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>
              
              <div className="flex mb-6">
                {[...Array(testimonials[activeSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-blue-400 fill-blue-400" />
                ))}
              </div>

              <blockquote className="text-2xl text-white font-light leading-relaxed mb-8">
                "{testimonials[activeSlide].quote}"
              </blockquote>

              <div className="space-y-2">
                <h4 className="text-xl text-white">
                  {testimonials[activeSlide].author}
                </h4>
                <p className="text-blue-400">
                  {testimonials[activeSlide].title}
                </p>
                <p className="text-slate-400 text-sm">
                  {testimonials[activeSlide].location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-blue-400/20 text-blue-400 hover:bg-blue-400/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? "bg-blue-400 w-6"
                      : "bg-blue-400/30 hover:bg-blue-400/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-blue-400/20 text-blue-400 hover:bg-blue-400/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;