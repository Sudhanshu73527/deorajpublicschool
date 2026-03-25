import React, { useEffect, useState } from "react";
import axios from "axios";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const UpcomingEvents = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("https://deorajpublicschool.onrender.com/api/upcoming/all");
    setEvents(res.data);
  };

  return (
    <section className="py-20 px-5 bg-slate-50">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
       <div className="text-center mb-14">
  <p className="text-green-600 font-semibold uppercase tracking-wide">
    Events
  </p>
  <h2 className="text-4xl md:text-5xl font-bold text-gray-600">
    Upcoming Activities
  </h2>
</div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {events.map((event, index) => (
            <motion.div
              key={event._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >

              {/* ✅ FIXED IMAGE (NO SHRINK) */}
              <div className="w-44 h-44 flex-shrink-0">
                <img
                  src={`https://deorajpublicschool.onrender.com/uploads/${event.image}`}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col justify-between w-full">

                <div>
                  {/* DATE */}
                  <div className="flex items-center gap-2 text-yellow-500 text-sm mb-2">
                    <CalendarDays size={16} />
                    {event.date}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold mb-1">
                    {event.title}
                  </h3>

                  {/* ✅ DESCRIPTION FIX */}
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {event.description}
                  </p>
                </div>

                {/* BUTTON */}
                {/* <button className="mt-3 text-sm text-blue-600 hover:underline">
                  View More →
                </button> */}

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default UpcomingEvents;