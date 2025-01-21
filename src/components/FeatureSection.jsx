import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeatureSection = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="feature pb-16 py-12 pt-20 px-4 sm:px-20 relative bg-blue-950">
      {/* Background Heading */}
      <div className="absolute top-10 z-[1] left-0 w-full text-center font-semibold text-[#d1d1dc] text-[calc(3rem+5vw)] lg:text-[23rem] leading-none hidden lg:block opacity-50">
        Europe
      </div>

      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mt-10 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <span className="text-sm text-yellow-400 tracking-widest uppercase">Discover</span>
          <h2 className="text-4xl font-light text-white mt-4 mb-6 tracking-wider">Beautiful Places Of Europe</h2>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Experience extraordinary journeys across Europe's most prestigious destinations
          </p>
        </motion.div>

        {/* Sticky Section 1 */}
        <div className="section-1 sticky top-0 z-10">
          {/* Mobile Layout */}
          <div className="sm:hidden grid grid-cols-2 gap-4">
  <div className="rounded-lg overflow-hidden relative group">
    <Link to="/paris">
      <img
        src="feature/01.jpg"
        alt="Explore Paris"
        className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-300"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-2 bg-black/50">
        <h2 className="text-lg font-bold">Paris</h2>
        {/* <p className="text-xs">Starting From $ 1,20,000</p> */}
      </div>
    </Link>
  </div>

  <div className="rounded-lg overflow-hidden relative group">
    <Link to="/Switzerland">
      <img
        src="feature/Switzerland.jpg"
        alt="Explore Switzerland"
        className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-300"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-2 bg-black/50">
        <h2 className="text-lg font-bold">Switzerland</h2>
        {/* <p className="text-xs">Starting From $ 1,90,000</p> */}
      </div>
    </Link>
  </div>

  <div className="rounded-lg overflow-hidden relative group">
    <Link to="/Italy">
      <img
        src="feature/Italy.jpg"
        alt="Italy"
        className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-300"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-2 bg-black/50">
        <h2 className="text-lg font-bold">Italy</h2>
        {/* <p className="text-xs">Starting From $1,50,000</p> */}
      </div>
    </Link>
  </div>

  <div className="rounded-lg overflow-hidden relative group">
    <Link to="/london">
      <img
        src="feature/London.jpg"
        alt="Explore London"
        className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-300"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-2 bg-black/50">
        <h2 className="text-lg font-bold">London</h2>
        {/* <p className="text-xs">Starting From $1,50,000</p> */}
      </div>
    </Link>
  </div>
</div>


          {/* Desktop Layout */}
          <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className=" rounded-lg overflow-hidden relative group">
              <Link to="/paris">
                <img
                  src="feature/01.jpg"
                  alt="Explore Paris"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
                />
               {/* <div className="bg-blue-900/50 backdrop-blur-sm text-yellow-400 px-4 py-2 absolute top-4 right-4 rounded-full border border-yellow-400/20 text-sm tracking-wide group-hover:bg-yellow-400 group-hover:text-blue-950 transition-all duration-300">
                 3 Packages
                 </div> */}
                 <div className="absolute bottom-3 left-3 p-3 rounded-lg bg-blue-900/50 backdrop-blur-sm border border-yellow-400/20">
                 <h2 className="text-white font-light tracking-wider text-base">Paris</h2>
                  {/* <p className="text-gray-400 text-xs tracking-wide">Starting From € 190,000</p> */}
                 </div>
              </Link>
            </div>

            <div>
              <div className=" rounded-lg overflow-hidden relative group mb-8">
                <Link to="/Switzerland">
                  <img
                    src="feature/Switzerland.jpg"
                    alt="Explore Switzerland"
                    className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                  {/* <div className="bg-blue-900/50 backdrop-blur-sm text-yellow-400 px-4 py-2 absolute top-4 right-4 rounded-full border border-yellow-400/20 text-sm tracking-wide group-hover:bg-yellow-400 group-hover:text-blue-950 transition-all duration-300">
                 3 Packages
                 </div> */}
                  <div className="absolute bottom-3 left-3 p-3 rounded-lg bg-blue-900/50 backdrop-blur-sm border border-yellow-400/20">
                 <h2 className="text-white font-light tracking-wider text-base">Switzerland</h2>
                  {/* <p className="text-gray-400 text-xs tracking-wide">Starting From € 190,000</p> */}
                 </div>
                </Link>
              </div>

              <div className=" rounded-lg overflow-hidden relative group">
                <Link to="/Italy">
                  <img
                    src="feature/Italy.jpg"
                    alt="Italy"
                    className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                  {/* <div className="bg-blue-900/50 backdrop-blur-sm text-yellow-400 px-4 py-2 absolute top-4 right-4 rounded-full border border-yellow-400/20 text-sm tracking-wide group-hover:bg-yellow-400 group-hover:text-blue-950 transition-all duration-300">
                 3 Packages
                 </div> */}
                 <div className="absolute bottom-3 left-3 p-3 rounded-lg bg-blue-900/50 backdrop-blur-sm border border-yellow-400/20">
                 <h2 className="text-white font-light tracking-wider text-base">Italy</h2>
                  {/* <p className="text-gray-400 text-xs tracking-wide">Starting From € 190,000</p> */}
                 </div>
                </Link>
              </div>
            </div>

            <div className=" rounded-lg overflow-hidden relative group">
              <Link to="/london">
                <img
                  src="feature/London.jpg"
                  alt="Explore London"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
                />
               {/* <div className="bg-blue-900/50 backdrop-blur-sm text-yellow-400 px-4 py-2 absolute top-4 right-4 rounded-full border border-yellow-400/20 text-sm tracking-wide group-hover:bg-yellow-400 group-hover:text-blue-950 transition-all duration-300">
                 3 Packages
                 </div> */}
                 <div className="absolute bottom-3 left-3 p-3 rounded-lg bg-blue-900/50 backdrop-blur-sm border border-yellow-400/20">
                 <h2 className="text-white font-light tracking-wider text-base">London</h2>
                  {/* <p className="text-gray-400 text-xs tracking-wide">Starting From € 190,000</p> */}
                 </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Scrolling Section 2 */}
        <div className="section-2 relative z-20 bg-blue-950 mt-8 sm:mt-[50vh]">
          {/* Mobile Layout */}
          <div className="sm:hidden grid grid-cols-2 gap-4">
  <div className="rounded-lg overflow-hidden relative group">
    <Link to="/germany">
      <img
        src="feature/germany.jpg"
        alt="Explore Germany"
        className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-300"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-2 bg-black/50">
        <h2 className="text-lg font-bold">Germany</h2>
        {/* <p className="text-xs">Starting From $1,20,000</p> */}
      </div>
    </Link>
  </div>

  <div className="rounded-lg overflow-hidden relative group">
    <Link to="/finland">
      <img
        src="feature/finland.jpg"
        alt="Explore Finland"
        className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-300"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-2 bg-black/50">
        <h2 className="text-lg font-bold">Finland</h2>
        {/* <p className="text-xs">Starting From $1,90,000</p> */}
      </div>
    </Link>
  </div>

  <div className="rounded-lg overflow-hidden relative group">
    <Link to="/greece">
      <img
        src="feature/greece.jpg"
        alt="Explore Greece"
        className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-300"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-2 bg-black/50">
        <h2 className="text-lg font-bold">Greece</h2>
        {/* <p className="text-xs">Starting From $1,50,000</p> */}
      </div>
    </Link>
  </div>

  <div className="rounded-lg overflow-hidden relative group">
    <Link to="/iceland">
      <img
        src="feature/iceland.jpg"
        alt="Explore Iceland"
        className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-300"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-2 bg-black/50">
        <h2 className="text-lg font-bold">Iceland</h2>
        {/* <p className="text-xs">Starting From $1,50,000</p> */}
      </div>
    </Link>
  </div>
