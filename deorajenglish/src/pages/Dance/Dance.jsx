import React from "react";
import { motion } from "framer-motion";
import { FaMusic, FaTrophy, FaFire } from "react-icons/fa";

const Dance = () => {
  return (
    <section className="relative py-20 px-6 md:px-20 bg-[#020617] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-wide"
        >
          Dance & Performance Activities
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg"
        >
          We encourage students to express themselves through dance, building confidence,
          energy, and creativity in every performance.
        </motion.p>
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        <div className="grid md:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="flex flex-col items-start">
            <FaFire className="text-pink-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Weekly Dance Competitions
            </h3>
            <p className="text-gray-400">
              Every Saturday, we organize energetic dance competitions where
              students showcase their moves and creativity.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start">
            <FaMusic className="text-orange-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Stage Performance Experience
            </h3>
            <p className="text-gray-400">
              Students perform in front of an audience, helping them gain
              confidence, rhythm, and strong stage presence.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start">
            <FaTrophy className="text-yellow-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Awards & Recognition
            </h3>
            <p className="text-gray-400">
              Talented performers are recognized and rewarded, encouraging
              continuous improvement and passion for dance.
            </p>
          </div>

        </div>
      </motion.div>

      {/* Highlight Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-12 text-center"
      >
        <p className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full text-sm md:text-base font-medium shadow-lg">
          💃 Every Saturday: Dance • Energy • Expression • Confidence
        </p>
      </motion.div>

    </section>
  );
};

export default Dance;