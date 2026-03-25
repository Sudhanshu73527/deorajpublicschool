import React from "react";
import { motion } from "framer-motion";
import { FaMusic, FaTrophy, FaMicrophone } from "react-icons/fa";

const Music = () => {
  return (
    <section className="relative py-20 px-6 md:px-20 bg-[#0f172a] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-wide"
        >
          Music & Talent Development
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg"
        >
          We create a vibrant platform where students explore their passion for music,
          perform confidently, and shine every week.
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
            <FaMusic className="text-purple-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Weekly Music Competitions
            </h3>
            <p className="text-gray-400">
              Every Saturday, we organize engaging music competitions where
              students actively participate and showcase their talent.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start">
            <FaMicrophone className="text-pink-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Live Stage Experience
            </h3>
            <p className="text-gray-400">
              Students perform in front of an audience, helping them build
              confidence, communication skills, and stage presence.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start">
            <FaTrophy className="text-yellow-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Recognition & Rewards
            </h3>
            <p className="text-gray-400">
              Outstanding performers are recognized and rewarded, motivating
              students to continuously improve and excel.
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
        <p className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm md:text-base font-medium shadow-lg">
          🎤 Every Saturday: Music • Performance • Confidence • Growth
        </p>
      </motion.div>

    </section>
  );
};

export default Music;