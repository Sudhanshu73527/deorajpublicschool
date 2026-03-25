import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* School Info */}
        <div>

          <h2 className="text-xl font-semibold text-white mb-4">
            Deoraj Public English School
          </h2>

          <p className="text-sm leading-relaxed">
            Providing quality education and a nurturing environment where
            students grow academically, creatively and socially.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">

            <li>
              {/* <Link to="/" className="hover:text-green-400"> */}
                Home
              
            </li>

            <li>
              {/* <Link to="/about" className="hover:text-green-400"> */}
                About Us
              {/* </Link> */}
            </li>

            <li>
              {/* <Link to="/events" className="hover:text-green-400"> */}
                Events
              {/* </Link> */}
            </li>

            <li>
              {/* <Link to="/facilities" className="hover:text-green-400"> */}
                Facilities
              {/* </Link> */}
            </li>

            <li>
              {/* <Link to="/contact" className="hover:text-green-400"> */}
                Contact
              {/* </Link> */}
            </li>

          </ul>

        </div>

        {/* Contact Info */}
        <div>

          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <ul className="space-y-3 text-sm">

            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Ramnagar, West Champaran
            </li>

            <li className="flex items-center gap-2">
              <FaPhone /> +91 9876543210
            </li>

            <li className="flex items-center gap-2">
              <FaEnvelope /> school@email.com
            </li>

          </ul>

        </div>

        {/* Social Media */}
        <div>

          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">

        © {new Date().getFullYear()} Deoraj Public English School. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;