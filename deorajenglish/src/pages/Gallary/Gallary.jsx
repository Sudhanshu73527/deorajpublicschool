import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Gallary = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const res = await axios.get("https://deorajpublicschool.onrender.com/api/school-gallery");
    setImages(res.data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-800">
            Our School Gallery
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Glimpses of our campus, activities & memories
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={img._id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={`https://deorajpublicschool.onrender.com/uploads/${img.image}`}
                alt={img.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />

              <div className="absolute bottom-0 bg-black/50 w-full text-white text-center py-2 opacity-0 group-hover:opacity-100 transition">
                {img.title}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallary;