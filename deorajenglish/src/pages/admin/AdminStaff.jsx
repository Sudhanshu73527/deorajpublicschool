import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Trash2, UserPlus } from "lucide-react";

const AdminStaff = () => {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    experience: "",
  });

  const [staff, setStaff] = useState([]);
  const [message, setMessage] = useState(""); // ✅ message state

  const fetchStaff = async () => {
    try {
      const res = await axios.get("https://deorajpublicschool.onrender.com/api/staff");
      setStaff(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("https://deorajpublicschool.onrender.com/api/staff", form);
      setForm({ name: "", subject: "", experience: "" });
      fetchStaff();

      // ✅ success message
      setMessage("Staff details added successfully ✅");

      // auto hide after 3 sec
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong ❌");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://deorajpublicschool.onrender.com/api/staff/${id}`);
      fetchStaff();

      setMessage("Staff deleted successfully 🗑️");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error(err);
      setMessage("Delete failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-4 md:p-10">
      <div className="max-w-5xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          Manage Staff
        </motion.h1>

        {/* ✅ MESSAGE UI */}
        {message && (
          <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700 text-sm font-medium">
            {message}
          </div>
        )}

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              name="name"
              placeholder="Teacher Name"
              value={form.name}
              onChange={handleChange}
              className="border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
            />

            <input
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
            />

            <input
              name="experience"
              placeholder="Experience (e.g. 5 Years)"
              value={form.experience}
              onChange={handleChange}
              className="border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="mt-4 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow"
          >
            <UserPlus size={18} /> Add Staff
          </button>
        </motion.div>

        {/* STAFF LIST */}
        <div className="space-y-4">
          {staff.map((s, index) => (
            <motion.div
              key={s._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col md:flex-row justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {s.name}
                </h2>
                <p className="text-sm text-green-600 font-medium">
                  {s.subject}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-2 md:mt-0">
                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                  {s.experience}
                </span>

                <button
                  onClick={() => handleDelete(s._id)}
                  className="text-red-500 hover:text-red-600 flex items-center gap-1"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AdminStaff;