import React from "react";
import {
  FaChalkboardTeacher,
  FaGraduationCap,
  FaSchool,
  FaUsers
} from "react-icons/fa";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Highly Qualified Teachers",
    desc: "Our dedicated teachers inspire students with innovative teaching methods, ensuring every child receives personal attention and quality education.",
    icon: <FaChalkboardTeacher />,
    bg: "from-[#FFD54F] to-[#FFC107]",
    tag: "Experienced Faculty"
  },
  {
    title: "Strong Academic Foundation",
    desc: "A well-structured curriculum that builds knowledge, critical thinking, and prepares students for higher education and future success.",
    icon: <FaGraduationCap />,
    bg: "from-[#B71C1C] to-[#A30000]",
    tag: "Quality Education"
  },
  {
    title: "Modern Infrastructure",
    desc: "Smart classrooms, well-equipped labs, a rich library, and sports facilities provide students with the perfect environment to learn and grow.",
    icon: <FaSchool />,
    bg: "from-[#145A32] to-[#0B3D2E]",
    tag: "Advanced Facilities"
  },
  {
    title: "All-Round Development",
    desc: "We focus on leadership, creativity, discipline, and confidence so students grow academically, socially, and emotionally.",
    icon: <FaUsers />,
    bg: "from-[#1A237E] to-[#0B0F3F]",
    tag: "Holistic Growth"
  }
];

const RCISSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1B1464] leading-snug mb-5">
            Deoraj Public 
             English School <br />
            <span className="text-[#2563EB]"> Sikta, Lauriya</span>
          </h2>

          <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0">
            Deoraj Public English School is committed to providing quality
            education in a safe and inspiring environment. Our mission is to
            nurture young minds with strong academic knowledge, discipline,
            creativity, and moral values to prepare them for a bright future.
          </p>

          <button className="bg-[#3B82F6] hover:bg-[#2563EB] transition-all duration-300 
          text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl">
            Learn More
          </button>
          
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl p-7 sm:p-8 text-white 
              bg-gradient-to-br ${card.bg}
              shadow-lg transition-all duration-500 
              hover:-translate-y-1 hover:shadow-2xl group
              text-center sm:text-left`}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 
              group-hover:opacity-100 transition"></div>

              <div className="relative z-10 w-14 h-14 mx-auto sm:mx-0 mb-4 
              flex items-center justify-center rounded-full 
              bg-white/20 backdrop-blur-md text-3xl shadow-md">
                {card.icon}
              </div>

              <span className="relative z-10 text-xs uppercase tracking-widest opacity-90 mb-2 block">
                {card.tag}
              </span>

              <h3 className="relative z-10 text-lg lg:text-xl font-bold mb-3">
                {card.title}
              </h3>

              <div className="relative z-10 w-10 h-[2px] bg-white/40 mb-4 mx-auto sm:mx-0"></div>

              <p className="relative z-10 text-sm leading-relaxed opacity-95">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RCISSection;