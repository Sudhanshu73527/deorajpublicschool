import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const ManageUpcoming = () => {

  const [form, setForm] = useState({
    title: "",
    date: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://deorajpublicschool.onrender.com/api/upcoming/all");
      setEvents(res.data);
    } catch {
      toast.error("Failed to load ❌");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ADD
  const handleAdd = async () => {
    if (!form.title || !form.date || !form.description || !image) {
      toast.error("All fields required ❌");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("date", form.date);
    formData.append("description", form.description);
    formData.append("image", image);

    try {
      await axios.post("https://deorajpublicschool.onrender.com/api/upcoming/add", formData);
      toast.success("Event Added 🎉");

      setForm({ title: "", date: "", description: "" });
      setImage(null);
      setPreview(null);

      fetchData();
    } catch {
      toast.error("Error adding event ❌");
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://deorajpublicschool.onrender.com/api/upcoming/delete/${id}`);
      toast.success("Deleted 🗑️");
      fetchData();
    } catch {
      toast.error("Delete failed ❌");
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* TOASTER */}
      <Toaster position="top-right" />

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
           Manage Upcoming Events
        </h1>
        <p className="text-gray-500">
          Add and manage upcoming school activities.
        </p>
      </div>

      {/* FORM */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">

        <h2 className="text-xl font-semibold mb-4">
          ➕ Add Upcoming Event
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={form.title}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="description"
            placeholder="Short Description"
            value={form.description}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
              setPreview(URL.createObjectURL(e.target.files[0]));
            }}
            className="border p-2 rounded-lg"
          />
        </div>

        <button
          onClick={handleAdd}
          className="mt-4 bg-gradient-to-r from-green-600 to-emerald-400 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition cursor-pointer"
        >
          Add Event
        </button>

        {/* PREVIEW */}
        {preview && (
          <img
            src={preview}
            className="mt-4 h-40 rounded-xl object-cover"
          />
        )}
      </div>

      {/* LIST */}
      <div>
        <h2 className="text-xl font-semibold mb-6">
           Upcoming Events List
        </h2>

        {events.length === 0 ? (
          <p className="text-gray-400">No events found...</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {events.map((ev, index) => (
              <motion.div
                key={ev._id}
                className="bg-white rounded-2xl shadow-md overflow-hidden group"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >

                {/* FIXED IMAGE */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={`https://deorajpublicschool.onrender.com/api/uploads/${ev.image}`}
                    className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col gap-2">

                  <h3 className="font-semibold text-lg">
                    {ev.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    📅 {ev.date}
                  </p>

                  {/* FIX DESCRIPTION HEIGHT */}
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {ev.description}
                  </p>

                  <button
                    onClick={() => handleDelete(ev._id)}
                    className="mt-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>

                </div>

              </motion.div>
            ))}

          </div>
        )}
      </div>

    </div>
  );
};

export default ManageUpcoming;