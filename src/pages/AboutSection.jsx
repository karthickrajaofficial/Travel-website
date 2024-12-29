import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// Define the animation variants
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
    <>
      {/* Main Section */}
      <div className="py-16 relative bg-gradient-to-l from-blue-200 via-blue-400 to-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* About Content */}
            <div>
              {/* Section Header */}
              <div className="mb-6">
                <motion.span
                  variants={textVariants}
                  className="text-sm font-medium text-gray-600 uppercase tracking-wide"
                >
                  About Us
                </motion.span>
                <motion.h2
                  variants={textVariants}
                  className="text-4xl font-extrabold text-white mt-2 leading-tight"
                >
                  World’s Best Travel Agency 
                </motion.h2>
              </div>

              {/* Section Description */}
              <div className="mb-6">
                <motion.p
                  variants={textVariants}
                  className="text-gray-100 mb-4 text-lg"
                >
                  We are committed to delivering exceptional travel experiences with a focus on quality, sustainability, and customer satisfaction.
                </motion.p>

                <motion.ul
                  variants={textVariants}
                  className="list-disc pl-5 text-gray-100 space-y-2"
                >
                  <li>Providing top-tier travel solutions for all kinds of travelers.</li>
                  <li>Leading in curating unique and sustainable travel experiences.</li>
                  <li>Dedicated to customer satisfaction and growth in the travel industry.</li>
                </motion.ul>
              </div>
            </div>

            {/* About Image */}
            <div className="hidden lg:block">
              <motion.img
                variants={imageVariants}
                src="/paris1.jpg"
                alt="Travel Agency"
                className="w-full h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </motion.div>
        </div>
      {/* Counter Section */}
      <div className=" text-black py-12">
        <p className="flex items-center justify-center mb-10 text-5xl font-bold text-center">
          Our Archeivements
        </p>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={counterVariants}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col items-center justify-center text-center"
          >
            <p className="text-5xl font-semibold text-yellow-300">
              <CountUp
                start={0}
                end={20}
                suffix="+"
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </p>
            <p className="mt-2 text-lg">Years of Experience</p>
          </motion.div>

          <motion.div
            variants={counterVariants}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col items-center justify-center text-center"
          >
            <p className="text-5xl font-semibold text-yellow-300">
              <CountUp
                end={100}
                separator=","
                suffix="+"
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </p>
            <p className="mt-2 text-lg">Destinations Covered</p>
          </motion.div>

          <motion.div
            variants={counterVariants}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col items-center justify-center text-center"
          >
            <p className="text-5xl font-semibold text-yellow-300">
              <CountUp
                end={100}
                suffix="K+"
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </p>
            <p className="mt-2 text-lg">Happy Customers</p>
          </motion.div>
        </div>
      </div>
      </div>

    </>
  );
};

export default AboutSection;
