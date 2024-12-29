// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const FeatureSection = () => {
//   const fadeInVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <div className="feature py-12 px-20 relative">
//       {/* Background Heading */}
//       <div className="absolute top-0  z-[-1] left-0 w-full text-center font-semibold text-blue-200 text-[calc(3rem+5vw)] lg:text-[23rem] leading-none hidden lg:block">
//         Europe
//       </div>

//       <div className="container mx-auto">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mt-10 mb-20"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInVariants}
//         >
//           <span className="text-4xl font-semibold mb-5 text-gray-600">
//             Explore
//           </span>
//           <h2 className="text-6xl font-bold mt-5 text-gray-800">
//              Beautiful Places Of
//           </h2>
//           <h2 className="text-6xl font-bold mt-5 text-gray-800">
//              Europe
//           </h2>
          
//         </motion.div>

//         <div className="section-1   top-0  bg-white">
//         {/* <div className="section-1  sticky top-0 z-[-1] bg-white"> */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//           <div className="bg-white rounded-lg overflow-hidden relative group">
//   <Link to="/paris">
//     <img
//       src="feature/01.jpg"
//       alt="Explore Paris"
//       className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//     />
//     <div className="bg-blue-600 text-white px-4 py-2 absolute top-4 left-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//       3 Packages
//     </div>
//     <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//       <h2 className="text-xl font-bold mb-1">Paris</h2>
//       <p className="text-sm">Starting From ₹ 1,20,000</p>
//     </div>
//   </Link>
// </div>

//             <div>
//               <div className="bg-white rounded-lg overflow-hidden relative group mb-8">
//   <Link to="/Switzerland">

//                 <img
//                   src="feature/Switzerland.jpg"
//                   alt="Explore Switzerland"
//                   className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                 />
//                 <div className="bg-green-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//                   8 Packages
//                 </div>
//                 <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                   <h2 className="text-xl font-bold mb-1">Switzerland</h2>
//                   <p className="text-sm">Starting From ₹ 1,90,000</p>
//                 </div>
//                 </Link>
//               </div>

//               <div className="bg-white rounded-lg overflow-hidden relative group">
//               <Link to="/Italy">

//                 <img
//                   src="feature/Italy.jpg"
//                   alt="Italy"
//                   className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                 />
//                 <div className="bg-red-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//                   3 Packages
//                 </div>
//                 <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                   <h2 className="text-xl font-bold mb-1">Italy</h2>
//                   <p className="text-sm">Starting From ₹1,50,000</p>
//                 </div>
//                 </Link>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg overflow-hidden relative group">
//             <Link to="/london">

//               <img
//                 src="feature/London.jpg"
//                 alt="Explore London"
//                 className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//               />
//               <div className="bg-purple-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-blue-600 transition duration-300 ease-in-out">
//                 3 Packages
//               </div>
//               <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                 <h2 className="text-xl font-bold mb-1">London</h2>
//                 <p className="text-sm">Starting From ₹1,50,000</p>
//               </div>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="py-10 section-2 bg-white">
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//             <div className="bg-white rounded-lg overflow-hidden relative group">
//             <Link to="/germany">

//               <img
//                 src="feature/germany.jpg"
//                 alt="Explore Germany"
//                 className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//               />
//               <div className="bg-blue-600 text-white px-4 py-2 absolute top-4 left-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//                 3 Packages
//               </div>
//               <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                 <h2 className="text-xl font-bold mb-1">Germany</h2>
//                 <p className="text-sm">Starting From ₹ 1,20,000</p>
//               </div>
//               </Link>
//             </div>

//             <div>
//               <div className="bg-white shadow-md rounded-lg overflow-hidden relative group mb-8">
//               <Link to="/finland">

//                 <img
//                   src="feature/finland.jpg"
//                   alt="Explore Finland"
//                   className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                 />
//                 <div className="bg-green-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//                   8 Packages
//                 </div>
//                 <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                   <h2 className="text-xl font-bold mb-1">Finland</h2>
//                   <p className="text-sm">Starting From ₹ 1,90,000</p>
//                 </div>
//                 </Link>
//               </div>

