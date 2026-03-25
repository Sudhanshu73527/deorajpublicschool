import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

const Visionmission = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Shaping the future through quality education, strong values, and innovation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative p-10 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-green-400 transition duration-300 group"
          >
            {/* Icon */}
            <div className="text-green-400 text-5xl mb-6 group-hover:scale-110 transition">
              <FaEye />
            </div>

            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>

            <p className="text-gray-300 leading-relaxed">
              To empower every student with knowledge, confidence, and strong moral values,
              enabling them to become responsible global citizens and future leaders.
              We envision a learning environment where curiosity is encouraged,
              creativity is nurtured, and excellence is achieved.
            </p>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-green-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative p-10 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-green-400 transition duration-300 group"
          >
            {/* Icon */}
            <div className="text-green-400 text-5xl mb-6 group-hover:scale-110 transition">
              <FaBullseye />
            </div>

            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>

            <p className="text-gray-300 leading-relaxed">
              Our mission is to provide high-quality education through modern
              teaching methods, innovative practices, and a supportive environment.
              We focus on developing academic excellence, discipline, creativity,
              and life skills that prepare students for real-world challenges.
            </p>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-green-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Visionmission;