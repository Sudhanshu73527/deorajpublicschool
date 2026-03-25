import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { UploadCloud, Trash2 } from "lucide-react";

const AdminGallery = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/school-gallery");
      setImages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleImage = (file) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);

      await axios.post("http://localhost:5000/api/school-gallery", formData);

      setImage(null);
      setPreview(null);
      setTitle("");
      fetchImages();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/school-gallery/${id}`);
      fetchImages();
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
          className="text-2xl md:text-4xl font-bold text-green-600 mb-6"
        >
          School Gallery Management
        </motion.h1>

        {/* UPLOAD CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter Image Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
            />

            <label className="flex items-center justify-center gap-2 cursor-pointer bg-gray-100 rounded-lg p-3 hover:bg-gray-200">
              <UploadCloud size={18} /> Select Image
              <input
                type="file"
                hidden
                onChange={(e) => handleImage(e.target.files[0])}
              />
            </label>
          </div>

          {/* PREVIEW + BUTTON */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="h-24 w-24 object-cover rounded-lg shadow"
              />
            )}

            <button
              onClick={handleUpload}
              className="ml-auto bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow"
            >
              Upload Image
            </button>
          </div>
        </motion.div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={img._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={`http://localhost:5000/uploads/${img.image}`}
                  alt=""
                  className="h-40 w-full object-cover group-hover:scale-105 transition"
                />

                {/* DELETE BUTTON OVERLAY */}
                <button
                  onClick={() => handleDelete(img._id)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="p-3">
                <p className="text-sm font-medium text-gray-700 truncate">
                  {img.title || "Untitled"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminGallery;