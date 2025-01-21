// import React from 'react';
// import { CardContainer, CardBody, CardItem } from './3dcard';
// import { Plane } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Card3DDemo = () => {
//   const navigate = useNavigate();

//   const handleViewDestinations = () => {
//     navigate('/tours');  // Navigate to tours page
//   };

//   const handleBookNow = () => {
//     navigate('/explore');  // Optional: Navigate to booking page
//   };

//   return (
//     <CardContainer>
//       <CardBody className="relative group/card w-auto sm:w-[70rem] h-auto rounded-none p-0 border-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10" />
        
//         <CardItem translateZ="100" className="w-full h-full absolute top-0 left-0">
//           <img
//             src="/aero4.png"
//             className="w-full h-[600px] object-cover filter brightness-75"
//             alt="Luxury travel"
//           />
//         </CardItem>

//         <div className="relative z-20 p-12">
//           <CardItem
//             translateZ="120"
//             className="text-xs tracking-[0.3em] text-white/80 font-light mb-4"
//           >
//             EXCLUSIVE JOURNEY
//           </CardItem>

//           <CardItem
//             translateZ="150"
//             className="text-7xl font-bold text-white mb-6 leading-tight"
//           >
//             BOOK YOUR
//             <br />
//             FLIGHT TODAY
//           </CardItem>

//           {/* <CardItem
//             as="p"
//             translateZ="100"
//             className="text-white/90 text-lg max-w-md mb-12 font-light"
//           >
//             Cobblestone dreams and Alpine peaks await. Mediterranean sunsets paint stories 
//             across ancient stone and modern souls.
//           </CardItem> */}

//           <div className="flex items-center gap-8">
//             <CardItem
//               translateZ="100"
//               className="group/button relative overflow-hidden px-8 py-4 bg-white text-black font-medium cursor-pointer"
//               onClick={handleBookNow}
//             >
//               <span className="relative z-10 group-hover/button:text-white transition-colors duration-500">
//                 EXPLORE
//               </span>
//               <div className="absolute inset-0 bg-black transform translate-y-full group-hover/button:translate-y-0 transition-transform duration-500" />
//             </CardItem>

//             <CardItem
//               translateZ="80"
//               className="flex items-center text-white/80 hover:text-white transition-colors cursor-pointer"
//               onClick={handleViewDestinations}
//             >
//               <Plane className="mr-2 h-5 w-5" />
//               <span className="text-sm tracking-wider">VIEW DESTINATIONS</span>
//             </CardItem>
//           </div>

//           <CardItem
//             translateZ="80"
//             className="absolute bottom-12 right-12 flex items-center gap-4"
//           >
//             <div className="w-24 h-[1px] bg-white/30" />
//             <span className="text-white/50 text-sm">HOVER TO EXPLORE</span>
//             </CardItem>
//           </div>
       
//       </CardBody>
//     </CardContainer>
         
//   );
// };

// export default Card3DDemo;

import React from 'react';
import { CardContainer, CardBody, CardItem } from './3dcard';
import { Plane } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Card3DDemo = () => {
  const navigate = useNavigate();

  const handleViewDestinations = () => {
    navigate('/tours');
  };

  const handleBookNow = () => {
    navigate('/explore');
  };

  return (
    <div className="hidden md:block">
      <CardContainer>
      <CardBody className="relative group/card w-auto sm:w-[70rem] h-auto rounded-2xl p-0 border-2 border-white/30 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10" />
        
        <CardItem translateZ="100" className="w-full h-full absolute top-0 left-0">
          <img
            src="/aero4.png"
            className="w-full h-[600px] object-cover filter brightness-75 rounded-2xl"
            alt="Luxury travel"
          />
        </CardItem>

        <div className="relative z-20 p-12 min-h-[600px] flex flex-col justify-between">
          <div>
            <CardItem
              translateZ="120"
              className="text-xs tracking-[0.3em] text-white/80 font-light mb-6"
            >
              EXCLUSIVE JOURNEY
            </CardItem>

            <CardItem
              translateZ="150"
              className="lg:text-7xl sm:text-4xl  font-bold text-white leading-tight"
            >
              BOOK YOUR
            
              FLIGHT TODAY
            </CardItem>
          </div>

          <div className="flex flex-col gap-16">
            <div className="flex items-center gap-8">
              <CardItem
                translateZ="100"
                className="group/button relative overflow-hidden px-8 py-4 bg-white text-black font-medium cursor-pointer rounded-lg"
                onClick={handleBookNow}
              >
                <span className="relative z-10 group-hover/button:text-white transition-colors duration-500">
                  EXPLORE
                </span>
                <div className="absolute inset-0 bg-black transform translate-y-full group-hover/button:translate-y-0 transition-transform duration-500 rounded-lg" />
              </CardItem>

              <CardItem
                translateZ="80"
                className="flex items-center text-white/80 hover:text-white transition-colors cursor-pointer"
                onClick={handleViewDestinations}
              >
                <Plane className="mr-2 h-5 w-5" />
                <span className="text-sm tracking-wider">VIEW DESTINATIONS</span>
              </CardItem>
            </div>

            <CardItem
              translateZ="80"
              className="flex items-center gap-4 self-end"
            >
              <div className="w-24 h-[1px] bg-white/30" />
              <span className="text-white/50 text-sm">HOVER TO EXPLORE</span>
            </CardItem>
          </div>
        </div>

        {/* Adding a subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover/card:border-white/30 transition-colors duration-500" />
      </CardBody>
    </CardContainer>
    </div>
  );
};

export default Card3DDemo;