import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const destinations = [
    { label: "Paris", link: "/paris" },
    { label: "Switzerland", link: "/switzerland" },
    { label: "Greece", link: "/greece" },
    { label: "Italy", link: "/italy" },
    { label: "Germany", link: "/germany" },
    { label: "London", link: "/london" },
  ];

  const experiences = [
    { label: "Adventure", link: "/category/adventure" },
    { label: "Culture", link: "/category/culture" },
    { label: "Beach", link: "/category/beach" },
    { label: "Nature", link: "/category/nature" },
    { label: "Winter", link: "/category/winter" },
    { label: "Luxury", link: "/category/luxury" },
  ];

  const socialLinks = [
    { icon: FaTwitter, label: "Twitter", link: "#" },
    { icon: FaInstagram, label: "Instagram", link: "#" },
    { icon: FaFacebookF, label: "Facebook", link: "#" },
    { icon: FaLinkedinIn, label: "LinkedIn", link: "#" },
  ];

  const contactInfo = [
    { 
      icon: FaPhone, 
      title: "Call Us",
      text: "+1 (555) 123-4567"
    },
    { 
      icon: FaEnvelope, 
      title: "Email",
      text: "info@royaleuropa.com"
    },
    { 
      icon: FaMapMarkerAlt, 
      title: "Location",
      text: "123 Europa Street, London"
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Newsletter Section */}
      {/* <div className="bg-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 mb-8">
              Stay updated with our latest tours and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.jpg" 
                alt="Royal Europa" 
                className="h-8" 
              />
              <h2 className="text-xl font-bold text-gray-800">Royal Europa DMC</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Discover Europe's finest destinations with Royal Europa DMC. 
              Creating unforgettable travel experiences
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, label, link }) => (
                <a
                  key={label}
                  href={link}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center
                    hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Popular Destinations
            </h4>
            <ul className="space-y-3">
              {destinations.map(({ label, link }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNavigation(link)}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Travel Experiences
            </h4>
            <ul className="space-y-3">
              {experiences.map(({ label, link }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNavigation(link)}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Icon className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-900">{title}</h5>
                    <p className="text-sm text-gray-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Royal Europa DMC. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-gray-600">
              <button 
                onClick={() => handleNavigation('/privacy')} 
                className="hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleNavigation('/terms')} 
                className="hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => handleNavigation('/cookies')} 
                className="hover:text-blue-600 transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;