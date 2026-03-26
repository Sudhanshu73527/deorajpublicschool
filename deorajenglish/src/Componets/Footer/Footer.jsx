import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* School Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/deoraj.png"
              alt="School Logo"
              className="w-12 h-12 object-contain"
            />
            <h2 className="text-xl font-semibold text-white leading-tight">
              Deoraj Public <br /> English School
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-gray-400">
            Providing quality education and a nurturing environment where
            students grow academically, creatively and socially.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-green-400">Home</Link></li>
            <li><Link to="/about-school" className="hover:text-green-400">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-green-400">Events</Link></li>
            <li><Link to="/academics" className="hover:text-green-400">Academics</Link></li>
            <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-green-400" />
              Sikta, West Champaran
            </li>

            <li className="flex items-center gap-3">
              <FaPhone className="text-green-400" />
              +91 821 026 3446
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-green-400" />
              dpessikta0786@gmail.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4">
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 text-white">
              <FaFacebookF />
            </a>

            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 text-white">
              <FaInstagram />
            </a>

            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 text-white">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400 space-y-2">

        <p>
          © {new Date().getFullYear()} Deoraj Public English School. All Rights Reserved.
        </p>

        {/* ✅ Powered By */}
        <p>
          Powered by{" "}
          <a
            href="https://webala.in"   // 👉 apna actual link daal dena
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 font-semibold hover:underline"
          >
            Webala
          </a>
        </p>

      </div>

    </footer>
  );
};

export default Footer;