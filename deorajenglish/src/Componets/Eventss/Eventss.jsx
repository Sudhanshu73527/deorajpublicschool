import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Eventss = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events/all");
      setEvents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (events.length === 0) return null;

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        {/* <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-400 text-transparent bg-clip-text">
            School Events & Activities
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Explore the vibrant moments, celebrations, and achievements from our campus life.
          </p>
        </div> */}

        <div className="text-center mb-14">
  <p className="text-green-600 font-semibold uppercase tracking-wide">
    School Events & Activities
  </p>
  <h2 className="text-2xl md:text-5xl font-bold text-gray-600">
                Explore the vibrant moments, celebrations, and achievements from our campus life.

  </h2>
</div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* BIG CARD */}
          <motion.div
            className="relative md:row-span-2 overflow-hidden rounded-3xl shadow-xl group"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={`http://localhost:5000/uploads/${events[0]?.image}`}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              alt=""
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

            {/* Text */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">
                {events[0]?.title}
              </h3>
              <p className="text-sm opacity-80">Featured Event</p>
            </div>
          </motion.div>

          {/* SMALL CARDS */}
          {events.slice(1).map((ev, index) => (
            <motion.div
              key={ev._id}
              className="relative overflow-hidden rounded-3xl shadow-md group"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={`http://localhost:5000/uploads/${ev.image}`}
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-110"
                alt=""
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition"></div>

              {/* Text */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">
                  {ev.title}
                </h3>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Eventss;