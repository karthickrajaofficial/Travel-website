// 
// ================2===============
// import React from 'react';

// const AboutSection = () => {
//   return (
//     <div className="min-h-screen bg-navy-900 bg-gradient-to-b from-blue-950 to-blue-900">
//       {/* Hero Section */}
//       <div className="container mx-auto px-6 py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Content Side */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium tracking-wider">
//                 ROYAL EUROPA TRAVEL
//               </span>
//               <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
//                 Experience Europe with{' '}
//                 <span className="text-yellow-400">
//                   Royal Excellence
//                 </span>
//               </h1>
//             </div>

//             <p className="text-gray-300 text-lg leading-relaxed">
//               Embark on a journey of unparalleled luxury and discovery across Europe's most prestigious 
//               destinations. We craft bespoke travel experiences that reflect the grandeur and heritage 
//               of European royalty.
//             </p>

//             <div className="space-y-4 text-gray-300">
//               <div className="flex items-center space-x-3">
//                 <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
//                   <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <span>Access to exclusive royal properties and estates</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
//                   <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <span>Private guided tours of historical landmarks</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
//                   <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <span>Luxury transportation and premium accommodations</span>
//               </div>
//             </div>
//           </div>

//           {/* Image Side */}
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-600/20 rounded-2xl blur-2xl opacity-20"></div>
//             <img 
//               src="/api/placeholder/600/400" 
//               alt="Royal Travel Experience" 
//               className="relative rounded-2xl shadow-2xl w-full object-cover border-2 border-yellow-400/20"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-blue-950/80 py-16">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
//             Our Royal Legacy
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { number: '25+', label: 'Years of Excellence' },
//               { number: '150+', label: 'Royal Destinations' },
//               { number: '75K+', label: 'Distinguished Guests' }
//             ].map((stat, index) => (
//               <div key={index} className="text-center p-8 rounded-xl bg-gradient-to-b from-blue-900/50 to-blue-950/50 border border-yellow-400/20 backdrop-blur-sm">
//                 <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-300 text-lg">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;
// ==============3================
// import React from "react";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";

// // Animation variants from original code
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } },
// };

// const textVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
// };

// const imageVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
// };

// const counterVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const AboutSection = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900">
//       {/* Main Section */}
//       <div className="container mx-auto px-6 py-16">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//         >
//           {/* About Content */}
//           <div>
//             {/* Section Header */}
//             <div className="mb-8">
//               <motion.span
//                 variants={textVariants}
//                 className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium tracking-wider"
//               >
//                 ROYAL EUROPA TRAVEL
//               </motion.span>
//               <motion.h2
//                 variants={textVariants}
//                 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight"
//               >
//                 Experience Europe with{' '}
//                 <span className="text-yellow-400">Royal Excellence</span>
//               </motion.h2>
//             </div>

//             {/* Section Description */}
//             <motion.div variants={textVariants} className="mb-8">
//               <p className="text-gray-300 text-lg leading-relaxed mb-6">
//                 Embark on a journey of unparalleled luxury and discovery across Europe's most prestigious 
//                 destinations. We craft bespoke travel experiences that reflect the grandeur and heritage 
//                 of European royalty.
//               </p>

//               <ul className="space-y-4 text-gray-300">
//                 <li className="flex items-center space-x-3">
//                   <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
//                     <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <span>Access to exclusive royal properties and estates</span>
//                 </li>
//                 <li className="flex items-center space-x-3">
//                   <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
//                     <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <span>Private guided tours of historical landmarks</span>
//                 </li>
//                 <li className="flex items-center space-x-3">
//                   <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
//                     <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <span>Luxury transportation and premium accommodations</span>
//                 </li>
//               </ul>
//             </motion.div>
//           </div>

//           {/* About Image */}
//           <div className="relative hidden lg:block">
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-600/20 rounded-2xl blur-2xl opacity-20"></div>
//             <motion.img
//               variants={imageVariants}
//               src="/api/placeholder/600/400"
//               alt="Royal Travel Experience"
//               className="relative rounded-2xl shadow-2xl w-full object-cover border-2 border-yellow-400/20 hover:scale-105 transition-transform duration-300 ease-in-out"
//             />
//           </div>
//         </motion.div>
//       </div>

