import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Ourinfra = () => {
  const [infraData, setInfraData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/infrastructure");
    setInfraData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Infrastructure
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {infraData.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={`http://localhost:5000/uploads/${item.image}`}
                className="w-full h-[320px] object-cover group-hover:scale-110 transition"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ourinfra;