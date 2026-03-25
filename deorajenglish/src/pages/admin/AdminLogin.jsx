import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const AdminLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showPopup = (type, message) => {
    setPopup({ type, message });
    setTimeout(() => setPopup(null), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      if (res.data.success) {
        showPopup("success", "Login Successful ✅");

        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 1500);
      }
    } catch (err) {
      showPopup(
        "error",
        "❌ Yeh Admin Login hai! Tum login kyu kar rahe ho?"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 px-4">

      {/* Popup */}
      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white z-50
              ${popup.type === "success" ? "bg-green-800" : "bg-red-500"}`}
          >
            {popup.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Login Card */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Admin Panel Login
        </h2>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="w-full p-3 mb-4 rounded-lg border border-white/20 bg-transparent text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-indigo-400"
          onChange={handleChange}
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="w-full p-3 mb-5 rounded-lg border border-white/20 bg-transparent text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-indigo-400"
          onChange={handleChange}
          required
        />

        {/* Button */}
        <button
          disabled={loading}
          className={`w-full p-3 rounded-lg font-semibold transition duration-300 ${
            loading
              ? "bg-gray-500 cursor-not-allowed text-white"
              : "bg-indigo-500 text-white hover:bg-indigo-600"
          }`}
        >
          {loading ? "Please wait..." : "Login"}
        </button>
      </motion.form>
    </div>
  );
};

export default AdminLogin;