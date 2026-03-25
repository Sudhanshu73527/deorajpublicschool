import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Pre-Primary",
    desc: "Our Pre-Primary section focuses on joyful learning through play, activities, and interaction. We help children develop basic language skills, creativity, social habits, and confidence in a fun and caring environment.",
    bg: "bg-blue-500",
  },
  {
    title: "Primary",
    desc: "In the Primary section, students build a strong academic foundation in subjects like English, Mathematics, and Environmental Studies. Learning is made interactive to improve understanding and curiosity.",
    bg: "bg-orange-500",
  },

  {
    title: "Middle School (6th - 8th)",
    desc: "Middle School prepares students for higher education with deeper subject knowledge, critical thinking, and problem-solving skills. Real-life applications and discipline are key focuses.",
    bg: "bg-purple-500",
  },
];

const AcademicCards = () => {
  return (
    <div className="py-16 px-4 md:px-10 bg-gray-100">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-gray-800">
        Academic Sections
      </h2>

      <div className="flex flex-col gap-10 max-w-5xl mx-auto">
        {sections.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`relative overflow-hidden rounded-[40px] p-8 md:p-12 shadow-xl flex flex-col items-center justify-center text-center gap-4 text-white ${item.bg}`}
          >
            {/* Curved Top Shape */}
            <div className="absolute top-0 left-0 w-full h-20 bg-white/10 rounded-b-[60%]"></div>

            {/* Curved Bottom Shape */}
            <div className="absolute bottom-0 right-0 w-full h-20 bg-black/10 rounded-t-[60%]"></div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-[40px] border-2 border-white/20"></div>

            <h3 className="text-2xl md:text-3xl font-bold z-10">
              {item.title}
            </h3>

            <p className="text-white/90 text-sm md:text-base max-w-2xl z-10">
              {item.desc}
            </p>

            {/* <button className="mt-3 px-6 py-2 bg-white text-gray-800 rounded-full font-medium hover:scale-105 transition z-10 shadow-md">
              Explore →
            </button> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AcademicCards;