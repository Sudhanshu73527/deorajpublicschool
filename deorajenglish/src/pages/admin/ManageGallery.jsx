import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { FaUpload, FaTrash } from "react-icons/fa";

const ManageGallery = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // FETCH
  const fetchImages = async () => {
    const res = await axios.get("http://localhost:5000/api/gallery/all");
    setImages(res.data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // HANDLE FILE
  const handleFile = (file) => {
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // UPLOAD
  const handleUpload = async () => {
    if (!image) return toast.error("Please select image");

    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);
      await axios.post(
        "http://localhost:5000/api/gallery/upload",
        formData
      );

      toast.success("Uploaded Successfully");
      setImage(null);
      setPreview(null);
      setLoading(false);
      fetchImages();
    } catch {
      setLoading(false);
      toast.error("Upload failed");
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/gallery/delete/${id}`
    );
    toast("Deleted", { icon: "🗑️" });
    fetchImages();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-4 md:p-10">
      <Toaster position="top-right" />

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          🖼️ Manage Gallery
        </h1>
      </div>

      {/* GRID */}
      <div className="grid xl:grid-cols-3 gap-6">

        {/* UPLOAD PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl"
        >
          <h2 className="font-semibold mb-4 text-gray-700">
            Upload Image
          </h2>

          {/* DROP AREA */}
          <div
            className="border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer hover:bg-gray-50"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <FaUpload className="mx-auto text-2xl mb-2 text-gray-500" />
            <p className="text-sm text-gray-500">
              Click to upload or drag image
            </p>
          </div>

          <input
            id="fileInput"
            type="file"
            hidden
            onChange={(e) => handleFile(e.target.files[0])}
          />

          {/* PREVIEW */}
          {preview && (
            <div className="mt-4">
              <img
                src={preview}
                alt="preview"
                className="w-full h-40 object-cover rounded-xl shadow"
              />
            </div>
          )}

          {/* BUTTON */}
          <button
            onClick={handleUpload}
            disabled={loading}
            className="w-full mt-4 bg-gradient-to-r from-green-600 to-green-800 text-white py-3 rounded-xl font-semibold shadow-lg"
          >
            {loading ? "Uploading..." : "Upload Image"}
          </button>
        </motion.div>

        {/* GALLERY LIST */}
        <div className="xl:col-span-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {images.map((img) => (
            <motion.div
              key={img._id}
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={`http://localhost:5000/uploads/${img.image}`}
                className="h-40 w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <button
                  onClick={() => handleDelete(img._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg flex items-center gap-1"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageGallery;