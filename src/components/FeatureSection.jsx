import React from 'react';
import { Link } from 'react-router-dom';
const FeatureSection = () => {
  return (
    <div className="feature py-12 px-20 relative">
      {/* Background Heading */}
      <div className="absolute top-0 z-[-1] left-0 w-full text-center font-semibold text-red-200 text-[calc(3rem+5vw)] lg:text-[25rem] leading-none hidden lg:block">
        Europe
      </div>

      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mt-10 mb-20">
          <span className="text-4xl font-semibold text-gray-600">European Tours</span>
          <h2 className="text-6xl font-bold mt-5 text-gray-800">Beautiful Places Around the World</h2>
        </div>

        {/* Destination Cards */}
     

<div className="section-1">
 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
   {/* Paris */}
   <div className="bg-white shadow-md rounded-lg overflow-hidden relative group">
    {/* <Link to="/tours/paris" className="block"> */}
      <img
        src="feature/01.jpg"
        alt="Explore Paris"
        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
      />
      <div className="bg-blue-600 text-white px-4 py-2 absolute top-4 left-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
        3 Packages
      </div>
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-xl font-bold mb-1">Paris</h2>
        <p className="text-sm">Starting From ₹ 1,20,000</p>
      </div>
    {/* </Link> */}
  </div>

  {/* Brazil */}
  <div>
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative group mb-6">
      {/* <Link to="/tours/brazil" className="block"> */}
        <img
          src="feature/Switzerland.jpg"
          alt="Explore Switzerland "
          className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
        />
        <div className="bg-green-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
          8 Packages
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-xl font-bold mb-1">Switzerland</h2>
          <p className="text-sm">Starting From ₹ 1,90,000</p>
        </div>
      {/* </Link> */}
    </div>

    <div className="bg-white shadow-md rounded-lg overflow-hidden relative group">
      {/* <Link to="/tours/japan" className="block"> */}
        <img
          src="feature/Italy.jpg"
          alt="Italy "
          className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
        />
        <div className="bg-red-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
          3 Packages
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-xl font-bold mb-1">Italy</h2>
          <p className="text-sm">Starting From ₹1,50,000</p>
        </div>
      {/* </Link> */}
    </div>
  </div>

  {/* London */}
  <div className="bg-white shadow-md rounded-lg  overflow-hidden relative group">
    {/* <Link to="/tours/london" className="block"> */}
      <img
        src="feature/London.jpg"
        alt="Explore London"
        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
      />
      <div className="bg-purple-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-blue-600 transition duration-300 ease-in-out">
        3 Packages
      </div>
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-xl font-bold mb-1">London</h2>
        <p className="text-sm">Starting From ₹1,50,000</p>
      </div>
    {/* </Link> */}
  </div>
 </div>
</div>
<div className="py-5 section-2">
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
   {/* Paris */}
   <div className="bg-white shadow-md rounded-lg overflow-hidden relative group">
    {/* <Link to="/tours/paris" className="block"> */}
      <img
        src="feature/01.jpg"
        alt="Explore Paris"
        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
      />
      <div className="bg-blue-600 text-white px-4 py-2 absolute top-4 left-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
        3 Packages
      </div>
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-xl font-bold mb-1">Paris</h2>
        <p className="text-sm">Starting From ₹ 1,20,000</p>
      </div>
    {/* </Link> */}
  </div>

  {/* Brazil */}
  <div>
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative group mb-6">
      {/* <Link to="/tours/brazil" className="block"> */}
        <img
          src="feature/Switzerland.jpg"
          alt="Explore Switzerland "
          className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
        />
        <div className="bg-green-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
          8 Packages
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-xl font-bold mb-1">Switzerland</h2>
          <p className="text-sm">Starting From ₹ 1,90,000</p>
        </div>
      {/* </Link> */}
    </div>

    <div className="bg-white shadow-md rounded-lg overflow-hidden relative group">
      {/* <Link to="/tours/japan" className="block"> */}
        <img
          src="feature/Italy.jpg"
          alt="Italy "
          className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
        />
        <div className="bg-red-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
          3 Packages
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-xl font-bold mb-1">Italy</h2>
          <p className="text-sm">Starting From ₹1,50,000</p>
        </div>
      {/* </Link> */}
    </div>
  </div>

  {/* London */}
  <div className="bg-white shadow-md rounded-lg overflow-hidden relative group">
    {/* <Link to="/tours/london" className="block"> */}
      <img
        src="feature/London.jpg"
        alt="Explore London"
        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
      />
      <div className="bg-purple-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-blue-600 transition duration-300 ease-in-out">
        3 Packages
      </div>
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-xl font-bold mb-1">London</h2>
        <p className="text-sm">Starting From ₹1,50,000</p>
      </div>
    {/* </Link> */}
  </div>
 </div>
</div>

      </div>
    </div>
  );
};

export default FeatureSection;