//               <div className="bg-white shadow-md rounded-lg overflow-hidden relative group">
//               <Link to="/greece">

//                 <img
//                   src="feature/greece.jpg"
//                   alt="Explore Greece"
//                   className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                 />
//                 <div className="bg-red-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//                   3 Packages
//                 </div>
//                 <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                   <h2 className="text-xl font-bold mb-1">Greece</h2>
//                   <p className="text-sm">Starting From ₹1,50,000</p>
//                 </div>
//               </Link>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg overflow-hidden relative group">
//             <Link to="/iceland">

//               <img
//                 src="feature/iceland.jpg"
//                 alt="Explore Iceland"
//                 className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//               />
//               <div className="bg-purple-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-blue-600 transition duration-300 ease-in-out">
//                 3 Packages
//               </div>
//               <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                 <h2 className="text-xl font-bold mb-1">Iceland</h2>
//                 <p className="text-sm">Starting From ₹1,50,000</p>
//               </div>
//             </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;
// scroll effect ===========================
// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const FeatureSection = () => {
//   const fadeInVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <div className="feature py-12 px-20 relative">
//       {/* Background Heading */}
//       <div className="absolute top-0 z-[-1] left-0 w-full text-center font-semibold text-[#ccccce] text-[calc(3rem+5vw)] lg:text-[23rem] leading-none hidden lg:block opacity-50">
//         Europe
//       </div>

//       <div className="container mx-auto">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mt-10 mb-20"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInVariants}
//         >
//           <span className="text-4xl font-semibold mb-5 text-gray-600">
//             Explore
//           </span>
//           <h2 className="text-6xl font-bold mt-5 text-gray-800">
//             Beautiful Places Of
//           </h2>
//           <h2 className="text-6xl font-bold mt-5 md:hidden text-gray-800">
//             Europe
//           </h2>
//         </motion.div>

//         {/* Sticky Section 1 */}
//         <div className="section-1 sticky top-0 z-10 bg-white">
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//             <div className="bg-white rounded-lg overflow-hidden relative group">
//               <Link to="/paris">
//                 <img
//                   src="feature/01.jpg"
//                   alt="Explore Paris"
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                 />
//                 <div className="bg-blue-600 text-white px-4 py-2 absolute top-4 left-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//                   3 Packages
//                 </div>
//                 <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                   <h2 className="text-xl font-bold mb-1">Paris</h2>
//                   <p className="text-sm">Starting From ₹ 1,20,000</p>
//                 </div>
//               </Link>
//             </div>

//             <div>
//               <div className="bg-white rounded-lg overflow-hidden relative group mb-8">
//                 <Link to="/Switzerland">
//                   <img
//                     src="feature/Switzerland.jpg"
//                     alt="Explore Switzerland"
//                     className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                   />
//                   <div className="bg-green-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//                     8 Packages
//                   </div>
//                   <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                     <h2 className="text-xl font-bold mb-1">Switzerland</h2>
//                     <p className="text-sm">Starting From ₹ 1,90,000</p>
//                   </div>
//                 </Link>
//               </div>

//               <div className="bg-white rounded-lg overflow-hidden relative group">
//                 <Link to="/Italy">
//                   <img
//                     src="feature/Italy.jpg"
//                     alt="Italy"
//                     className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                   />
//                   <div className="bg-red-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//                     3 Packages
//                   </div>
//                   <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                     <h2 className="text-xl font-bold mb-1">Italy</h2>
//                     <p className="text-sm">Starting From ₹1,50,000</p>
//                   </div>
//                 </Link>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg overflow-hidden relative group">
//               <Link to="/london">
//                 <img
//                   src="feature/London.jpg"
//                   alt="Explore London"
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                 />
//                 <div className="bg-purple-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-blue-600 transition duration-300 ease-in-out">
//                   3 Packages
//                 </div>
//                 <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                   <h2 className="text-xl font-bold mb-1">London</h2>
//                   <p className="text-sm">Starting From ₹1,50,000</p>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Scrolling Section 2 */}
//         <div className="section-2 relative z-20 bg-white mt-[50vh]">
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//             {/* Same card structure as section 1 */}
//             <div className="bg-white rounded-lg overflow-hidden relative group">
//               <Link to="/germany">
//                 <img
//                   src="feature/germany.jpg"
//                   alt="Explore Germany"
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                 />
//                 <div className="bg-blue-600 text-white px-4 py-2 absolute top-4 left-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//                   3 Packages
//                 </div>
//                 <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                   <h2 className="text-xl font-bold mb-1">Germany</h2>
//                   <p className="text-sm">Starting From ₹ 1,20,000</p>
//                 </div>
//               </Link>
//             </div>

