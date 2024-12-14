import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import Menu from "./Menu"; // Import your Menu component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle
  const [isScrolled, setIsScrolled] = useState(false); // Scroll behavior
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown toggle for "Tours"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close the dropdown if the menu is closed
    if (isMenuOpen) {
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navLinks = [
    { label: "Tours", onClick: toggleDropdown },
    { label: "About", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`w-full h-20 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
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
                <a
                  href={link.href}
                  className="hover:text-primary transition duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <>
                  <button
                    onClick={link.onClick}
                    className="hover:text-primary flex items-center gap-1 transition duration-200"
                    aria-expanded={isDropdownOpen}
                  >
                    {link.label}
                    <FiChevronDown
                      className={`transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-md z-50">
                      <Menu onClose={toggleDropdown} />
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-3xl text-gray-700"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <MdClose /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white w-full fixed top-20 left-0 shadow-md z-50 flex flex-col justify-between h-full">
          {/* Tours Dropdown */}
          <ul className="flex flex-col items-center py-4">
            {navLinks.map((link, index) => (
              <li key={index} className="w-full">
                {link.href ? (
                  <a
                    href={link.href}
                    className="block w-full py-3 px-6 text-center text-gray-800 hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ) : (
                  <div className="w-full">
                    <button
                      onClick={link.onClick}
                      className="flex w-full py-3 px-6 text-gray-800 hover:bg-primary hover:text-white justify-between items-center transition-colors duration-300"
                      aria-expanded={isDropdownOpen}
                      aria-label={`Toggle ${link.label}`}
                    >
                      {link.label}
                      <FiChevronDown
                        className={`transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="w-full bg-gray-100 shadow-inner">
                        <Menu onClose={toggleDropdown} />
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Bottom Links (About, Testimonials, Contact) */}
          <div className="mt-auto">
            <ul className="flex flex-col items-center py-4">
              {navLinks.slice(1).map((link, index) => (
                <li key={index} className="w-full">
                  <a
                    href={link.href}
                    className="block w-full py-3 px-6 text-center text-gray-800 hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
