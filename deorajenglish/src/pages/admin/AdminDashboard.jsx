import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBullhorn,
  FaImages,
  FaCalendarAlt,
  FaClock,
  FaBars,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Manage Notices", icon: <FaBullhorn />, path: "/admin/manage-updates" },
  { name: "Manage Gallery", icon: <FaImages />, path: "/admin/manage-gallery" },
  { name: "Manage Events", icon: <FaCalendarAlt />, path: "/admin/manage-event" },
  { name: "Upcoming Events", icon: <FaClock />, path: "/admin/upcoming-events" },
  { name: "Admission Notification", icon: <FaClock />, path: "/admin/admission-notification" },
  { name: "Update Gallery", icon: <FaClock />, path: "/admin/gallery" },
  { name: "Manage Staff", icon: <FaClock />, path: "/admin/staff" },
  { name: "Manage Fee Details", icon: <FaClock />, path: "/admin/fee" },
  { name: "Update Infrastructure", icon: <FaClock />, path: "/admin/infra" },

];

const AdminDashboard = () => {
  const [active, setActive] = useState("Manage Notices");
  const [sidebarOpen, setSidebarOpen] = useState(false); // only for mobile
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ================= DESKTOP SIDEBAR (UNCHANGED LOOK) ================= */}
      <motion.div
        animate={{ width: 260 }}
        className="hidden md:block bg-gradient-to-b from-green-900 to-green-700 text-white p-4 shadow-xl"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold tracking-wide">Admin</h2>
        </div>

        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => {
                setActive(item.name);
                navigate(item.path);
              }}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                active === item.name
                  ? "bg-white text-green-800 shadow-md"
                  : "hover:bg-white/20"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* ================= MOBILE SIDEBAR (MODERN) ================= */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
            />

            {/* drawer */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-green-900 to-green-700 text-white p-5 z-50 md:hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Admin</h2>
                <button onClick={() => setSidebarOpen(false)} className="text-lg">✕</button>
              </div>

              <ul className="space-y-3">
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => {
                      setActive(item.name);
                      navigate(item.path);
                      setSidebarOpen(false);
                    }}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition ${
                      active === item.name
                        ? "bg-white text-green-800"
                        : "hover:bg-white/20"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 w-full">

        {/* Topbar */}
        <div className="flex justify-between items-center p-4 bg-white shadow md:rounded-b-xl">
          <div className="flex items-center gap-3">
            {/* mobile menu btn */}
            <button
              className="md:hidden text-xl"
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars />
            </button>

            <h1 className="text-lg md:text-2xl font-bold text-gray-800">
              {active}
            </h1>
          </div>

          <div className="bg-white px-3 py-1 rounded-xl shadow text-sm">
            👤 Admin
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">

          {/* Welcome */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-5 rounded-2xl shadow-lg mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-1">
              Welcome Admin Happy to see you again !
            </h2>
            <p className="text-xs md:text-sm opacity-90">
              Manage your school easily from mobile & desktop
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate(item.path)}
                className="bg-white p-4 md:p-6 rounded-2xl shadow-md cursor-pointer"
              >
                <div className="text-green-700 text-xl md:text-2xl mb-2">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-sm md:text-lg text-gray-700">
                  {item.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  Click to manage
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
