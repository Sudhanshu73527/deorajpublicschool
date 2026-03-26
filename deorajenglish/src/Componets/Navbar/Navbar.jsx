import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLock,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const navItems = [
    { name: "HOME", path: "/" },
    {
      name: "ABOUT US",
      subItems: [
        { label: "About School", path: "/about-school" },
        { label: "Vision & Mission", path: "/vision" },
        { label: "Our Infrastructure", path: "/infrastructure" },
        { label: "RTE", path: "/rte" },
      ],
    },
    { name: "ACADEMICS", path: "/academics" },
 
    {
      name: "ADMISSION",
      subItems: [
        { label: "Admission Process", path: "/admission-process" },
        { label: "Admission Notification", path: "/notification" },
        { label: "Admission Structure", path: "/admission-structure" },
        {
          label: "Online Admission Registration",
          path: "/online-registration",
        },
      ],
    },
    { name: "GALLERY", path: "/gallery" },
    {
      name: "EXTRA CURRICULUM",
      subItems: [
        { label: "Music", path: "/music" },
        { label: "Dance", path: "/dance" },
        { label: "Yoga", path: "/yoga" },
      ],
    },
    {
      name: "MANDATORY DETAILS",
      subItems: [
        { label: "CBSE Info", path: "/cbse-info" },
        { label: "Staff Details", path: "/staff-details" },
        { label: "Fee Structure", path: "/fee" },
        { label: "Student Details", path: "/student" },
      ],
    },
    {
      name: "CONTACT",
      subItems: [{ label: "Contact Us", path: "/contact" }],
    },
  ];

  return (
    <header className="w-full shadow-md font-outfit top-0 z-50">
      {/* Top Bar */}
      <div className="bg-green-800 text-white text-xs md:text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91 821 026 3446</span>
            </span>
            <span className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-400" />
              <span>dpessikta0786@gmail.com</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <Link to={"/cbse-info"}>
              <span className="hover:text-yellow-400 cursor-pointer">CBSE</span>
            </Link>

            <Link to="/admin/login">
              <span className="flex items-center space-x-2 cursor-pointer hover:text-yellow-400">
                <FaLock /> <span>Login</span>
              </span>
            </Link>

            <Link to={"/online-registration"}>
              <button className="bg-yellow-400 px-5 py-1 rounded-sm font-semibold hover:bg-yellow-300 cursor-pointer">
                APPLY NOW
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Middle */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to={"/"}>
              <img src="/deoraj.png" alt="logo" className="h-14 md:h-20" />
            </Link>

            <h1 className="text-lg font-bold text-green-700 md:hidden truncate">
              Deoraj Public English School
            </h1>
          </div>

          {/* Desktop Title */}
          <div className="hidden md:block text-center flex-1">
            <h1 className="text-4xl font-extrabold text-green-800 uppercase">
              Deoraj Public English School
            </h1>
            <h2 className="text-xl font-bold text-purple-800">
              Sikta, Lauriya-845453
            </h2>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-2xl text-green-800"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Desktop Menu FIXED */}
      <nav className="hidden lg:block bg-green-800">
        <ul className="max-w-7xl mx-auto flex justify-between px-4 text-white">
          {navItems.map((item, i) => (
            <li key={i} className="relative group px-3 py-3 cursor-pointer">
              {item.path ? (
                <Link to={item.path}>{item.name}</Link>
              ) : (
                <span>{item.name}</span>
              )}

              {/* Dropdown */}
              {item.subItems && (
                <div
                  className="absolute left-0 top-full pt-2 z-50
                  opacity-0 invisible translate-y-3
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  transition-all duration-300"
                >
                  <ul className="bg-white text-gray-800 rounded-xl shadow-xl min-w-[220px] overflow-hidden">
                    {item.subItems.map((sub, idx) => (
                      <li
                        key={idx}
                        className="px-5 py-3 hover:bg-green-100 transition"
                      >
                        <Link to={sub.path} className="block w-full">
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              className="fixed top-0 left-0 w-full bg-white z-50 rounded-b-3xl"
            >
              <div className="flex items-center px-4 py-4 border-b">
                <img src="/deoraj.png" alt="logo" className="h-11" />

                <h2 className="flex-1 ml-3 text-green-800 font-semibold">
                  Deoraj Public English School
                </h2>

                <FaTimes
                  className="text-xl cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                />
              </div>

              <ul className="divide-y">
                {navItems.map((item, i) => (
                  <li key={i} className="px-5 py-4">
                    {item.path ? (
                      <Link to={item.path} onClick={() => setMenuOpen(false)}>
                        {item.name}
                      </Link>
                    ) : (
                      <>
                        <div
                          onClick={() =>
                            setOpenSubmenu(openSubmenu === i ? null : i)
                          }
                          className="flex justify-between font-semibold cursor-pointer"
                        >
                          {item.name}
                          <span>{openSubmenu === i ? "-" : "+"}</span>
                        </div>

                        {openSubmenu === i && (
                          <ul className="mt-3 ml-4 space-y-2">
                            {item.subItems.map((sub, idx) => (
                              <li key={idx}>
                                <Link
                                  to={sub.path}
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
