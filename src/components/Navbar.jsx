// import { useState } from "react";
// import { HiMenuAlt3 } from "react-icons/hi";
// import { MdClose } from "react-icons/md";
// import { FiChevronDown } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// // Add this line to import Google Fonts in your main App or index.html
// // <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet"></link>

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const navigate = useNavigate();

//   const navLinks = [
//     {
//       label: "Explore Europa",
//       hasDropdown: true,
//       items: [
//         "Paris", "Albania", "Armenia", "Austria", "Azerbaijan", 
//         "Baltic Region", "Belgium", "Bosnia", "Bulgaria", "Croatia", 
//         "Cyprus", "Czech Republic", "Finland", "France", "Georgia", 
//         "Germany", "Great Britain", "Greece", "Hungary", "Iceland", 
//         "Ireland", "Italy", "Kazakhstan", "Malta", "Monaco", 
//         "Norway", "Netherlands", "Poland", "Portugal", "Russia", 
//         "Scandinavia", "Scotland", "Serbia", "Slovenia", "Spain", 
//         "Sweden", "Switzerland"
//       ],
//     },
//     {
//       label: "Products",
//       hasDropdown: true,
//       items: [
//         "City Breaks", "Multi City Packages", "Escorted Tours", 
//         "Independent Tours", "Rail Tours", "Self Drive Holidays", 
//         "Chauffeur Driven Tour"
//       ],
//     },
//     {
//       label: "Company",
//       hasDropdown: true,
//       items: ["About", "Accreditations & Awards", "Work"],
//     },
//     { label: "Testimonials", href: "/testimonials" },
//     { label: "Contact", href: "/contact" },
//   ];

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//     if (isMenuOpen) setActiveDropdown(null);
//   };

//   const toggleDropdown = (label) => {
//     setActiveDropdown(activeDropdown === label ? null : label);
//   };

//   const handleItemClick = (item, linkLabel) => {
//     if (linkLabel === "Company") {
//       const formattedItem = item.toLowerCase().replace(/\s+/g, "-");
//       navigate(`/${formattedItem}`);
//     } else {
//       const formattedItem = item.toLowerCase().replace(/\s+/g, "-");
//       navigate(`/packages/${formattedItem}`);
//     }
//     setIsMenuOpen(false);
//     setActiveDropdown(null);
//   };

