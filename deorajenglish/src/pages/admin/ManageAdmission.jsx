import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Trash2, UploadCloud } from "lucide-react";

const ManageAdmission = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admissions/all");
      setNotifications(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (file) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleAdd = async () => {
    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => formData.append(key, form[key]));
      if (image) formData.append("image", image);

      await axios.post("http://localhost:5000/api/admissions/add", formData);

      setForm({ title: "", description: "", startDate: "", endDate: "" });
      setImage(null);
      setPreview(null);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admissions/delete/${id}`);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-4 md:p-10">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-bold mb-6 text-gray-800"
        >
          Manage Admission Notifications
        </motion.h1>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
            />

            <input
              type="text"
              placeholder="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
            />

            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
            />

            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              className="border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          {/* IMAGE UPLOAD */}
          <div className="mt-4 flex flex-col md:flex-row items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">
              <UploadCloud size={18} /> Upload Image
              <input
                type="file"
                hidden
                onChange={(e) => handleImage(e.target.files[0])}
              />
            </label>

            {preview && (
              <img
                src={preview}
                alt="preview"
                className="h-20 w-20 object-cover rounded-lg"
              />
            )}

            <button
              onClick={handleAdd}
              className="ml-auto bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow"
            >
              Add Notification
            </button>
          </div>
        </motion.div>

        {/* LIST */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notifications.map((n, i) => (
            <motion.div
              key={n._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {n.image && (
                <img
                  src={`http://localhost:5000/uploads/${n.image}`}
                  alt=""
                  className="h-40 w-full object-cover"
                />
              )}

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {n.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {n.description}
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  {n.startDate} → {n.endDate}
                </p>

                <button
                  onClick={() => handleDelete(n._id)}
                  className="flex items-center gap-1 mt-3 text-red-500 hover:text-red-600"
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

export default ManageAdmission;