//       {/* Counter Section */}
//       <div className="bg-blue-950/80 py-16">
//         <motion.h2
//           variants={textVariants}
//           initial="hidden"
//           whileInView="visible"
//           className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
//         >
//           Our Royal Legacy
//         </motion.h2>
//         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <motion.div
//             variants={counterVariants}
//             initial="hidden"
//             whileInView="visible"
//             className="text-center p-8 rounded-xl bg-gradient-to-b from-blue-900/50 to-blue-950/50 border border-yellow-400/20"
//           >
//             <p className="text-5xl font-bold text-yellow-400">
//               <CountUp
//                 start={0}
//                 end={25}
//                 suffix="+"
//                 duration={3}
//                 enableScrollSpy={true}
//                 scrollSpyOnce={true}
//               />
//             </p>
//             <p className="mt-4 text-lg text-gray-300">Years of Excellence</p>
//           </motion.div>

//           <motion.div
//             variants={counterVariants}
//             initial="hidden"
//             whileInView="visible"
//             className="text-center p-8 rounded-xl bg-gradient-to-b from-blue-900/50 to-blue-950/50 border border-yellow-400/20"
//           >
//             <p className="text-5xl font-bold text-yellow-400">
//               <CountUp
//                 start={0}
//                 end={150}
//                 suffix="+"
//                 duration={3}
//                 enableScrollSpy={true}
//                 scrollSpyOnce={true}
//               />
//             </p>
//             <p className="mt-4 text-lg text-gray-300">Royal Destinations</p>
//           </motion.div>

//           <motion.div
//             variants={counterVariants}
//             initial="hidden"
//             whileInView="visible"
//             className="text-center p-8 rounded-xl bg-gradient-to-b from-blue-900/50 to-blue-950/50 border border-yellow-400/20"
//           >
//             <p className="text-5xl font-bold text-yellow-400">
//               <CountUp
//                 start={0}
//                 end={75}
//                 suffix="K+"
//                 duration={3}
//                 enableScrollSpy={true}
//                 scrollSpyOnce={true}
//               />
//             </p>
//             <p className="mt-4 text-lg text-gray-300">Distinguished Guests</p>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;
// ===============4=============
// import React from "react";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } },
// };

// const textVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
// };

// const imageVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
// };

// const counterVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const AboutSection = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900">
//       {/* Main Section */}
//       <div className="container mx-auto px-6 py-16">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//         >
//           {/* About Content */}
//           <div>
//             {/* Section Header */}
//             <div className="mb-8">
//               <motion.div
//                 variants={textVariants}
//                 className="flex items-center space-x-2 mb-4"
//               >
//                 <div className="h-px w-8 bg-yellow-400"></div>
//                 <span className="font-serif text-yellow-400 tracking-widest text-sm">
//                   ESTABLISHED 1998
//                 </span>
//               </motion.div>
              
//               <motion.h2
//                 variants={textVariants}
//                 className="font-serif text-5xl md:text-6xl text-white mb-4 leading-tight"
//               >
//                 Royal{' '}
//                 <span className="text-yellow-400 italic">Europa</span>
//               </motion.h2>
              
//               <motion.p
//                 variants={textVariants}
//                 className="text-xl text-yellow-400/90 font-light tracking-wide"
//               >
//                 WHERE LUXURY MEETS LEGACY
//               </motion.p>
//             </div>

//             {/* Section Description */}
//             <motion.div variants={textVariants} className="mb-12 space-y-6">
//               <p className="text-gray-300 text-lg leading-relaxed border-l-2 border-yellow-400/30 pl-6">
//                 Discover the epitome of European luxury travel, where each journey is crafted with the 
//                 precision and elegance befitting royalty. Our legacy of excellence spans generations, 
//                 offering unprecedented access to Europe's most prestigious destinations.
//               </p>

//               <div className="space-y-6 text-gray-300">
//                 <div className="flex items-start space-x-4">
//                   <span className="text-2xl text-yellow-400 font-serif">01</span>
//                   <div>
//                     <h3 className="text-lg font-medium text-yellow-400 mb-1">Royal Residences</h3>
//                     <p className="text-gray-300">Exclusive access to historic castles and noble estates</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <span className="text-2xl text-yellow-400 font-serif">02</span>
//                   <div>
//                     <h3 className="text-lg font-medium text-yellow-400 mb-1">Curated Experiences</h3>
//                     <p className="text-gray-300">Private tours with renowned historians and aristocrats</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <span className="text-2xl text-yellow-400 font-serif">03</span>
//                   <div>
//                     <h3 className="text-lg font-medium text-yellow-400 mb-1">Bespoke Service</h3>
//                     <p className="text-gray-300">Personalized attention to every detail of your journey</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* About Image */}
//           <div className="relative hidden lg:block">
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-600/20 rounded-2xl blur-2xl opacity-20"></div>
//             <motion.img
//               variants={imageVariants}
//               src="/api/placeholder/600/400"
//               alt="Royal Travel Experience"
//               className="relative rounded-2xl shadow-2xl w-full object-cover border-2 border-yellow-400/20 hover:scale-105 transition-transform duration-300 ease-in-out"
//             />
//           </div>
//         </motion.div>
//       </div>

//       {/* Counter Section */}
//       <div className="bg-blue-950/80 py-16">
//         <motion.h2
//           variants={textVariants}
//           initial="hidden"
//           whileInView="visible"
//           className="font-serif text-3xl md:text-4xl text-center text-white mb-16"
//         >
//           A Legacy of <span className="text-yellow-400 italic">Excellence</span>
//         </motion.h2>
        
//         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <motion.div
//             variants={counterVariants}
//             initial="hidden"
//             whileInView="visible"
//             className="text-center p-8 rounded-xl bg-gradient-to-b from-blue-900/50 to-blue-950/50 border border-yellow-400/20"
//           >
//             <div className="font-serif text-5xl font-light text-yellow-400 mb-2">
//               <CountUp
//                 start={0}
//                 end={25}
//                 suffix="+"
//                 duration={3}
//                 enableScrollSpy={true}
//                 scrollSpyOnce={true}
//               />
//             </div>
//             <p className="text-sm uppercase tracking-widest text-gray-300">Years of Heritage</p>
//           </motion.div>

//           <motion.div
//             variants={counterVariants}
//             initial="hidden"
//             whileInView="visible"
//             className="text-center p-8 rounded-xl bg-gradient-to-b from-blue-900/50 to-blue-950/50 border border-yellow-400/20"
//           >
//             <div className="font-serif text-5xl font-light text-yellow-400 mb-2">
//               <CountUp
//                 start={0}
//                 end={150}
//                 suffix="+"
//                 duration={3}
//                 enableScrollSpy={true}
//                 scrollSpyOnce={true}
//               />
//             </div>
//             <p className="text-sm uppercase tracking-widest text-gray-300">Elite Destinations</p>
//           </motion.div>

//           <motion.div
//             variants={counterVariants}
//             initial="hidden"
//             whileInView="visible"
//             className="text-center p-8 rounded-xl bg-gradient-to-b from-blue-900/50 to-blue-950/50 border border-yellow-400/20"
//           >
//             <div className="font-serif text-5xl font-light text-yellow-400 mb-2">
//               <CountUp
//                 start={0}
//                 end={75}
//                 suffix="K+"
//                 duration={3}
//                 enableScrollSpy={true}
//                 scrollSpyOnce={true}
//               />
//             </div>
//             <p className="text-sm uppercase tracking-widest text-gray-300">Distinguished Guests</p>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;

// ==============5=====================
// import React from "react";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } },
// };

// const textVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
// };

// const imageVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
// };

// const counterVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const AboutSection = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-black">
//       {/* Main Section */}
//       <div className="container mx-auto px-6 py-16">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//         >
//           {/* About Content */}
//           <div className="relative">
//             {/* Decorative Element */}
//             <div className="absolute -left-4 top-0 w-1 h-32 bg-gradient-to-b from-yellow-400 to-transparent"></div>
            
//             <div className="space-y-8">
//               <motion.div variants={textVariants} className="space-y-4">
//                 <div className="inline-flex items-center gap-3 bg-blue-900/50 rounded-full px-4 py-2 border border-yellow-400/20">
//                   <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
//                   <span className="text-yellow-400 text-sm font-medium tracking-wider">LUXURY TRAVEL</span>
//                 </div>
                
//                 <h2 className="text-5xl md:text-7xl font-bold text-white leading-none">
//                   ROYAL
//                   <span className="block text-yellow-400 mt-2">EUROPA</span>
//                 </h2>
                
//                 <p className="text-lg text-gray-400 max-w-xl">
//                   Redefining luxury travel across Europe's most prestigious destinations since 1998.
//                 </p>
//               </motion.div>