</div>


          {/* Desktop Layout */}
          <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden relative group">
              <Link to="/germany">
                <img
                  src="feature/germany.jpg"
                  alt="Explore Germany"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
                />
               {/* <div className="bg-blue-900/50 backdrop-blur-sm text-yellow-400 px-4 py-2 absolute top-4 right-4 rounded-full border border-yellow-400/20 text-sm tracking-wide group-hover:bg-yellow-400 group-hover:text-blue-950 transition-all duration-300">
                 3 Packages
                 </div> */}
                 <div className="absolute bottom-3 left-3 p-3 rounded-lg bg-blue-900/50 backdrop-blur-sm border border-yellow-400/20">
                 <h2 className="text-white font-light tracking-wider text-base">Germany</h2>
                  {/* <p className="text-gray-400 text-xs tracking-wide">Starting From € 190,000</p> */}
                 </div>
              </Link>
            </div>

            <div>
              <div className="bg-white rounded-lg overflow-hidden relative group mb-8">
                <Link to="/finland">
                  <img
                    src="feature/finland.jpg"
                    alt="Explore Finland"
                    className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                 {/* <div className="bg-blue-900/50 backdrop-blur-sm text-yellow-400 px-4 py-2 absolute top-4 right-4 rounded-full border border-yellow-400/20 text-sm tracking-wide group-hover:bg-yellow-400 group-hover:text-blue-950 transition-all duration-300">
                 3 Packages
                 </div> */}
                 <div className="absolute bottom-3 left-3 p-3 rounded-lg bg-blue-900/50 backdrop-blur-sm border border-yellow-400/20">
                 <h2 className="text-white font-light tracking-wider text-base">Finland</h2>
                  {/* <p className="text-gray-400 text-xs tracking-wide">Starting From € 190,000</p> */}
                 </div>
                </Link>
              </div>

              <div className="bg-white rounded-lg overflow-hidden relative group">
                <Link to="/greece">
                  <img
                    src="feature/greece.jpg"
                    alt="Explore Greece"
                    className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                 {/* <div className="bg-blue-900/50 backdrop-blur-sm text-yellow-400 px-4 py-2 absolute top-4 right-4 rounded-full border border-yellow-400/20 text-sm tracking-wide group-hover:bg-yellow-400 group-hover:text-blue-950 transition-all duration-300">
                 3 Packages
                 </div> */}
                 <div className="absolute bottom-3 left-3 p-3 rounded-lg bg-blue-900/50 backdrop-blur-sm border border-yellow-400/20">
                 <h2 className="text-white font-light tracking-wider text-base">Greece</h2>
                  {/* <p className="text-gray-400 text-xs tracking-wide">Starting From € 190,000</p> */}
                 </div>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden relative group">
              <Link to="/iceland">
                <img
                  src="feature/iceland.jpg"
                  alt="Explore Iceland"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
                />
                {/* <div className="bg-blue-900/50 backdrop-blur-sm text-yellow-400 px-4 py-2 absolute top-4 right-4 rounded-full border border-yellow-400/20 text-sm tracking-wide group-hover:bg-yellow-400 group-hover:text-blue-950 transition-all duration-300">
                 3 Packages
                 </div> */}
                 <div className="absolute bottom-3 left-3 p-3 rounded-lg bg-blue-900/50 backdrop-blur-sm border border-yellow-400/20">
                 <h2 className="text-white font-light tracking-wider text-base">Iceland</h2>
                  {/* <p className="text-gray-400 text-xs tracking-wide">Starting From € 190,000</p> */}
                 </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

