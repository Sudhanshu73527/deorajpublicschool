import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Schoolimage = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const res = await axios.get("https://deorajpublicschool.onrender.com/api/gallery/all");
    setImages(res.data);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl text-center mb-10 font-bold">
          Our School Moments
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img) => (
            <motion.div key={img._id} whileHover={{ scale: 1.05 }}>
              <img
                src={`https://deorajpublicschool.onrender.com/uploads/${img.image}`}
                className="rounded-xl h-[250px] w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/gallery">
            <button className="bg-green-600 text-white px-6 py-2 rounded cursor-pointer">
              View Gallery
            </button> 
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Schoolimage;