//               <motion.div variants={textVariants} className="grid grid-cols-1 gap-6">
//                 {[
//                   {
//                     title: "Elite Access",
//                     desc: "Exclusive entry to royal residences and private estates",
//                   },
//                   {
//                     title: "Bespoke Journeys",
//                     desc: "Customized itineraries crafted to perfection",
//                   },
//                   {
//                     title: "Royal Treatment",
//                     desc: "Unparalleled service and luxury accommodations",
//                   }
//                 ].map((feature, index) => (
//                   <div 
//                     key={index}
//                     className="group relative bg-blue-900/20 rounded-lg p-6 border border-yellow-400/10 hover:border-yellow-400/30 transition-colors duration-300"
//                   >
//                     <div className="absolute -right-2 -top-2 w-8 h-8 bg-yellow-400/10 rounded-full group-hover:scale-[2.5] transition-transform duration-500 ease-out"></div>
//                     <h3 className="text-yellow-400 text-xl font-bold mb-2">{feature.title}</h3>
//                     <p className="text-gray-300 relative z-10">{feature.desc}</p>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>

//           {/* About Image */}
//           <div className="relative hidden lg:block">
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-600/20 rounded-3xl blur-2xl opacity-20"></div>
//             <motion.div
//               variants={imageVariants}
//               className="relative rounded-3xl p-1 bg-gradient-to-br from-yellow-400/50 via-yellow-400/10 to-transparent"
//             >
//               <img
//                 src="/api/placeholder/600/400"
//                 alt="Royal Travel Experience"
//                 className="rounded-3xl w-full object-cover shadow-2xl"
//               />
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Counter Section */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-blue-950/90 backdrop-blur-sm"></div>
//         <div className="relative container mx-auto px-6 py-16">
//           <motion.h2
//             variants={textVariants}
//             initial="hidden"
//             whileInView="visible"
//             className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
//           >
//             Our Legacy In
//             <span className="text-yellow-400"> Numbers</span>
//           </motion.h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { value: 25, label: "Years of Excellence", suffix: "+" },
//               { value: 150, label: "Premier Destinations", suffix: "+" },
//               { value: 75, label: "Thousand Happy Clients", suffix: "K+" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 variants={counterVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 className="relative group"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-transparent rounded-2xl -rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
//                 <div className="relative bg-gradient-to-br from-blue-900/50 to-blue-950/50 p-8 rounded-2xl border border-yellow-400/20">
//                   <div className="text-6xl font-bold text-yellow-400 mb-4">
//                     <CountUp
//                       start={0}
//                       end={stat.value}
//                       suffix={stat.suffix}
//                       duration={3}
//                       enableScrollSpy={true}
//                       scrollSpyOnce={true}
//                     />
//                   </div>
//                   <p className="text-gray-300 text-lg">{stat.label}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;

// ================6=================
// import React from "react";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } },
// };

// const textVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
// };

// const imageVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
// };

// const counterVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const AboutSection = () => {
//   return (
//     <div className="min-h-screen bg-blue-950">
//       {/* Decorative Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative container mx-auto px-6 py-16">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 lg:grid-cols-12 gap-12"
//         >
//           {/* Left Column */}
//           <div className="lg:col-span-7 relative">
//             {/* Vertical Line */}
//             <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400 via-yellow-400/50 to-transparent"></div>

//             <motion.div variants={textVariants} className="space-y-12">
//               {/* Header Section */}
//               <div className="space-y-6">
//                 <div className="flex items-center gap-4">
//                   <span className="text-yellow-400 text-6xl font-light">R</span>
//                   <div className="h-px flex-grow bg-gradient-to-r from-yellow-400 to-transparent"></div>
//                 </div>
                
//                 <h2 className="text-7xl md:text-8xl font-bold">
//                   <span className="block text-white tracking-tight">ROYAL</span>
//                   <span className="block text-yellow-400 tracking-wider">EUROPA</span>
//                 </h2>
                
//                 <p className="text-xl text-gray-400 max-w-xl border-l-4 border-yellow-400/30 pl-6">
//                   Where each journey transcends ordinary travel to become an extraordinary tale of luxury and discovery.
//                 </p>
//               </div>

