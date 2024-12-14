import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FaCity, FaGlobeAsia, FaPlane, FaMountain } from "react-icons/fa";
import { GiWorld, GiPalmTree, GiLion } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Menu = ({ onClose }) => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  // Icons for categories
  const categoryIcons = {
    "City Breaks": <FaCity />,
    Asia: <FaGlobeAsia />,
    Europe: <FaPlane />,
    "North America": <GiWorld />,
    "South America": <GiPalmTree />,
    Africa: <GiLion />,
    Oceania: <FaMountain />,
  };

  // Tour categories and destinations
  const tourCategories = {
    "City Breaks": [],
    Asia: ["Australia", "Bhutan", "China", "India", "Japan"],
    Europe: ["France", "Germany", "Italy", "Spain", "United Kingdom"],
    "North America": ["Canada", "Mexico", "United States"],
    "South America": ["Argentina", "Brazil", "Chile"],
    Africa: ["Egypt", "Kenya", "South Africa"],
    Oceania: ["Australia", "Fiji", "New Zealand"],
  };

  // Handle category selection
  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };

  // Navigate to destination
  const handleNavigate = (destination) => {
    navigate(`/tours/${destination.toLowerCase().replace(/ /g, "-")}`);
    onClose(); // Close the menu after navigation
  };

  // Go back to main menu
  const handleBack = () => {
    setCurrentCategory(null);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div
      className="absolute top-full left-0 w-full bg-white shadow-lg z-50"
      ref={menuRef}
    >
      <div className="max-w-[1400px] mx-auto px-4 py-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-600 transition-transform transform hover:scale-110 focus:ring-1 focus:ring-black focus:outline-none group"
          aria-label="Close Menu"
        >
          <div className="relative">
            <span className="absolute inset-0 w-10 h-10 rounded-full bg-gray-100 opacity-0 group-hover:opacity-100 transition-transform transform group-hover:scale-125"></span>
            <AiOutlineClose
              className="w-6 h-6 relative z-10 transform transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110"
            />
          </div>
        </button>

        {/* Menu Title */}
        <h3 className="text-xl font-semibold mb-6 text-gray-800">
          {/* {currentCategory ? currentCategory : "Tour Categories"} */}
        </h3>

        {/* Back Button */}
        {currentCategory && (
          <button
            onClick={handleBack}
            className="mb-4 text-sm text-primary hover:underline flex items-center"
          >
            &larr; Back
          </button>
        )}

        {/* Menu Items - Vertical Alignment */}
        <ul className="flex flex-col space-y-4">
          {(currentCategory
            ? tourCategories[currentCategory]
            : Object.keys(tourCategories)
          ).map((item) => (
            <li key={item}>
              <button
                onClick={() =>
                  currentCategory
                    ? handleNavigate(item)
                    : handleCategoryClick(item)
                }
                className="flex items-center text-left text-gray-700 hover:text-primary transition w-full p-2 rounded-lg hover:bg-gray-100"
              >
                {currentCategory ? (
                  <FaPlane className="mr-2 text-primary" />
                ) : (
                  categoryIcons[item]
                )}
                <span className="ml-2">{item}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Menu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Menu;
