import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { FaBullhorn, FaTrophy, FaCalendarAlt } from "react-icons/fa";

const ManageUpdates = () => {
  const [form, setForm] = useState({
    title: "",
    desc: "",
    date: "",
    type: "announcement",
  });

  const [updates, setUpdates] = useState([]);
  const [editId, setEditId] = useState(null);

  const typeIcons = {
    announcement: <FaBullhorn />,
    achievement: <FaTrophy />,
    event: <FaCalendarAlt />,
  };

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/updates/all");
    setUpdates(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/updates/update/${editId}`, form);
        toast.success("Updated Successfully");
      } else {
        await axios.post("http://localhost:5000/api/updates/add", form);
        toast.success("Added Successfully");
      }

      setForm({ title: "", desc: "", date: "", type: "announcement" });
      setEditId(null);
      fetchData();
    } catch {
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/updates/delete/${id}`);
    toast("Deleted", { icon: "🗑️" });
    fetchData();
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditId(item._id);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] px-3 md:px-8 py-6">
      <Toaster position="top-right" />

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          📊 Updates Dashboard
        </h1>
        <div className="text-sm text-gray-500">Manage all updates in one place</div>
      </div>

      {/* MAIN GRID */}
      <div className="grid xl:grid-cols-4 gap-6">

        {/* FORM SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl xl:col-span-1"
        >
          <h2 className="font-semibold mb-4 text-gray-700">
            {editId ? "Edit Update" : "Add Update"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-green-500"
              value={form.title}
              onChange={handleChange}
              required
            />

            <textarea
              name="desc"
              placeholder="Description"
              rows="3"
              className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-green-500"
              value={form.desc}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="date"
              className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-green-500"
              value={form.date}
              onChange={handleChange}
              required
            />

            <div className="grid grid-cols-3 gap-2">
              {["announcement", "achievement", "event"].map((t) => (
                <div
                  key={t}
                  onClick={() => setForm({ ...form, type: t })}
                  className={`cursor-pointer flex flex-col items-center p-2 rounded-xl border transition-all ${
                    form.type === t
                      ? "bg-green-600 text-white scale-105 shadow"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {typeIcons[t]}
                  <span className="text-xs capitalize">{t}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white py-3 rounded-xl font-semibold shadow-lg">
              {editId ? "Update" : "Add Update"}
            </button>
          </form>
        </motion.div>

        {/* PREVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-3xl shadow-xl xl:col-span-1"
        >
          <h2 className="font-semibold mb-4">Live Preview 👀</h2>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg">
            <h3 className="font-bold text-lg">
              {form.title || "Title"}
            </h3>
            <p className="text-sm mt-2 opacity-90">
              {form.desc || "Description"}
            </p>
            <div className="flex justify-between text-xs mt-3 opacity-80">
              <span>{form.date || "Date"}</span>
              <span className="capitalize">{form.type}</span>
            </div>
          </div>
        </motion.div>

        {/* LIST SECTION */}
        <div className="xl:col-span-2 space-y-4 max-h-[75vh] overflow-y-auto pr-2">
          {updates.map((item) => (
            <motion.div
              key={item._id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-5 rounded-2xl shadow flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                  {item.type}
                </span>
              </div>

              <div className="flex gap-2 mt-3 md:mt-0">
                <button
                  onClick={() => handleEdit(item)}
                  className="px-4 py-1 rounded-lg bg-blue-500 text-white text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-4 py-1 rounded-lg bg-red-500 text-white text-sm"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageUpdates;