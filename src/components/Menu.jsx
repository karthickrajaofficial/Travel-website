import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaCity, FaGlobeAsia, FaPlane, FaMountain } from "react-icons/fa";
import { GiWorld, GiPalmTree, GiLion } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Menu = () => {
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Navigate to destination
  const handleNavigate = (destination) => {
    navigate(`/${destination.toLowerCase().replace(/ /g, "-")}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Go back to main menu
  const handleBack = () => {
    setCurrentCategory(null);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Close the menu (you can set visibility state if needed)
        setCurrentCategory(null); // Reset to main menu
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="absolute top-full left-0 w-full bg-white shadow-lg z-50"
      ref={menuRef}
    >
      <div className="max-w-[1400px] mx-auto px-4 py-6 relative">
      

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
                  <FaCity className="mr-2 text-primary" />
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

export default Menu;
