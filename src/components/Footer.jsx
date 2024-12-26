import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaDribbble,
  FaSnapchat,
  FaLine,
  FaPhone,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const socialLinks = [
    { href: "#", icon: FaTwitter, label: "Twitter", color: "hover:text-blue-500" },
    { href: "#", icon: FaDribbble, label: "Dribbble", color: "hover:text-pink-500" },
    { href: "#", icon: FaSnapchat, label: "Snapchat", color: "hover:text-yellow-500" },
    { href: "#", icon: FaLine, label: "Line", color: "hover:text-green-500" },
  ];

  // const tourTypes = [
  //   { id: 1, name: "Solo Adventures", link: "/tours#solo-adventures" },
  //   { id: 2, name: "Culinary Journeys", link: "/tours#culinary-journeys" },
  //   { id: 3, name: "Cultural Immersion", link: "/tours#cultural-immersion" },
  //   { id: 4, name: "Luxury Retreats", link: "/tours#luxury-retreats" },
  //   { id: 5, name: "Eco Tours", link: "/tours#eco-tours" },
  // ];
  const tourTypes = [
    { label: "Solo Adventures", link: "/tours/solo-adventures" },
    { label: "Culinary Journeys", link: "/tours/culinary-journeys" },
    { label: "Cultural Immersion", link: "/tours/cultural-immersion" },
    { label: "Luxury Retreats", link: "/tours/luxury-retreats" },
    { label: "Eco Tours", link: "/tours/eco-tours" },
  ];

  const galleryImages = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];

  const contactInfo = [
    { icon: FaPhone, text: "+987654321 | +9187654321", color: "text-yellow-500" },
    { icon: FaClock, text: "Mon-Fri 09:00-6:00 (Closed on holidays)", color: "text-blue-500" },
    { icon: FaMapMarkerAlt, text: "123 GrandEurope Avenue, Explore City", color: "text-red-500" },
  ];

  const handleTourClick = (route) => {
    navigate(route);
  };

  return (
    <footer className="bg-gray-700 text-black py-10">
      <div className="footer__top">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* About Section */}
            <section>
              <img src="logo/logo.png" alt="Travel logo" className="mb-4 w-24" />
              <p className="text-sm mb-4">
                Explore the world with us. Delivering unforgettable experiences and seamless travel journeys.
              </p>
              <h5 className="text-lg font-semibold mb-2">Follow Us On:</h5>
              <ul className="flex gap-4">
                {socialLinks.map(({ href, icon: Icon, label, color }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className={`text-gray-400 ${color}`}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={20} />
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Tour Types Section */}
            {/* <section>
              <h5 className="text-lg font-semibold mb-4">Tour Types</h5>
              <ul className="space-y-2 text-sm">
                {tourTypes.map(({ name, route }, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleTourClick(route)}
                      className="hover:text-gray-300"
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </section> */}
              <section>
            <h5 className="text-lg font-semibold mb-4">Tour Types</h5>
          <ul className="space-y-2 text-sm">
  {tourTypes.map(({ label, link }, index) => (
    <li key={index}>
      <a href={link} className="hover:text-gray-300">
        {label}
      </a>
    </li>
  ))}
</ul>
          </section>

            {/* Contact Info Section */}
            <section>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <ul className="space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, color }, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Icon className={color} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Gallery Section */}
            <section>
              <h5 className="text-lg font-semibold mb-4">Gallery</h5>
              <ul className="grid grid-cols-3 sm:grid-cols-2 gap-2">
                {galleryImages.map((image, index) => (
                  <li key={index}>
                    {/* <a href={`gallery/footer/${image}`} target="_blank" rel="noopener noreferrer"> */}
                      <img
                        src={`gallery/footer/${image}`}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-20 object-cover rounded-md hover:scale-110 hover:opacity-80 transition duration-300"
                        // onError={(e) => (e.target.src = "gallery/footer/fallback.jpg")}
                      />
                    {/* </a> */}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom bg-gray-800 mt-10">
        <div className="container mx-auto px-4 text-center py-4">
          <p className="text-sm">
            © 2024. All Rights Reserved by{" "}
            <a href="https://www.example.com" className="text-blue-400 hover:underline">
              Royal Europa DMC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
