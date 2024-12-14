import React from "react";
import { useNavigate } from "react-router-dom";

const TourSection = () => {
  const navigate = useNavigate();

  const handleTourClick = (tourName) => {
    navigate(`/tour/${tourName}`); // Dynamically navigate to the specific tour page
  };

  return (
    <section className="tour__area py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Example Tour List */}
        <div className="tour-list">
          <button onClick={() => handleTourClick("bhutan")}>Bhutan Tour</button>
          <button onClick={() => handleTourClick("indonesia")}>Indonesia Tour</button>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
