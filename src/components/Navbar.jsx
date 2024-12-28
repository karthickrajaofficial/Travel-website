import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    {
      label: "Explore Europa",
      hasDropdown: true,
      items: [
        "Albania",
        "Armenia",
        "Austria",
        "Azerbaijan",
        "Baltic Region",
        "Belgium",
        "Bosnia",
        "Bulgaria",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Finland",
        "France",
        "Georgia",
        "Germany",
        "Great Britain",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Kazakhstan",
        "Malta",
        "Monaco",
        "Norway",
        "Netherlands",
        "Poland",
        "Portugal",
        "Russia",
        "Scandinavia",
        "Scotland",
        "Serbia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
      ],
    },
    {
      label: "Products",
      hasDropdown: true,
      items: [
        "City Breaks",
        "Multi City Packages",
        "Escorted Tours",
        "Independent Tours",
        "Rail Tours",
        "Self Drive Holidays",
        "Chauffeur Driven Tour",
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

  const renderDropdown = (link) => {
    if (link.label === "Explore Europa") {
      return (
        <div className="absolute top-full left-0 font-sans mt-2 w-[700px] bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="max-h-[70vh] overflow-y-auto">
            <div className="p-4">
              <h3 className="text-center text-blue-950">Explore Places</h3>
              <div className="grid grid-cols-4 gap-4">
                {link.items.map((item, idx) => (
                  <a
                    key={idx}
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors p-2 rounded"
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
      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="max-h-[70vh] overflow-y-auto">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">{link.label}</h3>
            <div className="grid gap-2">
              {link.items.map((item, idx) => (
                <a
                  key={idx}
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
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
    <nav className="w-full h-20 sticky top-0 z-50 bg-white shadow-xl">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        <a href="/" className="flex items-center gap-3">
          <img src="logo.jpg" alt="Royal Europa DMC Logo" className="h-12 w-auto" />
          <span className="text-xl font-bold text-gray-800">Royal Europa DMC</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-x-8 text-lg font-medium text-gray-800">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="flex items-center gap-1 hover:text-blue-600 transition-colors"
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
                <a href={link.href} className="hover:text-blue-600 transition-colors">
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="lg:hidden text-3xl text-gray-700">
          {isMenuOpen ? <MdClose /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="lg:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white shadow-md overflow-y-auto">
            <ul className="p-4">
              {navLinks.map((link, index) => (
                <li key={index} className="border-b border-gray-100 last:border-none">
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className="flex justify-between items-center w-full py-3 text-gray-800 hover:text-blue-600"
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
                            className="bg-gray-50 rounded-md overflow-hidden"
                          >
                            <div className="p-4">
                              {link.items.map((item, idx) => (
                                <a
                                  key={idx}
                                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                  className="block py-2 text-gray-600 hover:text-blue-600"
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
                    <a href={link.href} className="block py-3 text-gray-800 hover:text-blue-600">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;