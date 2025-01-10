import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
      text: "+44 (0) 20 7123 4567"
    },
    { 
      icon: FaEnvelope, 
      title: "Email",
      text: "concierge@royaleuropa.com"
    },
    { 
      icon: FaMapMarkerAlt, 
      title: "Location",
      text: "1 Royal Avenue, Mayfair, London"
    }
  ];

  return (
    <footer className="bg-blue-950">
      {/* Newsletter Section */}
      {/* <div className="border-b border-yellow-400/10">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-4xl font-light text-white mb-6">
              Begin Your <span className="text-yellow-400">Royal Journey</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our exclusive circle and receive personalized travel inspirations, 
              curated experiences, and privileged access to Europe's finest destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-blue-900/50 border border-yellow-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50"
              />
              <button className="px-8 py-4 bg-yellow-400 text-blue-950 rounded-lg hover:bg-yellow-300 transition-colors font-medium tracking-wide">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="/logo.png" 
                alt="Royal Europa" 
                className="h-12 w-auto rounded-full" 
              />
              <div>
                <h2 className="text-lg text-white font-light tracking-wider">ROYAL EUROPA</h2>
                {/* <span className="text-xs text-yellow-400 tracking-widest">EST. 1998</span> */}
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Creating extraordinary journeys across Europe's most prestigious destinations. 
              Where luxury meets legacy in travel excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, label, link }) => (
                <a
                  key={label}
                  href={link}
                  className="w-10 h-10 rounded-full border border-yellow-400/20 flex items-center justify-center
                    text-yellow-400 hover:bg-yellow-400 hover:text-blue-950 transition-all duration-300"
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
            <h4 className="text-sm text-yellow-400 tracking-widest mb-8">
              DESTINATIONS
            </h4>
            <ul className="space-y-4">
              {destinations.map(({ label, link }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNavigation(link)}
                    className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="text-sm text-yellow-400 tracking-widest mb-8">
              EXPERIENCES
            </h4>
            <ul className="space-y-4">
              {experiences.map(({ label, link }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNavigation(link)}
                    className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm text-yellow-400 tracking-widest mb-8">
              CONTACT
            </h4>
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center">
                    <Icon className="text-yellow-400" size={18} />
                  </div>
                  <div>
                    <h5 className="text-sm text-white tracking-wider mb-1">{title}</h5>
                    <p className="text-sm text-gray-400">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-yellow-400/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Royal Europa DMC. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-gray-400">
              <button 
                onClick={() => handleNavigation('/privacy')} 
                className="hover:text-yellow-400 transition-colors tracking-wide"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleNavigation('/terms')} 
                className="hover:text-yellow-400 transition-colors tracking-wide"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => handleNavigation('/cookies')} 
                className="hover:text-yellow-400 transition-colors tracking-wide"
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