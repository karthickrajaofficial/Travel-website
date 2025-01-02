import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Accreditations = () => {
  const accreditations = [
    {
      title: "LUXURY TRAVEL LEADER",
      year: "2024",
      issuer: "European Travel Association",
      description: "Recognition for exceptional standards in luxury travel services"
    },
    {
      title: "HERITAGE PRESERVATION",
      year: "2023",
      issuer: "Cultural Heritage Council",
      description: "Excellence in preserving and showcasing European cultural heritage"
    },
    {
      title: "SUSTAINABLE LUXURY",
      year: "2023",
      issuer: "Sustainable Tourism Board",
      description: "Outstanding commitment to environmental responsibility"
    },
    {
      title: "SERVICE EXCELLENCE",
      year: "2022",
      issuer: "International Hospitality Awards",
      description: "Highest standards in customer service and satisfaction"
    }
  ];

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
                <span className="text-yellow-400 tracking-[0.3em] text-sm">EXCELLENCE</span>
                <div className="h-px w-12 bg-yellow-400"></div>
              </div>
              <h2 className="text-6xl font-light text-white tracking-wider mb-6">ACCREDITATIONS</h2>
            </div>
          </motion.div>

          <motion.p
            variants={textVariants}
            className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed"
          >
            Our commitment to excellence has been recognized by the most prestigious
            institutions in the luxury travel industry.
          </motion.p>
        </motion.div>

        {/* Accreditations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {accreditations.map((accreditation, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="border border-yellow-400/20 p-12 rounded-lg hover:bg-blue-900/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-white text-xl font-light tracking-wider">
                  {accreditation.title}
                </h3>
                <span className="text-yellow-400 text-lg font-light">
                  {accreditation.year}
                </span>
              </div>
              <div className="space-y-4">
                <p className="text-yellow-400/70 text-sm tracking-wider">
                  {accreditation.issuer}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {accreditation.description}
                </p>
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
            "Setting the benchmark for excellence in luxury travel experiences across Europe."
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default Accreditations;