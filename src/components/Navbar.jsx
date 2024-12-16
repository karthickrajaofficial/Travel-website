import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import Menu from "./Menu"; // Import your Menu component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown (Tours)

  const navLinks = [
    { label: "Tours", hasDropdown: true },
    { label: "About", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close the dropdown when closing the mobile menu
    if (isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className="w-full h-20 sticky top-0 z-50 bg-white shadow-xl opacity-3">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex items-center">
          <span className="ml-4 text-xl font-bold text-gray-800">
            Royal Europa DMC
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-x-10 text-lg font-medium text-gray-800">
          {navLinks.map((link, index) => (
            <li key={index} className="relative">
              {link.href ? (
                <a href={link.href} className="hover:text-primary transition duration-200">{link.label}</a>
              ) : (
                <>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="hover:text-primary flex items-center gap-1 transition duration-200"
                    aria-expanded={activeDropdown === link.label}
                  >
                    {link.label}
                    <FiChevronDown
                      className={`transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>
                  {/* Dropdown Menu */}
                  {activeDropdown === link.label && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-md z-50">
                      <Menu onClose={() => setActiveDropdown(null)} /> {/* Render Menu here */}
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMobileMenu} className="lg:hidden text-3xl text-gray-700" aria-label="Toggle Menu">
          {isMenuOpen ? <MdClose /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white w-full fixed top-20 left-0 shadow-md z-50">
          <ul className="flex flex-col items-center py-4">
            {/* Tours Section with Dropdown */}
            <li className="w-full">
              <div className="w-full">
                <button
                  onClick={() => toggleDropdown("Tours")}
                  className="flex w-full py-3 px-6 text-gray-800 hover:bg-primary hover:text-white justify-between items-center transition-colors duration-300"
                  aria-expanded={activeDropdown === "Tours"}
                >
                  Tours
                  <FiChevronDown
                    className={`transition-transform duration-300 ${activeDropdown === "Tours" ? "rotate-180" : "rotate-0"}`}
                  />
                </button>
                {/* Show the Menu when Tours dropdown is active */}
                {activeDropdown === "Tours" && (
                  <div className="w-full bg-gray-100 shadow-inner">
                    <Menu onClose={() => setActiveDropdown(null)} />
                  </div>
                )}
              </div>
            </li>

            {/* Show other sections only if Tours dropdown is not active */}
            {activeDropdown !== "Tours" && (
              <>
                <li className="w-full">
                  <a
                    href="/about"
                    className="block w-full py-3 px-6 text-center text-gray-800 hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="/testimonials"
                    className="block w-full py-3 px-6 text-center text-gray-800 hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="/contact"
                    className="block w-full py-3 px-6 text-center text-gray-800 hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
