import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { label: "Products", hasDropdown: true },
    { label: "About", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const mobileItemVariants = {
    closed: {
      opacity: 0,
      x: -20
    },
    open: {
      opacity: 1,
      x: 0
    }
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.nav 
      className="w-full h-20 sticky top-0 z-50 bg-white shadow-xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        {/* Logo with hover animation */}
        <motion.a 
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center">
            <span className="ml-4 text-xl font-bold text-gray-800">
              Royal Europa DMC
            </span>
          </div>
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-x-10 text-lg font-medium text-gray-800">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {link.href ? (
                <motion.a
                  href={link.href}
                  className="hover:text-primary transition duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              ) : (
                <>
                  <motion.button
                    onClick={() => toggleDropdown(link.label)}
                    className="hover:text-primary flex items-center gap-1"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-expanded={activeDropdown === link.label}
                  >
                    {link.label}
                    <motion.div
                      animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiChevronDown />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        className="absolute top-full left-0 w-56 bg-white shadow-md z-50"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <Menu onClose={() => setActiveDropdown(null)} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle with animation */}
        <motion.button
          onClick={toggleMobileMenu}
          className="lg:hidden text-3xl text-gray-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <MdClose /> : <HiMenuAlt3 />}
        </motion.button>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white w-full fixed top-20 left-0 shadow-md z-50"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <ul className="flex flex-col items-center py-4">
              <motion.li 
                variants={mobileItemVariants}
                className="w-full"
              >
                <div className="w-full">
                  <motion.button
                    onClick={() => toggleDropdown("Tours")}
                    className="flex w-full py-3 px-6 text-gray-800 hover:bg-primary hover:text-white justify-between items-center"
                    whileHover={{ backgroundColor: "#primary", color: "#fff" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Tours
                    <motion.div
                      animate={{ rotate: activeDropdown === "Tours" ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiChevronDown />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {activeDropdown === "Tours" && (
                      <motion.div
                        className="w-full bg-gray-100 shadow-inner"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Menu onClose={() => setActiveDropdown(null)} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li>

              {activeDropdown !== "Tours" && (
                <>
                  {["About", "Testimonials", "Contact"].map((item, index) => (
                    <motion.li
                      key={item}
                      variants={mobileItemVariants}
                      className="w-full"
                    >
                      <motion.a
                        href={`/${item.toLowerCase()}`}
                        className="block w-full py-3 px-6  text-gray-800 hover:bg-primary hover:text-white"
                        whileHover={{ backgroundColor: "#primary", color: "#fff" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item}
                      </motion.a>
                    </motion.li>
                  ))}
                </>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;