//             <div>
//               <div className="bg-white shadow-md rounded-lg overflow-hidden relative group mb-8">
//                 <Link to="/finland">
//                   <img
//                     src="feature/finland.jpg"
//                     alt="Explore Finland"
//                     className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                   />
//                   <div className="bg-green-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//                     8 Packages
//                   </div>
//                   <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                     <h2 className="text-xl font-bold mb-1">Finland</h2>
//                     <p className="text-sm">Starting From ₹ 1,90,000</p>
//                   </div>
//                 </Link>
//               </div>

//               <div className="bg-white shadow-md rounded-lg overflow-hidden relative group">
//                 <Link to="/greece">
//                   <img
//                     src="feature/greece.jpg"
//                     alt="Explore Greece"
//                     className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                   />
//                   <div className="bg-red-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//                     3 Packages
//                   </div>
//                   <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                     <h2 className="text-xl font-bold mb-1">Greece</h2>
//                     <p className="text-sm">Starting From ₹1,50,000</p>
//                   </div>
//                 </Link>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg overflow-hidden relative group">
//               <Link to="/iceland">
//                 <img
//                   src="feature/iceland.jpg"
//                   alt="Explore Iceland"
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                 />
//                 <div className="bg-purple-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-blue-600 transition duration-300 ease-in-out">
//                   3 Packages
//                 </div>
//                 <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                   <h2 className="text-xl font-bold mb-1">Iceland</h2>
//                   <p className="text-sm">Starting From ₹1,50,000</p>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;
// ================without scroll
// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const FeatureSection = () => {
//   const fadeInVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <div className="feature py-12 px-20 relative">
//       {/* Background Heading */}
//       <div className="absolute top-0 z-[-1] left-0 w-full text-center font-semibold text-[#EDF7FF] text-[calc(3rem+5vw)] lg:text-[23rem] leading-none hidden lg:block opacity-50">
//         Europe
//       </div>

//       <div className="container mx-auto">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mt-10 mb-20"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInVariants}
//         >
//           <span className="text-4xl font-semibold mb-5 text-gray-600">
//             Explore
//           </span>
//           <h2 className="text-6xl font-bold mt-5 text-gray-800">
//             Beautiful Places Of
//           </h2>
//           <h2 className="text-6xl font-bold mt-5 text-gray-800">
//             Europe
//           </h2>
//         </motion.div>

//         <div className="section-1 top-0 bg-white">
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//             <div className="bg-white rounded-lg overflow-hidden relative group">
//               <Link to="/paris">
//                 <img
//                   src="feature/01.jpg"
//                   alt="Explore Paris"
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                 />
//                 <div className="bg-blue-600 text-white px-4 py-2 absolute top-4 left-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//                   3 Packages
//                 </div>
//                 <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                   <h2 className="text-xl font-bold mb-1">Paris</h2>
//                   <p className="text-sm">Starting From ₹ 1,20,000</p>
//                 </div>
//               </Link>
//             </div>

//             <div>
//               <div className="bg-white rounded-lg overflow-hidden relative group mb-8">
//                 <Link to="/Switzerland">
//                   <img
//                     src="feature/Switzerland.jpg"
//                     alt="Explore Switzerland"
//                     className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                   />
//                   <div className="bg-green-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//                     8 Packages
//                   </div>
//                   <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                     <h2 className="text-xl font-bold mb-1">Switzerland</h2>
//                     <p className="text-sm">Starting From ₹ 1,90,000</p>
//                   </div>
//                 </Link>
//               </div>

//               <div className="bg-white rounded-lg overflow-hidden relative group">
//                 <Link to="/Italy">
//                   <img
//                     src="feature/Italy.jpg"
//                     alt="Italy"
//                     className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                   />
//                   <div className="bg-red-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//                     3 Packages
//                   </div>
//                   <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                     <h2 className="text-xl font-bold mb-1">Italy</h2>
//                     <p className="text-sm">Starting From ₹1,50,000</p>
//                   </div>
//                 </Link>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg overflow-hidden relative group">
//               <Link to="/london">
//                 <img
//                   src="feature/London.jpg"
//                   alt="Explore London"
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                 />
//                 <div className="bg-purple-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-blue-600 transition duration-300 ease-in-out">
//                   3 Packages
//                 </div>
//                 <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                   <h2 className="text-xl font-bold mb-1">London</h2>
//                   <p className="text-sm">Starting From ₹1,50,000</p>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="py-10 section-2 bg-white">
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//             <div className="bg-white rounded-lg overflow-hidden relative group">
//               <Link to="/germany">
//                 <img
//                   src="feature/germany.jpg"
//                   alt="Explore Germany"
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                 />
//                 <div className="bg-blue-600 text-white px-4 py-2 absolute top-4 left-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//                   3 Packages
//                 </div>
//                 <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                   <h2 className="text-xl font-bold mb-1">Germany</h2>
//                   <p className="text-sm">Starting From ₹ 1,20,000</p>
//                 </div>
//               </Link>
//             </div>

//             <div>
//               <div className="bg-white shadow-md rounded-lg overflow-hidden relative group mb-8">
//                 <Link to="/finland">
//                   <img
//                     src="feature/finland.jpg"
//                     alt="Explore Finland"
//                     className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                   />
//                   <div className="bg-green-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//                     8 Packages
//                   </div>
//                   <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                     <h2 className="text-xl font-bold mb-1">Finland</h2>
//                     <p className="text-sm">Starting From ₹ 1,90,000</p>
//                   </div>
//                 </Link>
//               </div>

//               <div className="bg-white shadow-md rounded-lg overflow-hidden relative group">
//                 <Link to="/greece">
//                   <img
//                     src="feature/greece.jpg"
//                     alt="Explore Greece"
//                     className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                   />
//                   <div className="bg-red-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
//                     3 Packages
//                   </div>
//                   <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                     <h2 className="text-xl font-bold mb-1">Greece</h2>
//                     <p className="text-sm">Starting From ₹1,50,000</p>
//                   </div>
//                 </Link>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg overflow-hidden relative group">
//               <Link to="/iceland">
//                 <img
//                   src="feature/iceland.jpg"
//                   alt="Explore Iceland"
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
//                 />
//                 <div className="bg-purple-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-blue-600 transition duration-300 ease-in-out">
//                   3 Packages
//                 </div>
//                 <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
//                   <h2 className="text-xl font-bold mb-1">Iceland</h2>
//                   <p className="text-sm">Starting From ₹1,50,000</p>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;

