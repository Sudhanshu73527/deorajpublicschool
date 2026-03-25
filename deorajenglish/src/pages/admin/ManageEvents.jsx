import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const ManageEvents = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [events, setEvents] = useState([]);

  // FETCH EVENTS
  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events/all");
      setEvents(res.data);
    } catch (err) {
      toast.error("Failed to load events ❌");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // ADD EVENT
  const handleAdd = async () => {
    if (!title || !image) {
      toast.error("Please fill all fields ❌");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/events/add", formData);

      toast.success("Event Added Successfully 🎉");

      setTitle("");
      setImage(null);
      setPreview(null);
      fetchEvents();
    } catch (err) {
      toast.error("Something went wrong ❌");
    }
  };

  // DELETE EVENT
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/delete/${id}`);
      toast.success("Event Image Deleted 🗑️");
      fetchEvents();
    } catch (err) {
      toast.error("Delete failed ❌");
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* ✅ TOASTER (YAHI ADD KIYA) */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-green-500">
          Manage School Events
        </h1>
        <p className="text-gray-500">
          Add, update and manage all your school event images easily.
        </p>
      </div>

      {/* ADD EVENT */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">

        <h2 className="text-xl font-semibold mb-4 text-gray-600">
          ➕ Add New Event
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          {/* TITLE */}
          <input
            type="text"
            placeholder="Enter Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          {/* FILE */}
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
              setPreview(URL.createObjectURL(e.target.files[0]));
            }}
            className="border p-2 rounded-lg"
          />

          {/* BUTTON */}
          <button
            onClick={handleAdd}
            className="bg-gradient-to-r from-green-600 to-emerald-400 text-white rounded-lg px-4 py-3 font-semibold hover:scale-105 transition"
          >
            Add Event
          </button>
        </div>

        {/* PREVIEW */}
        {preview && (
          <div className="mt-6">
            <p className="text-gray-500 mb-2">Preview:</p>
            <img
              src={preview}
              className="h-40 rounded-xl object-cover"
            />
          </div>
        )}
      </div>

      {/* EVENTS LIST */}
      <div>

        <h2 className="text-xl font-semibold mb-6 text-gray-700">
           All Events
        </h2>

        {events.length === 0 ? (
          <p className="text-gray-400">No events found...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {events.map((ev, index) => (
              <motion.div
                key={ev._id}
                className="bg-white rounded-2xl shadow-md overflow-hidden relative group"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >

                {/* IMAGE */}
                <img
                  src={`http://localhost:5000/uploads/${ev.image}`}
                  className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
                  alt=""
                />

                {/* TITLE */}
                <div className="p-4">
                  <p className="font-semibold text-gray-800">
                    {ev.title}
                  </p>
                </div>

                {/* DELETE */}
                <button
                  onClick={() => handleDelete(ev._id)}
                  className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition"
                >
                  Delete
                </button>

              </motion.div>
            ))}

          </div>
        )}
      </div>

    </div>
  );
};

export default ManageEvents;