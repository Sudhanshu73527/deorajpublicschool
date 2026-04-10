import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { UploadCloud, Trash2 } from "lucide-react";

const API = "https://deorajpublicschool.onrender.com/api/school-gallery";

const AdminGallery = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);

  // ✅ FETCH
  const fetchImages = async () => {
    try {
      const res = await axios.get(API);
      setImages(res.data);
    } catch (err) {
      console.error("Fetch Error:", err);
      alert("Failed to load images ❌");
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // ✅ IMAGE SELECT
  const handleImage = (file) => {
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // ✅ UPLOAD
  const handleUpload = async () => {
    if (!image) {
      alert("Please select image ❌");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);

      await axios.post(API, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Uploaded Successfully ✅");

      setImage(null);
      setPreview(null);
      setTitle("");
      fetchImages();
    } catch (err) {
      console.error("Upload Error:", err);
      alert("Upload failed ❌");
    }
  };

  // ✅ DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this image?")) return;

    try {
      await axios.delete(`${API}/${id}`);
      alert("Deleted ✅");
      fetchImages();
    } catch (err) {
      console.error("Delete Error:", err);
      alert("Delete failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-4 md:p-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-2xl md:text-4xl font-bold text-green-600 mb-6">
          School Gallery Management
        </h1>

        {/* UPLOAD */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Enter Image Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-3 rounded-lg"
            />

            <label className="flex items-center justify-center gap-2 cursor-pointer bg-gray-100 rounded-lg p-3">
              <UploadCloud size={18} /> Select Image
              <input
                type="file"
                hidden
                onChange={(e) => handleImage(e.target.files[0])}
              />
            </label>

          </div>

          {preview && (
            <img
              src={preview}
              className="mt-4 h-24 w-24 object-cover rounded"
            />
          )}

          <button
            onClick={handleUpload}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Upload Image
          </button>
        </div>

        {/* GALLERY */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img) => (
            <div key={img._id} className="bg-white rounded-xl shadow">

              <img
                src={img.image}
                className="h-40 w-full object-cover"
              />

              <div className="p-3 flex justify-between items-center">
                <p className="text-sm">{img.title || "Untitled"}</p>

                <button onClick={() => handleDelete(img._id)}>
                  <Trash2 size={16} color="red" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AdminGallery;