// =============mobile 2x2 
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeatureSection = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="feature py-12 px-4 sm:px-20 relative">
      {/* Background Heading */}
      <div className="absolute top-0 z-[-1] left-0 w-full text-center font-semibold text-[#ccccce] text-[calc(3rem+5vw)] lg:text-[23rem] leading-none hidden lg:block opacity-50">
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
          <span className="text-4xl font-semibold mb-5 text-gray-600">
            Explore
          </span>
          <h2 className="text-6xl font-bold mt-5 text-gray-800">
            Beautiful Places Of
          </h2>
          <h2 className="text-6xl font-bold mt-5 md:hidden text-gray-800">
            Europe
          </h2>
        </motion.div>

        {/* Sticky Section 1 */}
        <div className="section-1 sticky top-0 z-10 bg-white">
          {/* Mobile Layout */}
          <div className="sm:hidden grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg overflow-hidden relative group">
              <Link to="/paris">
                <img
                  src="feature/01.jpg"
                  alt="Explore Paris"
                  className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-300"
                />
                <div className="bg-blue-600 text-white px-2 py-1 absolute top-2 left-2 rounded-md text-sm">
                  3 Packages
                </div>
                <div className="absolute bottom-2 left-2 text-black p-2 rounded-lg bg-white">
                  <h2 className="text-lg font-bold">Paris</h2>
                  <p className="text-xs">Starting From ₹ 1,20,000</p>
                </div>
              </Link>
            </div>

            <div className="bg-white rounded-lg overflow-hidden relative group">
              <Link to="/Switzerland">
                <img
                  src="feature/Switzerland.jpg"
                  alt="Explore Switzerland"
                  className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-300"
                />
                <div className="bg-green-600 text-white px-2 py-1 absolute top-2 right-2 rounded-md text-sm">
                  8 Packages
                </div>
                <div className="absolute bottom-2 left-2 text-black p-2 rounded-lg bg-white">
                  <h2 className="text-lg font-bold">Switzerland</h2>
                  <p className="text-xs">Starting From ₹ 1,90,000</p>
                </div>
              </Link>
            </div>

            <div className="bg-white rounded-lg overflow-hidden relative group">
              <Link to="/Italy">
                <img
                  src="feature/Italy.jpg"
                  alt="Italy"
                  className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-300"
                />
                <div className="bg-red-600 text-white px-2 py-1 absolute top-2 right-2 rounded-md text-sm">
                  3 Packages
                </div>
                <div className="absolute bottom-2 left-2 text-black p-2 rounded-lg bg-white">
                  <h2 className="text-lg font-bold">Italy</h2>
                  <p className="text-xs">Starting From ₹1,50,000</p>
                </div>
              </Link>
            </div>

            <div className="bg-white rounded-lg overflow-hidden relative group">
              <Link to="/london">
                <img
                  src="feature/London.jpg"
                  alt="Explore London"
                  className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-300"
                />
                <div className="bg-purple-600 text-white px-2 py-1 absolute top-2 right-2 rounded-md text-sm">
                  3 Packages
                </div>
                <div className="absolute bottom-2 left-2 text-black p-2 rounded-lg bg-white">
                  <h2 className="text-lg font-bold">London</h2>
                  <p className="text-xs">Starting From ₹1,50,000</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden relative group">
              <Link to="/paris">
                <img
                  src="feature/01.jpg"
                  alt="Explore Paris"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
                />
                <div className="bg-blue-600 text-white px-4 py-2 absolute top-4 left-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
                  3 Packages
                </div>
                <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
                  <h2 className="text-xl font-bold mb-1">Paris</h2>
                  <p className="text-sm">Starting From ₹ 1,20,000</p>
                </div>
              </Link>
            </div>

            <div>
              <div className="bg-white rounded-lg overflow-hidden relative group mb-8">
                <Link to="/Switzerland">
                  <img
                    src="feature/Switzerland.jpg"
                    alt="Explore Switzerland"
                    className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                  <div className="bg-green-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
                    8 Packages
                  </div>
                  <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
                    <h2 className="text-xl font-bold mb-1">Switzerland</h2>
                    <p className="text-sm">Starting From ₹ 1,90,000</p>
                  </div>
                </Link>
              </div>

              <div className="bg-white rounded-lg overflow-hidden relative group">
                <Link to="/Italy">
                  <img
                    src="feature/Italy.jpg"
                    alt="Italy"
                    className="w-full h-[16rem] object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                  <div className="bg-red-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
                    3 Packages
                  </div>
                  <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
                    <h2 className="text-xl font-bold mb-1">Italy</h2>
                    <p className="text-sm">Starting From ₹1,50,000</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden relative group">
              <Link to="/london">
                <img
                  src="feature/London.jpg"
                  alt="Explore London"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
                />
                <div className="bg-purple-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-blue-600 transition duration-300 ease-in-out">
                  3 Packages
                </div>
                <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
                  <h2 className="text-xl font-bold mb-1">London</h2>
                  <p className="text-sm">Starting From ₹1,50,000</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Scrolling Section 2 */}
        <div className="section-2 relative z-20 bg-white mt-8 sm:mt-[50vh]">
          {/* Mobile Layout */}
          <div className="sm:hidden grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg overflow-hidden relative group">
              <Link to="/germany">
                <img
                  src="feature/germany.jpg"
                  alt="Explore Germany"
                  className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-300"
                />
                <div className="bg-blue-600 text-white px-2 py-1 absolute top-2 left-2 rounded-md text-sm">
                  3 Packages
                </div>
                <div className="absolute bottom-2 left-2 text-black p-2 rounded-lg bg-white">
                  <h2 className="text-lg font-bold">Germany</h2>
                  <p className="text-xs">Starting From ₹ 1,20,000</p>
                </div>
              </Link>
            </div>

            <div className="bg-white rounded-lg overflow-hidden relative group">
              <Link to="/finland">
                <img
                  src="feature/finland.jpg"
                  alt="Explore Finland"
                  className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-300"
                />
                <div className="bg-green-600 text-white px-2 py-1 absolute top-2 right-2 rounded-md text-sm">
                  8 Packages
                </div>
                <div className="absolute bottom-2 left-2 text-black p-2 rounded-lg bg-white">
                  <h2 className="text-lg font-bold">Finland</h2>
                  <p className="text-xs">Starting From ₹ 1,90,000</p>
                </div>
              </Link>
            </div>

            <div className="bg-white rounded-lg overflow-hidden relative group">
              <Link to="/greece">
                <img
                  src="feature/greece.jpg"
                  alt="Explore Greece"
                  className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-300"
                />
                <div className="bg-red-600 text-white px-2 py-1 absolute top-2 right-2 rounded-md text-sm">
                  3 Packages
                </div>
                <div className="absolute bottom-2 left-2 text-black p-2 rounded-lg bg-white">
                  <h2 className="text-lg font-bold">Greece</h2>
                  <p className="text-xs">Starting From ₹1,50,000</p>
                </div>
              </Link>
            </div>

            <div className="bg-white rounded-lg overflow-hidden relative group">
              <Link to="/iceland">
                <img
                  src="feature/iceland.jpg"
                  alt="Explore Iceland"
                  className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-300"
                />
                <div className="bg-purple-600 text-white px-2 py-1 absolute top-2 right-2 rounded-md text-sm">
                  3 Packages
                </div>
                <div className="absolute bottom-2 left-2 text-black p-2 rounded-lg bg-white">
                  <h2 className="text-lg font-bold">Iceland</h2>
                  <p className="text-xs">Starting From ₹1,50,000</p>
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
                <div className="bg-blue-600 text-white px-4 py-2 absolute top-4 left-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
                  3 Packages
                </div>
                <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
                  <h2 className="text-xl font-bold mb-1">Germany</h2>
                  <p className="text-sm">Starting From ₹ 1,20,000</p>
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
                  <div className="bg-green-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
                    8 Packages
                  </div>
                  <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
                    <h2 className="text-xl font-bold mb-1">Finland</h2>
                    <p className="text-sm">Starting From ₹ 1,90,000</p>
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
                  <div className="bg-red-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-purple-700 transition duration-300 ease-in-out">
                    3 Packages
                  </div>
                  <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
                    <h2 className="text-xl font-bold mb-1">Greece</h2>
                    <p className="text-sm">Starting From ₹1,50,000</p>
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
                <div className="bg-purple-600 text-white px-4 py-2 absolute top-4 right-4 rounded-md group-hover:bg-blue-600 transition duration-300 ease-in-out">
                  3 Packages
                </div>
                <div className="absolute bottom-4 left-4 text-black p-2 rounded-lg bg-white">
                  <h2 className="text-xl font-bold mb-1">Iceland</h2>
                  <p className="text-sm">Starting From ₹1,50,000</p>
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