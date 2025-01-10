import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div
      className="top-0 fixed  left-0 w-full bg-blue-900 z-5 text-white py-1 sm:py-2 px-2 sm:px-4 md:px-8 z-50 shadow-md"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="flex flex-row gap-2 md:gap-6 items-center text-[10px] sm:text-xs md:text-sm">
            <span className="flex items-center gap-1 md:gap-2">
              <FaPhoneAlt className="w-2 h-2 md:w-3 md:h-3" /> 
              <span className="hidden sm:inline">+123-456-7890</span>
              <span className="sm:hidden">+123...</span>
            </span>
            <span className="flex items-center gap-1 md:gap-2">
              <FaEnvelope className="w-2 h-2 md:w-3 md:h-3" />
              <span className="hidden sm:inline">info@Grandeuropa.com</span>
              <span className="sm:hidden">info@...</span>
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2 sm:gap-4 md:gap-6 items-center">
            <div className="flex gap-2 sm:gap-4 items-center">
              <a href="#" className="hover:text-gray-200">
                <FaFacebookF className="w-2 h-2 md:w-3 md:h-3" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaTwitter className="w-2 h-2 md:w-3 md:h-3" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaInstagram className="w-2 h-2 md:w-3 md:h-3" />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaLinkedinIn className="w-2 h-2 md:w-3 md:h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;