import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBullhorn,
  FaImages,
  FaCalendarAlt,
  FaClock,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaBuilding,
  FaBell,
  FaBars,
  FaHome,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// soft pastel color themes for cards
const cardThemes = [
  { bg: "bg-blue-50", accent: "text-blue-600", ring: "ring-blue-200" },
  { bg: "bg-pink-50", accent: "text-pink-600", ring: "ring-pink-200" },
  { bg: "bg-purple-50", accent: "text-purple-600", ring: "ring-purple-200" },
  { bg: "bg-green-50", accent: "text-green-600", ring: "ring-green-200" },
  { bg: "bg-yellow-50", accent: "text-yellow-600", ring: "ring-yellow-200" },
  { bg: "bg-indigo-50", accent: "text-indigo-600", ring: "ring-indigo-200" },
  { bg: "bg-rose-50", accent: "text-rose-600", ring: "ring-rose-200" },
  { bg: "bg-teal-50", accent: "text-teal-600", ring: "ring-teal-200" },
  { bg: "bg-orange-50", accent: "text-orange-600", ring: "ring-orange-200" },
  { bg: "bg-orange-50", accent: "text-orange-600", ring: "ring-orange-200" },
];

const menuItems = [
  { name: "Dashboard", icon: <FaHome />, path: "/admin" },
  { name: "Student Fee", icon: <FaBuilding />, path: "/add" },  
  { name: "Notices", icon: <FaBullhorn />, path: "/admin/manage-updates" },
  { name: "Gallery", icon: <FaImages />, path: "/admin/manage-gallery" },
  { name: "Events", icon: <FaCalendarAlt />, path: "/admin/manage-event" },
  { name: "Upcoming", icon: <FaClock />, path: "/admin/upcoming-events" },
  { name: "Admission", icon: <FaBell />, path: "/admin/admission-notification" },
  { name: "Staff", icon: <FaChalkboardTeacher />, path: "/admin/staff" },
  { name: "Update Gallery", icon: <FaClock />, path: "/admin/gallery" },
  { name: "Fees", icon: <FaMoneyBillWave />, path: "/admin/fee" },
  { name: "Infra", icon: <FaBuilding />, path: "/admin/infra" },
];

const AdminDashboard = () => {
  const [active, setActive] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">

      {/* SIDEBAR */}
      <div className="hidden md:flex flex-col w-64 bg-white/90 backdrop-blur-xl border-r p-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-10">Admin Dashboard</h2>

        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => {
                setActive(item.name);
                navigate(item.path);
              }}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                active === item.name
                  ? "bg-green-100 text-green-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed top-0 left-0 h-full w-72 bg-white p-5 z-50 shadow-xl"
            >
              <h2 className="text-xl font-bold mb-6 text-gray-800">Admin</h2>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => {
                      setActive(item.name);
                      navigate(item.path);
                      setSidebarOpen(false);
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MAIN */}
      <div className="flex-1">

        {/* TOPBAR */}
        <div className="flex justify-between items-center p-4 bg-white/70 backdrop-blur-lg border-b sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
              <FaBars />
            </button>
            <h1 className="text-xl font-semibold text-gray-800">{active}</h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              Active
            </div>
            <div className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
              A
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6">

          {/* HERO */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome Back Admin👋</h2>
            <p className="text-sm text-gray-500">Manage everything smoothly from here</p>
          </div>

          {/* COLORFUL CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.slice(1).map((item, index) => {
              const theme = cardThemes[index % cardThemes.length];
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate(item.path)}
                  className={`p-6 rounded-2xl border ${theme.bg} ${theme.ring} ring-1 shadow-sm hover:shadow-lg transition cursor-pointer`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow ${theme.accent} text-xl`}>
                      {item.icon}
                    </div>
                    <span className="text-xs text-gray-400">Open</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">Quick access to manage this section</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