//               {/* Feature Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {[
//                   {
//                     num: "01",
//                     title: "IMPERIAL",
//                     desc: "Access to exclusive royal residences"
//                   },
//                   {
//                     num: "02",
//                     title: "CURATED",
//                     desc: "Bespoke journeys crafted by experts"
//                   },
//                   {
//                     num: "03",
//                     title: "REFINED",
//                     desc: "Luxury accommodations and service"
//                   },
//                   {
//                     num: "04",
//                     title: "ARTISANAL",
//                     desc: "Handcrafted travel experiences"
//                   }
//                 ].map((feature, index) => (
//                   <motion.div
//                     key={index}
//                     variants={textVariants}
//                     className="relative group"
//                   >
//                     <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-blue-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                     <div className="relative bg-blue-900/30 p-6 rounded-lg border border-yellow-400/10">
//                       <span className="block text-yellow-400 text-4xl font-light mb-4">{feature.num}</span>
//                       <h3 className="text-white text-lg font-bold mb-2">{feature.title}</h3>
//                       <p className="text-gray-400">{feature.desc}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Column */}
//           <div className="lg:col-span-5">
//             <motion.div
//               variants={imageVariants}
//               className="relative"
//             >
//               {/* Decorative Frame */}
//               <div className="absolute -inset-4">
//                 <div className="w-full h-full rotate-6 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-blue-600/20"></div>
//                 <div className="w-full h-full -rotate-6 rounded-2xl bg-gradient-to-r from-blue-600/20 to-yellow-400/20"></div>
//               </div>
              
//               <img
//                 src="/api/placeholder/600/800"
//                 alt="Royal Experience"
//                 className="relative rounded-2xl w-full h-full object-cover"
//               />
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Stats Section */}
//         <div className="mt-24">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { value: 25, label: "YEARS OF\nPRESTIGE" },
//               { value: 150, label: "ELITE\nDESTINATIONS" },
//               { value: 75, label: "THOUSAND\nGUESTS" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 variants={counterVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 className="relative group"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-blue-600/10 rounded-xl transform transition-transform duration-500 group-hover:scale-105"></div>
//                 <div className="relative p-8 text-center">
//                   <div className="text-7xl font-light text-yellow-400 mb-4">
//                     <CountUp
//                       start={0}
//                       end={stat.value}
//                       suffix="+"
//                       duration={3}
//                       enableScrollSpy={true}
//                       scrollSpyOnce={true}
//                     />
//                   </div>
//                   {stat.label.split('\n').map((line, i) => (
//                     <div key={i} className="text-gray-400 text-sm tracking-widest">{line}</div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;
// =========7===========
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
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        {/* Brand Header */}
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
                <span className="text-yellow-400 tracking-[0.3em] text-sm">EST. 1998</span>
                <div className="h-px w-12 bg-yellow-400"></div>
              </div>
              <h1 className="text-8xl font-light text-white tracking-tight mb-6">ROYAL</h1>
              <h2 className="text-7xl font-light text-yellow-400 tracking-wider">EUROPA</h2>
            </div>
          </motion.div>

          <motion.p 
            variants={textVariants}
            className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed"
          >
            Setting the standard in luxury travel across Europe's most distinguished destinations.
            Where heritage meets unparalleled sophistication.
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
              src="paris1.jpg"
              alt="Luxury Experience"
              className="relative w-full h-full object-cover border rounded-2xl"
            />
          </motion.div>

          {/* Right Column - Features */}
          <div className="space-y-12 py-8">
            <motion.h3 
              variants={textVariants}
              className="text-2xl text-white font-light tracking-wider"
            >
              THE ESSENCE OF <span className="text-yellow-400">LUXURY TRAVEL</span>
            </motion.h3>

            <motion.div variants={textVariants} className="space-y-12">
              {[
                {
                  title: "ROYAL RESIDENCES",
                  desc: "Exclusive access to Europe's most prestigious estates and historical properties."
                },
                {
                  title: "BESPOKE JOURNEYS",
                  desc: "Meticulously crafted itineraries tailored to exceed the highest expectations."
                },
                {
                  title: "DISTINGUISHED SERVICE",
                  desc: "Personal concierge and expert guides available at your discretion."
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
              { value: 25, label: "YEARS OF HERITAGE" },
              { value: 150, label: "CURATED DESTINATIONS" },
              { value: 75, label: "THOUSAND ELITE CLIENTS" }
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

        {/* Brand Statement */}
        <motion.div 
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          className="text-center mt-24"
        >
          <blockquote className="text-2xl font-light text-white leading-relaxed max-w-4xl mx-auto">
            "Creating timeless moments through unparalleled luxury experiences across Europe's most prestigious destinations."
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;