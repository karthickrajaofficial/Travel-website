import React from "react";
import { FaTwitter, FaDribbble, FaSnapchat, FaLine, FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-black py-10">
      <div className="footer__top">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <div className="footer__top--about">
                <img
                  src="logo/logo.png"
                  alt="Travel logo"
                  className="mb-4 w-24"
                />
                <p className="text-sm mb-4">
                  Explore the world with us. Delivering unforgettable experiences and seamless travel journeys.
                </p>
                <h5 className="text-lg font-semibold mb-2">Follow Us On:</h5>
                <ul className="flex gap-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-500">
                      <FaTwitter size={20} aria-label="Twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-pink-500">
                      <FaDribbble size={20} aria-label="Dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-yellow-500">
                      <FaSnapchat size={20} aria-label="Snapchat" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-green-500">
                      <FaLine size={20} aria-label="Line" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tour Types Section */}
            <div>
              <div className="footer__top--tour">
                <h5 className="text-lg font-semibold mb-4">Tour Types</h5>
                <ul className="space-y-2 text-sm">
                  {["Solo Adventures", "Culinary Journeys", "Cultural Immersion", "Luxury Retreats", "Eco Tours"].map((tour, index) => (
                    <li key={index}>
                      <a href="#" className="hover:text-gray-300">
                        {tour}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info Section */}
            <div>
              <div className="footer__top--contact">
                <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-2">
                    <FaPhone className="text-yellow-500" />
                    <span>+1 123-456-7890 | +44 987-654-3210</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaClock className="text-blue-500" />
                    <span>Mon-Fri 09:00-18:00 (Closed on holidays)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-red-500" />
                    <span>123 Wanderlust Avenue, Explore City</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Gallery Section */}
            <div>
              <div className="footer__top--gallery">
                <h5 className="text-lg font-semibold mb-4">Gallery</h5>
                <ul className="grid grid-cols-3 gap-2">
                  {["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"].map((image, index) => (
                    <li key={index}>
                      <a href={`gallery/footer/${image}`} data-rel="lightcase:collection">
                        <img
                          src={`gallery/footer/${image}`}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-20 object-cover rounded-md hover:opacity-80 transition duration-300"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom bg-gray-800 mt-10">
        <div className="container mx-auto px-4 text-center py-4">
          <p className="text-sm">
            © 2024. All Rights Reserved by{' '}
            <a
              href="https://www.example.com"
              className="text-blue-400 hover:underline"
            >
              Wanderlust Inc.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
