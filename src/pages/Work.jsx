import React, { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Estates", "Experiences", "Events"];

  const projects = [
    {
      title: "CHÂTEAU DE VERSAILLES",
      category: "Estates",
      location: "France",
      description: "Exclusive private tours and luxury accommodation arrangements",
      image: "paris1.jpg"
    },
    {
      title: "ALPINE ELEGANCE",
      category: "Experiences",
      location: "Switzerland",
      description: "Curated winter experiences in prestigious Swiss resorts",
      image: "paris2.jpg"
    },
    {
      title: "VENETIAN MASQUERADE",
      category: "Events",
      location: "Italy",
      description: "Private access to Venice's most exclusive carnival celebrations",
      image: "paris3.jpg"
    },
    {
      title: "ROYAL VIENNA",
      category: "Estates",
      location: "Austria",
      description: "Luxury stays in historic Viennese palaces",
      image: "paris4.jpg"
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-blue-950">
      <div className="max-w-7xl mx-auto px-8 py-24">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-24"
        >
          <motion.div variants={textVariants} className="mb-8">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-yellow-400"></div>
                <span className="text-yellow-400 tracking-[0.3em] text-sm">PORTFOLIO</span>
                <div className="h-px w-12 bg-yellow-400"></div>
              </div>
              <h2 className="text-6xl font-light text-white tracking-wider mb-6">OUR WORK</h2>
            </div>
          </motion.div>

          <motion.p
            variants={textVariants}
            className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed"
          >
            Discover our collection of distinguished properties and tailored experiences
            across Europe's most coveted destinations.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center gap-8 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm tracking-wider px-6 py-2 transition-all duration-300 ${
                activeCategory === category
                  ? "text-yellow-400 border-b border-yellow-400"
                  : "text-gray-400 hover:text-yellow-400"
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 border border-yellow-400/20"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 p-12 flex flex-col justify-between">
                  <div>
                    <span className="text-yellow-400 text-sm tracking-wider">
                      {project.category} | {project.location}
                    </span>
                    <h3 className="text-white text-2xl font-light tracking-wider mt-2">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          className="text-center mt-24"
        >
          <blockquote className="text-xl font-light text-white leading-relaxed max-w-4xl mx-auto italic">
            "Each destination tells a story of unparalleled luxury and distinctive character."
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;