//   const renderDropdown = (link) => {
//     if (link.label === "Explore Europa") {
//       return (
//         <div className="absolute top-full left-0 font-montserrat mt-2 w-[700px] bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="max-h-[70vh] overflow-y-auto">
//             <div className="p-4">
//               <h3 className="text-center text-blue-950 font-bold text-xl font-poppins">Explore Places</h3>
//               <div className="grid grid-cols-4 gap-4">
//                 {link.items.map((item, idx) => (
//                   <a
//                     key={idx}
//                     href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
//                     className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors p-2 rounded font-medium text-sm"
//                   >
//                     {item}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden font-montserrat">
//         <div className="max-h-[70vh] overflow-y-auto">
//           <div className="p-4">
//             <h3 className="text-lg font-bold mb-2 text-blue-600 font-poppins">{link.label}</h3>
//             <div className="grid gap-2">
//               {link.items.map((item, idx) => (
//                 <a
//                   key={idx}
//                   onClick={() => handleItemClick(item, link.label)}
//                   className="block text-gray-600 hover:text-blue-600 transition-colors py-1 text-sm font-medium cursor-pointer"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <nav className="w-full h-20 sticky top-0 z-50 bg-white shadow-xl font-montserrat">
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
//         <a href="/" className="flex items-center gap-3">
//           <img src="logo.jpg" alt="Royal Europa DMC Logo" className="h-12 w-auto" />
//           <span className="text-xl font-bold text-gray-800 font-poppins">Royal Europa DMC</span>
//         </a>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex items-center gap-x-8 text-lg font-medium text-gray-800">
//           {navLinks.map((link, index) => (
//             <li key={index} className="relative group">
//               {link.hasDropdown ? (
//                 <>
//                   <button
//                     onClick={() => toggleDropdown(link.label)}
//                     className="flex items-center gap-1 hover:text-blue-600 transition-colors font-poppins font-semibold"
//                   >
//                     {link.label}
//                     <FiChevronDown
//                       className={`transition-transform ${
//                         activeDropdown === link.label ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>
//                   <AnimatePresence>
//                     {activeDropdown === link.label && renderDropdown(link)}
//                   </AnimatePresence>
//                 </>
//               ) : (
//                 <a href={link.href} className="hover:text-blue-600 transition-colors font-poppins font-semibold">
//                   {link.label}
//                 </a>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Toggle */}
//         <button onClick={toggleMenu} className="lg:hidden text-3xl text-gray-700">
//           {isMenuOpen ? <MdClose /> : <HiMenuAlt3 />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <div className="lg:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white shadow-md overflow-y-auto font-montserrat">
//             <ul className="p-4">
//               {navLinks.map((link, index) => (
//                 <li key={index} className="border-b border-gray-100 last:border-none">
//                   {link.hasDropdown ? (
//                     <>
//                       <button
//                         onClick={() => toggleDropdown(link.label)}
//                         className="flex justify-between items-center w-full py-3 text-gray-800 hover:text-blue-600 font-poppins font-semibold"
//                       >
//                         {link.label}
//                         <FiChevronDown
//                           className={`transition-transform ${
//                             activeDropdown === link.label ? "rotate-180" : ""
//                           }`}
//                         />
//                       </button>
//                       <AnimatePresence>
//                         {activeDropdown === link.label && (
//                           <motion.div
//                             initial={{ height: 0 }}
//                             animate={{ height: "auto" }}
//                             exit={{ height: 0 }}
//                             className="bg-gray-50 rounded-md overflow-hidden"
//                           >
//                             <div className="p-4">
//                               {link.items.map((item, idx) => (
//                                 <a
//                                   key={idx}
//                                   onClick={() => {
//                                     handleItemClick(item, link.label);
//                                   }}
//                                   className="block py-2 text-gray-600 hover:text-blue-600 font-medium"
//                                 >
//                                   {item}
//                                 </a>
//                               ))}
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </>
//                   ) : (
//                     <a href={link.href} className="block py-3 text-gray-800 hover:text-blue-600 font-poppins font-semibold">
//                       {link.label}
//                     </a>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const navLinks = [
    {
      label: "Explore Europa",
      hasDropdown: true,
      items: [
        "Paris", "Albania", "Armenia", "Austria", "Azerbaijan", 
        "Baltic Region", "Belgium", "Bosnia", "Bulgaria", "Croatia", 
        "Cyprus", "Czech Republic", "Finland", "France", "Georgia", 
        "Germany", "Great Britain", "Greece", "Hungary", "Iceland", 
        "Ireland", "Italy", "Kazakhstan", "Malta", "Monaco", 
        "Norway", "Netherlands", "Poland", "Portugal", "Russia", 
        "Scandinavia", "Scotland", "Serbia", "Slovenia", "Spain", 
        "Sweden", "Switzerland"
      ],
    },
    {
      label: "Products",
      hasDropdown: true,
      items: [
        "City Breaks", "Multi City Packages", "Escorted Tours", 
        "Independent Tours", "Rail Tours", "Self Drive Holidays", 
        "Chauffeur Driven Tour"
      ],
    },
    {
      label: "Company",
      hasDropdown: true,
      items: ["About", "Accreditations & Awards", "Work"],
    },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (isMenuOpen) setActiveDropdown(null);
  };

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleItemClick = (item, linkLabel) => {
    if (linkLabel === "Company") {
      const formattedItem = item.toLowerCase().replace(/\s+/g, "-");
      navigate(`/${formattedItem}`);
    } else {
      const formattedItem = item.toLowerCase().replace(/\s+/g, "-");
      navigate(`/packages/${formattedItem}`);
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const renderDropdown = (link) => {
    if (link.label === "Explore Europa") {
      return (
        <div className="absolute top-full left-0 mt-2 w-[700px] bg-gradient-to-br from-slate-900 to-blue-950 rounded-none shadow-2xl overflow-hidden border border-yellow-400/20">
          <div className="max-h-[70vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-yellow-400"></div>
                <h3 className="text-yellow-400 tracking-[0.2em] text-sm">EXPLORE PLACES</h3>
                <div className="h-px w-8 bg-yellow-400"></div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {link.items.map((item, idx) => (
                  <a
                    key={idx}
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-gray-400 hover:text-yellow-400 transition-colors p-2 font-light tracking-wider text-sm"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-slate-900 to-blue-950 rounded-none shadow-2xl overflow-hidden border border-yellow-400/20">
        <div className="max-h-[70vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-yellow-400"></div>
              <h3 className="text-yellow-400 tracking-[0.2em] text-sm">{link.label}</h3>
            </div>
            <div className="grid gap-3">
              {link.items.map((item, idx) => (
                <a
                  key={idx}
                  onClick={() => handleItemClick(item, link.label)}
                  className="block text-gray-400 hover:text-yellow-400 transition-colors py-1 text-sm tracking-wider font-light cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav className="w-full h-20 sticky top-0 z-50 bg-gradient-to-br from-slate-900 to-blue-950 shadow-xl backdrop-blur-lg bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        <a href="/" className="flex items-center gap-4">
          <img src="logo.jpg" alt="Royal Europa DMC Logo" className="h-12 w-auto" />
          <span className="text-xl text-white tracking-wider font-light">Royal Europa DMC</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-x-8 text-sm tracking-wider font-light text-white">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                    <FiChevronDown
                      className={`transition-transform ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === link.label && renderDropdown(link)}
                  </AnimatePresence>
                </>
              ) : (
                <a href={link.href} className="hover:text-yellow-400 transition-colors">
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="lg:hidden text-3xl text-white hover:text-yellow-400 transition-colors">
          {isMenuOpen ? <MdClose /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-24 left-0 w-full h-[calc(100vh-6rem)] bg-gradient-to-br from-slate-900 to-blue-950 overflow-y-auto border-t border-yellow-400/20"
          >
            <ul className="p-6">
              {navLinks.map((link, index) => (
                <li key={index} className="border-b border-yellow-400/10 last:border-none">
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className="flex justify-between items-center w-full py-4 text-white hover:text-yellow-400 tracking-wider font-light"
                      >
                        {link.label}
                        <FiChevronDown
                          className={`transition-transform ${
                            activeDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="bg-blue-950/50 overflow-hidden border-l border-yellow-400/20"
                          >
                            <div className="p-4">
                              {link.items.map((item, idx) => (
                                <a
                                  key={idx}
                                  onClick={() => handleItemClick(item, link.label)}
                                  className="block py-2 text-gray-400 hover:text-yellow-400 tracking-wider font-light"
                                >
                                  {item}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a href={link.href} className="block py-4 text-white hover:text-yellow-400 tracking-wider font-light">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

