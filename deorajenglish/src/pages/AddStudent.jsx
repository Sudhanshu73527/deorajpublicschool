import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AddStudent = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    className: "",
    totalFee: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("https://deorajpublicschool.onrender.com/api/students/add", form);
      alert("✅ Student Added Successfully");
      setForm({ name: "", className: "", totalFee: "" });
      navigate("/add");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add student");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50 p-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Add New Student</h1>
          <p className="text-gray-500">Fill in student details to register</p>
        </div>

        <button
          onClick={() => navigate("/list")}
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl shadow-md transition"
        >
           View Students
        </button>
      </div>

      {/* FORM CARD FULL WIDTH */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full"
      >
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* NAME */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Student Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border rounded-xl p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* CLASS */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Class
            </label>
            <select
              value={form.className}
              onChange={(e) => setForm({ ...form, className: e.target.value })}
              className="border rounded-xl p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            >
              <option value="">Select Class</option>
              {[1,2,3,4,5,6,7,8,9,10].map((c) => (
                <option key={c} value={c}>
                  Class {c}
                </option>
              ))}
            </select>
          </div>

          {/* FEE */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Monthly Fee (₹)
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              value={form.totalFee}
              onChange={(e) => setForm({ ...form, totalFee: e.target.value })}
              className="border rounded-xl p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* BUTTON FULL WIDTH */}
          <div className="md:col-span-3">
            <motion.button
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold shadow-md transition"
            >
              {loading ? "Adding Student..." : " Add Student"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddStudent;
