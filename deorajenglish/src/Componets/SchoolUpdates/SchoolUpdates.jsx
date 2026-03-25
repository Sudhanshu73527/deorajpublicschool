import React, { useEffect, useState } from "react";
import { FaBullhorn, FaAward, FaCalendarAlt } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";
import axios from "axios";

const Card = ({ title, icon, items }) => {
  const [open, setOpen] = useState(null);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-2xl backdrop-blur-xl bg-white/80 border border-green-100 shadow-xl overflow-hidden"
    >
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 flex items-center gap-3 font-semibold text-lg">
        <span className="text-xl">{icon}</span>
        {title}
      </div>

      <div className="p-5 space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => setOpen(open === index ? null : index)}
            className="bg-gray-100 hover:bg-green-50 transition rounded-xl p-4 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-green-600 text-sm font-semibold">
                  {item.date}
                </p>
                <p className="text-gray-700 font-medium text-sm">
                  {item.title}
                </p>
              </div>

              <motion.div animate={{ rotate: open === index ? 180 : 0 }}>
                <IoChevronDown className="text-red-500 text-xl" />
              </motion.div>
            </div>

            {open === index && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-600 text-sm mt-3"
              >
                {item.desc}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const UpdatesSection = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/updates/all");

    const data = res.data;

    setAnnouncements(data.filter(item => item.type === "announcement"));
    setAchievements(data.filter(item => item.type === "achievement"));
    setEvents(data.filter(item => item.type === "event"));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">

          <Card title="Announcement" icon={<FaBullhorn />} items={announcements} />

          <Card title="Achievements" icon={<FaAward />} items={achievements} />

          <Card title="Upcoming Events" icon={<FaCalendarAlt />} items={events} />

        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;