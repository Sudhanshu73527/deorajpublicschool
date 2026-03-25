import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import axios from "axios";

const Admissionnoti = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/api/admissions/all");
      setNotifications(res.data);
    };
    fetchData();
  }, []);

  if (notifications.length === 0) return null;

  const n = notifications[0]; // Latest notification

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative">
            <img src={n.image ? `http://localhost:5000/uploads/${n.image}` : "/dev1.png"} alt="admission" className="rounded-3xl shadow-2xl w-full h-[400px] object-cover" />
            <div className="absolute top-6 left-6 bg-green-600 text-white px-5 py-2 rounded-full text-sm shadow-lg">Admissions Open</div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{n.title}</h2>
            <p className="text-gray-600 text-lg mb-8">{n.description}</p>

            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-green-600" />
                <div>
                  <p className="text-xs text-gray-500">Start Date</p>
                  <p className="font-semibold text-gray-800">{n.startDate}</p>
                </div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-red-500" />
                <div>
                  <p className="text-xs text-gray-500">Last Date</p>
                  <p className="font-semibold text-gray-800">{n.endDate}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full shadow-md transition">
                Apply Now <FaArrowRight />
              </button>
              <button className="text-gray-700 border-b-2 border-gray-300 hover:border-green-600 transition">Learn More</button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Admissionnoti;