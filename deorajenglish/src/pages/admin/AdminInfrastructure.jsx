import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const AdminInfrastructure = () => {
  const [form, setForm] = useState({
    title: "",
    desc: "",
  });

  const [image, setImage] = useState(null);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/infrastructure");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", form.title);
      formData.append("desc", form.desc);

      await axios.post("http://localhost:5000/api/infrastructure", formData);

      setMessage("✅ Upload Successful!");
      setForm({ title: "", desc: "" });
      setImage(null);
      fetchData();

      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      setMessage("❌ Upload Failed!");
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/infrastructure/${id}`);
    fetchData();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Infrastructure Management
      </h1>

      {/* Form Card */}
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Upload Infrastructure</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="title"
            value={form.title}
            placeholder="Title"
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            name="desc"
            value={form.desc}
            placeholder="Description"
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="mt-4"
        />

        <button
          onClick={handleUpload}
          className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Upload
        </button>

        {/* Success Message */}
        {message && (
          <p className="mt-4 text-center font-medium text-green-600">
            {message}
          </p>
        )}
      </div>

      {/* Data Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.map((item) => (
          <motion.div
            key={item._id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={`http://localhost:5000/uploads/${item.image}`}
              className="h-40 w-full object-cover"
              alt="infrastructure"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.desc}</p>

              <button
                onClick={() => handleDelete(item._id)}
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminInfrastructure;