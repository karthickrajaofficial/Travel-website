import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const counterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Brand Header */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-24 mt-10"
        >
          <motion.div variants={textVariants} className="mb-8">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-yellow-400"></div>
                <span className="text-yellow-400 tracking-[0.3em] text-sm">EST. 1999</span>
                <div className="h-px w-12 bg-yellow-400"></div>
              </div>
              <h1 className="text-6xl sm:text-8xl font-light text-white tracking-tight mb-6">ROYAL</h1>
              <h2 className="text-5xl sm:text-7xl font-light text-yellow-400 tracking-wider">EUROPA DMC</h2>
            </div>
          </motion.div>

          <motion.p 
            variants={textVariants}
            className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed"
          >
            Your trusted partner in creating exceptional travel experiences across Europe and beyond. 
            Headquartered in Barcelona, Spain, we specialize in providing comprehensive tourism solutions.
          </motion.p>
        </motion.div>

        {/* Image and Features Section */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24"
        >
          {/* Left Column - Image */}
          <motion.div variants={imageVariants} className="relative">
            <div className="absolute inset-0 border border-yellow-400/20"></div>
            <div className="absolute inset-4 border border-yellow-400/20"></div>
            <img
              src="/paris1.jpg"
              alt="Royal Europa DMC Experience"
              className="relative w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          {/* Right Column - Features */}
          <div className="space-y-12 py-8">
            <motion.h3 
              variants={textVariants}
              className="text-2xl text-white font-light tracking-wider"
            >
              WHY CHOOSE <span className="text-yellow-400">ROYAL EUROPA DMC</span>
            </motion.h3>

            <motion.div variants={textVariants} className="space-y-12">
              {[
                {
                  title: "EXPERTISE & EXPERIENCE",
                  desc: "Over 24 years of global travel industry experience with deep understanding of European destinations."
                },
                {
                  title: "PERSONALIZED SERVICE",
                  desc: "Customized itineraries that showcase Europe's rich history, vibrant culture, and breathtaking landscapes."
                },
                {
                  title: "COMPREHENSIVE SOLUTIONS",
                  desc: "Seamless travel logistics including transportation, accommodations, guided tours, and unique experiences."
                }
              ].map((feature, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-8 p-8 transition-all duration-300 hover:bg-blue-900/20">
                    <span className="text-yellow-400/50 font-light text-xl">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h4 className="text-white text-lg font-light tracking-wider mb-3">{feature.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="border-t border-b border-yellow-400/20 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { value: 24, label: "YEARS OF EXCELLENCE" },
              { value: 100, label: "DESTINATIONS COVERED" },
              { value: 50, label: "THOUSAND HAPPY TRAVELERS" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={counterVariants}
                initial="hidden"
                whileInView="visible"
                className="text-center"
              >
                <div className="mb-4">
                  <span className="text-6xl font-light text-yellow-400">
                    <CountUp
                      start={0}
                      end={stat.value}
                      suffix="+"
                      duration={3}
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                    />
                  </span>
                </div>
                <div className="text-gray-400 tracking-widest text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="py-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-2xl text-white font-light tracking-wider mb-6">OUR LEADERSHIP</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Founded by visionaries who bring unparalleled experience and global insights to create exceptional travel experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "S. Saravanan", role: "Founder" },
              { name: "Suganthi Saravanan", role: "Co-Founder" },
              { name: "Gowtham Saravanan", role: "Director" }
            ].map((leader, index) => (
              <motion.div
                key={index}
                variants={textVariants}
                className="text-center p-6"
              >
                <h4 className="text-white text-xl font-light tracking-wider mb-2">{leader.name}</h4>
                <p className="text-yellow-400 text-sm tracking-wider">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div 
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          className="text-center mt-12"
        >
          <blockquote className="text-2xl font-light text-white leading-relaxed max-w-4xl mx-auto">
            "Discover Europe with Us – Where Every Journey Begins with Excellence!"
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;