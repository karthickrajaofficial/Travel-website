import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeRegion, setActiveRegion] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const europeanRegions = {
    "Northern Europe": [
      "Finland",
      "Iceland",
      "Ireland",
      "Norway",
      "Scotland",
      "Sweden",
      "Baltic Region",
    ],
    "Southern Europe": [
      "Albania",
      "Bosnia",
      "Bulgaria",
      "Croatia",
      "Cyprus",
      "Greece",
      "Italy",
      "Malta",
      "Monaco",
      "Portugal",
      "Serbia",
      "Slovenia",
      "Spain",
    ],
    "Eastern Europe": ["Czech Republic", "Hungary", "Poland"],
    "Western Europe": [
      "Austria",
      "Belgium",
      "France",
      "Germany",
      "Great Britain",
      "Netherlands",
      "Paris",
      "Switzerland",
    ],
  };
  
  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "Company",
      hasDropdown: true,
      items: ["About", "Accreditations & Awards", "Work", "Our Uniqueness"],
    },
    {
      label: "Explore Europa",
      hasDropdown: true,
      regions: europeanRegions,
    },
    {
      label: "Products",
      hasDropdown: true,
      items: [
        "Group Tours",
        "FIT Tours",
        "MICE Tours",
        "Honeymoon Tours",
        "Luxury Tours",
        "Senior Citizen Tours",
        "City Breaks",
        "Multi City Packages",
        "Escorted Tours",
        "Rail Tours",
        "Self Drive Holidays",
        "Chauffeur Driven Tour",
      ],
    },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (isMenuOpen) {
      setActiveDropdown(null);
      setActiveRegion(null);
    }
  };

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
    setActiveRegion(null);
  };

  const toggleRegion = (region) => {
    setActiveRegion(activeRegion === region ? null : region);
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
    setActiveRegion(null);
  };

  const renderDropdown = (link) => {
    if (link.label === "Explore Europa") {
      return (
        <div className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-slate-900/95 to-blue-950/95 backdrop-blur-md rounded-none shadow-2xl overflow-hidden border border-yellow-400/20">
          <div className="">
            <div className="p-6">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-yellow-400"></div>
                <h3 className="text-yellow-400 tracking-[0.2em] text-sm">
                  EXPLORE
                </h3>
                <div className="h-px w-8 bg-yellow-400"></div>
              </div>
              <div className="grid grid-cols-1 gap-6 w-64">
                {Object.entries(link.regions).map(([region, countries]) => (
                  <div key={region} className="space-y-4">
                    <button
                      onClick={() => toggleRegion(region)}
                      className="text-yellow-400 font-medium tracking-wider text-sm flex items-center gap-2 hover:text-yellow-300 transition-colors w-full"
                    >
                      {region}
                      <FiChevronDown
                        className={`transition-transform ${
                          activeRegion === region ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeRegion === region && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="space-y-2"
                        >
                          {countries.map((country) => (
                            <a
                              key={country}
                              href={`/${country
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm tracking-wider font-light"
                            >
                              {country}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    

    return (
      <div className="absolute top-full left-0 mt-2 min-w-[16rem] w-auto bg-gradient-to-br from-slate-900/95 to-blue-950/95 backdrop-blur-md rounded-none shadow-2xl border border-yellow-400/20">
        <div className="max-h-[90vh] overflow-y-auto">
          <div className="p-6 whitespace-nowrap">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-yellow-400"></div>
              <h3 className="text-yellow-400 tracking-[0.2em] text-sm">
                {link.label}
              </h3>
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

  const renderMobileDropdown = (link) => {
    if (link.label === "Explore Europa") {
      return (
        <div className="bg-blue-950/50 overflow-hidden border-l border-yellow-400/20">
          <div className="p-4 space-y-4">
            {Object.entries(link.regions).map(([region, countries]) => (
              <div key={region}>
                <button
                  onClick={() => toggleRegion(region)}
                  className="text-yellow-400 font-medium tracking-wider text-sm flex items-center justify-between w-full py-2"
                >
                  {region}
                  <FiChevronDown
                    className={`transition-transform ${
                      activeRegion === region ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeRegion === region && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="ml-4 space-y-2 mt-2"
                    >
                      {countries.map((country) => (
                        <a
                          key={country}
                          href={`/${country
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block text-gray-400 hover:text-yellow-400 py-1 text-sm tracking-wider font-light"
                        >
                          {country}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="bg-blue-950/50 overflow-hidden border-l border-yellow-400/20">
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
      </div>
    );
  };

  return (
    <>
      <div className="hidden lg:block">
        <TopBar />
      </div>
      <div className="fixed inset-0 w-full h-20 z-40 lg:top-8 top-0">
        <div className={`absolute inset-0 transition-colors duration-300 ${
          isScrolled ? 'lg:bg-gray-900 bg-gray-900' : 'lg:bg-transparent bg-gray-900'
        }`} />
      </div>
      
      <nav className="fixed left-0 right-0 h-20 z-50 lg:top-8 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full relative">
          <a href="/" className="flex items-center gap-4 relative">
            <img
              src="/logo.png"
              alt="Royal Europa DMC Logo"
              className="h-12 w-auto"
            />
            <span className="text-xl text-white tracking-wider font-light">
              Royal Europa DMC
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-x-8 text-sm tracking-wider font-light text-white relative">
            {navLinks.map((link, index) => (
              <li 
                key={index} 
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                {link.hasDropdown ? (
                  <>
                    <button className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                      {link.label}
                      <FiChevronDown className="transition-transform group-hover:rotate-180" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {renderDropdown(link)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-3xl text-white hover:text-yellow-400 transition-colors relative"
          >
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
              className="lg:hidden fixed left-0 right-0 top-20 h-[calc(100vh-5rem)] bg-gray-900 overflow-y-auto border-t border-yellow-400/20"
            >
              <ul className="p-6">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className="border-b border-yellow-400/10 last:border-none"
                  >
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
                          {activeDropdown === link.label &&
                            renderMobileDropdown(link)}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={link.href}
                        className="block py-4 text-white hover:text-yellow-400 tracking-wider font-light"
                      >
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
    </>
  );
};

export default Navbar;